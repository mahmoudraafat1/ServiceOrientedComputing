
import Client1 from "../../images/client1.png";
import Client4 from  "../../images/client4.png";
import Client5 from  "../../images/client5.png";

const OurClients = () => {
  return (
    <div id="client" className="w-full min-h-screen p-2 flex items-center gradient-bg-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white first-line:dmb-4">Our <span className="text-yellow-300">Clients</span></h2>
          <p className="text-lg text-white mb-8">
            See what our clients have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
        <div className="justify-center">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={Client1}
          alt="Client 1"
        />
       <div className="z-10 bg-transparent p-8 rounded-lg shadow-md border-2 border-white">
          <p className="text-lg text-white mb-4">
          I recently had the pleasure of dining at this restaurant, and I must say it was an incredible experience. The moment I stepped inside, I was greeted with a warm and inviting atmosphere that immediately made me feel welcome.
          </p>
          <p className="text-yellow-300">Adam Johnson, Client</p>
        </div>
      </div>
      <div className="justify-center">
      <img
        className="w-24 h-24 object-cover rounded-full"
        src={Client4}
        alt="Client 1"
      />
     <div className="z-10 bg-transparent p-8 rounded-lg shadow-md border-2 border-white">
      <p className="text-lg text-white mb-4">
      I recently had the pleasure of dining at this restaurant, and I must say it was an incredible experience. The moment I stepped inside, I was greeted with a warm and inviting atmosphere that immediately made me feel welcome.
        </p>
        <p className="text-yellow-300">Michael Smith, Client</p>
      </div>
    </div>
    <div className="justify-center">
    <img
      className="w-24 h-24 object-cover rounded-full"
      src={Client5}
      alt="Client 1"
    />
     <div className="z-10 bg-transparent p-8 rounded-lg shadow-md border-2 border-white">
      <p className="text-lg text-white mb-4">
      I recently had the pleasure of dining at this restaurant, and I must say it was an incredible experience. The moment I stepped inside, I was greeted with a warm and inviting atmosphere that immediately made me feel welcome.
      </p>
      <p className="text-yellow-300">Elena Brown, Client</p>
    </div>
  </div>
  </div>
  </div>
</div>
  );
};

export default OurClients;