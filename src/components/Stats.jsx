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
      { title: "Total Applications", value: total, color: "#fff" },
      { title: "Applied", value: applied, color: "#93C5FD" },
      { title: "Interview", value: interview, color: "#FCD34D" },
      { title: "Offer", value: offer, color: "#86EFAC" },
      { title: "Rejected", value: rejected, color: "#FCA5A5" },
      { title: "Offer Rate", value: `${offerRate}%`, color: "#86EFAC" },
      { title: "Rejection Rate", value: `${rejectionRate}%`, color: "#FCA5A5" },
    ];
  }, [jobs]);
  return (
    <div
      className="px-6 pb-12 pt-5 "
      style={{
        background:
          "linear-gradient(135deg, #1E1B4B 0%, #312E81 60%, #4338CA 100%)",
      }}
    >
      <p className="text-[13px] text-[#A5B4FC] mb-4">— Overview </p>
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
