import Introduction from "./components/intro/Introduction";
import Work from "./components/work/Work";
import Message from "./components/message/Message";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import './App.css'
// import { useLocation } from "react-router-dom";

function App() {
  const ref = useRef(null);
  // const { pathname } = useLocation();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        repeat: true,
        multiplier: 2,
        lerp: 0.1,
      }}
      watch={[]}
      containerRef={ref}
      // location={pathname}
      // onLocationChange={(scroll) =>
      //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
      // } // If you want to reset the scroll position to 0 for example
      // onUpdate={() => console.log("Updated, but not on location change!")}
    >
      <main data-scroll-container ref={ref}>
        <Introduction />
        <Work />
        <Message />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
