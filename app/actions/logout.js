"use server";

import { cookies } from "next/headers";

export const handleLogout = async () => {
  (await cookies()).delete("authToken");
  (await cookies()).delete("userData");
};