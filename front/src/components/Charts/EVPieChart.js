import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ButtonContainer } from "./ChartStyle";
import Button from "@mui/material/Button";

const COLORS = {
  서울: "#89CFF0",
  부산: "#ACE7FF",
  대구: "#FFEB94",
  인천: "#FFEDBC",
  광주: "#77AFFF",
  대전: "#98FF98",
  울산: "#FF0000",
  세종: "#C0C0C0",
  경기: "#CBD1FF",
  강원: "#FFE1FF",
  충북: "#E6BEFF",
  충남: "#FFFFCC",
  전북: "#FFA4A2",
  전남: "#C1FFD7",
  경북: "#FFD1DC",
  경남: "#FFA4A2",
  제주: "#FF8C00",
  기타: "#CBD1FF",
};

const cityNamesInKorean = {
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

const renderTooltipItem = ({ payload }) => {
  return null; // 페이로드가 비어 있을 때는 아무것도 반환하지 않습니다
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,

  outerRadius,
  percent,

  payload,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const labelColor = COLORS[payload.city] || "#000000";

  const label = `${payload.city}: ${(percent * 100).toFixed(1)}%`;
  const width = label.length * 8; // 문자 수를 기준으로 한 대략적인 너비

  return (
    <g>
      <rect
        x={x > cx ? x : x - width}
        y={y - 7} // center the text vertically
        rx={5} // this makes the ends of the background rounded
        ry={5} // this makes the ends of the background rounded
        width={width}
        height={14} // adjust based on font size and desired padding
        fill="#191970"
      />
      <text
        x={x}
        y={y}
        fill={labelColor}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: "12px", fontWeight: "bold" }} // 폰트 굵게하기
      >
        {label}
      </text>
    </g>
  );
};

function EVPieChart() {
  const [data, setData] = useState([]);
  const [year, setYear] = useState(2015);

  useEffect(() => {
    const fetchData = async (year) => {
      try {
        const response = await fetch(`http://localhost:5001/evRatio/${year}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let rawData = await response.json();

        // 도시 이름을 한국어로 변환하고 evcar_count 비율 계산
        let convertedData = rawData.map((item) => ({
          ...item,
          city: cityNamesInKorean[item.city],
          ratio:
            item.evcar_count /
            rawData.reduce((acc, cur) => acc + cur.evcar_count, 0),
        }));

        // 2% 미만인 도시들을 '기타'로 묶는 부분
        let otherCities = { city: "기타", ratio: 0 };
        convertedData = convertedData.filter((item) => {
          if (item.ratio <= 0.02) {
            // 2%를 비율로 바꾼 값
            otherCities.ratio += item.ratio;
            return false;
          }
          return true;
        });
        convertedData.push(otherCities);

        setData(convertedData);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData(year);
  }, [year]);

  return (
    <>
      <div>
        {year <= 2020 && (
          <PieChart width={630} height={700}>
            <Pie
              dataKey="ratio"
              isAnimationActive={false}
              data={data}
              cx={300}
              cy={285}
              outerRadius={200}
              innerRadius={100} // 도넛 차트를 만들기 위한 설정
              fill="#8884d8"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.city]} />
              ))}
            </Pie>
            <text
              x={300} // 중앙에 텍스트를 위치시키기 위한 x 위치 조정
              y={220} // 중앙에 텍스트를 위치시키기 위한 y 위치 조정
              dx={5}
              dy={80} // 텍스트를 적절히 중앙에 위치시키기 위한 조정
              textAnchor="middle"
              fill="#000000"
              style={{ fontSize: "2em", fontWeight: "bold" }}
            >
              100%
            </text>
            <text
              style={{ fontSize: "23px", fontWeight: "bold" }}
              x={100}
              y={20}
              textAnchor="inner"
              dominantBaseline="middle"
            >
              {year} 전국 각 지역의 전기차 비율
            </text>
            <Tooltip content={renderTooltipItem} />
          </PieChart>
        )}
        <ButtonContainer>
          <Button
            onClick={() => {
              if (year > 2015) setYear(year - 1); // 2015는 이전 연도로 이동할 수 있는 가장 작은 연도로 가정합니다.
            }}
            variant="outlined"
          >
            이전 연도
          </Button>
          <Button
            onClick={() => {
              if (year < 2020) setYear(year + 1);
            }}
            variant="outlined"
          >
            다음 연도
          </Button>
        </ButtonContainer>
      </div>
    </>
  );
}

export default EVPieChart;
