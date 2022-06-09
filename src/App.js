import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import Skill from './components/Skill';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Menubar from './components/Menubar';

function App() {
  return (
    <div className="App bg-black">
      <Menubar/>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
