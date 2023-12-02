
import '../index.css'
const PageLoader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gradient-to-b from-black to-black">
        <div className="flex items-center">
         
          <p className="text-yellow-300 text-4xl font-semibold">Load<span className="text-white">ing...</span></p>
        </div>
      </div>
      );
}

export default PageLoader;