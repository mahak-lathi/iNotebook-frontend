//import Notes from './Notes';
import AddNote from './AddNote';
//import Yournotes from './Yournotes';


const Home = (props) => {
  const {showAlert}=props;

  
  return (
    <div>
      
      <AddNote showAlert={showAlert} />
     
      
    </div>
    )
}


export default Home
