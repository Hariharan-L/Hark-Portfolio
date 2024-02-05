import './App.css';
import { Navbar } from './components/navbar';
import {Home} from'./components/home';
import {About} from './components/about';
import {Skills} from './components/skill';
import { Project } from './components/project';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
