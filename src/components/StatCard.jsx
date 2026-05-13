const StatCard = ({ title, value, color }) => {
  return (
    <div className="px-2.5 py-3.5 rounded-xl text-center bg-[rgba(255,255,255,0.08)] border-[0.5px] border-[rgba(255,255,255,0.12)]">
      <h3
        className="font-medium text-[24px] tracking-[-0.5px]"
        style={{ color: color ?? "#fff" }}
      >
        {value}
      </h3>
      <p className="text-[10px] text-[#A5B4FC] mt-0.75">{title}</p>
    </div>
  );
};

export default StatCard;
