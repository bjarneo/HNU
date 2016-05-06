'use strict';

const electron = require('electron');

module.exports = function menu(page) {
    const insertCSS = require('./insert-css')(page);

    const tpl = [
        {
            label: 'Themes',
            submenu: [
                {
                    label: 'default [HN]',
                    // Leave it. Will do this automatically
                    file: 'none',
                    click() {
                        insertCSS('none');

                        page.reload();
                    }
                },
                {
                    label: 'default [HNU]',
                    // Leave it. Will do this automatically
                    file: 'hnu.css',
                    click() {
                        insertCSS('hnu.css');

                        page.reload();
                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Repository',
                    click() {
                        electron.shell.openExternal('https://github.com/bjarneo/HNU');
                    }
                }
            ]
        }
    ];

    return electron.Menu.buildFromTemplate(tpl);
};
