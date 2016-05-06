'use strict';

const fs = require('fs');
const path = require('path');
const storage = require('electron-json-storage');
const root = path.join(path.dirname(fs.realpathSync(__filename)), '../');

module.exports = function insertCSS(page) {
    return function(filename) {
        if (!filename) {
            return;
        }

        storage.set('theme', { file: filename });

        if (filename === 'none') {
            return;
        }

        page.insertCSS(
            fs.readFileSync(
                path.join(root, 'themes', filename),
                'utf8'
            )
        );
    };
};
