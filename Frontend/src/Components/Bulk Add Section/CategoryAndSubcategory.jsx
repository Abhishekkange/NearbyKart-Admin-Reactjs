import React, { useContext, useState, useEffect } from 'react';
import productContext from '../../Context/ProductContext';
import axios from 'axios';

const CategorySelector = () => {
  const { productState, setProductState } = useContext(productContext);

  const handleSaveAndContinue = () => {
    const updatedProductState = {
      category: selectedCategory,
      subcategory: selectedSubcategory,
      brand: selectedBrand,
    };

    setProductState((prevState) => ({ ...prevState, ...updatedProductState }));
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
    fetchBrands();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://nearby-kart-admin-bakend.vercel.app/api/AllCategories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const response = await axios.get('https://nearby-kart-admin-bakend.vercel.app/api/AllSubcategories');
      setSubcategories(response.data);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get('https://nearby-kart-admin-bakend.vercel.app/api/AllBrands');
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setSelectedSubcategory(subcategory);
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
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
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
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((subcategory, index) => (
            <option key={index} value={subcategory}>
              {subcategory}
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
