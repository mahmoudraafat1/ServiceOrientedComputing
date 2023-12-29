
import Image from "../../images/about.jpg";

const AboutUs = () => {
  return (
    <div id="about" className="w-full min-h-screen flex flex-col md:flex-row gradient-bg-services">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8  bg-black flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-yellow-300">Us</span>
          </h2>        
          <p className="text-lg md:text-xl text-gray-400 mb-8">
          Welcome to our Online Bookstore, where our mission is to provide exceptional reading experiences and a wide selection of books for purchase and online reading.
            <br/>
            <br/>
            With years of expertise in the book industry, our team of dedicated professionals has built a reputation for literary excellence and outstanding service.          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
