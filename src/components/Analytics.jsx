import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Analytics = ({ jobs }) => {
  const data = [
    {
      name: "Applied",
      value: jobs.filter((job) => job.status === "Applied").length,
    },
    {
      name: "Interview",
      value: jobs.filter((job) => job.status === "Interview").length,
    },
    {
      name: "Offer",
      value: jobs.filter((job) => job.status === "Offer").length,
    },
    {
      name: "Rejected",
      value: jobs.filter((job) => job.status === "Rejected").length,
    },
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm mt-6 mx-4 sm:mx-6">
      <h2 className="text-lg font-semibold mb-4">Applications Analytics</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
