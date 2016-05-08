'use strict';

const { dialog } = require('electron');

const view = {
    label: 'View',
    submenu: [
        {
            label: 'Copy link',
            accelerator: 'CmdOrCtrl+L',
            click: (item, focusedWindow) => {
                dialog.showMessageBox(focusedWindow, {
                    type: 'none',
                    buttons: ['close'],
                    title: 'Fetch current URL',
                    message: focusedWindow.webContents.getURL()
                });
            }
        },
        {
            label: 'Go back',
            accelerator: 'CmdOrCtrl+backspace',
            click: (item, focusedWindow) => {
                if (focusedWindow.webContents.canGoBack()) {
                    focusedWindow.webContents.goBack();
                }
            }
        },
        {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: (item, focusedWindow) => {
                if (focusedWindow) {
                    focusedWindow.reload();
                }
            }
        },
        {
            label: 'Submit',
            accelerator: 'CmdOrCtrl+S',
            click: (item, focusedWindow) => {
                focusedWindow.webContents.loadURL('https://news.ycombinator.com/submit');
            }
        }
    ]
};

if (process.env.NODE_ENV !== 'production') {
    view.submenu.push({
        label: 'Toggle Developer Tools',
        accelerator: (() => {
            let cmd;

            if (process.platform === 'darwin') {
                cmd = 'Alt+Command+I';
            } else {
                cmd = 'Ctrl+Shift+I';
            }

            return cmd;
        })(),
        click: (item, focusedWindow) => {
            if (focusedWindow) {
                focusedWindow.webContents.toggleDevTools();
            }
        }
    });
}

module.exports = view;
