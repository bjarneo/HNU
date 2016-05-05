'use strict';

const electron = require('electron');

const tpl = [
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

module.exports = electron.Menu.buildFromTemplate(tpl);
