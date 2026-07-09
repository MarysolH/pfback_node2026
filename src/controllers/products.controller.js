import { 
    getAllProductsService, 
    getProductByIdService, 
    createProductService,
    deleteProductService,
    updateProductService 
} from '../services/products.service.js';


export const getProducts = async (req, res) => {

    try {

        const products = await getAllProductsService();

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


export const getProductById = async (req, res) => {

    try {

        const id = req.params.id;

        const product = await getProductByIdService(id);

        if (!product) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};


export const createProduct = async (req, res) => {

    try {

        const product = req.body;

        const result = await createProductService(product);

        res.status(201).json(result);

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }

};


export const deleteProduct = async (req, res) => {

    try {

        const id = req.params.id;

        const result = await deleteProductService(id);

        res.status(200).json(result);

    } catch (error) {

        res.status(404).json({
            error: error.message
        });

    }

};


export const updateProduct = async (req, res) => {

    try {

        const id = req.params.id;
        const data = req.body;

        if (!id) {
            return res.status(400).json({
                error: "ID del producto requerido"
            });
        }

        const result = await updateProductService(id, data);

        res.status(200).json(result);

    } catch (error) {

        res.status(404).json({
            error: error.message
        });

    }

};