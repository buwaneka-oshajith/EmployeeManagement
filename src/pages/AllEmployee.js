import axios from "axios";
import {useEffect, useState} from "react";
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../components/DeleteConfirmation";


function AllEmployee(){

    const [Employee, setEmployee] =useState([]);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(0);

    

    useEffect(()=> {

        axios.get("http://localhost:5106/Employee")
    .then((response)=>{
        setEmployee((existingData) => {
            return response.data;
        });

    });

    },[]);


    function confirmDeleteHandler() {
      axios
        .delete(`http://localhost:5106/Employee/${itemToDeleteId}`)
        .then((response) => {
          setShowModal(false);
          setEmployee((existingData) => {
            return existingData.filter((_) => _.id !== itemToDeleteId);
          });
          setItemToDeleteId(0);
        });
    }
  
    function showConfirmDeleteHandler(id) {
      setShowModal(true);
      setItemToDeleteId(id);
    }
  
    function hideConfirmDeleteHandler() {
      setShowModal(false);
  
      setItemToDeleteId(0);
    }
  

    

    return(
    <>

<DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
        hideConfirmDeleteHandler={hideConfirmDeleteHandler}
      ></DeleteConfirmation>

    

    <Row xs={1} md={2} className="g-4  mt-1">

    

      

          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Date Of Birth</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Department</th>
          <th>Update</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        {
      Employee.map((sv) => {

        return (

        <tr>
          <td> {sv.id}</td>
          <td>{sv.firstName}</td>
          <td>{sv.lastName}</td>
          <td>{sv.email}</td>
          <td> {sv.dateOfBirth}</td>
          <td>{sv.age}</td>
          <td>{sv.salary}</td>
          <td>{sv.department}</td>
          <td><Button variant="primary" type="button"  onClick={() => navigate(`/update-employee/${sv.id}`)}>
        Edit
      </Button></td>
      <td>
      <Button
                    type="button"
                    variant="danger"
                    onClick={() => showConfirmDeleteHandler(sv.id)}
                  >
                    Delete
                  </Button>
                  </td>
          
        
        </tr>
        );

})}

      </tbody>
    </Table>



  
      
    </Row>
    
    </>
    );
}

export default AllEmployee;