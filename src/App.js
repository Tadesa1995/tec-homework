// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import Users from './Componnet/Users/Users'; 
// import Jsonplaceholders from './Componnet/Jsonplaceholders/Jsonplaceholders'
import Jsonplaceholderscrud from './Componnet/Jsonplaceholderscrud/Jsonplaceholderscrud'

class App extends React.Component {
defaultNumber=1
state={ id:this.defaultNumber}

  render() { 
    return <div className="App">
{/* <input
defaultValue={this.defaultNumber}
type="number"
onChange={(evt)=>this.setState({ id:evt.target.value})}
/> */}
{/* 
<A/> */}
{/* <Users/> */}
<Jsonplaceholderscrud/>
{/* <Jsonplaceholders/></ */}
     {/* <Users/> */}
    </div>;

  }
}
 
export default App;