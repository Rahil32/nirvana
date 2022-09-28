import React, { useState, useEffect } from "react";
import axios from "axios"; //asynchronous data handling library

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProduct(result.data);
    });
  }, []);
  return (
    <div>
      <section class="text-gray-600 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          
            <div class="flex flex-wrap -m-4">
            {product.map((value) => (
              <div key={value.id} class="lg:w-1/4 md:w-1/2 p-4 w-full">

                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={value.image}
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {value.category}
                  </h3>
                  <h2 class="text-gray-200 title-font text-lg font-medium">
                    {value.title}
                  </h2>
                  <p class="mt-1">{value.price}</p>
                </div>
              </div>
               ))}
            </div>
         
        </div>
      </section>
    </div>
  );
};

export default Products;
