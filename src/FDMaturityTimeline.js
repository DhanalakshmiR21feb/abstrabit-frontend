import React, { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';
import moment from 'moment';

const FDMaturityTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    const items = new DataSet([
      { id: 1, content: 'Utkarsh FD 1', start: '2024-01-01', end: '2024-06-01' },
      { id: 2, content: 'Shriram FD Plan 2', start: '2024-04-01', end: '2025-04-01' },
      { id: 3, content: 'Bajaj Finserv FD 1', start: '2024-05-01', end: '2025-03-01' },
      { id: 4, content: 'Mahindra FD Plan 2', start: '2024-06-01', end: '2026-06-01' },
    ]);

    const options = {
      stack: false,
      start: moment('2024-01-01').format('YYYY-MM-DD'),
      end: moment('2025-12-31').format('YYYY-MM-DD'),
      editable: false,
      margin: {
        item: 20,
        axis: 40,
      },
      orientation: 'top',
      zoomable: false,
      moveable: false,
      format: {
        minorLabels: {
          month: 'MM',
        },
        majorLabels: {
          year: 'YYYY',
        },
      },
      timeAxis: { scale: 'month', step: 1 },
    };

    const timeline = new Timeline(container, items, options);

    return () => {
      timeline.destroy();
    };
  }, []);

  return (
    <div>
      <h2>FD Maturity Timeline</h2>
      <div ref={timelineRef} style={{ width: '700px', height: '286px',margin:'0 62px' }}></div>
    </div>
  );
};  
export default FDMaturityTimeline;
