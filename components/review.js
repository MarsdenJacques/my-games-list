import Link from 'next/link'

export default function Review ({rating, text, username})
{

    //add ability to like (will require patch)

    let userLink = '/' + username
    return(
        <div>
            {username && <h2><Link href = {userLink}><a>{username}'s</a></Link> review</h2>}
            <h3>Score: {rating}/5</h3>
            <p>{text}</p>
        </div>
    )
}