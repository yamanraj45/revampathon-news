import express from 'express'
import NewsController from '../controllers/newsController.js';
const router = express.Router()

const newsController = new NewsController();

router.post('/',newsController.createNews);
router.get('/',newsController.getAllNews);
router.get('/:id',newsController.getSingleNews);
router.put('/update/:id',newsController.updateNews);
router.delete('/delete/:id',newsController.deleteNews);

export default router;