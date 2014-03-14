var OurModule = Kotlin.modules.meteorkotlin;
var BasePackage = OurModule.com.rshah.example.meteorkotlin;

Template.hello.version = function () {
    return "Meteor version: " + OurModule.meteorRelease();
}

Template.hello.greeting = function () {
    return OurModule.greeting("Kotlin - Meteor");
};

Template.hello.events({
    'click input': function () {
        // template data, if any, is available in 'this'
        if (typeof console !== 'undefined')
            console.log("You pressed the button: " + OurModule.clickMe());

        alert(OurModule.clickMe());
    }
});

Template.hello.greeting_class = function () {
    var greeter = new BasePackage.Greeter();

    return greeter.greet();
};
