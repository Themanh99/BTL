import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Yeuthich from '../models/yeuthichModel.js';
import { isAuth } from '../util.js';

const yeuthichRouter = express.Router();

yeuthichRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const yeuthichs = await Yeuthich.find({});
    res.send(yeuthichs);
  })
);

yeuthichRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const yeuthich = new Yeuthich({
        yeuthichItems: req.body.yeuthichItems,
        user: req.user._id,
    });
    const createdYeuthich = await yeuthich.save();
    res.status(201).send({message: 'Yêu thích mới vừa được tạo!' , yeuthich: createdYeuthich });
  })
);

export default yeuthichRouter;
