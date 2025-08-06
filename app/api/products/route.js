import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Product from '@/lib/models/Product';
import { v2 as cloudinary } from 'cloudinary';


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Base pricing template
const pricingTemplate = {
  countryName: "Custom Region",
  basePrice: () => 10 + Math.floor(Math.random() * 15), // $10-$25
  perPerson: () => 3 + Math.floor(Math.random() * 5),  // $3-$8
  canvasOptions: [
      { id: "canvas-uk-a4", label: 'A4 Canvas (12"x8")', value: "a4", price: () => 5 + Math.floor(Math.random() * 10), custom: false },
      { id: "canvas-uk-a3", label: 'A3 Canvas (16"x12")', value: "a3", price: () => 12 + Math.floor(Math.random() * 12), custom: false },
      { id: "canvas-uk-a2", label: 'A2 Canvas (24"x16")', value: "a2", price: () => 16 + Math.floor(Math.random() * 16), custom: false },
      { id: "canvas-uk-a1", label: 'A1 Canvas (30"x20")', value: "a1", price: () => 22 + Math.floor(Math.random() * 22), custom: false },
      { id: "canvas-uk-a0", label: 'A0 Canvas (36"x24")', value: "a0", price: () => 30 + Math.floor(Math.random() * 30), custom: false },
      { id: "canvas-uk-digital", label: "Digital Copy only", value: "digital", price: () => 0 + Math.floor(Math.random() * 0), custom: false },
    ],
  frameOptions: [
      { id: "frame-uk-a4", label: 'A4 Frame (8" x 11")', value: "a4", price: () => 12 + Math.floor(Math.random() * 12), custom: false },
      { id: "frame-uk-a3", label: 'A3 Frame (11" x 16")', value: "a3", price: () => 14 + Math.floor(Math.random() * 14), custom: false },
      { id: "frame-uk-a2", label: 'A2 Frame (16" x 23")', value: "a2", price: () => 18 + Math.floor(Math.random() * 18), custom: false },
      { id: "frame-uk-a1", label: 'A1 Frame (23" x 33")', value: "a1", price: () => 24 + Math.floor(Math.random() * 24), custom: false },
      { id: "frame-uk-email", label: "Email Copy Only", value: "email", price: () => 0 + Math.floor(Math.random() * 0), custom: false },
    ],
};

// Pricing configuration (same as your original)
// const pricingConfig = {
//   "9": { // United Kingdom
//     countryName: "United Kingdom (UK)",
//     basePrice: 15.0,
//     perPerson: 4.0,
//     canvasOptions: [
//       { id: "canvas-uk-a4", label: 'A4 Canvas (12"x8")', value: "a4", price: 8.0 },
//       { id: "canvas-uk-a3", label: 'A3 Canvas (16"x12")', value: "a3", price: 12.0 },
//       { id: "canvas-uk-a2", label: 'A2 Canvas (24"x16")', value: "a2", price: 16.0 },
//       { id: "canvas-uk-a1", label: 'A1 Canvas (30"x20")', value: "a1", price: 22.0 },
//       { id: "canvas-uk-a0", label: 'A0 Canvas (36"x24")', value: "a0", price: 30.0 },
//       { id: "canvas-uk-digital", label: "Digital Copy only", value: "digital", price: 0.0 },
//     ],
//     frameOptions: [
//       { id: "frame-uk-a4", label: 'A4 Frame (8" x 11")', value: "a4", price: 12.0 },
//       { id: "frame-uk-a3", label: 'A3 Frame (11" x 16")', value: "a3", price: 14.0 },
//       { id: "frame-uk-a2", label: 'A2 Frame (16" x 23")', value: "a2", price: 18.0 },
//       { id: "frame-uk-a1", label: 'A1 Frame (23" x 33")', value: "a1", price: 24.0 },
//       { id: "frame-uk-email", label: "Email Copy Only", value: "email", price: 0.0 },
//     ],
//   },
//   // ... other countries ...
// };

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.description || !body.images || body.images.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Missing title, description, or images' },
        { status: 400 }
      );
    }

    // Generate random country ID
    const countryCode = Math.floor(10000000 + Math.random() * 90000000).toString();

    // Prepare pricing configuration
    const countryConfig = {
      ...pricingTemplate,
      countryName: `Region-${Math.floor(1000 + Math.random() * 9000)}`,
      basePrice: pricingTemplate.basePrice(),
      perPerson: pricingTemplate.perPerson(),
      canvasOptions: pricingTemplate.canvasOptions.map(opt => ({
        ...opt,
        price: typeof opt.price === 'function' ? opt.price() : opt.price
      })),
      frameOptions: pricingTemplate.frameOptions.map(opt => ({
        ...opt,
        price: typeof opt.price === 'function' ? opt.price() : opt.price
      }))
    };

    // Add custom canvas/frame if provided
    if (body.customCanvas) {
      countryConfig.canvasOptions.push({
        id: `canvas-custom-${Math.random().toString(36).substring(2, 8)}`,
        label: `Custom Canvas (${body.customCanvas.width}"x${body.customCanvas.height}")`,
        value: "custom",
        price: body.customCanvas.price || pricingTemplate.canvasOptions[0].price(),
        custom: true,
        dimensions: body.customCanvas
      });
    }

    if (body.customFrame) {
      countryConfig.frameOptions.push({
        id: `frame-custom-${Math.random().toString(36).substring(2, 8)}`,
        label: `Custom Frame (${body.customFrame.width}"x${body.customFrame.height}")`,
        value: "custom",
        price: body.customFrame.price || pricingTemplate.frameOptions[0].price(),
        custom: true,
        dimensions: body.customFrame
      });
    }

    // Upload images to Cloudinary
    const imageUrls = [];
    for (const base64Image of body.images) {
      const result = await cloudinary.uploader.upload(base64Image, {
        folder: 'product-images',
      });
      imageUrls.push(result.secure_url);
    }

    // Create product
    const product = await Product.create({
      title: body.title,
      description: body.description,
      images: imageUrls,
      countryCode,
      countryName: countryConfig.countryName,
      basePrice: countryConfig.basePrice,
      perPersonPrice: countryConfig.perPerson,
      canvasOptions: countryConfig.canvasOptions,
      frameOptions: countryConfig.frameOptions,
      reviews: []
    });

    return NextResponse.json(
      { success: true, data: product },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server error' },
      { status: 500 }
    );
  }
}
