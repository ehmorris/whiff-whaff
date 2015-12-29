angular.module('whiffWhaff').config(function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(sms):/);
});
