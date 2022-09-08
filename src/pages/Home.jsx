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
    console.log(userAvgSession)
    //console.log(userPerf)
    //console.log(loading)
    return(loading ? null
        :
        (
        <main className='main'>
            <section className="sideSection">
                <Sidebar />
            </section>
            <section className='mainSection'>
                <div>
                    <h1>Bonjour {user.userInfos.firstName}</h1>
                </div>
                <article>
                    <Chart perf={userPerf} />
                </article>
                <article>
                    <BarCharts activity={userActivity} />
                </article>
                <article>
                    <LineCharts avgSession={userAvgSession} />
                </article>
                <article>
                    <RadialBarCharts />
                </article>
            </section>
        </main>
        )
    )
}

export default Home