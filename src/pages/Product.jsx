import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function Product() {
  const { productId } = useParams();

  return (
    <MainLayout>
      <h1>Product page {productId}</h1>
    </MainLayout>
  );
}
