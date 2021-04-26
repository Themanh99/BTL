import mongoose from 'mongoose';

const khuyenmaiSchema = new mongoose.Schema(
    {
      tenkm: { type: String, required: true, unique: true },
      giagiam: { type: Number, required: true },
      trangthai: { type: Boolean , required: true},
    },
    {
      timestamps: true,
    }
  );
  const Khuyenmai = mongoose.model('Khuyenmai', khuyenmaiSchema);
  
  export default Khuyenmai;