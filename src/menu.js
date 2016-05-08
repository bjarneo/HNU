'use strict';

const electron = require('electron');

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
        {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click: (item, focusedWindow) => {
                        if (focusedWindow) {
                            focusedWindow.reload();
                        }
                    }
                }
            ]
        },
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
