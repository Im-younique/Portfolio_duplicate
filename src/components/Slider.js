import { useState, useRef, useEffect } from "react";

const Slider = ({ children, id }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [state, setState] = useState(0);
  const scrollRef = useRef();
  const handleMoveLeft = () => {
    if (state > 0) {
      setState(state - 1);
      scrollRef.current.scrollTo({
        top: 0,
        left: (state - 1) * width,
        behavior: "smooth",
      });
    } else {
      setState(children.length - 1);
      scrollRef.current.scrollRef({
        top: 0,
        left: (children.length - 1) * width,
        behavior: "smooth",
      });
    }
  };

  const handleMoveRight = () => {
    if (state < children.length) {
      setState(state + 1);
      scrollRef.current.scrollTo({
        top: 0,
        left: (state + 1) * width,
        behavior: "smooth",
      });
    } else {
      setState(0);
      scrollRef.current.scrollRef({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
    scrollRef.current.scrollTo({
      top: 0,
      left: state * window.innerWidth,
      behavior: "smooth",
    });
  };

  //TODO: Resize에 반응할 수 있도록 useEffect 조정

  useEffect(() => {
    setWidth(window.innerWidth);
    scrollRef.current.scrollTo({
      top: 0,
      left: state * width,
      behavior: "smooth",
    });
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, [handleResize, width, setWidth]);

  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleMoveLeft}>왼쪽</button>
      <section
        id={id}
        className="slider"
        ref={scrollRef}
        style={{ transform: `scrollX(${state * 100}%)`, fontSize: "16px" }}
      >
        {children}
      </section>
      <button onClick={handleMoveRight}>오른쪽</button>
    </div>
  );
};

export default Slider;