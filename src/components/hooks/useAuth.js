
import { useContext } from "react";
import { AuthContext } from "../Firebase/Context/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;