import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Post} from './Post/Post'
import {Consulta} from './Consulta/Consulta'
import {Filtro} from './Filtro/Filtro'
import {Login} from './Login/Login'
import {VerUsuario} from './Datos/VerUsuario'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='Filtro' element={<Filtro/>}/>
      </Routes>

      
      <Routes>
      <Route path='/Posteo' element={<Post/>}/>
      </Routes>

      <Routes>
        <Route path='/Consulta' element={<Consulta></Consulta>}/>
      </Routes>

      <Routes>
        <Route path='/datos' element={<VerUsuario/>}/>
      </Routes>

      <Routes>
        <Route path='/' element={<Login></Login>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
