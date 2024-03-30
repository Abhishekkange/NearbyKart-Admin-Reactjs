import React, { useState, useEffect,useContext } from 'react';
import StoreContext from '../../Context/StoreContext'
import productContext from '../../Context/ProductContext';
import axios from 'axios';
import API from '../API/masterAPI'

  const CategorySelector = () => {
  
  const { productState, setProductState } = useContext(productContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryImages, setCategoryImages] = useState([]);
  const [SubcategoryImage, setSubcategoryImage] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);


  const storeId = localStorage.getItem('AuthToken');
  const baseApi = API();
  





  const handleSaveAndContinue = () => {
    const updatedProductState = {
      category: selectedCategory ? selectedCategory.categoryName : '',
      categoryImage: selectedCategory ? selectedCategory.categoryImage : '',
      subcategory: selectedSubcategory ? selectedSubcategory.subcategoryName : '',
      subcategoryImage: selectedSubcategory ? selectedSubcategory.subcategoryImage : '',
      brand: selectedBrand,
    };
  
    setProductState((prevState) => ({ ...prevState, ...updatedProductState }));
  };


  

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
    fetchBrands();
  }, []);

  const fetchCategories = async () => {
    try {
      const fetchData = async () => {
        try {
          const headers = {
            'x-session-token': storeId,
            'Content-Type': 'application/json'
          };
      
        const config = {
            headers: headers,
           };
          const response = await axios.get(`${baseApi}category`,config);
          setCategories(response.data);
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const response = await axios.get(`${baseApi}api/category`);
     
      //use Map function to add allcategories to list
      const categoriesData = response.data.map(category => ({
        categoryName: category.categoryName,
        categoryImage: category.categoryImage
      }));

      setCategories(categoriesData);

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      const response = await axios.get(`${baseApi}api/subcategory`,config);
     //use Map function to add allcategories to list
     const subcategoriesData = response.data.map(subcategory => ({

      subcategoryName: subcategory.subcategoryName,
      subcategoryImage: subcategory.subcategoryImage
  
    }));

    setSubcategories(subcategoriesData);

    } 
    catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      const headers = {
        'x-session-token': storeId,
        'Content-Type': 'application/json'
      };
  
    const config = {
        headers: headers,
       };
      const response = await axios.get(`${baseApi}AllBrands`,config);
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const handleCategoryChange = (e) => {

    const categoryN = e.target.value;
    const selectedCategoryObj = categories.find(
      (category) => category.categoryName === categoryN
    );

    setSelectedCategory(selectedCategoryObj);
    setSelectedSubcategory('');

  };

  const handleSubcategoryChange = (e) => {
    const subcategoryN = e.target.value;
    const selectedSubcategoryObj = subcategories.find(
      (category) => category.subcategoryName === subcategoryN
    );

    setSelectedSubcategory(selectedSubcategoryObj);
    
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
  };

  return (
    <div className="flex flex-col items-start">
      <div className="mb-4">
        <label style={{ width: '200px' }} htmlFor="category" className="block mb-2 text-lg">
          Category:
        </label>
        <select
  style={{ width: '450px' }}
  id="category"
  className="p-2 border rounded-md"
  onChange={handleCategoryChange}
  value={selectedCategory ? selectedCategory.categoryName : 'select'}

>
  <option value="">Select Category</option>
  {categories.map((category, index) => (
    <option key={index} value={category.categoryName}>
      {category.categoryName}
    </option>
  ))}
</select>

      </div>

      <div className="mb-4">
        <label htmlFor="subcategory" className="block mb-2 text-lg">
          Subcategory:
        </label>
        <select
          style={{ width: '450px' }}
          id="subcategory"
          className="p-2 border rounded-md"
          onChange={handleSubcategoryChange}
  value={selectedSubcategory ? selectedSubcategory.subcategoryName : 'select'}
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory.subcategoryName}>
              {subcategory.subcategoryName}
            </option>
          ))}

        </select>
      </div>

      <div>
        <label htmlFor="brand" className="block mb-2 text-lg">
          Brand:
        </label>
        <select
          style={{ width: '450px' }}
          id="brand"
          className="p-2 border rounded-md"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="">Select Brand</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleSaveAndContinue}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save and Continue
      </button>
    </div>
  );
};

export default CategorySelector;
