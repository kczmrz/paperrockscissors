
import { HashRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import PlayGame from './components/Play';
import { useParams } from 'react-router-dom';

function App() {
  let username = useParams();
  return (
  <> 
   <Router>
     <Routes> 
         <Route path='/' element={<MainPage/>}/>
         <Route path='/game/:id/:name' element={<PlayGame/>}/>
     
     </Routes>
   </Router>
  </>  );
}

export default App;
