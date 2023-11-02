import Kanbas from './kanbas';
import Labs from './labs';
import HelloWorld from './labs/a3/HelloWorld';
import Jkl from './labs/a3/Jkl';

import Qwe from './labs/a3/Qwe';

import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';

import Asd from './labs/a3/Asd';
import Rew from './labs/a3/Rew';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// import Xtr from './labs/a3/Xtr';

// function App() {
//   return (
//     <Xtr fds="gfd"/>
//   );
// }

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          {/* all routes after /Labs/* are handled by routes declared in the Labs component */}
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          

          <Route path="/q11/:dsa" element={<Jkl />} />

        </Routes>
      </div>

    
 

    </HashRouter>

  );
}

// function App() {
//   return (
//     <div>
//       <Link to="/hgf/3/4">EWQ</Link>
//       <Routes>
//         <Route path="/hgf/:asd/:bnm" element={<Asd asd={4}/>} />
//       </Routes>
//     </div>
//   );
// }



// function App() {
//   return (
//     <BrowserRouter>
//       <Link to="/qwe/21/14/wer">LINK A</Link>
//       <Routes>
//         <Route path="/qwe/:qwe/:wer/wer" element={<Rew />} />
//         <Route path="/asd/:zxc/:xcv" element={<Asd />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
