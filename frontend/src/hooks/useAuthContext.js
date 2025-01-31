import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react'


export const useAuthContext = () => {
    const context = useContext(AuthContext)
    // obj with state and dispatch
    // everytime u use auth data, use useAuthcontext to get the context value

    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context 
}