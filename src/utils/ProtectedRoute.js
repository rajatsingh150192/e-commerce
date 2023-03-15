import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => 
{
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
            navigate('/login')
    },[])
    return children
}
export default ProtectedRoute;