import "./App.css";
import favicon from "./images/favicon.ico";
import { useEffect, useReducer } from "react";

// https://www.linkedin.com/learning/react-essential-training/adding-keys-to-list-items?autoSkip=true&resume=false&u=67698794

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Surf and Turf",
  "Nachos"
];

const dishObjects = items.map((dish,i)=>({
  id: i, 
  title: dish
}));

// App is a component
// Header is a component

function Header({name}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}

function Footer({year}) {
  return (
    <p>Copyright {year}</p>
  )
} 

function Main ({ dishes, openStatus, onStatus }) {
// only display "I want to be open" button if we are closed
  return (
    <>
      <div >
        <button style={{display:openStatus ? "none" : "inline-block"}} onClick={()=>onStatus(true)}>
          I want to be open
        </button>
        <h2 style={{display:openStatus ? "block" : "none"}}>Welcome!</h2>
      </div>
      <main>
        <img src={favicon} height={200} alt="A big blue box representing an image"/>

        <ul>
          {dishes.map((dish)=> (
            <li key={dish.id} style={{ listStyleType:"none"}}>{dish.title}</li>
          ))}
        </ul>
      </main>
    </>
  )
}

function App() {
  // it is a best practice to keep useState at as high a level as possible, for maintainibility.
  // defining it here helps enforce that.
  // This can be passed to child components as necessary
  // empty brackets as 2nd param to useEffect causes execution only on INITIALIZATION
  //  no second param, or [status]], would fire on init and CHANGES to status

  const [status, toggle] = useReducer(
    (status) => ! status, 
    true) 

  useEffect(() => {
    console.log(`The restaurant status is ${ status ? "open" : "closed"}`)
  }, [status])

  return (
    <div>
      <Header name="TonyG" />

      <h1>We are {status ? "open" : "closed"}.</h1>

      <button onClick={ toggle }>
        {status ? "Close" : "Open"} Restaurant
      </button>

      <Main 
        dishes={ dishObjects } 
        openStatus={ status } 
        onStatus={ toggle } />

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
