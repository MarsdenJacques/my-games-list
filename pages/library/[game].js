import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ReviewsList from '../../components/reviews-list'

export default function Game(){
  const router = useRouter()
  const { game } = router.query

  //if games not cached then pull all games
  //other game info
  const [reviews, setReviews] = useState([])
  const [averageRating, setAverageRating] = useState(0) //0 = no rating yet

  useEffect(() => {
    if(game !== undefined)
    {
        //let query = {count: reviewCount, rating: selectedRating}
        let url = new URL('http://localhost:3005/library/' + game)
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
          //set other game info
            setReviews(data.reviews)
            setAverageRating(data.averageRating)
        })
    }
  },[game])

  return(
      <div>
          <h1>Game: {game}</h1>
          <ReviewsList title = {game} count = {5} reviews = {reviews} averageRating = {averageRating}/> 
      </div>
  )
}
