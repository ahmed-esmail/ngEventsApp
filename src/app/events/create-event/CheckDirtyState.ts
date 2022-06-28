import {CreateEventComponent} from "./create-event.component";

export function CheckDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
