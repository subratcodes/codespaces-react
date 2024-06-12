
const BASE_URL="https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location";



  function searchRestaurantsByCityState(state,city,pageNo){

        return new Promise( async (res,rej)=>{

            try {

                let url=`${BASE_URL}/state/${state}/city/${city}/${pageNo}`

                let result=await fetch(url,getHeaders());

               let jsonData=await result.json();
               

                res(jsonData);

            } catch (error) {

                rej(err)
            
            }


        })



}



function getHeaders(){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '674d1e661cmsh44f74438ef2755fp182682jsnb9020b7bb1e6',
            'x-rapidapi-host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    return options;
}


export default searchRestaurantsByCityState;

