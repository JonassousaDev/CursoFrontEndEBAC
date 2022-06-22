import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import './App.css';
import Dashboard from './Componentes/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Button variant="contained"> Olá Mundo</Button>
      <Dashboard />
    </div>
  );
}
export default App;
