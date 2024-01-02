import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './StoreProductCard'; // Make sure to replace 'ProductCard' with the actual file path

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  const [storeId, setStoreId] = useState(''); // State to hold storeId
  const { storeId: contextStoreId } = useContext(StoreContext); // Retrieve StoreContext using useContext hook

  useEffect(() => {
    if (contextStoreId) {
      setStoreId(contextStoreId); // Get storeId from StoreContext
    }
  }, [contextStoreId]);

  


  useEffect(() => {
    fetchData();
    
    


  }, []);

  const handleUpdateGrid = async()=>{

    await fetchData();
    



  }

  const fetchData = async () => {
    try {
        //App backend API 
      const response = await axios.get(`https://nearby-kart-admin-bakend.vercel.app/api/${storeId}/getAllProducts`); // Replace with your API endpoint
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
