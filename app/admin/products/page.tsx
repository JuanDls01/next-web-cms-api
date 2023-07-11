import Link from "next/link";
import { Suspense } from "react";
import Table from "../components/Table/Table";
import prisma from "@/lib/prisma";

export const revalidate = 0;
const ProductsPage = async () => {
  const products = await getProducts();

  const columns = [
    {
      Header: "Name Product",
      accesor: "name",
    },
    { Header: "Description", accesor: "description" },
    { Header: "Category", accesor: "category" },
    { Header: "Prize", accesor: "prize" },
    { Header: "Active", accesor: "isActive" },
    { Header: "Count", accesor: "count" },
  ];
  return (
    <div className="flex items-center flex-col space-y-5">
      <h1 className="text-4xl font-bold my-2">List of Producst</h1>
      <button className="bg-indigo-400 rounded-full p-2">
        <Link href={"/admin/products/create"}>Create Product</Link>
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        <Table widthTable={"500px"} rows={products} columns={columns} />
      </Suspense>
    </div>
  );
};

const getProducts = async () => {
  const products = await prisma.product.findMany({
    select: {
      name: true,
      description: true,
      category: true,
      prize: true,
      isActive: true,
      count: true,
    },
    orderBy: { name: "asc" },
  });
  return products;
};

export default ProductsPage;
