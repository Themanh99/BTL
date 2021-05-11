import mongoose from 'mongoose';

const yeuthichSchema = new mongoose.Schema(
    {
      yeuthichItems:[{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          }
      }],
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
      timestamps: true,
    }
  );
  const Yeuthich = mongoose.model('Yeuthich', yeuthichSchema);
  
  export default Yeuthich;