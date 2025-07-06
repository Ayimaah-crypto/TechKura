import vid2 from "../assets/vid2.mp4";

export default function HowWeWork() {
  return (
    <div className="bg-[#F6F6F6]" id="works">
      {/* Hero Section with Video */}
      <div className="relative w-full h-[300px] overflow-hidden mt-10">
        <video
          src={vid2}
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        ></video>

        {/* Dark overlay (fixed missing color) */}
        <div className="absolute inset-0  bg-opacity-60 z-10"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-gray-900 text-5xl md:text-5xl font-bold text-center px-4">
            How We TechKura Work
          </h1>
        </div>
      </div>

      {/* Info Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 py-12 max-w-7xl mx-auto">
        {[
          {
            title: "Team Collaboration",
            content: `Cross-functional teams (e.g., developers, designers, product managers) work together.
                      Daily standups, sprint planning, and retrospectives ensure alignment.
                      Use of collaboration tools like Slack, Notion, Jira, or GitHub to track progress and communication.`,
          },
          {
            title: "User Centered and Feedback",
            content: `We prioritize design thinking and user research. 
                      Feedback loops from real users help refine every release.
                      We believe in building with—not just for—the user.`,
          },
          {
            title: "Agile Execution",
            content: `We iterate fast, deploy continuously, and test thoroughly.
                      Our agile process ensures we respond quickly to change and keep delivering value.`,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#EAE9EF] border border-gray-300 rounded-lg p-6 group relative overflow-hidden h-full"
          >
            <h2 className="text-2xl text-center font-semibold mb-4">{item.title}</h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
              {item.content}
            </p>

            <button className="mt-4 hidden group-hover:inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow transition-opacity duration-300 absolute bottom-4 left-1/2 transform -translate-x-1/2">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
