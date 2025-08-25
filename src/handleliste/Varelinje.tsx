export type VareLinje = {
    navn: string;
    antall: number;
}

type Props = {
    varelinje: VareLinje;
}

const Varelinje = ({varelinje}: Props) => {

    return (
        <>
            <div>
                {varelinje.navn} - {varelinje.antall} stk
            </div>
        </>
    )
}

export default Varelinje
