import { useEffect } from 'react'
import axios from 'axios'
function GetData(setUser, setUserActivity, setUserAvgSession, setUserPerf, setLoading, setUserScore) {
    const fetchData = () => {
        const URL = 'http://localhost:4000/user/18'
        const URLActivity = 'http://localhost:4000/user/18/activity'
        const URLAvgSessions = 'http://localhost:4000/user/18/average-sessions'
        const URLPerf = 'http://localhost:4000/user/18/performance'
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
    }
    useEffect(() => {
        fetchData()
    }, [])
}

export default GetData