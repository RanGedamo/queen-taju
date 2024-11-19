import logo from './logo.svg';
import './App.css';

import Footer from './components/Features/Footer/Footer';
import Header from './components/Features/Header/Header';
import Home from './components/Pages/Home/Home';
import Gallery from './components/Pages/Gallery/Gallery';


function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <Gallery/>
      <Footer />

    </div>
  );
}

export default App;
