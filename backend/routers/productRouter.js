import expressAsyncHandler from 'express-async-handler';
import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
import { isAdmin, isAuth, isSellerOrAdmin } from '../util.js';


const productRouter = express.Router();

productRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const name = req.query.name || '';
    const category = req.query.category || '';
    const seller = req.query.seller || '';
    const order = req.query.order || '';
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
    const rating =
      req.query.rating && Number(req.query.rating) !== 0
        ? Number(req.query.rating)
        : 0;

    const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const sellerFilter = seller ? { seller } : {};
    const categoryFilter = category ? { category } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
    const ratingFilter = rating ? { rating: { $gte: rating } } : {};
    const sortOrder =
      order === 'lowest'
        ? { price: 1 }
        : order === 'highest'
        ? { price: -1 }
        : order === 'toprated'
        ? { rating: -1 }
        : { _id: -1 };
        const products = await Product.find({
            ...sellerFilter,
      ...nameFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
        }).sort(sortOrder);;
        res.send(products);
    })
);
productRouter.get(
    '/categories',
    expressAsyncHandler(async (req, res) => {
      const categories = await Product.find().distinct('category');
      res.send(categories);
    })
  );

productRouter.get(
    '/top-product',
    expressAsyncHandler(async (req,res) =>{
        const products = await Product.find({}).sort({ 'price': -1 }).limit(3);
        res.send(products);
    })
);

productRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        // await Product.remove({});
        const createProducts = await Product.insertMany(data.products);
        res.send({ createProducts });
    })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id).populate(
      'seller',
      'seller.name seller.logo seller.rating seller.numReviews'
    );
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.post(
    '/',
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async (req, res) => {
        const product = new Product({
            name: 'samle name ' + Date.now(),
            description: 'sample description',
            trangthai: true,
            kieudang: 'High',
            dongsanpham: 'vi du',
            category: 'same cate',
            image: '/images/giay1.jpg',
            price: 0,
            ngaynhap: Date.now(),
            mau: 'Do',
            brand: 'Nhan hieu',
            rating: 0,
            numreview: 0,
            soluongco: 0,
            isActive: true,
            seller: req.user._id,
        });
        const createdProduct = await product.save();
        res.send({ message: 'Sản phẩm đã được tạo', product: createdProduct });
    })
);
productRouter.put(
    '/:id',
    isAuth,
    isSellerOrAdmin,
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (product) {
            product.name = req.body.name;
            product.description = req.body.description;
            product.kieudang = req.body.kieudang;
            product.dongsanpham = req.body.dongsanpham;
            product.category = req.body.category;
            product.image = req.body.image;
            product.price = req.body.price;
            product.mau = req.body.mau;
            product.brand = req.body.brand;
            product.soluongco = req.body.soluongco;
            product.isActive = req.body.isActive;
            const updatedProduct = await product.save();
            res.send({ message: 'Product Updated', product: updatedProduct });
        } else {
            res.status(404).send({ message: 'Không tìm thấy sản phẩm!' });
        }
    })
);
productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const deleteProduct = await product.remove();
        res.send({ message: 'Sản phẩm đã được xóa!', product: deleteProduct });
      } else {
        res.status(404).send({ message: 'Không tìm thấy sản phẩm!' });
      }
    })
  );

  productRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      if (product.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: 'Bạn đã gửi một đánh giá!' });
      }
      const review1 = {
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      product.reviews.push(review1);
      product.numreview = product.reviews.length;
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: 'Đánh giá đã đươc tạo!',
        review1: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: 'Không tìm thấy sản phẩm!' });
    }
  })
);

export default productRouter;