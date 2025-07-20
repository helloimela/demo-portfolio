import Link from "next/link";
import { getDatabyId } from "../../actions";

export default async function Success({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const menu = await getDatabyId(id)
  return (
    <div className="p-8">
      <h1>Successfully add new menu {menu.name}</h1>
      <p>Price {menu.price} </p>
      <p>Thumbnail</p>
      <img src={menu.thumbnail} className="w-[100px] h-[100px]" />
      <Link href="/products" className="underline text-green-600 mt-[20px] block">Back to all menu</Link>
    </div>
  );
}
