import { getDatabyId } from "../../create/actions"

export default async function ProductDetail({ params }: { params: Promise<{productId: string}>}) {
  const { productId } = await params
  const menuData = await getDatabyId(productId)
  return (
    <div className="p-4">
      <h1 className="text-2xl">Menu {menuData.name}</h1>
      <p>Price <span className="bold text-green-700">{menuData.price}</span></p>
      <img className="w-[200px]" src={menuData.thumbnail} />
    </div>
  )
}