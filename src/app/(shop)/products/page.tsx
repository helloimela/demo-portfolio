import ProductList from "../components/product-list";
import { Suspense } from "react";

async function getData() {
  const data = await fetch(
    "https://687a6fa2abb83744b7ecd77b.mockapi.io/api/v1/menu"
  );
  const menu = await data.json();
  return menu;
}

export default async function Products() {
  const items = getData();
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <ProductList items={items} />
      </Suspense>
    </>
  );
}
