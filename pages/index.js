import styles from '../styles/Home.module.css'
import GameListing from '../components/game-listing.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <GameListing title = "Mario" rating = {4}/>
      <GameListing title = "Zelda" rating = {5}/>
    </div>
  )
}
