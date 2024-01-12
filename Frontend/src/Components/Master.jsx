import React, {useState} from 'react';
import EnterCategory from './Master Section/EnterCategory';
import EnterSubCategory from './Master Section/EnterSubcategory';
import EnterBrand from './Master Section/EnterBrand';
import EnterColor from './Master Section/EnterColor';
import EnterSizes from './Master Section/EnterSizes';
import MasterSidebar from './Master Section/MasterSidebar';
import EnterImages from './Bulk Add Section/AddImage'

const Master = () => {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleItemSelected = (button)=>{

        if(button == 'categories')
        {
            setSelectedComponent(<EnterCategory />);
        }
        else if (button == 'subcategory')
        {
            setSelectedComponent(<EnterSubCategory />);

        }
        else if (button == 'brand')
        {
            setSelectedComponent(<EnterBrand/>);

        }
        else if (button == 'colors')
        {
            setSelectedComponent(<EnterColor />);

        }
        else if (button == 'sizes')
        {
            setSelectedComponent(<EnterSizes />);

        }
       
        

    }


  return (
    <div>

        <div className="flex  ">
        <MasterSidebar className="p-5" onButtonClick={handleItemSelected} />
        {selectedComponent}

        </div>
       

    </div>
  )
}

export default Master
