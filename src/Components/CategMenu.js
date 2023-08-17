import React from 'react';

const CategMenu = ({filterItem,catItems}) => {
  return (
    <div>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
        {
            catItems.map((currElem,index)=>{
                return <button className="btn btn-warning" key={index} onClick={()=>filterItem(currElem)}>{currElem}</button>;

            })
        }
          {/* <button className="btn btn-warning" onClick={()=>filterItem('breakfast')}>Breakfast</button>
          <button className="btn btn-warning" onClick={()=>filterItem('lunch')}>Lunch</button>
          <button className="btn btn-warning" onClick={()=>filterItem('evening')}>Evening</button>
          <button className="btn btn-warning" onClick={()=>filterItem('dinner')}>Dinner</button>
          <button className="btn btn-warning" onClick={()=>setItems(Menu)}>All</button> */}
        </div>
      </div>
    </div>
  )
}

export default CategMenu;