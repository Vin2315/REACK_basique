import logo from './logo.svg';
import './App.css';
import FormulaireComposant from './Composants/FormulaireComposant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <FormulaireComposant></FormulaireComposant>



      </header>
    </div>
  );
}

export default App;
