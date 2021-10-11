const useScrollTop = (value: number) => {
  const handleScroll = () => {
    window.scrollTo({
      top: value,
      behavior: "smooth",
    });
  };
  return {
    handleScroll,
  };
};

export default useScrollTop;
