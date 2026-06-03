"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";

interface ChartAreaProps {
  data: number[];
  labels: string[];
  height?: number;
  color?: string;
  /** Optional formatter for tooltip value — defaults to plain number */
  valueFormatter?: (v: number) => string;
  /** Optional Y-axis tick formatter */
  yFormatter?: (v: number) => string;
}

function CustomTooltip({ active, payload, label, color, valueFormatter }: TooltipProps<number, string> & { color: string; valueFormatter?: (v: number) => string }) {
  if (!active || !payload?.length) return null;
  const val = payload[0]?.value ?? 0;
  return (
    <div className="bg-[#0a1a3b] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
      <p className="text-white/50 font-medium mb-0.5">{label}</p>
      <p style={{ color }}>{valueFormatter ? valueFormatter(val) : val.toLocaleString()}</p>
    </div>
  );
}

export const ChartArea: React.FC<ChartAreaProps> = ({
  data,
  labels,
  height = 200,
  color = "#1b9cda",
  valueFormatter,
  yFormatter,
}) => {
  const chartData = data.map((value, i) => ({ label: labels[i] ?? String(i), value }));
  const gradientId = `grad-${color.replace("#", "")}`;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.18} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#eae6df"
          vertical={false}
        />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 10, fill: "#0a1a3b", opacity: 0.4, fontWeight: 700 }}
          axisLine={false}
          tickLine={false}
          dy={6}
        />
        <YAxis
          tick={{ fontSize: 10, fill: "#0a1a3b", opacity: 0.4, fontWeight: 700 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={yFormatter}
          width={40}
        />
        <Tooltip
          content={<CustomTooltip color={color} valueFormatter={valueFormatter} />}
          cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "4 4", opacity: 0.4 }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2.5}
          fill={`url(#${gradientId})`}
          dot={false}
          activeDot={{ r: 5, fill: color, stroke: "white", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
