import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'rechart';


const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular JS"];
  const COLORS = ["#f8b195", "#f67280", "#c06c87", "#6c5b7b", "#355c7d"];


  const getData = () => {
    let data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(" ").includes(genre)
      ).length;

      return { name: genre, value: value };
    });
    data = data.filter((data) => data.value);
    return data;
  };

  useEffect(() => {
    setData(() => getData());
  }, [events]);


  return (
    <ResponsiveContainer height={400} className="pie-chart">
      <PieChart width={400} heigth={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)} %`
          }
        >
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;

