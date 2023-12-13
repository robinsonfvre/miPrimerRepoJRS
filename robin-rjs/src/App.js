import React from 'react';
import './App.css';
import Marco from './components/Marco/Marco';
import Juanes from './components/Juanes/Juanes';
import Marc from './components/Marc/Marc'
import Boton from './components/Boton/Boton'

function App() {

  const [otro, setOtro] = React.useState(1);

  const siguiente = () => {
    if (otro === 3) {
      setOtro(1);
    } else {
      setOtro(otro + 1);
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        {otro === 1 && (<Marco />)}
        {otro === 2 && (<Juanes />)}
        {otro === 3 && (<Marc />)}
        <Boton siguiente={siguiente} />
      </header>
    </div>
  );
}

export default App;
