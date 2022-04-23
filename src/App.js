import "./App.css";
import Card from "./components/Card";
import { properties } from "./constants/data";

function App() {
  return (
    <div className="App">
      <div className="properties">
        {properties.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
