import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      description: { type: String, required: true },
      trangthai:{ type: Boolean , required: true},
      kieudang: { type: String , required: true},
      dongsanpham: { type: String , required: true},
      category: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      ngaynhap: { type: String , required: true},
      mau: { type: String , required: true},
      brand: { type: String, required: true },
      rating: { type: Number, required: true },
      numreview: { type: Number, required: true },
      soluongco: { type: Number, required: true },
      isActive: { type: Boolean , required: true},
      seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      reviews: [reviewSchema],
    },
    {
      timestamps: true,
    }
  );
  const Product = mongoose.model('Product', productSchema);
  
  export default Product;