import './App.css';
//importamos los  componentes
import CompClienteMostrar from './componentes/CompClienteMostrar';
import CompAgregarClientes from './componentes/CompAgregarClientes';
import CompModClientes from './componentes/CompModClientes';
import MenuC from './componentes/ComMenu';
import CompFooter from './componentes/Cfooter';

// importamos  router
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <MenuC/>
      <BrowserRouter>
      <Routes>
      <Route path= '/clientes' element = {<CompClienteMostrar />} />
        <Route path= '/clientes/agregar' element = {<CompAgregarClientes />} />
        <Route path= '/clientes/editar/:id' element = {<CompModClientes />} />     
     </Routes>
     </BrowserRouter>
     <CompFooter />
    </div>
  );
}

export default App;
