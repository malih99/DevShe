import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="px-6 py-8">{children}</main>
    </div>
  );
}
