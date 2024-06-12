import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantInfoHolder from '../Components/RestaurantInfoHolder';

export default function Restaurants({data}){

    return <Container>

        <Row>
          {data.restaurants?data.restaurants.map((val,index)=>{
            
            return(<Col key={index} className="p-2" lg={4}>

            <RestaurantInfoHolder data={val}></RestaurantInfoHolder>

            </Col>)
          }):null}

      </Row>

    </Container>


}

