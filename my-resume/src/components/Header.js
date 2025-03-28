import { motion } from "framer-motion";
function Header() {
    return (
      <div className="flex items-center gap-6">
        <img
          src="/my-avatar.png"
          alt="avatar"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">Sicong Yan</h1>
          <p className="text-sm sm:text-base text-gray-600">Frontend Developer</p>
        </div>
      </div>
    );
  }
  
  export default Header;
  