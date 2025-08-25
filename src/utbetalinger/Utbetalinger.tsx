import UtbetalingItem, {type Utbetaling} from "./UtbetalingItem.tsx";
import {useEffect, useState} from "react";

const Utbetalinger = () => {

    const [utbetalinger, setUtbetalinger] = useState<Utbetaling[]>([]);

    useEffect(() => {
        const hent = async () => {
            const res = await fetch("/utbetalinger.json");
            const data = await res.json();
            setUtbetalinger(data);
        }
        hent();
    }, []);

    return (
        <>
            <div>
                {utbetalinger.map((utbetaling) => {
                    return <UtbetalingItem key={utbetaling.id} utbetaling={utbetaling}/>
                })}
            </div>

        </>
    )
}

export default Utbetalinger
