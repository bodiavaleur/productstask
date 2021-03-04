import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://jsonkeeper.com/b/C3E6")
      .then((res) => res.json())
      .then((data) => {
        // Split data into chunks for pagination
        const chunks = [];
        while (data.products.length) {
          chunks.push(data.products.splice(0, 10));
        }

        setProducts(chunks);
      });
  }, []);

  return products;
}
