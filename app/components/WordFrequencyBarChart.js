import { relative } from "path";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ReferenceLine,
  CartesianAxis,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { data } from "./WordFrequencyData.js";

const getGradientColor = (frequency) => {
  const maxFrequency = Math.max(...data.map((item) => item.frequency));
  const opacity = frequency / maxFrequency;
  return `rgba(44, 94, 241, ${opacity})`;
};

const RoundedBar = (props) => {
  const { x, y, width, height } = props;
  return (
    <Rectangle
      {...props}
      x={x}
      y={y}
      width={width}
      height={height}
      radius={[4, 4, 4, 4]}
      style={{ position: "relative", zIndex: -1 }}
    />
  );
};

const YAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="end"
        fill="#AAAAAA"
        fontWeight="550"
        fontSize="1rem"
        style={{ textTransform: "capitalize" }}
      >
        {payload.value}
      </text>
    </g>
  );
};

function WordFrequencyBarChart({ numberOfWords = 5, height = 250 }) {
  const displayedData = data.slice(0, numberOfWords);

  return (
    <>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={displayedData}
          layout="vertical"
          margin={{
            left: 100,
          }}
          barCategoryGap={6}
        >
          <CartesianGrid horizontal={false} strokeDasharray="1 1" />
          <XAxis type="number" hide={true} domain={[0, 45]} />
          <YAxis
            axisLine={false}
            dataKey="word"
            type="category"
            tick={<YAxisTick />}
          />
          <Bar dataKey="frequency" shape={<RoundedBar />}>
            {displayedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getGradientColor(entry.frequency)}
              />
            ))}
            {displayedData.map((entry, index) => (
              <text
                key={`label-${index}`}
                x={entry.frequency + 5}
                y={index * 20 + 12}
                fill="#666"
                textAnchor="start"
                fontWeight="bold"
              >
                {entry.frequency}
              </text>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}


export default WordFrequencyBarChart;
