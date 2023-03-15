import { Route, Routes } from "react-router-dom"
import Login from "../auth/Login"
import Register from "../auth/Register"
import AddProduct from "../product/AddProduct";
import UpdateProduct from "../product/UpdateProduct";
import ProtectedRoute from "../utils/ProtectedRoute";
function NavBarLink() {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/product/add' element={<ProtectedRoute> <AddProduct /></ProtectedRoute>}></Route>
                <Route path='/product/update' element={<UpdateProduct />}></Route>
                <Route path='/registration' element={<Register />}></Route>
            </Routes>
        </div>
    )
}
export default NavBarLink;