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
    
    const [reviewCount, setReviewCount] = useState(0)
    const [selectedRating, setSelectedRating] = useState(0)

    //move fetch to next level above

    //reviews list state
    //reviews filter?


    return(
        <div>
            <ListSieve selectedRating = {selectedRating} displayedRating = {selectedRating === 0 ? props.averageRating : selectedRating} totalReviews = {props.reviews.length}
            onSelectRating = {(rating) => {setSelectedRating(rating)}} onSelectCount = {(count) => {setReviewCount(count)}}/>
            <Rating title = {title} username = {username} noLink = {noLink}/>
            <Review rating = {5} text = 'This game is great!'/>
            <div>{props.reviews.map(review => <div key = {review}>{review}</div>)}</div>
            <div>review count: {props.reviews.length}</div>
            <div>average rating: {props.averageRating}</div>
        </div>
    )
}
//only map while rating and count under value, load all at start