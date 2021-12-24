import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    topNav: "<h1>Loading topnav</h1>"
  },
  errors: {
    topNav: "<h1>Failed to load topnav</h1>"
  },
  props: {}
});
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});

// Delay starting the layout engine until the styleguide CSS is loaded
const layoutEngine = constructLayoutEngine({ routes, applications, active: false });

applications.forEach(registerApplication);
// layoutEngine.activate();
// start();
System.import("@pkg/styleguide").then(() => {
  // Activate the layout engine once the styleguide CSS is loaded
  layoutEngine.activate();
  start();
});
