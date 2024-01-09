import { Route, Routes } from 'react-router-dom';

import { Homepage } from './components/pages/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/restaurants/:city"></Route>
    </Routes>
  );
}

export default App;
