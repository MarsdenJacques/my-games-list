import { useRouter } from 'next/router'
import ReviewsList from '../../components/reviews-list'

export default function Game(){
  const router = useRouter()
  const { game } = router.query

  return(
      <div>
          <h1>Game: {game}</h1>
          <ReviewsList title = {game} count = {5}/>
      </div>
  )
}
