//import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn: "https://c837c3fadff44a8f97c8b6d9ef04c7ed@sentry.io/2642688"
  // });
}

function log(error) {
  console.log("logService:", error);
  //Sentry.captureException("vidly-app: " + error);
}

export default {
  init,
  log
};
