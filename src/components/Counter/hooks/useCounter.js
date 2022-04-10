import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { loadScore, loadedScore } from "../redux/slice"

const useCounter = (initialData) => {
    const [score, setScore] = useState(initialData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadScore())
    }, [dispatch])

    const increment = () => {
        dispatch(loadedScore(score + 1))
        setScore(score + 1)
    }

    const decrement = () => {
        dispatch(loadedScore(score - 1))
        setScore(score - 1)
    }

    return {increment, decrement}
}

export default useCounter
