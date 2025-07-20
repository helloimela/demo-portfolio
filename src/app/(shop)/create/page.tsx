"use client";

import Form from "next/form";
import { useActionState } from "react";
import { createMenu } from "./actions";
import { FormState } from "@/app/types/ProductTypes";

const initialState: FormState = {
  message: "",
};

export default function Page() {
  const [state, formAction, pending] = useActionState(createMenu, initialState);
  return (
    <Form action={formAction} className="p-8">
      <h1 className="text-2xl mb-8">Add new menu</h1>
      <div className="flex flex-col mb-4">
        <label>Menu name</label>
        <input
          placeholder="Add menu name"
          required
          minLength={10}
          name="name"
          className="border border-gray-300 rounded-l p-2"
        />
        {state.errors?.nameField && (
          <p className="text-red-600">{state.errors.nameField}</p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label>Thumbnail</label>
        <input
          name="thumbnail"
          className="border border-gray-300 rounded-l p-2"
          placeholder="Thumbnail URL"
          required
        />
      </div>

      <div className="flex flex-col">
        <label>Price</label>
        <input
          name="price"
          type="number"
          placeholder="Food price"
          className={`border border-gray-300 rounded-l p-2 ${
            state.errors?.priceField && "border-pink-500"
          }`}
        />

        {state.errors?.priceField && (
          <p className="text-red-600">{state.errors.priceField}</p>
        )}
      </div>

      <p className="text-gray-500 mt-8">{state?.message}</p>

      <button
        disabled={pending}
        type="submit"
        className="disabled:bg-gray-50 mt-8 bg-green-600 text-white px-8 py-4 rounded-lg"
      >
        Submit
      </button>
    </Form>
  );
}
