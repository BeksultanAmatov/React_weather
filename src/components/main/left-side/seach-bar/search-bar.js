import { useEffect } from 'react';
import './search-bar.css';
import { getFormatterWeatherData } from '../../weatherService';

const SearchBar = () => {

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormatterWeatherData('paris')
        }
        fetchWeatherData();
    }, [])

    return(
        <div className="search">
            <input type="text" placeholder="Enter Location"></input>
        </div>
    )
}

export default SearchBar;