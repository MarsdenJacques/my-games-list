import styles from '../styles/Home.module.css'
import GameTile from '../components/game-tile.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <GameTile title = "Mario" username = 'zingari'/>
      <GameTile title = "Zelda" username = 'algus'/>
    </div>
  )
}
