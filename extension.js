const Calendar = imports.ui.calendar;
const Lang = imports.lang;

var EventMessage = new Lang.Class({
    Name: 'EventMessage',
    Extends: Calendar.EventMessage,
    
    canClose() {
        return false;
    }
})

function init() {
}

function enable() {
    Calendar.EventMessage = EventMessage;
}

function disable() {
}
