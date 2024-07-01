
import Sidebar from "./components/sidebar";
// import Dashboard from "./components/dashboard";
import Bookdetail from "./components/bookdetail";
export default function Home() {
  return (
    <>
        <div className="flex">
        <Sidebar />
        <Bookdetail />
        </div>
    </>
  );
}
