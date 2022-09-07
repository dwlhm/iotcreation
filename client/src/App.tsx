import './App.css';
import brandLogo from './Icons/brand-logo.svg';

function App() {
  return (
    <div id="App" className="container-sm">
      <nav>
        <div id="brand-view">
          <img src={brandLogo} alt="shown logo of Air Pollution Dashboard Logo" />
        </div>
      </nav>
    </div>
  );
}

export default App;
