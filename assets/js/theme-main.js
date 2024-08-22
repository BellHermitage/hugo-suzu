class NoChrome extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const isChromium = !!window.chrome;

        if (isChromium) {
          const element = this.querySelector("div");
          element.toggleAttribute("hidden");
        }
    }
};

addEventListener('DOMContentLoaded', () => {
    customElements.define('no-chrome', NoChrome);
});
