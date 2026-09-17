import { useEffect, useState } from "react";

// Defining the shape of the countdown
interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function useCountdown(targetDate: string) {

    const calculateTimeRemaining = (): Time => {

        const target = new Date(targetDate).getTime();
        const currentDate = new Date().getTime();
        const difference = target - currentDate;

        // Check if countdown has finished
        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }

        // Calculate days, hours, minutes, seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            days,
            hours,
            minutes,
            seconds,
        }

    }

    const [timeRemaining, setTimeRemaining] = useState<Time>(
        calculateTimeRemaining()
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [targetDate]);

    return timeRemaining;
}