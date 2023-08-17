import React, { useState } from "react";
import Menu from "../Components/Menu";
import Menuitems from "./MenuItems";
import CategMenu from "./CategMenu";

const allCatValues=[...new Set(Menu.map((currElm)=> currElm.category)),"All"];
console.log(allCatValues);


const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems,setCatItems]=useState(allCatValues);

  const filterItem=(categItem)=>{

    if(categItem==="All")
    {
      setItems(Menu);
      return;
    }

    const updatedItems=Menu.filter((curElem)=>{
        return curElem.category===categItem;
    });
    setItems(updatedItems);
  }

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
    <CategMenu filterItem={filterItem} catItems={catItems}/>
      {/* My main items section  */}
      <Menuitems items={items}/>
    </>
  );
};

export default GalleryReact;
