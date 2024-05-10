import { GiFullMotorcycleHelmet } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center py-3">
        <GiFullMotorcycleHelmet className="text-orange-primary text-4xl mr-2" />
        <h1
          className="text-orange-primary font-bold text-2xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          RideNarrative
        </h1>
      </nav>
    </>
  );
};
export default Navbar;
