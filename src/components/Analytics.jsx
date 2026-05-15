import { useMemo } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const STATUS_COLORS = {
  Applied: "#3B82F6",
  Interview: "#F59E0B",
  Offer: "#22C55E",
  Rejected: "#EF4444",
};

const Analytics = ({ jobs }) => {
  const data = useMemo(() => {
    const counts = jobs.reduce(
      (acc, job) => {
        if (acc[job.status] !== undefined) acc[job.status]++;
        return acc;
      },
      {
        Applied: 0,
        Interview: 0,
        Offer: 0,
        Rejected: 0,
      },
    );
    return ["Applied", "Interview", "Offer", "Rejected"].map((name) => ({
      name,
      value: counts[name],
    }));
  }, [jobs]);
  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border-[0.5px] border-[rgba(99,102,241,0.1)]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
        <h2 className="text-[13px] font-medium">Applications analytics</h2>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 13, fill: "#9CA3AF" }} />
          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "0.5px solid #E5E7EB",
              fontSize: "13px",
            }}
            cursor={{ fill: "rgba(99,102,241,0.05)" }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={STATUS_COLORS[entry.name]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
