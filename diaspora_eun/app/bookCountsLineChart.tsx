'use client';

import React from 'react';
import useYearlyBookCounts from './useDateManipulation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const BookCountsLineChart = () => {
  const { publicationDateCounts, originalPublicationDateCounts } = useYearlyBookCounts();

  // Convert the counts objects into arrays of objects suitable for recharts
  const publicationData = Object.entries(publicationDateCounts).map(([year, count]) => ({ year, count }));
  const originalPublicationData = Object.entries(originalPublicationDateCounts).map(([year, count]) => ({ year, count }));

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Publication Date Counts
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={publicationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <Typography variant="h6" gutterBottom style={{ marginTop: '40px' }}>
        Original Publication Date Counts
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