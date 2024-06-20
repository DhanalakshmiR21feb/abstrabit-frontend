import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
    datasets: [
      {
        data: [25000, 20000, 15000, 40000],
        backgroundColor: ['#3b83f6', '#ffcc00', '#ff9900', '#66cccc'],
        hoverBackgroundColor: ['#3575d4', '#e6b800', '#e68a00', '#59b3b3'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: -110, // Adjust the top padding to hide the upper part
      },
    },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <Pie data={data} options={options} />
      </div>
      <div style={{ flex: 1, paddingLeft: '2px' }}>
        <ul style={{ listStyleType: 'none', padding: 0,width: '195px' }}>
          <li><span style={{ color: '#3b83f6' }}>■</span> Bajaj Finserv</li>
          <li><span style={{ color: '#ffcc00' }}>■</span> Shriram Finance</li>
          <li><span style={{ color: '#ff9900' }}>■</span> Mahindra Finance</li>
          <li><span style={{ color: '#66cccc' }}>■</span> Utkarsh Small Finance Bank</li>
        </ul>
      </div>
    </div>
  );
};

export default PieChart;
