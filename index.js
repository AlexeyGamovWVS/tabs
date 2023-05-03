import { UI_SELECTORS, UI_SELECTORS_ANOTHER } from "./utils.js";
import { Tabs } from "./tabs.js";

const tabs = new Tabs(UI_SELECTORS);
tabs.initTabs();

const tabsAnother = new Tabs(UI_SELECTORS_ANOTHER);
tabsAnother.initTabs();
