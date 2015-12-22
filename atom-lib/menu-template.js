const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const shell = electron.shell

var boost = {
  label: 'Boostnote',
  submenu: [
    {
      label: 'About Boostnote',
      selector: 'orderFrontStandardAboutPanel:'
    },
    {
      type: 'separator'
    },
    {
      label: 'Services',
      submenu: []
    },
    {
      type: 'separator'
    },
    {
      label: 'Hide Boostnote',
      accelerator: 'Command+H',
      selector: 'hide:'
    },
    {
      label: 'Hide Others',
      accelerator: 'Command+Shift+H',
      selector: 'hideOtherApplications:'
    },
    {
      label: 'Show All',
      selector: 'unhideAllApplications:'
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:'
    }
  ]
}

var edit = {
  label: 'Edit',
  submenu: [
    {
      label: 'Undo',
      accelerator: 'Command+Z',
      selector: 'undo:'
    },
    {
      label: 'Redo',
      accelerator: 'Shift+Command+Z',
      selector: 'redo:'
    },
    {
      type: 'separator'
    },
    {
      label: 'Cut',
      accelerator: 'Command+X',
      selector: 'cut:'
    },
    {
      label: 'Copy',
      accelerator: 'Command+C',
      selector: 'copy:'
    },
    {
      label: 'Paste',
      accelerator: 'Command+V',
      selector: 'paste:'
    },
    {
      label: 'Select All',
      accelerator: 'Command+A',
      selector: 'selectAll:'
    }
  ]
}

var view = {
  label: 'View',
  submenu: [
    {
      label: 'Reload',
      accelerator: (function () {
        if (process.platform === 'darwin') return 'Command+R'
        else return 'Ctrl+R'
      })(),
      click: function () {
        BrowserWindow.getFocusedWindow().reload()
      }
    },
    // {
    //   label: 'Toggle Developer Tools',
    //   accelerator: (function () {
    //     if (process.platform === 'darwin') return 'Alt+Command+I'
    //     else return 'Ctrl+Shift+I'
    //   })(),
    //   click: function (item, focusedWindow) {
    //     if (focusedWindow) BrowserWindow.getFocusedWindow().toggleDevTools()
    //   }
    // }
  ]
}

var window = {
  label: 'Window',
  submenu: [
    {
      label: 'Minimize',
      accelerator: 'Command+M',
      selector: 'performMiniaturize:'
    },
    {
      label: 'Close',
      accelerator: 'Command+W',
      selector: 'performClose:'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      selector: 'arrangeInFront:'
    }
  ]
}

var help = {
  label: 'Help',
  role: 'help',
  submenu: [
    {
      label: 'Boostnote official site',
      click: function () { shell.openExternal('https://b00st.io/') }
    },
    {
      label: 'Tutorial page',
      click: function () { shell.openExternal('https://b00st.io/tutorial.html') }
    },
    {
      label: 'Discussions',
      click: function () { shell.openExternal('https://github.com/BoostIO/boost-app-discussions/issues') }
    },
    {
      label: 'Changelog',
      click: function () { shell.openExternal('https://github.com/BoostIO/boost-releases/blob/master/changelog.md') }
    }
  ]
}

module.exports = process.platform === 'darwin'
  ? [boost, edit, view, window, help]
  : [view, help]