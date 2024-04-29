import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products" + id);
  return (
    <>
      {product && (
        <div className="align-content">
          <h1 className="text-3xl"> Product - {id}</h1>
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            {product.images.map((image) => {
              return (
                <div key={image} className="carousel-item">
                  <img src={image} className="rounded-box" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
