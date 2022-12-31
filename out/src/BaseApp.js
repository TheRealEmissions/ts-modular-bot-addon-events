import { HeadFile } from "ts-modular-bot-file-design";
import { Dependency } from "ts-modular-bot-types";
import { GeneralEvents, DiscordEvents } from "./enums/CommonEvents.js";
import { EventEmitter } from "node:events";
class BaseApp extends HeadFile {
    constructor() {
        super();
    }
    type = Dependency.EVENTS;
    name = "Events";
    load = true;
    GeneralEvents = GeneralEvents;
    DiscordEvents = DiscordEvents;
    static events = new EventEmitter();
    getDependencies() {
        return [];
    }
}
export default BaseApp;