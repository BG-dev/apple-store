import React from 'react';
import {Header} from './components'
import {Home, Cart} from './pages'
import {Route} from 'react-router-dom';

function App() {

  const [devices, setDevices] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {setDevices(json.devices)});
  },[])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path="/" render={() => <Home devices={devices}/>}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    </div>
  );
}

export default App;