import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490]; // e.g. Doctor count
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300]; // e.g. Patient count

const xLabels = [
  'Patient A',
  'Patient B',
  'Patient C',
  'Patient D',
  'Patient E',
  'Patient F',
  'Patient G',
];

export default function ChartBar() {
  return (
    <div style={{ margin: "30px", paddingLeft: "60px" }}>
      <BarChart
        height={300}
        width={700}
        series={[
          {
            data: pData,
            label: 'Patients',
            id: 'patientsId',
            yAxisId: 'leftAxisId',
            color: '#18b1aa', // Blue
          },
          {
            data: uData,
            label: 'Doctors',
            id: 'doctorsId',
            yAxisId: 'rightAxisId',
            color: 'purple', // Green
          },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[
          { id: 'leftAxisId', width: 50 },
          { id: 'rightAxisId', position: 'right' },
        ]}
      />
    </div>
  );
}
