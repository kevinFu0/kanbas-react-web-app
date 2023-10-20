import Kanbas from './kanbas';
import Labs from './labs';
import HelloWorld from './labs/a3/HelloWorld';

import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';

import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
