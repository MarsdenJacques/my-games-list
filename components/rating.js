import Link from 'next/link'

export default function Rating({title, rating})
{
    let link = "/games-library/" + title
    return(
        <div>

            <Link href = {link}>
                <a>{rating}/5 stars!</a>
            </Link>
        </div>
    )
}