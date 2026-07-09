import { 
    findAllProducts, 
    findProductById,
    saveProduct,
    deleteProduct,
    updateProduct
} from '../models/products.model.js';


export const getAllProductsService = async () => {
    return await findAllProducts();
};


export const getProductByIdService = async (id) => {
    return await findProductById(id);
};


export const createProductService = async (product) => {

    if (!product.name || product.name.trim() === '') {
        throw new Error('El nombre del producto es obligatorio');
    }

    if (product.price <= 0) {
        throw new Error('El precio debe ser mayor a 0');
    }

    if (product.stock < 0) {
        throw new Error('El stock no puede ser negativo');
    }

    return await saveProduct(product);
};


export const deleteProductService = async (id) => {

    const deleted = await deleteProduct(id);

    if (!deleted) {
        throw new Error('Producto no encontrado');
    }

    return {
        message: 'Producto eliminado correctamente'
    };
};


export const updateProductService = async (id, data) => {

    if (data.price !== undefined && data.price <= 0) {
        throw new Error('El precio debe ser mayor a 0');
    }

    if (data.stock !== undefined && data.stock < 0) {
        throw new Error('El stock no puede ser negativo');
    }

    const updated = await updateProduct(id, data);

    if (!updated) {
        throw new Error('Producto no encontrado');
    }

    return {
        message: 'Producto actualizado correctamente'
    };
};