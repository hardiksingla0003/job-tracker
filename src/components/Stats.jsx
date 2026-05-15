import { useMemo } from "react";
import StatCard from "./StatCard";

const Stats = ({ jobs }) => {
  const stats = useMemo(() => {
    const total = jobs.length;
    const applied = jobs.filter((job) => job.status === "Applied").length;
    const interview = jobs.filter((job) => job.status === "Interview").length;
    const offer = jobs.filter((job) => job.status === "Offer").length;
    const rejected = jobs.filter((job) => job.status === "Rejected").length;
    const rejectionRate = total ? ((rejected / total) * 100).toFixed(1) : 0;
    const offerRate = total ? ((offer / total) * 100).toFixed(1) : 0;

    return [
      { title: "Total Applications", value: total, color: "text-slate-300" },
      { title: "Applied", value: applied, color: "text-blue-300" },
      { title: "Interview", value: interview, color: "text-amber-300" },
      { title: "Offer", value: offer, color: "text-green-300" },
      { title: "Rejected", value: rejected, color: "text-red-300" },
      { title: "Offer Rate", value: `${offerRate}%`, color: "text-green-300" },
      {
        title: "Rejection Rate",
        value: `${rejectionRate}%`,
        color: "text-red-300",
      },
    ];
  }, [jobs]);
  return (
    <div className="px-6 pb-12 pt-5 bg-[linear-gradient(135deg,#1E1B4B_0%,#312E81_60%,#4338CA_100%)]">
      <p className="text-[13px] text-indigo-300 mb-4">
        {" "}
        Overview —{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}{" "}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {stats.map((s) => (
          <StatCard
            key={s.title}
            title={s.title}
            value={s.value}
            color={s.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
