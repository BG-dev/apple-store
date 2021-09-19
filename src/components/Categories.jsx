import React from "react";
import {connect} from 'react-redux';
import {setCategory as setCategoryAction} from '../redux/actions/categories'

function Categories({items, activeItem, setCategory}){

    return(
        <div className="categories">
            <ul>
              <li className={activeItem === null ? 'active' : ''} onClick={() => setCategory(null)}>Все</li>
              {
                  items.map((item, index) => <li 
                  className={activeItem === index ? 'active' : ''}
                  onClick={() => setCategory(index)}
                  key={index}>{item}</li>)
              }
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      activeItem: state.categories.category
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return { 
        setCategory: (index) => dispatch(setCategoryAction(index))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Categories);