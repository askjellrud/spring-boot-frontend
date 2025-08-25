import Varelinje, {type VareLinje} from "./Varelinje.tsx";
import NyVare from "./NyVare.tsx";
import {useState} from "react";

const Handleliste = () => {
    const [varer, setVarer] = useState<VareLinje[]>([]);

    return (
        <>
            <div>
                {varer.map((vare, index) => {
                    return <Varelinje key={index} varelinje={vare}/>
                })}
            </div>

            <div style={{ paddingTop: "20px" }}>
                Ny vare

                <NyVare nyVare={(navn, antall) => {
                    setVarer([...varer, {navn, antall}]);
                }}/>
            </div>
        </>
    )
}

export default Handleliste
