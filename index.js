import { UI_CLASSES, UI_SELECTORS, UI_SELECTORS_ANOTHER } from "./utils.js";
import { Tabs } from "./tabs.js";

const tabs = new Tabs(UI_SELECTORS, UI_CLASSES);
tabs.initTabs();

const tabsAnother = new Tabs(UI_SELECTORS_ANOTHER, UI_CLASSES);
tabsAnother.initTabs();