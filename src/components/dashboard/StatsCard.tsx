"use client";

import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, Tooltip, type TooltipProps } from "recharts";

interface StatsCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: React.ReactNode;
  sparkline?: number[];
}

// Generate the last N days as "dd MMM" labels ending today
function getDateLabels(count: number): string[] {
  const labels: string[] = [];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const today = new Date();
  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    labels.push(`${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]}`);
  }
  return labels;
}

function SparkTooltip({
  active,
  payload,
  color,
  title,
}: TooltipProps<number, string> & { color: string; title: string }) {
  if (!active || !payload?.length) return null;
  const val = payload[0]?.value as number;
  const date = (payload[0]?.payload as { date: string })?.date;
  return (
    <div className="bg-[#0a1a3b] text-white rounded-xl shadow-lg px-3 py-2 pointer-events-none">
      <p className="text-white/50 text-[10px] font-bold mb-1.5">{date}</p>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
        <span className="text-white/60 text-xs font-medium">{title}:</span>
        <span className="text-white text-xs font-extrabold pl-1">{val.toLocaleString()}</span>
      </div>
    </div>
  );
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, trendUp, icon, sparkline }) => {
  const color = trendUp === false ? "#ef4444" : "#1b9cda";
  const fillColor = trendUp === false ? "#fef2f2" : "#eff8ff";

  const sparkData = React.useMemo(() => {
    if (!sparkline?.length) return [];
    const labels = getDateLabels(sparkline.length);
    return sparkline.map((v, i) => ({ v, date: labels[i] }));
  }, [sparkline]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-[#eae6df] rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col"
    >
      {/* Content */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-start justify-between mb-3">
          <div className="p-2.5 rounded-xl bg-[#f3f4f6] text-[#0a1a3b]/70 group-hover:bg-[#1b9cda]/10 group-hover:text-[#1b9cda] transition-colors duration-300 shrink-0">
            {icon}
          </div>
          {trend && (
            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${trendUp ? "text-emerald-600 bg-emerald-50" : "text-red-500 bg-red-50"
              }`}>
              {trendUp ? "↑" : "↓"} {trend}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-extrabold text-[#0a1a3b] tracking-tight leading-none">{value}</h3>
        <p className="text-[#0a1a3b]/40 text-[10px] font-bold uppercase tracking-wider mt-1.5">{title}</p>
      </div>

      {/* Sparkline */}
      {sparkData.length > 1 ? (
        <div className="h-16 mt-auto overflow-hidden rounded-b-2xl">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkData} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`sg-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={fillColor} stopOpacity={1} />
                  <stop offset="100%" stopColor={fillColor} stopOpacity={1} />
                </linearGradient>
              </defs>
              <Tooltip
                content={<SparkTooltip color={color} title={title} />}
                cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "4 4", opacity: 0.4 }}
              />
              <Area
                type="monotoneX"
                dataKey="v"
                stroke={color}
                strokeWidth={2}
                fill={fillColor}
                dot={false}
                activeDot={{ r: 4, fill: color, stroke: "white", strokeWidth: 2 }}
                isAnimationActive={true}
                animationDuration={900}
                animationEasing="ease-out"
                baseValue="dataMin"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="pb-5" />
      )}
    </motion.div>
  );
};
