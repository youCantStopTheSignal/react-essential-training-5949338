import "./App.css";

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Surf and Turf"
]

// App is a component
// Header is a component

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function Main ({dishes}) {
  return (
    <ul>
      {dishes.map((dish)=> (
        <li>{dish}</li>
      ))}
    </ul>
  )
}
function App() {
  return (
    <div>
      <Header name="TonyG" year={new Date().getFullYear()}/>
      <Main dishes={items} />
    </div>
  );
}

export default App;
