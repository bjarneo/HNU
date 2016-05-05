'use strict';

const path = require('path');
const fs = require('fs');
const electron = require('electron');
const localShortcut = require('electron-localshortcut');
const menu = require('./menu');

const { app, BrowserWindow } = electron;

let mainWindow;

function createWindow() {
    electron.Menu.setApplicationMenu(menu);

    mainWindow = new BrowserWindow({
        width: 750,
        height: 800,
        maxWidth: 750,
        title: 'Unofficial Hacker News desktop application',
        backgroundColor: 'rgb(255, 102, 0)',
        darkTheme: true,
        icon: process.platform === 'linux' && path.join(__dirname, 'media', 'Icon.png')
    });

    mainWindow.loadURL('https://news.ycombinator.com/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    const page = mainWindow.webContents;

    page.on('dom-ready', () => {
        page.insertCSS(fs.readFileSync(path.join(__dirname, 'browser.css'), 'utf8'));

        mainWindow.show();
    });

    page.on('app-command', (e, cmd) => {
        // Navigate the window back when the user hits their mouse back button
        if (cmd === 'browser-backward' && page.canGoBack()) {
            page.goBack();
        }
    });

    localShortcut.register(mainWindow, 'Ctrl+backspace', () => {
        if (page.canGoBack()) {
            page.goBack();
        }
    });

    page.on('will-navigate', (e, url) => {
        if (url.indexOf('news.ycombinator.com') === -1) {
            e.preventDefault();

            electron.shell.openExternal(url);
        }
    });

    page.on('new-window', (e, url) => {
        e.preventDefault();

        electron.shell.openExternal(url);
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
