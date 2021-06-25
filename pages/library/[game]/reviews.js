import { useRouter } from 'next/router'
import ReviewsList from '../../../components/reviews-list.js'

export default function Reviews()
{
    const router = useRouter()
    const { game, username } = router.query

    return(
        <div>
            <h1>{game}</h1>
            <ReviewsList title = {game} username = {username} noLink = {true}/>
        </div>
    )
}