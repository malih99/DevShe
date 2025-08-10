export default function ContactInfo({ icon, title, value, link }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 opacity-80">{icon}</span>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline break-all"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
