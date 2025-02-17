import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductDetails from "./ProductDetails";

// This data would typically come from a database or API
export const products = [
  {
    id: "1",
    name: "Ultra Boost Pro",
    description:
      "Experience unmatched comfort and performance with our Ultra Boost Pro running shoes. Featuring advanced cushioning technology, breathable mesh upper, and responsive sole design, these shoes are perfect for both professional athletes and casual runners. The premium materials ensure durability while the sleek design keeps you stylish on and off the track.",
    price: 12999,
    oldPrice: 14999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    company: {
      name: "Adidas",
      logo: "https://i.pravatar.cc/150?img=1",
    },
    nutrients: [
      { name: "Cushioning", value: "High" },
      { name: "Support", value: "Medium" },
      { name: "Weight", value: "280g" },
      { name: "Drop", value: "10mm" },
    ],
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id) || products[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="/">
        <ArrowLeft />
        Back
      </Link>
      <ProductDetails product={product} />
    </div>
  );
}
