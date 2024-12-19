import "./App.css";

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

console.log(dishObjects);

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

function Main ({dishes}) {
  return (
    <ul>
      {dishes.map((dish)=> (
        <li key={dish.id} style={{ listStyleType:"none"}}>{dish.title}</li>
      ))}
    </ul>
  )
}
function App() {
  return (
    <div>
      <Header name="TonyG" />
      <Main dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
