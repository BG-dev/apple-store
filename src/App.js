import React from 'react';
import {Header} from './components'
import {Home, Cart} from './pages'
import {Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setDevices } from './redux/actions/devices'

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch('https://apple-store-3bffa-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then((resp) => resp.json())
      .then((json) => {
        dispatch(setDevices(json.devices));
      });
  },[dispatch])

  return ( 
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
  );
}

export default App;