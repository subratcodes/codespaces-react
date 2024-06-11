import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantInfoHolder from '../Components/RestaurantInfoHolder';


export default function Restaurants(){

    return <Container fluid>

        <Row>
        <Col><RestaurantInfoHolder></RestaurantInfoHolder></Col>
        <Col><RestaurantInfoHolder></RestaurantInfoHolder></Col>
        <Col><RestaurantInfoHolder></RestaurantInfoHolder></Col>
        <Col><RestaurantInfoHolder></RestaurantInfoHolder></Col>
        <Col><RestaurantInfoHolder></RestaurantInfoHolder></Col>
      </Row>

    </Container>


}

