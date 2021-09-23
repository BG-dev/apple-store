import React from "react";
import {useSelector} from 'react-redux';
import {Categories, SortPopup, DeviceBlock} from '../components'

function Home(){

    const {devices, activeItem} = useSelector(({devices, categories}) => {
      return{
        devices: devices.items,
        activeItem: categories.category
      }
    })

    return(
        <div className="container">
          <div className="content__top">
            <Categories 
            items={[
              'iPhone',
              'iPad',
              'Mac',
              'TV',
              'AirPods'
            ]}
            activeItem={activeItem}
            />
            <SortPopup
            items={[
              {name: 'популярности', type: 'popular'},
              {name: 'цене', type: 'price'},
              {name: 'алфавиту', type: 'alphabet'}
            ]}
            />
          </div>
          <h2 className="content__title">Все устройства</h2>
          <div className="content__items">
            { devices &&
              devices.map((item) => activeItem === null || item.category === activeItem ? 
              <DeviceBlock key={item.id} device={item}/> : "")
            }
          </div>
        </div>
    );
}

export default Home;
