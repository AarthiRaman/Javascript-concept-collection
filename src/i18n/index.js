import closureText from "./closure";
import pureComponentText from "./pureComponent";
import constructorsText from "./constructors";
import eventLoop from "./eventLoop";
import lifeCycleMethods from "./lifecycleMethods";
import liftingState from "./liftingState";
import statefulStateless from "./statefulStateless";

export default {
  js: {
    heading: "Javascript",
    closureText,
    constructorsText,
    eventLoop
  },
  react: {
    heading: "ReactJS",
    liftingState,
    pureComponentText,
    lifeCycleMethods,
    statefulStateless
  }
};
