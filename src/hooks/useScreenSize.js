import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isMobileState } from "../recoil/screenState";
import { debounce } from "lodash";

const useScreenSize = () => {
  const setIsMobile = useSetRecoilState(isMobileState);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 400); // Update the threshold as per your design
    }, 0); // Adjust the debounce time as needed

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);
};

export default useScreenSize;
