import './App.css';
import { MainCard } from "./components/MainCard/index.js";
import {ListMiniCard} from "./components/ListMiniCard/index.js";

function App() {
  return (
    <div className="App">
      <MainCard/>
      <ListMiniCard/>
    </div>
  );
}

export default App;
