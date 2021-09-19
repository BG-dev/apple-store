import React from "react";
import {connect} from 'react-redux';
import {Categories, SortPopup, DeviceBlock} from '../components'

function Home({devices, activeItem}){

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
            { devices &&
              devices.map((item) => activeItem === null || item.category === activeItem ? 
              <DeviceBlock key={item.id} device={item}/> : "")
            }
          </div>
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.categories.category
  };
};

export default connect(mapStateToProps)(Home);
