runTests = function() {
  // hide any existing HTML but don't remove it
  $('body > *').css({display: 'none'});
  document.head.title = "Tests";

  MochaRunner.setReporter(practical.mocha.HtmlReporter);

  inRange = false;
  _.each(document.styleSheets, (sheet) => {
    var rules = _.filter(sheet.cssRules, (r) => {
      if (r.selectorText && r.selectorText.match(/scoped/)) {
        inRange = !inRange;
      };
      return inRange;
    });

    var styles = _.pluck(rules, 'cssText').join('\n');

    $('head').append('<style>' + styles + '</style>');
  });

  $('head link[rel=stylesheet]').remove();
};
