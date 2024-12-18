import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import axios from 'axios';
import ProductCard from './StoreProductCard'; // Make sure to replace 'ProductCard' with the actual file path
import API from '../API/masterAPI';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  const storeId = localStorage.getItem('AuthToken');
  const baseApi = API();


  


  useEffect(() => {
    fetchData();
    
    


  }, []);

  const handleUpdateGrid = async()=>{

    await fetchData();
    



  }

  const fetchData = async () => {
    try {
        //App backend API 
        const headers = {
          'x-session-token': storeId,
          'Content-Type': 'application/json'
        };
    
      const config = {
          headers: headers,
         };
      const response = await axios.get(`${baseApi}getAllProducts`,config); // Replace with your API endpoint
      //create product List from reesponse object
      const products = [];

      response.data.map(product => {

        const productName = product.name.en;
        const price = product.price;
        const description = product.description.en;
        const shortDescription = product.shortDescription.en;
        const imageUrl = product.image;
        const brand = product.brand;
        const id = product._id;
        const subcategory = product.subcategories[0];
        const category = product.categories[0];



         

        //creating prouduct object
        const productObj = {

            name:productName,
            price:price,
            description:description,
            shortDescription:shortDescription,
            image:imageUrl,
            brand:brand,
            id:id,
            shopName:"Kange Collection",
            category:category.categoryName.en,
            categoryImage:category.categoryImage,
            subcategoryImage:subcategory.subcategoryImage,
            subcategory:subcategory.subcategoryName.en

        }

        products.push(productObj);
        
      });
     
      setProducts(products);

      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}  onDelete={handleUpdateGrid} />
      ))}
    </div>
  );
};

export default ProductGrid;
