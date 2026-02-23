import StatCard from "./StatCard";

const Stats = ({ jobs }) => {
  const total = jobs.length;
  const applied = jobs.filter((job) => job.status === "Applied").length;
  const interview = jobs.filter((job) => job.status === "Interview").length;
  const offer = jobs.filter((job) => job.status === "Offer").length;
  const rejected = jobs.filter((job) => job.status === "Rejected").length;
  const rejectionRate = total ? ((rejected / total) * 100).toFixed(1) : 0;
  const offerRate = total ? ((offer / total) * 100).toFixed(1) : 0;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 px-4 sm:px-6 mb-6">
      <StatCard title="Total Applications" value={total} />
      <StatCard title="Applied" value={applied} />
      <StatCard title="Interview" value={interview} />
      <StatCard title="Offer" value={offer} />
      <StatCard title="Rejected" value={rejected} />
      <StatCard title="Offer Rate" value={`${offerRate}%`} />
      <StatCard title="Rejection Rate" value={`${rejectionRate}%`} />
    </div>
  );
};

export default Stats;
