import React from 'react';
import {Header} from './components'
import {Home, Cart} from './pages'
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {setDevices as setDevicesAction} from './redux/actions/devices'

function App({items, setDevices}) {

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setDevices(json.devices)
      });
  },[])

  return ( 
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" render={() => <Home devices={items}/>}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.devices.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    setDevices: (items) => dispatch(setDevicesAction(items))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);