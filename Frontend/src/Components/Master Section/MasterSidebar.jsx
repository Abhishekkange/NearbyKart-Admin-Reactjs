import React ,{useState} from 'react'

const MasterSidebar = ({ onButtonClick }) => {
    const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (buttonName) => {
        setClickedButton(buttonName);
        onButtonClick(buttonName); // Pass the clicked button to parent component
    }



  return (
    <div style={{height:'100vh',paddingTop:'30px',width:'300px'}} className="flex flex-col  w-90 bg-gray-200">
            <button
                name="categories"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'categories' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('categories')}
            >
                <span style={{textAlign:'center'}}>categories</span>
            </button>
            <button
                name="subcategory"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'subcategory' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('subcategory')}
            >
                <span>Subcategory</span>
            </button>
            <button
                name="brand"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'brand' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('brand')}
            >
                <span>Brands</span>
            </button>
            <button
                name="colors"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'colors' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('colors')}
            >
                <span>Colors</span>
            </button>
            <button
                name="sizes"
                className={`flex p-3 gap-3 w-full ${clickedButton === 'sizes' ? 'bg-blue-400 text-white' : ''} `}
                onClick={() => handleClick('sizes')}
            >
                <span>Sizes</span>
            </button>
           
            {/* Add other buttons similarly */}
        </div>
  )
}

export default MasterSidebar
