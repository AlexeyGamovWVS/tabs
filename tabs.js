export default class Tabs {
  constructor(selectors) {
    /* selectors = {
      TAB_ROW: ".tabs", // строка табов
      TAB_BUTTON: ".js-tab-trigger", // селектор таб-кнопки (можно использовать li)
      TAB_CONTENT: ".js-tab-content", // селектор контента таба
      SECTION: ".services", // секция, в которой расположены табы
      TAB_BTN_ACTIVE: ".tabs__item-name_active", // селектор активного таба
      TAB_CONTENT_ACTIVE: ".tabs__item-content_active", // селектор контента активного таба
    }; */
    this._selectors = selectors;
  }

  initTabs(typeOfAction = "click") {
    this._getElements();
    this._setAttributes();
    this._setListeners(typeOfAction);
    this._showByIndex(0);
  }

  _getElements() {
    this._section = document.querySelector(this._selectors.SECTION);
    this._tabRow = this._section.querySelector(this._selectors.TAB_ROW);
    this._headers = this._tabRow.querySelectorAll(this._selectors.TAB_BUTTON);
    this._contents = this._tabRow.querySelectorAll(this._selectors.TAB_CONTENT);
    this._activeTab = this._tabRow.querySelector(
      this._selectors.TAB_BTN_ACTIVE
    );
    this._activeTabContent = this._tabRow.querySelector(
      this._selectors.TAB_CONTENT_ACTIVE
    );
  }

  _setAttributes() {
    this._headers.forEach((header, index) => {
      // eslint-disable-next-line no-param-reassign
      header.dataset.index = index;
      header.setAttribute("role", "tab");
      this._contents[index].setAttribute("role", "tab-content");
      this._contents[index].dataset.index = index;
    });
  }

  _setListeners(typeOfAction) {
    this._tabRow.addEventListener(typeOfAction, this._onEventHandler);
  }

  _removeEventListeners(typeOfAction) {
    this._tabRow.removeEventListener(typeOfAction, this._onEventHandler);
  }

  _onEventHandler = (e) => {
    const target = e.target.closest(this._selectors.TAB_BUTTON);
    if (target) {
      e.preventDefault();
      this._setActiveTab(target);
    }
  };

  _setActiveTab(targetTab) {
    if (targetTab !== this._activeTab) {
      this._toggleClass(false);
      this._activeTab = targetTab;
      this._activeTabContent = this._contents[targetTab.dataset.index];
      this._toggleClass(true);
    }
  }

  _toggleClass(boolean) {
    this._activeTab &&
      this._activeTab.classList.toggle(
        this._selectors.TAB_BTN_ACTIVE.substring(1),
        boolean
      );
    this._activeTabContent &&
      this._activeTabContent.classList.toggle(
        this._selectors.TAB_CONTENT_ACTIVE.substring(1),
        boolean
      );
  }

  _showByIndex(index) {
    this._setActiveTab(this._headers[index]);
  }
}
