import axios from "axios";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddDepartment()
{

  const departmentName  = useRef("");
  

  const navigate = useNavigate();

  function addDepartmentHandler(){

    var payload =
    {
     
      
      departmentName: departmentName.current.value
    };

    axios.post("http://localhost:5106/Department", payload)
    .then((response)=> {
      navigate("/");

    });
  }
  

    return(
     <>

    <legend> Add New Department</legend>
    <Form>

      <Form.Group className="mb-3" controlId="formDepartmentName ">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder="Department" ref={departmentName }/>
      </Form.Group>

      
      </Form>

      <Button variant="primary" type="submit" onClick={addDepartmentHandler}>
        Submit
      </Button>
      
      </>

    );

      
      

    
}

export default AddDepartment;
