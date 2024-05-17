import { GiFullMotorcycleHelmet } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="relative flex justify-center items-center h-20 py-3">
        <GiFullMotorcycleHelmet className="flex text-orange-primary text-2xl mr-2 sm:text-4xl" />
        <h1
          className="text-orange-primary font-bold text-lg sm:text-2xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          RideNarrative
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
