import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useEffect, useRef} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



function UpdateEmployee(){

    
    const firstName  = useRef("");
    const lastName  = useRef("");
    const email   = useRef("");
    const dateOfBirth   = useRef("");
    const age    = useRef("");
    const salary    = useRef("");
    const department    = useRef("");
    

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5106/Employee/${id}`)
        .then((response)=>
        {
             
            firstName.current.value = response.data.firstName;
            lastName.current.value = response.data.lastName;
            email.current.value = response.data.email;
            dateOfBirth.current.value = response.data.dateOfBirth;
            age.current.value = response.data.age;
            salary.current.value = response.data.salary;
            department.current.value = response.data.department;
        });

    },[])

    function updateEmployeeHandler(){

        var payload =
        {
         
          firstName : firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          dateOfBirth: dateOfBirth.current.value,
          age: age.current.value,
          salary: salary.current.value,
          department: department.current.value,
          id:id
        };
    
        axios.put(`http://localhost:5106/Employee/`, payload)
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

      <Button variant="primary" type="button" onClick={updateEmployeeHandler}>
        Submit
      </Button>
      


    </>
    );
}

export default UpdateEmployee;