import Link from "next/link";

interface HeaderProps {
  title: string;
  cart?: number;
}

export default function Header({ title, cart = 0 }: HeaderProps) {
  // console.log(cart)
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-lg">Welcome to {title}</h1>
      {cart > 0 && <div>Cart: Rp {cart}</div>}
      <nav className="flex gap-4 text-green-400">
        <Link href="/" className="hover:text-green-300">
          Menu
        </Link>
        <Link href="/location" className="hover:text-green-300">
          Store Locations
        </Link>
      </nav>
    </header>
  );
}
