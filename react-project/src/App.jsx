import "./App.css";
import favicon from "./images/favicon.ico";
import { useState } from "react";

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
      <div style={{display:openStatus ? "none" : "block"}}>
        <button onClick={()=>onStatus(true)}>
          I want to be open
        </button>
        <h2>Welcome!</h2>
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

  const [status, setStatus] = useState(true);

  return (
    <div>
      <Header name="TonyG" />
      <h1>We are {status ? "open" : "closed"}.</h1>
      <button onClick={()=>setStatus( ! status)}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Main dishes={ dishObjects } openStatus={ status } onStatus={ setStatus } />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
