import { useState, useEffect } from 'react'
import Sidebar from "../components/Sidebar"
import GetData from "../components/GetData"
import Chart from '../components/RadarChart'
import BarCharts from '../components/BarCharts'
import LineCharts from '../components/LineCharts'
import RadialBarCharts from '../components/RadialBarCharts'
import Recap from '../components/Recap'

import fireIcon from '../assets/icon/fire.png'
import chikenWingsIcon from '../assets/icon/chiken_wing.png'
import appleIcon from '../assets/icon/apple.png'
import cheeseburgerIcon from '../assets/icon/cheeseburger.png'
function Home(){
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])
    const [userActivity, setUserActivity] = useState([])
    const [userAvgSession, setUserAvgSession] = useState([])
    const [userPerf, setUserPerf] = useState([])
    GetData(setUser, setUserActivity, setUserAvgSession, setUserPerf, setLoading)
    console.log(user)
    return(loading ? null
        :
        (
        <main className='main'>
            <section className="sideSection">
                <Sidebar />
            </section>
            <div className='greeting'>
                <h1 className='mainSection__heading'>Bonjour <span className='mainSection__heading--red'>{user.userInfos.firstName}</span></h1>
            </div>
            <section className='mainSection'>
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
            <section className='sectionRight'>
                <div>
                    <Recap img={fireIcon} altImg="fireIcon" categorie="Calories" value={user.keyData.calorieCount} uniteMesure="Kcal" color="#000" />
                    <Recap img={chikenWingsIcon} altImg="chikenWingsIcon" categorie="Proteines" value={user.keyData.proteinCount} uniteMesure="g" color="#000" />
                    <Recap img={appleIcon} altImg="appleIcon" categorie="Glucides" value={user.keyData.carbohydrateCount} uniteMesure="g" color="#000" />
                    <Recap img={cheeseburgerIcon} altImg="cheeseburgerIcon" categorie="Lipides" value={user.keyData.lipidCount} uniteMesure="g" color="#000" />
                </div>
            </section>
        </main>
        )
    )
}

export default Home