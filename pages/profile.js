import { useState, useEffect } from 'react'

export default function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <ul>
            {data.map((d) => (
                <div key={d.id}>
                    <h2>{d.title}</h2>
                    <p>{d.body}</p>
                </div>

            ))}
        </ul>
    )
}