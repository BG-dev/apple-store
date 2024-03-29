import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setCart} from '../redux/actions/cart'

function DeviceBlock({device}){

  const [activeCapacity, setActiveCapacity] = React.useState(0);
  const [activeColor, setActiveColor] = React.useState(0);

  const dispatch = useDispatch();
  const {items} = useSelector(({cart}) => {
    return{
      items: cart.items
    }
  })

  const setCartAction = () => {
    const item = {
      name: device.name,
      capacity: device.capacity && device.capacity[activeCapacity].size,
      color: device.colors && device.colors[activeColor],
      imagePath: device.imagePath + (device.colors ? (activeColor+1) : "1") + ".jpg",
      price: device.price + (device.capacity ? device.capacity[activeCapacity].price : 0)
    }

    const newItems = [...items, item];
    dispatch(setCart(newItems));
    window.localStorage.setItem('cartItems', JSON.stringify(newItems))
  }

    return(
        <div className="device-block">
              <img className="device-block__image"
                src={"/" + device.imagePath + (device.colors ? (activeColor+1) : "1") + ".jpg"}
                alt={device.name} />
              <h4 className="device-block__title">{device.name}</h4>
              {device.colors  &&
              <div className="device-block__selector">
                <ul>
                  { device.colors &&
                    device.colors.map((item, index) => <li 
                      key={index}
                      className={ (index === activeColor ? 'active ' : '') + "color" } 
                      onClick={() => setActiveColor(index)}
                      style={{backgroundColor: '#' + item}}
                      ></li>)
                  }
                </ul>
                <ul>
                  { device.capacity &&
                    device.capacity.map((item, index) => <li 
                      key={index}
                      className={ index === activeCapacity ? 'active' : '' } 
                      onClick={() => setActiveCapacity(index)}
                      >{
                        item.size && item.size >= 1000 ? item.size/1000 + ' ТБ' : item.size + ' ГБ'
                        }</li>)
                  }
                </ul>
              </div>
              }
              <div className="device-block__bottom">
                <div className="device-block__price">{
                (device.price + (device.capacity ? device.capacity[activeCapacity].price : 0))
                }$</div>
                <div className="button button--outline button--add" onClick={() => setCartAction()}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white" />
                  </svg>
                  <span> Добавить</span>
                </div>
              </div>
            </div>
    );
}

export default DeviceBlock;