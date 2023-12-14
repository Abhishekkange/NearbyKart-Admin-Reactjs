import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [openMenu1, setOpenMenu1] = useState(true);
    const [openMenu2, setOpenMenu2] = useState(false);
    const [openMenu3, setOpenMenu3] = useState(false);
    const [openOtherMenu, setOpenOtherMenu] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();

    const handleChangeMenu1 = () => {
        setOpenMenu1(!openMenu1);
        setOpenMenu2(false);
        setOpenMenu3(false);
        setOpenOtherMenu(false);
    }

    const handleChangeMenu2 = () => {
        setOpenMenu2(!openMenu2);
        setOpenMenu1(false);
        setOpenMenu3(false);
        setOpenOtherMenu(false);
    }

    const handleChangeMenu3 = () => {
        setOpenMenu3(!openMenu3);
        setOpenMenu1(false);
        setOpenMenu2(false);
        setOpenOtherMenu(false);
    }

    const handleOtherMenu = () => {
        setOpenOtherMenu(!openOtherMenu);
        setOpenMenu1(false);
        setOpenMenu2(false);
        setOpenMenu3(false);
    }

    const handleButtonClick = (buttonName) => {
        navigate(`admin/${buttonName}`);
        setActiveButton(buttonName === activeButton ? null : buttonName);
    };

    return <div className="h-full flex-shrink-0 bg-black w-64 overflow-y-aut">
        <div className="text-center text-white font-semibold text-2xl pt-5">
            NearybyKart
        </div>
        <div className="bg-light-dark mt-10 text-white text-lg">
            <div className={`p-1 ${openMenu1 && 'bg-light-green text-black'}`}>
                <button className="flex p-3 w-52" onClick={handleChangeMenu1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                    <span className="ml-5">Store</span>
                </button>
            </div>
            {openMenu1 && <div>
                <SubMenuButton name='Manage Banners' active={activeButton === 'managebanner'} onClick={() => handleButtonClick("managebanner")} />
                <SubMenuButton name="Create Categories" active={activeButton === 'createCategiry'} onClick={() => handleButtonClick('createCategiry')} />
                <SubMenuButton name='Manage Categories' active={activeButton === 'manageCategiry'} onClick={() => handleButtonClick('manageCategiry')} />
                <SubMenuButton name='Store' active={activeButton === 'store'} onClick={() => handleButtonClick('store')} />
            </div>
            }
            <div className={`p-1 ${openMenu2 && 'bg-light-green text-black'}`}>
                <button className="flex p-3 w-52" onClick={handleChangeMenu2}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                    <span className="ml-5">Products</span>
                </button>
            </div>
            {openMenu2 && <div>
                <SubMenuButton name="Master" active={activeButton === 'Master'} onClick={() => handleButtonClick('Master')} />
                <SubMenuButton name='Add Bulk Product' active={activeButton === 'bulkProduct'} onClick={() => handleButtonClick('bulkProduct')} />
                <SubMenuButton name='Build New Product' active={activeButton === 'buildProduct'} onClick={() => handleButtonClick('buildProduct')} />
                <SubMenuButton name='All Products' active={activeButton === 'allproducts'} onClick={() => handleButtonClick('allproducts')} />
                <SubMenuButton name='Store' active={activeButton === 'store'} onClick={() => handleButtonClick('store')} />
            </div>
            }
            <div className={`p-1 ${openMenu3 && 'bg-light-green text-black'}`}>
                <button className="flex p-3 w-52" onClick={handleChangeMenu3}>
                    {/* Icon and text for Menu 3 */}
                    <span>User</span>
                </button>
            </div>
            {openMenu3 && <div>
                <SubMenuButton name="User Profile" active={activeButton === 'userProfile'} onClick={() => handleButtonClick('userProfile')} />
                <SubMenuButton name="Settings" active={activeButton === 'settings'} onClick={() => handleButtonClick('settings')} />
                {/* Add more submenu buttons for user-related actions */}
            </div>
            }
            <div className={`p-1 ${openOtherMenu && 'bg-light-green text-black'}`}>
                <button className="flex p-3 w-52" onClick={handleOtherMenu}>
                    {/* Icon and text for Other menu */}
                    <span>Other</span>
                </button>
            </div>
            {openOtherMenu && <div>
                {/* SubMenuButton for Help Center */}
                <SubMenuButton name="Help Center" active={activeButton === 'helpCenter'} onClick={() => handleButtonClick('helpCenter')} />
                {/* Add more submenu buttons for Other menu */}
            </div>
            }
        </div>
        <div className="bg-light-dark  text-white text-lg">


        </div>
        {/* Other Menu */}

    </div>
}

const SubMenuButton = ({ name, active, onClick }) => {
    return <div className={`pl-12 p-1 bg-light-gray  ${!active ? 'text-gray-300' : 'text-white'}`}>
        <button className="m-1" onClick={onClick}>
            {name}
        </button>
    </div>
}

export default Sidebar;