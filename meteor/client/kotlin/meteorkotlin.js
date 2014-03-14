(function () {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    greeting: function (message) {
      return message;
    },
    clickMe: function () {
      return 'Thanks for clicking the button';
    },
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      rshah: Kotlin.definePackage(null, /** @lends _.com.rshah */ {
        example: Kotlin.definePackage(null, /** @lends _.com.rshah.example */ {
          meteorkotlin: Kotlin.definePackage(null, /** @lends _.com.rshah.example.meteorkotlin */ {
            Greeter: Kotlin.createClass(null, null, /** @lends _.com.rshah.example.meteorkotlin.Greeter.prototype */ {
              greet: function () {
                return 'Greeting - from Greeter kotlin class';
              }
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('meteorkotlin', _);
}());
