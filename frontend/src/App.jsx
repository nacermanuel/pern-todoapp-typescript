import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import {store} from './redux/store.js';



function App() {

  return (
    //FALTA AGREGAR EL STORE
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <AppRouter/>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
