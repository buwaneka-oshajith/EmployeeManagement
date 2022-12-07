import axios from "axios";
import {useEffect, useState} from "react";
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate, useParams} from "react-router-dom";
import DeleteConfirmation from "../components/DeleteConfirmation";

function AllDepartment(){

    const [Department, setDepartment] =useState([]);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(0);

    useEffect(()=> {

        axios.get("http://localhost:5106/Department")
    .then((response)=>{
        setDepartment((existingData) => {
            return response.data;
        });

    });

    },[]);

    function confirmDeleteHandler() {
      axios
        .delete(`http://localhost:5106/Department/${itemToDeleteId}`)
        .then((response) => {
          setShowModal(false);
          setDepartment((existingData) => {
            return existingData.filter((_) => _.departmentId !== itemToDeleteId);
          });
          setItemToDeleteId(0);
        });
    }
  
    function showConfirmDeleteHandler(departmentId) {
      setShowModal(true);
      setItemToDeleteId(departmentId);
    }
  
    function hideConfirmDeleteHandler() {
      setShowModal(false);
  
      setItemToDeleteId(0);
    }

    

    return<>


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
          <th>Department Name</th>
          <th>Edit</th>
          <th>Delete </th>

        </tr>
      </thead>
      <tbody>
        {
      Department.map((sv) => (

        <tr>
          <td> {sv.departmentId}</td>
          <td>{sv.departmentName}</td>
          <td><Button variant="primary" type="button"  onClick={() => navigate(`/update-department/${sv.departmentId}`)}>
        Edit
      </Button></td>
      <td>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => showConfirmDeleteHandler(sv.departmentId)}
                  >
                    Delete
                  </Button>
                  </td>
          
        
        </tr>
        ))}

      </tbody>
    </Table>



       
      
    </Row>
    
    </>
}

export default AllDepartment;