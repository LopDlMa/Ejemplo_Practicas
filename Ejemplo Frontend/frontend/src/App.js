import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Post} from './Post/Post'
import {Consulta} from './Consulta/Consulta'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/Posteo' element={<Post/>}/>
      </Routes>

      <Routes>
        <Route path='/Consulta' element={<Consulta></Consulta>}/>
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
