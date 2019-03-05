! function(t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = t, n.c = e, n.d = function(t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    })
  }, n.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function(t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) n.d(i, o, function(e) {
        return t[e]
      }.bind(null, o));
    return i
  }, n.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 2)
}([function(t, e) {
  ! function(e) {
    var n, i, o = !1;

    function r(t) {
      if ("undefined" != typeof document && !o) {
        var e = document.documentElement;
        i = window.pageYOffset, document.documentElement.scrollHeight > window.innerHeight ? e.style.width = "calc(100% - " + function() {
          if (void 0 !== n) return n;
          var t = document.documentElement,
            e = document.createElement("div");
          return e.setAttribute("style", "width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"), t.appendChild(e), n = e.offsetWidth - e.clientWidth, t.removeChild(e), n
        }() + "px)" : e.style.width = "100%", e.style.position = "fixed", e.style.top = -i + "px", e.style.overflow = "hidden", o = !0
      }
    }

    function a() {
      if ("undefined" != typeof document && o) {
        var t = document.documentElement;
        t.style.width = "", t.style.position = "", t.style.top = "", t.style.overflow = "", window.scroll(0, i), o = !1
      }
    }
    var s = {
      on: r,
      off: a,
      toggle: function() {
        o ? a() : r()
      }
    };
    void 0 !== t && void 0 !== t.exports ? t.exports = s : e.noScroll = s
  }(this)
}, function(t, e, n) {
  "use strict";
  n.r(e);
  var i = window,
    o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.msRequestAnimationFrame || function(t) {
      return setTimeout(t, 16)
    },
    r = window,
    a = r.cancelAnimationFrame || r.mozCancelAnimationFrame || function(t) {
      clearTimeout(t)
    };

  function s() {
    for (var t, e, n, i = arguments[0] || {}, o = 1, r = arguments.length; o < r; o++)
      if (null !== (t = arguments[o]))
        for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
    return i
  }

  function c(t) {
    return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
  }

  function u(t, e, n, i) {
    return i && t.setItem(e, n), n
  }

  function l() {
    var t = document,
      e = t.body;
    return e || ((e = t.createElement("body")).fake = !0), e
  }
  var d = document.documentElement;

  function f(t) {
    var e = "";
    return t.fake && (e = d.style.overflow, t.style.background = "", t.style.overflow = d.style.overflow = "hidden", d.appendChild(t)), e
  }

  function h(t, e) {
    t.fake && (t.remove(), d.style.overflow = e, d.offsetHeight)
  }

  function p(t, e, n, i) {
    "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
  }

  function m(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length
  }

  function v(t, e, n) {
    for (var i = 0, o = t.length; i < o; i++) e.call(n, t[i], i)
  }
  var y = "classList" in document.createElement("_"),
    g = y ? function(t, e) {
      return t.classList.contains(e)
    } : function(t, e) {
      return t.className.indexOf(e) >= 0
    },
    w = y ? function(t, e) {
      g(t, e) || t.classList.add(e)
    } : function(t, e) {
      g(t, e) || (t.className += " " + e)
    },
    b = y ? function(t, e) {
      g(t, e) && t.classList.remove(e)
    } : function(t, e) {
      g(t, e) && (t.className = t.className.replace(e, ""))
    };

  function x(t, e) {
    return t.hasAttribute(e)
  }

  function k(t, e) {
    return t.getAttribute(e)
  }

  function E(t) {
    return void 0 !== t.item
  }

  function S(t, e) {
    if (t = E(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
      for (var n = t.length; n--;)
        for (var i in e) t[n].setAttribute(i, e[i])
  }

  function A(t, e) {
    t = E(t) || t instanceof Array ? t : [t];
    for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
      for (var o = n; o--;) t[i].removeAttribute(e[o])
  }

  function C(t) {
    x(t, "hidden") || S(t, {
      hidden: ""
    })
  }

  function L(t) {
    x(t, "hidden") && A(t, "hidden")
  }

  function T(t) {
    return t.offsetWidth > 0 && t.offsetHeight > 0
  }

  function M(t) {
    if ("string" == typeof t) {
      var e = [t],
        n = t.charAt(0).toUpperCase() + t.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function(i) {
        "ms" === i && "transform" !== t || e.push(i + n)
      }), t = e
    }
    for (var i = document.createElement("fakeelement"), o = (t.length, 0); o < t.length; o++) {
      var r = t[o];
      if (void 0 !== i.style[r]) return r
    }
    return !1
  }

  function _(t, e) {
    var n = !1;
    return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
  }
  var O = !1;
  try {
    var I = Object.defineProperty({}, "passive", {
      get: function() {
        O = !0
      }
    });
    window.addEventListener("test", null, I)
  } catch (t) {}
  var N = !!O && {
    passive: !0
  };

  function P(t, e) {
    for (var n in e) {
      var i = ("touchstart" === n || "touchmove" === n) && N;
      t.addEventListener(n, e[n], i)
    }
  }

  function q(t, e) {
    for (var n in e) {
      var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && N;
      t.removeEventListener(n, e[n], i)
    }
  }
  n.d(e, "tns", function() {
    return H
  }), Object.keys || (Object.keys = function(t) {
    var e = [];
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
    return e
  }), "remove" in Element.prototype || (Element.prototype.remove = function() {
    this.parentNode && this.parentNode.removeChild(this)
  });
  var H = function(t) {
    t = s({
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      controls: !0,
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0
    }, t || {});
    var e = document,
      n = window,
      i = {
        ENTER: 13,
        SPACE: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      },
      r = {},
      d = t.useLocalStorage;
    if (d) {
      var y = navigator.userAgent,
        E = new Date;
      try {
        (r = n.localStorage) ? (r.setItem(E, E), d = r.getItem(E) == E, r.removeItem(E)) : d = !1, d || (r = {})
      } catch (t) {
        d = !1
      }
      d && (r.tnsApp && r.tnsApp !== y && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(t) {
        r.removeItem(t)
      }), localStorage.tnsApp = y)
    }
    for (var O = r.tC ? c(r.tC) : u(r, "tC", function() {
        var t = document,
          e = l(),
          n = f(e),
          i = t.createElement("div"),
          o = !1;
        e.appendChild(i);
        try {
          for (var r, a = "(10px * 10)", s = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], c = 0; c < 3; c++)
            if (r = s[c], i.style.width = r, 100 === i.offsetWidth) {
              o = r.replace(a, "");
              break
            }
        } catch (t) {}
        return e.fake ? h(e, n) : i.remove(), o
      }(), d), I = r.tPL ? c(r.tPL) : u(r, "tPL", function() {
        var t, e = document,
          n = l(),
          i = f(n),
          o = e.createElement("div"),
          r = e.createElement("div"),
          a = "";
        o.className = "tns-t-subp2", r.className = "tns-t-ct";
        for (var s = 0; s < 70; s++) a += "<div></div>";
        return r.innerHTML = a, o.appendChild(r), n.appendChild(o), t = Math.abs(o.getBoundingClientRect().left - r.children[67].getBoundingClientRect().left) < 2, n.fake ? h(n, i) : o.remove(), t
      }(), d), N = r.tMQ ? c(r.tMQ) : u(r, "tMQ", function() {
        var t, e = document,
          n = l(),
          i = f(n),
          o = e.createElement("div"),
          r = e.createElement("style"),
          a = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
        return r.type = "text/css", o.className = "tns-mq-test", n.appendChild(r), n.appendChild(o), r.styleSheet ? r.styleSheet.cssText = a : r.appendChild(e.createTextNode(a)), t = window.getComputedStyle ? window.getComputedStyle(o).position : o.currentStyle.position, n.fake ? h(n, i) : o.remove(), "absolute" === t
      }(), d), B = r.tTf ? c(r.tTf) : u(r, "tTf", M("transform"), d), D = r.t3D ? c(r.t3D) : u(r, "t3D", function(t) {
        if (!t) return !1;
        if (!window.getComputedStyle) return !1;
        var e, n = document,
          i = l(),
          o = f(i),
          r = n.createElement("p"),
          a = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
        return a += "transform", i.insertBefore(r, null), r.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(r).getPropertyValue(a), i.fake ? h(i, o) : r.remove(), void 0 !== e && e.length > 0 && "none" !== e
      }(B), d), R = r.tTDu ? c(r.tTDu) : u(r, "tTDu", M("transitionDuration"), d), F = r.tTDe ? c(r.tTDe) : u(r, "tTDe", M("transitionDelay"), d), W = r.tADu ? c(r.tADu) : u(r, "tADu", M("animationDuration"), d), z = r.tADe ? c(r.tADe) : u(r, "tADe", M("animationDelay"), d), j = r.tTE ? c(r.tTE) : u(r, "tTE", _(R, "Transition"), d), G = r.tAE ? c(r.tAE) : u(r, "tAE", _(W, "Animation"), d), U = n.console && "function" == typeof n.console.warn, Q = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], V = {}, Y = Q.length; Y--;) {
      var K = Q[Y];
      if ("string" == typeof t[K]) {
        var J = t[K],
          X = e.querySelector(J);
        if (V[K] = J, !X || !X.nodeName) return void(U && console.warn("Can't find", t[K]));
        t[K] = X
      }
    }
    if (!(t.container.children.length < 1)) {
      var Z = t.responsive,
        $ = t.nested,
        tt = "carousel" === t.mode;
      if (Z) {
        0 in Z && (t = s(t, Z[0]), delete Z[0]);
        var et = {};
        for (var nt in Z) {
          var it = Z[nt];
          it = "number" == typeof it ? {
            items: it
          } : it, et[nt] = it
        }
        Z = et, et = null
      }
      if (tt && "outer" !== $ || function t(e) {
          for (var n in e) tt || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1)), "outer" === $ && "autoHeight" === n && (e[n] = !0), "responsive" === n && t(e[n])
        }(t), !tt) {
        t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
        var ot = t.animateIn,
          rt = t.animateOut,
          at = t.animateDelay,
          st = t.animateNormal
      }
      var ct, ut, lt = "horizontal" === t.axis,
        dt = e.createElement("div"),
        ft = e.createElement("div"),
        ht = t.container,
        pt = ht.parentNode,
        mt = ht.outerHTML,
        vt = ht.children,
        yt = vt.length,
        gt = gn();
      Z && qn();
      var wt, bt, xt = t.autoWidth,
        kt = xn("fixedWidth"),
        Et = xn("edgePadding"),
        St = xn("gutter"),
        At = wn(),
        Ct = xt ? 1 : Math.floor(xn("items")),
        Lt = xn("slideBy"),
        Tt = t.viewportMax || t.fixedWidthViewportWidth,
        Mt = xn("arrowKeys"),
        _t = xn("speed"),
        Ot = t.rewind,
        It = !Ot && t.loop,
        Nt = xn("autoHeight"),
        Pt = xn("controls"),
        qt = xn("controlsText"),
        Ht = xn("nav"),
        Bt = xn("touch"),
        Dt = xn("mouseDrag"),
        Rt = xn("autoplay"),
        Ft = xn("autoplayTimeout"),
        Wt = xn("autoplayText"),
        zt = xn("autoplayHoverPause"),
        jt = xn("autoplayResetOnVisibility"),
        Gt = function(t) {
          var e = document.createElement("style");
          return t && e.setAttribute("media", t), document.querySelector("head").appendChild(e), e.sheet ? e.sheet : e.styleSheet
        }(),
        Ut = t.lazyload,
        Qt = [],
        Vt = It ? function() {
          var e = function() {
              if (xt || kt && !Tt) return yt - 1;
              var e = kt ? "fixedWidth" : "items",
                n = [];
              if ((kt || t[e] < yt) && n.push(t[e]), Z)
                for (var i in Z) {
                  var o = Z[i][e];
                  o && (kt || o < yt) && n.push(o)
                }
              return n.length || n.push(0), Math.ceil(kt ? Tt / Math.min.apply(null, n) : Math.max.apply(null, n))
            }(),
            n = tt ? Math.ceil((5 * e - yt) / 2) : 4 * e - yt;
          return n = Math.max(e, n), bn("edgePadding") ? n + 1 : n
        }() : 0,
        Yt = tt ? yt + 2 * Vt : yt + Vt,
        Kt = !(!kt && !xt || It),
        Jt = kt ? ni() : null,
        Xt = !tt || !It,
        Zt = lt ? "left" : "top",
        $t = "",
        te = "",
        ee = kt ? function() {
          return Math.floor(-Jt / (kt + St)) + 1
        } : xt ? function() {
          for (var t = Yt, e = t - 1; t--;) wt[t] > -Jt && (e = t);
          return e
        } : function() {
          return It || tt ? Math.max(0, Yt - Math.ceil(Ct)) : Yt - 1
        },
        ne = vn(xn("startIndex")),
        ie = ne,
        oe = 0,
        re = xt ? null : ee(),
        ae = t.swipeAngle,
        se = !ae || "?",
        ce = !1,
        ue = t.onInit,
        le = new function() {
          return {
            topics: {},
            on: function(t, e) {
              this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
            },
            off: function(t, e) {
              if (this.topics[t])
                for (var n = 0; n < this.topics[t].length; n++)
                  if (this.topics[t][n] === e) {
                    this.topics[t].splice(n, 1);
                    break
                  }
            },
            emit: function(t, e) {
              this.topics[t] && this.topics[t].forEach(function(t) {
                t(e)
              })
            }
          }
        },
        de = " tns-slider tns-" + t.mode,
        fe = ht.id || function() {
          var t = window.tnsId;
          return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId
        }(),
        he = xn("disable"),
        pe = !1,
        me = t.freezable,
        ve = !(!me || xt) && Pn(),
        ye = !1,
        ge = {
          click: di,
          keydown: function(t) {
            switch ((t = wi(t)).keyCode) {
              case i.LEFT:
              case i.UP:
              case i.PAGEUP:
                De.disabled || di(t, -1);
                break;
              case i.RIGHT:
              case i.DOWN:
              case i.PAGEDOWN:
                Re.disabled || di(t, 1);
                break;
              case i.HOME:
                li("first", t);
                break;
              case i.END:
                li("last", t)
            }
          }
        },
        we = {
          click: function(t) {
            ce && ui();
            var e = (t = wi(t)).target || t.srcElement;
            for (; e !== je && !x(e, "data-nav");) e = e.parentNode;
            x(e, "data-nav") && li(Ve = [].indexOf.call(ze, e), t)
          },
          keydown: function(n) {
            var o = e.activeElement;
            if (!x(o, "data-nav")) return;
            var r = (n = wi(n)).keyCode,
              a = [].indexOf.call(ze, o),
              s = Ue.length,
              c = Ue.indexOf(a);
            t.navContainer && (s = yt, c = a);

            function u(e) {
              return t.navContainer ? e : Ue[e]
            }
            switch (r) {
              case i.LEFT:
              case i.PAGEUP:
                c > 0 && gi(ze[u(c - 1)]);
                break;
              case i.UP:
              case i.HOME:
                c > 0 && gi(ze[u(0)]);
                break;
              case i.RIGHT:
              case i.PAGEDOWN:
                c < s - 1 && gi(ze[u(c + 1)]);
                break;
              case i.DOWN:
              case i.END:
                c < s - 1 && gi(ze[u(s - 1)]);
                break;
              case i.ENTER:
              case i.SPACE:
                Ve = a, li(a, n)
            }
          }
        },
        be = {
          mouseover: function() {
            Ze && (hi(), $e = !0)
          },
          mouseout: function() {
            $e && (fi(), $e = !1)
          }
        },
        xe = {
          visibilitychange: function() {
            e.hidden ? Ze && (hi(), en = !0) : en && (fi(), en = !1)
          }
        },
        ke = {
          keydown: function(t) {
            switch ((t = wi(t)).keyCode) {
              case i.LEFT:
                di(t, -1);
                break;
              case i.RIGHT:
                di(t, 1)
            }
          }
        },
        Ee = {
          touchstart: Ei,
          touchmove: Si,
          touchend: Ci,
          touchcancel: Ci
        },
        Se = {
          mousedown: Ei,
          mousemove: Si,
          mouseup: Ci,
          mouseleave: Ci
        },
        Ae = bn("controls"),
        Ce = bn("nav"),
        Le = !!xt || t.navAsThumbnails,
        Te = bn("autoplay"),
        Me = bn("touch"),
        _e = bn("mouseDrag"),
        Oe = "tns-slide-active",
        Ie = "tns-complete",
        Ne = {
          load: Wn,
          error: Wn
        };
      if (Ae) var Pe, qe, He = t.controlsContainer,
        Be = t.controlsContainer ? t.controlsContainer.outerHTML : "",
        De = t.prevButton,
        Re = t.nextButton,
        Fe = t.prevButton ? t.prevButton.outerHTML : "",
        We = t.nextButton ? t.nextButton.outerHTML : "";
      if (Ce) var ze, je = t.navContainer,
        Ge = t.navContainer ? t.navContainer.outerHTML : "",
        Ue = [],
        Qe = Ue,
        Ve = -1,
        Ye = yn(),
        Ke = Ye,
        Je = "tns-nav-active";
      if (Te) var Xe, Ze, $e, tn, en, nn = "forward" === t.autoplayDirection ? 1 : -1,
        on = t.autoplayButton,
        rn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
        an = ["<span class='tns-visually-hidden'>", " animation</span>"];
      if (Me || _e) var sn, cn = {},
        un = {},
        ln = !1,
        dn = 0,
        fn = lt ? function(t, e) {
          return t.x - e.x
        } : function(t, e) {
          return t.y - e.y
        };
      xt || mn(he || ve), B && (Zt = B, $t = "translate", D ? ($t += lt ? "3d(" : "3d(0px, ", te = lt ? ", 0px, 0px)" : ", 0px)") : ($t += lt ? "X(" : "Y(", te = ")")),
        function() {
          Z && qn();
          ! function() {
            bn("gutter");
            dt.className = "tns-outer", ft.className = "tns-inner", dt.id = fe + "-ow", ft.id = fe + "-iw", Nt && (ft.className += " tns-ah");
            "" === ht.id && (ht.id = fe);
            de += I || xt ? " tns-subpixel" : " tns-no-subpixel", de += O ? " tns-calc" : " tns-no-calc", tt && (de += " tns-" + t.axis);
            if (ht.className += de, tt) {
              var n = e.createElement("div");
              n.className = "tns-ovh", dt.appendChild(n), n.appendChild(ft)
            } else dt.appendChild(ft);
            pt.insertBefore(dt, ht), ft.appendChild(ht)
          }();
          for (var i = 0; i < yt; i++) {
            var o = vt[i];
            o.id || (o.id = fe + "-item" + i), w(o, "tns-item"), !tt && st && w(o, st), S(o, {
              "aria-hidden": "true",
              tabindex: "-1"
            })
          }
          if (Vt) {
            for (var r = e.createDocumentFragment(), a = e.createDocumentFragment(), s = Vt; s--;) {
              var c = s % yt,
                u = vt[c].cloneNode(!0);
              if (A(u, "id"), a.insertBefore(u, a.firstChild), tt) {
                var l = vt[yt - 1 - c].cloneNode(!0);
                A(l, "id"), r.appendChild(l)
              }
            }
            ht.insertBefore(r, ht.firstChild), ht.appendChild(a), vt = ht.children
          }(function() {
            for (var e = ne, i = ne + Math.min(yt, Ct); e < i; e++) {
              var o = vt[e];
              S(o, {
                "aria-hidden": "false"
              }), A(o, ["tabindex"]), w(o, Oe), tt || (o.style.left = 100 * (e - ne) / Ct + "%", w(o, ot), b(o, st))
            }
            if (tt && lt && (I || xt ? (p(Gt, "#" + fe + " > .tns-item", "font-size:" + n.getComputedStyle(vt[0]).fontSize + ";", m(Gt)), p(Gt, "#" + fe, "font-size:0;", m(Gt))) : v(vt, function(t, e) {
                t.style.marginLeft = function(t) {
                  return O ? O + "(" + 100 * t + "% / " + Yt + ")" : 100 * t / Yt + "%"
                }(e)
              })), N) {
              var r = kn(t.edgePadding, t.gutter, t.fixedWidth, t.speed);
              p(Gt, "#" + fe + "-iw", r, m(Gt)), tt && (r = lt && !xt ? "width:" + En(t.fixedWidth, t.gutter, t.items) + ";" : "", R && (r += Ln(_t)), p(Gt, "#" + fe, r, m(Gt))), r = lt && !xt ? Sn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (r += An(t.gutter)), tt || (R && (r += Ln(_t)), W && (r += Tn(_t))), r && p(Gt, "#" + fe + " > .tns-item", r, m(Gt))
            } else {
              ft.style.cssText = kn(Et, St, kt), tt && lt && !xt && (ht.style.width = En(kt, St, Ct));
              var r = lt && !xt ? Sn(kt, St, Ct) : "";
              St && (r += An(St)), r && p(Gt, "#" + fe + " > .tns-item", r, m(Gt))
            }
            if (Z && N)
              for (var a in Z) {
                a = parseInt(a);
                var s = Z[a],
                  r = "",
                  c = "",
                  u = "",
                  l = "",
                  d = xt ? null : xn("items", a),
                  f = xn("fixedWidth", a),
                  h = xn("speed", a),
                  y = xn("edgePadding", a),
                  g = xn("gutter", a);
                ("edgePadding" in s || "gutter" in s) && (c = "#" + fe + "-iw{" + kn(y, g, f, h) + "}"), tt && lt && !xt && ("fixedWidth" in s || "items" in s || kt && "gutter" in s) && (u = "width:" + En(f, g, d) + ";"), R && "speed" in s && (u += Ln(h)), u && (u = "#" + fe + "{" + u + "}"), ("fixedWidth" in s || kt && "gutter" in s || !tt && "items" in s) && (l += Sn(f, g, d)), "gutter" in s && (l += An(g)), !tt && "speed" in s && (R && (l += Ln(h)), W && (l += Tn(h))), l && (l = "#" + fe + " > .tns-item{" + l + "}"), (r = c + u + l) && Gt.insertRule("@media (min-width: " + a / 16 + "em) {" + r + "}", Gt.cssRules.length)
              }
          })(), Mn(), xt || (_n(), On())
        }();
      var hn = It ? tt ? function() {
          var t = oe,
            e = re;
          t += Lt, e -= Lt, Et ? (t += 1, e -= 1) : kt && At % (kt + St) && (e -= 1), Vt && (ne > e ? ne -= yt : ne < t && (ne += yt))
        } : function() {
          if (ne > re)
            for (; ne >= oe + yt;) ne -= yt;
          else if (ne < oe)
            for (; ne <= re - yt;) ne += yt
        } : function() {
          ne = Math.max(oe, Math.min(re, ne))
        },
        pn = tt ? function() {
          ti(ht, ""), R || !_t ? (ri(), _t && T(ht) || ui()) : function(t, e, n, i, o, r, a) {
            var s = Math.min(r, 10),
              c = o.indexOf("%") >= 0 ? "%" : "px",
              u = (o = o.replace(c, ""), Number(t.style[e].replace(n, "").replace(i, "").replace(c, ""))),
              l = (o - u) / r * s;
            setTimeout(function o() {
              r -= s, u += l, t.style[e] = n + u + c + i, r > 0 ? setTimeout(o, s) : a()
            }, s)
          }(ht, Zt, $t, te, ii(), _t, ui), lt || Li()
        } : function() {
          Qt = [];
          var t = {};
          t[j] = t[G] = ui, q(vt[ie], t), P(vt[ne], t), ai(ie, ot, rt, !0), ai(ne, st, ot), j && G && _t && T(ht) || ui()
        };
      return {
        version: "2.8.5",
        getInfo: Mi,
        events: le,
        goTo: li,
        play: function() {
          Rt && !Ze && (mi(), tn = !1)
        },
        pause: function() {
          Ze && (vi(), tn = !0)
        },
        isOn: ut,
        updateSliderHeight: Vn,
        refresh: Mn,
        destroy: function() {
          if (Gt.disabled = !0, Gt.ownerNode && Gt.ownerNode.remove(), q(n, {
              resize: In
            }), Mt && q(e, ke), He && q(He, ge), je && q(je, we), q(ht, be), q(ht, xe), on && q(on, {
              click: yi
            }), Rt && clearInterval(Xe), tt && j) {
            var i = {};
            i[j] = ui, q(ht, i)
          }
          Bt && q(ht, Ee), Dt && q(ht, Se);
          var o = [mt, Be, Fe, We, Ge, rn];
          Q.forEach(function(e, n) {
            var i = "container" === e ? dt : t[e];
            if ("object" == typeof i) {
              var r = !!i.previousElementSibling && i.previousElementSibling;
              i.outerHTML = o[n], t[e] = r ? r.nextElementSibling : i.parentNode.firstElementChild
            }
          }), Q = ot = rt = at = st = lt = dt = ft = ht = pt = mt = vt = yt = ct = gt = xt = kt = Et = St = At = Ct = Lt = Tt = Mt = _t = Ot = It = Nt = Gt = Ut = wt = Qt = Vt = Yt = Kt = Jt = Xt = Zt = $t = te = ee = ne = ie = oe = re = ae = se = ce = ue = le = de = fe = he = pe = me = ve = ye = ge = we = be = xe = ke = Ee = Se = Ae = Ce = Le = Te = Me = _e = Oe = Ie = Ne = bt = Pt = qt = He = Be = De = Re = Pe = qe = Ht = je = Ge = ze = Ue = Qe = Ve = Ye = Ke = Je = Rt = Ft = nn = Wt = zt = on = rn = jt = an = Xe = Ze = $e = tn = en = cn = un = sn = ln = dn = fn = Bt = Dt = null, this.getInfo = this.events = this.goTo = this.play = this.pause = this.destroy = null, this.isOn = ut = !1
        },
        rebuild: function() {
          return H(s(t, V))
        }
      }
    }

    function mn(t) {
      t && (Pt = Ht = Bt = Dt = Mt = Rt = zt = jt = !1)
    }

    function vn(t) {
      return t = t ? Math.max(0, Math.min(It ? yt - 1 : yt - Ct, t)) : 0, tt ? t + Vt : t
    }

    function yn(t) {
      for (null == t && (t = ne), tt && (t -= Vt); t < 0;) t += yt;
      return Math.floor(t % yt)
    }

    function gn() {
      return n.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
    }

    function wn() {
      return function t(e) {
        return e.clientWidth || t(e.parentNode)
      }(pt) - (2 * Et - St)
    }

    function bn(e) {
      if (t[e]) return !0;
      if (Z)
        for (var n in Z)
          if (Z[n][e]) return !0;
      return !1
    }

    function xn(e, n) {
      if (null == n && (n = gt), "items" === e && kt) return Math.floor(At / (kt + St)) || 1;
      var i = t[e];
      if (Z)
        for (var o in Z) n >= parseInt(o) && e in Z[o] && (i = Z[o][e]);
      return "slideBy" === e && "page" === i && (i = xn("items")), tt || "slideBy" !== e && "items" !== e || (i = Math.floor(i)), i
    }

    function kn(t, e, n, i) {
      var o = "";
      if (t) {
        var r = t;
        e && (r -= e), o = lt ? "margin: 0 " + r + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + r + "px 0;"
      } else if (e && !n) {
        var a = "-" + e + "px";
        o = "margin: 0 " + (lt ? a + " 0 0" : "0 " + a + " 0") + ";"
      }
      return R && i && (o += Ln(i)), o
    }

    function En(t, e, n) {
      return t ? (t + e) * Yt + "px" : O ? O + "(" + 100 * Yt + "% / " + n + ")" : 100 * Yt / n + "%"
    }

    function Sn(t, e, n) {
      var i;
      if (t) i = t + e + "px";
      else {
        tt || (n = Math.floor(n));
        var o = tt ? Yt : n;
        i = O ? O + "(100% / " + o + ")" : 100 / o + "%"
      }
      return i = "width:" + i, "inner" !== $ ? i + ";" : i + " !important;"
    }

    function An(t) {
      var e = "";
      !1 !== t && (e = (lt ? "padding-" : "margin-") + (lt ? "right" : "bottom") + ": " + t + "px;");
      return e
    }

    function Cn(t, e) {
      var n = t.substring(0, t.length - e).toLowerCase();
      return n && (n = "-" + n + "-"), n
    }

    function Ln(t) {
      return Cn(R, 18) + "transition-duration:" + t / 1e3 + "s;"
    }

    function Tn(t) {
      return Cn(W, 17) + "animation-duration:" + t / 1e3 + "s;"
    }

    function Mn() {
      if (bn("autoHeight") || xt || !lt) {
        var t = ht.querySelectorAll("img");
        v(t, function(t) {
          var e = t.src;
          e.indexOf("data:image") < 0 ? (P(t, Ne), t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", t.src = e) : w(t, Ie)
        }), o(function() {
          Gn(function(t) {
            for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
            return e
          }(t), function() {
            if (bt = !0, xt) {
              var t = It ? ne : yt - 1;
              ! function n() {
                vt[t - 1].getBoundingClientRect().right.toFixed(2) === vt[t].getBoundingClientRect().left.toFixed(2) ? e() : setTimeout(function() {
                  n()
                }, 16)
              }()
            } else e();

            function e() {
              lt && !xt || (Yn(), xt ? (Jt = ni(), me && (ve = Pn()), re = ee(), mn(he || ve)) : Li()), tt && oi(), _n(), On()
            }
          })
        })
      } else tt && oi()
    }

    function _n() {
      if (Te) {
        var e = Rt ? "stop" : "start";
        on ? S(on, {
          "data-action": e
        }) : t.autoplayButtonOutput && (dt.insertAdjacentHTML("afterbegin", '<button data-action="' + e + '" type="button">' + an[0] + e + an[1] + Wt[0] + "</button>"), on = dt.querySelector("[data-action]")), on && P(on, {
          click: yi
        }), Rt && (mi(), zt && P(ht, be), jt && P(ht, xe))
      }
      if (Ce) {
        var n = tt ? Vt : 0;
        if (je) {
          S(je, {
            "aria-label": "Carousel Pagination"
          }), ze = je.children;
          for (var i = 0; i < yt; i++) {
            var o = ze[i];
            o && S(o, {
              "data-nav": i,
              tabindex: "-1",
              "aria-selected": "false",
              "aria-controls": vt[n + i].id
            })
          }
        } else {
          var r = "",
            a = Le ? "" : "hidden";
          for (i = 0; i < yt; i++) r += '<button data-nav="' + i + '" tabindex="-1" aria-selected="false" aria-controls="' + vt[n + i].id + '" ' + a + ' type="button"></button>';
          r = '<div class="tns-nav" aria-label="Carousel Pagination">' + r + "</div>", dt.insertAdjacentHTML("afterbegin", r), je = dt.querySelector(".tns-nav"), ze = je.children
        }
        if (Ti(), R) {
          var s = R.substring(0, R.length - 18).toLowerCase(),
            c = "transition: all " + _t / 1e3 + "s";
          s && (c = "-" + s + "-" + c), p(Gt, "[aria-controls^=" + fe + "-item]", c, m(Gt))
        }
        S(ze[Ye], {
          tabindex: "0",
          "aria-selected": "true"
        }), w(ze[Ye], Je), P(je, we)
      }
      Ae && (He || De && Re ? (He && (De = He.children[0], Re = He.children[1], S(He, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), S(He.children, {
        "aria-controls": fe,
        tabindex: "-1"
      })), S(De, {
        "data-controls": "prev"
      }), S(Re, {
        "data-controls": "next"
      })) : (dt.insertAdjacentHTML("afterbegin", '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + fe + '" type="button">' + qt[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + fe + '" type="button">' + qt[1] + "</button></div>"), He = dt.querySelector(".tns-controls"), De = He.children[0], Re = He.children[1]), Pe = Jn(De), qe = Jn(Re), $n(), He ? P(He, ge) : (P(De, ge), P(Re, ge))), Hn()
    }

    function On() {
      if (tt && j) {
        var t = {};
        t[j] = ui, P(ht, t)
      }
      Bt && P(ht, Ee), Dt && P(ht, Se), Mt && P(e, ke), "inner" === $ ? le.on("outerResized", function() {
        Nn(), le.emit("innerLoaded", Mi())
      }) : (Z || kt || xt || !lt) && P(n, {
        resize: In
      }), "outer" === $ ? le.on("innerLoaded", jn) : !Nt && tt || he || jn(), Fn(), he ? Rn() : ve && Dn(), le.on("indexChanged", Un), "function" == typeof ue && ue(Mi()), "inner" === $ && le.emit("innerLoaded", Mi()), ut = !0
    }

    function In(t) {
      o(function() {
        Nn(wi(t))
      })
    }

    function Nn(t) {
      if (ut) {
        "outer" === $ && le.emit("outerResized", Mi(t)), gt = gn();
        var n, i = ct,
          o = !1;
        Z && (qn(), (n = i !== ct) && le.emit("newBreakpointStart", Mi(t)));
        var r, a, s = Ct,
          c = he,
          u = ve,
          l = Mt,
          d = Pt,
          f = Ht,
          h = Bt,
          y = Dt,
          g = Rt,
          x = zt,
          k = jt,
          E = ne;
        if (n) {
          var S = kt,
            A = Nt,
            T = qt,
            M = Wt;
          if (!N) var _ = St,
            O = Et
        }
        if (Mt = xn("arrowKeys"), Pt = xn("controls"), Ht = xn("nav"), Bt = xn("touch"), Dt = xn("mouseDrag"), Rt = xn("autoplay"), zt = xn("autoplayHoverPause"), jt = xn("autoplayResetOnVisibility"), n && (he = xn("disable"), kt = xn("fixedWidth"), _t = xn("speed"), Nt = xn("autoHeight"), qt = xn("controlsText"), Wt = xn("autoplayText"), Ft = xn("autoplayTimeout"), N || (Et = xn("edgePadding"), St = xn("gutter"))), mn(he), At = wn(), lt && !xt || he || (Yn(), lt || (Li(), o = !0)), (kt || xt) && (Jt = ni(), re = ee()), (n || kt) && (Ct = xn("items"), Lt = xn("slideBy"), (a = Ct !== s) && (kt || xt || (re = ee()), hn())), n && he !== c && (he ? Rn() : function() {
            if (!pe) return;
            if (Gt.disabled = !1, ht.className += de, oi(), It)
              for (var t = Vt; t--;) tt && L(vt[t]), L(vt[Yt - t - 1]);
            if (!tt)
              for (var e = ne, n = ne + yt; e < n; e++) {
                var i = vt[e],
                  o = e < ne + Ct ? ot : st;
                i.style.left = 100 * (e - ne) / Ct + "%", w(i, o)
              }
            Bn(), pe = !1
          }()), me && (n || kt || xt) && (ve = Pn()) !== u && (ve ? (ri(ii(vn(0))), Dn()) : (! function() {
            if (!ye) return;
            Et && N && (ft.style.margin = "");
            if (Vt)
              for (var t = "tns-transparent", e = Vt; e--;) tt && b(vt[e], t), b(vt[Yt - e - 1], t);
            Bn(), ye = !1
          }(), o = !0)), mn(he || ve), Rt || (zt = jt = !1), Mt !== l && (Mt ? P(e, ke) : q(e, ke)), Pt !== d && (Pt ? L(He) : C(He)), Ht !== f && (Ht ? (L(je), Ti()) : C(je)), Bt !== h && (Bt ? P(ht, Ee) : q(ht, Ee)), Dt !== y && (Dt ? P(ht, Se) : q(ht, Se)), Rt !== g && (Rt ? (on && L(on), Ze || tn || mi()) : (on && C(on), Ze && vi())), zt !== x && (zt ? P(ht, be) : q(ht, be)), jt !== k && (jt ? P(e, xe) : q(e, xe)), n && (kt !== S && (o = !0), Nt !== A && (Nt || (ft.style.height = "")), Pt && qt !== T && (De.innerHTML = qt[0], Re.innerHTML = qt[1]), on && Wt !== M)) {
          var I = Rt ? 1 : 0,
            H = on.innerHTML,
            B = H.length - M[I].length;
          H.substring(B) === M[I] && (on.innerHTML = H.substring(0, B) + Wt[I])
        }
        if ((r = ne !== E) && (le.emit("indexChanged", Mi()), o = !0), a && (r || Un(), tt || function() {
            for (var t = ne + Math.min(yt, Ct), e = Yt; e--;) {
              var n = vt[e];
              e >= ne && e < t ? (w(n, "tns-moving"), n.style.left = 100 * (e - ne) / Ct + "%", w(n, ot), b(n, st)) : n.style.left && (n.style.left = "", w(n, st), b(n, ot)), b(n, rt)
            }
            setTimeout(function() {
              v(vt, function(t) {
                b(t, "tns-moving")
              })
            }, 300)
          }()), !he && !ve) {
          if (n && !N && (Et === O && St === _ || (ft.style.cssText = kn(Et, St, kt)), lt)) {
            tt && (ht.style.width = En(kt, St, Ct));
            var D = Sn(kt, St, Ct) + An(St);
            ! function(t, e) {
              "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e)
            }(Gt, m(Gt) - 1), p(Gt, "#" + fe + " > .tns-item", D, m(Gt))
          }!Nt && tt || jn(), o && (oi(), ie = ne)
        }
        n && le.emit("newBreakpointEnd", Mi(t))
      }
    }

    function Pn() {
      return kt || xt ? kt ? (kt + St) * yt <= At + 2 * Et : (It ? wt[yt] : ei()) <= At + 2 * Et : yt <= Ct
    }

    function qn() {
      for (var t in ct = 0, Z) t = parseInt(t), gt >= t && (ct = t)
    }

    function Hn() {
      !Rt && on && C(on), !Ht && je && C(je), !Pt && He && C(He)
    }

    function Bn() {
      Rt && on && L(on), Ht && je && L(je), Pt && He && L(He)
    }

    function Dn() {
      if (!ye) {
        if (Et && (ft.style.margin = "0px"), Vt)
          for (var t = "tns-transparent", e = Vt; e--;) tt && w(vt[e], t), w(vt[Yt - e - 1], t);
        Hn(), ye = !0
      }
    }

    function Rn() {
      if (!pe) {
        if (Gt.disabled = !0, ht.className = ht.className.replace(de.substring(1), ""), A(ht, ["style"]), It)
          for (var t = Vt; t--;) tt && C(vt[t]), C(vt[Yt - t - 1]);
        if (lt && tt || A(ft, ["style"]), !tt)
          for (var e = ne, n = ne + yt; e < n; e++) {
            var i = vt[e];
            A(i, ["style"]), b(i, ot), b(i, st)
          }
        Hn(), pe = !0
      }
    }

    function Fn() {
      if (Ut && !he) {
        var t = ne;
        if (xt)
          for (var e = ne + 1, n = e, i = wt[ne] + At + Et - St; wt[e] < i;) n = ++e;
        else n = ne + Ct;
        for (Et && (t -= 1, xt || (n += 1)), t = Math.floor(Math.max(t, 0)), n = Math.ceil(Math.min(n, Yt)); t < n; t++) v(vt[t].querySelectorAll(".tns-lazy-img"), function(t) {
          var e = {};
          e[j] = function(t) {
            t.stopPropagation()
          }, P(t, e), g(t, "loaded") || (t.src = k(t, "data-src"), w(t, "loaded"))
        })
      }
    }

    function Wn(t) {
      var e = bi(t);
      w(e, Ie), q(e, Ne)
    }

    function zn(t, e) {
      for (var n = [], i = t, o = Math.min(t + e, Yt); i < o; i++) v(vt[i].querySelectorAll("img"), function(t) {
        n.push(t)
      });
      return n
    }

    function jn() {
      var t = Nt ? zn(ne, Ct) : zn(Vt, yt);
      o(function() {
        Gn(t, Vn)
      })
    }

    function Gn(t, e) {
      return bt ? e() : (t.forEach(function(e, n) {
        g(e, Ie) && t.splice(n, 1)
      }), t.length ? void o(function() {
        Gn(t, e)
      }) : e())
    }

    function Un() {
      Fn(),
        function() {
          for (var t = ne + Math.min(yt, Ct), e = Yt; e--;) {
            var n = vt[e];
            e >= ne && e < t ? x(n, "tabindex") && (S(n, {
              "aria-hidden": "false"
            }), A(n, ["tabindex"]), w(n, Oe)) : (x(n, "tabindex") || S(n, {
              "aria-hidden": "true",
              tabindex: "-1"
            }), g(n, Oe) && b(n, Oe))
          }
        }(), $n(), Ti(),
        function() {
          if (Ht && (Ye = -1 !== Ve ? Ve : yn(), Ve = -1, Ye !== Ke)) {
            var t = ze[Ke],
              e = ze[Ye];
            S(t, {
              tabindex: "-1",
              "aria-selected": "false"
            }), S(e, {
              tabindex: "0",
              "aria-selected": "true"
            }), b(t, Je), w(e, Je), Ke = Ye
          }
        }()
    }

    function Qn(t, e) {
      for (var n = [], i = t, o = Math.min(t + e, Yt); i < o; i++) n.push(vt[i].offsetHeight);
      return Math.max.apply(null, n)
    }

    function Vn() {
      var t = Nt ? Qn(ne, Ct) : Qn(Vt, yt);
      ft.style.height !== t && (ft.style.height = t + "px")
    }

    function Yn() {
      wt = [0];
      for (var t, e = lt ? "left" : "top", n = vt[0].getBoundingClientRect()[e], i = 1; i < Yt; i++) t = vt[i].getBoundingClientRect()[e], wt.push(t - n)
    }

    function Kn(t) {
      return t.nodeName.toLowerCase()
    }

    function Jn(t) {
      return "button" === Kn(t)
    }

    function Xn(t) {
      return "true" === t.getAttribute("aria-disabled")
    }

    function Zn(t, e, n) {
      t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
    }

    function $n() {
      if (Pt && !Ot && !It) {
        var t = Pe ? De.disabled : Xn(De),
          e = qe ? Re.disabled : Xn(Re),
          n = ne <= oe,
          i = !Ot && ne >= re;
        n && !t && Zn(Pe, De, !0), !n && t && Zn(Pe, De, !1), i && !e && Zn(qe, Re, !0), !i && e && Zn(qe, Re, !1)
      }
    }

    function ti(t, e) {
      R && (t.style[R] = e)
    }

    function ei() {
      return kt ? (kt + St) * Yt : wt[Yt - 1] + vt[Yt - 1].getBoundingClientRect().width
    }

    function ni() {
      var t = At - (ei() - St);
      return Et && (t += Et - St), t > 0 && (t = 0), t
    }

    function ii(t) {
      var e;
      (null == t && (t = ne), lt && !xt) ? e = kt ? -(kt + St) * t : 100 * -t / (B ? Yt : Ct): e = -wt[t];
      return Kt && (e = Math.max(e, Jt)), e += !lt || xt || kt ? "px" : "%"
    }

    function oi(t) {
      ti(ht, "0s"), ri(t)
    }

    function ri(t) {
      null == t && (t = ii()), ht.style[Zt] = $t + t + te
    }

    function ai(t, e, n, i) {
      var o = t + Ct;
      It || (o = Math.min(o, Yt));
      for (var r = t; r < o; r++) {
        var a = vt[r];
        i || (a.style.left = 100 * (r - ne) / Ct + "%"), at && F && (a.style[F] = a.style[z] = at * (r - t) / 1e3 + "s"), b(a, e), w(a, n), i && Qt.push(a)
      }
    }

    function si(t, e) {
      Xt && hn(), (ne !== ie || e) && (le.emit("indexChanged", Mi()), le.emit("transitionStart", Mi()), Nt && jn(), Ze && t && ["click", "keydown"].indexOf(t.type) >= 0 && vi(), ce = !0, pn())
    }

    function ci(t) {
      return t.toLowerCase().replace(/-/g, "")
    }

    function ui(t) {
      if (tt || ce) {
        if (le.emit("transitionEnd", Mi(t)), !tt && Qt.length > 0)
          for (var e = 0; e < Qt.length; e++) {
            var n = Qt[e];
            n.style.left = "", z && F && (n.style[z] = "", n.style[F] = ""), b(n, rt), w(n, st)
          }
        if (!t || !tt && t.target.parentNode === ht || t.target === ht && ci(t.propertyName) === ci(Zt)) {
          if (!Xt) {
            var i = ne;
            hn(), ne !== i && (le.emit("indexChanged", Mi()), oi())
          }
          "inner" === $ && le.emit("innerLoaded", Mi()), ce = !1, ie = ne
        }
      }
    }

    function li(t, e) {
      if (!ve)
        if ("prev" === t) di(e, -1);
        else if ("next" === t) di(e, 1);
      else {
        ce && ui();
        var n = yn(),
          i = 0;
        if ("first" === t ? i = -n : "last" === t ? i = tt ? yt - Ct - n : yt - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(yt - 1, t))), i = t - n)), !tt && i && Math.abs(i) < Ct) {
          var o = i > 0 ? 1 : -1;
          i += ne + i - yt >= oe ? yt * o : 2 * yt * o * -1
        }
        ne += i, tt && It && (ne < oe && (ne += yt), ne > re && (ne -= yt)), yn(ne) !== yn(ie) && si(e)
      }
    }

    function di(t, e) {
      var n;
      if (ce && ui(), !e) {
        for (var i = (t = wi(t)).target || t.srcElement; i !== He && [De, Re].indexOf(i) < 0;) i = i.parentNode;
        var o = [De, Re].indexOf(i);
        o >= 0 && (n = !0, e = 0 === o ? -1 : 1)
      }
      if (Ot) {
        if (ne === oe && -1 === e) return void li("last", t);
        if (ne === re && 1 === e) return void li("first", t)
      }
      e && (ne += Lt * e, xt && (ne = Math.floor(ne)), si(n || t && "keydown" === t.type ? t : null))
    }

    function fi() {
      Xe = setInterval(function() {
        di(null, nn)
      }, Ft), Ze = !0
    }

    function hi() {
      clearInterval(Xe), Ze = !1
    }

    function pi(t, e) {
      S(on, {
        "data-action": t
      }), on.innerHTML = an[0] + t + an[1] + e
    }

    function mi() {
      fi(), on && pi("stop", Wt[1])
    }

    function vi() {
      hi(), on && pi("start", Wt[0])
    }

    function yi() {
      Ze ? (vi(), tn = !0) : (mi(), tn = !1)
    }

    function gi(t) {
      t.focus()
    }

    function wi(t) {
      return xi(t = t || n.event) ? t.changedTouches[0] : t
    }

    function bi(t) {
      return t.target || n.event.srcElement
    }

    function xi(t) {
      return t.type.indexOf("touch") >= 0
    }

    function ki(t) {
      t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function Ei(t) {
      ce && ui(), ln = !0, tt && (a(dn), dn = 0);
      var e = wi(t);
      le.emit(xi(t) ? "touchStart" : "dragStart", Mi(t)), !xi(t) && ["img", "a"].indexOf(Kn(bi(t))) >= 0 && ki(t), un.x = cn.x = parseInt(e.clientX), un.y = cn.y = parseInt(e.clientY), tt && (sn = parseFloat(ht.style[Zt].replace($t, "").replace(te, "")), ti(ht, "0s"))
    }

    function Si(t) {
      if (ln) {
        var e = wi(t);
        un.x = parseInt(e.clientX), un.y = parseInt(e.clientY), tt && !dn && (dn = o(function() {
          ! function t(e) {
            if (!se) return void(ln = !1);
            a(dn);
            ln && (dn = o(function() {
              t(e)
            }));
            Ai();
            if (se) {
              try {
                e.type && le.emit(xi(e) ? "touchMove" : "dragMove", Mi(e))
              } catch (t) {}
              var n = sn,
                i = fn(un, cn);
              if (!lt || kt || xt) n += i, n += "px";
              else {
                var r = B ? i * Ct * 100 / (At * Yt) : 100 * i / At;
                n += r, n += "%"
              }
              ht.style[Zt] = $t + n + te
            }
          }(t)
        }))
      }
    }

    function Ai() {
      "?" === se && un.x !== cn.x && un.y !== cn.y && (se = function(t, e) {
        var n = !1,
          i = Math.abs(90 - Math.abs(t));
        return i >= 90 - e ? n = "horizontal" : i <= e && (n = "vertical"), n
      }(function(t, e) {
        return Math.atan2(t, e) * (180 / Math.PI)
      }(un.y - cn.y, un.x - cn.x), ae) === t.axis)
    }

    function Ci(t) {
      if (ln) {
        tt && (a(dn), ti(ht, "")), ln = !1;
        var e = wi(t);
        un.x = parseInt(e.clientX), un.y = parseInt(e.clientY);
        var n = fn(un, cn);
        if (Math.abs(n) >= 5) {
          if (!xi(t)) {
            var i = bi(t);
            P(i, {
              click: function t(e) {
                ki(e), q(i, {
                  click: t
                })
              }
            })
          }
          tt ? dn = o(function() {
            if (lt && !xt) {
              var e = -n * Ct / At;
              e = n > 0 ? Math.floor(e) : Math.ceil(e), ne += e
            } else {
              var i = -(sn + n);
              if (i <= 0) ne = oe;
              else if (i >= wt[wt.length - 1]) ne = re;
              else
                for (var o = 0; o < Yt && i >= wt[o];) ne = o, i > wt[o] && n < 0 && (ne += 1), o++
            }
            si(t, n), le.emit(xi(t) ? "touchEnd" : "dragEnd", Mi(t))
          }) : (Ai(), se && di(t, n > 0 ? -1 : 1))
        }
      }
      ae && (se = "?")
    }

    function Li() {
      ft.style.height = wt[ne + Ct] - wt[ne] + "px"
    }

    function Ti() {
      Ht && !Le && (! function() {
        Ue = [];
        for (var t = yn() % Ct; t < yt;) tt && !It && t + Ct > yt && (t = yt - Ct), Ue.push(t), t += Ct;
        (It && Ue.length * Ct < yt || !It && Ue[0] > 0) && Ue.unshift(0)
      }(), Ue !== Qe && (v(ze, function(t, e) {
        Ue.indexOf(e) < 0 ? C(t) : L(t)
      }), Qe = Ue))
    }

    function Mi(t) {
      return {
        container: ht,
        slideItems: vt,
        navContainer: je,
        navItems: ze,
        controlsContainer: He,
        hasControls: Ae,
        prevButton: De,
        nextButton: Re,
        items: Ct,
        slideBy: Lt,
        cloneCount: Vt,
        slideCount: yt,
        slideCountNew: Yt,
        index: ne,
        indexCached: ie,
        navCurrentIndex: Ye,
        navCurrentIndexCached: Ke,
        visibleNavIndexes: Ue,
        visibleNavIndexesCached: Qe,
        sheet: Gt,
        event: t || {}
      }
    }
    U && console.warn("No slides found in", t.container)
  }
}, function(t, e, n) {
  "use strict";
  n(3), n(6), n(9), n(10), n(13), n(15), n(16), n(17)
}, function(t, e, n) {}, , , function(t, e, n) {
  "use strict";
  new(function(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }(n(7)).default)("a[data-scroll]")
}, function(t, e, n) {
  (function(n) {
    var i;
    /*!
     * smooth-scroll v14.2.1: Animate scrolling to anchor links
     * (c) 2018 Chris Ferdinandi
     * MIT License
     * http://github.com/cferdinandi/smooth-scroll
     */
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function(t) {
        var e, n = (this.document || this.ownerDocument).querySelectorAll(t),
          i = this;
        do {
          for (e = n.length; --e >= 0 && n.item(e) !== i;);
        } while (e < 0 && (i = i.parentElement));
        return i
      }),
      function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function t(t, e) {
          e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var n = document.createEvent("CustomEvent");
          return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
        }
        t.prototype = window.Event.prototype, window.CustomEvent = t
      }(),
      /**
       * requestAnimationFrame() polyfill
       * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
       * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
       * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
       * @license MIT
       */
      function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
          var i = (new Date).getTime(),
            o = Math.max(0, 16 - (i - t)),
            r = window.setTimeout(function() {
              e(i + o)
            }, o);
          return t = i + o, r
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
          clearTimeout(t)
        })
      }(),
      function(n, o) {
        void 0 === (i = function() {
          return function(t) {
            "use strict";
            var e = {
                ignore: "[data-scroll-ignore]",
                header: null,
                topOnEmptyHash: !0,
                speed: 500,
                clip: !0,
                offset: 0,
                easing: "easeInOutCubic",
                customEasing: null,
                updateURL: !0,
                popstate: !0,
                emitEvents: !0
              },
              n = function() {
                for (var t = {}, e = function(e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                  }, n = 0; n < arguments.length; n++) e(arguments[n]);
                return t
              },
              i = function(t) {
                var e;
                try {
                  e = decodeURIComponent(t)
                } catch (n) {
                  e = t
                }
                return e
              },
              o = function(t) {
                "#" === t.charAt(0) && (t = t.substr(1));
                for (var e, n, i = String(t), o = i.length, r = -1, a = "", s = i.charCodeAt(0); ++r < o;) {
                  if (0 === (e = i.charCodeAt(r))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                  e >= 1 && e <= 31 || 127 == e || 0 === r && e >= 48 && e <= 57 || 1 === r && e >= 48 && e <= 57 && 45 === s ? a += "\\" + e.toString(16) + " " : a += e >= 128 || 45 === e || 95 === e || e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 ? i.charAt(r) : "\\" + i.charAt(r)
                }
                try {
                  n = decodeURIComponent("#" + a)
                } catch (t) {
                  n = "#" + a
                }
                return n
              },
              r = function() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
              },
              a = function(e) {
                return e ? function(e) {
                  return parseInt(t.getComputedStyle(e).height, 10)
                }(e) + e.offsetTop : 0
              },
              s = function(e, n, i, o) {
                if (n.emitEvents && "function" == typeof t.CustomEvent) {
                  var r = new CustomEvent(e, {
                    bubbles: !0,
                    detail: {
                      anchor: i,
                      toggle: o
                    }
                  });
                  document.dispatchEvent(r)
                }
              };
            return function(c, u) {
              var l, d, f, h, p, m, v = {};
              v.cancelScroll = function(t) {
                cancelAnimationFrame(m), m = null, t || s("scrollCancel", l)
              }, v.animateScroll = function(i, o, c) {
                var u = n(l || e, c || {}),
                  d = "[object Number]" === Object.prototype.toString.call(i),
                  p = d || !i.tagName ? null : i;
                if (d || p) {
                  var y = t.pageYOffset;
                  u.header && !f && (f = document.querySelector(u.header)), h || (h = a(f));
                  var g, w, b, x = d ? i : function(e, n, i, o) {
                      var a = 0;
                      if (e.offsetParent)
                        do {
                          a += e.offsetTop, e = e.offsetParent
                        } while (e);
                      a = Math.max(a - n - i, 0), o && (a = Math.min(a, r() - t.innerHeight));
                      return a
                    }(p, h, parseInt("function" == typeof u.offset ? u.offset(i, o) : u.offset, 10), u.clip),
                    k = x - y,
                    E = r(),
                    S = 0,
                    A = function(e, n) {
                      var r = t.pageYOffset;
                      if (e == n || r == n || (y < n && t.innerHeight + r) >= E) return v.cancelScroll(!0),
                        function(e, n, i) {
                          0 === e && document.body.focus();
                          if (i) return;
                          e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none");
                          t.scrollTo(0, n)
                        }(i, n, d), s("scrollStop", u, i, o), g = null, m = null, !0
                    },
                    C = function(e) {
                      g || (g = e), w = (S += e - g) / parseInt(u.speed, 10), b = y + k * function(t, e) {
                        var n;
                        "easeInQuad" === t.easing && (n = e * e);
                        "easeOutQuad" === t.easing && (n = e * (2 - e));
                        "easeInOutQuad" === t.easing && (n = e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1);
                        "easeInCubic" === t.easing && (n = e * e * e);
                        "easeOutCubic" === t.easing && (n = --e * e * e + 1);
                        "easeInOutCubic" === t.easing && (n = e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1);
                        "easeInQuart" === t.easing && (n = e * e * e * e);
                        "easeOutQuart" === t.easing && (n = 1 - --e * e * e * e);
                        "easeInOutQuart" === t.easing && (n = e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e);
                        "easeInQuint" === t.easing && (n = e * e * e * e * e);
                        "easeOutQuint" === t.easing && (n = 1 + --e * e * e * e * e);
                        "easeInOutQuint" === t.easing && (n = e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e);
                        t.customEasing && (n = t.customEasing(e));
                        return n || e
                      }(u, w = w > 1 ? 1 : w), t.scrollTo(0, Math.floor(b)), A(b, x) || (m = t.requestAnimationFrame(C), g = e)
                    };
                  0 === t.pageYOffset && t.scrollTo(0, 0),
                    function(t, e, n) {
                      if (e) return;
                      if (!history.pushState || !n.updateURL) return;
                      history.pushState({
                        smoothScroll: JSON.stringify(n),
                        anchor: t.id
                      }, document.title, t === document.documentElement ? "#top" : "#" + t.id)
                    }(i, d, u), s("scrollStart", u, i, o), v.cancelScroll(!0), t.requestAnimationFrame(C)
                }
              };
              var y = function(e) {
                  if (! function(e) {
                      if ("matchMedia" in t && t.matchMedia("(prefers-reduced-motion)").matches) return !0;
                      return !1
                    }() && 0 === e.button && !e.metaKey && !e.ctrlKey && "closest" in e.target && (d = e.target.closest(c)) && "a" === d.tagName.toLowerCase() && !e.target.closest(l.ignore) && d.hostname === t.location.hostname && d.pathname === t.location.pathname && /#/.test(d.href)) {
                    var n = o(i(d.hash)),
                      r = l.topOnEmptyHash && "#" === n ? document.documentElement : document.querySelector(n);
                    (r = r || "#top" !== n ? r : document.documentElement) && (e.preventDefault(), v.animateScroll(r, d))
                  }
                },
                g = function(t) {
                  if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(l) && history.state.anchor) {
                    var e = document.querySelector(o(i(history.state.anchor)));
                    e && v.animateScroll(e, null, {
                      updateURL: !1
                    })
                  }
                },
                w = function(t) {
                  p || (p = setTimeout(function() {
                    p = null, h = a(f)
                  }, 66))
                };
              return v.destroy = function() {
                l && (document.removeEventListener("click", y, !1), t.removeEventListener("resize", w, !1), t.removeEventListener("popstate", g, !1), v.cancelScroll(), l = null, null, d = null, f = null, h = null, p = null, m = null)
              }, v.init = function(i) {
                if (!("querySelector" in document && "addEventListener" in t && "requestAnimationFrame" in t && "closest" in t.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                v.destroy(), l = n(e, i || {}), f = l.header ? document.querySelector(l.header) : null, h = a(f), document.addEventListener("click", y, !1), f && t.addEventListener("resize", w, !1), l.updateURL && l.popstate && t.addEventListener("popstate", g, !1)
              }, v.init(u), v
            }
          }(n)
        }.apply(e, [])) || (t.exports = i)
      }(void 0 !== n ? n : "undefined" != typeof window ? window : this)
  }).call(this, n(8))
}, function(t, e) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (t) {
    "object" == typeof window && (n = window)
  }
  t.exports = n
}, function(t, e, n) {
  "use strict";
  var i = function(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }(n(0));
  var o = document.querySelector("#header"),
    r = document.querySelector("#header_ham");
  r.addEventListener("click", function() {
    r.classList.contains("is-active") ? (r.classList.remove("is-active"), o.classList.remove("-mob-open"), window.innerWidth <= 719 && i.default.off()) : (r.classList.add("is-active"), o.classList.add("-mob-open"), console.log(719), console.log(window.innerWidth), window.innerWidth <= 719 && i.default.on())
  }), window.addEventListener("resize", function() {
    r.classList.remove("is-active"), o.classList.remove("-mob-open"), i.default.off()
  });
  try {
    for (var d, f = a[Symbol.iterator](); !(c = (d = f.next()).done); c = !0) {
      s(d.value)
    }
  } catch (t) {
    u = !0, l = t
  } finally {
    try {
      !c && f.return && f.return()
    } finally {
      if (u) throw l
    }
  }
}, function(t, e, n) {
  "use strict";
  var i = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(n(11)),
    o = n(1);
  document.querySelector(".cu-story_head") && document.addEventListener("DOMContentLoaded", function() {
    var t = document.querySelector(".cu-story_sidebar_block.-product");
    if (t) {
      t.setAttribute("data-sticky-class", "-sticky"), t.setAttribute("data-sticky-for", "719"), t.parentNode.parentNode.setAttribute("data-sticky-container", "true");
      new i.default(".cu-story_sidebar_block.-product");
      var e = document.querySelector(".stories.-with-slider .stories_subwrap");
      (0, o.tns)({
        container: e,
        controls: !1,
        nav: !1,
        mouseDrag: !0,
        loop: !1,
        swipeAngle: 100,
        gutter: 23,
        autoWidth: !0,
        autoHeight: !0,
        responsive: {
          1080: {
            disable: !0
          },
          720: {
            items: 1
          },
          375: {
            items: 1
          }
        }
      })
    }
  })
}, function(t, e, n) {
  var i = n(12);
  t.exports = i
}, function(t, e, n) {
  ! function(e, n) {
    t.exports = n
  }(0, function() {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      ! function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
      /**
       * Sticky.js
       * Library for sticky elements written in vanilla javascript. With this library you can easily set sticky elements on your website. It's also responsive.
       *
       * @version 1.2.0
       * @author Rafal Galus <biuro@rafalgalus.pl>
       * @website https://rgalus.github.io/sticky-js/
       * @repo https://github.com/rgalus/sticky-js
       * @license https://github.com/rgalus/sticky-js/blob/master/LICENSE
       */
      (this, t), this.selector = e, this.elements = [], this.version = "1.2.0", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = {
        wrap: n.wrap || !1,
        marginTop: n.marginTop || 0,
        stickyFor: n.stickyFor || 0,
        stickyClass: n.stickyClass || null,
        stickyContainer: n.stickyContainer || "body"
      }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run()
    }
    return t.prototype.run = function() {
      var t = this,
        e = setInterval(function() {
          if ("complete" === document.readyState) {
            clearInterval(e);
            var n = document.querySelectorAll(t.selector);
            t.forEach(n, function(e) {
              return t.renderElement(e)
            })
          }
        }, 10)
    }, t.prototype.renderElement = function(t) {
      var e = this;
      t.sticky = {}, t.sticky.active = !1, t.sticky.marginTop = parseInt(t.getAttribute("data-margin-top")) || this.options.marginTop, t.sticky.stickyFor = parseInt(t.getAttribute("data-sticky-for")) || this.options.stickyFor, t.sticky.stickyClass = t.getAttribute("data-sticky-class") || this.options.stickyClass, t.sticky.wrap = !!t.hasAttribute("data-sticky-wrap") || this.options.wrap, t.sticky.stickyContainer = this.options.stickyContainer, t.sticky.container = this.getStickyContainer(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect = this.getRectangle(t), "img" === t.tagName.toLowerCase() && (t.onload = function() {
        return t.sticky.rect = e.getRectangle(t)
      }), t.sticky.wrap && this.wrapElement(t), this.activate(t)
    }, t.prototype.wrapElement = function(t) {
      t.insertAdjacentHTML("beforebegin", "<span></span>"), t.previousSibling.appendChild(t)
    }, t.prototype.activate = function(t) {
      t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active && (t.sticky.active = !0), this.elements.indexOf(t) < 0 && this.elements.push(t), t.sticky.resizeEvent || (this.initResizeEvents(t), t.sticky.resizeEvent = !0), t.sticky.scrollEvent || (this.initScrollEvents(t), t.sticky.scrollEvent = !0), this.setPosition(t)
    }, t.prototype.initResizeEvents = function(t) {
      var e = this;
      t.sticky.resizeListener = function() {
        return e.onResizeEvents(t)
      }, window.addEventListener("resize", t.sticky.resizeListener)
    }, t.prototype.destroyResizeEvents = function(t) {
      window.removeEventListener("resize", t.sticky.resizeListener)
    }, t.prototype.onResizeEvents = function(t) {
      this.vp = this.getViewportSize(), t.sticky.rect = this.getRectangle(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active ? t.sticky.active = !0 : (t.sticky.rect.top + t.sticky.rect.height >= t.sticky.container.rect.top + t.sticky.container.rect.height || t.sticky.stickyFor >= this.vp.width && t.sticky.active) && (t.sticky.active = !1), this.setPosition(t)
    }, t.prototype.initScrollEvents = function(t) {
      var e = this;
      t.sticky.scrollListener = function() {
        return e.onScrollEvents(t)
      }, window.addEventListener("scroll", t.sticky.scrollListener)
    }, t.prototype.destroyScrollEvents = function(t) {
      window.removeEventListener("scroll", t.sticky.scrollListener)
    }, t.prototype.onScrollEvents = function(t) {
      t.sticky.active && this.setPosition(t)
    }, t.prototype.setPosition = function(t) {
      this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      }), this.vp.height < t.sticky.rect.height || !t.sticky.active || (t.sticky.rect.width || (t.sticky.rect = this.getRectangle(t)), t.sticky.wrap && this.css(t.parentNode, {
        display: "block",
        width: t.sticky.rect.width + "px",
        height: t.sticky.rect.height + "px"
      }), 0 === t.sticky.rect.top && t.sticky.container === this.body ? this.css(t, {
        position: "fixed",
        top: t.sticky.rect.top + "px",
        left: t.sticky.rect.left + "px",
        width: t.sticky.rect.width + "px"
      }) : this.scrollTop > t.sticky.rect.top - t.sticky.marginTop ? (this.css(t, {
        position: "fixed",
        width: t.sticky.rect.width + "px",
        left: t.sticky.rect.left + "px"
      }), this.scrollTop + t.sticky.rect.height + t.sticky.marginTop > t.sticky.container.rect.top + t.sticky.container.offsetHeight ? (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
        top: t.sticky.container.rect.top + t.sticky.container.offsetHeight - (this.scrollTop + t.sticky.rect.height) + "px"
      })) : (t.sticky.stickyClass && t.classList.add(t.sticky.stickyClass), this.css(t, {
        top: t.sticky.marginTop + "px"
      }))) : (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      }), t.sticky.wrap && this.css(t.parentNode, {
        display: "",
        width: "",
        height: ""
      })))
    }, t.prototype.update = function() {
      var t = this;
      this.forEach(this.elements, function(e) {
        e.sticky.rect = t.getRectangle(e), e.sticky.container.rect = t.getRectangle(e.sticky.container), t.activate(e), t.setPosition(e)
      })
    }, t.prototype.destroy = function() {
      var t = this;
      this.forEach(this.elements, function(e) {
        t.destroyResizeEvents(e), t.destroyScrollEvents(e), delete e.sticky
      })
    }, t.prototype.getStickyContainer = function(t) {
      for (var e = t.parentNode; !e.hasAttribute("data-sticky-container") && !e.parentNode.querySelector(t.sticky.stickyContainer) && e !== this.body;) e = e.parentNode;
      return e
    }, t.prototype.getRectangle = function(t) {
      this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      });
      var e = Math.max(t.offsetWidth, t.clientWidth, t.scrollWidth),
        n = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight),
        i = 0,
        o = 0;
      do {
        i += t.offsetTop || 0, o += t.offsetLeft || 0, t = t.offsetParent
      } while (t);
      return {
        top: i,
        left: o,
        width: e,
        height: n
      }
    }, t.prototype.getViewportSize = function() {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      }
    }, t.prototype.updateScrollTopPosition = function() {
      this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0
    }, t.prototype.forEach = function(t, e) {
      for (var n = 0, i = t.length; n < i; n++) e(t[n])
    }, t.prototype.css = function(t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n])
    }, t
  }())
}, function(t, e, n) {
  "use strict";
  var i = n(1),
    o = n(18),
    r = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(n(0)),
    a = n(14);

  function s(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function c(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function u(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  document.querySelector(".use-cases_head") && document.addEventListener("DOMContentLoaded", function() {
    var t = document.getElementsByClassName("gif-toggle"),
      e = (new(function(t) {
        function e() {
          var t, n, o;
          s(this, e);
          for (var r = arguments.length, a = Array(r), u = 0; u < r; u++) a[u] = arguments[u];
          return n = o = c(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(a))), o.sliderNode = document.querySelector("#use-cases_helps .use-cases_block_slider"), o.slider = (0, i.tns)({
            container: o.sliderNode,
            mode: "gallery",
            controls: !1,
            infinite: !1,
            rewind: !0,
            autoplay: !0,
            autoHeight: !0,
            autoplayButton: !1,
            autoplayButtonOutput: !1,
            autoplayTimeout: 3e3,
            mouseDrag: !0
          }), c(o, n)
        }
        return u(e, a.Singleton), e
      }()), new(function(t) {
        function e() {
          s(this, e);
          var t = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return t.itemsSelector = ".use-cases_action_content_item", t.allItems = document.querySelectorAll(t.itemsSelector), t.itemTitleSelector = ".use-cases_action_content_item_title", t.itemTextSelector = ".use-cases_action_content_item_text", t.itemBtnSelector = ".use-cases_action_content_item_btn", t.modalWrap = document.querySelector(".use-cases_action_modal_wrap"), t.modal = document.querySelector(".use-cases_action_modal"), t.modalCloseBtn = document.querySelector(".use-cases_action_modal_close-btn"), t.modalSubtitle = document.querySelector(".use-cases_action_modal_subtitle"), t.modalText = document.querySelector(".use-cases_action_modal_text"), t.modalPrevBtn = document.querySelector("#use-cases_action_modal_btn-prev"), t.modalNextBtn = document.querySelector("#use-cases_action_modal_btn-next"), t.activeIndex = null, t.video = null, t.showModal = function() {
            t.video.stopGif(), t.modalWrap.classList.contains("-active") || (t.modalWrap.classList.add("-active"), r.default.on())
          }, t.hideModal = function() {
            t.video.stopGif(), t.modalWrap.classList.contains("-active") && (t.modalWrap.classList.remove("-active"), r.default.off())
          }, t.setModalContent = function(e) {
            var n = e.querySelector(t.itemTitleSelector).innerHTML,
              i = e.querySelector(t.itemTextSelector).innerHTML,
              o = e.getAttribute("data-video");
            t.modalSubtitle.innerHTML = n, t.modalText.innerHTML = i, t.video.gifPath = o
          }, t.setModalBtns = function(e) {
            var n = t.allItems.length;
            t.modalPrevBtn.classList.remove("-hidden"), t.modalNextBtn.classList.remove("-hidden"), 0 === e && t.modalPrevBtn.classList.add("-hidden"), e + 1 === n && t.modalNextBtn.classList.add("-hidden")
          }, t.setNextItemActive = function() {
            t.setActiveItem(t.activeIndex + 1)
          }, t.setPrevItemActive = function() {
            t.setActiveItem(t.activeIndex - 1)
          }, t.setActiveItem = function(e) {
            var n = t.allItems[e];
            t.setModalContent(n), t.setModalBtns(e), t.showModal(), t.activeIndex = e
          }, t.setListeners = function() {
            var e = t;
            (0, o.on)("click", t.itemBtnSelector, function() {
              var t = this.parentNode,
                n = Array.prototype.indexOf.call(t.parentNode.children, t);
              e.setActiveItem(n)
            }), t.modalPrevBtn.addEventListener("click", function() {
              e.setPrevItemActive()
            }), t.modalNextBtn.addEventListener("click", function() {
              e.setNextItemActive()
            }), t.modalWrap.addEventListener("click", function(n) {
              n.target === t.modalWrap && e.hideModal()
            }), t.modalCloseBtn.addEventListener("click", function() {
              e.hideModal()
            })
          }, t.setListeners(), t
        }
        return u(e, a.Singleton), e
      }())),
      n = function t(e) {
        var n = this;
        s(this, t), this.gif = void 0, this.active = !1, this.preloadGif = function() {
          n.gif = new Image, n.gif.src = n.gifPath
        }, this.toggleGif = function() {
          n.active ? n.stopGif() : n.startGif()
        }, this.stopGif = function() {
          n.image.setAttribute("src", n.placeholder), n.node.classList.remove("-active"), n.active = !1
        }, this.startGif = function() {
          n.image.setAttribute("src", n.gif.src), n.node.classList.add("-active"), n.active = !0
        }, this.node = e, this.image = this.node.getElementsByTagName("img")[0], this.placeholder = this.image.getAttribute("src"), this.gifPath = this.image.getAttribute("data-gif"), this.preloadGif(), this.node.addEventListener("click", this.toggleGif)
      };
    Array.from(t).forEach(function(t) {
      if (!t.classList.contains("use-cases_action_modal_video")) return new n(t);
      e.video = new n(t)
    });
    new(function(t) {
      function e() {
        s(this, e);
        var t = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
        return t.sliderNode = document.querySelector("#monitoring .use-cases_monitor_slider"), t.slider = (0, i.tns)({
          container: t.sliderNode,
          mode: "gallery",
          autoHeight: !0,
          controls: !1,
          nav: !1,
          infinite: !1
        }), t.changeActiveItem = function(e) {
          var n = document.querySelector("#monitoring .use-cases_monitor_step.-active");
          if (n !== e) {
            n && n.classList.remove("-active"), e.classList.add("-active");
            var i = Array.prototype.indexOf.call(e.parentNode.children, e);
            t.slider.goTo(i)
          }
        }, t.setListeners = function() {
          var e = t;
          (0, o.on)("click", "#monitoring .use-cases_monitor_step", function() {
            e.changeActiveItem(this)
          })
        }, t.setListeners(), t.changeActiveItem(document.querySelector("#monitoring .use-cases_monitor_step")), t
      }
      return u(e, a.Singleton), e
    }()), new(function(t) {
      function e() {
        var t, n, r;
        s(this, e);
        for (var a = arguments.length, u = Array(a), l = 0; l < a; l++) u[l] = arguments[l];
        return n = r = c(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(u))), r.sliderNode = document.querySelector("#tips .use-cases_tips_slider"), r.sliderNav = document.querySelector("#tips .use-cases_tips_nav"), r.slider = (0, i.tns)({
          container: r.sliderNode,
          mode: "gallery",
          autoHeight: !0,
          controls: !1,
          nav: !1,
          infinite: !1,
          onInit: function() {
            return setTimeout(function() {
              r.setListeners(), r.onSliderChange(1)
            }, 0)
          },
          responsive: {
            720: {
              disable: !1
            },
            0: {
              disable: !0
            }
          }
        }), r.setListeners = function() {
          var t = r.onSliderChange;
          (0, o.on)("click", ".use-cases_tips_nav_item", function() {
            var e = this.querySelector(".use-cases_tips_nav_item_number").innerHTML;
            t(e)
          })
        }, r.onSliderChange = function(t) {
          r.slider.goTo(t - 1), r.sliderNav.setAttribute("class", "use-cases_tips_nav -active-" + t)
        }, c(r, n)
      }
      return u(e, a.Singleton), e
    }())
  })
}, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  e.Singleton = function t() {
    if (function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.instance) return this.instance;
    this.instance = this
  }
}, function(t, e, n) {
  "use strict";
  ! function() {
    var t = document.querySelector("#form-request");
    t && t.querySelector("button").addEventListener("click", function(t) {
      return t.preventDefault()
    })
  }()
}, function(t, e, n) {
  "use strict";
  ! function() {
    document.querySelectorAll(".tabs-section:not(.tabs-section_no-click)").forEach(function(t) {
      ! function(t) {
        var e = t.querySelectorAll("li:not(.tabs-section_no-click)"),
          n = t.querySelectorAll(".image-block_item");
        e.forEach(function(t, i) {
          t.addEventListener("click", function() {
            var t = this.dataset.id;
            e.forEach(function(t, e) {
              return t.classList.remove("active")
            }), this.classList.add("active"), n.forEach(function(e, n) {
              e.classList.remove("active"), t === e.dataset.id && e.classList.add("active")
            })
          })
        })
      }(t)
    })
  }()
}, function(t, e, n) {
  "use strict";
  ! function() {
    var t = document.querySelector(".nav-bar .burger");
    if (t) {
      var e = document.querySelector(".mob-aside"),
        n = e.querySelector(".mob-aside-menu");
      n.addEventListener("click", function(t) {
        t.stopPropagation();
        var i = n.querySelector(".close-menu");
        n.querySelectorAll("a").forEach(function(n) {
          t.target !== n && t.target !== i || e.classList.remove("active")
        })
      }), t.addEventListener("click", function() {
        e.classList.add("active")
      }), e.addEventListener("click", function(t) {
        this.classList.remove("active")
      })
    }
  }()
}, function(t, e, n) {
  "use strict";

  function i() {
    if (!(this instanceof i)) return new i;
    this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
  }
  n.r(e);
  var o = window.document.documentElement,
    r = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
  i.prototype.matchesSelector = function(t, e) {
    return r.call(t, e)
  }, i.prototype.querySelectorAll = function(t, e) {
    return e.querySelectorAll(t)
  }, i.prototype.indexes = [];
  var a = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  i.prototype.indexes.push({
    name: "ID",
    selector: function(t) {
      var e;
      if (e = t.match(a)) return e[0].slice(1)
    },
    element: function(t) {
      if (t.id) return [t.id]
    }
  });
  var s = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  i.prototype.indexes.push({
    name: "CLASS",
    selector: function(t) {
      var e;
      if (e = t.match(s)) return e[0].slice(1)
    },
    element: function(t) {
      var e = t.className;
      if (e) {
        if ("string" == typeof e) return e.split(/\s/);
        if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
      }
    }
  });
  var c, u = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  i.prototype.indexes.push({
    name: "TAG",
    selector: function(t) {
      var e;
      if (e = t.match(u)) return e[0].toUpperCase()
    },
    element: function(t) {
      return [t.nodeName.toUpperCase()]
    }
  }), i.prototype.indexes.default = {
    name: "UNIVERSAL",
    selector: function() {
      return !0
    },
    element: function() {
      return [!0]
    }
  }, c = "function" == typeof window.Map ? window.Map : function() {
    function t() {
      this.map = {}
    }
    return t.prototype.get = function(t) {
      return this.map[t + " "]
    }, t.prototype.set = function(t, e) {
      this.map[t + " "] = e
    }, t
  }();
  var l = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

  function d(t, e) {
    var n, i, o, r, a, s, c = (t = t.slice(0).concat(t.default)).length,
      u = e,
      d = [];
    do {
      if (l.exec(""), (o = l.exec(u)) && (u = o[3], o[2] || !u))
        for (n = 0; n < c; n++)
          if (a = (s = t[n]).selector(o[1])) {
            for (i = d.length, r = !1; i--;)
              if (d[i].index === s && d[i].key === a) {
                r = !0;
                break
              } r || d.push({
              index: s,
              key: a
            });
            break
          }
    } while (o);
    return d
  }

  function f(t, e) {
    var n, i, o;
    for (n = 0, i = t.length; n < i; n++)
      if (o = t[n], e.isPrototypeOf(o)) return o
  }

  function h(t, e) {
    return t.id - e.id
  }
  i.prototype.logDefaultIndexUsed = function() {}, i.prototype.add = function(t, e) {
    var n, i, o, r, a, s, u, l, h = this.activeIndexes,
      p = this.selectors;
    if ("string" == typeof t) {
      for (n = {
          id: this.uid++,
          selector: t,
          data: e
        }, u = d(this.indexes, t), i = 0; i < u.length; i++) r = (l = u[i]).key, (a = f(h, o = l.index)) || ((a = Object.create(o)).map = new c, h.push(a)), o === this.indexes.default && this.logDefaultIndexUsed(n), (s = a.map.get(r)) || (s = [], a.map.set(r, s)), s.push(n);
      this.size++, p.push(t)
    }
  }, i.prototype.remove = function(t, e) {
    if ("string" == typeof t) {
      var n, i, o, r, a, s, c, u, l = this.activeIndexes,
        f = {},
        h = 1 === arguments.length;
      for (n = d(this.indexes, t), o = 0; o < n.length; o++)
        for (i = n[o], r = l.length; r--;)
          if (s = l[r], i.index.isPrototypeOf(s)) {
            if (c = s.map.get(i.key))
              for (a = c.length; a--;)(u = c[a]).selector !== t || !h && u.data !== e || (c.splice(a, 1), f[u.id] = !0);
            break
          } this.size -= Object.keys(f).length
    }
  }, i.prototype.queryAll = function(t) {
    if (!this.selectors.length) return [];
    var e, n, i, o, r, a, s, c, u = {},
      l = [],
      d = this.querySelectorAll(this.selectors.join(", "), t);
    for (e = 0, i = d.length; e < i; e++)
      for (r = d[e], n = 0, o = (a = this.matches(r)).length; n < o; n++) u[(c = a[n]).id] ? s = u[c.id] : (s = {
        id: c.id,
        selector: c.selector,
        data: c.data,
        elements: []
      }, u[c.id] = s, l.push(s)), s.elements.push(r);
    return l.sort(h)
  }, i.prototype.matches = function(t) {
    if (!t) return [];
    var e, n, i, o, r, a, s, c, u, l, d, f = this.activeIndexes,
      p = {},
      m = [];
    for (e = 0, o = f.length; e < o; e++)
      if (c = (s = f[e]).element(t))
        for (n = 0, r = c.length; n < r; n++)
          if (u = s.map.get(c[n]))
            for (i = 0, a = u.length; i < a; i++) !p[d = (l = u[i]).id] && this.matchesSelector(t, l.selector) && (p[d] = !0, m.push(l));
    return m.sort(h)
  }, n.d(e, "on", function() {
    return C
  }), n.d(e, "off", function() {
    return L
  }), n.d(e, "fire", function() {
    return T
  });
  var p = {},
    m = {},
    v = new WeakMap,
    y = new WeakMap,
    g = new WeakMap,
    w = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

  function b(t, e, n) {
    var i = t[e];
    return t[e] = function() {
      return n.apply(t, arguments), i.apply(t, arguments)
    }, t
  }

  function x() {
    v.set(this, !0)
  }

  function k() {
    v.set(this, !0), y.set(this, !0)
  }

  function E() {
    return g.get(this) || null
  }

  function S(t, e) {
    w && Object.defineProperty(t, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: e || w.get
    })
  }

  function A(t) {
    var e = (1 === t.eventPhase ? m : p)[t.type];
    if (e) {
      var n = function(t, e, n) {
        var i = [],
          o = e;
        do {
          if (1 !== o.nodeType) break;
          var r = t.matches(o);
          if (r.length) {
            var a = {
              node: o,
              observers: r
            };
            n ? i.unshift(a) : i.push(a)
          }
        } while (o = o.parentElement);
        return i
      }(e, t.target, 1 === t.eventPhase);
      if (n.length) {
        b(t, "stopPropagation", x), b(t, "stopImmediatePropagation", k), S(t, E);
        for (var i = 0, o = n.length; i < o && !v.get(t); i++) {
          var r = n[i];
          g.set(t, r.node);
          for (var a = 0, s = r.observers.length; a < s && !y.get(t); a++) r.observers[a].data.call(r.node, t)
        }
        g.delete(t), S(t)
      }
    }
  }

  function C(t, e, n) {
    var o = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
      r = o ? m : p,
      a = r[t];
    a || (a = new i, r[t] = a, document.addEventListener(t, A, o)), a.add(e, n)
  }

  function L(t, e, n) {
    var i = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
      o = i ? m : p,
      r = o[t];
    r && (r.remove(e, n), r.size || (delete o[t], document.removeEventListener(t, A, i)))
  }

  function T(t, e, n) {
    return t.dispatchEvent(new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: n
    }))
  }
}]);
