'use client'
import Countdown from "react-countdown";

export function CounterDown({ time }) {
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <span>
                {days}d  {hours}h  {minutes}m  {seconds}s
            </span>
        );
    };
    return (
        <Countdown date={Date.now() + time} renderer={renderer} />
    )
}