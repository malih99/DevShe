export default function AboutHeader({ title, lead, isFa }) {
  return (
    <header className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        {title}
      </h1>
      {!!lead && (
        <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
          {lead}
        </p>
      )}
      <div
        className={`mt-4 h-[2px] w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full ${
          isFa ? "ml-auto" : ""
        }`}
      />
    </header>
  );
}
