import React, { useEffect, useState } from 'react';
import './CardAvailableServices.css';

const CardAvailableServices = () => { 
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const [dayData, setDayData] = useState('Loading...');
    const [monthData, setMonthData] = useState('Loading...');
    const [yearData, setYearData] = useState('Loading...');

    const fetchData = async (url, setter) => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const trimmedText = text;
        setter(trimmedText);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setter('Failed to load data');
      }
    };
   
    useEffect(() => {
      fetchData(`http://numbersapi.com/${day}`, setDayData);
      fetchData(`http://numbersapi.com/${month}`, setMonthData);
      fetchData(`http://numbersapi.com/${year}/year`, setYearData);
    }, [day, month, year]);
    return (
        <>
         <div className='CardAvailableServices'>
            <h2 className='heading'>{month}</h2>
            <h3 className='heading2'>Sample Heading</h3>
            <p className='para'>{monthData}</p>
            </div>

        <div className='CardAvailableServices'>
            <h2 className='heading'>{day}</h2>
            <h3 className='heading2'>Sample Heading</h3>
            <p className='para'>{dayData} </p>
        </div>    
           
            <div className='CardAvailableServices'>
            <h2 className='heading'>{year}</h2>
            <h3 className='heading2'>Sample Heading</h3>
            <p className='para'>{yearData}</p>
        </div>
        </>
    );
};
export default CardAvailableServices;