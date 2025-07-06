import {
  Building2,
  Users,
  Briefcase,
  Rocket
} from "lucide-react";

export default function ScaleSection() {
  const features = [
    {
      icon: <Rocket size={40} className="text-indigo-500" />,
      label: "StartUp",
      subtitle: " 1 – 10 Employees",
      title: "Growth",
      color: "border-indigo-500",
      hoverBg: "hover:bg-indigo-100"
    },
    
    {
      icon: <Users size={40} className="text-purple-600" />,
      label: "Small Business",
      subtitle: "11 – 50 Employees",
      title: "Community",
      color: "border-purple-600",
      hoverBg: "hover:bg-purple-100"
    },
    {
      icon: <Briefcase size={40} className="text-gray-600" />,
      label: "Medium Business",
      subtitle: "51 – 250 Employees",
      title: "Professionalism",
      color: "border-gray-600",
      hoverBg: "hover:bg-gray-100"
    },
    {
      icon: <Building2 size={40} className="text-pink-500" />,
      label: "Enterprise",
      subtitle: "251+ Employees",
      title: "Infrastructure",
      color: "border-pink-500",
      hoverBg: "hover:bg-pink-100"
    },
    
  ];

  return (
    <section className="py-16 bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Scale With Us</h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Whether you're just starting or scaling up, we’re here to support you at every stage of your business journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 border-b-4 ${feature.hoverBg} group`}
          >
            <div className="mb-4 transition-transform group-hover:scale-110">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.label}</h3>
            <p className="text-sm text-gray-500 mb-2">{feature.subtitle}</p>
            <span className="text-sm font-medium text-gray-700 mb-4">{feature.title}</span>
            <div
              className={`w-full h-1 mt-auto transition-all scale-x-0 group-hover:scale-x-100 origin-left duration-300 ${feature.color}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
