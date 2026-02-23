const EmptyState = ({ title, message }) => {
  return (
    <div className="text-center p-12 text-gray-500">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm mt-2 text-gray-400">{message}</p>
    </div>
  );
};

export default EmptyState;
