import logo from './logo.svg';
import './App.css';
import About from './componets/About';
import Services from './componets/Services';
import Contact from './componets/Contact';

function App() {
  return (
    <div className="App">
     <div className='container'>
      <About></About>
      <Services></Services>
      <Contact></Contact>
     </div>
    </div>
  );
}

export default App;
