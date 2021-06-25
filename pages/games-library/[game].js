import { useRouter } from 'next/router'

export default function Game(){
  const router = useRouter()
  console.log(router.query)
  const { game } = router.query

  return <p>Game: {game}</p>
}
