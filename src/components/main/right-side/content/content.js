import './content.css'
import CityName from './city-name/city-name';
import TempCity from './temp-city/temp-city';
import FooterTemp from './footer-temp/footer-temp';

const Conent = () => {
    return(
        <div className="content">
            <CityName />
            <TempCity />
            <FooterTemp />
        </div>
    )
}

export default Conent;