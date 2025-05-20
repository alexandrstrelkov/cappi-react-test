import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ProfitChart = ({ data }) => {
  // считаем накопительный профит с помощью useMemo, чтобы не пересчитывать при каждом рендере без изменения data
  const cumulativeData = useMemo(() => {
    let cumulativeSum = 0;
    return data.map(item => {
      cumulativeSum += item.profit;
      return {
        ...item,
        cumulativeProfit: cumulativeSum,
      };
    });
  }, [data]);

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cumulativeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(value) => `${value.toFixed(2)}%`}
          />
          <Tooltip
            formatter={(value) => `${value.toFixed(2)}%`}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="cumulativeProfit"  // отображаем накопительный профит
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitChart;
