import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"



const Home = () => {
    // using global context state instead of local state in the home component
    //  const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutsContext()

    // when the component is rendered (once)
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            // parse json
            const json = await response.json()
            // array of workout obj

            if (response.ok) {
                //     setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            } 

        }

        fetchWorkouts()
    }, [dispatch])

    // dependency array being empty fires it once  
    return (
        <div className='home'>
            <div className = "workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key = {workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>

        </div>
    )
}

export default Home