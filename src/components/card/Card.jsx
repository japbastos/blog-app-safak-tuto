import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>02/11/2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam. 
          Deserunt molestiae odit dignissimos, soluta similique voluptate impedit? 
          Incidunt vitae dolorem ipsa voluptates explicabo asperiores minus dolores 
          unde molestiae suscipit...
        </p>
        <Link href='/' className={styles.link}>Read more</Link>
      </div>
    </div>
  )
}