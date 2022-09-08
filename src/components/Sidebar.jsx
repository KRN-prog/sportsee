import { Link } from 'react-router-dom'
import zen from '../assets/icon/zen.png'
import nage from '../assets/icon/nage.png'
import velo from '../assets/icon/velo.png'
import muscu from '../assets/icon/muscu.png'
function Sidebar() {
    return(
        <aside className='aside'>
            <div className='asideContainer'>
                <div><img src={zen} alt="" /></div>
                <div><img src={nage} alt="" /></div>
                <div><img src={velo} alt="" /></div>
                <div><img src={muscu} alt="" /></div>
            </div>
            <div className='asideRotate'>
                <span>Copiryght, SportSee 2020</span>
            </div>
        </aside>
    )
}

export default Sidebar