import './footer-temp.css';

const FooterTemp = () => {
    return(
        <div className="bottom">
            <div className="time">
                <span className="time-name">Time</span>
                <span className="time-clock">11:00am</span>
                <span className="time-date">February 12,2023</span>
            </div>
            <div className="humidity">
                <span className="humidity-name">Humidity</span>
                <span className="humidity-percent">50%</span>
            </div>
            <div className="wind">
                <span className="wind-name">Wind Speed</span>
                <span className="wind-speed">3km/h</span>
            </div>
        </div>
    )
}

export default FooterTemp;