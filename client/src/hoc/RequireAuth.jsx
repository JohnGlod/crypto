import { useLocation, Navigate } from "react-router-dom";
import {useSelector} from 'react-redux'
export const RequireAuth = ({children}) => {
  const auth = useSelector(state => state.auth.connected)
  const location = useLocation()
  console.log(auth)
  if (!auth) {
    return <Navigate to={'/'} state={{from: location}} />
  }
  
  return children
}
