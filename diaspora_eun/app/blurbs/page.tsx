'use client';
import BlurbCard from './blurbscard';
import { BookData } from '.././types';
import globalStyles from '../global.module.css';
import styles from './blurbs.module.css';

const rawBookData: BookData[] = require('../../public/static/bookdata.json');

export default function Page() {
  return (
    <>
      <h1 className={globalStyles.title_texts}>Blurbs Page</h1>
      <div className={styles.blurbs_container}>
        {rawBookData.map((book) => (
          <BlurbCard key={book.ISBN} book={book} />
        ))}
      </div>
    </>
  );
}
