import React from 'react';

function Analytics() {
  return (
    <div>
      <h1>Analytics Page</h1>
      <iframe
        src="http://localhost:5601"
        style={{ width: '100%', height: '800px', border: 'none' }}
        title="Kibana Dashboard"
      ></iframe>
    </div>
  );
}

export default Analytics;