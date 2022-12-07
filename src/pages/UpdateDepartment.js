import axios from "axios";
import {useEffect, useRef} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function UpdateDepartment(){

    const departmentName  = useRef("");

    const navigate = useNavigate();
    const {departmentId} = useParams();


    useEffect(()=> {

        axios.get(`http://localhost:5106/Department/${departmentId}`)
        .then((response)=>{
            departmentName.current.value = response.data.departmentName;
        })
    },[])


    function updateDepartmentHandler(){

        var payload ={
            departmentName:departmentName.current.value,
            departmentId:departmentId
        };

        axios.put(`http://localhost:5106/Department/`, payload)
        .then((response)=> {
          navigate("/all-department");
    
        });


    }

    return (
    <>

    <legend> Update Department</legend>
    <Form>

      <Form.Group className="mb-3" controlId="formDepartmentName ">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder="Department" ref={departmentName }/>
      </Form.Group>

      
      </Form>

      <Button variant="primary" type="submit" onClick={updateDepartmentHandler}>
        Submit
      </Button>
    </>

    );

}
export default UpdateDepartment;