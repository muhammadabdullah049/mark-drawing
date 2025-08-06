"use client";

import {
  Facebook,
  Loader2,
  LogOut,
  MessageCircle,
  Twitter,
} from "lucide-react";
import Image from "next/image";
// import { useRouter } from 'next/navigation';
import React, { startTransition, useState, useTransition } from "react";
import { Button } from "./ui/button";
import logo from "../public/assets/logo.png";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function Navbar({ authToken, userRole, handleLogout }) {
  const [, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition(); // Handle server actions smoothly

  const logout = async () => {
    setIsLoading(true); // Show loading state

    startTransition(async () => {
      await handleLogout(); // Call the server action
      window.location.reload(); // Refresh the page after logout
    });

    setIsLoading(false); // Reset loading state after logout
  };
  // const router = useRouter();

  // Helper to check active link
  // const isActive = (href) => router.pathname === href;
  return (
    <header className="bg-white shadow-lg border-b-2">
      <div className="bg-[#ebebeb] py-3">
        <div className="container mx-auto px-5">
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-3">
              <div>
                <span className="text-[#212529] text-[15px]">
                  Follow us on:
                </span>
              </div>
              <ul className="flex gap-3">
                <li>
                  <a
                    href="https://www.facebook.com/Markdrawing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/facebook.png"
                      alt="facebook logo"
                      height={40}
                      width={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/AM27T7SLL7TOG1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/whatsapp.png"
                      alt="whatsapp logo"
                      height={40}
                      width={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-[15px] text-[#212529] font-medium flex gap-3">
                <li className="border-r border-r-[#212529] pr-2">
                  {authToken ? (
                    <a href="/my-account">My Account</a>
                  ) : (
                    <a href="/login">Login</a>
                  )}
                </li>
                <li className="border-r border-r-[#212529] pr-2">
                  {authToken ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-sm font-medium cursor-pointer"
                        >
                          {userRole?.username ?? "User"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-32 p-2" align="start">
                        <Button
                          onClick={logout}
                          variant="destructive"
                          className="w-full text-sm cursor-pointer"
                        >
                          {isPending ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin mr-2" />
                            </>
                          ) : (
                            <>
                              Logout <LogOut />
                            </>
                          )}
                        </Button>
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <a href="/register">Register</a>
                  )}
                </li>
                <li>
                  <a className="relative" href="/carts">
                    Cart<span className="hidden"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 mr-4 cursor-pointer">
              <Image src={logo} alt="logo" height={100} width={200} />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Home
            </Link>
            <Link
              href="/portraits"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Portraits
            </Link>
            <Link
              href="/oil-point"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Oil Point
            </Link>
            <Link
              href="/family-portrait"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Family Portrait
            </Link>
            <Link
              href="/wallart"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Wall Art
            </Link>
            <Link
              href="/reviews"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Reviews
            </Link>
            <Link
              href="/faq"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Contact
            </Link>
            <Link
              href="/track-your-order"
              className="text-[#00000080] hover:text-white hover:bg-[#3DB573] font-medium rounded-sm py-0.5 px-2"
            >
              Track your Order
            </Link>
          </nav>

          {/* Right side */}
          {/* <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Facebook className="w-4 h-4 text-blue-600" />
                <Twitter className="w-4 h-4 text-blue-400" />
                <MessageCircle className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-sm">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-green-600"
                >
                  Login
                </Link>
                <span className="mx-1">|</span>
                <Link
                  href="/register"
                  className="text-gray-600 hover:text-green-600"
                >
                  Register
                </Link>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                Cart (0)
              </Button>
            </div> */}
        </div>
      </div>
    </header>
  );
}
