import './App.css';
import Home from './Componants/Home/Home';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="bg-white">
      {/* <Header/> */}
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
