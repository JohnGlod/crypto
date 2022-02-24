import { useLocation, Navigate } from "react-router-dom";
import {useSelector} from 'react-redux'
import { useMoralis } from "react-moralis";

export const RequireAuth = ({children}) => {
  //const auth = useSelector(state => state.auth.connected)

  const {isAuthenticated} = useMoralis()
  const location = useLocation()
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to={'/'} state={{from: location}} />
  }
  
  return children
}

