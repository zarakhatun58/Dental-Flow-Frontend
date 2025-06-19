import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { DefaultizedPieValueType } from '@mui/x-charts/models';

const data = [
  { label: 'Campaign', value: 400, color: '#4caf50' },  // Green
  { label: 'Booking', value: 300, color: '#18b1aa' },   // Blue
  { label: 'Payment', value: 300, color: '#9c27b0' },   // Purple
];

const TOTAL = data.reduce((sum, item) => sum + item.value, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = (params.value / TOTAL) * 100;
  return `${percent.toFixed(0)}%`;
};

const sizing = {
  margin: { right: 5 },
  width: 250,
  height: 250,
  legend: { hidden: false },
};

export default function ChartAnalytics() {
  return (
    <div>
        <p style={{fontSize:"16px"}}>Payment, Booking and Campaign</p>
    <PieChart
      series={[
        {
          outerRadius: 90,
          innerRadius: 40,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
     </div>
  );
}
