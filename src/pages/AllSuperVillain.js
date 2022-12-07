import axios from "axios";
import {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function AllSuperVillain(){

    const [superVillains, setSuperVillains] =useState([]);

    useEffect(()=> {

        axios.get("http://localhost:5106/SuperVillain")
    .then((response)=>{
        setSuperVillains((existingData) => {
            return response.data;
        });

    });

    },[]);

    

    return<>

    <Row xs={1} md={2} className="g-4  mt-1">
      
      
        
        
          
          


          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>NAME</th>
          <th>FRANCHISE</th>
          <th>POWERS</th>
          
        </tr>
      </thead>
      <tbody>
        {
      superVillains.map((sv) => (

        <tr>
          <td> {sv.id}</td>
          <td>{sv.villainName}</td>
          <td>{sv.franchise}</td>
          <td>{sv.powers}</td>
        
        </tr>
        ))}

      </tbody>
    </Table>



       
      
    </Row>
    
    </>
}

export default AllSuperVillain;