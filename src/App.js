import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
      name: "Moznu",
      job: "Rickshaw"
  };
  let person2 = {
    name: "Layli",
    job: "Rickshaw Wife"
};
var style={
  color :'red',
  backgroundColor:'green'
}

  const nayoks = ["Hitler","Stalin","Musolioni","Tojo"];
  const products = [{name:"PhotoShop",price:"$400"},
  {name:"Illustrator",price:"$600"},
  {name:"AdobeReader",price:"$450"},
  {name:"Adobe XD",price:"$340"},
  {name:"In design",price:"$500"} 
];
const productNames = products.map(product => product.name);
console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users></Users>
       <ul>
         {
           nayoks.map(nayoks => <li>{nayoks}</li>)
         }
       </ul>
       <ul>
         {
           products.map(products => <li>{products.name}</li>)
         }
       </ul>
        <p>
          Edit me<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={{color:"cyan"}}>My first react paragraph</p>
  <h2>My math work = {2+5}</h2>
  <p style={style} >Hi,my name is {person.name + " "}and I am a {person.job}. My wife is {person2.name}</p>
  
  {
    products.map(products =><Products product={products}></Products>)
  }
  <Person name = {nayoks[0]}></Person>
  <Person name="Michel Johnson"></Person>
  <Person name = {nayoks[1]} ></Person>
  <Person name = {nayoks[2]}></Person>
  <Person name = {nayoks[3]}></Person>
  <Counter></Counter>
  
      </header>
    </div>
  );
}
function Users() {
  const[users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then( data => {
      setUsers(data)
      console.log(data)
    })
  },[])
  return (
  <div><h3>Dynamic useres : 
    <ul>
      {users.map(user =><li>{user.name}</li> )}</ul> 
      <ul>
      {users.map(user =><li>{user.username}</li> )}</ul> 
      <ul>
      {users.map(user =><li>{user.email}</li> )}</ul> 
      </h3></div>
  )
}
function Counter() {
  const [count,setCount] = useState(0);
  
  return(
    <div><h1>Counter:{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
  }
function Products(props) {
  const productStyle ={
    color: 'gray',
    border: '2px solid red',
    
    backgroundColor: 'cyan',
    height:'300px',
    width:'300px',
   
    borderRadius: '5px',
    
  }
  
  return(
    <div style={productStyle}>
      <h3>Name:{props.product.name}</h3>
  <h4>Price:{props.product.price}</h4>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid red',
    padding:'20px'
  }
  
return (<div style={personStyle}><h1>Name:{props.name} </h1>
  <h3>Hero of the year</h3></div>)
  
}
export default App;
