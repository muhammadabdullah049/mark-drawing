import connectDB from '@/lib/connectDB';
import Product from '@/lib/models/Product';
import { NextResponse } from 'next/server';
export async function POST(request, { params }) {
  try {
    await connectDB();
    const { userId, rating, comment } = await request.json();
    const { id } = await params; // Key fix: await the params
    
    if (!userId || !rating || !comment) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const product = await Product.findByIdAndUpdate(
      id,
      { $push: { reviews: { userId, rating, comment } } },
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}