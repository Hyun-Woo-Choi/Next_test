// useYearlyBookCounts.tsx
import { useState, useEffect } from 'react';
import rawBookData from '../public/static/bookdata.json'; // Assuming the JSON import is configured correctly

interface BookData {
  isbn: number;
  authortranslated: string;
  author: string;
  title: string;
  originaltitle: string;
  translatedby: string;
  publisher: string;
  publicationdate: string;
  originalpublicationdate: number;
  genre1: string;
  genre2: string;
  genre3: string;
  istheauthorofkoreanheritage: string;
}

const useYearlyBookCounts = () => {
  const [publicationDateCounts, setPublicationDateCounts] = useState<{ [year: string]: number }>({});
  const [originalPublicationDateCounts, setOriginalPublicationDateCounts] = useState<{ [year: string]: number }>({});

  useEffect(() => {
	const pubDateCounts: { [year: string]: number } = {};
	const origPubDateCounts: { [year: string]: number } = {};

	(rawBookData as BookData[]).forEach(row => {
	  // Count for publicationdate
	  const publicationYear = new Date(row.publicationdate).getFullYear().toString();
	  if (publicationYear) {
		pubDateCounts[publicationYear] = (pubDateCounts[publicationYear] || 0) + 1;
	  }

    if (row.originalpublicationdate !== undefined) {
	  // Count for originalpublicationdate
	  const originalPublicationYear = row.originalpublicationdate.toString();
	  if (originalPublicationYear) {
		origPubDateCounts[originalPublicationYear] = (origPubDateCounts[originalPublicationYear] || 0) + 1;
	  }
    } else {
      console.log(row);
    }
	});

	setPublicationDateCounts(pubDateCounts);
	setOriginalPublicationDateCounts(origPubDateCounts);
  }, []); // Consider adding dependencies if necessary

  return { publicationDateCounts, originalPublicationDateCounts };
};

export default useYearlyBookCounts;