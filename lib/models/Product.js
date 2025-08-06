import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  countryCode: { type: String, required: true }, // matches keys in pricingConfig
  basePrice: { type: Number, required: true },
  perPersonPrice: { type: Number, required: true },
  canvasOptions: [{
    id: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
    price: { type: Number, required: true }
  }],
  frameOptions: [{
    id: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
    price: { type: Number, required: true }
  }],
  reviews: [reviewSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;