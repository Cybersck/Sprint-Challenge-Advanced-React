import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import useAxios from '../Hooks/useAxios'
  import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

 const GetData = (props) => {

    let [data] = useAxios(props.url)
  
    return(<div>
        { data !== null && data !== undefined &&
          data.map(p => (
          <Card key={p.id}>
          <CardBody>
            <CardTitle>Name: {p.name}</CardTitle>
            <CardSubtitle>{p.country}</CardSubtitle>
          </CardBody>
          </Card>      
          ))
        }
    </div>)
  
  }

  export default GetData;