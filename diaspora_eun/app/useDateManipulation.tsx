// useYearlyBookCounts.tsx
import { useState, useEffect } from 'react';
import rawBookData from '../public/static/bookdata.json'; // Assuming the JSON import is configured correctly
import eventData from '../public/static/event.json';

interface BookData {
  ISBN: number;
  Author_Translated: string;
  Author: string;
  Title_Translated: string;
  Original_Title: string;
  Translated_By: string;
  Korean_Publisher: string;
  Korean_Edition_Publication_Date: Date | string;
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
  const [
    koreanPublicationDateCounts,
    setKoreanPublicationDateCounts,
  ] = useState<{ [year: string]: number }>({});
  const [
    originalPublicationDateCounts,
    setOriginalPublicationDateCounts,
  ] = useState<{ [year: string]: number }>({});
  const [isKoreanHeritage, setIsKoreanHeritage] = useState<{
    [year: string]: number;
  }>({});

  useEffect(() => {
    const koreanPubDateCounts: { [year: string]: number } = {};
    const origPubDateCounts: { [year: string]: number } = {};
    const isKoreanHeritage: { [year: string]: number } = {};

    (rawBookData as BookData[]).forEach((row) => {
      // Count for publication date
      const KoreanPublicationYear = new Date(
        row.Korean_Edition_Publication_Date
      )
        .getFullYear()
        .toString();

      if (KoreanPublicationYear) {
        koreanPubDateCounts[KoreanPublicationYear] =
          (koreanPubDateCounts[KoreanPublicationYear] || 0) + 1;
      }

      // Assuming you want to count authors of Korean ethnicity based on the Korean edition publication year
      if (row.Authors_of_Korean_Ethnicity === 'Yes') {
        isKoreanHeritage[KoreanPublicationYear] =
          (isKoreanHeritage[KoreanPublicationYear] || 0) + 1;
      }

      // Count for original publication date
      if (row.Original_Publication_Year) {
        origPubDateCounts[row.Original_Publication_Year.toString()] =
          (origPubDateCounts[
            row.Original_Publication_Year.toString()
          ] || 0) + 1;
      }
    });

    // Update state with the counted values
    setKoreanPublicationDateCounts(koreanPubDateCounts);
    setOriginalPublicationDateCounts(origPubDateCounts);
    setIsKoreanHeritage(isKoreanHeritage);
  }, []); // Ensure this effect runs only once on component mount

  // Return counts or use them as needed within this hook
  return {
    koreanPublicationDateCounts,
    originalPublicationDateCounts,
    isKoreanHeritage,
  };
};

const useKoreanPublication_KoreanHeritageCounts = () => {
  const [koreanPublicationCharts, setKoreanPublicationCharts] =
    useState<{
      [year: string]: {
        koreanPublicationCount: number;
        koreanHeritageCount: number;
      };
    }>({});

  useEffect(() => {
    const koreanPublicationChartsUpdate: {
      [year: string]: {
        koreanPublicationCount: number;
        koreanHeritageCount: number;
      };
    } = {};

    (rawBookData as BookData[]).forEach((row) => {
      const KoreanPublicationYear = new Date(
        row.Korean_Edition_Publication_Date
      )
        .getFullYear()
        .toString();

      // Initialize the year if it doesn't exist
      if (!koreanPublicationChartsUpdate[KoreanPublicationYear]) {
        koreanPublicationChartsUpdate[KoreanPublicationYear] = {
          koreanPublicationCount: 0,
          koreanHeritageCount: 0,
        };
      }

      // Increment koreanPublicationCount for every book
      koreanPublicationChartsUpdate[
        KoreanPublicationYear
      ].koreanPublicationCount += 1;

      // Increment koreanHeritageCount only if the author is of Korean ethnicity
      if (row.Authors_of_Korean_Ethnicity === 'Yes') {
        koreanPublicationChartsUpdate[
          KoreanPublicationYear
        ].koreanHeritageCount += 1;
      }
    });

    setKoreanPublicationCharts(koreanPublicationChartsUpdate);
  }, []);

  return koreanPublicationCharts;
};

const useEventArray = () => {
  const [eventsArray, setEventsArray] = useState<{
    [year: string]: {
      eventTitle: string;
      eventDescription: string;
    };
  }>({});

  useEffect(() => {
    const events: {
      [year: string]: {
        eventTitle: string;
        eventDescription: string;
      };
    } = {};

    eventData.forEach((event) => {
      const eventYear = new Date(event.Date).getFullYear().toString();
      console.log(eventYear);

      if (!events[eventYear]) {
        events[eventYear] = {
          eventTitle: event.Event_Name,
          eventDescription: event.Description,
        };
      }
    });

    setEventsArray(events);
  }, []);
  return eventsArray;
};

export {
  useYearlyBookCounts,
  useKoreanPublication_KoreanHeritageCounts,
  useEventArray,
};
