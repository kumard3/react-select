// const [minutes, setMinutes] = useState(1);
// const [seconds, setSeconds] = useState(10);

import { useEffect, useState } from "react";

export const useTime = (m: number, s: number) => {


    const [minutes, setMinutes] = useState(m);
    const [seconds, setSeconds] = useState(s);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    }, [minutes, seconds]);

}