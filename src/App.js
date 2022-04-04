import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Homepage from './Pages/Homepage';
import EditCategory from './Pages/EditCategory';
import DetailProduct from './Pages/DetailProduct';
import ListCategory from './Pages/ListCategory';
import ListProduct from './Pages/ListProduct';
import Complain from './Pages/Complain';
import AdminComplain from './Pages/AdminComplain';
import EditProduct from './Pages/EditProduct';
import AddProduct from './Pages/AddProduct'


function App() {
  // const adminUser ={
  //   email:'admin@admin.com',
  //   password:'root',
  // }

  // const [user, setUser] = useState({email:'', password:''});
  // const [error, setError] = useState('');

  // const isLogin = details => {
  //   console.log(details);
  // }

  // const Logout = () =>{
  //   console.log(Logout);
  // }

  return (
  <div>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/homepage" element={<Homepage />} />
      <Route exact path="/edit-category" element={<EditCategory />} />
      <Route exact path="/detail-product/:id" element={<DetailProduct />} />
      <Route exact path="/edit-product" element={<EditProduct />} />
      <Route exact path="/list-category" element={<ListCategory />} />
      <Route exact path="/list-product" element={<ListProduct />} />
      <Route exact path="/user-complain" element={<Complain />} />
      <Route exact path="/admin-complain" element={<AdminComplain />} />
      <Route exact path="/add-product" element={<AddProduct />} />
    </Routes>

    {/* {(user.email != '') ? (
      <Homepage/>
    ) : (
      <Login isLogin={isLogin} error ={error}/>
    )} */}
  </div>
  );
}

export default App;
