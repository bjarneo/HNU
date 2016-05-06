'use strict';

const path = require('path');
const { app, BrowserWindow, Menu, shell } = require('electron');
const shortcuts = require('./src/shortcuts');
const insertStorageCSS = require('./src/insert-storage-css');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 750,
        height: 800,
        maxWidth: 750,
        title: 'Unofficial Hacker News desktop application',
        darkTheme: true,
        icon: process.platform === 'linux' && path.join(__dirname, 'media', 'Icon.png')
    });

    mainWindow.loadURL('https://news.ycombinator.com/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    const page = mainWindow.webContents;

    // Init keyboard shortcuts
    shortcuts(mainWindow, page);

    page.on('dom-ready', () => {
        Menu.setApplicationMenu(require('./src/menu')(page));

        insertStorageCSS(page);

        mainWindow.show();
    });

    page.on('app-command', (e, cmd) => {
        // Navigate the window back when the user hits their mouse back button
        if (cmd === 'browser-backward' && page.canGoBack()) {
            page.goBack();
        }
    });

    page.on('will-navigate', (e, url) => {
        if (url.indexOf('news.ycombinator.com') === -1) {
            e.preventDefault();

            shell.openExternal(url);
        }
    });

    page.on('new-window', (e, url) => {
        e.preventDefault();

        shell.openExternal(url);
    });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
