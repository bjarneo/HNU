'use strict';

const storage = require('electron-json-storage');

module.exports = function insertStorageCSS(page) {
    const insertCSS = require('./insert-css')(page);

    storage.get('theme', (err, theme) => {
        if (err) {
            throw new Error(err);
        }

        if (!theme.file) {
            return;
        }

        insertCSS(theme.file);
    });
};
