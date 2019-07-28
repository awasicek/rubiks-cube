import { observable, action } from "mobx";

export default class DebugStore {
    @observable isDebugModeEnabled = false;

    @action.bound
    enableDebugMode = () => {
        this.isDebugModeEnabled = true;
    };

    @action.bound
    disableDebugMode = () => {
        this.isDebugModeEnabled = false;
    };
}