import axios from "axios";
import { useEffect, useState } from "react"

const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    

    useEffect(() => {
        setLoading(true)
        axios('../App.json')
            .then(res => setApps(res.data))
            .catch(err => setError(err))
            .finally(() =>setLoading(false))
    }, [])

    return { apps, loading, error }
}
export default useApps