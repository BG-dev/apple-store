import React from "react";
import {useSelector} from 'react-redux';
import {Categories, SortPopup, DeviceBlock} from '../components'

function Home(){

    const FILTERING_ITEMS = [
      'популярности',
      'цене',
      'алфавиту'
    ];

    const CATEGORIES_ITEMS = [
      'iPhone',
      'iPad',
      'Mac',
      'TV',
      'AirPods'
    ];

    const {devices, activeItem, sortBy} = useSelector(({devices, categories, filters}) => {
      return{
        devices: devices.items,
        activeItem: categories.category,
        sortBy: filters.sortBy
      }
    })

    const sortItems = (a, b, compare) => {
      return a[compare] < b[compare] ? 1 : a[compare] > b[compare] ? -1 : 0;
    }

    return(
        <div className="container">
          <div className="content__top">
            <Categories 
            items={CATEGORIES_ITEMS}
            activeItem={activeItem}
            />
            <SortPopup
            items={FILTERING_ITEMS}
            activeItem={sortBy}
            />
          </div>
          <h2 className="content__title">Все устройства</h2>
          <div className="content__items">
            { devices &&
              devices.sort((a,b) => {
                let result;
                if(sortBy === 1){
                  result = sortItems(a, b, "price")
                } else if (sortBy === 2){
                  result = sortItems(a, b, "name") * (-1)
                } else {
                  result = sortItems(a, b, "rating")
                }
                return result;
              }).map((item) => activeItem === null || item.category === activeItem ? 
              <DeviceBlock key={item.id} device={item}/> : "")
            }
          </div>
        </div>
    );
}

export default Home;
