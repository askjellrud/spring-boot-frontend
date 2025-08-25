import {useEffect, useState} from "react";

type Child = {
    name: string;
    birthDate: string;
}

type Application = {
    id: string;
    applicantId: string;
    createdAt: string;
    children: Child[];
    status: string;
}


const Applications = () => {

    const [applications, setApplications] = useState<Application[]>([]);

    const fetchApplications = () => {
        fetch('http://localhost:8080/applications')
            .then((response) => response.json())
            .then((data: Application[]) => {
                setApplications(data);
            });
    };


    useEffect(() => {
        fetchApplications();
    }, []);

    return (
        <>
            <div>
                {applications.map((application) => {
                    return (
                        <div style={{padding: "10px"}}>Application {application.id}</div>
                    );
                })}

                <button onClick={() => fetchApplications()}>
                    Refresh applications
                </button>
            </div>
        </>
    )
}

export default Applications;
