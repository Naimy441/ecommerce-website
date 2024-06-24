import Rollbar from '@rollbar/browser';

const rollbar = new Rollbar({
  accessToken: 'YOUR_ROLLBAR_ACCESS_TOKEN',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

export default rollbar;
