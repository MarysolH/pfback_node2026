import { Router } from 'express';
import { 
    getProducts, 
    getProductById, 
    createProduct,
    deleteProduct,
    updateProduct
} from '../controllers/products.controller.js';
import { authentication } from '../middlewares/authentication.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/create', authentication, createProduct);
router.put('/:id', authentication, updateProduct);
router.delete('/:id', authentication, deleteProduct);


export default router;