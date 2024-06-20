import React from 'react';
import { Chart } from 'react-google-charts';

const FDMaturityTimeline = () => {
  const data = [
    [
      { type: 'string', id: 'FD' },
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    ['Utkarsh', 'Utkarsh FD 1', new Date(2024, 0, 1), new Date(2024, 5, 30)],
    ['Shriram', 'Shriram FD Plan 2', new Date(2024, 0, 1), new Date(2025, 6, 31)],
    ['Bajaj', 'Bajaj Finserv FD 1', new Date(2024, 2, 1), new Date(2025, 11, 31)],
    ['Mahindra', 'Mahindra FD Plan 2', new Date(2024, 4, 1), new Date(2026, 5, 30)],
  ];

  const options = {
    timeline: { showRowLabels: false },
    avoidOverlappingGridLines: false,
    hAxis: {
      format: 'MMM yyyy',
      ticks: [
        new Date(2024, 0, 1),
        new Date(2024, 1, 1),
        new Date(2024, 2, 1),
        new Date(2024, 3, 1),
        new Date(2024, 4, 1),
        new Date(2024, 5, 1),
        new Date(2024, 6, 1),
        new Date(2024, 7, 1),
        new Date(2024, 8, 1),
        new Date(2024, 9, 1),
        new Date(2024, 10, 1),
        new Date(2024, 11, 1),
        new Date(2025, 0, 1),
        new Date(2025, 1, 1),
        new Date(2025, 2, 1),
        new Date(2025, 3, 1),
        new Date(2025, 4, 1),
        new Date(2025, 5, 1),
        new Date(2025, 6, 1),
        new Date(2025, 7, 1),
        new Date(2025, 8, 1),
        new Date(2025, 9, 1),
        new Date(2025, 10, 1),
        new Date(2025, 11, 1),
        new Date(2026, 0, 1),
        new Date(2026, 1, 1),
        new Date(2026, 2, 1),
        new Date(2026, 3, 1),
        new Date(2026, 4, 1),
        new Date(2026, 5, 1),
        new Date(2026, 6, 1),
        new Date(2026, 7, 1),
        new Date(2026, 8, 1),
        new Date(2026, 9, 1),
        new Date(2026, 10, 1),
        new Date(2026, 11, 1),
      ],}
  };

  return (
    <div>
      <h2>FD Maturity Timeline</h2>
      <Chart
        chartType="Timeline"
        data={data}
        options={options}
        width="100%"
        height="400px"
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
};
export default FDMaturityTimeline;
