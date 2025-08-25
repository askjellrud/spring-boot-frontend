export type Utbetaling = {
    id: string;
    dato: string;
    beløp: number;
    beskrivelse: string;
};

type Props = {
    utbetaling: Utbetaling;
}

const UtbetalingItem = ({utbetaling}: Props) => {

    return (
        <>
            <div>
                Utbetaling {utbetaling.id} beløp: {utbetaling.beløp} kr
            </div>
        </>
    )
}

export default UtbetalingItem
