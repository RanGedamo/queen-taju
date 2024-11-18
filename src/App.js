import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Features/Footer/Footer';
import Header from './components/Features/Header/Header';
import Routings from './Routings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routings/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
