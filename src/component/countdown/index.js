import React, { useState, useEffect } from 'react';

function Countdown() {
    const finalDate = new Date("June 5, 2021 17:47:25").getTime();
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [days, setDays] = useState(0);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = finalDate - now;

            const daysCount = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursCount = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesCount = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsCount = Math.floor((distance % (1000 * 60)) / 1000);
          
            setSeconds(secondsCount);
            setMinutes(minutesCount);
            setHours(hoursCount);
            setDays(daysCount);

            if(distance < 0) {
                clearInterval(interval);
                setFinish(true)
            }
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
            {finish ? (
                <h1>Sudah Selesai</h1>
            ) : (
                <div className="flex justify-center items-center m-auto">
                    <div className="card-count shadow-lg">
                        <h1>{days}</h1>
                        <h3>Hari</h3>
                    </div>
                    <h1 className="separate-countdown">:</h1>
                    <div className="card-count shadow-lg">
                        <h1>{hours}</h1>
                        <h3>Jam</h3>
                    </div>
                    <h1 className="separate-countdown">:</h1>
                    <div className="card-count shadow-lg">
                        <h1>{minutes}</h1>
                        <h3>menit</h3>
                    </div>
                    <h1 className="separate-countdown">:</h1>
                    <div className="card-count shadow-lg">
                        <h1>{seconds}</h1>
                        <h3>detik</h3>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Countdown;