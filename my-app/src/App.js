// import logo from './logo.svg';
import React from 'react';
// import './App.css';

import Jsonplaceholderscrud from './Componnet/Jsonplaceholderscrud/Jsonplaceholderscrud'

class App extends React.Component {
defaultNumber=1
state={ id:this.defaultNumber}

  render() { 
    return <div className="App">

<Jsonplaceholderscrud/>

    </div>;

  }
}
 
export default App;