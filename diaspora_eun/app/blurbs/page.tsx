'use client';
import BlurbCard from './blurbscard';
import { BookData } from '.././types';
import styles from './styles.module.css';

const rawBookData: BookData[] = require('../../public/static/bookdata.json');

export default function Page() {
  return (
    <>
      <h1>Blurbs Page</h1>
      {rawBookData.map((book) => (
        <BlurbCard key={book.ISBN} book={book} />
      ))}
    </>
  );
}
