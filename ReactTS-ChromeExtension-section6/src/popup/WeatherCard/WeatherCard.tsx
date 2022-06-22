import React, { useEffect } from 'react';
import { fetchOpenWeatherData } from '../../utils/api';

const WeatherCard: React.FC<{ city: string }> = ({ city }) => {
  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [city]);

  return <div>{city}</div>;
};

export default WeatherCard;
