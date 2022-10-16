import { useEffect } from 'react'
//import axios from 'axios'
import user from '../__Mocks__/user.json'
import activity from '../__Mocks__/activity.json'
import averageSessions from '../__Mocks__/average-sessions.json'
import performance from '../__Mocks__/performance.json'
function GetData(userID, setUser, setUserActivity, setUserAvgSession, setUserPerf, setLoading, setUserScore) {
    const fetchData = () => {
        setUser(user.data)
        setUserActivity(activity.data)
        setUserAvgSession(averageSessions.data)
        setUserPerf(performance.data)
        if (user.data.score) {
            setUserScore(user.data.score)
        }else{
            setUserScore(user.data.todayScore)
        }
        setLoading(false)
        
        /*
        const URL = `http://localhost:4000/user/${userID}`
        const URLActivity = `http://localhost:4000/user/${userID}/activity`
        const URLAvgSessions = `http://localhost:4000/user/${userID}/average-sessions`
        const URLPerf = `http://localhost:4000/user/${userID}/performance`

        const getURL = axios.get(URL)
        const getURLActivity = axios.get(URLActivity)
        const getURLAvgSessions = axios.get(URLAvgSessions)
        const getURLPerf = axios.get(URLPerf)
        axios.all([getURL, getURLActivity, getURLAvgSessions, getURLPerf]).then(
            axios.spread((...allData) => {
                const allDataURL = allData[0].data.data
                const allDataActivity = allData[1].data.data
                const allDataAVGPerf = allData[2].data.data
                const allDataPerf = allData[3].data.data
                if (allDataURL.score) {
                    setUserScore(allDataURL.score)
                }else{
                    setUserScore(allDataURL.todayScore)
                }

                setUser(allDataURL)
                setUserActivity(allDataActivity)
                setUserAvgSession(allDataAVGPerf)
                setUserPerf(allDataPerf)
                setLoading(false)
            })
        )
        */
        
    }
    useEffect(() => {
        fetchData()
    }, [])
}

export default GetData