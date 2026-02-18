function StatCard({ title, value }) {
  return (
    <div className="
      bg-white shadow-md
      p-6 rounded-xl
      hover:shadow-xl transition
    ">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

export default StatCard;
