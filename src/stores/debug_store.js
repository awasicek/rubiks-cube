import { observable, action } from "mobx";

export default class DebugStore {
    @observable debugModeEnabled = false;

    @action.bound
    enableDebugMode = () => {
        this.debugModeEnabled = true;
    };

    @action.bound
    disableDebugMode = () => {
        this.debugModeEnabled = false;
    };
}