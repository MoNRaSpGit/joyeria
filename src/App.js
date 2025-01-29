import React from 'react';

import Joyeria from './Componentes/Joyeria'; // ✅ Importamos el componente desde la carpeta

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Joyeria />  {/* ✅ Mostramos el componente Joyeria aquí */}
      </header>
    </div>
  );
}

export default App;
