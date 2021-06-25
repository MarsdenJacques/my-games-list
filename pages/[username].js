import { useRouter } from 'next/router'

export default function UserProfile()
{
    const router = useRouter()
    const { username } = router.query

    
    //games list state

    return(
        <section>
            <div>{username}</div>
            <div>
                list of games here
            </div>
        </section>
    )
}