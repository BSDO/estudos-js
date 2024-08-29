import { Rotas } from '../routes';
import './style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {  


  return (
    <>  
      <div className='container'>

        <ToastContainer 
          position="top-right"
          autoClose={3000} />

            <Rotas />
        
      </div>

    </>
  )

}
