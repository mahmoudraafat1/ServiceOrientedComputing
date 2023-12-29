import { MdBookOnline } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { RiHandHeartFill } from "react-icons/ri";
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ color, title, icon, subtitle, image }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
       <img src={image} alt={title} className="mt-4" />
    </div>
  </div>
);

const Services = () => (
  <div id="service" className="min-h-screen flex w-full justify-center items-center gradient-bg-services">
    <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">Our  <span className="text-yellow-300">Services</span></h2>
        <p className="text-lg text-white mb-8">
          The best choice for books and papers here in our web-site with the best quality as you like
        </p>

        <div className="flex-1 flex flex-col justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="hover:scale-110 duration-500">
            <ServiceCard color="bg-[#2952E3]" title="Online Bookstore" icon={<MdBookOnline fontSize={21} className="text-white" />} subtitle="Explore our vast collection of books available for purchase and online reading. From bestsellers to niche genres, we offer a wide selection to cater to every reader's taste and interest."  
              image="../../images/foood.jpg" 
              /> 
              </div> <div className="hover:scale-110 duration-500"> 
              <ServiceCard color="bg-[#8945F8]" title="Diverse Book Selection" icon={<AiFillStar fontSize={21} className="text-white" />} subtitle="Embark on a literary journey with our diverse range of books. Whether you're into fiction, non-fiction, self-help, or fantasy, we have an extensive collection that caters to all reading preferences." 
          
              image="../../images/food.jpg" 
              /> </div> <div className="hover:scale-110 duration-500"> 
              <ServiceCard color="bg-[#F84550]" title="Exceptional Book Service" icon={<RiHandHeartFill fontSize={21} className="text-white" />} subtitle="Explore our vast collection of books available for purchase and online reading. From bestsellers to niche genres, we offer a wide selection to cater to every reader's taste and interest." 

                image="../../images/foood.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services;