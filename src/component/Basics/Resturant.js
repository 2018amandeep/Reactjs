import React, { useState } from 'react'
import './Resturant'
import Menu from '../menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueCategory = [
    ...new Set(Menu.map((obj) => {
        return obj.category;
    })),"All"
]
console.log(uniqueCategory)
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueCategory)

    const filterItem = (category) => {
        if(category === "All") {
            setMenuData(Menu);
            return;
        }
        const upadtedCat = Menu.filter((obj) => {
            return obj.category === category;
        })
        setMenuData(upadtedCat);
    };

    return (
        <>
           <Navbar filterItem  = {filterItem} menuList= {menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant;