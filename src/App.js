
import './App.css';
import Layout from './components/shared/Layout';
import AllEmployee from './pages/AllEmployee';
import AddEmployee from './pages/AddEmployee';
import {Route,Routes} from "react-router-dom";
import UpdateEmployee from "./pages/UpdateEmployee";
import AddDepartment from './pages/AddDepartment';
import AllDepartment from './pages/AllDepartment';
import UpdateDepartment from './pages/UpdateDepartment';



function App() {
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<AllEmployee></AllEmployee>}>

          </Route>
          </Routes>


          <Routes>
          <Route path="/add-employee" element={<AddEmployee></AddEmployee>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/update-employee/:id" element={<UpdateEmployee></UpdateEmployee>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/all-department" element={<AllDepartment></AllDepartment>}>
          </Route>
        </Routes>
 

        <Routes>
          <Route path="/add-department" element={<AddDepartment></AddDepartment>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/update-department/:departmentId" element={<UpdateDepartment></UpdateDepartment>}>
          </Route>
        </Routes>
 
      
      

      
    

      </Layout>
      
      
  );
}

export default App;
