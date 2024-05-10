import Wrapper from "../assets/wrapper/landingPage"
import Navbar from "../components/Navbar"
import Stroke from "../assets/images/stroke.png"
import gojek3 from "../assets/images/gojek3.jpeg"
import gojek1 from "../assets/images/gojek1.png";
import gojek2 from "../assets/images/gojek2.png";
import cloud1 from "../assets/images/cloud1.png"
import cloud2 from "../assets/images/cloud2.png"
import cloud3 from "../assets/images/cloud3.png"
import building from "../assets/images/building.png"

const LandingPage = () => {
  return (
    <Wrapper>
      <div>
        <Navbar />
        {/* SECTION-1 */}
        <div
          id="section1-div"
          className="flex justify-center z-10 absolute left-32 right-32 top-32"
        >
          <div className="bg-blue-primary w-[940px] h-[660px] relative rounded-xl">
            <img src={gojek2} alt="" className=" absolute right-0 h-1/3" />
            <h1 className="text-white text-4xl pt-16 text-center px-56 font-bold">
              Kesejahteraan Ojek Daring, Murni atau Ilusi?
            </h1>
            <img src={gojek1} alt="" className="absolute top-16" />
            <img
              src={gojek3}
              alt=""
              className="absolute bottom-0 w-10/12 inset-x-20 rounded-xl"
            />
          </div>
        </div>
        
        <section id="section-1" className="bg-white">
          <img src={Stroke} alt="" className="mt-10 z-0" />
          <img src={cloud2} alt="" className="absolute w-80 top-[730px]" />
          <img
            src={cloud3}
            alt=""
            className="absolute w-44 top-[550px] right-0 "
          />
        </section>
        {/* !!SECTION-1 */}

        {/* SECTION-2 */}
        <section id="section-2" className="bg-orange-bg h-[800px] relative ">
          <img
            src={building}
            className="absolute w-full z-10"
                          alt=""
          /> 
          <img
            src={cloud1}
            className="absolute w-96 top-0 right-0"
            alt=""
          />
        </section>
        {/* !!SECTION-2 */}

      </div>
    </Wrapper>
  );
}
export default LandingPage