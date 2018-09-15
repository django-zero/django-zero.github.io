(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{180:function(t,e,s){"use strict";s.r(e);var n=s(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),s("p",[t._v("That's it, you can jump to the "),s("router-link",{attrs:{to:"./getting-started.html"}},[t._v("getting started →")]),t._v(" guide.")],1),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You need "),e("code",[this._v("python 3.5+")]),this._v(" installed, with "),e("code",[this._v("pip")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You also need "),e("code",[this._v("Node.js")]),this._v(" (LTS or Current), with "),e("code",[this._v("yarn")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please note that "),e("code",[this._v("django-zero")]),this._v(" will need permissions to write files in its own package, you really should install it in userland, for example in a nice and shiny virtual environment (yes, it is important).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ pip "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" django-zero"),e("span",{attrs:{class:"token punctuation"}},[this._v("[")]),this._v("dev"),e("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Django-zero write in its own package, because it contains javascript dependencies in "),s("code",[t._v("package.json")]),t._v(" and "),s("code",[t._v("yarn.lock")]),t._v("\nfiles, and the associated package manager ("),s("code",[t._v("yarn")]),t._v(") will need to expand the packages into a "),s("code",[t._v("node_modules")]),t._v(" directory\nthere.")]),t._v(" "),s("p",[t._v("This is necessary so that the javascript dependencies are treated like a python dependency, while keeping the release\nprocess simple. We publish the "),s("code",[t._v("package.json")]),t._v("/"),s("code",[t._v("yarn.lock")]),t._v(" files within the python egg on PyPI, you get the freezed\njavascript dependencies (but you still download them from NPM, the Node.js package repository).")])])}],!1,null,null,null);i.options.__file="install.md";e.default=i.exports}}]);