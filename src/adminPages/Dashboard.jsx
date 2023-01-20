import NavbarAdmin from "../components/NavbarAdmin";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <Sidebar />
              <p class="-mt-96 ml-96 font-sans hover:font-serif text-5xl md:text-6xl xl:text-6xl font-bold text-[#ffffff]">Welcome Admin!</p>
                     <br />
              <div class="-mt-64 ml-96 mr-96 px-64 py-56 mb-0">
              <img
                     src="https://res.cloudinary.com/da1ceyshu/image/upload/v1674136538/496_s6z1rg.jpg"
                     className="-mt-48 w-140 h-90 ml-96 rounded-lg shadow-lg mb-0"
                     alt="Admin Dashboard"
              />
              </div>
    </>
  );
};

export default Dashboard;