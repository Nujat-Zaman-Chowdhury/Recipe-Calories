import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="p-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            > 
              <li><a href="">Home</a></li>
              <li><a href="">Recipes</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Search</a></li>
              
            </ul>
          </div>
          <a className="text-2xl lg:text-3xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><a href="">Home</a></li>
              <li><a href="">Recipes</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Search</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <div className="lg:w-[260px] bg-[#150B2B0D] rounded-full  hidden  lg:flex items-center px-6 py-3 gap-3 ">
                <CiSearch />
                <span>Search</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#0BE58A] p-3 justify-center items-center hover:cursor-pointer">
            <FaRegCircleUser className="text-2xl"></FaRegCircleUser>
            </div>
          </div>
        </div>
      </div>
    
        {/* banner */}
        <div className="mt-7 h-full lg:h-[100vh] rounded-2xl">
            <div className="bg-[linear-gradient(0deg,rgba(21,11,43,0.90),rgba(21,11,43,0.00)),url('./assets/images/banner.jpeg')] w-full h-full bg-cover bg-no-repeat rounded-2xl">
                <div className="flex justify-center items-center w-full h-full px-3 lg:px-0 py-5 lg:py-24 space-y-4">
                    <div className="text-white text-center  mx-auto">
                    <h3 className="text-2xl lg:text-6xl font-bold leading-10">Discover an exceptional cooking <br></br> class tailored for you!</h3>
                    <p className="text-base lg:text-lg lg:w-[933px] mx-auto my-4">Experience Culinary Excellence at Our Chef's Table.Indulge in Exquisite Creations Crafted by Master Chefs.Savor Every Bite, Every Moment, Every Memory</p>
                    <div className="mt-5 flex gap-4 justify-center items-center">
                    <button className="btn bg-[#0BE58A] border-0 text-[#150B2B] text-base lg:text-xl font-semibold rounded-full">Explore Now</button>
                    <button className="btn bg-transparent text-white border border-white rounded-full text-base lg:text-xl font-semibold">Our Feedback</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

   
  );
};

export default Navbar;
