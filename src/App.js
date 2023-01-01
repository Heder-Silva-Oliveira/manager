import CreateClient from './pages/CreateClient';
import CreateProduct from './pages/CreatProduct';
import Dashboard from './pages/Dashboard'
import Sales from './pages/Sales';
import CreateSuply from './pages/CreateSuply';

import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';


function App() {
    return (
      <>
      <Router>
        <GlobalStyle/>
          <div className="App">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/cadastro-cliente" element={<CreateClient />} />
              <Route path="/cadastro-produto" element={<CreateProduct />} />
              <Route path="/cadastro-fornecedor" element={<CreateSuply/>} />
              <Route path="/cadastro-produtos" element={<CreateProduct/>} />             
              <Route path="/vendas" element={<Sales/>} /> 
            </Routes>          
          </div>   
      </Router>
      </>
     
    );
  }
  
  export default App;
  