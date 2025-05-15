import Button from "./Button";
import { motion } from "motion/react";

const Pricing = () => {
  return (
    <section id="Products" className="px-4 sm:px-6 pt-10 pb-12 lg:px-8">
      <div className="max-w-[85vw] mx-auto">
        <p className="text-xl md:text-2xl mb-5 text-white text-left motion-blur-in-2xl motion-opacity-in-0 motion-duration-1500 motion-delay-700">
          PRICING
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Base Plan */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.6, delay: 0.1 },
            }}
            viewport={{ amount: 0.3, once: true }}
            className="flex flex-col justify-between h-[21rem] md:h-[22rem] lg:h-[20rem] xl:h-[22rem] rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850 hover:scale-105"
          >
            <div>
              <p className="text-2xl font-medium text-white/90 mb-4 mt-2">Base Plan</p>
              <ul className="list-disc px-5 space-y-2">
                <li>3 Conversations per day.</li>
                <li>Our Latest Model.</li>
                <li>Lorem Ipsum hahah blah</li>
                <li>I ran out of points why</li>
                <li>we wont make money if u get this one.</li>
              </ul>
            </div>
            <div className="mb-3">
              <p className="text-md font-normal text-white/75 mt-4">
                Recommended for non-Lawyers.
              </p>
              <div className="mt-3">
                <Button white>Free</Button>
              </div>
            </div>
          </motion.div>

          {/* Individual Plan */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.6, delay: 0.3 },
            }}
            viewport={{ amount: 0.3, once: true }}
            className="flex flex-col justify-between h-[20rem] sm:h-[21rem] md:h-[22rem] lg:h-[20rem] xl:h-[22rem] rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850 hover:scale-105"
          >
            <div>
              <p className="text-2xl font-medium text-white/90 mb-4 mt-2">Individual Plan</p>
              <ul className="list-disc px-5 space-y-2">
                <li>Unlimited Conversations per day.</li>
                <li>Our Latest Model.</li>
                <li>Lorem Ipsum hahah</li>
                <li>I ran out of points why</li>
                <li>if u get this one.</li>
              </ul>
            </div>
            <div className="mb-3">
              <p className="text-md font-normal text-white/75 mt-4">
                Recommended for Individuals.
              </p>
              <div className="mt-3">
                <Button white>Rs 299</Button>
              </div>
            </div>
          </motion.div>

          {/* Team Plan */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.6, delay: 0.5 },
            }}
            viewport={{ amount: 0.3, once: true }}
            className="flex flex-col justify-between h-[20rem] sm:h-[21rem] md:h-[22rem] lg:h-[20rem] xl:h-[22rem] rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850 hover:scale-105"
          >
            <div>
              <p className="text-2xl font-medium text-white/90 mb-4 mt-2">Team Plan</p>
              <ul className="list-disc px-5 space-y-2">
                <li>Unlimited Conversations per day.</li>
                <li>Our Latest Model.</li>
                <li>Up to 5 users per account.</li>
                <li>I ran out of points why</li>
                <li>if u get this one.</li>
              </ul>
            </div>
            <div className="mb-3">
              <p className="text-md font-normal text-white/50 mt-4">
                Recommended for Law-teams.
              </p>
              <div className="mt-3">
                <Button white>Rs 799</Button>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.6, delay: 0.5 },
            }}
            viewport={{ amount: 0.3, once: true }}
            className="flex flex-col justify-between h-[20rem] sm:h-[21rem] md:h-[22rem] lg:h-[20rem] xl:h-[22rem] rounded-xl border-1 border-white/8 bg-white/2 px-3 transition-all hover:border-gray-700 hover:bg-gray-850 hover:scale-105"
          >
            <div>
              <p className="text-2xl font-medium text-white/90 mb-4 mt-2">Enterprise Plan</p>
              <ul className="list-disc px-5 space-y-2">
                <li>Unlimited Conversations per day.</li>
                <li>Our Latest Model.</li>
                <li>Up to 25 users per account.</li>
                <li>I ran out of points why</li>
                <li>if u get this one.</li>
              </ul>
            </div>
            <div className="mb-3">
              <p className="text-md font-normal text-white/50 mt-4">
                Recommended for Law-firms.
              </p>
              <div className="mt-3">
                <Button white>Rs 1999</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
