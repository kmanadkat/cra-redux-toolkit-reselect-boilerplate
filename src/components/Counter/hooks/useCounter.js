import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { loadCounter, loadedCounter } from "../redux/slice"

const useCounter = (initialData) => {
    const [counter, setCounter] = useState(initialData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCounter())
    }, [dispatch])

    const increment = () => {
        dispatch(loadedCounter(counter + 1))
        setCounter(counter + 1)
    }

    const decrement = () => {
        dispatch(loadedCounter(counter - 1))
        setCounter(counter - 1)
    }

    return {increment, decrement}
}

export default useCounter
