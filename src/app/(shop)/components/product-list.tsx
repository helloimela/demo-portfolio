"use client";

import { use } from "react";
import { ProductProps } from "../../types/ProductTypes";

export default function ProductList({ items }: { items: Promise<ProductProps[]>}) {
  const allItems = use(items);

  return (
    <div>
      <div className="flex flex-wrap gap-4 m-4 items-start">
        {allItems.map((item) => (
          <a key={item.id} className="bg-gray-200 p-4 flex flex-col" href={`/products/${item.id}`}>
            <div className="overflow-hidden w-[200px] h-[200px] bg-center bg-cover" style={{ backgroundImage: `url(${item.thumbnail})`}}></div>
            <div>
              <div className="font-bold">{item.name}</div>
              <div>{item.price}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
