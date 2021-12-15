import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import AllEmp from './components/AllEmp';
import AddEmp from './components/AddEmp';
import EditEmp from './components/EditEmp';


function App() {
  return (
    <Routes>
        <Route exact path="/" element={<AllEmp/>} />
        <Route exact path="/add" element={<AddEmp/>} />
        <Route exact path="/edit/:id" element={<EditEmp/>} />
    </Routes>
  );
}

export default App;
