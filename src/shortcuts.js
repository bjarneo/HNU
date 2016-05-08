'use strict';

const localShortcut = require('electron-localshortcut');

module.exports = function shortcuts(win, page) {
    localShortcut.register(win, 'Ctrl+backspace', () => {
        if (page.canGoBack()) {
            page.goBack();
        }
    });
};
