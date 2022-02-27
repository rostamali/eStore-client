import React, { useEffect, useRef, useState } from 'react';
import './CountDown.css';

const CountDown = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = new Date('Feb 25, 2022 00:00:00').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 *24));
            const hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(()=>{
        startTimer();
        return ()=>{
            clearInterval(interval.current);
        };
    })

    return (
        <>
            <div id="countdown__timer">
                <div className="days">
                    <h2 className="countdown__time">{timerDays} <span className="countdown__time--title">Days</span> </h2>
                </div>
                <div className="hours">
                    <h2 className="countdown__time">{timerHours} <span className="countdown__time--title">hours</span> </h2>
                </div>
                <div className="days">
                    <h2 className="countdown__time">{timerMinutes} <span className="countdown__time--title">mins</span> </h2>
                </div>
                <div className="days">
                    <h2 className="countdown__time">{timerSeconds} <span className="countdown__time--title">secs</span> </h2>
                </div>
            </div>
        </>
    );
};

export default CountDown;