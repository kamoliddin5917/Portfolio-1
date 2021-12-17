import { useEffect, useState } from "react";

function useUser(setter) {
    const [ repo, setRepo ] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/MahdiyDev/repos`)
        .then(res => res.json())
        .then(data => setRepo(data))
    }, [])

    if (setter === 'repo') {
        return { repo }
    }
}

export default useUser;
