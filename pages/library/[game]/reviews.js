import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ReviewsList from '../../../components/reviews-list.js'

export default function Reviews()
{
    const router = useRouter()
    const { game, username } = router.query

    const [reviews, setReviews] = useState([])
    const [averageRating, setAverageRating] = useState(0) //0 = no rating yet

    useEffect(() => {
        if(game !== undefined)
        {
            //let query = {count: reviewCount, rating: selectedRating}
            let url = new URL('http://localhost:3005/library/' + game + '/reviews')
            //url.search = new URLSearchParams(query).toString();
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
                setReviews(data.reviews)
                setAverageRating(data.averageRating)
            })
        }
      },[game])

    return(
        <div>
            <h1>{game}</h1>
            <ReviewsList title = {game} username = {username} noLink = {true} averageRating = {averageRating} reviews = {reviews}/>
        </div>
    )
}