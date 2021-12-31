import Car from "./Car";
import MyForm from "./Form";
import FavoriteColor from "./Hook";
import ListItem from './List';

 
const Lists = ["Abay","Tana","Tekeze","Gibe"];
function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
      
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
        <MyForm/>
        <FavoriteColor/>

        <ListItem RiverList = {Lists}/>
      </>
    );
  }
  
  

  export default Garage;