import Rating from './rating.js'
import Review from './review.js'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import ListSieve from './list-sieve.js'

export default function Reviews(props)
{
    const router = useRouter()
    let title = props.title
    let username = props.username
    let noLink = props.noLink

    const [reviews, setReviews] = useState([])
    const [reviewCount, setReviewCount] = useState(0)
    const [averageRating, setAverageRating] = useState(4.25)
    const [selectedRating, setSelectedRating] = useState(0)


    useEffect(() => {
        if(title !== undefined)
        {
            let query = {count: reviewCount, rating: selectedRating}
            let url = new URL('http://localhost:3005/library/' + title + '/reviews')
            url.search = new URLSearchParams(query).toString();
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
                setReviews(data)
            })
        }
    },[title, selectedRating, reviewCount]) 

    //reviews list state
    //reviews filter?


    return(
        <div>
            <ListSieve selectedRating = {selectedRating} displayedRating = {selectedRating === 0 ? averageRating : selectedRating} totalReviews = {60}
            onSelectRating = {(rating) => {setSelectedRating(rating)}} onSelectCount = {(count) => {setReviewCount(count)}}/>
            <Rating title = {title} username = {username} noLink = {noLink}/>
            <Review rating = {5} text = 'This game is great!'/>
            <div>{reviews.map(review => <div key = {review}>{review}</div>)}</div> 
        </div>
    )
}