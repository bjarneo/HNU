# HNU
#### Hacker news unofficial desktop application

![http://i.imgur.com/kf22sOX.png](http://i.imgur.com/kf22sOX.png)

Playing around using [Electron](https://github.com/electron/electron).

Don't have any build for OSX.

..And haven't tested in Windows.. :)

## Download
[Latest release](https://github.com/bjarneo/hnu/releases/latest)

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
* Restyle hacker news. Material design?
* Shortcuts (submit)

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
