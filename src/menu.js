'use strict';

const electron = require('electron');

module.exports = function menu(page) {
    const insertCSS = require('./insert-css')(page);

    const tpl = [
        {
            label: 'Themes',
            submenu: [
                {
                    label: 'default',
                    // Leave it. Will do this automatically
                    file: 'none',
                    click() {
                        insertCSS('none');

                        page.reload();
                    }
                },
                {
                    label: 'HNU',
                    // Leave it. Will do this automatically
                    file: 'hnu.css',
                    click() {
                        insertCSS('hnu.css');

                        page.reload();
                    }
                },
                {
                    label: 'HNU Night',
                    // Leave it. Will do this automatically
                    file: 'hnu-night.css',
                    click() {
                        insertCSS('hnu-night.css');

                        page.reload();
                    }
                },
                {
                    label: 'Lost sunset',
                    // Leave it. Will do this automatically
                    file: 'lost-sunset.css',
                    click() {
                        insertCSS('lost-sunset.css');

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
