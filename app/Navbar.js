import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/">Inicio</Link>
      <Link href="/about">Acerca</Link>
      <Link href="/products">Productos</Link>
      <Link href="/contact">Contacto</Link>
    </nav>
  );
}
