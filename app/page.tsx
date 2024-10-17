import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href="/users" className="btn btn-accent">click me</Link>
      <ProductCard/>
      </main>
  );
}
