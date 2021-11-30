(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.GLASS = {}));
})(this, (function (exports) { 'use strict';


//Glass UI script
let theme = 'white';
let userPermissions = 'allpermissions';

function changeStyle(newTheme) {
  theme = newTheme;
}

// #region userPermissions
function changeUserPermissions(newUserPermissions) {
  userPermissions = newUserPermissions;
  if (userPermissions == 'nopermissions') {
    document.ondragstart = noselect;
    document.onselectstart = noselect;
    document.oncontextmenu = noselect;

    function noselect() {
      return false;
    }
  }
  if (userPermissions == 'nodrag') {
    document.ondragstart = noselect;
  }
  if (userPermissions == 'noselect') {
    document.onselectstart = noselect;

    function noselect() {
      return false;
    }
  }
  if (userPermissions == 'nocontextmenu') {
    document.oncontextmenu = noselect;
  }
}
// #endregion userPermissions
