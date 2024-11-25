import "./App.css";
import MyImg from "./components/Myimg";
import Mybutton from "./components/Mybutton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mybutton label="FRANCOIS" />
        <Mybutton label="robertooo" />
        <MyImg src="cl.jpg" />
        <MyImg src="verstappen.jpg" />
      </header>
    </div>
  );
}

export default App;
