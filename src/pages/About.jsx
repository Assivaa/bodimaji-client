import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  
  return (
    <>
      <Navbar />
      <div className="px-6 py-20 md:px-12 bg-gray-50 text-black text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex-nowrap">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                About BODIMAJI
                <br />
              </h1>
              <div className="shadow-md bg-gray-200 text-black">
              <br/>
              <div className="text-xs text-black px-8 py-5 max-w-screen-lg">
              <h1 className="text-5xl xl:text-justify text-black tracking-tight mb-12">
                     <p class="text-black text-lg mb-4">
                     We know how hard it’s to find a piece of clothes that comes with a perfect size for your body. Sometimes it makes you questioning your own. Therefore, BODIMAJI believes that no ‘body’
                     should left behind. Through our size-inclusive daily wear clothing that crafted with love and an obsessive attention to detail.
                     </p>
              </h1>
              </div>
            </div>
            <br/>
            </div>
          </div>          
          </div>      
          </div> 
      <Footer />
    </>
  );
};

export default About;