import { motion } from "motion/react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Suryansh Nandwani",
      role: "CEO",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Ariyan Basu",
      role: "GEN AI Dev",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Saptarshi Paul",
      role: "Backend Dev",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Pallav Singh",
      role: "Frontend Dev",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Anthony Izzac Frangie",
      role: "Director of Communications",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Ishita Singh",
      role: "PR/Marketing",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Dinesh Aswin S",
      role: "Cyber Security",
      avatarUrl:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-4">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, filter: "blur(20px)" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.6,
              delay: index * 0.2,
            },
          }}
          viewport={{ margin: "-100px", once: true }}
          className="group relative flex flex-col items-center rounded-xl border border-white/8 bg-white/2 p-3 sm:p-4 transition-all hover:border-gray-700 hover:bg-gray-850 w-full flex-1 mx-auto overflow-hidden"
        >
          <div className="mb-3 sm:mb-4 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[75%] xl:w-[80%] aspect-square overflow-hidden rounded-full shadow-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={member.avatarUrl}
              alt={`${member.name} - ${member.role}`}
              loading="lazy"
            />
          </div>

          <div className="text-center space-y-1 sm:space-y-1 w-full px-1 sm:px-2">
            <h3 className="text-sm sm:text-base md:text-md font-semibold text-gray-100">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">
              {member.role}
            </p>
          </div>

          <div className="hidden md:block absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
      ))}
    </section>
  );
};

export default OurTeam;
