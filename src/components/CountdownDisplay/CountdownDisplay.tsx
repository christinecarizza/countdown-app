import { useCountdown } from "../../hooks/useCountdown"
import "./CountdownDisplay.scss"

interface CountdownDisplayProps {
    targetDate: string;
    showHideUnits: boolean;
}

export default function CountdownDisplay({ targetDate, showHideUnits }: CountdownDisplayProps) {
    const {days, hours, minutes, seconds} = useCountdown(targetDate);

    return (
        <div className="countdown-container">
            <div className="days">
                <span className="day">{days}</span>
                {showHideUnits && <span>Days</span>}
            </div>
            <div className="divider">:</div>
            <div className="hours">
                <span className="hour">{hours}</span>
                {showHideUnits && <span>Hours</span>}
            </div>
            <div className="divider">:</div>
            <div className="minutes">
                <span className="minute">{minutes}</span>
                {showHideUnits && <span>Minutes</span>}
            </div>
            <div className="divider">:</div>
            <div className="seconds">
                <span className="second">{seconds}</span>
                {showHideUnits && <span>Seconds</span>}
            </div>
        </div>
    )
}