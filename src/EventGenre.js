import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  // const data = [
  //   { name: 'Group A', value: 400 },
  //   { name: 'Group B', value: 300 },
  //   { name: 'Group C', value: 300 },
  //   { name: 'Group D', value: 200 },
  // ];
  const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
  const COLORS = ["#736477", "#736477", "#4b049c", "#9c0494", "#9c174a"];

  const getData = () => {
    let data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.split(" ").includes(genre)
      ).length;
      return { name: genre, value: value }; //that's the object that's created for every piece of pie
    });
    data = data.filter((data) => data.value);
    return data;
  };

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  return (
    <div>
      <ResponsiveContainer height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EventGenre;