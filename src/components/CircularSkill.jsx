export default function CircularSkill({ percent, label }) {
  const degree = percent * 3.6;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#3b82f6 ${degree}deg, #374151 0deg)`,
          }}
        ></div>
        <div className="absolute inset-2 rounded-full bg-[#1f1d2c] flex items-center justify-center">
          <span className="text-white font-bold text-sm">{percent}%</span>
        </div>
      </div>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}
