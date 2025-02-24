'use client';

import React from 'react';
import { useState } from 'react';
import {
  useYearlyBookCounts,
  useKoreanPublication_KoreanHeritageCounts,
} from './useDateManipulation';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';
import { Typography, Modal, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Noto_Sans_Old_Italic, Roboto } from 'next/font/google';

import eventData from '../public/static/event.json';

const BookCountsLineChart = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    Event_Name: '',
    Date: '',
    Description: '',
  });

  const handleOpen = (description: {
    Event_Name: string;
    Date: string;
    Description: string;
  }) => {
    setModalContent(description);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const {
    koreanPublicationDateCounts,
    originalPublicationDateCounts,
    isKoreanHeritage,
  } = useYearlyBookCounts();

  const koreanPublicationCharts =
    useKoreanPublication_KoreanHeritageCounts();

  const transformedData = Object.entries(koreanPublicationCharts).map(
    ([year, counts]) => ({
      year: parseInt(year),
      koreanPublicationCount: counts.koreanPublicationCount,
      koreanHeritageCount: counts.koreanHeritageCount,
    })
  );

  // Convert the counts objects into arrays of objects suitable for recharts
  const koreanPublicationData = Object.entries(
    koreanPublicationDateCounts
  ).map(([year, count]) => ({ year, count }));
  const originalPublicationData = Object.entries(
    originalPublicationDateCounts
  ).map(([year, count]) => ({ year, count }));

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Chart 1: Publication Timeline of Books Later Translated into
        Korean (2000-2023)
      </Typography>
      <Typography variant="subtitle1">
        This line graph shows the total number of books published each
        year from 2000 to 2022 that were subsequently translated into
        Korean by the year 2023.
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={originalPublicationData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#1F4C4C"
            name="Original Publication Date Count"
            activeDot={{ r: 8 }}
          />
          {eventData.map((event, index) => {
            const [year, month] = event.Date.split('.');
            return (
              <ReferenceDot
                key={index}
                x={year}
                y={
                  originalPublicationData.find(
                    (data) => data.year === year
                  )?.count || 0
                }
                stroke={grey[100]}
                fill={grey[300]}
                onClick={() => handleOpen(event)}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
      <Typography
        variant="subtitle1"
        sx={{ fontStyle: 'italic', color: 'grey' }}
      >
        Omitted Data: John Cha’s 안녕, 테레사 and Ken Liu’s
        &quot;Altogether Elsewhere, Vast Herds of Reindeer&quot; are
        excluded from the above chart. For 안녕, 테레사, the author,
        who is an English speaker, collaborated with a translator,
        resulting in the novel existing only in Korean. For
        &quot;Altogether Elsewhere, Vast Herds of Reindeer,&quot; the
        anthology of short stories was curated by the translator, who
        selected the stories to be included. Therefore, these works do
        not have direct English counterparts.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        style={{ marginTop: '40px' }}
      >
        Chart 2: Translation Timeline and Author Heritage (2000-2023)
      </Typography>
      <Typography variant="subtitle2">
        This line graph displays two lines. The first line represents
        the number of books translated into Korean each year from 2000
        to 2023, originally published between 2000 and 2022. The
        second line indicates the number of these translated books
        authored by individuals of Korean heritage per year.
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={transformedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="koreanPublicationCount"
            name="Korean Publication Count"
            stroke="#182C4B"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="koreanHeritageCount"
            name="Korean Heritage Count"
            stroke="#941120"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="event-description-title"
        aria-describedby="event-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="event-description-title"
            variant="h6"
            component="h2"
          >
            {modalContent.Event_Name}
            <br></br>
            {modalContent.Date}
          </Typography>
          <Typography id="event-description" sx={{ mt: 2 }}>
            {modalContent.Description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BookCountsLineChart;
