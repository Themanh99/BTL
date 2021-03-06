import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth , isAdmin , isSellerOrAdmin , mail, payOrderEmailTemplate} from '../util.js';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';


const orderRouter = express.Router();

orderRouter.get(
  '/summary',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const usersnew = await User.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const dailyOrders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          orders: { $sum: 1 },
          sales: { $sum: '$totalPrice' },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    const monthOrders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
          orders: { $sum: 1 },
          sales: { $sum: '$totalPrice' },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    const productCategories = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({ users, orders, dailyOrders, productCategories ,usersnew, monthOrders});
  })
);

orderRouter.get(
  '/',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const seller = req.query.seller || '';
    const sellerFilter = seller ? { seller } : {};

    const orders = await Order.find({ ...sellerFilter }).sort({'createdAt':-1}).populate(
      'user',
      'name'
    );
    res.send(orders);
  })
);

orderRouter.get(
  '/orderhistory',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({'createdAt':-1});
    res.send(orders);
  })
);

orderRouter.post('/',isAuth, expressAsyncHandler(async(req,res) => {
    if(req.body.orderItems.length ===0){
        res.status(400).send({message: 'Gi??? h??ng ??ang tr???ng!'});
    }
    else{
        const order = new Order({
            seller: req.body.orderItems[0].seller,
            orderItems: req.body.orderItems,
            ConfirmInfo: req.body.ConfirmInfo,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
          });
        const createOrder = await order.save();
        res.status(201).send({message: 'Order m???i v???a ???????c t???o!' , order: createOrder});
    }
}));

orderRouter.get('/:id' , isAuth , expressAsyncHandler(async(req,res) => {
    const order  = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    }else{
        res.status(404).send({message : 'Order not found'});
    }
}))

orderRouter.put(
    '/:id/pay',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: 'themanhchu99@gmail.com',
        };
        mail().messages().send(
          {
            from: 'Anh Cherry <sandboxe62726cf5e644aab9694c40bd14afaa8.mailgun.org>',
            to: `<${order.user.email}>`,
            subject: `New order ${order._id}`,
            html: payOrderEmailTemplate(order),
          },
          (error, body) => {
            if (error) {
              console.log(error);
            } else {
              console.log(body);
            }
          }
        );
        const updatedOrder = await order.save();
        res.send({ message: 'Order ???? thanh to??n!', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

  orderRouter.delete(
    '/:id',
    isAuth,
    // isAdmin,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        const deleteOrder = await order.remove();
        res.send({ message: 'Order ???? ???????c x??a!', order: deleteOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );
  orderRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        if (order) {
          order.isPaid = true;
          order.paidAt = Date.now();
          order.isDelivered = true;
          order.deliveredAt = Date.now();
          order.trangthaidon = req.body.trangthaidon;
          const updatedOrder = await order.save();
          res.send({ message: 'Order Updated', order: updatedOrder });
        } else {
            res.status(404).send({ message: 'Kh??ng t??m th???y order!' });
        }
    })
);
  
  orderRouter.put(
    '/:id/deliver',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
  
        const updatedOrder = await order.save();
        res.send({ message: 'Order Delivered', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );

export default orderRouter;