import Link from 'next/link'
import Review from './review.js'

export default function Rating(props)
{
    let title = props.title
    let username = props.username
    let noLink = props.noLink
    let link = "/library/" + title + '/reviews'
    let publicRating = 4 //make state
    return(
        <div>
            {noLink ? <h2>{publicRating}/5 stars!</h2>:
            <Link href = {link}>
                <a><h2>{publicRating}/5 stars!</h2></a>
            </Link>}
            {username && 
            <div>
                <Review rating = {5} text = {'' + username + "'s review"} username = {username}/>
            </div>}
        </div>
    )
}