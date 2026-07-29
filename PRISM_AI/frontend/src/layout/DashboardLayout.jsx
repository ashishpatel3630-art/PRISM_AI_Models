import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#0B0F17]">
      <Sidebar />
      <div className="flex flex-1 flex-col pl-64">
        <Navbar />
        <main className="p-8 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;