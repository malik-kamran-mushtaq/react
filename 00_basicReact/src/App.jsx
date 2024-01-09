import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  const [count, setCount] = useState(0);

  function handleOnClick() {
    setCount(count+2)
  }
  return(
    <button
    onClick={handleOnClick}
    >Count: {count}</button>
  )
}

function AnotherButton({count, onClick}) {
  return (
    <button
    onClick={onClick}
    >Count: {count}</button>
  )
}

function App() {
  const[count, setCount] = useState(0);
  const user = {
    name: "Jhanviiii",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
  }

  const products = [
    {title: "cabbage", id: 1},
    {title: "cucumber", id: 2},
    {title: "carrot", id: 3},
  ];

  const listItems = products.map(product => 
    <li {...product.id}>
      {product.title}
    </li>
    );

    function increment() {
      setCount(count+1);
    }

  return (
    <>
    <div>
    <h1>{user.name}</h1>
    <img
      className='avatar'
      src={user.imageUrl}
      alt={"Photo of "+user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
    </div>
    <ul>{listItems}</ul>

    <div>
      <h1>Counters that chnage separately:</h1>
      <MyButton /><br />
      <MyButton />
    </div>

    <div>
      <h1>Another Button</h1>
      <AnotherButton count={count} onClick={increment} /><br />
      <AnotherButton count={count} onClick={increment} />
    </div>
    </>

  
  )
}

export default App
