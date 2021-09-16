import React from "react";

import {Categories, SortPopup, DeviceBlock} from '../components'

function Home({devices}){

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
            ]}/>
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
            {
              devices.map((item) => {
                return <DeviceBlock key={item.id} device={item}/>    
              })
            }
          </div>
        </div>
    );
}

export default Home;