# HNU
#### Hacker news unofficial desktop application

![http://i.imgur.com/wOo29s7.png](http://i.imgur.com/wOo29s7.png)

Playing around using [Electron](https://github.com/electron/electron).

OS X, Windows and Linux support.

## Keyboard shortcuts
Go back: `ctrl+backspace`, OSX: `cmd+backspace`  
Refresh: `ctrl+R`, OSX: `cmd+R`  
Get current url: `ctrl+L`, OSX: `cmd+L`  
Submit: `ctrl+S`, OSX: `cmd+S`  

## Download
[Latest release](https://github.com/bjarneo/hnu/releases/latest)

## Themes
Change theme is available in the `menu -> Themes -> Theme name`.

Themes: [https://github.com/bjarneo/HNU/blob/master/THEMES.md](https://github.com/bjarneo/HNU/blob/master/THEMES.md)  

It is possible to add new themes. The file must be added to `themes/` folder.  
This code must be added to `src/menu.js` tpl const:
```js
addTheme('Theme Name', 'css-file.css')
```

## Icon for linux
If you want an icon for the app, create a file in ~/.local/share/applications named
hnu.desktop with:
```
[Desktop Entry]
Name=HNU
Exec=/full/path/to/folder/HNU
Terminal=false
Type=Application
Icon=/full/path/to/icon/Icon.png
```
Icon you need to download: [Icon.png](https://github.com/bjarneo/HNU/blob/master/media/Icon.png)

## Manually

```bash
# Clone this repository
git clone https://github.com/bjarneo/hnu
# Go into the repository
cd hnu
# Install dependencies and run the app
npm install && npm start
```

Things that might be cool to do
------
* Shortcuts (submit)

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
