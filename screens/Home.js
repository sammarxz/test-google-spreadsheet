import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home({ title, books }) {
  return (
    <>
      <Head>
        <title>Sam's Marxz Favourite Books from all time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{ title }</h1>
        </header>
        <ul className={styles.list}>
          { books.map(({ title, author, cover, link }) => (
            <li className={styles.item}>
              <a href={link} target="_blank">
                <article className={styles.book}>
                  <img src={cover} alt={title} />
                  <h1>
                    { title }
                    <span>by { author }</span>
                  </h1>
                </article>
              </a>
            </li>
          )) }
        </ul>
      </main>
    </>
  );
}

export default Home;
