import Header from "../components/Header";
import RouteSEO from "../components/RouteSEO";

export default function Layout({ children }) {
  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col">
      <RouteSEO />
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
