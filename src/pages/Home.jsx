import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen px-8 py-12 bg-gradient-to-br from-[#0c0f18] via-[#1a1232] to-[#241032] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <motion.div
          className="max-w-xl space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            I’m Frontend Developer
          </h1>
          <p className="text-lg text-gray-300">
            I focus on creating solutions that enhance and simplify the user
            experience.
          </p>
          <Link
            to="/resume"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            Resume
          </Link>
        </motion.div>

        <motion.div
          className="bg-[#1f1d2c] p-6 rounded-2xl w-full max-w-sm shadow-lg hover:shadow-purple-700/30 transition duration-300"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-xl font-bold mb-2">PathPilot</h2>
          <p className="text-sm text-gray-400">
            Path Management System Development
          </p>
          <div className="mt-4">
            <img
              src="/assets/pathpilot-icon.svg"
              alt="PathPilot"
              className="w-24 h-24 mx-auto"
            />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8">
        <motion.div
          className="bg-[#1f1d2c] p-6 rounded-xl flex items-center gap-6 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress Circle */}
          <div className="relative w-20 h-20">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(#3b82f6 ${
                  56 * 3.6
                }deg, #374151 0deg)`,
              }}
            ></div>
            <div className="absolute inset-2 rounded-full bg-[#1f1d2c] flex items-center justify-center">
              <span className="text-white font-bold text-sm">56%</span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-1">
            <div className="text-sm text-gray-400 font-medium">
              Currently Building
            </div>
            <div className="text-xl font-bold text-white">PathPilot</div>
            <div className="text-xs text-gray-400">
              Path Management System — React + Supabase
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-gray-400 text-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I am developing PathPilot. This Path Management System is a personal
          application that I am working on. It incorporates a blend of React and
          Supabase for advanced backend capabilities to drive its path
          management functionalities.
        </motion.div>
      </div>

      <div className="mt-20">
        <h3 className="text-xl font-bold mb-6">Projects / Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <motion.div
            className="bg-[#1f1d2c] p-6 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-blue-600/30 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/assets/menu-icon.svg"
              className="w-16 mb-4"
              alt="Digital Menu"
            />
            <h4 className="text-lg font-semibold">Digital Menu</h4>
            <p className="text-xs text-gray-400 mt-1">Restaurant UI System</p>
          </motion.div>

          <motion.div
            className="bg-[#1f1d2c] p-6 rounded-xl flex flex-col items-center text-center shadow-md hover:shadow-blue-600/30 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/assets/pathpilot-icon.svg"
              className="w-16 mb-4"
              alt="PathPilot"
            />
            <h4 className="text-lg font-semibold">PathPilot</h4>
            <p className="text-xs text-gray-400 mt-1">Path Management System</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
