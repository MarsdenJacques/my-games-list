import Rating from './rating.js'

export default function GameTile({title, username})
{
    return(
        <div>
            <h1>{title}</h1>
            <Rating title = {title} username = {username}/>
        </div>
    )
}