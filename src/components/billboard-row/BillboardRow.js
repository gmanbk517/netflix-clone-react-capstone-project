import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { image_url } from '../../axios/API_END_POINTS'
import styles from './styles/BillboardRow.module.css'
import { GrPlayFill } from 'react-icons/gr'
import { FiInfo } from 'react-icons/fi'

const BillboardRow = () => {
  const StoreInfo = useSelector(state => state.movies)
  const [movies] = useState(StoreInfo.movieCollection)

  const randomMovie = () => {
    return Math.floor(Math.random() * 20)
  }

  const netflixOriginalsCollection = () => {
    if (movies.NetflixOriginals) {
      return movies.NetflixOriginals[randomMovie()]
    }
  }

  const selectedMovie = netflixOriginalsCollection()
  console.log(selectedMovie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movies.NetflixOriginals)

  return (
    <div>
      <div className={styles['image-container']}>{selectedMovie ?
        (
          <div>
            <img
              className={styles.image}
              src={`${image_url}${selectedMovie.backdrop_path}`}
              alt='Billboard-cover-image'
            />
            <div className={styles.contents}>
              <button className={styles.button}><GrPlayFill className={styles.icons}/>Play</button>
              <button className={`${styles.button} ${styles.button2}`}><FiInfo className={styles.icons}/>More info</button>
            </div>
            <h1 className={styles.description}>
              {truncate(selectedMovie.overview, 140)}
            </h1>
            <div className={styles.fadeBottom}></div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default BillboardRow