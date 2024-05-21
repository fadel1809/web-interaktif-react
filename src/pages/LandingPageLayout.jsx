import {useWindowSize} from "react-use"
import LandingPageMobile from "../mobile/LandingPageMobile"
import {useState, useEffect } from "react";
import LandingPageDesktop from "./LandingPage"
const LandingPageLayout = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width <= 769);
  }, [width]);
  return (
    <>
   {
     isMobile?(<LandingPageMobile/>):(<LandingPageDesktop/>)
    }
    </>
  )
}
export default LandingPageLayout