import logo from "./logo.svg";
import "./App.css";
import { About } from "./pages/About";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Passion from "./pages/Passion";
import Work from "./pages/Work";
import Academic from "./pages/Academic";

function App() {
  return (
    <div className="App">
      <About />
      <Skills />
      <Hobbies />
      <Passion />
      <Work />
      <Academic />
    </div>
  );
}

export default App;
