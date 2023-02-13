import './main-part.css';
import LeftSide from './left-side/left-side'
import RightSide from './right-side/right-side'

const Mein = () => {
    return(
        <div className="main">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Mein;
