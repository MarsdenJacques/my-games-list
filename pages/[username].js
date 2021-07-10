import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function UserProfile()
{
    const router = useRouter()
    const { username } = router.query

    const [games, setGames] = useState([])

    useEffect(() => {
        if(username !== undefined)
        {
            let url = 'http://localhost:3005/' + username
            fetch(url, {
                method: 'GET'
            }).then((res) => {
                if(res.status !== 200)
                {
                    console.log('error')
                    return null
                }
                return res.json()
            }).then((data) => {
                setGames(data)
            })
        }
    }, [username])
    
    //games list state

    //fetch user info

    return(
        <section>
            <div>{username}</div>
            <div>
                list of games here
            </div>
            {games.map(game => {
                        return (<div key = {game}>
                            {game}
                        </div>
            )})}
            <p>Game count: {games.length}</p>
        </section>
    )
}