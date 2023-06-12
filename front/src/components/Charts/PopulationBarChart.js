import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { PopulationBarChartTitle } from "./ChartStyle";

function PopulationBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/population");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const cityNamesMap = {
          Seoul: "서울",
          Busan: "부산",
          Daegu: "대구",
          Incheon: "인천",
          Gwangju: "광주",
          Daejeon: "대전",
          Ulsan: "울산",
          Sejong: "세종",
          Gyeonggi: "경기",
          Gangwon: "강원",
          Chungbuk: "충북",
          Chungnam: "충남",
          Jeonbuk: "전북",
          Jeonnam: "전남",
          Gyeongbuk: "경북",
          Gyeongnam: "경남",
          Jeju: "제주",
        };

        const newData = data.map((item) => {
          return {
            ...item,
            city: cityNamesMap[item.city],
            인구수: item.population,
          };
        });

        setData(newData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PopulationBarChartTitle>2020년 도시별 인구수</PopulationBarChartTitle>
      <>
        <BarChart width={600} height={500} layout="vertical" data={data}>
          <XAxis
            type="number"
            tickFormatter={(tickItem) =>
              new Intl.NumberFormat().format(tickItem)
            }
          />
          <YAxis dataKey="city" type="category" />
          <Tooltip
            formatter={(value) => {
              return [new Intl.NumberFormat().format(value) + "명"];
            }}
          />
          <Bar dataKey="인구수">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.city === "제주" ? "orange" : "skyblue"}
              />
            ))}
          </Bar>
        </BarChart>
      </>
    </>
  );
}

export default PopulationBarChart;
