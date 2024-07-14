// useYearlyBookCounts.tsx
import { useState, useEffect } from 'react';
import rawBookData from '../public/static/bookdata.json'; // Assuming the JSON import is configured correctly


interface BookData {
  ISBN: number;
  Author_Translated: string;
  Author: string;
  Title_Translated: string;
  Original_Title: string;
  Translated_By: string;
  Korean_Publisher: string;
  Korean_Edition_Publication_Date: Date;
  Original_Publication_Year: number;
  Genre_1: string;
  Genre_2: string;
  Genre_3: string;
  Genre_4: string;
  Genre_5: string;
  Authors_of_Korean_Ethnicity: string;
  Blurb_Translation: string;
}

const useYearlyBookCounts = () => {
  const [publicationDateCounts, setPublicationDateCounts] = useState<{ [year: string]: number }>({});
  const [originalPublicationDateCounts, setOriginalPublicationDateCounts] = useState<{ [year: string]: number }>({});

  useEffect(() => {
    const pubDateCounts: { [year: string]: number } = {};
    const origPubDateCounts: { [year: string]: number } = {};

    (rawBookData as BookData[]).forEach(row => {
      // Count for publication date
      const publicationYear = new Date(row.Korean_Edition_Publication_Date).getFullYear().toString();
      if (publicationYear) {
        pubDateCounts[publicationYear] = (pubDateCounts[publicationYear] || 0) + 1;
      }

      // Assuming you want to count authors of Korean ethnicity based on the Korean edition publication year
      if (row.Authors_of_Korean_Ethnicity === "Yes") {
        origPubDateCounts[publicationYear] = (origPubDateCounts[publicationYear] || 0) + 1;
      }
    });

    // Update state with the counted values
    setPublicationDateCounts(pubDateCounts);
    setOriginalPublicationDateCounts(origPubDateCounts);
  }, []); // Ensure this effect runs only once on component mount

  // Return counts or use them as needed within this hook
  return { publicationDateCounts, originalPublicationDateCounts };
};

export default useYearlyBookCounts;