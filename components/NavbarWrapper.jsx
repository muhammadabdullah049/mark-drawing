import React, { Suspense } from "react";
import { cookies } from "next/headers";
import { Navbar } from "./Navbar";
import { handleLogout } from "@/app/actions/logout";

export async function NavbarWrapper() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken"); // Assuming the token is stored in a cookie named "token"
  const userData = cookieStore.get("userData"); // Assuming user data is stored in a cookie named "userData"
  console.log("userData=>", userData?.value);
  const userRole = userData?.value ? JSON.parse(userData.value) : null;
  console.log("userRole=>", userRole?.role);
  const role = userRole?.role || null;
  console.log("role=>", role);
  const authToken = token?.value ?? null;
  // const stringToken = JSON.parse(authToken)
  console.log("authToken=>", authToken);

  // // Define the handleLogout function
  // const handleLogout = async () => {
  //   (await cookies()).delete("authToken");
  // };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar
        authToken={authToken}
        handleLogout={handleLogout}
        userRole={userRole}
      />
    </Suspense>
  );
}
