import React, { useState, useEffect } from 'react';
import './css/style.css'

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b43fc685404373ff3f3ee1d2287a450e`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setCity(data.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>

                {
                    !city ? (<p className="errorMsg">No data found</p>) : (
                        <div> <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">{city.temp} &#176; Cel</h1>
                            <h3 className="tempin_max">Min : {city.temp_min} || Max : {city.temp_max}</h3>
                        </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>)
                }


            </div>
        </>
    )
}
export default TempApp;
