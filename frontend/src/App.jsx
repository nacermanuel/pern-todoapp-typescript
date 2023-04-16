import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';


function App() {

  return (
    //FALTA AGREGAR EL STORE
    //<Provider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    //</Provider>
  )
}

export default App
