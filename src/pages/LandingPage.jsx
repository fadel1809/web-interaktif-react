import Wrapper from "../assets/wrapper/landingPage"
import Navbar from "../components/Navbar"
import Stroke from "../assets/images/stroke.png"
import gojek3 from "../assets/images/gojek3.jpeg"
import gojek1 from "../assets/images/gojek1.png";
import gojek2 from "../assets/images/gojek2.png";
import cloud1 from "../assets/images/cloud1.png"
import cloud2 from "../assets/images/cloud2.png"
import cloud3 from "../assets/images/cloud3.png"
const LandingPage = () => {
  return (
    <Wrapper>
      <div>
        <Navbar />
        {/* SECTION 1 */}
        <div
          id="section1-div"
          className="flex justify-center z-10 absolute left-72 top-32"
        >
          <div className="bg-blue-primary w-[970px] px-32 relative">
            <h1 className="text-white text-5xl text-center font-bold">
              Kesejahteraan Ojek Daring, Murni atau Ilusi?
            </h1>
            <img src={gojek2} alt="" className=" right-0" />
            <img src={gojek1} alt="" className=" top-24" />
            <img
              src={gojek3}
              alt=""
              className=" bottom-0 w-10/12 inset-x-20 rounded-xl"
            />
          </div>
        </div>
        <section id="section-1" className="bg-white">
          <img src={Stroke} alt="" className="mt-10 z-0" />
          <img
            src={cloud1}
            className="absolute w-2/12 top-[710px] right-0"
            alt=""
          />
          <img src={cloud2} alt="" className="absolute w-2/12 top-[680px]" />
          <img
            src={cloud3}
            alt=""
            className="absolute w-36 top-[500px] right-0 "
          />

          {/* <div
              id="section1-div"
              className="bg-blue-primary w-2/3 h-20 z-10 absolute h-full top-0 left-64 rounded-xl"
            >
              <div className="absolute py-20 px-36">
                <h1 className="text-white text-5xl text-center font-bold">
                  Kesejahteraan Ojek Daring, Murni atau Ilusi?
                </h1>
              </div>
              <img src={gojek2} alt="" className="absolute right-0" />
              <img src={gojek1} alt="" className="absolute top-24" />
              <img
                src={gojek3}
                alt=""
                className="absolute bottom-0 w-10/12 inset-x-20 rounded-xl"
              />
            </div> */}
        </section>
        {/* !!Section1 */}
      </div>
    </Wrapper>
  );
}
export default LandingPage