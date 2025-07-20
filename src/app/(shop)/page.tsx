import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop products",
  description: "Welcome to my shop with delicious food",
};

export default async function Shop() {
  return (
    <div className="p-4">
      <Link href="/products" className="text-white p-4 bg-green-600 m-4 inline-block">Explore menu</Link>
    </div>
  );
}
