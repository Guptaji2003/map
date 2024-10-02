import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Footer/>
    </div>
  );
}

export default App;
