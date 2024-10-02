import { WorkoutsContext } from '../context/WorkoutsContext';
import { useContext } from 'react'


export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)
    // obj with state and dispatch
    // everytime u use workout data, use useworkoutscontext to get the context value

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }



    return context 
}