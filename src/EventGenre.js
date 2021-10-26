import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'rechart';


const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular JS"];
  const COLORS = ["#624738", "#213132", "#34dc42", "#3ad464", "#9470d4"];

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
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400} className="pie-chart">
        <Pie
          data={data}
          cx={"50%"}
          cy={"50%"}
          labelLine={false}
          innerRadius={80}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)} %`
          }
          outerRadius={80}
          dataKey="value"
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


