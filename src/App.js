import './App.css';
import  Navbar  from './components/navbar';
import Home from'./components/home';
import About from './components/about';
import Skills from './components/skill';
import Feats from './components/feats';
import  Project  from './components/project';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Feats/>
      <Project/>
    </div>
  );
}

export default App;
