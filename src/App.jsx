import React from 'react';
import './App.css';
import ApiModel from './api';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function dd() {
      const { data } = await ApiModel.getData();
      console.info(data);
      setData(data);
    }

    dd();
  }, []);

  return (
    <div className="App">
      {data?.map(data => (
        <div key={data.id}>{data.number}</div>
      ))}
    </div>
  );
}

export default App;
