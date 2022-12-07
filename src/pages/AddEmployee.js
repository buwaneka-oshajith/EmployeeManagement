import axios from "axios";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddEmployee()
{

  const firstName  = useRef("");
  const lastName  = useRef("");
  const email   = useRef("");
  const dateOfBirth   = useRef("");
  const age    = useRef("");
  const salary    = useRef("");
  const department    = useRef("");

  const navigate = useNavigate();

  function addEmployeeHandler(){

    var payload =
    {
     
      firstName : firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      dateOfBirth: dateOfBirth.current.value,
      age: age.current.value,
      salary: salary.current.value,
      department: department.current.value
    };

    axios.post("http://localhost:5106/Employee", payload)
    .then((response)=> {
      navigate("/");

    });
  }
  

    return(
     <>

    <legend> Add New Employee</legend>
    <Form>

      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" ref={firstName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" ref={lastName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  ref={email} />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formDOB">
        <Form.Label>Date Of Birth </Form.Label>
        <Form.Control type="Date" placeholder="Enter date of birth"  ref={dateOfBirth} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age </Form.Label>
        <Form.Control type="text" placeholder="Age"  ref={age}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSalry">
        <Form.Label>Salary </Form.Label>
        <Form.Control type="integer" placeholder="Salary in RS /="  ref={salary} />
      </Form.Group>


      
      

      
      <Form.Group className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Select type="text" placeholder="Department"  ref={department}  >
          <option>IT</option>
          <option>HR</option>
        </Form.Select >
        
      </Form.Group>
      </Form>

      <Button variant="primary" type="submit" onClick={addEmployeeHandler}>
        Submit
      </Button>
      
      </>

    );

      
      

    
}

export default AddEmployee;
