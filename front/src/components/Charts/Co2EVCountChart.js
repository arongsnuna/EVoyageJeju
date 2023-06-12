import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  ResponsiveContainer,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

function EVCarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/co2Emission");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawData = await response.json();
        const convertedData = rawData.map((item) => ({
          ...item,
          "전기차 수": item.evcar_count,
          "차량 CO2 배출량": item.co2,
          // 기타 데이터가 있다면 그대로 유지됩니다.
        }));

        setData(convertedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const numberFormatter = (number) => new Intl.NumberFormat().format(number);

  const tickFormatter = (number) => {
    return number >= 1000 ? `${(number / 1000).toFixed(0)}k` : number;
  };

  const tooltipFormatter = (value, name) => {
    const unit = name === "전기차 수" ? " 대" : " 천톤CO2eq";
    return [numberFormatter(value) + unit, name];
  };

  return (
    <ResponsiveContainer>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 100,
          bottom: 20,
          left: 50,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="year" />
        <YAxis yAxisId="left" dataKey="전기차 수" tickFormatter={tickFormatter}>
          <Label
            value="전기차 수"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <YAxis
          yAxisId="right"
          dataKey="차량 CO2 배출량"
          orientation="right"
          tickFormatter={numberFormatter}
          domain={[900, 1600]}
        >
          <Label
            value="차량 CO2 배출량"
            angle={90}
            position="insideRight"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip formatter={tooltipFormatter} />
        <Legend />
        <Bar yAxisId="left" dataKey="전기차 수" barSize={20} fill="#413ea0" />
        <Line
          yAxisId="right"
          dataKey="차량 CO2 배출량"
          stroke="#ff7300"
          strokeWidth={3}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default EVCarChart;
