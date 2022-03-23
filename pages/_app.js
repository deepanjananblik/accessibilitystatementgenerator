import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion";
import '../styles/globals.css';
import { useState } from "react";
import { animations } from "../lib/animations";

import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps, router }) {

  const startIndex = 2;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);

  return (
    <div className="app-wrap" style={{ backgroundColor: "#ffffff" }}>
      {/* <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter> */}
          <div
            key={router.route.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </div>
        {/* </AnimatePresence>
      </LazyMotion> */}
    </div>
  )
}

export default MyApp
