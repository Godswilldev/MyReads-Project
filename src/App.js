import React from "react";
import { Route, useLocation, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";
import { pageVariants } from "./FramerMotion";
import FourZeroFour from "./components/FourZeroFour";
const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={() => (
              <motion.div
                initial="initial"
                exit="out"
                animate="in"
                variants={pageVariants}
              >
                <Home />
              </motion.div>
            )}
          />

          <Route
            exact
            path="/search"
            render={(props) => (
              <motion.div
                initial="initial"
                exit="out"
                animate="in"
                variants={pageVariants}
              >
                <Search {...props} />
              </motion.div>
            )}
          />

          <Route
            exact
            path="/book/:id"
            render={(props) => (
              <motion.div
                initial="initial"
                exit="out"
                animate="in"
                variants={pageVariants}
              >
                <BookDetails {...props} />
              </motion.div>
            )}
          />

          <Route component={FourZeroFour} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
