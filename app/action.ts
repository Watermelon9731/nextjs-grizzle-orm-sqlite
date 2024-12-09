"use server";

import { redirect } from "next/navigation";
import { db } from "./db";
import { response } from "./db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function contactUsAction(formData: FormData): Promise<any> {
  try {
    await db.insert(response).values({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    });
  } catch (error: any) {
    if (error)
      return {
        success: false,
        error: error?.message,
      };
  }
  redirect("/response");
}

export async function removeResponse(id: number): Promise<any> {
  try {
    await db.delete(response).where(eq(response.id, id));
    revalidatePath("/response");
  } catch (error: any) {
    if (error)
      return {
        success: false,
        error: error?.message,
      };
  }
}
