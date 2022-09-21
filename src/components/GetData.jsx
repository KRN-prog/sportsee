import { useEffect } from 'react'
import axios from 'axios'
function GetData(setUser, setUserActivity, setUserAvgSession, setUserPerf, setLoading, setUserScore) {
    const fetchData = () => {
        const URL1 = 'http://localhost:4000/user/18'
        const URL2 = 'http://localhost:4000/user/18/activity'
        const URL3 = 'http://localhost:4000/user/18/average-sessions'
        const URL4 = 'http://localhost:4000/user/18/performance'
        const getURL1 = axios.get(URL1)
        const getURL2 = axios.get(URL2)
        const getURL3 = axios.get(URL3)
        const getURL4 = axios.get(URL4)
        axios.all([getURL1, getURL2, getURL3, getURL4]).then(
            axios.spread((...allData) => {
                const allDataURL = allData[0].data.data
                const allDataActivity = allData[1].data.data
                const allDataAVGPerf = allData[2].data.data
                const allDataPerf = allData[3].data.data
                console.log(allDataURL)
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