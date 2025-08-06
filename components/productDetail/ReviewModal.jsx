"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

export default function ReviewModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#2BB673] hover:bg-[#249d5f] text-white px-4 py-2 rounded-sm cursor-pointer text-lg font-semibold">
          Write a Review
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-5xl p-6 rounded-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Write a review
          </DialogTitle>
        </DialogHeader>

        <Separator />

        <form className="space-y-4 mt-2">
          {/* Name & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label className="text-lg text-[#212529] pb-2 font-medium">Name<span className="text-red-500">*</span></Label>
              <Input className="p-5 rounded-sm" required />
            </div>
            <div>
              <Label className="text-lg text-[#212529] pb-2 font-medium">Country<span className="text-red-500">*</span></Label>
              <select className="w-full p-2 border rounded-sm">
                <option value="">Choose One</option>
                <option value="IE">Ireland</option>
                <option value="UK">UK</option>
              </select>
            </div>
          </div>

          {/* Rating */}
          <div>
            <Label className="text-lg text-[#212529] pb-2 font-medium">Rating<span className="text-red-500">*</span></Label>
            <div className="flex space-x-1 text-xl pt-1">
              {[1, 2, 3, 4, 5].map(i => <span key={i}>☆</span>)}
            </div>
          </div>

          {/* Title */}
          <div>
            <Label className="text-lg text-[#212529] pb-2 font-medium">Review Title<span className="text-red-500">*</span></Label>
            <Input className="p-5 rounded-sm" required />
          </div>

          {/* Description */}
          <div>
            <Label className="text-lg text-[#212529] pb-2 font-medium">Review Description<span className="text-red-500">*</span></Label>
            <Textarea className="p-14 rounded-sm" rows={4} required />
          </div>

          {/* File Upload */}
          <div>
            <Label className="text-lg text-[#212529] pb-2 font-medium">Upload Images (Optional)</Label>
            <Input type="file" multiple />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <Button type="submit" className="bg-[#2BB673] text-white cursor-pointer">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
