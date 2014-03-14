/**
 * User: reza
 * Date: 3/13/14
 * Time: 3:20 PM
 */
import meteor.Meteor

fun greeting(message: String) : String {
    return message;
}

fun clickMe() : String {
    if (!Meteor.isServer) {
        return "Thanks for clicking the button"
    } else {
        return "No No"
    }
}

fun meteorRelease() : String {
    return Meteor.release
}