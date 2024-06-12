
import {useParams} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantInfoHolder from '../Components/RestaurantInfoHolder';
import Navigation from '../Components/Navigation';
import Restaurants from './Restaurants';
import {useState,useEffect} from 'react';
import searchRestaurantsByCityState from '../Utils/api/SearchPage.js';
import PageComponent from '../Components/PageComponent';

export default function SearchPage(){

   const[page,setPageNo]=useState(0);
   const[data,setData]=useState({});
   const[loading,setLoading]=useState(false);

   const[formData,setFormData]=useState({
      city:'Jersey City',
      state:'NJ',
      page:0
   })

   useEffect(()=>{

      setLoading(true);

      searchRestaurantsByCityState(formData.state,formData.city,formData.page).then(res=>{
         console.log(res);
         res.restaurants?.shift();
         setData(res)
         setLoading(false);

      }).catch(err=>{
         setLoading(false);

      })


   },[])



return <div>
   <Navigation>

   </Navigation>
   
   <Restaurants data={data}>

   

   </Restaurants>
   
   <PageComponent/>

   
</div>



}