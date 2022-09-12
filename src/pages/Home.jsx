import { useState, useEffect } from 'react'
import Sidebar from "../components/Sidebar"
import GetData from "../components/GetData"
import Chart from '../components/RadarChart'
import BarCharts from '../components/BarCharts'
import LineCharts from '../components/LineCharts'
import RadialBarCharts from '../components/RadialBarCharts'
function Home(){
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])
    const [userActivity, setUserActivity] = useState([])
    const [userAvgSession, setUserAvgSession] = useState([])
    const [userPerf, setUserPerf] = useState([])
    GetData(setUser, setUserActivity, setUserAvgSession, setUserPerf, setLoading)
    console.log(user)
    //console.log(userActivity)
    //console.log(userAvgSession)
    //console.log(userPerf)
    //console.log(loading)
    /*if (user.score) {
        setUserScore(user.score)
    }else if(user.todayScore){
        setUserScore(user.todayScore)
    }*/
    return(loading ? null
        :
        (
        <main className='main'>
            <section className="sideSection">
                <Sidebar />
            </section>
            <section className='mainSection'>
                <div>
                    <h1 className='mainSection__heading'>Bonjour <span className='mainSection__heading--red'>{user.userInfos.firstName}</span></h1>
                </div>
                <div>
                    <article className='Chart'>
                        <BarCharts activity={userActivity} />
                    </article>
                    <article className='Chart'>
                        <LineCharts avgSession={userAvgSession} />
                        <Chart perf={userPerf} />
                        <RadialBarCharts score={user.score}/>
                    </article>
                </div>
            </section>
        </main>
        )
    )
}

export default Home