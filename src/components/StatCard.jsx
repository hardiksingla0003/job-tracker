const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
  );
};

export default StatCard;
