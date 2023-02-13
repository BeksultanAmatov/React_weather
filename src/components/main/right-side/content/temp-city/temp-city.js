import './temp-city.css';

const TempCity = () => {
    return(
        <div className="temp-city">
            <div className="temp-main">
                <div className="celcium">
                    5°C
                </div>
                <div className="description">
                    <div className="imgg">
                        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather icon"></img>
                    </div>
                    <div className="desc">
                        Cloud
                    </div>
                </div>
            </div>
            <div className="line-block">
                <div className="line"></div>
            </div>
            <div className="temp-another">
                <div className="feels-like">
                    Feels like: 4°C
                </div>
                <div className="max-temp">
                    Max: 7°C
                </div>
                <div className="min-temp">
                    Min-Temp: 0°C
                </div>
            </div>
        </div>
    )
}

export default TempCity;