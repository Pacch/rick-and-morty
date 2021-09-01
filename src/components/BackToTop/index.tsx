import { tw } from "twind";
import Icon from "components/Icon";
import useScrollTop from "hooks/useScrollTop";
import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const { handleScroll } = useScrollTop(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const DISTANCE = 300;
      setIsVisible(window.pageYOffset > DISTANCE);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <div
      data-testid="backToTop"
      className={tw`rounded-full animate-bounce h-[50px] w-[50px] flex items-center justify-center bg-green-400 fixed right-[10px] bottom-[40px] delay-75 transition-all cursor-pointer ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={handleScroll}
    >
      <Icon name="arrow-up" className={tw`text-white`} size={25} />
    </div>
  );
};

export default BackToTop;
