import {useState} from "react";

type Props = {
    nyVare: (navn: string, antall: number) => void
}

const NyVare = ({nyVare}: Props) => {

    const [navn, setNavn] = useState<string>("");
    const [antall, setAntall] = useState<number>(1);

    return (
        <div>
            <div>
                Navn <input
                type={"text"}
                value={navn}
                onChange={(e) => {
                    setNavn(e.target.value)
                }}/>
            </div>
            <div>
                Antall <input type={"number"}
                              value={antall}
                              onChange={(e) => {
                                  const value = e.target.value;
                                  setAntall(Number(value));
                              }}
            />
            </div>
            <div style={{padding: "10px"}}>
                <button onClick={() => nyVare(navn, antall)}>Ny vare</button>
            </div>
        </div>
    )
}

export default NyVare
