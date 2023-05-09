import "./styles.css";
import Button from "./Components/Button";
export default function App() {
  return (
    <div className="App">
      <Button label="Click me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}
