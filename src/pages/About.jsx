import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  
  return (
    <>
      <Navbar />
      <div className="px-6 py-20 md:px-12 bg-gray-50 text-black text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex-nowrap mb-11">
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
            <h1 className="text-5xl md:text-6xl xl:text-4xl font-bold">Our Vision</h1>
            <div className="text-xs text-black px-2 py-2 mr-17 -ml-2">
              <p class="text-black text-lg mb-4 mt-2">Creating an inclusive platform for women in all shapes to express themselves through everyday fashion.</p>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-4xl font-bold mt-4">Our Mission</h1>
            <p class="text-black text-lg mb-10 mt-4">Providing size inclusive clothing with versatile, authentic, adaptive and comfortable design characteristics.<br/><br/>
            Providing informative fashion content for women with diverse body sizes and shapes, as well as a platform to campaign for body confidence narratives to Indonesian women.<br/><br/>
            Minimizing the use of environmentally unfriendly materials in the production and packaging process of fashion products.</p>
            <div className=" w-96 h-96 mb-0 mt-16 pr-6 mr-24">
            <img
              src="https://res.cloudinary.com/da1ceyshu/image/upload/v1674047348/bodimaji_1_vffepw.jpg"
              className="w-full rounded-lg shadow-lg"
              alt="Bodimaji image"
            />
          </div>
          <div className=" w-96 h-96 mb-10 -mt-96 ml-96 pr-6">
            <img
              src="https://res.cloudinary.com/da1ceyshu/image/upload/v1674047348/bodimajii_lolv0t.jpg"
              className="w-full rounded-lg shadow-lg"
              alt="Bodimaji image"
            />
          </div>
          <p class="text-black text-lg mb-6 mt-24 mx-auto">BODIMAJI is a brand that sells easy-to-wear women's clothing in sizes inclusive with versatile, authentic, adaptive & comfortable.
            We provide interesting and informative fashion content for women of all sizes and shapes body (women's body diversity),
            and at the same time  become a forum for campaigning for body narratives confidence to Indonesian women.</p>
             
          <div className=" w-96 h-96 mb-0 mt-14 -mr-8 pl-14 pr-3 ml-12">
            <img
              src="https://res.cloudinary.com/da1ceyshu/image/upload/v1674047348/baju_uuxgpt.jpg"
              className="w-full rounded-lg shadow-lg"
              alt="Bodimaji image"
            />
          </div>

          <div className=" w-96 h-96 ml-96 mb-8 -mt-96 -mr-60 pr-3 pl-14">
            <img
              src="https://res.cloudinary.com/da1ceyshu/image/upload/v1674047347/kain_kqmex6.jpg"
              className="w-full rounded-lg shadow-lg"
              alt="Bodimaji image"
            />
          </div>
         
          </div>
          <div className=" w-100 h-100 mb-16 mt-0 ml-10 md:max-sm:flex scroll-mt-4">
            <img
              src="https://res.cloudinary.com/da1ceyshu/image/upload/v1673969776/DSCF9463g_mvkg5q.jpg"
              className="w-full rounded-lg shadow-lg mt-28"
              alt="Bodimaji image"
            />
          </div>         
          </div>          
        </div>      
      </div> 
      <Footer />
    </>
  );
};

export default About;