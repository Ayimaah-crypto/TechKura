import vid3 from "../assets/vid3.mp4";


export default function OurGoals() {
  return (
    <div className="bg-[#F6F6F6] px-4 py-10" id="goals">
      <h1 className="text-4xl font-bold text-center mb-10">OUR GOALS</h1>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6 text-gray-800">
            
            Build Engaging and Immersive Games
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At TechKura, our mission is to design and develop games that captivate users and push the boundaries of interactivity.
            We leverage top-tier engines like <strong>Unity</strong> and <strong>Unreal</strong> to craft immersive, story-driven experiences.
            Our focus lies in enhancing <strong>user engagement</strong>, increasing <strong>player retention</strong>, and blending technology with fun.
            From gamified learning tools to futuristic <strong>AR/VR adventures</strong>, we’re redefining how people play, learn, and connect through games.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
            Learn More
          </button>
        </div>

        {/* Video Section */}
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <video
              src={vid3}
              loop
              autoPlay
              muted
              playsInline
              className="w-full h-[250px] md:h-[350px] object-cover"
            ></video>
            <div className="absolute inset-0 bg-opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
