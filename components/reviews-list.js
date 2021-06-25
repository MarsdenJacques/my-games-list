import Rating from './rating.js'
import Review from './review.js'

export default function Reviews(props)
{
    let title = props.title
    let count = props.count
    let username = props.username
    let noLink = props.noLink

    //reviews list state
    //reviews filter?

    return(
        <div>
            <Rating title = {title} username = {username} noLink = {noLink}/>
            <Review rating = {5} text = 'This game is great!'/>
        </div>
    )
}