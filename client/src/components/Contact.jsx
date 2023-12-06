
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    window.alert("Your message has been sent!");
    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="gradient-bg-footer w-full min-h-screen p-2 flex items-center"
    >

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact <span className="text-yellow-300">Us</span>
            </h2>
            <p className="text-lg text-white mb-8">
              If you have any questions or would like to know more infomration, please
              dont hesitate to contact us
            </p>
            <ul className="text-lg text-white">
              <li className="flex items-center mb-4">
                <FaPhone className="h-6 w-6 mr-2 text-yellow-300" />
                01234567891
              </li>
              <li className="flex items-center mb-4">
                <FaMapMarkerAlt className="h-6 w-6 mr-2 text-yellow-300" />
                MyRestaurant, Cairo, Egypt
              </li>
              <li className="flex items-center mb-4">
                <FaEnvelope className="h-6 w-6 mr-2 text-yellow-300" />
                myrestaurant@gmail.com
              </li>
            </ul>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <form
              onSubmit={sendEmail}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-white"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    autoComplete="given-name"
                    placeholder="enter your full name here"
                    required="name"
                    className="py-3 px-4 block w-full shadow-sm rounded-md bg-gray-200  text-black placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-white"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="sent_from"
                    type="email"
                    autoComplete="email"
                    placeholder="enter your email address here"
                    required="email"
                    className="py-3 px-4 block w-full shadow-sm  rounded-md bg-gray-200  text-black placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-white"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="enter your message here"
                    required="message"
                    className="py-3 px-4 block w-full shadow-sm bg-gray-200  rounded-md text-black placeholder:text-gray-400"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 shadow-sm text-lg font-medium bg-yellow-300 text-black rounded-lg hover:bg-yellow-600  hover:text-white  transition-colors duration-500 transform-gpu hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
