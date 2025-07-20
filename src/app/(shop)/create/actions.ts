"use server";

import { FormState } from "@/app/types/ProductTypes";
import { redirect } from "next/navigation";

export async function getDatabyId(id: string) {
  const data = await fetch(
    `https://687a6fa2abb83744b7ecd77b.mockapi.io/api/v1/menu/${id}`
  );
  const response = await data.json();
  return response;
}

export async function createMenu(
  initialState: FormState,
  formData: FormData
): Promise<FormState> {
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const rawData = {
    name: formData.get("name"),
    price: formData.get("price"),
    thumbnail: formData.get("thumbnail"),
  };

  if (!rawData.name || !rawData.price) {
    return {
      message: "Server validation failed.",
      errors: {
        nameField: !rawData.name ? "Field name is required." : undefined,
        priceField: !rawData.price ? "Field price is required." : undefined,
      },
    };
  }

  const bodyContent = JSON.stringify({
    ...rawData,
    reviews: [],
  });
  const response = await fetch(
    "https://687a6fa2abb83744b7ecd77b.mockapi.io/api/v1/menu",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );
  const data = await response.json();
  redirect(`/create/success/${data.id}`);
}
