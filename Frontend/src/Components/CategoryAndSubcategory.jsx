import React, { useContext, useState } from 'react';
import productContext from '../Context/ProductContext';

const CategorySelector = () => {


    
    const {productState , setProductState} = useContext(productContext);

    const handleSaveAndContinue = () => {

        const updatedProductState = {
            
            "category":selectedCategory,
            "subcategory":selectedSubcategory,
            "brand":selectedBrand

        }

        setProductState(prevState =>({...prevState,...updatedProductState}))

    }

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');

    // Sample data for categories, subcategories, and brands
    const categories = ['Electronics', 'Clothing', 'Home & Garden'];
    const subcategories = {
        Electronics: ['Smartphones', 'Laptops', 'TVs'],
        Clothing: ['T-shirts', 'Dresses', 'Jeans'],
        'Home & Garden': ['Furniture', 'Kitchenware', 'Tools'],
    };
    const brands = ['Brand A', 'Brand B', 'Brand C'];

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
                <label style={{width:'200px'}} htmlFor="category" className="block mb-2 text-lg">
                    Category:
                </label>
                <select
                    style={{width:'450px'}}
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

            {selectedCategory && (
                <div className="mb-4">
                    <label htmlFor="subcategory" className="block mb-2 text-lg">
                        Subcategory:
                    </label>
                    <select
                        style={{width:'450px'}}
                        id="subcategory"
                        className="p-2 border rounded-md"
                        value={selectedSubcategory}
                        onChange={handleSubcategoryChange}
                    >
                        <option value="">Select Subcategory</option>
                        {subcategories[selectedCategory].map((subcategory, index) => (
                            <option key={index} value={subcategory}>
                                {subcategory}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div>
                <label htmlFor="brand" className="block mb-2 text-lg">
                    Brand:
                </label>
                <select
                    style={{width:'450px'}}
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
            <button onClick={handleSaveAndContinue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
                Save and Continue
            </button>

        </div>
    );
};

export default CategorySelector;
