// provide some notification we're started. This is to allow use
// in automated scripts with `meteor run --once` which does not
// print when the proxy is listening.
Meteor.startup(function () {
  Meteor.defer(function () {
    Meteor._debug('App running at:', process.env.ROOT_URL);
  });
});
