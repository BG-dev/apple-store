import React from "react";
import {useDispatch} from 'react-redux';
import {setCategory} from '../redux/actions/categories'

function Categories({items, activeItem}){

    const dispatch = useDispatch();

    return(
        <div className="categories">
            <ul>
              <li className={activeItem === null ? 'active' : ''} onClick={() => dispatch(setCategory(null))}>Все</li>
              {
                  items.map((item, index) => <li 
                  className={activeItem === index ? 'active' : ''}
                  onClick={() => dispatch(setCategory(index))}
                  key={index}>{item}</li>)
              }
            </ul>
        </div>
    );
}

  export default Categories;