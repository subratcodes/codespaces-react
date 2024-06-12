import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../Assets/logo.jpg';


export default function RestaurantInfoHolder({data}){

    return <Card style={{ width: '100%'}} classname="rounded p-2">
    <Card.Img src={logo} thumbnail  />
   
    <Card.Body className="">
      <Card.Title>{data.restaurantName} </Card.Title>
      <Card.Text>
        Some Info
      </Card.Text>
      <Button variant="secondary p-2 ">Visit Website ?</Button>
    </Card.Body>
   

  </Card>

}