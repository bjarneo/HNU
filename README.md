# HNU
#### Hacker news unofficial desktop application

![http://i.imgur.com/V8iNESb.png](http://i.imgur.com/V8iNESb.png)

Playing around using [Electron](https://github.com/electron/electron).

Don't have any build for OSX.

..And haven't tested in Windows.. :)

## Keyboard shortcuts
Go back: `ctrl+backspace`  
Refresh: `ctrl+R`

## Download
[Latest release](https://github.com/bjarneo/hnu/releases/latest)

## Themes
Change theme is available in the `menu -> Themes -> Theme name`.

Themes: [https://github.com/bjarneo/HNU/blob/master/THEMES.md](https://github.com/bjarneo/HNU/blob/master/THEMES.md)  

It is possible to add new themes. The file must be added to `themes/` folder.  
This code must be added to `src/menu.js` tpl const:
```js
{
    label: 'Theme name',
    file: 'custom-theme-name.css',
    click() {
        // The filename must be added for now.
        insertCSS('custom-theme-name.css');

        // Refresh page to remove other custom css.
        page.reload();
    }
}
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
Icon you need to download: [http://i.imgur.com/oXfkU0T.png](http://i.imgur.com/oXfkU0T.png)

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
