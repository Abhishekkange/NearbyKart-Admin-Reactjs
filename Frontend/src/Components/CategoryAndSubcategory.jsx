import React, { useState } from 'react';

const CategorySelector = () => {
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
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <label style={{width:'200px'}} htmlFor="category" className="block mb-2 text-lg">
                    Category:
                </label>
                <select
                    style={{width:'350px'}}
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
                        style={{width:'350px'}}
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
                    style={{width:'350px'}}
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
        </div>
    );
};

export default CategorySelector;
