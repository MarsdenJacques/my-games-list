import { useState, useEffect} from 'react'

    export default function Library(props)
    {

        //state games list

        const [games, setGames] = useState([])


        useEffect(() => {
            fetch('http://localhost:3005/library',{
                method: 'GET'
            }).then((res) => {
                if(res.status !== 200)
                {
                    console.log('error')
                    return null
                }
                return res.json()
            }).then((data) => {
                if(data !== null)
                {
                    setGames(data)
                }
            })
            .catch((res) => {
                console.log(res)
            })
        },[])

        return(
            <div>
                {games.map(game => {
                        return (<div key = {game}>
                            {game}
                        </div>
                )})}
                <p>Game count: {games.length}</p>
            </div>
        )
    }