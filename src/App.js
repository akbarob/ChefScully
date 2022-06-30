import './App.css';
import Main from './Components/Main component';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Main/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
