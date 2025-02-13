import logo from './assets/logo-2025.png';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Site en cours de construction...</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
