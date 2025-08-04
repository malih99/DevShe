import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
