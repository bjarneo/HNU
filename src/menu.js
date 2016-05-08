'use strict';

const electron = require('electron');
const view = require('./menu/view');

module.exports = function menu(page) {
    const insertCSS = require('./insert-css')(page);

    function addTheme(label, file) {
        return {
            label,
            file,
            click() {
                insertCSS(file);

                page.reload();
            }
        };
    }

    const tpl = [
        view,
        {
            label: 'Themes',
            submenu: [
                addTheme('default', 'none'),
                addTheme('HNU', 'hnu.css'),
                addTheme('HNU Night mode', 'hnu-night.css'),
                addTheme('Lost sunset', 'lost-sunset.css'),
                addTheme('Haxxor', 'haxxor.css')
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
