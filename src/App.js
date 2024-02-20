import './App.css';
import  Navbar  from './components/navbar';
import Home from'./components/home';
import About from './components/about';
import Skills from './components/skill';
import Project  from './components/project';
import Feats from './components/feats';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Feats/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
