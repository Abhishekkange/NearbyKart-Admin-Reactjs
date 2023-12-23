import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Make sure to replace 'ProductCard' with the actual file path

const ProductGrid = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchData();
    


  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/buildProducts'); // Replace with your API endpoint
      //create product List from reesponse object
      const products = [];

      response.data.map(product => {

        const productName = product.name.en;
        const price = product.price;
        const description = product.description.en;
        const shortDescription = product.description.en;
        const imageUrl = product.image;
        const brand = product.brand;
        const id = product._id;
        // const category = product.categories.categoryName.en;
        // const subcategories = product.subcategories.subcategoyName.en;
        

        //creating prouduct object
        const productObj = {

            title:productName,
            price:price,
            description:description,
            shortDescription:shortDescription,
            imageUrl:imageUrl,
            brand:brand,
            id:id
            // category:category,
            // subcategory:subcategory

        }

        products.push(productObj);
      })
      console.log(products);
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

   

    



  return (
    <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;