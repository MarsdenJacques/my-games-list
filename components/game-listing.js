import Rating from './rating.js'

export default function GameListing({title, rating})
{
    return(
        <div>
            <p>{title}</p>
            <Rating title = {title} rating = {rating}/>
        </div>
    )
}