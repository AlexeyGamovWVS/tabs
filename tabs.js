export class Tabs {
  constructor(selectors, classes) {
    this._selectors = selectors;
    this._classes = classes;
  }

  initTabs() {
    this._getElements();
    this._setAttributes();
    this._setListeners();
    this._showByIndex(0);
  }

  _getElements() {
    this._section = document.querySelector(this._selectors.SECTION);
    this._tabRow = this._section.querySelector(this._selectors.TAB_ROW);
    this._headers = this._tabRow.querySelectorAll(this._selectors.TAB_BUTTON);
    this._contents = this._tabRow.querySelectorAll(
      this._selectors.TAB_CONTENT
    );
    this._activeTab = this._tabRow.querySelector(
      this._selectors.TAB_BTN_ACTIVE
    );
    this._activeTabContent = this._tabRow.querySelector(
      this._selectors.TAB_CONTENT_ACTIVE
    );
  }

  _setAttributes() {
    this._headers.forEach((header, index) => {
      header.dataset.index = index;
      header.setAttribute("role", "tab");
      this._contents[index].setAttribute("role", "tab-content");
      this._contents[index].dataset.index = index;
    });
  }

  _setListeners() {
    this._tabRow.addEventListener("click", (e) => {
      const target = e.target.closest(this._selectors.TAB_BUTTON);
      if (target) {
        e.preventDefault();
        this._setActiveTab(target);
      }
    });
  }

  _setActiveTab(targetTab) {
    if (targetTab !== this._activeTab) {
      this._toggleClass(false);
      this._activeTab = targetTab;
      this._activeTabContent = this._contents[targetTab.dataset.index];
      this._toggleClass(true);
    }
  }

  _toggleClass(boolean) {
    this._activeTab
      ? this._activeTab.classList.toggle(this._classes.TAB_BTN_ACTIVE, boolean)
      : null;
    this._activeTabContent
      ? this._activeTabContent.classList.toggle(
          this._classes.TAB_CONTENT_ACTIVE,
          boolean
        )
      : null;
  }

  _showByIndex(index) {
    this._setActiveTab(this._headers[index]);
  }
}