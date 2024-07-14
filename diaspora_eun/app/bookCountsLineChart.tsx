'use client';

import React from 'react';
import { useYearlyBookCounts, useKoreanPublication_KoreanHeritageCounts} from './useDateManipulation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const BookCountsLineChart = () => {
  const { koreanPublicationDateCounts, originalPublicationDateCounts, isKoreanHeritage } = useYearlyBookCounts();

  const koreanPublicationCharts = useKoreanPublication_KoreanHeritageCounts();
  
  const transformedData = Object.entries(koreanPublicationCharts).map(([year, counts]) => ({
    year: parseInt(year),
    koreanPublicationCount: counts.koreanPublicationCount,
    koreanHeritageCount: counts.koreanHeritageCount
  }));

  

  // Convert the counts objects into arrays of objects suitable for recharts

  const koreanPublicationData = Object.entries(koreanPublicationDateCounts).map(([year, count]) => ({ year, count }));
  const isAuthorKoreanData = Object.entries(isKoreanHeritage).map(([year, count]) => ({ year, count }));
  const originalPublicationData = Object.entries(originalPublicationDateCounts).map(([year, count]) => ({ year, count }));

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Chart 1: Publication Timeline of Books Later Translated into Korean (2000-2023)
      </Typography>
      <Typography variant="subtitle1">
        This line graph shows the total number of books published each year from 2000 to 2022 that were subsequently translated into Korean by the year 2023.
      </Typography>
      <Typography variant="subtitle2" fontStyle={grey}>
        (Omitted Data: John Cha’s 안녕, 테레사 and Ken Liu’s "Altogether Elsewhere, Vast Herds of Reindeer" are excluded from the above chart. For 안녕, 테레사, the author, who is an English speaker, collaborated with a translator, resulting in the novel existing only in Korean. For "Altogether Elsewhere, Vast Herds of Reindeer," the anthology of short stories was curated by the translator, who selected the stories to be included. Therefore, these works do not have direct English counterparts.)
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={ transformedData } margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="koreanPublicationCount" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="koreanHeritageCount" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <Typography variant="h6" gutterBottom style={{ marginTop: '40px' }}>
        Chart 2: Translation Timeline and Author Heritage (2000-2023)
      </Typography>
      <Typography variant="subtitle2">
        This line graph displays two lines. The first line represents the number of books translated into Korean each year from 2000 to 2023, originally published between 2000 and 2022. The second line indicates the number of these translated books authored by individuals of Korean heritage per year.
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={originalPublicationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookCountsLineChart;