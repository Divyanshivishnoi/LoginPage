
import {useNavigate} from 'react-router-dom';
import { handleSuccess } from '../utils';
import {ToastContainer} from 'react-toastify'
const Home = () => {
    const navigate= useNavigate();

    const handlelogout = (e) =>{
        localStorage.removeItem('token');
        handleSuccess("User Loggedout")
        setTimeout(() =>{
      navigate('/login');
        },1000)
    }
    return (  
        <div>
            <h1>Home</h1>
            <button onClick={handlelogout}>Logout</button>
            <ToastContainer/>
        </div>
    );
}
 
export default Home;