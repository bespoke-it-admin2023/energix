/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var OT = Object.create;
  var zl = Object.defineProperty;
  var wT = Object.getOwnPropertyDescriptor;
  var RT = Object.getOwnPropertyNames;
  var MT = Object.getPrototypeOf,
    LT = Object.prototype.hasOwnProperty;
  var FT = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
    get: (t, r) => (typeof require < "u" ? require : t)[r]
  }) : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported')
  });
  var T = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports);
  var DT = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of RT(t)) !LT.call(e, i) && i !== r && zl(e, i, {
        get: () => t[i],
        enumerable: !(n = wT(t, i)) || n.enumerable
      });
    return e
  };
  var NT = (e, t, r) => (r = e != null ? OT(MT(e)) : {}, DT(t || !e || !e.__esModule ? zl(r, "default", {
    value: e,
    enumerable: !0
  }) : r, e));
  var Qi = T(() => {
    "use strict";
    window.tram = function (e) {
      function t(C, q) {
        var U = new k.Bare;
        return U.init(C, q)
      }

      function r(C) {
        return C.replace(/[A-Z]/g, function (q) {
          return "-" + q.toLowerCase()
        })
      }

      function n(C) {
        var q = parseInt(C.slice(1), 16),
          U = q >> 16 & 255,
          W = q >> 8 & 255,
          K = 255 & q;
        return [U, W, K]
      }

      function i(C, q, U) {
        return "#" + (1 << 24 | C << 16 | q << 8 | U).toString(16).slice(1)
      }

      function a() {}

      function s(C, q) {
        p("Type warning: Expected: [" + C + "] Got: [" + typeof q + "] " + q)
      }

      function o(C, q, U) {
        p("Units do not match [" + C + "]: " + q + ", " + U)
      }

      function l(C, q, U) {
        if (q !== void 0 && (U = q), C === void 0) return U;
        var W = U;
        return ye.test(C) || !be.test(C) ? W = parseInt(C, 10) : be.test(C) && (W = 1e3 * parseFloat(C)), 0 > W && (W = 0), W === W ? W : U
      }

      function p(C) {
        ee.debug && window && window.console.warn(C)
      }

      function c(C) {
        for (var q = -1, U = C ? C.length : 0, W = []; ++q < U;) {
          var K = C[q];
          K && W.push(K)
        }
        return W
      }
      var f = function (C, q, U) {
          function W(oe) {
            return typeof oe == "object"
          }

          function K(oe) {
            return typeof oe == "function"
          }

          function Y() {}

          function ae(oe, se) {
            function te() {
              var we = new ue;
              return K(we.init) && we.init.apply(we, arguments), we
            }

            function ue() {}
            se === U && (se = oe, oe = Object), te.Bare = ue;
            var ce, ve = Y[C] = oe[C],
              Ge = ue[C] = te[C] = new Y;
            return Ge.constructor = te, te.mixin = function (we) {
              return ue[C] = te[C] = ae(te, we)[C], te
            }, te.open = function (we) {
              if (ce = {}, K(we) ? ce = we.call(te, Ge, ve, te, oe) : W(we) && (ce = we), W(ce))
                for (var Ar in ce) q.call(ce, Ar) && (Ge[Ar] = ce[Ar]);
              return K(Ge.init) || (Ge.init = oe), te
            }, te.open(se)
          }
          return ae
        }("prototype", {}.hasOwnProperty),
        g = {
          ease: ["ease", function (C, q, U, W) {
            var K = (C /= W) * C,
              Y = K * C;
            return q + U * (-2.75 * Y * K + 11 * K * K + -15.5 * Y + 8 * K + .25 * C)
          }],
          "ease-in": ["ease-in", function (C, q, U, W) {
            var K = (C /= W) * C,
              Y = K * C;
            return q + U * (-1 * Y * K + 3 * K * K + -3 * Y + 2 * K)
          }],
          "ease-out": ["ease-out", function (C, q, U, W) {
            var K = (C /= W) * C,
              Y = K * C;
            return q + U * (.3 * Y * K + -1.6 * K * K + 2.2 * Y + -1.8 * K + 1.9 * C)
          }],
          "ease-in-out": ["ease-in-out", function (C, q, U, W) {
            var K = (C /= W) * C,
              Y = K * C;
            return q + U * (2 * Y * K + -5 * K * K + 2 * Y + 2 * K)
          }],
          linear: ["linear", function (C, q, U, W) {
            return U * C / W + q
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (C, q, U, W) {
            return U * (C /= W) * C + q
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (C, q, U, W) {
            return -U * (C /= W) * (C - 2) + q
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (C, q, U, W) {
            return (C /= W / 2) < 1 ? U / 2 * C * C + q : -U / 2 * (--C * (C - 2) - 1) + q
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (C, q, U, W) {
            return U * (C /= W) * C * C + q
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (C, q, U, W) {
            return U * ((C = C / W - 1) * C * C + 1) + q
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (C, q, U, W) {
            return (C /= W / 2) < 1 ? U / 2 * C * C * C + q : U / 2 * ((C -= 2) * C * C + 2) + q
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (C, q, U, W) {
            return U * (C /= W) * C * C * C + q
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (C, q, U, W) {
            return -U * ((C = C / W - 1) * C * C * C - 1) + q
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (C, q, U, W) {
            return (C /= W / 2) < 1 ? U / 2 * C * C * C * C + q : -U / 2 * ((C -= 2) * C * C * C - 2) + q
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (C, q, U, W) {
            return U * (C /= W) * C * C * C * C + q
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (C, q, U, W) {
            return U * ((C = C / W - 1) * C * C * C * C + 1) + q
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (C, q, U, W) {
            return (C /= W / 2) < 1 ? U / 2 * C * C * C * C * C + q : U / 2 * ((C -= 2) * C * C * C * C + 2) + q
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (C, q, U, W) {
            return -U * Math.cos(C / W * (Math.PI / 2)) + U + q
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (C, q, U, W) {
            return U * Math.sin(C / W * (Math.PI / 2)) + q
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (C, q, U, W) {
            return -U / 2 * (Math.cos(Math.PI * C / W) - 1) + q
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (C, q, U, W) {
            return C === 0 ? q : U * Math.pow(2, 10 * (C / W - 1)) + q
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (C, q, U, W) {
            return C === W ? q + U : U * (-Math.pow(2, -10 * C / W) + 1) + q
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (C, q, U, W) {
            return C === 0 ? q : C === W ? q + U : (C /= W / 2) < 1 ? U / 2 * Math.pow(2, 10 * (C - 1)) + q : U / 2 * (-Math.pow(2, -10 * --C) + 2) + q
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (C, q, U, W) {
            return -U * (Math.sqrt(1 - (C /= W) * C) - 1) + q
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (C, q, U, W) {
            return U * Math.sqrt(1 - (C = C / W - 1) * C) + q
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (C, q, U, W) {
            return (C /= W / 2) < 1 ? -U / 2 * (Math.sqrt(1 - C * C) - 1) + q : U / 2 * (Math.sqrt(1 - (C -= 2) * C) + 1) + q
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (C, q, U, W, K) {
            return K === void 0 && (K = 1.70158), U * (C /= W) * C * ((K + 1) * C - K) + q
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (C, q, U, W, K) {
            return K === void 0 && (K = 1.70158), U * ((C = C / W - 1) * C * ((K + 1) * C + K) + 1) + q
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (C, q, U, W, K) {
            return K === void 0 && (K = 1.70158), (C /= W / 2) < 1 ? U / 2 * C * C * (((K *= 1.525) + 1) * C - K) + q : U / 2 * ((C -= 2) * C * (((K *= 1.525) + 1) * C + K) + 2) + q
          }]
        },
        d = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        },
        h = document,
        m = window,
        u = "bkwld-tram",
        y = /[\-\.0-9]/g,
        v = /[A-Z]/,
        E = "number",
        b = /^(rgb|#)/,
        I = /(em|cm|mm|in|pt|pc|px)$/,
        S = /(em|cm|mm|in|pt|pc|px|%)$/,
        _ = /(deg|rad|turn)$/,
        A = "unitless",
        D = /(all|none) 0s ease 0s/,
        w = /^(width|height)$/,
        O = " ",
        V = h.createElement("a"),
        M = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        G = function (C) {
          if (C in V.style) return {
            dom: C,
            css: C
          };
          var q, U, W = "",
            K = C.split("-");
          for (q = 0; q < K.length; q++) W += K[q].charAt(0).toUpperCase() + K[q].slice(1);
          for (q = 0; q < M.length; q++)
            if (U = M[q] + W, U in V.style) return {
              dom: U,
              css: L[q] + C
            }
        },
        z = t.support = {
          bind: Function.prototype.bind,
          transform: G("transform"),
          transition: G("transition"),
          backface: G("backface-visibility"),
          timing: G("transition-timing-function")
        };
      if (z.transition) {
        var re = z.timing.dom;
        if (V.style[re] = g["ease-in-back"][0], !V.style[re])
          for (var x in d) g[x][0] = d[x]
      }
      var B = t.frame = function () {
          var C = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
          return C && z.bind ? C.bind(m) : function (q) {
            m.setTimeout(q, 16)
          }
        }(),
        Q = t.now = function () {
          var C = m.performance,
            q = C && (C.now || C.webkitNow || C.msNow || C.mozNow);
          return q && z.bind ? q.bind(C) : Date.now || function () {
            return +new Date
          }
        }(),
        N = f(function (C) {
          function q(le, he) {
            var Te = c(("" + le).split(O)),
              de = Te[0];
            he = he || {};
            var Re = X[de];
            if (!Re) return p("Unsupported property: " + de);
            if (!he.weak || !this.props[de]) {
              var We = Re[0],
                Ne = this.props[de];
              return Ne || (Ne = this.props[de] = new We.Bare), Ne.init(this.$el, Te, Re, he), Ne
            }
          }

          function U(le, he, Te) {
            if (le) {
              var de = typeof le;
              if (he || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), de == "number" && he) return this.timer = new Z({
                duration: le,
                context: this,
                complete: Y
              }), void(this.active = !0);
              if (de == "string" && he) {
                switch (le) {
                  case "hide":
                    te.call(this);
                    break;
                  case "stop":
                    ae.call(this);
                    break;
                  case "redraw":
                    ue.call(this);
                    break;
                  default:
                    q.call(this, le, Te && Te[1])
                }
                return Y.call(this)
              }
              if (de == "function") return void le.call(this, this);
              if (de == "object") {
                var Re = 0;
                Ge.call(this, le, function (Se, PT) {
                  Se.span > Re && (Re = Se.span), Se.stop(), Se.animate(PT)
                }, function (Se) {
                  "wait" in Se && (Re = l(Se.wait, 0))
                }), ve.call(this), Re > 0 && (this.timer = new Z({
                  duration: Re,
                  context: this
                }), this.active = !0, he && (this.timer.complete = Y));
                var We = this,
                  Ne = !1,
                  hn = {};
                B(function () {
                  Ge.call(We, le, function (Se) {
                    Se.active && (Ne = !0, hn[Se.name] = Se.nextStyle)
                  }), Ne && We.$el.css(hn)
                })
              }
            }
          }

          function W(le) {
            le = l(le, 0), this.active ? this.queue.push({
              options: le
            }) : (this.timer = new Z({
              duration: le,
              context: this,
              complete: Y
            }), this.active = !0)
          }

          function K(le) {
            return this.active ? (this.queue.push({
              options: le,
              args: arguments
            }), void(this.timer.complete = Y)) : p("No active transition timer. Use start() or wait() before then().")
          }

          function Y() {
            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
              var le = this.queue.shift();
              U.call(this, le.options, !0, le.args)
            }
          }

          function ae(le) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
            var he;
            typeof le == "string" ? (he = {}, he[le] = 1) : he = typeof le == "object" && le != null ? le : this.props, Ge.call(this, he, we), ve.call(this)
          }

          function oe(le) {
            ae.call(this, le), Ge.call(this, le, Ar, xT)
          }

          function se(le) {
            typeof le != "string" && (le = "block"), this.el.style.display = le
          }

          function te() {
            ae.call(this), this.el.style.display = "none"
          }

          function ue() {
            this.el.offsetHeight
          }

          function ce() {
            ae.call(this), e.removeData(this.el, u), this.$el = this.el = null
          }

          function ve() {
            var le, he, Te = [];
            this.upstream && Te.push(this.upstream);
            for (le in this.props) he = this.props[le], he.active && Te.push(he.string);
            Te = Te.join(","), this.style !== Te && (this.style = Te, this.el.style[z.transition.dom] = Te)
          }

          function Ge(le, he, Te) {
            var de, Re, We, Ne, hn = he !== we,
              Se = {};
            for (de in le) We = le[de], de in fe ? (Se.transform || (Se.transform = {}), Se.transform[de] = We) : (v.test(de) && (de = r(de)), de in X ? Se[de] = We : (Ne || (Ne = {}), Ne[de] = We));
            for (de in Se) {
              if (We = Se[de], Re = this.props[de], !Re) {
                if (!hn) continue;
                Re = q.call(this, de)
              }
              he.call(this, Re, We)
            }
            Te && Ne && Te.call(this, Ne)
          }

          function we(le) {
            le.stop()
          }

          function Ar(le, he) {
            le.set(he)
          }

          function xT(le) {
            this.$el.css(le)
          }

          function He(le, he) {
            C[le] = function () {
              return this.children ? CT.call(this, he, arguments) : (this.el && he.apply(this, arguments), this)
            }
          }

          function CT(le, he) {
            var Te, de = this.children.length;
            for (Te = 0; de > Te; Te++) le.apply(this.children[Te], he);
            return this
          }
          C.init = function (le) {
            if (this.$el = e(le), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ee.keepInherited && !ee.fallback) {
              var he = $(this.el, "transition");
              he && !D.test(he) && (this.upstream = he)
            }
            z.backface && ee.hideBackface && R(this.el, z.backface.css, "hidden")
          }, He("add", q), He("start", U), He("wait", W), He("then", K), He("next", Y), He("stop", ae), He("set", oe), He("show", se), He("hide", te), He("redraw", ue), He("destroy", ce)
        }),
        k = f(N, function (C) {
          function q(U, W) {
            var K = e.data(U, u) || e.data(U, u, new N.Bare);
            return K.el || K.init(U), W ? K.start(W) : K
          }
          C.init = function (U, W) {
            var K = e(U);
            if (!K.length) return this;
            if (K.length === 1) return q(K[0], W);
            var Y = [];
            return K.each(function (ae, oe) {
              Y.push(q(oe, W))
            }), this.children = Y, this
          }
        }),
        P = f(function (C) {
          function q() {
            var Y = this.get();
            this.update("auto");
            var ae = this.get();
            return this.update(Y), ae
          }

          function U(Y, ae, oe) {
            return ae !== void 0 && (oe = ae), Y in g ? Y : oe
          }

          function W(Y) {
            var ae = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(Y);
            return (ae ? i(ae[1], ae[2], ae[3]) : Y).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
          }
          var K = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          C.init = function (Y, ae, oe, se) {
            this.$el = Y, this.el = Y[0];
            var te = ae[0];
            oe[2] && (te = oe[2]), ne[te] && (te = ne[te]), this.name = te, this.type = oe[1], this.duration = l(ae[1], this.duration, K.duration), this.ease = U(ae[2], this.ease, K.ease), this.delay = l(ae[3], this.delay, K.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = se.unit || this.unit || ee.defaultUnit, this.angle = se.angle || this.angle || ee.defaultAngle, ee.fallback || se.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + O + this.duration + "ms" + (this.ease != "ease" ? O + g[this.ease][0] : "") + (this.delay ? O + this.delay + "ms" : ""))
          }, C.set = function (Y) {
            Y = this.convert(Y, this.type), this.update(Y), this.redraw()
          }, C.transition = function (Y) {
            this.active = !0, Y = this.convert(Y, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), Y == "auto" && (Y = q.call(this))), this.nextStyle = Y
          }, C.fallback = function (Y) {
            var ae = this.el.style[this.name] || this.convert(this.get(), this.type);
            Y = this.convert(Y, this.type), this.auto && (ae == "auto" && (ae = this.convert(this.get(), this.type)), Y == "auto" && (Y = q.call(this))), this.tween = new J({
              from: ae,
              to: Y,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            })
          }, C.get = function () {
            return $(this.el, this.name)
          }, C.update = function (Y) {
            R(this.el, this.name, Y)
          }, C.stop = function () {
            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, R(this.el, this.name, this.get()));
            var Y = this.tween;
            Y && Y.context && Y.destroy()
          }, C.convert = function (Y, ae) {
            if (Y == "auto" && this.auto) return Y;
            var oe, se = typeof Y == "number",
              te = typeof Y == "string";
            switch (ae) {
              case E:
                if (se) return Y;
                if (te && Y.replace(y, "") === "") return +Y;
                oe = "number(unitless)";
                break;
              case b:
                if (te) {
                  if (Y === "" && this.original) return this.original;
                  if (ae.test(Y)) return Y.charAt(0) == "#" && Y.length == 7 ? Y : W(Y)
                }
                oe = "hex or rgb string";
                break;
              case I:
                if (se) return Y + this.unit;
                if (te && ae.test(Y)) return Y;
                oe = "number(px) or string(unit)";
                break;
              case S:
                if (se) return Y + this.unit;
                if (te && ae.test(Y)) return Y;
                oe = "number(px) or string(unit or %)";
                break;
              case _:
                if (se) return Y + this.angle;
                if (te && ae.test(Y)) return Y;
                oe = "number(deg) or string(angle)";
                break;
              case A:
                if (se || te && S.test(Y)) return Y;
                oe = "number(unitless) or string(unit or %)"
            }
            return s(oe, Y), Y
          }, C.redraw = function () {
            this.el.offsetHeight
          }
        }),
        F = f(P, function (C, q) {
          C.init = function () {
            q.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
          }
        }),
        H = f(P, function (C, q) {
          C.init = function () {
            q.init.apply(this, arguments), this.animate = this.fallback
          }, C.get = function () {
            return this.$el[this.name]()
          }, C.update = function (U) {
            this.$el[this.name](U)
          }
        }),
        j = f(P, function (C, q) {
          function U(W, K) {
            var Y, ae, oe, se, te;
            for (Y in W) se = fe[Y], oe = se[0], ae = se[1] || Y, te = this.convert(W[Y], oe), K.call(this, ae, te, oe)
          }
          C.init = function () {
            q.init.apply(this, arguments), this.current || (this.current = {}, fe.perspective && ee.perspective && (this.current.perspective = ee.perspective, R(this.el, this.name, this.style(this.current)), this.redraw()))
          }, C.set = function (W) {
            U.call(this, W, function (K, Y) {
              this.current[K] = Y
            }), R(this.el, this.name, this.style(this.current)), this.redraw()
          }, C.transition = function (W) {
            var K = this.values(W);
            this.tween = new ie({
              current: this.current,
              values: K,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var Y, ae = {};
            for (Y in this.current) ae[Y] = Y in K ? K[Y] : this.current[Y];
            this.active = !0, this.nextStyle = this.style(ae)
          }, C.fallback = function (W) {
            var K = this.values(W);
            this.tween = new ie({
              current: this.current,
              values: K,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            })
          }, C.update = function () {
            R(this.el, this.name, this.style(this.current))
          }, C.style = function (W) {
            var K, Y = "";
            for (K in W) Y += K + "(" + W[K] + ") ";
            return Y
          }, C.values = function (W) {
            var K, Y = {};
            return U.call(this, W, function (ae, oe, se) {
              Y[ae] = oe, this.current[ae] === void 0 && (K = 0, ~ae.indexOf("scale") && (K = 1), this.current[ae] = this.convert(K, se))
            }), Y
          }
        }),
        J = f(function (C) {
          function q(te) {
            oe.push(te) === 1 && B(U)
          }

          function U() {
            var te, ue, ce, ve = oe.length;
            if (ve)
              for (B(U), ue = Q(), te = ve; te--;) ce = oe[te], ce && ce.render(ue)
          }

          function W(te) {
            var ue, ce = e.inArray(te, oe);
            ce >= 0 && (ue = oe.slice(ce + 1), oe.length = ce, ue.length && (oe = oe.concat(ue)))
          }

          function K(te) {
            return Math.round(te * se) / se
          }

          function Y(te, ue, ce) {
            return i(te[0] + ce * (ue[0] - te[0]), te[1] + ce * (ue[1] - te[1]), te[2] + ce * (ue[2] - te[2]))
          }
          var ae = {
            ease: g.ease[1],
            from: 0,
            to: 1
          };
          C.init = function (te) {
            this.duration = te.duration || 0, this.delay = te.delay || 0;
            var ue = te.ease || ae.ease;
            g[ue] && (ue = g[ue][1]), typeof ue != "function" && (ue = ae.ease), this.ease = ue, this.update = te.update || a, this.complete = te.complete || a, this.context = te.context || this, this.name = te.name;
            var ce = te.from,
              ve = te.to;
            ce === void 0 && (ce = ae.from), ve === void 0 && (ve = ae.to), this.unit = te.unit || "", typeof ce == "number" && typeof ve == "number" ? (this.begin = ce, this.change = ve - ce) : this.format(ve, ce), this.value = this.begin + this.unit, this.start = Q(), te.autoplay !== !1 && this.play()
          }, C.play = function () {
            this.active || (this.start || (this.start = Q()), this.active = !0, q(this))
          }, C.stop = function () {
            this.active && (this.active = !1, W(this))
          }, C.render = function (te) {
            var ue, ce = te - this.start;
            if (this.delay) {
              if (ce <= this.delay) return;
              ce -= this.delay
            }
            if (ce < this.duration) {
              var ve = this.ease(ce, 0, 1, this.duration);
              return ue = this.startRGB ? Y(this.startRGB, this.endRGB, ve) : K(this.begin + ve * this.change), this.value = ue + this.unit, void this.update.call(this.context, this.value)
            }
            ue = this.endHex || this.begin + this.change, this.value = ue + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
          }, C.format = function (te, ue) {
            if (ue += "", te += "", te.charAt(0) == "#") return this.startRGB = n(ue), this.endRGB = n(te), this.endHex = te, this.begin = 0, void(this.change = 1);
            if (!this.unit) {
              var ce = ue.replace(y, ""),
                ve = te.replace(y, "");
              ce !== ve && o("tween", ue, te), this.unit = ce
            }
            ue = parseFloat(ue), te = parseFloat(te), this.begin = this.value = ue, this.change = te - ue
          }, C.destroy = function () {
            this.stop(), this.context = null, this.ease = this.update = this.complete = a
          };
          var oe = [],
            se = 1e3
        }),
        Z = f(J, function (C) {
          C.init = function (q) {
            this.duration = q.duration || 0, this.complete = q.complete || a, this.context = q.context, this.play()
          }, C.render = function (q) {
            var U = q - this.start;
            U < this.duration || (this.complete.call(this.context), this.destroy())
          }
        }),
        ie = f(J, function (C, q) {
          C.init = function (U) {
            this.context = U.context, this.update = U.update, this.tweens = [], this.current = U.current;
            var W, K;
            for (W in U.values) K = U.values[W], this.current[W] !== K && this.tweens.push(new J({
              name: W,
              from: this.current[W],
              to: K,
              duration: U.duration,
              delay: U.delay,
              ease: U.ease,
              autoplay: !1
            }));
            this.play()
          }, C.render = function (U) {
            var W, K, Y = this.tweens.length,
              ae = !1;
            for (W = Y; W--;) K = this.tweens[W], K.context && (K.render(U), this.current[K.name] = K.value, ae = !0);
            return ae ? void(this.update && this.update.call(this.context)) : this.destroy()
          }, C.destroy = function () {
            if (q.destroy.call(this), this.tweens) {
              var U, W = this.tweens.length;
              for (U = W; U--;) this.tweens[U].destroy();
              this.tweens = null, this.current = null
            }
          }
        }),
        ee = t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !z.transition,
          agentTests: []
        };
      t.fallback = function (C) {
        if (!z.transition) return ee.fallback = !0;
        ee.agentTests.push("(" + C + ")");
        var q = new RegExp(ee.agentTests.join("|"), "i");
        ee.fallback = q.test(navigator.userAgent)
      }, t.fallback("6.0.[2-5] Safari"), t.tween = function (C) {
        return new J(C)
      }, t.delay = function (C, q, U) {
        return new Z({
          complete: q,
          duration: C,
          context: U
        })
      }, e.fn.tram = function (C) {
        return t.call(null, this, C)
      };
      var R = e.style,
        $ = e.css,
        ne = {
          transform: z.transform && z.transform.css
        },
        X = {
          color: [F, b],
          background: [F, b, "background-color"],
          "outline-color": [F, b],
          "border-color": [F, b],
          "border-top-color": [F, b],
          "border-right-color": [F, b],
          "border-bottom-color": [F, b],
          "border-left-color": [F, b],
          "border-width": [P, I],
          "border-top-width": [P, I],
          "border-right-width": [P, I],
          "border-bottom-width": [P, I],
          "border-left-width": [P, I],
          "border-spacing": [P, I],
          "letter-spacing": [P, I],
          margin: [P, I],
          "margin-top": [P, I],
          "margin-right": [P, I],
          "margin-bottom": [P, I],
          "margin-left": [P, I],
          padding: [P, I],
          "padding-top": [P, I],
          "padding-right": [P, I],
          "padding-bottom": [P, I],
          "padding-left": [P, I],
          "outline-width": [P, I],
          opacity: [P, E],
          top: [P, S],
          right: [P, S],
          bottom: [P, S],
          left: [P, S],
          "font-size": [P, S],
          "text-indent": [P, S],
          "word-spacing": [P, S],
          width: [P, S],
          "min-width": [P, S],
          "max-width": [P, S],
          height: [P, S],
          "min-height": [P, S],
          "max-height": [P, S],
          "line-height": [P, A],
          "scroll-top": [H, E, "scrollTop"],
          "scroll-left": [H, E, "scrollLeft"]
        },
        fe = {};
      z.transform && (X.transform = [j], fe = {
        x: [S, "translateX"],
        y: [S, "translateY"],
        rotate: [_],
        rotateX: [_],
        rotateY: [_],
        scale: [E],
        scaleX: [E],
        scaleY: [E],
        skew: [_],
        skewX: [_],
        skewY: [_]
      }), z.transform && z.backface && (fe.z = [S, "translateZ"], fe.rotateZ = [_], fe.scaleZ = [E], fe.perspective = [I]);
      var ye = /ms/,
        be = /s|\./;
      return e.tram = t
    }(window.jQuery)
  });
  var Wl = T((DU, Hl) => {
    "use strict";
    var kT = window.$,
      VT = Qi() && kT.tram;
    Hl.exports = function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        a = r.push,
        s = r.slice,
        o = r.concat,
        l = n.toString,
        p = n.hasOwnProperty,
        c = r.forEach,
        f = r.map,
        g = r.reduce,
        d = r.reduceRight,
        h = r.filter,
        m = r.every,
        u = r.some,
        y = r.indexOf,
        v = r.lastIndexOf,
        E = Array.isArray,
        b = Object.keys,
        I = i.bind,
        S = e.each = e.forEach = function (M, L, G) {
          if (M == null) return M;
          if (c && M.forEach === c) M.forEach(L, G);
          else if (M.length === +M.length) {
            for (var z = 0, re = M.length; z < re; z++)
              if (L.call(G, M[z], z, M) === t) return
          } else
            for (var x = e.keys(M), z = 0, re = x.length; z < re; z++)
              if (L.call(G, M[x[z]], x[z], M) === t) return;
          return M
        };
      e.map = e.collect = function (M, L, G) {
        var z = [];
        return M == null ? z : f && M.map === f ? M.map(L, G) : (S(M, function (re, x, B) {
          z.push(L.call(G, re, x, B))
        }), z)
      }, e.find = e.detect = function (M, L, G) {
        var z;
        return _(M, function (re, x, B) {
          if (L.call(G, re, x, B)) return z = re, !0
        }), z
      }, e.filter = e.select = function (M, L, G) {
        var z = [];
        return M == null ? z : h && M.filter === h ? M.filter(L, G) : (S(M, function (re, x, B) {
          L.call(G, re, x, B) && z.push(re)
        }), z)
      };
      var _ = e.some = e.any = function (M, L, G) {
        L || (L = e.identity);
        var z = !1;
        return M == null ? z : u && M.some === u ? M.some(L, G) : (S(M, function (re, x, B) {
          if (z || (z = L.call(G, re, x, B))) return t
        }), !!z)
      };
      e.contains = e.include = function (M, L) {
        return M == null ? !1 : y && M.indexOf === y ? M.indexOf(L) != -1 : _(M, function (G) {
          return G === L
        })
      }, e.delay = function (M, L) {
        var G = s.call(arguments, 2);
        return setTimeout(function () {
          return M.apply(null, G)
        }, L)
      }, e.defer = function (M) {
        return e.delay.apply(e, [M, 1].concat(s.call(arguments, 1)))
      }, e.throttle = function (M) {
        var L, G, z;
        return function () {
          L || (L = !0, G = arguments, z = this, VT.frame(function () {
            L = !1, M.apply(z, G)
          }))
        }
      }, e.debounce = function (M, L, G) {
        var z, re, x, B, Q, N = function () {
          var k = e.now() - B;
          k < L ? z = setTimeout(N, L - k) : (z = null, G || (Q = M.apply(x, re), x = re = null))
        };
        return function () {
          x = this, re = arguments, B = e.now();
          var k = G && !z;
          return z || (z = setTimeout(N, L)), k && (Q = M.apply(x, re), x = re = null), Q
        }
      }, e.defaults = function (M) {
        if (!e.isObject(M)) return M;
        for (var L = 1, G = arguments.length; L < G; L++) {
          var z = arguments[L];
          for (var re in z) M[re] === void 0 && (M[re] = z[re])
        }
        return M
      }, e.keys = function (M) {
        if (!e.isObject(M)) return [];
        if (b) return b(M);
        var L = [];
        for (var G in M) e.has(M, G) && L.push(G);
        return L
      }, e.has = function (M, L) {
        return p.call(M, L)
      }, e.isObject = function (M) {
        return M === Object(M)
      }, e.now = Date.now || function () {
        return new Date().getTime()
      }, e.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var A = /(.)^/,
        D = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        w = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function (M) {
          return "\\" + D[M]
        },
        V = /^\s*(\w|\$)+\s*$/;
      return e.template = function (M, L, G) {
        !L && G && (L = G), L = e.defaults({}, L, e.templateSettings);
        var z = RegExp([(L.escape || A).source, (L.interpolate || A).source, (L.evaluate || A).source].join("|") + "|$", "g"),
          re = 0,
          x = "__p+='";
        M.replace(z, function (k, P, F, H, j) {
          return x += M.slice(re, j).replace(w, O), re = j + k.length, P ? x += `'+
((__t=(` + P + `))==null?'':_.escape(__t))+
'` : F ? x += `'+
((__t=(` + F + `))==null?'':__t)+
'` : H && (x += `';
` + H + `
__p+='`), k
        }), x += `';
`;
        var B = L.variable;
        if (B) {
          if (!V.test(B)) throw new Error("variable is not a bare identifier: " + B)
        } else x = `with(obj||{}){
` + x + `}
`, B = "obj";
        x = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + x + `return __p;
`;
        var Q;
        try {
          Q = new Function(L.variable || "obj", "_", x)
        } catch (k) {
          throw k.source = x, k
        }
        var N = function (k) {
          return Q.call(this, k, e)
        };
        return N.source = "function(" + B + `){
` + x + "}", N
      }, e
    }()
  });
  var Pe = T((NU, Jl) => {
    "use strict";
    var me = {},
      $t = {},
      Zt = [],
      Zi = window.Webflow || [],
      yt = window.jQuery,
      je = yt(window),
      qT = yt(document),
      $e = yt.isFunction,
      Xe = me._ = Wl(),
      jl = me.tram = Qi() && yt.tram,
      dn = !1,
      Ji = !1;
    jl.config.hideBackface = !1;
    jl.config.keepInherited = !0;
    me.define = function (e, t, r) {
      $t[e] && Kl($t[e]);
      var n = $t[e] = t(yt, Xe, r) || {};
      return Yl(n), n
    };
    me.require = function (e) {
      return $t[e]
    };

    function Yl(e) {
      me.env() && ($e(e.design) && je.on("__wf_design", e.design), $e(e.preview) && je.on("__wf_preview", e.preview)), $e(e.destroy) && je.on("__wf_destroy", e.destroy), e.ready && $e(e.ready) && GT(e)
    }

    function GT(e) {
      if (dn) {
        e.ready();
        return
      }
      Xe.contains(Zt, e.ready) || Zt.push(e.ready)
    }

    function Kl(e) {
      $e(e.design) && je.off("__wf_design", e.design), $e(e.preview) && je.off("__wf_preview", e.preview), $e(e.destroy) && je.off("__wf_destroy", e.destroy), e.ready && $e(e.ready) && BT(e)
    }

    function BT(e) {
      Zt = Xe.filter(Zt, function (t) {
        return t !== e.ready
      })
    }
    me.push = function (e) {
      if (dn) {
        $e(e) && e();
        return
      }
      Zi.push(e)
    };
    me.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top
    };
    var pn = navigator.userAgent.toLowerCase(),
      Ql = me.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      UT = me.env.chrome = /chrome/.test(pn) && /Google/.test(navigator.vendor) && parseInt(pn.match(/chrome\/(\d+)\./)[1], 10),
      zT = me.env.ios = /(ipod|iphone|ipad)/.test(pn);
    me.env.safari = /safari/.test(pn) && !UT && !zT;
    var $i;
    Ql && qT.on("touchstart mousedown", function (e) {
      $i = e.target
    });
    me.validClick = Ql ? function (e) {
      return e === $i || yt.contains(e, $i)
    } : function () {
      return !0
    };
    var $l = "resize.webflow orientationchange.webflow load.webflow",
      HT = "scroll.webflow " + $l;
    me.resize = ea(je, $l);
    me.scroll = ea(je, HT);
    me.redraw = ea();

    function ea(e, t) {
      var r = [],
        n = {};
      return n.up = Xe.throttle(function (i) {
        Xe.each(r, function (a) {
          a(i)
        })
      }), e && t && e.on(t, n.up), n.on = function (i) {
        typeof i == "function" && (Xe.contains(r, i) || r.push(i))
      }, n.off = function (i) {
        if (!arguments.length) {
          r = [];
          return
        }
        r = Xe.filter(r, function (a) {
          return a !== i
        })
      }, n
    }
    me.location = function (e) {
      window.location = e
    };
    me.env() && (me.location = function () {});
    me.ready = function () {
      dn = !0, Ji ? WT() : Xe.each(Zt, Xl), Xe.each(Zi, Xl), me.resize.up()
    };

    function Xl(e) {
      $e(e) && e()
    }

    function WT() {
      Ji = !1, Xe.each($t, Yl)
    }
    var Rt;
    me.load = function (e) {
      Rt.then(e)
    };

    function Zl() {
      Rt && (Rt.reject(), je.off("load", Rt.resolve)), Rt = new yt.Deferred, je.on("load", Rt.resolve)
    }
    me.destroy = function (e) {
      e = e || {}, Ji = !0, je.triggerHandler("__wf_destroy"), e.domready != null && (dn = e.domready), Xe.each($t, Kl), me.resize.off(), me.scroll.off(), me.redraw.off(), Zt = [], Zi = [], Rt.state() === "pending" && Zl()
    };
    yt(me.ready);
    Zl();
    Jl.exports = window.Webflow = me
  });
  var ru = T((kU, tu) => {
    "use strict";
    var eu = Pe();
    eu.define("brand", tu.exports = function (e) {
      var t = {},
        r = document,
        n = e("html"),
        i = e("body"),
        a = ".w-webflow-badge",
        s = window.location,
        o = /PhantomJS/i.test(navigator.userAgent),
        l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        p;
      t.ready = function () {
        var d = n.attr("data-wf-status"),
          h = n.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(h) && s.hostname !== h && (d = !0), d && !o && (p = p || f(), g(), setTimeout(g, 500), e(r).off(l, c).on(l, c))
      };

      function c() {
        var d = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
        e(p).attr("style", d ? "display: none !important;" : "")
      }

      function f() {
        var d = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
          h = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          }),
          m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
        return d.append(h, m), d[0]
      }

      function g() {
        var d = i.children(a),
          h = d.length && d.get(0) === p,
          m = eu.env("editor");
        if (h) {
          m && d.remove();
          return
        }
        d.length && d.remove(), m || i.append(p)
      }
      return t
    })
  });
  var iu = T((VU, nu) => {
    "use strict";
    var Jt = Pe();
    Jt.define("links", nu.exports = function (e, t) {
      var r = {},
        n = e(window),
        i, a = Jt.env(),
        s = window.location,
        o = document.createElement("a"),
        l = "w--current",
        p = /index\.(html|php)$/,
        c = /\/$/,
        f, g;
      r.ready = r.design = r.preview = d;

      function d() {
        i = a && Jt.env("design"), g = Jt.env("slug") || s.pathname || "", Jt.scroll.off(m), f = [];
        for (var y = document.links, v = 0; v < y.length; ++v) h(y[v]);
        f.length && (Jt.scroll.on(m), m())
      }

      function h(y) {
        if (!y.getAttribute("hreflang")) {
          var v = i && y.getAttribute("href-disabled") || y.getAttribute("href");
          if (o.href = v, !(v.indexOf(":") >= 0)) {
            var E = e(y);
            if (o.hash.length > 1 && o.host + o.pathname === s.host + s.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(o.hash)) return;
              var b = e(o.hash);
              b.length && f.push({
                link: E,
                sec: b,
                active: !1
              });
              return
            }
            if (!(v === "#" || v === "")) {
              var I = o.href === s.href || v === g || p.test(v) && c.test(g);
              u(E, l, I)
            }
          }
        }
      }

      function m() {
        var y = n.scrollTop(),
          v = n.height();
        t.each(f, function (E) {
          if (!E.link.attr("hreflang")) {
            var b = E.link,
              I = E.sec,
              S = I.offset().top,
              _ = I.outerHeight(),
              A = v * .5,
              D = I.is(":visible") && S + _ - A >= y && S + A <= y + v;
            E.active !== D && (E.active = D, u(b, l, D))
          }
        })
      }

      function u(y, v, E) {
        var b = y.hasClass(v);
        E && b || !E && !b || (E ? y.addClass(v) : y.removeClass(v))
      }
      return r
    })
  });
  var su = T((qU, au) => {
    "use strict";
    var mn = Pe();
    mn.define("scroll", au.exports = function (e) {
      var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        },
        r = window.location,
        n = h() ? null : window.history,
        i = e(window),
        a = e(document),
        s = e(document.body),
        o = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (V) {
          window.setTimeout(V, 15)
        },
        l = mn.env("editor") ? ".w-editor-body" : "body",
        p = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
        c = 'a[href="#"]',
        f = 'a[href*="#"]:not(.w-tab-link):not(' + c + ")",
        g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
        d = document.createElement("style");
      d.appendChild(document.createTextNode(g));

      function h() {
        try {
          return !!window.frameElement
        } catch {
          return !0
        }
      }
      var m = /^#[a-zA-Z0-9][\w:.-]*$/;

      function u(V) {
        return m.test(V.hash) && V.host + V.pathname === r.host + r.pathname
      }
      let y = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

      function v() {
        return document.body.getAttribute("data-wf-scroll-motion") === "none" || y.matches
      }

      function E(V, M) {
        var L;
        switch (M) {
          case "add":
            L = V.attr("tabindex"), L ? V.attr("data-wf-tabindex-swap", L) : V.attr("tabindex", "-1");
            break;
          case "remove":
            L = V.attr("data-wf-tabindex-swap"), L ? (V.attr("tabindex", L), V.removeAttr("data-wf-tabindex-swap")) : V.removeAttr("tabindex");
            break
        }
        V.toggleClass("wf-force-outline-none", M === "add")
      }

      function b(V) {
        var M = V.currentTarget;
        if (!(mn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(M.className))) {
          var L = u(M) ? M.hash : "";
          if (L !== "") {
            var G = e(L);
            G.length && (V && (V.preventDefault(), V.stopPropagation()), I(L, V), window.setTimeout(function () {
              S(G, function () {
                E(G, "add"), G.get(0).focus({
                  preventScroll: !0
                }), E(G, "remove")
              })
            }, V ? 0 : 300))
          }
        }
      }

      function I(V) {
        if (r.hash !== V && n && n.pushState && !(mn.env.chrome && r.protocol === "file:")) {
          var M = n.state && n.state.hash;
          M !== V && n.pushState({
            hash: V
          }, "", V)
        }
      }

      function S(V, M) {
        var L = i.scrollTop(),
          G = _(V);
        if (L !== G) {
          var z = A(V, L, G),
            re = Date.now(),
            x = function () {
              var B = Date.now() - re;
              window.scroll(0, D(L, G, B, z)), B <= z ? o(x) : typeof M == "function" && M()
            };
          o(x)
        }
      }

      function _(V) {
        var M = e(p),
          L = M.css("position") === "fixed" ? M.outerHeight() : 0,
          G = V.offset().top - L;
        if (V.data("scroll") === "mid") {
          var z = i.height() - L,
            re = V.outerHeight();
          re < z && (G -= Math.round((z - re) / 2))
        }
        return G
      }

      function A(V, M, L) {
        if (v()) return 0;
        var G = 1;
        return s.add(V).each(function (z, re) {
          var x = parseFloat(re.getAttribute("data-scroll-time"));
          !isNaN(x) && x >= 0 && (G = x)
        }), (472.143 * Math.log(Math.abs(M - L) + 125) - 2e3) * G
      }

      function D(V, M, L, G) {
        return L > G ? M : V + (M - V) * w(L / G)
      }

      function w(V) {
        return V < .5 ? 4 * V * V * V : (V - 1) * (2 * V - 2) * (2 * V - 2) + 1
      }

      function O() {
        var {
          WF_CLICK_EMPTY: V,
          WF_CLICK_SCROLL: M
        } = t;
        a.on(M, f, b), a.on(V, c, function (L) {
          L.preventDefault()
        }), document.head.insertBefore(d, document.head.firstChild)
      }
      return {
        ready: O
      }
    })
  });
  var uu = T((GU, lu) => {
    "use strict";
    var ou = Pe();
    ou.define("focus", lu.exports = function () {
      var e = [],
        t = !1;

      function r(s) {
        t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
      }

      function n(s) {
        var o = s.target,
          l = o.tagName;
        return /^a$/i.test(l) && o.href != null || /^(button|textarea)$/i.test(l) && o.disabled !== !0 || /^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(o.type) && !o.disabled || !/^(button|input|textarea|select|a)$/i.test(l) && !Number.isNaN(Number.parseFloat(o.tabIndex)) || /^audio$/i.test(l) || /^video$/i.test(l) && o.controls === !0
      }

      function i(s) {
        n(s) && (t = !0, setTimeout(() => {
          for (t = !1, s.target.focus(); e.length > 0;) {
            var o = e.pop();
            o.target.dispatchEvent(new MouseEvent(o.type, o))
          }
        }, 0))
      }

      function a() {
        typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && ou.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
      }
      return {
        ready: a
      }
    })
  });
  var fu = T((BU, cu) => {
    "use strict";
    var XT = Pe();
    XT.define("focus-visible", cu.exports = function () {
      function e(r) {
        var n = !0,
          i = !1,
          a = null,
          s = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
          };

        function o(E) {
          return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
        }

        function l(E) {
          var b = E.type,
            I = E.tagName;
          return !!(I === "INPUT" && s[b] && !E.readOnly || I === "TEXTAREA" && !E.readOnly || E.isContentEditable)
        }

        function p(E) {
          E.getAttribute("data-wf-focus-visible") || E.setAttribute("data-wf-focus-visible", "true")
        }

        function c(E) {
          E.getAttribute("data-wf-focus-visible") && E.removeAttribute("data-wf-focus-visible")
        }

        function f(E) {
          E.metaKey || E.altKey || E.ctrlKey || (o(r.activeElement) && p(r.activeElement), n = !0)
        }

        function g() {
          n = !1
        }

        function d(E) {
          o(E.target) && (n || l(E.target)) && p(E.target)
        }

        function h(E) {
          o(E.target) && E.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(a), a = window.setTimeout(function () {
            i = !1
          }, 100), c(E.target))
        }

        function m() {
          document.visibilityState === "hidden" && (i && (n = !0), u())
        }

        function u() {
          document.addEventListener("mousemove", v), document.addEventListener("mousedown", v), document.addEventListener("mouseup", v), document.addEventListener("pointermove", v), document.addEventListener("pointerdown", v), document.addEventListener("pointerup", v), document.addEventListener("touchmove", v), document.addEventListener("touchstart", v), document.addEventListener("touchend", v)
        }

        function y() {
          document.removeEventListener("mousemove", v), document.removeEventListener("mousedown", v), document.removeEventListener("mouseup", v), document.removeEventListener("pointermove", v), document.removeEventListener("pointerdown", v), document.removeEventListener("pointerup", v), document.removeEventListener("touchmove", v), document.removeEventListener("touchstart", v), document.removeEventListener("touchend", v)
        }

        function v(E) {
          E.target.nodeName && E.target.nodeName.toLowerCase() === "html" || (n = !1, y())
        }
        document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("visibilitychange", m, !0), u(), r.addEventListener("focus", d, !0), r.addEventListener("blur", h, !0)
      }

      function t() {
        if (typeof document < "u") try {
          document.querySelector(":focus-visible")
        } catch {
          e(document)
        }
      }
      return {
        ready: t
      }
    })
  });
  var pu = T((UU, hu) => {
    "use strict";
    var jT = Pe();
    jT.define("touch", hu.exports = function (e) {
      var t = {},
        r = window.getSelection;
      e.event.special.tap = {
        bindType: "click",
        delegateType: "click"
      }, t.init = function (a) {
        return a = typeof a == "string" ? e(a).get(0) : a, a ? new n(a) : null
      };

      function n(a) {
        var s = !1,
          o = !1,
          l = Math.min(Math.round(window.innerWidth * .04), 40),
          p, c;
        a.addEventListener("touchstart", f, !1), a.addEventListener("touchmove", g, !1), a.addEventListener("touchend", d, !1), a.addEventListener("touchcancel", h, !1), a.addEventListener("mousedown", f, !1), a.addEventListener("mousemove", g, !1), a.addEventListener("mouseup", d, !1), a.addEventListener("mouseout", h, !1);

        function f(u) {
          var y = u.touches;
          y && y.length > 1 || (s = !0, y ? (o = !0, p = y[0].clientX) : p = u.clientX, c = p)
        }

        function g(u) {
          if (s) {
            if (o && u.type === "mousemove") {
              u.preventDefault(), u.stopPropagation();
              return
            }
            var y = u.touches,
              v = y ? y[0].clientX : u.clientX,
              E = v - c;
            c = v, Math.abs(E) > l && r && String(r()) === "" && (i("swipe", u, {
              direction: E > 0 ? "right" : "left"
            }), h())
          }
        }

        function d(u) {
          if (s && (s = !1, o && u.type === "mouseup")) {
            u.preventDefault(), u.stopPropagation(), o = !1;
            return
          }
        }

        function h() {
          s = !1
        }

        function m() {
          a.removeEventListener("touchstart", f, !1), a.removeEventListener("touchmove", g, !1), a.removeEventListener("touchend", d, !1), a.removeEventListener("touchcancel", h, !1), a.removeEventListener("mousedown", f, !1), a.removeEventListener("mousemove", g, !1), a.removeEventListener("mouseup", d, !1), a.removeEventListener("mouseout", h, !1), a = null
        }
        this.destroy = m
      }

      function i(a, s, o) {
        var l = e.Event(a, {
          originalEvent: s
        });
        e(s.target).trigger(l, o)
      }
      return t.instance = t.init(document), t
    })
  });
  var mu = T((zU, du) => {
    "use strict";
    var ta = Pe();
    ta.define("edit", du.exports = function (e, t, r) {
      if (r = r || {}, (ta.env("test") || ta.env("frame")) && !r.fixture && !YT()) return {
        exit: 1
      };
      var n = {},
        i = e(window),
        a = e(document.documentElement),
        s = document.location,
        o = "hashchange",
        l, p = r.load || g,
        c = !1;
      try {
        c = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
      } catch {}
      c ? p() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && p() : i.on(o, f).triggerHandler(o);

      function f() {
        l || /\?edit/.test(s.hash) && p()
      }

      function g() {
        l = !0, window.WebflowEditor = !0, i.off(o, f), v(function (b) {
          e.ajax({
            url: y("https://editor-api.webflow.com/api/editor/view"),
            data: {
              siteId: a.attr("data-wf-site")
            },
            xhrFields: {
              withCredentials: !0
            },
            dataType: "json",
            crossDomain: !0,
            success: d(b)
          })
        })
      }

      function d(b) {
        return function (I) {
          if (!I) {
            console.error("Could not load editor data");
            return
          }
          I.thirdPartyCookiesSupported = b, h(u(I.scriptPath), function () {
            window.WebflowEditor(I)
          })
        }
      }

      function h(b, I) {
        e.ajax({
          type: "GET",
          url: b,
          dataType: "script",
          cache: !0
        }).then(I, m)
      }

      function m(b, I, S) {
        throw console.error("Could not load editor script: " + I), S
      }

      function u(b) {
        return b.indexOf("//") >= 0 ? b : y("https://editor-api.webflow.com" + b)
      }

      function y(b) {
        return b.replace(/([^:])\/\//g, "$1/")
      }

      function v(b) {
        var I = window.document.createElement("iframe");
        I.src = "https://webflow.com/site/third-party-cookie-check.html", I.style.display = "none", I.sandbox = "allow-scripts allow-same-origin";
        var S = function (_) {
          _.data === "WF_third_party_cookies_unsupported" ? (E(I, S), b(!1)) : _.data === "WF_third_party_cookies_supported" && (E(I, S), b(!0))
        };
        I.onerror = function () {
          E(I, S), b(!1)
        }, window.addEventListener("message", S, !1), window.document.body.appendChild(I)
      }

      function E(b, I) {
        window.removeEventListener("message", I, !1), b.remove()
      }
      return n
    });

    function YT() {
      try {
        return window.top.__Cypress__
      } catch {
        return !1
      }
    }
  });
  var ra = T((HU, gu) => {
    var KT = typeof global == "object" && global && global.Object === Object && global;
    gu.exports = KT
  });
  var Ye = T((WU, yu) => {
    var QT = ra(),
      $T = typeof self == "object" && self && self.Object === Object && self,
      ZT = QT || $T || Function("return this")();
    yu.exports = ZT
  });
  var er = T((XU, vu) => {
    var JT = Ye(),
      eI = JT.Symbol;
    vu.exports = eI
  });
  var Iu = T((jU, Tu) => {
    var Eu = er(),
      bu = Object.prototype,
      tI = bu.hasOwnProperty,
      rI = bu.toString,
      xr = Eu ? Eu.toStringTag : void 0;

    function nI(e) {
      var t = tI.call(e, xr),
        r = e[xr];
      try {
        e[xr] = void 0;
        var n = !0
      } catch {}
      var i = rI.call(e);
      return n && (t ? e[xr] = r : delete e[xr]), i
    }
    Tu.exports = nI
  });
  var Su = T((YU, _u) => {
    var iI = Object.prototype,
      aI = iI.toString;

    function sI(e) {
      return aI.call(e)
    }
    _u.exports = sI
  });
  var vt = T((KU, Cu) => {
    var Au = er(),
      oI = Iu(),
      lI = Su(),
      uI = "[object Null]",
      cI = "[object Undefined]",
      xu = Au ? Au.toStringTag : void 0;

    function fI(e) {
      return e == null ? e === void 0 ? cI : uI : xu && xu in Object(e) ? oI(e) : lI(e)
    }
    Cu.exports = fI
  });
  var na = T((QU, Pu) => {
    function hI(e, t) {
      return function (r) {
        return e(t(r))
      }
    }
    Pu.exports = hI
  });
  var ia = T(($U, Ou) => {
    var pI = na(),
      dI = pI(Object.getPrototypeOf, Object);
    Ou.exports = dI
  });
  var ut = T((ZU, wu) => {
    function mI(e) {
      return e != null && typeof e == "object"
    }
    wu.exports = mI
  });
  var aa = T((JU, Mu) => {
    var gI = vt(),
      yI = ia(),
      vI = ut(),
      EI = "[object Object]",
      bI = Function.prototype,
      TI = Object.prototype,
      Ru = bI.toString,
      II = TI.hasOwnProperty,
      _I = Ru.call(Object);

    function SI(e) {
      if (!vI(e) || gI(e) != EI) return !1;
      var t = yI(e);
      if (t === null) return !0;
      var r = II.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Ru.call(r) == _I
    }
    Mu.exports = SI
  });
  var Lu = T(sa => {
    "use strict";
    Object.defineProperty(sa, "__esModule", {
      value: !0
    });
    sa.default = AI;

    function AI(e) {
      var t, r = e.Symbol;
      return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
    }
  });
  var Fu = T((la, oa) => {
    "use strict";
    Object.defineProperty(la, "__esModule", {
      value: !0
    });
    var xI = Lu(),
      CI = PI(xI);

    function PI(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var tr;
    typeof self < "u" ? tr = self : typeof window < "u" ? tr = window : typeof global < "u" ? tr = global : typeof oa < "u" ? tr = oa : tr = Function("return this")();
    var OI = (0, CI.default)(tr);
    la.default = OI
  });
  var ua = T(Cr => {
    "use strict";
    Cr.__esModule = !0;
    Cr.ActionTypes = void 0;
    Cr.default = Vu;
    var wI = aa(),
      RI = ku(wI),
      MI = Fu(),
      Du = ku(MI);

    function ku(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var Nu = Cr.ActionTypes = {
      INIT: "@@redux/INIT"
    };

    function Vu(e, t, r) {
      var n;
      if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
        if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
        return r(Vu)(e, t)
      }
      if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
      var i = e,
        a = t,
        s = [],
        o = s,
        l = !1;

      function p() {
        o === s && (o = s.slice())
      }

      function c() {
        return a
      }

      function f(m) {
        if (typeof m != "function") throw new Error("Expected listener to be a function.");
        var u = !0;
        return p(), o.push(m),
          function () {
            if (u) {
              u = !1, p();
              var v = o.indexOf(m);
              o.splice(v, 1)
            }
          }
      }

      function g(m) {
        if (!(0, RI.default)(m)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (typeof m.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
          l = !0, a = i(a, m)
        } finally {
          l = !1
        }
        for (var u = s = o, y = 0; y < u.length; y++) u[y]();
        return m
      }

      function d(m) {
        if (typeof m != "function") throw new Error("Expected the nextReducer to be a function.");
        i = m, g({
          type: Nu.INIT
        })
      }

      function h() {
        var m, u = f;
        return m = {
          subscribe: function (v) {
            if (typeof v != "object") throw new TypeError("Expected the observer to be an object.");

            function E() {
              v.next && v.next(c())
            }
            E();
            var b = u(E);
            return {
              unsubscribe: b
            }
          }
        }, m[Du.default] = function () {
          return this
        }, m
      }
      return g({
        type: Nu.INIT
      }), n = {
        dispatch: g,
        subscribe: f,
        getState: c,
        replaceReducer: d
      }, n[Du.default] = h, n
    }
  });
  var fa = T(ca => {
    "use strict";
    ca.__esModule = !0;
    ca.default = LI;

    function LI(e) {
      typeof console < "u" && typeof console.error == "function" && console.error(e);
      try {
        throw new Error(e)
      } catch {}
    }
  });
  var Bu = T(ha => {
    "use strict";
    ha.__esModule = !0;
    ha.default = VI;
    var qu = ua(),
      FI = aa(),
      nz = Gu(FI),
      DI = fa(),
      iz = Gu(DI);

    function Gu(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function NI(e, t) {
      var r = t && t.type,
        n = r && '"' + r.toString() + '"' || "an action";
      return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function kI(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, {
            type: qu.ActionTypes.INIT
          });
        if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
        var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, {
            type: i
          }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + qu.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
      })
    }

    function VI(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i])
      }
      var a = Object.keys(r);
      if (!1) var s;
      var o;
      try {
        kI(r)
      } catch (l) {
        o = l
      }
      return function () {
        var p = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
          c = arguments[1];
        if (o) throw o;
        if (!1) var f;
        for (var g = !1, d = {}, h = 0; h < a.length; h++) {
          var m = a[h],
            u = r[m],
            y = p[m],
            v = u(y, c);
          if (typeof v > "u") {
            var E = NI(m, c);
            throw new Error(E)
          }
          d[m] = v, g = g || v !== y
        }
        return g ? d : p
      }
    }
  });
  var zu = T(pa => {
    "use strict";
    pa.__esModule = !0;
    pa.default = qI;

    function Uu(e, t) {
      return function () {
        return t(e.apply(void 0, arguments))
      }
    }

    function qI(e, t) {
      if (typeof e == "function") return Uu(e, t);
      if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var a = r[i],
          s = e[a];
        typeof s == "function" && (n[a] = Uu(s, t))
      }
      return n
    }
  });
  var ma = T(da => {
    "use strict";
    da.__esModule = !0;
    da.default = GI;

    function GI() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      if (t.length === 0) return function (a) {
        return a
      };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (a, s) {
          return s(a)
        }, n.apply(void 0, arguments))
      }
    }
  });
  var Hu = T(ga => {
    "use strict";
    ga.__esModule = !0;
    var BI = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
      }
      return e
    };
    ga.default = WI;
    var UI = ma(),
      zI = HI(UI);

    function HI(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function WI() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return function (n) {
        return function (i, a, s) {
          var o = n(i, a, s),
            l = o.dispatch,
            p = [],
            c = {
              getState: o.getState,
              dispatch: function (g) {
                return l(g)
              }
            };
          return p = t.map(function (f) {
            return f(c)
          }), l = zI.default.apply(void 0, p)(o.dispatch), BI({}, o, {
            dispatch: l
          })
        }
      }
    }
  });
  var ya = T(Be => {
    "use strict";
    Be.__esModule = !0;
    Be.compose = Be.applyMiddleware = Be.bindActionCreators = Be.combineReducers = Be.createStore = void 0;
    var XI = ua(),
      jI = rr(XI),
      YI = Bu(),
      KI = rr(YI),
      QI = zu(),
      $I = rr(QI),
      ZI = Hu(),
      JI = rr(ZI),
      e_ = ma(),
      t_ = rr(e_),
      r_ = fa(),
      uz = rr(r_);

    function rr(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Be.createStore = jI.default;
    Be.combineReducers = KI.default;
    Be.bindActionCreators = $I.default;
    Be.applyMiddleware = JI.default;
    Be.compose = t_.default
  });
  var Wu = T(va => {
    "use strict";
    Object.defineProperty(va, "__esModule", {
      value: !0
    });

    function n_(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    n_(va, {
      EventAppliesTo: function () {
        return a_
      },
      EventBasedOn: function () {
        return s_
      },
      EventContinuousMouseAxes: function () {
        return o_
      },
      EventLimitAffectedElements: function () {
        return l_
      },
      EventTypeConsts: function () {
        return i_
      },
      QuickEffectDirectionConsts: function () {
        return c_
      },
      QuickEffectIds: function () {
        return u_
      }
    });
    var i_ = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      },
      a_ = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      },
      s_ = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      },
      o_ = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      },
      l_ = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      },
      u_ = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      },
      c_ = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      }
  });
  var ba = T(Ea => {
    "use strict";
    Object.defineProperty(Ea, "__esModule", {
      value: !0
    });

    function f_(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    f_(Ea, {
      ActionAppliesTo: function () {
        return p_
      },
      ActionTypeConsts: function () {
        return h_
      }
    });
    var h_ = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      },
      p_ = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      }
  });
  var Xu = T(Ta => {
    "use strict";
    Object.defineProperty(Ta, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ta, "InteractionTypeConsts", {
      enumerable: !0,
      get: function () {
        return d_
      }
    });
    var d_ = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
  });
  var ju = T(Ia => {
    "use strict";
    Object.defineProperty(Ia, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ia, "ReducedMotionTypes", {
      enumerable: !0,
      get: function () {
        return __
      }
    });
    var m_ = ba(),
      {
        TRANSFORM_MOVE: g_,
        TRANSFORM_SCALE: y_,
        TRANSFORM_ROTATE: v_,
        TRANSFORM_SKEW: E_,
        STYLE_SIZE: b_,
        STYLE_FILTER: T_,
        STYLE_FONT_VARIATION: I_
      } = m_.ActionTypeConsts,
      __ = {
        [g_]: !0,
        [y_]: !0,
        [v_]: !0,
        [E_]: !0,
        [b_]: !0,
        [T_]: !0,
        [I_]: !0
      }
  });
  var Yu = T(_a => {
    "use strict";
    Object.defineProperty(_a, "__esModule", {
      value: !0
    });

    function S_(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    S_(_a, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return B_
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return D_
      },
      IX2_CLEAR_REQUESTED: function () {
        return M_
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return G_
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return L_
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return F_
      },
      IX2_INSTANCE_ADDED: function () {
        return k_
      },
      IX2_INSTANCE_REMOVED: function () {
        return q_
      },
      IX2_INSTANCE_STARTED: function () {
        return V_
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return z_
      },
      IX2_PARAMETER_CHANGED: function () {
        return N_
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return w_
      },
      IX2_PREVIEW_REQUESTED: function () {
        return O_
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return A_
      },
      IX2_SESSION_INITIALIZED: function () {
        return x_
      },
      IX2_SESSION_STARTED: function () {
        return C_
      },
      IX2_SESSION_STOPPED: function () {
        return P_
      },
      IX2_STOP_REQUESTED: function () {
        return R_
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return H_
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return U_
      }
    });
    var A_ = "IX2_RAW_DATA_IMPORTED",
      x_ = "IX2_SESSION_INITIALIZED",
      C_ = "IX2_SESSION_STARTED",
      P_ = "IX2_SESSION_STOPPED",
      O_ = "IX2_PREVIEW_REQUESTED",
      w_ = "IX2_PLAYBACK_REQUESTED",
      R_ = "IX2_STOP_REQUESTED",
      M_ = "IX2_CLEAR_REQUESTED",
      L_ = "IX2_EVENT_LISTENER_ADDED",
      F_ = "IX2_EVENT_STATE_CHANGED",
      D_ = "IX2_ANIMATION_FRAME_CHANGED",
      N_ = "IX2_PARAMETER_CHANGED",
      k_ = "IX2_INSTANCE_ADDED",
      V_ = "IX2_INSTANCE_STARTED",
      q_ = "IX2_INSTANCE_REMOVED",
      G_ = "IX2_ELEMENT_STATE_CHANGED",
      B_ = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      U_ = "IX2_VIEWPORT_WIDTH_CHANGED",
      z_ = "IX2_MEDIA_QUERIES_DEFINED",
      H_ = "IX2_TEST_FRAME_RENDERED"
  });
  var Ku = T(Sa => {
    "use strict";
    Object.defineProperty(Sa, "__esModule", {
      value: !0
    });

    function W_(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    W_(Sa, {
      ABSTRACT_NODE: function () {
        return zS
      },
      AUTO: function () {
        return MS
      },
      BACKGROUND: function () {
        return xS
      },
      BACKGROUND_COLOR: function () {
        return AS
      },
      BAR_DELIMITER: function () {
        return DS
      },
      BORDER_COLOR: function () {
        return CS
      },
      BOUNDARY_SELECTOR: function () {
        return Q_
      },
      CHILDREN: function () {
        return NS
      },
      COLON_DELIMITER: function () {
        return FS
      },
      COLOR: function () {
        return PS
      },
      COMMA_DELIMITER: function () {
        return LS
      },
      CONFIG_UNIT: function () {
        return iS
      },
      CONFIG_VALUE: function () {
        return eS
      },
      CONFIG_X_UNIT: function () {
        return tS
      },
      CONFIG_X_VALUE: function () {
        return $_
      },
      CONFIG_Y_UNIT: function () {
        return rS
      },
      CONFIG_Y_VALUE: function () {
        return Z_
      },
      CONFIG_Z_UNIT: function () {
        return nS
      },
      CONFIG_Z_VALUE: function () {
        return J_
      },
      DISPLAY: function () {
        return OS
      },
      FILTER: function () {
        return TS
      },
      FLEX: function () {
        return wS
      },
      FONT_VARIATION_SETTINGS: function () {
        return IS
      },
      HEIGHT: function () {
        return SS
      },
      HTML_ELEMENT: function () {
        return BS
      },
      IMMEDIATE_CHILDREN: function () {
        return kS
      },
      IX2_ID_DELIMITER: function () {
        return X_
      },
      OPACITY: function () {
        return bS
      },
      PARENT: function () {
        return qS
      },
      PLAIN_OBJECT: function () {
        return US
      },
      PRESERVE_3D: function () {
        return GS
      },
      RENDER_GENERAL: function () {
        return WS
      },
      RENDER_PLUGIN: function () {
        return jS
      },
      RENDER_STYLE: function () {
        return XS
      },
      RENDER_TRANSFORM: function () {
        return HS
      },
      ROTATE_X: function () {
        return dS
      },
      ROTATE_Y: function () {
        return mS
      },
      ROTATE_Z: function () {
        return gS
      },
      SCALE_3D: function () {
        return pS
      },
      SCALE_X: function () {
        return cS
      },
      SCALE_Y: function () {
        return fS
      },
      SCALE_Z: function () {
        return hS
      },
      SIBLINGS: function () {
        return VS
      },
      SKEW: function () {
        return yS
      },
      SKEW_X: function () {
        return vS
      },
      SKEW_Y: function () {
        return ES
      },
      TRANSFORM: function () {
        return aS
      },
      TRANSLATE_3D: function () {
        return uS
      },
      TRANSLATE_X: function () {
        return sS
      },
      TRANSLATE_Y: function () {
        return oS
      },
      TRANSLATE_Z: function () {
        return lS
      },
      WF_PAGE: function () {
        return j_
      },
      WIDTH: function () {
        return _S
      },
      WILL_CHANGE: function () {
        return RS
      },
      W_MOD_IX: function () {
        return K_
      },
      W_MOD_JS: function () {
        return Y_
      }
    });
    var X_ = "|",
      j_ = "data-wf-page",
      Y_ = "w-mod-js",
      K_ = "w-mod-ix",
      Q_ = ".w-dyn-item",
      $_ = "xValue",
      Z_ = "yValue",
      J_ = "zValue",
      eS = "value",
      tS = "xUnit",
      rS = "yUnit",
      nS = "zUnit",
      iS = "unit",
      aS = "transform",
      sS = "translateX",
      oS = "translateY",
      lS = "translateZ",
      uS = "translate3d",
      cS = "scaleX",
      fS = "scaleY",
      hS = "scaleZ",
      pS = "scale3d",
      dS = "rotateX",
      mS = "rotateY",
      gS = "rotateZ",
      yS = "skew",
      vS = "skewX",
      ES = "skewY",
      bS = "opacity",
      TS = "filter",
      IS = "font-variation-settings",
      _S = "width",
      SS = "height",
      AS = "backgroundColor",
      xS = "background",
      CS = "borderColor",
      PS = "color",
      OS = "display",
      wS = "flex",
      RS = "willChange",
      MS = "AUTO",
      LS = ",",
      FS = ":",
      DS = "|",
      NS = "CHILDREN",
      kS = "IMMEDIATE_CHILDREN",
      VS = "SIBLINGS",
      qS = "PARENT",
      GS = "preserve-3d",
      BS = "HTML_ELEMENT",
      US = "PLAIN_OBJECT",
      zS = "ABSTRACT_NODE",
      HS = "RENDER_TRANSFORM",
      WS = "RENDER_GENERAL",
      XS = "RENDER_STYLE",
      jS = "RENDER_PLUGIN"
  });
  var ke = T(Mt => {
    "use strict";
    Object.defineProperty(Mt, "__esModule", {
      value: !0
    });

    function YS(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    YS(Mt, {
      ActionTypeConsts: function () {
        return QS.ActionTypeConsts
      },
      IX2EngineActionTypes: function () {
        return $S
      },
      IX2EngineConstants: function () {
        return ZS
      },
      QuickEffectIds: function () {
        return KS.QuickEffectIds
      }
    });
    var KS = gn(Wu(), Mt),
      QS = gn(ba(), Mt);
    gn(Xu(), Mt);
    gn(ju(), Mt);
    var $S = $u(Yu()),
      ZS = $u(Ku());

    function gn(e, t) {
      return Object.keys(e).forEach(function (r) {
        r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Object.defineProperty(t, r, {
          enumerable: !0,
          get: function () {
            return e[r]
          }
        })
      }), e
    }

    function Qu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (Qu = function (n) {
        return n ? r : t
      })(e)
    }

    function $u(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = Qu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
  });
  var Zu = T(Aa => {
    "use strict";
    Object.defineProperty(Aa, "__esModule", {
      value: !0
    });
    Object.defineProperty(Aa, "ixData", {
      enumerable: !0,
      get: function () {
        return tA
      }
    });
    var JS = ke(),
      {
        IX2_RAW_DATA_IMPORTED: eA
      } = JS.IX2EngineActionTypes,
      tA = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case eA:
            return t.payload.ixData || Object.freeze({});
          default:
            return e
        }
      }
  });
  var nr = T(Ie => {
    "use strict";
    Object.defineProperty(Ie, "__esModule", {
      value: !0
    });
    var rA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e
    } : function (e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Ie.clone = vn;
    Ie.addLast = tc;
    Ie.addFirst = rc;
    Ie.removeLast = nc;
    Ie.removeFirst = ic;
    Ie.insert = ac;
    Ie.removeAt = sc;
    Ie.replaceAt = oc;
    Ie.getIn = En;
    Ie.set = bn;
    Ie.setIn = Tn;
    Ie.update = uc;
    Ie.updateIn = cc;
    Ie.merge = fc;
    Ie.mergeDeep = hc;
    Ie.mergeIn = pc;
    Ie.omit = dc;
    Ie.addDefaults = mc;
    var Ju = "INVALID_ARGS";

    function ec(e) {
      throw new Error(e)
    }

    function xa(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
    }
    var nA = {}.hasOwnProperty;

    function vn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = xa(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i]
      }
      return r
    }

    function Ve(e, t, r) {
      var n = r;
      n == null && ec(Ju);
      for (var i = !1, a = arguments.length, s = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) s[o - 3] = arguments[o];
      for (var l = 0; l < s.length; l++) {
        var p = s[l];
        if (p != null) {
          var c = xa(p);
          if (c.length)
            for (var f = 0; f <= c.length; f++) {
              var g = c[f];
              if (!(e && n[g] !== void 0)) {
                var d = p[g];
                t && yn(n[g]) && yn(d) && (d = Ve(e, t, n[g], d)), !(d === void 0 || d === n[g]) && (i || (i = !0, n = vn(n)), n[g] = d)
              }
            }
        }
      }
      return n
    }

    function yn(e) {
      var t = typeof e > "u" ? "undefined" : rA(e);
      return e != null && (t === "object" || t === "function")
    }

    function tc(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t])
    }

    function rc(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e)
    }

    function nc(e) {
      return e.length ? e.slice(0, e.length - 1) : e
    }

    function ic(e) {
      return e.length ? e.slice(1) : e
    }

    function ac(e, t, r) {
      return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
    }

    function sc(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
    }

    function oc(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), a = 0; a < n; a++) i[a] = e[a];
      return i[t] = r, i
    }

    function En(e, t) {
      if (!Array.isArray(t) && ec(Ju), e != null) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (r = r ? . [i], r === void 0) return r
        }
        return r
      }
    }

    function bn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ? ? n;
      if (i[t] === r) return i;
      var a = vn(i);
      return a[t] = r, a
    }

    function lc(e, t, r, n) {
      var i = void 0,
        a = t[n];
      if (n === t.length - 1) i = r;
      else {
        var s = yn(e) && yn(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
        i = lc(s, t, r, n + 1)
      }
      return bn(e, a, i)
    }

    function Tn(e, t, r) {
      return t.length ? lc(e, t, r, 0) : r
    }

    function uc(e, t, r) {
      var n = e ? . [t],
        i = r(n);
      return bn(e, t, i)
    }

    function cc(e, t, r) {
      var n = En(e, t),
        i = r(n);
      return Tn(e, t, i)
    }

    function fc(e, t, r, n, i, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
      return o.length ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, a].concat(o)) : Ve(!1, !1, e, t, r, n, i, a)
    }

    function hc(e, t, r, n, i, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
      return o.length ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, a].concat(o)) : Ve(!1, !0, e, t, r, n, i, a)
    }

    function pc(e, t, r, n, i, a, s) {
      var o = En(e, t);
      o == null && (o = {});
      for (var l = void 0, p = arguments.length, c = Array(p > 7 ? p - 7 : 0), f = 7; f < p; f++) c[f - 7] = arguments[f];
      return c.length ? l = Ve.call.apply(Ve, [null, !1, !1, o, r, n, i, a, s].concat(c)) : l = Ve(!1, !1, o, r, n, i, a, s), Tn(e, t, l)
    }

    function dc(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (nA.call(e, r[i])) {
          n = !0;
          break
        } if (!n) return e;
      for (var a = {}, s = xa(e), o = 0; o < s.length; o++) {
        var l = s[o];
        r.indexOf(l) >= 0 || (a[l] = e[l])
      }
      return a
    }

    function mc(e, t, r, n, i, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
      return o.length ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, a].concat(o)) : Ve(!0, !1, e, t, r, n, i, a)
    }
    var iA = {
      clone: vn,
      addLast: tc,
      addFirst: rc,
      removeLast: nc,
      removeFirst: ic,
      insert: ac,
      removeAt: sc,
      replaceAt: oc,
      getIn: En,
      set: bn,
      setIn: Tn,
      update: uc,
      updateIn: cc,
      merge: fc,
      mergeDeep: hc,
      mergeIn: pc,
      omit: dc,
      addDefaults: mc
    };
    Ie.default = iA
  });
  var yc = T(Ca => {
    "use strict";
    Object.defineProperty(Ca, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ca, "ixRequest", {
      enumerable: !0,
      get: function () {
        return hA
      }
    });
    var aA = ke(),
      sA = nr(),
      {
        IX2_PREVIEW_REQUESTED: oA,
        IX2_PLAYBACK_REQUESTED: lA,
        IX2_STOP_REQUESTED: uA,
        IX2_CLEAR_REQUESTED: cA
      } = aA.IX2EngineActionTypes,
      fA = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      },
      gc = Object.create(null, {
        [oA]: {
          value: "preview"
        },
        [lA]: {
          value: "playback"
        },
        [uA]: {
          value: "stop"
        },
        [cA]: {
          value: "clear"
        }
      }),
      hA = (e = fA, t) => {
        if (t.type in gc) {
          let r = [gc[t.type]];
          return (0, sA.setIn)(e, [r], {
            ...t.payload
          })
        }
        return e
      }
  });
  var Ec = T(Pa => {
    "use strict";
    Object.defineProperty(Pa, "__esModule", {
      value: !0
    });
    Object.defineProperty(Pa, "ixSession", {
      enumerable: !0,
      get: function () {
        return AA
      }
    });
    var pA = ke(),
      Ze = nr(),
      {
        IX2_SESSION_INITIALIZED: dA,
        IX2_SESSION_STARTED: mA,
        IX2_TEST_FRAME_RENDERED: gA,
        IX2_SESSION_STOPPED: yA,
        IX2_EVENT_LISTENER_ADDED: vA,
        IX2_EVENT_STATE_CHANGED: EA,
        IX2_ANIMATION_FRAME_CHANGED: bA,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: TA,
        IX2_VIEWPORT_WIDTH_CHANGED: IA,
        IX2_MEDIA_QUERIES_DEFINED: _A
      } = pA.IX2EngineActionTypes,
      vc = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1
      },
      SA = 20,
      AA = (e = vc, t) => {
        switch (t.type) {
          case dA: {
            let {
              hasBoundaryNodes: r,
              reducedMotion: n
            } = t.payload;
            return (0, Ze.merge)(e, {
              hasBoundaryNodes: r,
              reducedMotion: n
            })
          }
          case mA:
            return (0, Ze.set)(e, "active", !0);
          case gA: {
            let {
              payload: {
                step: r = SA
              }
            } = t;
            return (0, Ze.set)(e, "tick", e.tick + r)
          }
          case yA:
            return vc;
          case bA: {
            let {
              payload: {
                now: r
              }
            } = t;
            return (0, Ze.set)(e, "tick", r)
          }
          case vA: {
            let r = (0, Ze.addLast)(e.eventListeners, t.payload);
            return (0, Ze.set)(e, "eventListeners", r)
          }
          case EA: {
            let {
              stateKey: r,
              newState: n
            } = t.payload;
            return (0, Ze.setIn)(e, ["eventState", r], n)
          }
          case TA: {
            let {
              actionListId: r,
              isPlaying: n
            } = t.payload;
            return (0, Ze.setIn)(e, ["playbackState", r], n)
          }
          case IA: {
            let {
              width: r,
              mediaQueries: n
            } = t.payload, i = n.length, a = null;
            for (let s = 0; s < i; s++) {
              let {
                key: o,
                min: l,
                max: p
              } = n[s];
              if (r >= l && r <= p) {
                a = o;
                break
              }
            }
            return (0, Ze.merge)(e, {
              viewportWidth: r,
              mediaQueryKey: a
            })
          }
          case _A:
            return (0, Ze.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e
        }
      }
  });
  var Tc = T((Iz, bc) => {
    function xA() {
      this.__data__ = [], this.size = 0
    }
    bc.exports = xA
  });
  var In = T((_z, Ic) => {
    function CA(e, t) {
      return e === t || e !== e && t !== t
    }
    Ic.exports = CA
  });
  var Pr = T((Sz, _c) => {
    var PA = In();

    function OA(e, t) {
      for (var r = e.length; r--;)
        if (PA(e[r][0], t)) return r;
      return -1
    }
    _c.exports = OA
  });
  var Ac = T((Az, Sc) => {
    var wA = Pr(),
      RA = Array.prototype,
      MA = RA.splice;

    function LA(e) {
      var t = this.__data__,
        r = wA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : MA.call(t, r, 1), --this.size, !0
    }
    Sc.exports = LA
  });
  var Cc = T((xz, xc) => {
    var FA = Pr();

    function DA(e) {
      var t = this.__data__,
        r = FA(t, e);
      return r < 0 ? void 0 : t[r][1]
    }
    xc.exports = DA
  });
  var Oc = T((Cz, Pc) => {
    var NA = Pr();

    function kA(e) {
      return NA(this.__data__, e) > -1
    }
    Pc.exports = kA
  });
  var Rc = T((Pz, wc) => {
    var VA = Pr();

    function qA(e, t) {
      var r = this.__data__,
        n = VA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }
    wc.exports = qA
  });
  var Or = T((Oz, Mc) => {
    var GA = Tc(),
      BA = Ac(),
      UA = Cc(),
      zA = Oc(),
      HA = Rc();

    function ir(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
      }
    }
    ir.prototype.clear = GA;
    ir.prototype.delete = BA;
    ir.prototype.get = UA;
    ir.prototype.has = zA;
    ir.prototype.set = HA;
    Mc.exports = ir
  });
  var Fc = T((wz, Lc) => {
    var WA = Or();

    function XA() {
      this.__data__ = new WA, this.size = 0
    }
    Lc.exports = XA
  });
  var Nc = T((Rz, Dc) => {
    function jA(e) {
      var t = this.__data__,
        r = t.delete(e);
      return this.size = t.size, r
    }
    Dc.exports = jA
  });
  var Vc = T((Mz, kc) => {
    function YA(e) {
      return this.__data__.get(e)
    }
    kc.exports = YA
  });
  var Gc = T((Lz, qc) => {
    function KA(e) {
      return this.__data__.has(e)
    }
    qc.exports = KA
  });
  var Je = T((Fz, Bc) => {
    function QA(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function")
    }
    Bc.exports = QA
  });
  var Oa = T((Dz, Uc) => {
    var $A = vt(),
      ZA = Je(),
      JA = "[object AsyncFunction]",
      ex = "[object Function]",
      tx = "[object GeneratorFunction]",
      rx = "[object Proxy]";

    function nx(e) {
      if (!ZA(e)) return !1;
      var t = $A(e);
      return t == ex || t == tx || t == JA || t == rx
    }
    Uc.exports = nx
  });
  var Hc = T((Nz, zc) => {
    var ix = Ye(),
      ax = ix["__core-js_shared__"];
    zc.exports = ax
  });
  var jc = T((kz, Xc) => {
    var wa = Hc(),
      Wc = function () {
        var e = /[^.]+$/.exec(wa && wa.keys && wa.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
      }();

    function sx(e) {
      return !!Wc && Wc in e
    }
    Xc.exports = sx
  });
  var Ra = T((Vz, Yc) => {
    var ox = Function.prototype,
      lx = ox.toString;

    function ux(e) {
      if (e != null) {
        try {
          return lx.call(e)
        } catch {}
        try {
          return e + ""
        } catch {}
      }
      return ""
    }
    Yc.exports = ux
  });
  var Qc = T((qz, Kc) => {
    var cx = Oa(),
      fx = jc(),
      hx = Je(),
      px = Ra(),
      dx = /[\\^$.*+?()[\]{}|]/g,
      mx = /^\[object .+?Constructor\]$/,
      gx = Function.prototype,
      yx = Object.prototype,
      vx = gx.toString,
      Ex = yx.hasOwnProperty,
      bx = RegExp("^" + vx.call(Ex).replace(dx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function Tx(e) {
      if (!hx(e) || fx(e)) return !1;
      var t = cx(e) ? bx : mx;
      return t.test(px(e))
    }
    Kc.exports = Tx
  });
  var Zc = T((Gz, $c) => {
    function Ix(e, t) {
      return e ? . [t]
    }
    $c.exports = Ix
  });
  var Et = T((Bz, Jc) => {
    var _x = Qc(),
      Sx = Zc();

    function Ax(e, t) {
      var r = Sx(e, t);
      return _x(r) ? r : void 0
    }
    Jc.exports = Ax
  });
  var _n = T((Uz, ef) => {
    var xx = Et(),
      Cx = Ye(),
      Px = xx(Cx, "Map");
    ef.exports = Px
  });
  var wr = T((zz, tf) => {
    var Ox = Et(),
      wx = Ox(Object, "create");
    tf.exports = wx
  });
  var af = T((Hz, nf) => {
    var rf = wr();

    function Rx() {
      this.__data__ = rf ? rf(null) : {}, this.size = 0
    }
    nf.exports = Rx
  });
  var of = T((Wz, sf) => {
    function Mx(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t
    }
    sf.exports = Mx
  });
  var uf = T((Xz, lf) => {
    var Lx = wr(),
      Fx = "__lodash_hash_undefined__",
      Dx = Object.prototype,
      Nx = Dx.hasOwnProperty;

    function kx(e) {
      var t = this.__data__;
      if (Lx) {
        var r = t[e];
        return r === Fx ? void 0 : r
      }
      return Nx.call(t, e) ? t[e] : void 0
    }
    lf.exports = kx
  });
  var ff = T((jz, cf) => {
    var Vx = wr(),
      qx = Object.prototype,
      Gx = qx.hasOwnProperty;

    function Bx(e) {
      var t = this.__data__;
      return Vx ? t[e] !== void 0 : Gx.call(t, e)
    }
    cf.exports = Bx
  });
  var pf = T((Yz, hf) => {
    var Ux = wr(),
      zx = "__lodash_hash_undefined__";

    function Hx(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = Ux && t === void 0 ? zx : t, this
    }
    hf.exports = Hx
  });
  var mf = T((Kz, df) => {
    var Wx = af(),
      Xx = of (),
      jx = uf(),
      Yx = ff(),
      Kx = pf();

    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
      }
    }
    ar.prototype.clear = Wx;
    ar.prototype.delete = Xx;
    ar.prototype.get = jx;
    ar.prototype.has = Yx;
    ar.prototype.set = Kx;
    df.exports = ar
  });
  var vf = T((Qz, yf) => {
    var gf = mf(),
      Qx = Or(),
      $x = _n();

    function Zx() {
      this.size = 0, this.__data__ = {
        hash: new gf,
        map: new($x || Qx),
        string: new gf
      }
    }
    yf.exports = Zx
  });
  var bf = T(($z, Ef) => {
    function Jx(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }
    Ef.exports = Jx
  });
  var Rr = T((Zz, Tf) => {
    var eC = bf();

    function tC(e, t) {
      var r = e.__data__;
      return eC(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }
    Tf.exports = tC
  });
  var _f = T((Jz, If) => {
    var rC = Rr();

    function nC(e) {
      var t = rC(this, e).delete(e);
      return this.size -= t ? 1 : 0, t
    }
    If.exports = nC
  });
  var Af = T((eH, Sf) => {
    var iC = Rr();

    function aC(e) {
      return iC(this, e).get(e)
    }
    Sf.exports = aC
  });
  var Cf = T((tH, xf) => {
    var sC = Rr();

    function oC(e) {
      return sC(this, e).has(e)
    }
    xf.exports = oC
  });
  var Of = T((rH, Pf) => {
    var lC = Rr();

    function uC(e, t) {
      var r = lC(this, e),
        n = r.size;
      return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }
    Pf.exports = uC
  });
  var Sn = T((nH, wf) => {
    var cC = vf(),
      fC = _f(),
      hC = Af(),
      pC = Cf(),
      dC = Of();

    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
      }
    }
    sr.prototype.clear = cC;
    sr.prototype.delete = fC;
    sr.prototype.get = hC;
    sr.prototype.has = pC;
    sr.prototype.set = dC;
    wf.exports = sr
  });
  var Mf = T((iH, Rf) => {
    var mC = Or(),
      gC = _n(),
      yC = Sn(),
      vC = 200;

    function EC(e, t) {
      var r = this.__data__;
      if (r instanceof mC) {
        var n = r.__data__;
        if (!gC || n.length < vC - 1) return n.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new yC(n)
      }
      return r.set(e, t), this.size = r.size, this
    }
    Rf.exports = EC
  });
  var Ma = T((aH, Lf) => {
    var bC = Or(),
      TC = Fc(),
      IC = Nc(),
      _C = Vc(),
      SC = Gc(),
      AC = Mf();

    function or(e) {
      var t = this.__data__ = new bC(e);
      this.size = t.size
    }
    or.prototype.clear = TC;
    or.prototype.delete = IC;
    or.prototype.get = _C;
    or.prototype.has = SC;
    or.prototype.set = AC;
    Lf.exports = or
  });
  var Df = T((sH, Ff) => {
    var xC = "__lodash_hash_undefined__";

    function CC(e) {
      return this.__data__.set(e, xC), this
    }
    Ff.exports = CC
  });
  var kf = T((oH, Nf) => {
    function PC(e) {
      return this.__data__.has(e)
    }
    Nf.exports = PC
  });
  var qf = T((lH, Vf) => {
    var OC = Sn(),
      wC = Df(),
      RC = kf();

    function An(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new OC; ++t < r;) this.add(e[t])
    }
    An.prototype.add = An.prototype.push = wC;
    An.prototype.has = RC;
    Vf.exports = An
  });
  var Bf = T((uH, Gf) => {
    function MC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
      return !1
    }
    Gf.exports = MC
  });
  var zf = T((cH, Uf) => {
    function LC(e, t) {
      return e.has(t)
    }
    Uf.exports = LC
  });
  var La = T((fH, Hf) => {
    var FC = qf(),
      DC = Bf(),
      NC = zf(),
      kC = 1,
      VC = 2;

    function qC(e, t, r, n, i, a) {
      var s = r & kC,
        o = e.length,
        l = t.length;
      if (o != l && !(s && l > o)) return !1;
      var p = a.get(e),
        c = a.get(t);
      if (p && c) return p == t && c == e;
      var f = -1,
        g = !0,
        d = r & VC ? new FC : void 0;
      for (a.set(e, t), a.set(t, e); ++f < o;) {
        var h = e[f],
          m = t[f];
        if (n) var u = s ? n(m, h, f, t, e, a) : n(h, m, f, e, t, a);
        if (u !== void 0) {
          if (u) continue;
          g = !1;
          break
        }
        if (d) {
          if (!DC(t, function (y, v) {
              if (!NC(d, v) && (h === y || i(h, y, r, n, a))) return d.push(v)
            })) {
            g = !1;
            break
          }
        } else if (!(h === m || i(h, m, r, n, a))) {
          g = !1;
          break
        }
      }
      return a.delete(e), a.delete(t), g
    }
    Hf.exports = qC
  });
  var Xf = T((hH, Wf) => {
    var GC = Ye(),
      BC = GC.Uint8Array;
    Wf.exports = BC
  });
  var Yf = T((pH, jf) => {
    function UC(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (n, i) {
        r[++t] = [i, n]
      }), r
    }
    jf.exports = UC
  });
  var Qf = T((dH, Kf) => {
    function zC(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (n) {
        r[++t] = n
      }), r
    }
    Kf.exports = zC
  });
  var th = T((mH, eh) => {
    var $f = er(),
      Zf = Xf(),
      HC = In(),
      WC = La(),
      XC = Yf(),
      jC = Qf(),
      YC = 1,
      KC = 2,
      QC = "[object Boolean]",
      $C = "[object Date]",
      ZC = "[object Error]",
      JC = "[object Map]",
      eP = "[object Number]",
      tP = "[object RegExp]",
      rP = "[object Set]",
      nP = "[object String]",
      iP = "[object Symbol]",
      aP = "[object ArrayBuffer]",
      sP = "[object DataView]",
      Jf = $f ? $f.prototype : void 0,
      Fa = Jf ? Jf.valueOf : void 0;

    function oP(e, t, r, n, i, a, s) {
      switch (r) {
        case sP:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          e = e.buffer, t = t.buffer;
        case aP:
          return !(e.byteLength != t.byteLength || !a(new Zf(e), new Zf(t)));
        case QC:
        case $C:
        case eP:
          return HC(+e, +t);
        case ZC:
          return e.name == t.name && e.message == t.message;
        case tP:
        case nP:
          return e == t + "";
        case JC:
          var o = XC;
        case rP:
          var l = n & YC;
          if (o || (o = jC), e.size != t.size && !l) return !1;
          var p = s.get(e);
          if (p) return p == t;
          n |= KC, s.set(e, t);
          var c = WC(o(e), o(t), n, i, a, s);
          return s.delete(e), c;
        case iP:
          if (Fa) return Fa.call(e) == Fa.call(t)
      }
      return !1
    }
    eh.exports = oP
  });
  var xn = T((gH, rh) => {
    function lP(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
      return e
    }
    rh.exports = lP
  });
  var xe = T((yH, nh) => {
    var uP = Array.isArray;
    nh.exports = uP
  });
  var Da = T((vH, ih) => {
    var cP = xn(),
      fP = xe();

    function hP(e, t, r) {
      var n = t(e);
      return fP(e) ? n : cP(n, r(e))
    }
    ih.exports = hP
  });
  var sh = T((EH, ah) => {
    function pP(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n;) {
        var s = e[r];
        t(s, r, e) && (a[i++] = s)
      }
      return a
    }
    ah.exports = pP
  });
  var Na = T((bH, oh) => {
    function dP() {
      return []
    }
    oh.exports = dP
  });
  var ka = T((TH, uh) => {
    var mP = sh(),
      gP = Na(),
      yP = Object.prototype,
      vP = yP.propertyIsEnumerable,
      lh = Object.getOwnPropertySymbols,
      EP = lh ? function (e) {
        return e == null ? [] : (e = Object(e), mP(lh(e), function (t) {
          return vP.call(e, t)
        }))
      } : gP;
    uh.exports = EP
  });
  var fh = T((IH, ch) => {
    function bP(e, t) {
      for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
      return n
    }
    ch.exports = bP
  });
  var ph = T((_H, hh) => {
    var TP = vt(),
      IP = ut(),
      _P = "[object Arguments]";

    function SP(e) {
      return IP(e) && TP(e) == _P
    }
    hh.exports = SP
  });
  var Mr = T((SH, gh) => {
    var dh = ph(),
      AP = ut(),
      mh = Object.prototype,
      xP = mh.hasOwnProperty,
      CP = mh.propertyIsEnumerable,
      PP = dh(function () {
        return arguments
      }()) ? dh : function (e) {
        return AP(e) && xP.call(e, "callee") && !CP.call(e, "callee")
      };
    gh.exports = PP
  });
  var vh = T((AH, yh) => {
    function OP() {
      return !1
    }
    yh.exports = OP
  });
  var Cn = T((Lr, lr) => {
    var wP = Ye(),
      RP = vh(),
      Th = typeof Lr == "object" && Lr && !Lr.nodeType && Lr,
      Eh = Th && typeof lr == "object" && lr && !lr.nodeType && lr,
      MP = Eh && Eh.exports === Th,
      bh = MP ? wP.Buffer : void 0,
      LP = bh ? bh.isBuffer : void 0,
      FP = LP || RP;
    lr.exports = FP
  });
  var Pn = T((xH, Ih) => {
    var DP = 9007199254740991,
      NP = /^(?:0|[1-9]\d*)$/;

    function kP(e, t) {
      var r = typeof e;
      return t = t ? ? DP, !!t && (r == "number" || r != "symbol" && NP.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    Ih.exports = kP
  });
  var On = T((CH, _h) => {
    var VP = 9007199254740991;

    function qP(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VP
    }
    _h.exports = qP
  });
  var Ah = T((PH, Sh) => {
    var GP = vt(),
      BP = On(),
      UP = ut(),
      zP = "[object Arguments]",
      HP = "[object Array]",
      WP = "[object Boolean]",
      XP = "[object Date]",
      jP = "[object Error]",
      YP = "[object Function]",
      KP = "[object Map]",
      QP = "[object Number]",
      $P = "[object Object]",
      ZP = "[object RegExp]",
      JP = "[object Set]",
      eO = "[object String]",
      tO = "[object WeakMap]",
      rO = "[object ArrayBuffer]",
      nO = "[object DataView]",
      iO = "[object Float32Array]",
      aO = "[object Float64Array]",
      sO = "[object Int8Array]",
      oO = "[object Int16Array]",
      lO = "[object Int32Array]",
      uO = "[object Uint8Array]",
      cO = "[object Uint8ClampedArray]",
      fO = "[object Uint16Array]",
      hO = "[object Uint32Array]",
      Ee = {};
    Ee[iO] = Ee[aO] = Ee[sO] = Ee[oO] = Ee[lO] = Ee[uO] = Ee[cO] = Ee[fO] = Ee[hO] = !0;
    Ee[zP] = Ee[HP] = Ee[rO] = Ee[WP] = Ee[nO] = Ee[XP] = Ee[jP] = Ee[YP] = Ee[KP] = Ee[QP] = Ee[$P] = Ee[ZP] = Ee[JP] = Ee[eO] = Ee[tO] = !1;

    function pO(e) {
      return UP(e) && BP(e.length) && !!Ee[GP(e)]
    }
    Sh.exports = pO
  });
  var Ch = T((OH, xh) => {
    function dO(e) {
      return function (t) {
        return e(t)
      }
    }
    xh.exports = dO
  });
  var Oh = T((Fr, ur) => {
    var mO = ra(),
      Ph = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      Dr = Ph && typeof ur == "object" && ur && !ur.nodeType && ur,
      gO = Dr && Dr.exports === Ph,
      Va = gO && mO.process,
      yO = function () {
        try {
          var e = Dr && Dr.require && Dr.require("util").types;
          return e || Va && Va.binding && Va.binding("util")
        } catch {}
      }();
    ur.exports = yO
  });
  var wn = T((wH, Mh) => {
    var vO = Ah(),
      EO = Ch(),
      wh = Oh(),
      Rh = wh && wh.isTypedArray,
      bO = Rh ? EO(Rh) : vO;
    Mh.exports = bO
  });
  var qa = T((RH, Lh) => {
    var TO = fh(),
      IO = Mr(),
      _O = xe(),
      SO = Cn(),
      AO = Pn(),
      xO = wn(),
      CO = Object.prototype,
      PO = CO.hasOwnProperty;

    function OO(e, t) {
      var r = _O(e),
        n = !r && IO(e),
        i = !r && !n && SO(e),
        a = !r && !n && !i && xO(e),
        s = r || n || i || a,
        o = s ? TO(e.length, String) : [],
        l = o.length;
      for (var p in e)(t || PO.call(e, p)) && !(s && (p == "length" || i && (p == "offset" || p == "parent") || a && (p == "buffer" || p == "byteLength" || p == "byteOffset") || AO(p, l))) && o.push(p);
      return o
    }
    Lh.exports = OO
  });
  var Rn = T((MH, Fh) => {
    var wO = Object.prototype;

    function RO(e) {
      var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || wO;
      return e === r
    }
    Fh.exports = RO
  });
  var Nh = T((LH, Dh) => {
    var MO = na(),
      LO = MO(Object.keys, Object);
    Dh.exports = LO
  });
  var Mn = T((FH, kh) => {
    var FO = Rn(),
      DO = Nh(),
      NO = Object.prototype,
      kO = NO.hasOwnProperty;

    function VO(e) {
      if (!FO(e)) return DO(e);
      var t = [];
      for (var r in Object(e)) kO.call(e, r) && r != "constructor" && t.push(r);
      return t
    }
    kh.exports = VO
  });
  var Lt = T((DH, Vh) => {
    var qO = Oa(),
      GO = On();

    function BO(e) {
      return e != null && GO(e.length) && !qO(e)
    }
    Vh.exports = BO
  });
  var Nr = T((NH, qh) => {
    var UO = qa(),
      zO = Mn(),
      HO = Lt();

    function WO(e) {
      return HO(e) ? UO(e) : zO(e)
    }
    qh.exports = WO
  });
  var Bh = T((kH, Gh) => {
    var XO = Da(),
      jO = ka(),
      YO = Nr();

    function KO(e) {
      return XO(e, YO, jO)
    }
    Gh.exports = KO
  });
  var Hh = T((VH, zh) => {
    var Uh = Bh(),
      QO = 1,
      $O = Object.prototype,
      ZO = $O.hasOwnProperty;

    function JO(e, t, r, n, i, a) {
      var s = r & QO,
        o = Uh(e),
        l = o.length,
        p = Uh(t),
        c = p.length;
      if (l != c && !s) return !1;
      for (var f = l; f--;) {
        var g = o[f];
        if (!(s ? g in t : ZO.call(t, g))) return !1
      }
      var d = a.get(e),
        h = a.get(t);
      if (d && h) return d == t && h == e;
      var m = !0;
      a.set(e, t), a.set(t, e);
      for (var u = s; ++f < l;) {
        g = o[f];
        var y = e[g],
          v = t[g];
        if (n) var E = s ? n(v, y, g, t, e, a) : n(y, v, g, e, t, a);
        if (!(E === void 0 ? y === v || i(y, v, r, n, a) : E)) {
          m = !1;
          break
        }
        u || (u = g == "constructor")
      }
      if (m && !u) {
        var b = e.constructor,
          I = t.constructor;
        b != I && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof I == "function" && I instanceof I) && (m = !1)
      }
      return a.delete(e), a.delete(t), m
    }
    zh.exports = JO
  });
  var Xh = T((qH, Wh) => {
    var ew = Et(),
      tw = Ye(),
      rw = ew(tw, "DataView");
    Wh.exports = rw
  });
  var Yh = T((GH, jh) => {
    var nw = Et(),
      iw = Ye(),
      aw = nw(iw, "Promise");
    jh.exports = aw
  });
  var Qh = T((BH, Kh) => {
    var sw = Et(),
      ow = Ye(),
      lw = sw(ow, "Set");
    Kh.exports = lw
  });
  var Ga = T((UH, $h) => {
    var uw = Et(),
      cw = Ye(),
      fw = uw(cw, "WeakMap");
    $h.exports = fw
  });
  var Ln = T((zH, ip) => {
    var Ba = Xh(),
      Ua = _n(),
      za = Yh(),
      Ha = Qh(),
      Wa = Ga(),
      np = vt(),
      cr = Ra(),
      Zh = "[object Map]",
      hw = "[object Object]",
      Jh = "[object Promise]",
      ep = "[object Set]",
      tp = "[object WeakMap]",
      rp = "[object DataView]",
      pw = cr(Ba),
      dw = cr(Ua),
      mw = cr(za),
      gw = cr(Ha),
      yw = cr(Wa),
      Ft = np;
    (Ba && Ft(new Ba(new ArrayBuffer(1))) != rp || Ua && Ft(new Ua) != Zh || za && Ft(za.resolve()) != Jh || Ha && Ft(new Ha) != ep || Wa && Ft(new Wa) != tp) && (Ft = function (e) {
      var t = np(e),
        r = t == hw ? e.constructor : void 0,
        n = r ? cr(r) : "";
      if (n) switch (n) {
        case pw:
          return rp;
        case dw:
          return Zh;
        case mw:
          return Jh;
        case gw:
          return ep;
        case yw:
          return tp
      }
      return t
    });
    ip.exports = Ft
  });
  var hp = T((HH, fp) => {
    var Xa = Ma(),
      vw = La(),
      Ew = th(),
      bw = Hh(),
      ap = Ln(),
      sp = xe(),
      op = Cn(),
      Tw = wn(),
      Iw = 1,
      lp = "[object Arguments]",
      up = "[object Array]",
      Fn = "[object Object]",
      _w = Object.prototype,
      cp = _w.hasOwnProperty;

    function Sw(e, t, r, n, i, a) {
      var s = sp(e),
        o = sp(t),
        l = s ? up : ap(e),
        p = o ? up : ap(t);
      l = l == lp ? Fn : l, p = p == lp ? Fn : p;
      var c = l == Fn,
        f = p == Fn,
        g = l == p;
      if (g && op(e)) {
        if (!op(t)) return !1;
        s = !0, c = !1
      }
      if (g && !c) return a || (a = new Xa), s || Tw(e) ? vw(e, t, r, n, i, a) : Ew(e, t, l, r, n, i, a);
      if (!(r & Iw)) {
        var d = c && cp.call(e, "__wrapped__"),
          h = f && cp.call(t, "__wrapped__");
        if (d || h) {
          var m = d ? e.value() : e,
            u = h ? t.value() : t;
          return a || (a = new Xa), i(m, u, r, n, a)
        }
      }
      return g ? (a || (a = new Xa), bw(e, t, r, n, i, a)) : !1
    }
    fp.exports = Sw
  });
  var ja = T((WH, mp) => {
    var Aw = hp(),
      pp = ut();

    function dp(e, t, r, n, i) {
      return e === t ? !0 : e == null || t == null || !pp(e) && !pp(t) ? e !== e && t !== t : Aw(e, t, r, n, dp, i)
    }
    mp.exports = dp
  });
  var yp = T((XH, gp) => {
    var xw = Ma(),
      Cw = ja(),
      Pw = 1,
      Ow = 2;

    function ww(e, t, r, n) {
      var i = r.length,
        a = i,
        s = !n;
      if (e == null) return !a;
      for (e = Object(e); i--;) {
        var o = r[i];
        if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
      }
      for (; ++i < a;) {
        o = r[i];
        var l = o[0],
          p = e[l],
          c = o[1];
        if (s && o[2]) {
          if (p === void 0 && !(l in e)) return !1
        } else {
          var f = new xw;
          if (n) var g = n(p, c, l, e, t, f);
          if (!(g === void 0 ? Cw(c, p, Pw | Ow, n, f) : g)) return !1
        }
      }
      return !0
    }
    gp.exports = ww
  });
  var Ya = T((jH, vp) => {
    var Rw = Je();

    function Mw(e) {
      return e === e && !Rw(e)
    }
    vp.exports = Mw
  });
  var bp = T((YH, Ep) => {
    var Lw = Ya(),
      Fw = Nr();

    function Dw(e) {
      for (var t = Fw(e), r = t.length; r--;) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, Lw(i)]
      }
      return t
    }
    Ep.exports = Dw
  });
  var Ka = T((KH, Tp) => {
    function Nw(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
      }
    }
    Tp.exports = Nw
  });
  var _p = T((QH, Ip) => {
    var kw = yp(),
      Vw = bp(),
      qw = Ka();

    function Gw(e) {
      var t = Vw(e);
      return t.length == 1 && t[0][2] ? qw(t[0][0], t[0][1]) : function (r) {
        return r === e || kw(r, e, t)
      }
    }
    Ip.exports = Gw
  });
  var kr = T(($H, Sp) => {
    var Bw = vt(),
      Uw = ut(),
      zw = "[object Symbol]";

    function Hw(e) {
      return typeof e == "symbol" || Uw(e) && Bw(e) == zw
    }
    Sp.exports = Hw
  });
  var Dn = T((ZH, Ap) => {
    var Ww = xe(),
      Xw = kr(),
      jw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Yw = /^\w*$/;

    function Kw(e, t) {
      if (Ww(e)) return !1;
      var r = typeof e;
      return r == "number" || r == "symbol" || r == "boolean" || e == null || Xw(e) ? !0 : Yw.test(e) || !jw.test(e) || t != null && e in Object(t)
    }
    Ap.exports = Kw
  });
  var Pp = T((JH, Cp) => {
    var xp = Sn(),
      Qw = "Expected a function";

    function Qa(e, t) {
      if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Qw);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(i)) return a.get(i);
        var s = e.apply(this, n);
        return r.cache = a.set(i, s) || a, s
      };
      return r.cache = new(Qa.Cache || xp), r
    }
    Qa.Cache = xp;
    Cp.exports = Qa
  });
  var wp = T((eW, Op) => {
    var $w = Pp(),
      Zw = 500;

    function Jw(e) {
      var t = $w(e, function (n) {
          return r.size === Zw && r.clear(), n
        }),
        r = t.cache;
      return t
    }
    Op.exports = Jw
  });
  var Mp = T((tW, Rp) => {
    var e2 = wp(),
      t2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      r2 = /\\(\\)?/g,
      n2 = e2(function (e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(t2, function (r, n, i, a) {
          t.push(i ? a.replace(r2, "$1") : n || r)
        }), t
      });
    Rp.exports = n2
  });
  var $a = T((rW, Lp) => {
    function i2(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
      return i
    }
    Lp.exports = i2
  });
  var qp = T((nW, Vp) => {
    var Fp = er(),
      a2 = $a(),
      s2 = xe(),
      o2 = kr(),
      l2 = 1 / 0,
      Dp = Fp ? Fp.prototype : void 0,
      Np = Dp ? Dp.toString : void 0;

    function kp(e) {
      if (typeof e == "string") return e;
      if (s2(e)) return a2(e, kp) + "";
      if (o2(e)) return Np ? Np.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -l2 ? "-0" : t
    }
    Vp.exports = kp
  });
  var Bp = T((iW, Gp) => {
    var u2 = qp();

    function c2(e) {
      return e == null ? "" : u2(e)
    }
    Gp.exports = c2
  });
  var Vr = T((aW, Up) => {
    var f2 = xe(),
      h2 = Dn(),
      p2 = Mp(),
      d2 = Bp();

    function m2(e, t) {
      return f2(e) ? e : h2(e, t) ? [e] : p2(d2(e))
    }
    Up.exports = m2
  });
  var fr = T((sW, zp) => {
    var g2 = kr(),
      y2 = 1 / 0;

    function v2(e) {
      if (typeof e == "string" || g2(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -y2 ? "-0" : t
    }
    zp.exports = v2
  });
  var Nn = T((oW, Hp) => {
    var E2 = Vr(),
      b2 = fr();

    function T2(e, t) {
      t = E2(t, e);
      for (var r = 0, n = t.length; e != null && r < n;) e = e[b2(t[r++])];
      return r && r == n ? e : void 0
    }
    Hp.exports = T2
  });
  var kn = T((lW, Wp) => {
    var I2 = Nn();

    function _2(e, t, r) {
      var n = e == null ? void 0 : I2(e, t);
      return n === void 0 ? r : n
    }
    Wp.exports = _2
  });
  var jp = T((uW, Xp) => {
    function S2(e, t) {
      return e != null && t in Object(e)
    }
    Xp.exports = S2
  });
  var Kp = T((cW, Yp) => {
    var A2 = Vr(),
      x2 = Mr(),
      C2 = xe(),
      P2 = Pn(),
      O2 = On(),
      w2 = fr();

    function R2(e, t, r) {
      t = A2(t, e);
      for (var n = -1, i = t.length, a = !1; ++n < i;) {
        var s = w2(t[n]);
        if (!(a = e != null && r(e, s))) break;
        e = e[s]
      }
      return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && O2(i) && P2(s, i) && (C2(e) || x2(e)))
    }
    Yp.exports = R2
  });
  var $p = T((fW, Qp) => {
    var M2 = jp(),
      L2 = Kp();

    function F2(e, t) {
      return e != null && L2(e, t, M2)
    }
    Qp.exports = F2
  });
  var Jp = T((hW, Zp) => {
    var D2 = ja(),
      N2 = kn(),
      k2 = $p(),
      V2 = Dn(),
      q2 = Ya(),
      G2 = Ka(),
      B2 = fr(),
      U2 = 1,
      z2 = 2;

    function H2(e, t) {
      return V2(e) && q2(t) ? G2(B2(e), t) : function (r) {
        var n = N2(r, e);
        return n === void 0 && n === t ? k2(r, e) : D2(t, n, U2 | z2)
      }
    }
    Zp.exports = H2
  });
  var Vn = T((pW, ed) => {
    function W2(e) {
      return e
    }
    ed.exports = W2
  });
  var Za = T((dW, td) => {
    function X2(e) {
      return function (t) {
        return t ? . [e]
      }
    }
    td.exports = X2
  });
  var nd = T((mW, rd) => {
    var j2 = Nn();

    function Y2(e) {
      return function (t) {
        return j2(t, e)
      }
    }
    rd.exports = Y2
  });
  var ad = T((gW, id) => {
    var K2 = Za(),
      Q2 = nd(),
      $2 = Dn(),
      Z2 = fr();

    function J2(e) {
      return $2(e) ? K2(Z2(e)) : Q2(e)
    }
    id.exports = J2
  });
  var bt = T((yW, sd) => {
    var eR = _p(),
      tR = Jp(),
      rR = Vn(),
      nR = xe(),
      iR = ad();

    function aR(e) {
      return typeof e == "function" ? e : e == null ? rR : typeof e == "object" ? nR(e) ? tR(e[0], e[1]) : eR(e) : iR(e)
    }
    sd.exports = aR
  });
  var Ja = T((vW, od) => {
    var sR = bt(),
      oR = Lt(),
      lR = Nr();

    function uR(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!oR(t)) {
          var a = sR(r, 3);
          t = lR(t), r = function (o) {
            return a(i[o], o, i)
          }
        }
        var s = e(t, r, n);
        return s > -1 ? i[a ? t[s] : s] : void 0
      }
    }
    od.exports = uR
  });
  var es = T((EW, ld) => {
    function cR(e, t, r, n) {
      for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
        if (t(e[a], a, e)) return a;
      return -1
    }
    ld.exports = cR
  });
  var cd = T((bW, ud) => {
    var fR = /\s/;

    function hR(e) {
      for (var t = e.length; t-- && fR.test(e.charAt(t)););
      return t
    }
    ud.exports = hR
  });
  var hd = T((TW, fd) => {
    var pR = cd(),
      dR = /^\s+/;

    function mR(e) {
      return e && e.slice(0, pR(e) + 1).replace(dR, "")
    }
    fd.exports = mR
  });
  var qn = T((IW, md) => {
    var gR = hd(),
      pd = Je(),
      yR = kr(),
      dd = 0 / 0,
      vR = /^[-+]0x[0-9a-f]+$/i,
      ER = /^0b[01]+$/i,
      bR = /^0o[0-7]+$/i,
      TR = parseInt;

    function IR(e) {
      if (typeof e == "number") return e;
      if (yR(e)) return dd;
      if (pd(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = pd(t) ? t + "" : t
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = gR(e);
      var r = ER.test(e);
      return r || bR.test(e) ? TR(e.slice(2), r ? 2 : 8) : vR.test(e) ? dd : +e
    }
    md.exports = IR
  });
  var vd = T((_W, yd) => {
    var _R = qn(),
      gd = 1 / 0,
      SR = 17976931348623157e292;

    function AR(e) {
      if (!e) return e === 0 ? e : 0;
      if (e = _R(e), e === gd || e === -gd) {
        var t = e < 0 ? -1 : 1;
        return t * SR
      }
      return e === e ? e : 0
    }
    yd.exports = AR
  });
  var ts = T((SW, Ed) => {
    var xR = vd();

    function CR(e) {
      var t = xR(e),
        r = t % 1;
      return t === t ? r ? t - r : t : 0
    }
    Ed.exports = CR
  });
  var rs = T((AW, bd) => {
    var PR = es(),
      OR = bt(),
      wR = ts(),
      RR = Math.max;

    function MR(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : wR(r);
      return i < 0 && (i = RR(n + i, 0)), PR(e, OR(t, 3), i)
    }
    bd.exports = MR
  });
  var ns = T((xW, Td) => {
    var LR = Ja(),
      FR = rs(),
      DR = LR(FR);
    Td.exports = DR
  });
  var Bn = T(is => {
    "use strict";
    Object.defineProperty(is, "__esModule", {
      value: !0
    });

    function NR(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    NR(is, {
      ELEMENT_MATCHES: function () {
        return qR
      },
      FLEX_PREFIXED: function () {
        return GR
      },
      IS_BROWSER_ENV: function () {
        return _d
      },
      TRANSFORM_PREFIXED: function () {
        return Sd
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return BR
      },
      withBrowser: function () {
        return Gn
      }
    });
    var kR = VR(ns());

    function VR(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var _d = typeof window < "u",
      Gn = (e, t) => _d ? e() : t,
      qR = Gn(() => (0, kR.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
      GR = Gn(() => {
        let e = document.createElement("i"),
          t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
          r = "";
        try {
          let {
            length: n
          } = t;
          for (let i = 0; i < n; i++) {
            let a = t[i];
            if (e.style.display = a, e.style.display === a) return a
          }
          return r
        } catch {
          return r
        }
      }, "flex"),
      Sd = Gn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            r = "Transform",
            {
              length: n
            } = t;
          for (let i = 0; i < n; i++) {
            let a = t[i] + r;
            if (e.style[a] !== void 0) return a
          }
        }
        return "transform"
      }, "transform"),
      Id = Sd.split("transform")[0],
      BR = Id ? Id + "TransformStyle" : "transformStyle"
  });
  var as = T((PW, Od) => {
    var UR = 4,
      zR = .001,
      HR = 1e-7,
      WR = 10,
      qr = 11,
      Un = 1 / (qr - 1),
      XR = typeof Float32Array == "function";

    function Ad(e, t) {
      return 1 - 3 * t + 3 * e
    }

    function xd(e, t) {
      return 3 * t - 6 * e
    }

    function Cd(e) {
      return 3 * e
    }

    function zn(e, t, r) {
      return ((Ad(t, r) * e + xd(t, r)) * e + Cd(t)) * e
    }

    function Pd(e, t, r) {
      return 3 * Ad(t, r) * e * e + 2 * xd(t, r) * e + Cd(t)
    }

    function jR(e, t, r, n, i) {
      var a, s, o = 0;
      do s = t + (r - t) / 2, a = zn(s, n, i) - e, a > 0 ? r = s : t = s; while (Math.abs(a) > HR && ++o < WR);
      return s
    }

    function YR(e, t, r, n) {
      for (var i = 0; i < UR; ++i) {
        var a = Pd(t, r, n);
        if (a === 0) return t;
        var s = zn(t, r, n) - e;
        t -= s / a
      }
      return t
    }
    Od.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      var a = XR ? new Float32Array(qr) : new Array(qr);
      if (t !== r || n !== i)
        for (var s = 0; s < qr; ++s) a[s] = zn(s * Un, t, n);

      function o(l) {
        for (var p = 0, c = 1, f = qr - 1; c !== f && a[c] <= l; ++c) p += Un;
        --c;
        var g = (l - a[c]) / (a[c + 1] - a[c]),
          d = p + g * Un,
          h = Pd(d, t, n);
        return h >= zR ? YR(l, d, t, n) : h === 0 ? d : jR(l, p, p + Un, t, n)
      }
      return function (p) {
        return t === r && n === i ? p : p === 0 ? 0 : p === 1 ? 1 : zn(o(p), r, i)
      }
    }
  });
  var os = T(ss => {
    "use strict";
    Object.defineProperty(ss, "__esModule", {
      value: !0
    });

    function KR(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    KR(ss, {
      bounce: function () {
        return MM
      },
      bouncePast: function () {
        return LM
      },
      ease: function () {
        return $R
      },
      easeIn: function () {
        return ZR
      },
      easeInOut: function () {
        return eM
      },
      easeOut: function () {
        return JR
      },
      inBack: function () {
        return _M
      },
      inCirc: function () {
        return EM
      },
      inCubic: function () {
        return iM
      },
      inElastic: function () {
        return xM
      },
      inExpo: function () {
        return gM
      },
      inOutBack: function () {
        return AM
      },
      inOutCirc: function () {
        return TM
      },
      inOutCubic: function () {
        return sM
      },
      inOutElastic: function () {
        return PM
      },
      inOutExpo: function () {
        return vM
      },
      inOutQuad: function () {
        return nM
      },
      inOutQuart: function () {
        return uM
      },
      inOutQuint: function () {
        return hM
      },
      inOutSine: function () {
        return mM
      },
      inQuad: function () {
        return tM
      },
      inQuart: function () {
        return oM
      },
      inQuint: function () {
        return cM
      },
      inSine: function () {
        return pM
      },
      outBack: function () {
        return SM
      },
      outBounce: function () {
        return IM
      },
      outCirc: function () {
        return bM
      },
      outCubic: function () {
        return aM
      },
      outElastic: function () {
        return CM
      },
      outExpo: function () {
        return yM
      },
      outQuad: function () {
        return rM
      },
      outQuart: function () {
        return lM
      },
      outQuint: function () {
        return fM
      },
      outSine: function () {
        return dM
      },
      swingFrom: function () {
        return wM
      },
      swingFromTo: function () {
        return OM
      },
      swingTo: function () {
        return RM
      }
    });
    var Hn = QR(as());

    function QR(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var ct = 1.70158,
      $R = (0, Hn.default)(.25, .1, .25, 1),
      ZR = (0, Hn.default)(.42, 0, 1, 1),
      JR = (0, Hn.default)(0, 0, .58, 1),
      eM = (0, Hn.default)(.42, 0, .58, 1);

    function tM(e) {
      return Math.pow(e, 2)
    }

    function rM(e) {
      return -(Math.pow(e - 1, 2) - 1)
    }

    function nM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function iM(e) {
      return Math.pow(e, 3)
    }

    function aM(e) {
      return Math.pow(e - 1, 3) + 1
    }

    function sM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function oM(e) {
      return Math.pow(e, 4)
    }

    function lM(e) {
      return -(Math.pow(e - 1, 4) - 1)
    }

    function uM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function cM(e) {
      return Math.pow(e, 5)
    }

    function fM(e) {
      return Math.pow(e - 1, 5) + 1
    }

    function hM(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function pM(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function dM(e) {
      return Math.sin(e * (Math.PI / 2))
    }

    function mM(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function gM(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function yM(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function vM(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function EM(e) {
      return -(Math.sqrt(1 - e * e) - 1)
    }

    function bM(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function TM(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function IM(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function _M(e) {
      let t = ct;
      return e * e * ((t + 1) * e - t)
    }

    function SM(e) {
      let t = ct;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function AM(e) {
      let t = ct;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function xM(e) {
      let t = ct,
        r = 0,
        n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function CM(e) {
      let t = ct,
        r = 0,
        n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function PM(e) {
      let t = ct,
        r = 0,
        n = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function OM(e) {
      let t = ct;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function wM(e) {
      let t = ct;
      return e * e * ((t + 1) * e - t)
    }

    function RM(e) {
      let t = ct;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function MM(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function LM(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
  });
  var cs = T(us => {
    "use strict";
    Object.defineProperty(us, "__esModule", {
      value: !0
    });

    function FM(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    FM(us, {
      applyEasing: function () {
        return qM
      },
      createBezierEasing: function () {
        return VM
      },
      optimizeFloat: function () {
        return ls
      }
    });
    var wd = kM(os()),
      DM = NM(as());

    function NM(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function Rd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (Rd = function (n) {
        return n ? r : t
      })(e)
    }

    function kM(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = Rd(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }

    function ls(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0
    }

    function VM(e) {
      return (0, DM.default)(...e)
    }

    function qM(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : ls(r ? t > 0 ? r(t) : t : t > 0 && e && wd[e] ? wd[e](t) : t)
    }
  });
  var Dd = T(hs => {
    "use strict";
    Object.defineProperty(hs, "__esModule", {
      value: !0
    });

    function GM(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    GM(hs, {
      createElementState: function () {
        return Fd
      },
      ixElements: function () {
        return eL
      },
      mergeActionState: function () {
        return fs
      }
    });
    var Wn = nr(),
      Ld = ke(),
      {
        HTML_ELEMENT: RW,
        PLAIN_OBJECT: BM,
        ABSTRACT_NODE: MW,
        CONFIG_X_VALUE: UM,
        CONFIG_Y_VALUE: zM,
        CONFIG_Z_VALUE: HM,
        CONFIG_VALUE: WM,
        CONFIG_X_UNIT: XM,
        CONFIG_Y_UNIT: jM,
        CONFIG_Z_UNIT: YM,
        CONFIG_UNIT: KM
      } = Ld.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: QM,
        IX2_INSTANCE_ADDED: $M,
        IX2_ELEMENT_STATE_CHANGED: ZM
      } = Ld.IX2EngineActionTypes,
      Md = {},
      JM = "refState",
      eL = (e = Md, t = {}) => {
        switch (t.type) {
          case QM:
            return Md;
          case $M: {
            let {
              elementId: r,
              element: n,
              origin: i,
              actionItem: a,
              refType: s
            } = t.payload, {
              actionTypeId: o
            } = a, l = e;
            return (0, Wn.getIn)(l, [r, n]) !== n && (l = Fd(l, n, s, r, a)), fs(l, r, o, i, a)
          }
          case ZM: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: a
            } = t.payload;
            return fs(e, r, n, i, a)
          }
          default:
            return e
        }
      };

    function Fd(e, t, r, n, i) {
      let a = r === BM ? (0, Wn.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, Wn.mergeIn)(e, [n], {
        id: n,
        ref: t,
        refId: a,
        refType: r
      })
    }

    function fs(e, t, r, n, i) {
      let a = rL(i),
        s = [t, JM, r];
      return (0, Wn.mergeIn)(e, s, n, a)
    }
    var tL = [
      [UM, XM],
      [zM, jM],
      [HM, YM],
      [WM, KM]
    ];

    function rL(e) {
      let {
        config: t
      } = e;
      return tL.reduce((r, n) => {
        let i = n[0],
          a = n[1],
          s = t[i],
          o = t[a];
        return s != null && o != null && (r[a] = o), r
      }, {})
    }
  });
  var Nd = T(ps => {
    "use strict";
    Object.defineProperty(ps, "__esModule", {
      value: !0
    });

    function nL(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    nL(ps, {
      clearPlugin: function () {
        return cL
      },
      createPluginInstance: function () {
        return lL
      },
      getPluginConfig: function () {
        return iL
      },
      getPluginDestination: function () {
        return oL
      },
      getPluginDuration: function () {
        return aL
      },
      getPluginOrigin: function () {
        return sL
      },
      renderPlugin: function () {
        return uL
      }
    });
    var iL = e => e.value,
      aL = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
      },
      sL = e => e || {
        value: 0
      },
      oL = e => ({
        value: e.value
      }),
      lL = e => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t
      },
      uL = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n)
      },
      cL = e => {
        window.Webflow.require("lottie").createInstance(e).stop()
      }
  });
  var Vd = T(ds => {
    "use strict";
    Object.defineProperty(ds, "__esModule", {
      value: !0
    });

    function fL(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    fL(ds, {
      clearPlugin: function () {
        return TL
      },
      createPluginInstance: function () {
        return EL
      },
      getPluginConfig: function () {
        return mL
      },
      getPluginDestination: function () {
        return vL
      },
      getPluginDuration: function () {
        return gL
      },
      getPluginOrigin: function () {
        return yL
      },
      renderPlugin: function () {
        return bL
      }
    });
    var hL = e => document.querySelector(`[data-w-id="${e}"]`),
      pL = () => window.Webflow.require("spline"),
      dL = (e, t) => e.filter(r => !t.includes(r)),
      mL = (e, t) => e.value[t],
      gL = () => null,
      kd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      }),
      yL = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let a = Object.keys(e),
            s = dL(n, a);
          return s.length ? s.reduce((l, p) => (l[p] = kd[p], l), e) : e
        }
        return n.reduce((a, s) => (a[s] = kd[s], a), {})
      },
      vL = e => e.value,
      EL = (e, t) => {
        let r = t ? .config ? .target ? .pluginElement;
        return r ? hL(r) : null
      },
      bL = (e, t, r) => {
        let n = pL(),
          i = n.getInstance(e),
          a = r.config.target.objectId,
          s = o => {
            if (!o) throw new Error("Invalid spline app passed to renderSpline");
            let l = a && o.findObjectById(a);
            if (!l) return;
            let {
              PLUGIN_SPLINE: p
            } = t;
            p.positionX != null && (l.position.x = p.positionX), p.positionY != null && (l.position.y = p.positionY), p.positionZ != null && (l.position.z = p.positionZ), p.rotationX != null && (l.rotation.x = p.rotationX), p.rotationY != null && (l.rotation.y = p.rotationY), p.rotationZ != null && (l.rotation.z = p.rotationZ), p.scaleX != null && (l.scale.x = p.scaleX), p.scaleY != null && (l.scale.y = p.scaleY), p.scaleZ != null && (l.scale.z = p.scaleZ)
          };
        i ? s(i.spline) : n.setLoadHandler(e, s)
      },
      TL = () => null
  });
  var qd = T(ys => {
    "use strict";
    Object.defineProperty(ys, "__esModule", {
      value: !0
    });

    function IL(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    IL(ys, {
      clearPlugin: function () {
        return RL
      },
      createPluginInstance: function () {
        return OL
      },
      getPluginConfig: function () {
        return AL
      },
      getPluginDestination: function () {
        return PL
      },
      getPluginDuration: function () {
        return xL
      },
      getPluginOrigin: function () {
        return CL
      },
      renderPlugin: function () {
        return wL
      }
    });
    var ms = "--wf-rive-fit",
      gs = "--wf-rive-alignment",
      _L = e => document.querySelector(`[data-w-id="${e}"]`),
      SL = () => window.Webflow.require("rive"),
      AL = (e, t) => e.value.inputs[t],
      xL = () => null,
      CL = (e, t) => {
        if (e) return e;
        let r = {},
          {
            inputs: n = {}
          } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r
      },
      PL = e => e.value.inputs ? ? {},
      OL = (e, t) => {
        if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
        let n = t ? .config ? .target ? .pluginElement;
        return n ? _L(n) : null
      },
      wL = (e, {
        PLUGIN_RIVE: t
      }, r) => {
        let n = SL(),
          i = n.getInstance(e),
          a = n.rive.StateMachineInputType,
          {
            name: s,
            inputs: o = {}
          } = r.config.value || {};

        function l(p) {
          if (p.loaded) c();
          else {
            let f = () => {
              c(), p ? .off("load", f)
            };
            p ? .on("load", f)
          }

          function c() {
            let f = p.stateMachineInputs(s);
            if (f != null) {
              if (p.isPlaying || p.play(s, !1), ms in o || gs in o) {
                let g = p.layout,
                  d = o[ms] ? ? g.fit,
                  h = o[gs] ? ? g.alignment;
                (d !== g.fit || h !== g.alignment) && (p.layout = g.copyWith({
                  fit: d,
                  alignment: h
                }))
              }
              for (let g in o) {
                if (g === ms || g === gs) continue;
                let d = f.find(h => h.name === g);
                if (d != null) switch (d.type) {
                  case a.Boolean: {
                    if (o[g] != null) {
                      let h = !!o[g];
                      d.value = h
                    }
                    break
                  }
                  case a.Number: {
                    let h = t[g];
                    h != null && (d.value = h);
                    break
                  }
                  case a.Trigger: {
                    o[g] && d.fire();
                    break
                  }
                }
              }
            }
          }
        }
        i ? .rive ? l(i.rive) : n.setLoadHandler(e, l)
      },
      RL = (e, t) => null
  });
  var Es = T(vs => {
    "use strict";
    Object.defineProperty(vs, "__esModule", {
      value: !0
    });
    Object.defineProperty(vs, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return ML
      }
    });
    var Gd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };

    function ML(e) {
      let t, r, n, i = 1,
        a = e.replace(/\s/g, "").toLowerCase(),
        o = (typeof Gd[a] == "string" ? Gd[a].toLowerCase() : null) || a;
      if (o.startsWith("#")) {
        let l = o.substring(1);
        l.length === 3 || l.length === 4 ? (t = parseInt(l[0] + l[0], 16), r = parseInt(l[1] + l[1], 16), n = parseInt(l[2] + l[2], 16), l.length === 4 && (i = parseInt(l[3] + l[3], 16) / 255)) : (l.length === 6 || l.length === 8) && (t = parseInt(l.substring(0, 2), 16), r = parseInt(l.substring(2, 4), 16), n = parseInt(l.substring(4, 6), 16), l.length === 8 && (i = parseInt(l.substring(6, 8), 16) / 255))
      } else if (o.startsWith("rgba")) {
        let l = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        t = parseInt(l[0], 10), r = parseInt(l[1], 10), n = parseInt(l[2], 10), i = parseFloat(l[3])
      } else if (o.startsWith("rgb")) {
        let l = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        t = parseInt(l[0], 10), r = parseInt(l[1], 10), n = parseInt(l[2], 10)
      } else if (o.startsWith("hsla")) {
        let l = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          p = parseFloat(l[0]),
          c = parseFloat(l[1].replace("%", "")) / 100,
          f = parseFloat(l[2].replace("%", "")) / 100;
        i = parseFloat(l[3]);
        let g = (1 - Math.abs(2 * f - 1)) * c,
          d = g * (1 - Math.abs(p / 60 % 2 - 1)),
          h = f - g / 2,
          m, u, y;
        p >= 0 && p < 60 ? (m = g, u = d, y = 0) : p >= 60 && p < 120 ? (m = d, u = g, y = 0) : p >= 120 && p < 180 ? (m = 0, u = g, y = d) : p >= 180 && p < 240 ? (m = 0, u = d, y = g) : p >= 240 && p < 300 ? (m = d, u = 0, y = g) : (m = g, u = 0, y = d), t = Math.round((m + h) * 255), r = Math.round((u + h) * 255), n = Math.round((y + h) * 255)
      } else if (o.startsWith("hsl")) {
        let l = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          p = parseFloat(l[0]),
          c = parseFloat(l[1].replace("%", "")) / 100,
          f = parseFloat(l[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * f - 1)) * c,
          d = g * (1 - Math.abs(p / 60 % 2 - 1)),
          h = f - g / 2,
          m, u, y;
        p >= 0 && p < 60 ? (m = g, u = d, y = 0) : p >= 60 && p < 120 ? (m = d, u = g, y = 0) : p >= 120 && p < 180 ? (m = 0, u = g, y = d) : p >= 180 && p < 240 ? (m = 0, u = d, y = g) : p >= 240 && p < 300 ? (m = d, u = 0, y = g) : (m = g, u = 0, y = d), t = Math.round((m + h) * 255), r = Math.round((u + h) * 255), n = Math.round((y + h) * 255)
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
      return {
        red: t,
        green: r,
        blue: n,
        alpha: i
      }
    }
  });
  var Bd = T(bs => {
    "use strict";
    Object.defineProperty(bs, "__esModule", {
      value: !0
    });

    function LL(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    LL(bs, {
      clearPlugin: function () {
        return UL
      },
      createPluginInstance: function () {
        return qL
      },
      getPluginConfig: function () {
        return DL
      },
      getPluginDestination: function () {
        return VL
      },
      getPluginDuration: function () {
        return NL
      },
      getPluginOrigin: function () {
        return kL
      },
      renderPlugin: function () {
        return BL
      }
    });
    var FL = Es(),
      DL = (e, t) => e.value[t],
      NL = () => null,
      kL = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return {
          size: parseInt(i, 10)
        };
        if (r.unit === "%" || r.unit === "-") return {
          size: parseFloat(i)
        };
        if (r.red != null && r.green != null && r.blue != null) return (0, FL.normalizeColor)(i)
      },
      VL = e => e.value,
      qL = () => null,
      GL = {
        color: {
          match: ({
            red: e,
            green: t,
            blue: r,
            alpha: n
          }) => [e, t, r, n].every(i => i != null),
          getValue: ({
            red: e,
            green: t,
            blue: r,
            alpha: n
          }) => `rgba(${e}, ${t}, ${r}, ${n})`
        },
        size: {
          match: ({
            size: e
          }) => e != null,
          getValue: ({
            size: e
          }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`
            }
          }
        }
      },
      BL = (e, t, r) => {
        let {
          target: {
            objectId: n
          },
          value: {
            unit: i
          }
        } = r.config, a = t.PLUGIN_VARIABLE, s = Object.values(GL).find(o => o.match(a, i));
        s && document.documentElement.style.setProperty(n, s.getValue(a, i))
      },
      UL = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r)
      }
  });
  var zd = T(Ts => {
    "use strict";
    Object.defineProperty(Ts, "__esModule", {
      value: !0
    });
    Object.defineProperty(Ts, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return jL
      }
    });
    var Xn = ke(),
      zL = jn(Nd()),
      HL = jn(Vd()),
      WL = jn(qd()),
      XL = jn(Bd());

    function Ud(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (Ud = function (n) {
        return n ? r : t
      })(e)
    }

    function jn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = Ud(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
    var jL = new Map([
      [Xn.ActionTypeConsts.PLUGIN_LOTTIE, {
        ...zL
      }],
      [Xn.ActionTypeConsts.PLUGIN_SPLINE, {
        ...HL
      }],
      [Xn.ActionTypeConsts.PLUGIN_RIVE, {
        ...WL
      }],
      [Xn.ActionTypeConsts.PLUGIN_VARIABLE, {
        ...XL
      }]
    ])
  });
  var _s = T(Is => {
    "use strict";
    Object.defineProperty(Is, "__esModule", {
      value: !0
    });

    function YL(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    YL(Is, {
      clearPlugin: function () {
        return nF
      },
      createPluginInstance: function () {
        return tF
      },
      getPluginConfig: function () {
        return $L
      },
      getPluginDestination: function () {
        return eF
      },
      getPluginDuration: function () {
        return JL
      },
      getPluginOrigin: function () {
        return ZL
      },
      isPluginType: function () {
        return QL
      },
      renderPlugin: function () {
        return rF
      }
    });
    var KL = Bn(),
      Hd = zd();

    function QL(e) {
      return Hd.pluginMethodMap.has(e)
    }
    var Dt = e => t => {
        if (!KL.IS_BROWSER_ENV) return () => null;
        let r = Hd.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n
      },
      $L = Dt("getPluginConfig"),
      ZL = Dt("getPluginOrigin"),
      JL = Dt("getPluginDuration"),
      eF = Dt("getPluginDestination"),
      tF = Dt("createPluginInstance"),
      rF = Dt("renderPlugin"),
      nF = Dt("clearPlugin")
  });
  var Xd = T((BW, Wd) => {
    function iF(e, t) {
      return e == null || e !== e ? t : e
    }
    Wd.exports = iF
  });
  var Yd = T((UW, jd) => {
    function aF(e, t, r, n) {
      var i = -1,
        a = e == null ? 0 : e.length;
      for (n && a && (r = e[++i]); ++i < a;) r = t(r, e[i], i, e);
      return r
    }
    jd.exports = aF
  });
  var Qd = T((zW, Kd) => {
    function sF(e) {
      return function (t, r, n) {
        for (var i = -1, a = Object(t), s = n(t), o = s.length; o--;) {
          var l = s[e ? o : ++i];
          if (r(a[l], l, a) === !1) break
        }
        return t
      }
    }
    Kd.exports = sF
  });
  var Zd = T((HW, $d) => {
    var oF = Qd(),
      lF = oF();
    $d.exports = lF
  });
  var Ss = T((WW, Jd) => {
    var uF = Zd(),
      cF = Nr();

    function fF(e, t) {
      return e && uF(e, t, cF)
    }
    Jd.exports = fF
  });
  var tm = T((XW, em) => {
    var hF = Lt();

    function pF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!hF(r)) return e(r, n);
        for (var i = r.length, a = t ? i : -1, s = Object(r);
          (t ? a-- : ++a < i) && n(s[a], a, s) !== !1;);
        return r
      }
    }
    em.exports = pF
  });
  var As = T((jW, rm) => {
    var dF = Ss(),
      mF = tm(),
      gF = mF(dF);
    rm.exports = gF
  });
  var im = T((YW, nm) => {
    function yF(e, t, r, n, i) {
      return i(e, function (a, s, o) {
        r = n ? (n = !1, a) : t(r, a, s, o)
      }), r
    }
    nm.exports = yF
  });
  var sm = T((KW, am) => {
    var vF = Yd(),
      EF = As(),
      bF = bt(),
      TF = im(),
      IF = xe();

    function _F(e, t, r) {
      var n = IF(e) ? vF : TF,
        i = arguments.length < 3;
      return n(e, bF(t, 4), r, i, EF)
    }
    am.exports = _F
  });
  var lm = T((QW, om) => {
    var SF = es(),
      AF = bt(),
      xF = ts(),
      CF = Math.max,
      PF = Math.min;

    function OF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return r !== void 0 && (i = xF(r), i = r < 0 ? CF(n + i, 0) : PF(i, n - 1)), SF(e, AF(t, 3), i, !0)
    }
    om.exports = OF
  });
  var cm = T(($W, um) => {
    var wF = Ja(),
      RF = lm(),
      MF = wF(RF);
    um.exports = MF
  });
  var hm = T(xs => {
    "use strict";
    Object.defineProperty(xs, "__esModule", {
      value: !0
    });
    Object.defineProperty(xs, "default", {
      enumerable: !0,
      get: function () {
        return FF
      }
    });

    function fm(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function LF(e, t) {
      if (fm(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!Object.hasOwn(t, r[i]) || !fm(e[r[i]], t[r[i]])) return !1;
      return !0
    }
    var FF = LF
  });
  var Rm = T(Ds => {
    "use strict";
    Object.defineProperty(Ds, "__esModule", {
      value: !0
    });

    function DF(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    DF(Ds, {
      cleanupHTMLElement: function () {
        return FD
      },
      clearAllStyles: function () {
        return LD
      },
      clearObjectCache: function () {
        return eD
      },
      getActionListProgress: function () {
        return ND
      },
      getAffectedElements: function () {
        return Ls
      },
      getComputedStyle: function () {
        return lD
      },
      getDestinationValues: function () {
        return mD
      },
      getElementId: function () {
        return iD
      },
      getInstanceId: function () {
        return rD
      },
      getInstanceOrigin: function () {
        return fD
      },
      getItemConfigByKey: function () {
        return dD
      },
      getMaxDurationItemIndex: function () {
        return wm
      },
      getNamespacedParameterId: function () {
        return qD
      },
      getRenderType: function () {
        return Cm
      },
      getStyleProp: function () {
        return gD
      },
      mediaQueriesEqual: function () {
        return BD
      },
      observeStore: function () {
        return oD
      },
      reduceListToGroup: function () {
        return kD
      },
      reifyState: function () {
        return aD
      },
      renderHTMLElement: function () {
        return yD
      },
      shallowEqual: function () {
        return bm.default
      },
      shouldAllowMediaQuery: function () {
        return GD
      },
      shouldNamespaceEventParameter: function () {
        return VD
      },
      stringifyTarget: function () {
        return UD
      }
    });
    var Tt = $n(Xd()),
      Os = $n(sm()),
      Ps = $n(cm()),
      pm = nr(),
      Nt = ke(),
      bm = $n(hm()),
      NF = cs(),
      kF = Es(),
      rt = _s(),
      Me = Bn();

    function $n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var {
      BACKGROUND: VF,
      TRANSFORM: qF,
      TRANSLATE_3D: GF,
      SCALE_3D: BF,
      ROTATE_X: UF,
      ROTATE_Y: zF,
      ROTATE_Z: HF,
      SKEW: WF,
      PRESERVE_3D: XF,
      FLEX: jF,
      OPACITY: Kn,
      FILTER: Gr,
      FONT_VARIATION_SETTINGS: Br,
      WIDTH: et,
      HEIGHT: tt,
      BACKGROUND_COLOR: Tm,
      BORDER_COLOR: YF,
      COLOR: KF,
      CHILDREN: dm,
      IMMEDIATE_CHILDREN: QF,
      SIBLINGS: mm,
      PARENT: $F,
      DISPLAY: Qn,
      WILL_CHANGE: hr,
      AUTO: It,
      COMMA_DELIMITER: Ur,
      COLON_DELIMITER: ZF,
      BAR_DELIMITER: Cs,
      RENDER_TRANSFORM: Im,
      RENDER_GENERAL: ws,
      RENDER_STYLE: Rs,
      RENDER_PLUGIN: _m
    } = Nt.IX2EngineConstants, {
      TRANSFORM_MOVE: pr,
      TRANSFORM_SCALE: dr,
      TRANSFORM_ROTATE: mr,
      TRANSFORM_SKEW: zr,
      STYLE_OPACITY: Sm,
      STYLE_FILTER: Hr,
      STYLE_FONT_VARIATION: Wr,
      STYLE_SIZE: gr,
      STYLE_BACKGROUND_COLOR: yr,
      STYLE_BORDER: vr,
      STYLE_TEXT_COLOR: Er,
      GENERAL_DISPLAY: Zn,
      OBJECT_VALUE: JF
    } = Nt.ActionTypeConsts, Am = e => e.trim(), Ms = Object.freeze({
      [yr]: Tm,
      [vr]: YF,
      [Er]: KF
    }), xm = Object.freeze({
      [Me.TRANSFORM_PREFIXED]: qF,
      [Tm]: VF,
      [Kn]: Kn,
      [Gr]: Gr,
      [et]: et,
      [tt]: tt,
      [Br]: Br
    }), Yn = new Map;

    function eD() {
      Yn.clear()
    }
    var tD = 1;

    function rD() {
      return "i" + tD++
    }
    var nD = 1;

    function iD(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id
      }
      return "e" + nD++
    }

    function aD({
      events: e,
      actionLists: t,
      site: r
    } = {}) {
      let n = (0, Os.default)(e, (s, o) => {
          let {
            eventTypeId: l
          } = o;
          return s[l] || (s[l] = {}), s[l][o.id] = o, s
        }, {}),
        i = r && r.mediaQueries,
        a = [];
      return i ? a = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: a
        }
      }
    }
    var sD = (e, t) => e === t;

    function oD({
      store: e,
      select: t,
      onChange: r,
      comparator: n = sD
    }) {
      let {
        getState: i,
        subscribe: a
      } = e, s = a(l), o = t(i());

      function l() {
        let p = t(i());
        if (p == null) {
          s();
          return
        }
        n(p, o) || (o = p, r(o, e))
      }
      return s
    }

    function gm(e) {
      let t = typeof e;
      if (t === "string") return {
        id: e
      };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: a,
          appliesTo: s,
          useEventTarget: o
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: a,
          appliesTo: s,
          useEventTarget: o
        }
      }
      return {}
    }

    function Ls({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i
    }) {
      if (!i) throw new Error("IX2 missing elementApi");
      let {
        targets: a
      } = e;
      if (Array.isArray(a) && a.length > 0) return a.reduce((V, M) => V.concat(Ls({
        config: {
          target: M
        },
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
      })), []);
      let {
        getValidDocument: s,
        getQuerySelector: o,
        queryDocument: l,
        getChildElements: p,
        getSiblingElements: c,
        matchSelector: f,
        elementContains: g,
        isSiblingNode: d
      } = i, {
        target: h
      } = e;
      if (!h) return [];
      let {
        id: m,
        objectId: u,
        selector: y,
        selectorGuids: v,
        appliesTo: E,
        useEventTarget: b
      } = gm(h);
      if (u) return [Yn.has(u) ? Yn.get(u) : Yn.set(u, {}).get(u)];
      if (E === Nt.EventAppliesTo.PAGE) {
        let V = s(m);
        return V ? [V] : []
      }
      let S = (t ? .action ? .config ? .affectedElements ? ? {})[m || y] || {},
        _ = !!(S.id || S.selector),
        A, D, w, O = t && o(gm(t.target));
      if (_ ? (A = S.limitAffectedElements, D = O, w = o(S)) : D = w = o({
          id: m,
          selector: y,
          selectorGuids: v
        }), t && b) {
        let V = r && (w || b === !0) ? [r] : l(O);
        if (w) {
          if (b === $F) return l(w).filter(M => V.some(L => g(M, L)));
          if (b === dm) return l(w).filter(M => V.some(L => g(L, M)));
          if (b === mm) return l(w).filter(M => V.some(L => d(L, M)))
        }
        return V
      }
      return D == null || w == null ? [] : Me.IS_BROWSER_ENV && n ? l(w).filter(V => n.contains(V)) : A === dm ? l(D, w) : A === QF ? p(l(D)).filter(f(w)) : A === mm ? c(l(D)).filter(f(w)) : l(w)
    }

    function lD({
      element: e,
      actionItem: t
    }) {
      if (!Me.IS_BROWSER_ENV) return {};
      let {
        actionTypeId: r
      } = t;
      switch (r) {
        case gr:
        case yr:
        case vr:
        case Er:
        case Zn:
          return window.getComputedStyle(e);
        default:
          return {}
      }
    }
    var ym = /px/,
      uD = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = vD[n.type]), r), e || {}),
      cD = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = ED[n.type] || n.defaultValue || 0), r), e || {});

    function fD(e, t = {}, r = {}, n, i) {
      let {
        getStyle: a
      } = i, {
        actionTypeId: s
      } = n;
      if ((0, rt.isPluginType)(s)) return (0, rt.getPluginOrigin)(s)(t[s], n);
      switch (n.actionTypeId) {
        case pr:
        case dr:
        case mr:
        case zr:
          return t[n.actionTypeId] || Fs[n.actionTypeId];
        case Hr:
          return uD(t[n.actionTypeId], n.config.filters);
        case Wr:
          return cD(t[n.actionTypeId], n.config.fontVariations);
        case Sm:
          return {
            value: (0, Tt.default)(parseFloat(a(e, Kn)), 1)
          };
        case gr: {
          let o = a(e, et),
            l = a(e, tt),
            p, c;
          return n.config.widthUnit === It ? p = ym.test(o) ? parseFloat(o) : parseFloat(r.width) : p = (0, Tt.default)(parseFloat(o), parseFloat(r.width)), n.config.heightUnit === It ? c = ym.test(l) ? parseFloat(l) : parseFloat(r.height) : c = (0, Tt.default)(parseFloat(l), parseFloat(r.height)), {
            widthValue: p,
            heightValue: c
          }
        }
        case yr:
        case vr:
        case Er:
          return wD({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: a
          });
        case Zn:
          return {
            value: (0, Tt.default)(a(e, Qn), r.display)
          };
        case JF:
          return t[n.actionTypeId] || {
            value: 0
          };
        default:
          return
      }
    }
    var hD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      pD = (e, t) => (t && (e[t.type] = t.value || 0), e),
      dD = (e, t, r) => {
        if ((0, rt.isPluginType)(e)) return (0, rt.getPluginConfig)(e)(r, t);
        switch (e) {
          case Hr: {
            let n = (0, Ps.default)(r.filters, ({
              type: i
            }) => i === t);
            return n ? n.value : 0
          }
          case Wr: {
            let n = (0, Ps.default)(r.fontVariations, ({
              type: i
            }) => i === t);
            return n ? n.value : 0
          }
          default:
            return r[t]
        }
      };

    function mD({
      element: e,
      actionItem: t,
      elementApi: r
    }) {
      if ((0, rt.isPluginType)(t.actionTypeId)) return (0, rt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case pr:
        case dr:
        case mr:
        case zr: {
          let {
            xValue: n,
            yValue: i,
            zValue: a
          } = t.config;
          return {
            xValue: n,
            yValue: i,
            zValue: a
          }
        }
        case gr: {
          let {
            getStyle: n,
            setStyle: i,
            getProperty: a
          } = r, {
            widthUnit: s,
            heightUnit: o
          } = t.config, {
            widthValue: l,
            heightValue: p
          } = t.config;
          if (!Me.IS_BROWSER_ENV) return {
            widthValue: l,
            heightValue: p
          };
          if (s === It) {
            let c = n(e, et);
            i(e, et, ""), l = a(e, "offsetWidth"), i(e, et, c)
          }
          if (o === It) {
            let c = n(e, tt);
            i(e, tt, ""), p = a(e, "offsetHeight"), i(e, tt, c)
          }
          return {
            widthValue: l,
            heightValue: p
          }
        }
        case yr:
        case vr:
        case Er: {
          let {
            rValue: n,
            gValue: i,
            bValue: a,
            aValue: s,
            globalSwatchId: o
          } = t.config;
          if (o && o.startsWith("--")) {
            let {
              getStyle: l
            } = r, p = l(e, o), c = (0, kF.normalizeColor)(p);
            return {
              rValue: c.red,
              gValue: c.green,
              bValue: c.blue,
              aValue: c.alpha
            }
          }
          return {
            rValue: n,
            gValue: i,
            bValue: a,
            aValue: s
          }
        }
        case Hr:
          return t.config.filters.reduce(hD, {});
        case Wr:
          return t.config.fontVariations.reduce(pD, {});
        default: {
          let {
            value: n
          } = t.config;
          return {
            value: n
          }
        }
      }
    }

    function Cm(e) {
      if (/^TRANSFORM_/.test(e)) return Im;
      if (/^STYLE_/.test(e)) return Rs;
      if (/^GENERAL_/.test(e)) return ws;
      if (/^PLUGIN_/.test(e)) return _m
    }

    function gD(e, t) {
      return e === Rs ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function yD(e, t, r, n, i, a, s, o, l) {
      switch (o) {
        case Im:
          return ID(e, t, r, i, s);
        case Rs:
          return RD(e, t, r, i, a, s);
        case ws:
          return MD(e, i, s);
        case _m: {
          let {
            actionTypeId: p
          } = i;
          if ((0, rt.isPluginType)(p)) return (0, rt.renderPlugin)(p)(l, t, i)
        }
      }
    }
    var Fs = {
        [pr]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [dr]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [mr]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [zr]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      },
      vD = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      }),
      ED = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      }),
      bD = (e, t) => {
        let r = (0, Ps.default)(t.filters, ({
          type: n
        }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%"
        }
      },
      TD = Object.keys(Fs);

    function ID(e, t, r, n, i) {
      let a = TD.map(o => {
          let l = Fs[o],
            {
              xValue: p = l.xValue,
              yValue: c = l.yValue,
              zValue: f = l.zValue,
              xUnit: g = "",
              yUnit: d = "",
              zUnit: h = ""
            } = t[o] || {};
          switch (o) {
            case pr:
              return `${GF}(${p}${g}, ${c}${d}, ${f}${h})`;
            case dr:
              return `${BF}(${p}${g}, ${c}${d}, ${f}${h})`;
            case mr:
              return `${UF}(${p}${g}) ${zF}(${c}${d}) ${HF}(${f}${h})`;
            case zr:
              return `${WF}(${p}${g}, ${c}${d})`;
            default:
              return ""
          }
        }).join(" "),
        {
          setStyle: s
        } = i;
      kt(e, Me.TRANSFORM_PREFIXED, i), s(e, Me.TRANSFORM_PREFIXED, a), AD(n, r) && s(e, Me.TRANSFORM_STYLE_PREFIXED, XF)
    }

    function _D(e, t, r, n) {
      let i = (0, Os.default)(t, (s, o, l) => `${s} ${l}(${o}${bD(l,r)})`, ""),
        {
          setStyle: a
        } = n;
      kt(e, Gr, n), a(e, Gr, i)
    }

    function SD(e, t, r, n) {
      let i = (0, Os.default)(t, (s, o, l) => (s.push(`"${l}" ${o}`), s), []).join(", "),
        {
          setStyle: a
        } = n;
      kt(e, Br, n), a(e, Br, i)
    }

    function AD({
      actionTypeId: e
    }, {
      xValue: t,
      yValue: r,
      zValue: n
    }) {
      return e === pr && n !== void 0 || e === dr && n !== void 0 || e === mr && (t !== void 0 || r !== void 0)
    }
    var xD = "\\(([^)]+)\\)",
      CD = /^rgb/,
      PD = RegExp(`rgba?${xD}`);

    function OD(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
    }

    function wD({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n
    }) {
      let i = Ms[t],
        a = n(e, i),
        s = CD.test(a) ? a : r[i],
        o = OD(PD, s).split(Ur);
      return {
        rValue: (0, Tt.default)(parseInt(o[0], 10), 255),
        gValue: (0, Tt.default)(parseInt(o[1], 10), 255),
        bValue: (0, Tt.default)(parseInt(o[2], 10), 255),
        aValue: (0, Tt.default)(parseFloat(o[3]), 1)
      }
    }

    function RD(e, t, r, n, i, a) {
      let {
        setStyle: s
      } = a;
      switch (n.actionTypeId) {
        case gr: {
          let {
            widthUnit: o = "",
            heightUnit: l = ""
          } = n.config, {
            widthValue: p,
            heightValue: c
          } = r;
          p !== void 0 && (o === It && (o = "px"), kt(e, et, a), s(e, et, p + o)), c !== void 0 && (l === It && (l = "px"), kt(e, tt, a), s(e, tt, c + l));
          break
        }
        case Hr: {
          _D(e, r, n.config, a);
          break
        }
        case Wr: {
          SD(e, r, n.config, a);
          break
        }
        case yr:
        case vr:
        case Er: {
          let o = Ms[n.actionTypeId],
            l = Math.round(r.rValue),
            p = Math.round(r.gValue),
            c = Math.round(r.bValue),
            f = r.aValue;
          kt(e, o, a), s(e, o, f >= 1 ? `rgb(${l},${p},${c})` : `rgba(${l},${p},${c},${f})`);
          break
        }
        default: {
          let {
            unit: o = ""
          } = n.config;
          kt(e, i, a), s(e, i, r.value + o);
          break
        }
      }
    }

    function MD(e, t, r) {
      let {
        setStyle: n
      } = r;
      switch (t.actionTypeId) {
        case Zn: {
          let {
            value: i
          } = t.config;
          i === jF && Me.IS_BROWSER_ENV ? n(e, Qn, Me.FLEX_PREFIXED) : n(e, Qn, i);
          return
        }
      }
    }

    function kt(e, t, r) {
      if (!Me.IS_BROWSER_ENV) return;
      let n = xm[t];
      if (!n) return;
      let {
        getStyle: i,
        setStyle: a
      } = r, s = i(e, hr);
      if (!s) {
        a(e, hr, n);
        return
      }
      let o = s.split(Ur).map(Am);
      o.indexOf(n) === -1 && a(e, hr, o.concat(n).join(Ur))
    }

    function Pm(e, t, r) {
      if (!Me.IS_BROWSER_ENV) return;
      let n = xm[t];
      if (!n) return;
      let {
        getStyle: i,
        setStyle: a
      } = r, s = i(e, hr);
      !s || s.indexOf(n) === -1 || a(e, hr, s.split(Ur).map(Am).filter(o => o !== n).join(Ur))
    }

    function LD({
      store: e,
      elementApi: t
    }) {
      let {
        ixData: r
      } = e.getState(), {
        events: n = {},
        actionLists: i = {}
      } = r;
      Object.keys(n).forEach(a => {
        let s = n[a],
          {
            config: o
          } = s.action,
          {
            actionListId: l
          } = o,
          p = i[l];
        p && vm({
          actionList: p,
          event: s,
          elementApi: t
        })
      }), Object.keys(i).forEach(a => {
        vm({
          actionList: i[a],
          elementApi: t
        })
      })
    }

    function vm({
      actionList: e = {},
      event: t,
      elementApi: r
    }) {
      let {
        actionItemGroups: n,
        continuousParameterGroups: i
      } = e;
      n && n.forEach(a => {
        Em({
          actionGroup: a,
          event: t,
          elementApi: r
        })
      }), i && i.forEach(a => {
        let {
          continuousActionGroups: s
        } = a;
        s.forEach(o => {
          Em({
            actionGroup: o,
            event: t,
            elementApi: r
          })
        })
      })
    }

    function Em({
      actionGroup: e,
      event: t,
      elementApi: r
    }) {
      let {
        actionItems: n
      } = e;
      n.forEach(i => {
        let {
          actionTypeId: a,
          config: s
        } = i, o;
        (0, rt.isPluginType)(a) ? o = l => (0, rt.clearPlugin)(a)(l, i): o = Om({
          effect: DD,
          actionTypeId: a,
          elementApi: r
        }), Ls({
          config: s,
          event: t,
          elementApi: r
        }).forEach(o)
      })
    }

    function FD(e, t, r) {
      let {
        setStyle: n,
        getStyle: i
      } = r, {
        actionTypeId: a
      } = t;
      if (a === gr) {
        let {
          config: s
        } = t;
        s.widthUnit === It && n(e, et, ""), s.heightUnit === It && n(e, tt, "")
      }
      i(e, hr) && Om({
        effect: Pm,
        actionTypeId: a,
        elementApi: r
      })(e)
    }
    var Om = ({
      effect: e,
      actionTypeId: t,
      elementApi: r
    }) => n => {
      switch (t) {
        case pr:
        case dr:
        case mr:
        case zr:
          e(n, Me.TRANSFORM_PREFIXED, r);
          break;
        case Hr:
          e(n, Gr, r);
          break;
        case Wr:
          e(n, Br, r);
          break;
        case Sm:
          e(n, Kn, r);
          break;
        case gr:
          e(n, et, r), e(n, tt, r);
          break;
        case yr:
        case vr:
        case Er:
          e(n, Ms[t], r);
          break;
        case Zn:
          e(n, Qn, r);
          break
      }
    };

    function DD(e, t, r) {
      let {
        setStyle: n
      } = r;
      Pm(e, t, r), n(e, t, ""), t === Me.TRANSFORM_PREFIXED && n(e, Me.TRANSFORM_STYLE_PREFIXED, "")
    }

    function wm(e) {
      let t = 0,
        r = 0;
      return e.forEach((n, i) => {
        let {
          config: a
        } = n, s = a.delay + a.duration;
        s >= t && (t = s, r = i)
      }), r
    }

    function ND(e, t) {
      let {
        actionItemGroups: r,
        useFirstGroupAsInitialState: n
      } = e, {
        actionItem: i,
        verboseTimeElapsed: a = 0
      } = t, s = 0, o = 0;
      return r.forEach((l, p) => {
        if (n && p === 0) return;
        let {
          actionItems: c
        } = l, f = c[wm(c)], {
          config: g,
          actionTypeId: d
        } = f;
        i.id === f.id && (o = s + a);
        let h = Cm(d) === ws ? 0 : g.duration;
        s += g.delay + h
      }), s > 0 ? (0, NF.optimizeFloat)(o / s) : 0
    }

    function kD({
      actionList: e,
      actionItemId: t,
      rawData: r
    }) {
      let {
        actionItemGroups: n,
        continuousParameterGroups: i
      } = e, a = [], s = o => (a.push((0, pm.mergeIn)(o, ["config"], {
        delay: 0,
        duration: 0
      })), o.id === t);
      return n && n.some(({
        actionItems: o
      }) => o.some(s)), i && i.some(o => {
        let {
          continuousActionGroups: l
        } = o;
        return l.some(({
          actionItems: p
        }) => p.some(s))
      }), (0, pm.setIn)(r, ["actionLists"], {
        [e.id]: {
          id: e.id,
          actionItemGroups: [{
            actionItems: a
          }]
        }
      })
    }

    function VD(e, {
      basedOn: t
    }) {
      return e === Nt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Nt.EventBasedOn.ELEMENT || t == null) || e === Nt.EventTypeConsts.MOUSE_MOVE && t === Nt.EventBasedOn.ELEMENT
    }

    function qD(e, t) {
      return e + ZF + t
    }

    function GD(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
    }

    function BD(e, t) {
      return (0, bm.default)(e && e.sort(), t && t.sort())
    }

    function UD(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId) return e.pluginElement + Cs + e.objectId;
      if (e.objectId) return e.objectId;
      let {
        id: t = "",
        selector: r = "",
        useEventTarget: n = ""
      } = e;
      return t + Cs + r + Cs + n
    }
  });
  var Vt = T(Ns => {
    "use strict";
    Object.defineProperty(Ns, "__esModule", {
      value: !0
    });

    function zD(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    zD(Ns, {
      IX2BrowserSupport: function () {
        return HD
      },
      IX2EasingUtils: function () {
        return XD
      },
      IX2Easings: function () {
        return WD
      },
      IX2ElementsReducer: function () {
        return jD
      },
      IX2VanillaPlugins: function () {
        return YD
      },
      IX2VanillaUtils: function () {
        return KD
      }
    });
    var HD = br(Bn()),
      WD = br(os()),
      XD = br(cs()),
      jD = br(Dd()),
      YD = br(_s()),
      KD = br(Rm());

    function Mm(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (Mm = function (n) {
        return n ? r : t
      })(e)
    }

    function br(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = Mm(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
  });
  var Nm = T(Vs => {
    "use strict";
    Object.defineProperty(Vs, "__esModule", {
      value: !0
    });
    Object.defineProperty(Vs, "ixInstances", {
      enumerable: !0,
      get: function () {
        return lN
      }
    });
    var Lm = ke(),
      Fm = Vt(),
      Tr = nr(),
      {
        IX2_RAW_DATA_IMPORTED: QD,
        IX2_SESSION_STOPPED: $D,
        IX2_INSTANCE_ADDED: ZD,
        IX2_INSTANCE_STARTED: JD,
        IX2_INSTANCE_REMOVED: eN,
        IX2_ANIMATION_FRAME_CHANGED: tN
      } = Lm.IX2EngineActionTypes,
      {
        optimizeFloat: Jn,
        applyEasing: Dm,
        createBezierEasing: rN
      } = Fm.IX2EasingUtils,
      {
        RENDER_GENERAL: nN
      } = Lm.IX2EngineConstants,
      {
        getItemConfigByKey: ks,
        getRenderType: iN,
        getStyleProp: aN
      } = Fm.IX2VanillaUtils,
      sN = (e, t) => {
        let {
          position: r,
          parameterId: n,
          actionGroups: i,
          destinationKeys: a,
          smoothing: s,
          restingValue: o,
          actionTypeId: l,
          customEasingFn: p,
          skipMotion: c,
          skipToValue: f
        } = e, {
          parameters: g
        } = t.payload, d = Math.max(1 - s, .01), h = g[n];
        h == null && (d = 1, h = o);
        let m = Math.max(h, 0) || 0,
          u = Jn(m - r),
          y = c ? f : Jn(r + u * d),
          v = y * 100;
        if (y === r && e.current) return e;
        let E, b, I, S;
        for (let A = 0, {
            length: D
          } = i; A < D; A++) {
          let {
            keyframe: w,
            actionItems: O
          } = i[A];
          if (A === 0 && (E = O[0]), v >= w) {
            E = O[0];
            let V = i[A + 1],
              M = V && v !== w;
            b = M ? V.actionItems[0] : null, M && (I = w / 100, S = (V.keyframe - w) / 100)
          }
        }
        let _ = {};
        if (E && !b)
          for (let A = 0, {
              length: D
            } = a; A < D; A++) {
            let w = a[A];
            _[w] = ks(l, w, E.config)
          } else if (E && b && I !== void 0 && S !== void 0) {
            let A = (y - I) / S,
              D = E.config.easing,
              w = Dm(D, A, p);
            for (let O = 0, {
                length: V
              } = a; O < V; O++) {
              let M = a[O],
                L = ks(l, M, E.config),
                re = (ks(l, M, b.config) - L) * w + L;
              _[M] = re
            }
          } return (0, Tr.merge)(e, {
          position: y,
          current: _
        })
      },
      oN = (e, t) => {
        let {
          active: r,
          origin: n,
          start: i,
          immediate: a,
          renderType: s,
          verbose: o,
          actionItem: l,
          destination: p,
          destinationKeys: c,
          pluginDuration: f,
          instanceDelay: g,
          customEasingFn: d,
          skipMotion: h
        } = e, m = l.config.easing, {
          duration: u,
          delay: y
        } = l.config;
        f != null && (u = f), y = g ? ? y, s === nN ? u = 0 : (a || h) && (u = y = 0);
        let {
          now: v
        } = t.payload;
        if (r && n) {
          let E = v - (i + y);
          if (o) {
            let A = v - i,
              D = u + y,
              w = Jn(Math.min(Math.max(0, A / D), 1));
            e = (0, Tr.set)(e, "verboseTimeElapsed", D * w)
          }
          if (E < 0) return e;
          let b = Jn(Math.min(Math.max(0, E / u), 1)),
            I = Dm(m, b, d),
            S = {},
            _ = null;
          return c.length && (_ = c.reduce((A, D) => {
            let w = p[D],
              O = parseFloat(n[D]) || 0,
              M = (parseFloat(w) - O) * I + O;
            return A[D] = M, A
          }, {})), S.current = _, S.position = b, b === 1 && (S.active = !1, S.complete = !0), (0, Tr.merge)(e, S)
        }
        return e
      },
      lN = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case QD:
            return t.payload.ixInstances || Object.freeze({});
          case $D:
            return Object.freeze({});
          case ZD: {
            let {
              instanceId: r,
              elementId: n,
              actionItem: i,
              eventId: a,
              eventTarget: s,
              eventStateKey: o,
              actionListId: l,
              groupIndex: p,
              isCarrier: c,
              origin: f,
              destination: g,
              immediate: d,
              verbose: h,
              continuous: m,
              parameterId: u,
              actionGroups: y,
              smoothing: v,
              restingValue: E,
              pluginInstance: b,
              pluginDuration: I,
              instanceDelay: S,
              skipMotion: _,
              skipToValue: A
            } = t.payload, {
              actionTypeId: D
            } = i, w = iN(D), O = aN(w, D), V = Object.keys(g).filter(L => g[L] != null && typeof g[L] != "string"), {
              easing: M
            } = i.config;
            return (0, Tr.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: f,
              destination: g,
              destinationKeys: V,
              immediate: d,
              verbose: h,
              current: null,
              actionItem: i,
              actionTypeId: D,
              eventId: a,
              eventTarget: s,
              eventStateKey: o,
              actionListId: l,
              groupIndex: p,
              renderType: w,
              isCarrier: c,
              styleProp: O,
              continuous: m,
              parameterId: u,
              actionGroups: y,
              smoothing: v,
              restingValue: E,
              pluginInstance: b,
              pluginDuration: I,
              instanceDelay: S,
              skipMotion: _,
              skipToValue: A,
              customEasingFn: Array.isArray(M) && M.length === 4 ? rN(M) : void 0
            })
          }
          case JD: {
            let {
              instanceId: r,
              time: n
            } = t.payload;
            return (0, Tr.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n
            })
          }
          case eN: {
            let {
              instanceId: r
            } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              {
                length: a
              } = i;
            for (let s = 0; s < a; s++) {
              let o = i[s];
              o !== r && (n[o] = e[o])
            }
            return n
          }
          case tN: {
            let r = e,
              n = Object.keys(e),
              {
                length: i
              } = n;
            for (let a = 0; a < i; a++) {
              let s = n[a],
                o = e[s],
                l = o.continuous ? sN : oN;
              r = (0, Tr.set)(r, s, l(o, t))
            }
            return r
          }
          default:
            return e
        }
      }
  });
  var km = T(qs => {
    "use strict";
    Object.defineProperty(qs, "__esModule", {
      value: !0
    });
    Object.defineProperty(qs, "ixParameters", {
      enumerable: !0,
      get: function () {
        return pN
      }
    });
    var uN = ke(),
      {
        IX2_RAW_DATA_IMPORTED: cN,
        IX2_SESSION_STOPPED: fN,
        IX2_PARAMETER_CHANGED: hN
      } = uN.IX2EngineActionTypes,
      pN = (e = {}, t) => {
        switch (t.type) {
          case cN:
            return t.payload.ixParameters || {};
          case fN:
            return {};
          case hN: {
            let {
              key: r,
              value: n
            } = t.payload;
            return e[r] = n, e
          }
          default:
            return e
        }
      }
  });
  var Vm = T(Gs => {
    "use strict";
    Object.defineProperty(Gs, "__esModule", {
      value: !0
    });
    Object.defineProperty(Gs, "default", {
      enumerable: !0,
      get: function () {
        return IN
      }
    });
    var dN = ya(),
      mN = Zu(),
      gN = yc(),
      yN = Ec(),
      vN = Vt(),
      EN = Nm(),
      bN = km(),
      {
        ixElements: TN
      } = vN.IX2ElementsReducer,
      IN = (0, dN.combineReducers)({
        ixData: mN.ixData,
        ixRequest: gN.ixRequest,
        ixSession: yN.ixSession,
        ixElements: TN,
        ixInstances: EN.ixInstances,
        ixParameters: bN.ixParameters
      })
  });
  var Gm = T((iX, qm) => {
    var _N = vt(),
      SN = xe(),
      AN = ut(),
      xN = "[object String]";

    function CN(e) {
      return typeof e == "string" || !SN(e) && AN(e) && _N(e) == xN
    }
    qm.exports = CN
  });
  var Um = T((aX, Bm) => {
    var PN = Za(),
      ON = PN("length");
    Bm.exports = ON
  });
  var Hm = T((sX, zm) => {
    var wN = "\\ud800-\\udfff",
      RN = "\\u0300-\\u036f",
      MN = "\\ufe20-\\ufe2f",
      LN = "\\u20d0-\\u20ff",
      FN = RN + MN + LN,
      DN = "\\ufe0e\\ufe0f",
      NN = "\\u200d",
      kN = RegExp("[" + NN + wN + FN + DN + "]");

    function VN(e) {
      return kN.test(e)
    }
    zm.exports = VN
  });
  var Jm = T((oX, Zm) => {
    var Xm = "\\ud800-\\udfff",
      qN = "\\u0300-\\u036f",
      GN = "\\ufe20-\\ufe2f",
      BN = "\\u20d0-\\u20ff",
      UN = qN + GN + BN,
      zN = "\\ufe0e\\ufe0f",
      HN = "[" + Xm + "]",
      Bs = "[" + UN + "]",
      Us = "\\ud83c[\\udffb-\\udfff]",
      WN = "(?:" + Bs + "|" + Us + ")",
      jm = "[^" + Xm + "]",
      Ym = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Km = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      XN = "\\u200d",
      Qm = WN + "?",
      $m = "[" + zN + "]?",
      jN = "(?:" + XN + "(?:" + [jm, Ym, Km].join("|") + ")" + $m + Qm + ")*",
      YN = $m + Qm + jN,
      KN = "(?:" + [jm + Bs + "?", Bs, Ym, Km, HN].join("|") + ")",
      Wm = RegExp(Us + "(?=" + Us + ")|" + KN + YN, "g");

    function QN(e) {
      for (var t = Wm.lastIndex = 0; Wm.test(e);) ++t;
      return t
    }
    Zm.exports = QN
  });
  var tg = T((lX, eg) => {
    var $N = Um(),
      ZN = Hm(),
      JN = Jm();

    function e3(e) {
      return ZN(e) ? JN(e) : $N(e)
    }
    eg.exports = e3
  });
  var ng = T((uX, rg) => {
    var t3 = Mn(),
      r3 = Ln(),
      n3 = Lt(),
      i3 = Gm(),
      a3 = tg(),
      s3 = "[object Map]",
      o3 = "[object Set]";

    function l3(e) {
      if (e == null) return 0;
      if (n3(e)) return i3(e) ? a3(e) : e.length;
      var t = r3(e);
      return t == s3 || t == o3 ? e.size : t3(e).length
    }
    rg.exports = l3
  });
  var ag = T((cX, ig) => {
    var u3 = "Expected a function";

    function c3(e) {
      if (typeof e != "function") throw new TypeError(u3);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2])
        }
        return !e.apply(this, t)
      }
    }
    ig.exports = c3
  });
  var zs = T((fX, sg) => {
    var f3 = Et(),
      h3 = function () {
        try {
          var e = f3(Object, "defineProperty");
          return e({}, "", {}), e
        } catch {}
      }();
    sg.exports = h3
  });
  var Hs = T((hX, lg) => {
    var og = zs();

    function p3(e, t, r) {
      t == "__proto__" && og ? og(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : e[t] = r
    }
    lg.exports = p3
  });
  var cg = T((pX, ug) => {
    var d3 = Hs(),
      m3 = In(),
      g3 = Object.prototype,
      y3 = g3.hasOwnProperty;

    function v3(e, t, r) {
      var n = e[t];
      (!(y3.call(e, t) && m3(n, r)) || r === void 0 && !(t in e)) && d3(e, t, r)
    }
    ug.exports = v3
  });
  var pg = T((dX, hg) => {
    var E3 = cg(),
      b3 = Vr(),
      T3 = Pn(),
      fg = Je(),
      I3 = fr();

    function _3(e, t, r, n) {
      if (!fg(e)) return e;
      t = b3(t, e);
      for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a;) {
        var l = I3(t[i]),
          p = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
        if (i != s) {
          var c = o[l];
          p = n ? n(c, l, o) : void 0, p === void 0 && (p = fg(c) ? c : T3(t[i + 1]) ? [] : {})
        }
        E3(o, l, p), o = o[l]
      }
      return e
    }
    hg.exports = _3
  });
  var mg = T((mX, dg) => {
    var S3 = Nn(),
      A3 = pg(),
      x3 = Vr();

    function C3(e, t, r) {
      for (var n = -1, i = t.length, a = {}; ++n < i;) {
        var s = t[n],
          o = S3(e, s);
        r(o, s) && A3(a, x3(s, e), o)
      }
      return a
    }
    dg.exports = C3
  });
  var yg = T((gX, gg) => {
    var P3 = xn(),
      O3 = ia(),
      w3 = ka(),
      R3 = Na(),
      M3 = Object.getOwnPropertySymbols,
      L3 = M3 ? function (e) {
        for (var t = []; e;) P3(t, w3(e)), e = O3(e);
        return t
      } : R3;
    gg.exports = L3
  });
  var Eg = T((yX, vg) => {
    function F3(e) {
      var t = [];
      if (e != null)
        for (var r in Object(e)) t.push(r);
      return t
    }
    vg.exports = F3
  });
  var Tg = T((vX, bg) => {
    var D3 = Je(),
      N3 = Rn(),
      k3 = Eg(),
      V3 = Object.prototype,
      q3 = V3.hasOwnProperty;

    function G3(e) {
      if (!D3(e)) return k3(e);
      var t = N3(e),
        r = [];
      for (var n in e) n == "constructor" && (t || !q3.call(e, n)) || r.push(n);
      return r
    }
    bg.exports = G3
  });
  var _g = T((EX, Ig) => {
    var B3 = qa(),
      U3 = Tg(),
      z3 = Lt();

    function H3(e) {
      return z3(e) ? B3(e, !0) : U3(e)
    }
    Ig.exports = H3
  });
  var Ag = T((bX, Sg) => {
    var W3 = Da(),
      X3 = yg(),
      j3 = _g();

    function Y3(e) {
      return W3(e, j3, X3)
    }
    Sg.exports = Y3
  });
  var Cg = T((TX, xg) => {
    var K3 = $a(),
      Q3 = bt(),
      $3 = mg(),
      Z3 = Ag();

    function J3(e, t) {
      if (e == null) return {};
      var r = K3(Z3(e), function (n) {
        return [n]
      });
      return t = Q3(t), $3(e, r, function (n, i) {
        return t(n, i[0])
      })
    }
    xg.exports = J3
  });
  var Og = T((IX, Pg) => {
    var e5 = bt(),
      t5 = ag(),
      r5 = Cg();

    function n5(e, t) {
      return r5(e, t5(e5(t)))
    }
    Pg.exports = n5
  });
  var Rg = T((_X, wg) => {
    var i5 = Mn(),
      a5 = Ln(),
      s5 = Mr(),
      o5 = xe(),
      l5 = Lt(),
      u5 = Cn(),
      c5 = Rn(),
      f5 = wn(),
      h5 = "[object Map]",
      p5 = "[object Set]",
      d5 = Object.prototype,
      m5 = d5.hasOwnProperty;

    function g5(e) {
      if (e == null) return !0;
      if (l5(e) && (o5(e) || typeof e == "string" || typeof e.splice == "function" || u5(e) || f5(e) || s5(e))) return !e.length;
      var t = a5(e);
      if (t == h5 || t == p5) return !e.size;
      if (c5(e)) return !i5(e).length;
      for (var r in e)
        if (m5.call(e, r)) return !1;
      return !0
    }
    wg.exports = g5
  });
  var Lg = T((SX, Mg) => {
    var y5 = Hs(),
      v5 = Ss(),
      E5 = bt();

    function b5(e, t) {
      var r = {};
      return t = E5(t, 3), v5(e, function (n, i, a) {
        y5(r, i, t(n, i, a))
      }), r
    }
    Mg.exports = b5
  });
  var Dg = T((AX, Fg) => {
    function T5(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
      return e
    }
    Fg.exports = T5
  });
  var kg = T((xX, Ng) => {
    var I5 = Vn();

    function _5(e) {
      return typeof e == "function" ? e : I5
    }
    Ng.exports = _5
  });
  var qg = T((CX, Vg) => {
    var S5 = Dg(),
      A5 = As(),
      x5 = kg(),
      C5 = xe();

    function P5(e, t) {
      var r = C5(e) ? S5 : A5;
      return r(e, x5(t))
    }
    Vg.exports = P5
  });
  var Bg = T((PX, Gg) => {
    var O5 = Ye(),
      w5 = function () {
        return O5.Date.now()
      };
    Gg.exports = w5
  });
  var Hg = T((OX, zg) => {
    var R5 = Je(),
      Ws = Bg(),
      Ug = qn(),
      M5 = "Expected a function",
      L5 = Math.max,
      F5 = Math.min;

    function D5(e, t, r) {
      var n, i, a, s, o, l, p = 0,
        c = !1,
        f = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(M5);
      t = Ug(t) || 0, R5(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? L5(Ug(r.maxWait) || 0, t) : a, g = "trailing" in r ? !!r.trailing : g);

      function d(S) {
        var _ = n,
          A = i;
        return n = i = void 0, p = S, s = e.apply(A, _), s
      }

      function h(S) {
        return p = S, o = setTimeout(y, t), c ? d(S) : s
      }

      function m(S) {
        var _ = S - l,
          A = S - p,
          D = t - _;
        return f ? F5(D, a - A) : D
      }

      function u(S) {
        var _ = S - l,
          A = S - p;
        return l === void 0 || _ >= t || _ < 0 || f && A >= a
      }

      function y() {
        var S = Ws();
        if (u(S)) return v(S);
        o = setTimeout(y, m(S))
      }

      function v(S) {
        return o = void 0, g && n ? d(S) : (n = i = void 0, s)
      }

      function E() {
        o !== void 0 && clearTimeout(o), p = 0, n = l = i = o = void 0
      }

      function b() {
        return o === void 0 ? s : v(Ws())
      }

      function I() {
        var S = Ws(),
          _ = u(S);
        if (n = arguments, i = this, l = S, _) {
          if (o === void 0) return h(l);
          if (f) return clearTimeout(o), o = setTimeout(y, t), d(l)
        }
        return o === void 0 && (o = setTimeout(y, t)), s
      }
      return I.cancel = E, I.flush = b, I
    }
    zg.exports = D5
  });
  var Xg = T((wX, Wg) => {
    var N5 = Hg(),
      k5 = Je(),
      V5 = "Expected a function";

    function q5(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(V5);
      return k5(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), N5(e, t, {
        leading: n,
        maxWait: t,
        trailing: i
      })
    }
    Wg.exports = q5
  });
  var ei = T(Xs => {
    "use strict";
    Object.defineProperty(Xs, "__esModule", {
      value: !0
    });

    function G5(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    G5(Xs, {
      actionListPlaybackChanged: function () {
        return xk
      },
      animationFrameChanged: function () {
        return bk
      },
      clearRequested: function () {
        return gk
      },
      elementStateChanged: function () {
        return Ak
      },
      eventListenerAdded: function () {
        return yk
      },
      eventStateChanged: function () {
        return Ek
      },
      instanceAdded: function () {
        return Ik
      },
      instanceRemoved: function () {
        return Sk
      },
      instanceStarted: function () {
        return _k
      },
      mediaQueriesDefined: function () {
        return Pk
      },
      parameterChanged: function () {
        return Tk
      },
      playbackRequested: function () {
        return dk
      },
      previewRequested: function () {
        return pk
      },
      rawDataImported: function () {
        return uk
      },
      sessionInitialized: function () {
        return ck
      },
      sessionStarted: function () {
        return fk
      },
      sessionStopped: function () {
        return hk
      },
      stopRequested: function () {
        return mk
      },
      testFrameRendered: function () {
        return vk
      },
      viewportWidthChanged: function () {
        return Ck
      }
    });
    var jg = ke(),
      B5 = Vt(),
      {
        IX2_RAW_DATA_IMPORTED: U5,
        IX2_SESSION_INITIALIZED: z5,
        IX2_SESSION_STARTED: H5,
        IX2_SESSION_STOPPED: W5,
        IX2_PREVIEW_REQUESTED: X5,
        IX2_PLAYBACK_REQUESTED: j5,
        IX2_STOP_REQUESTED: Y5,
        IX2_CLEAR_REQUESTED: K5,
        IX2_EVENT_LISTENER_ADDED: Q5,
        IX2_TEST_FRAME_RENDERED: $5,
        IX2_EVENT_STATE_CHANGED: Z5,
        IX2_ANIMATION_FRAME_CHANGED: J5,
        IX2_PARAMETER_CHANGED: ek,
        IX2_INSTANCE_ADDED: tk,
        IX2_INSTANCE_STARTED: rk,
        IX2_INSTANCE_REMOVED: nk,
        IX2_ELEMENT_STATE_CHANGED: ik,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: ak,
        IX2_VIEWPORT_WIDTH_CHANGED: sk,
        IX2_MEDIA_QUERIES_DEFINED: ok
      } = jg.IX2EngineActionTypes,
      {
        reifyState: lk
      } = B5.IX2VanillaUtils,
      uk = e => ({
        type: U5,
        payload: {
          ...lk(e)
        }
      }),
      ck = ({
        hasBoundaryNodes: e,
        reducedMotion: t
      }) => ({
        type: z5,
        payload: {
          hasBoundaryNodes: e,
          reducedMotion: t
        }
      }),
      fk = () => ({
        type: H5
      }),
      hk = () => ({
        type: W5
      }),
      pk = ({
        rawData: e,
        defer: t
      }) => ({
        type: X5,
        payload: {
          defer: t,
          rawData: e
        }
      }),
      dk = ({
        actionTypeId: e = jg.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: r,
        eventId: n,
        allowEvents: i,
        immediate: a,
        testManual: s,
        verbose: o,
        rawData: l
      }) => ({
        type: j5,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: r,
          testManual: s,
          eventId: n,
          allowEvents: i,
          immediate: a,
          verbose: o,
          rawData: l
        }
      }),
      mk = e => ({
        type: Y5,
        payload: {
          actionListId: e
        }
      }),
      gk = () => ({
        type: K5
      }),
      yk = (e, t) => ({
        type: Q5,
        payload: {
          target: e,
          listenerParams: t
        }
      }),
      vk = (e = 1) => ({
        type: $5,
        payload: {
          step: e
        }
      }),
      Ek = (e, t) => ({
        type: Z5,
        payload: {
          stateKey: e,
          newState: t
        }
      }),
      bk = (e, t) => ({
        type: J5,
        payload: {
          now: e,
          parameters: t
        }
      }),
      Tk = (e, t) => ({
        type: ek,
        payload: {
          key: e,
          value: t
        }
      }),
      Ik = e => ({
        type: tk,
        payload: {
          ...e
        }
      }),
      _k = (e, t) => ({
        type: rk,
        payload: {
          instanceId: e,
          time: t
        }
      }),
      Sk = e => ({
        type: nk,
        payload: {
          instanceId: e
        }
      }),
      Ak = (e, t, r, n) => ({
        type: ik,
        payload: {
          elementId: e,
          actionTypeId: t,
          current: r,
          actionItem: n
        }
      }),
      xk = ({
        actionListId: e,
        isPlaying: t
      }) => ({
        type: ak,
        payload: {
          actionListId: e,
          isPlaying: t
        }
      }),
      Ck = ({
        width: e,
        mediaQueries: t
      }) => ({
        type: sk,
        payload: {
          width: e,
          mediaQueries: t
        }
      }),
      Pk = () => ({
        type: ok
      })
  });
  var Qg = T(Ys => {
    "use strict";
    Object.defineProperty(Ys, "__esModule", {
      value: !0
    });

    function Ok(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    Ok(Ys, {
      elementContains: function () {
        return Bk
      },
      getChildElements: function () {
        return zk
      },
      getClosestElement: function () {
        return Wk
      },
      getProperty: function () {
        return Nk
      },
      getQuerySelector: function () {
        return Vk
      },
      getRefType: function () {
        return Xk
      },
      getSiblingElements: function () {
        return Hk
      },
      getStyle: function () {
        return Dk
      },
      getValidDocument: function () {
        return qk
      },
      isSiblingNode: function () {
        return Uk
      },
      matchSelector: function () {
        return kk
      },
      queryDocument: function () {
        return Gk
      },
      setStyle: function () {
        return Fk
      }
    });
    var wk = Vt(),
      Rk = ke(),
      {
        ELEMENT_MATCHES: js
      } = wk.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: Yg,
        HTML_ELEMENT: Mk,
        PLAIN_OBJECT: Lk,
        WF_PAGE: Kg
      } = Rk.IX2EngineConstants;

    function Fk(e, t, r) {
      e.style[t] = r
    }

    function Dk(e, t) {
      if (t.startsWith("--")) return window.getComputedStyle(document.documentElement).getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t]
    }

    function Nk(e, t) {
      return e[t]
    }

    function kk(e) {
      return t => t[js](e)
    }

    function Vk({
      id: e,
      selector: t
    }) {
      if (e) {
        let r = e;
        if (e.indexOf(Yg) !== -1) {
          let n = e.split(Yg),
            i = n[0];
          if (r = n[1], i !== document.documentElement.getAttribute(Kg)) return null
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
    }

    function qk(e) {
      return e == null || e === document.documentElement.getAttribute(Kg) ? document : null
    }

    function Gk(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Bk(e, t) {
      return e.contains(t)
    }

    function Uk(e, t) {
      return e !== t && e.parentNode === t.parentNode
    }

    function zk(e) {
      let t = [];
      for (let r = 0, {
          length: n
        } = e || []; r < n; r++) {
        let {
          children: i
        } = e[r], {
          length: a
        } = i;
        if (a)
          for (let s = 0; s < a; s++) t.push(i[s])
      }
      return t
    }

    function Hk(e = []) {
      let t = [],
        r = [];
      for (let n = 0, {
          length: i
        } = e; n < i; n++) {
        let {
          parentNode: a
        } = e[n];
        if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1) continue;
        r.push(a);
        let s = a.firstElementChild;
        for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
      }
      return t
    }
    var Wk = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
      if (!document.documentElement.contains(e)) return null;
      let r = e;
      do {
        if (r[js] && r[js](t)) return r;
        r = r.parentNode
      } while (r != null);
      return null
    };

    function Xk(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? Mk : Lk : null
    }
  });
  var Ks = T((LX, Zg) => {
    var jk = Je(),
      $g = Object.create,
      Yk = function () {
        function e() {}
        return function (t) {
          if (!jk(t)) return {};
          if ($g) return $g(t);
          e.prototype = t;
          var r = new e;
          return e.prototype = void 0, r
        }
      }();
    Zg.exports = Yk
  });
  var ti = T((FX, Jg) => {
    function Kk() {}
    Jg.exports = Kk
  });
  var ni = T((DX, ey) => {
    var Qk = Ks(),
      $k = ti();

    function ri(e, t) {
      this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    ri.prototype = Qk($k.prototype);
    ri.prototype.constructor = ri;
    ey.exports = ri
  });
  var iy = T((NX, ny) => {
    var ty = er(),
      Zk = Mr(),
      Jk = xe(),
      ry = ty ? ty.isConcatSpreadable : void 0;

    function eV(e) {
      return Jk(e) || Zk(e) || !!(ry && e && e[ry])
    }
    ny.exports = eV
  });
  var oy = T((kX, sy) => {
    var tV = xn(),
      rV = iy();

    function ay(e, t, r, n, i) {
      var a = -1,
        s = e.length;
      for (r || (r = rV), i || (i = []); ++a < s;) {
        var o = e[a];
        t > 0 && r(o) ? t > 1 ? ay(o, t - 1, r, n, i) : tV(i, o) : n || (i[i.length] = o)
      }
      return i
    }
    sy.exports = ay
  });
  var uy = T((VX, ly) => {
    var nV = oy();

    function iV(e) {
      var t = e == null ? 0 : e.length;
      return t ? nV(e, 1) : []
    }
    ly.exports = iV
  });
  var fy = T((qX, cy) => {
    function aV(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2])
      }
      return e.apply(t, r)
    }
    cy.exports = aV
  });
  var dy = T((GX, py) => {
    var sV = fy(),
      hy = Math.max;

    function oV(e, t, r) {
      return t = hy(t === void 0 ? e.length - 1 : t, 0),
        function () {
          for (var n = arguments, i = -1, a = hy(n.length - t, 0), s = Array(a); ++i < a;) s[i] = n[t + i];
          i = -1;
          for (var o = Array(t + 1); ++i < t;) o[i] = n[i];
          return o[t] = r(s), sV(e, this, o)
        }
    }
    py.exports = oV
  });
  var gy = T((BX, my) => {
    function lV(e) {
      return function () {
        return e
      }
    }
    my.exports = lV
  });
  var Ey = T((UX, vy) => {
    var uV = gy(),
      yy = zs(),
      cV = Vn(),
      fV = yy ? function (e, t) {
        return yy(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: uV(t),
          writable: !0
        })
      } : cV;
    vy.exports = fV
  });
  var Ty = T((zX, by) => {
    var hV = 800,
      pV = 16,
      dV = Date.now;

    function mV(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = dV(),
          i = pV - (n - r);
        if (r = n, i > 0) {
          if (++t >= hV) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
      }
    }
    by.exports = mV
  });
  var _y = T((HX, Iy) => {
    var gV = Ey(),
      yV = Ty(),
      vV = yV(gV);
    Iy.exports = vV
  });
  var Ay = T((WX, Sy) => {
    var EV = uy(),
      bV = dy(),
      TV = _y();

    function IV(e) {
      return TV(bV(e, void 0, EV), e + "")
    }
    Sy.exports = IV
  });
  var Py = T((XX, Cy) => {
    var xy = Ga(),
      _V = xy && new xy;
    Cy.exports = _V
  });
  var wy = T((jX, Oy) => {
    function SV() {}
    Oy.exports = SV
  });
  var Qs = T((YX, My) => {
    var Ry = Py(),
      AV = wy(),
      xV = Ry ? function (e) {
        return Ry.get(e)
      } : AV;
    My.exports = xV
  });
  var Fy = T((KX, Ly) => {
    var CV = {};
    Ly.exports = CV
  });
  var $s = T((QX, Ny) => {
    var Dy = Fy(),
      PV = Object.prototype,
      OV = PV.hasOwnProperty;

    function wV(e) {
      for (var t = e.name + "", r = Dy[t], n = OV.call(Dy, t) ? r.length : 0; n--;) {
        var i = r[n],
          a = i.func;
        if (a == null || a == e) return i.name
      }
      return t
    }
    Ny.exports = wV
  });
  var ai = T(($X, ky) => {
    var RV = Ks(),
      MV = ti(),
      LV = 4294967295;

    function ii(e) {
      this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = LV, this.__views__ = []
    }
    ii.prototype = RV(MV.prototype);
    ii.prototype.constructor = ii;
    ky.exports = ii
  });
  var qy = T((ZX, Vy) => {
    function FV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
      return t
    }
    Vy.exports = FV
  });
  var By = T((JX, Gy) => {
    var DV = ai(),
      NV = ni(),
      kV = qy();

    function VV(e) {
      if (e instanceof DV) return e.clone();
      var t = new NV(e.__wrapped__, e.__chain__);
      return t.__actions__ = kV(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
    Gy.exports = VV
  });
  var Hy = T((ej, zy) => {
    var qV = ai(),
      Uy = ni(),
      GV = ti(),
      BV = xe(),
      UV = ut(),
      zV = By(),
      HV = Object.prototype,
      WV = HV.hasOwnProperty;

    function si(e) {
      if (UV(e) && !BV(e) && !(e instanceof qV)) {
        if (e instanceof Uy) return e;
        if (WV.call(e, "__wrapped__")) return zV(e)
      }
      return new Uy(e)
    }
    si.prototype = GV.prototype;
    si.prototype.constructor = si;
    zy.exports = si
  });
  var Xy = T((tj, Wy) => {
    var XV = ai(),
      jV = Qs(),
      YV = $s(),
      KV = Hy();

    function QV(e) {
      var t = YV(e),
        r = KV[t];
      if (typeof r != "function" || !(t in XV.prototype)) return !1;
      if (e === r) return !0;
      var n = jV(r);
      return !!n && e === n[0]
    }
    Wy.exports = QV
  });
  var Qy = T((rj, Ky) => {
    var jy = ni(),
      $V = Ay(),
      ZV = Qs(),
      Zs = $s(),
      JV = xe(),
      Yy = Xy(),
      e6 = "Expected a function",
      t6 = 8,
      r6 = 32,
      n6 = 128,
      i6 = 256;

    function a6(e) {
      return $V(function (t) {
        var r = t.length,
          n = r,
          i = jy.prototype.thru;
        for (e && t.reverse(); n--;) {
          var a = t[n];
          if (typeof a != "function") throw new TypeError(e6);
          if (i && !s && Zs(a) == "wrapper") var s = new jy([], !0)
        }
        for (n = s ? n : r; ++n < r;) {
          a = t[n];
          var o = Zs(a),
            l = o == "wrapper" ? ZV(a) : void 0;
          l && Yy(l[0]) && l[1] == (n6 | t6 | r6 | i6) && !l[4].length && l[9] == 1 ? s = s[Zs(l[0])].apply(s, l[3]) : s = a.length == 1 && Yy(a) ? s[o]() : s.thru(a)
        }
        return function () {
          var p = arguments,
            c = p[0];
          if (s && p.length == 1 && JV(c)) return s.plant(c).value();
          for (var f = 0, g = r ? t[f].apply(this, p) : c; ++f < r;) g = t[f].call(this, g);
          return g
        }
      })
    }
    Ky.exports = a6
  });
  var Zy = T((nj, $y) => {
    var s6 = Qy(),
      o6 = s6();
    $y.exports = o6
  });
  var e0 = T((ij, Jy) => {
    function l6(e, t, r) {
      return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
    }
    Jy.exports = l6
  });
  var r0 = T((aj, t0) => {
    var u6 = e0(),
      Js = qn();

    function c6(e, t, r) {
      return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Js(r), r = r === r ? r : 0), t !== void 0 && (t = Js(t), t = t === t ? t : 0), u6(Js(e), t, r)
    }
    t0.exports = c6
  });
  var b0 = T(ao => {
    "use strict";
    Object.defineProperty(ao, "__esModule", {
      value: !0
    });
    Object.defineProperty(ao, "default", {
      enumerable: !0,
      get: function () {
        return X6
      }
    });
    var f6 = io(Zy()),
      h6 = io(kn()),
      p6 = io(r0()),
      qt = ke(),
      eo = so(),
      oi = ei(),
      d6 = Vt();

    function io(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var {
      MOUSE_CLICK: m6,
      MOUSE_SECOND_CLICK: g6,
      MOUSE_DOWN: y6,
      MOUSE_UP: v6,
      MOUSE_OVER: E6,
      MOUSE_OUT: b6,
      DROPDOWN_CLOSE: T6,
      DROPDOWN_OPEN: I6,
      SLIDER_ACTIVE: _6,
      SLIDER_INACTIVE: S6,
      TAB_ACTIVE: A6,
      TAB_INACTIVE: x6,
      NAVBAR_CLOSE: C6,
      NAVBAR_OPEN: P6,
      MOUSE_MOVE: O6,
      PAGE_SCROLL_DOWN: f0,
      SCROLL_INTO_VIEW: h0,
      SCROLL_OUT_OF_VIEW: w6,
      PAGE_SCROLL_UP: R6,
      SCROLLING_IN_VIEW: M6,
      PAGE_FINISH: p0,
      ECOMMERCE_CART_CLOSE: L6,
      ECOMMERCE_CART_OPEN: F6,
      PAGE_START: d0,
      PAGE_SCROLL: D6
    } = qt.EventTypeConsts, to = "COMPONENT_ACTIVE", m0 = "COMPONENT_INACTIVE", {
      COLON_DELIMITER: n0
    } = qt.IX2EngineConstants, {
      getNamespacedParameterId: i0
    } = d6.IX2VanillaUtils, g0 = e => t => typeof t == "object" && e(t) ? !0 : t, jr = g0(({
      element: e,
      nativeEvent: t
    }) => e === t.target), N6 = g0(({
      element: e,
      nativeEvent: t
    }) => e.contains(t.target)), nt = (0, f6.default)([jr, N6]), y0 = (e, t) => {
      if (t) {
        let {
          ixData: r
        } = e.getState(), {
          events: n
        } = r, i = n[t];
        if (i && !V6[i.eventTypeId]) return i
      }
      return null
    }, k6 = ({
      store: e,
      event: t
    }) => {
      let {
        action: r
      } = t, {
        autoStopEventId: n
      } = r.config;
      return !!y0(e, n)
    }, qe = ({
      store: e,
      event: t,
      element: r,
      eventStateKey: n
    }, i) => {
      let {
        action: a,
        id: s
      } = t, {
        actionListId: o,
        autoStopEventId: l
      } = a.config, p = y0(e, l);
      return p && (0, eo.stopActionGroup)({
        store: e,
        eventId: l,
        eventTarget: r,
        eventStateKey: l + n0 + n.split(n0)[1],
        actionListId: (0, h6.default)(p, "action.config.actionListId")
      }), (0, eo.stopActionGroup)({
        store: e,
        eventId: s,
        eventTarget: r,
        eventStateKey: n,
        actionListId: o
      }), (0, eo.startActionGroup)({
        store: e,
        eventId: s,
        eventTarget: r,
        eventStateKey: n,
        actionListId: o
      }), i
    }, Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Yr = {
      handler: Ke(nt, qe)
    }, v0 = {
      ...Yr,
      types: [to, m0].join(" ")
    }, ro = [{
      target: window,
      types: "resize orientationchange",
      throttle: !0
    }, {
      target: document,
      types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
      throttle: !0
    }], a0 = "mouseover mouseout", no = {
      types: ro
    }, V6 = {
      PAGE_START: d0,
      PAGE_FINISH: p0
    }, Xr = (() => {
      let e = window.pageXOffset !== void 0,
        r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
      return () => ({
        scrollLeft: e ? window.pageXOffset : r.scrollLeft,
        scrollTop: e ? window.pageYOffset : r.scrollTop,
        stiffScrollTop: (0, p6.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
        scrollWidth: r.scrollWidth,
        scrollHeight: r.scrollHeight,
        clientWidth: r.clientWidth,
        clientHeight: r.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      })
    })(), q6 = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), G6 = ({
      element: e,
      nativeEvent: t
    }) => {
      let {
        type: r,
        target: n,
        relatedTarget: i
      } = t, a = e.contains(n);
      if (r === "mouseover" && a) return !0;
      let s = e.contains(i);
      return !!(r === "mouseout" && a && s)
    }, B6 = e => {
      let {
        element: t,
        event: {
          config: r
        }
      } = e, {
        clientWidth: n,
        clientHeight: i
      } = Xr(), a = r.scrollOffsetValue, l = r.scrollOffsetUnit === "PX" ? a : i * (a || 0) / 100;
      return q6(t.getBoundingClientRect(), {
        left: 0,
        top: l,
        right: n,
        bottom: i - l
      })
    }, E0 = e => (t, r) => {
      let {
        type: n
      } = t.nativeEvent, i = [to, m0].indexOf(n) !== -1 ? n === to : r.isActive, a = {
        ...r,
        isActive: i
      };
      return (!r || a.isActive !== r.isActive) && e(t, a) || a
    }, s0 = e => (t, r) => {
      let n = {
        elementHovered: G6(t)
      };
      return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
    }, U6 = e => (t, r) => {
      let n = {
        ...r,
        elementVisible: B6(t)
      };
      return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
    }, o0 = e => (t, r = {}) => {
      let {
        stiffScrollTop: n,
        scrollHeight: i,
        innerHeight: a
      } = Xr(), {
        event: {
          config: s,
          eventTypeId: o
        }
      } = t, {
        scrollOffsetValue: l,
        scrollOffsetUnit: p
      } = s, c = p === "PX", f = i - a, g = Number((n / f).toFixed(2));
      if (r && r.percentTop === g) return r;
      let d = (c ? l : a * (l || 0) / 100) / f,
        h, m, u = 0;
      r && (h = g > r.percentTop, m = r.scrollingDown !== h, u = m ? g : r.anchorTop);
      let y = o === f0 ? g >= u + d : g <= u - d,
        v = {
          ...r,
          percentTop: g,
          inBounds: y,
          anchorTop: u,
          scrollingDown: h
        };
      return r && y && (m || v.inBounds !== r.inBounds) && e(t, v) || v
    }, z6 = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, H6 = e => (t, r) => {
      let n = {
        finished: document.readyState === "complete"
      };
      return n.finished && !(r && r.finshed) && e(t), n
    }, W6 = e => (t, r) => {
      let n = {
        started: !0
      };
      return r || e(t), n
    }, l0 = e => (t, r = {
      clickCount: 0
    }) => {
      let n = {
        clickCount: r.clickCount % 2 + 1
      };
      return n.clickCount !== r.clickCount && e(t, n) || n
    }, li = (e = !0) => ({
      ...v0,
      handler: Ke(e ? nt : jr, E0((t, r) => r.isActive ? Yr.handler(t, r) : r))
    }), ui = (e = !0) => ({
      ...v0,
      handler: Ke(e ? nt : jr, E0((t, r) => r.isActive ? r : Yr.handler(t, r)))
    }), u0 = {
      ...no,
      handler: U6((e, t) => {
        let {
          elementVisible: r
        } = t, {
          event: n,
          store: i
        } = e, {
          ixData: a
        } = i.getState(), {
          events: s
        } = a;
        return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === h0 === r ? (qe(e), {
          ...t,
          triggered: !0
        }) : t
      })
    }, c0 = .05, X6 = {
      [_6]: li(),
      [S6]: ui(),
      [I6]: li(),
      [T6]: ui(),
      [P6]: li(!1),
      [C6]: ui(!1),
      [A6]: li(),
      [x6]: ui(),
      [F6]: {
        types: "ecommerce-cart-open",
        handler: Ke(nt, qe)
      },
      [L6]: {
        types: "ecommerce-cart-close",
        handler: Ke(nt, qe)
      },
      [m6]: {
        types: "click",
        handler: Ke(nt, l0((e, {
          clickCount: t
        }) => {
          k6(e) ? t === 1 && qe(e) : qe(e)
        }))
      },
      [g6]: {
        types: "click",
        handler: Ke(nt, l0((e, {
          clickCount: t
        }) => {
          t === 2 && qe(e)
        }))
      },
      [y6]: {
        ...Yr,
        types: "mousedown"
      },
      [v6]: {
        ...Yr,
        types: "mouseup"
      },
      [E6]: {
        types: a0,
        handler: Ke(nt, s0((e, t) => {
          t.elementHovered && qe(e)
        }))
      },
      [b6]: {
        types: a0,
        handler: Ke(nt, s0((e, t) => {
          t.elementHovered || qe(e)
        }))
      },
      [O6]: {
        types: "mousemove mouseout scroll",
        handler: ({
          store: e,
          element: t,
          eventConfig: r,
          nativeEvent: n,
          eventStateKey: i
        }, a = {
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0
        }) => {
          let {
            basedOn: s,
            selectedAxis: o,
            continuousParameterGroupId: l,
            reverse: p,
            restingState: c = 0
          } = r, {
            clientX: f = a.clientX,
            clientY: g = a.clientY,
            pageX: d = a.pageX,
            pageY: h = a.pageY
          } = n, m = o === "X_AXIS", u = n.type === "mouseout", y = c / 100, v = l, E = !1;
          switch (s) {
            case qt.EventBasedOn.VIEWPORT: {
              y = m ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
              break
            }
            case qt.EventBasedOn.PAGE: {
              let {
                scrollLeft: b,
                scrollTop: I,
                scrollWidth: S,
                scrollHeight: _
              } = Xr();
              y = m ? Math.min(b + d, S) / S : Math.min(I + h, _) / _;
              break
            }
            case qt.EventBasedOn.ELEMENT:
            default: {
              v = i0(i, l);
              let b = n.type.indexOf("mouse") === 0;
              if (b && nt({
                  element: t,
                  nativeEvent: n
                }) !== !0) break;
              let I = t.getBoundingClientRect(),
                {
                  left: S,
                  top: _,
                  width: A,
                  height: D
                } = I;
              if (!b && !z6({
                  left: f,
                  top: g
                }, I)) break;
              E = !0, y = m ? (f - S) / A : (g - _) / D;
              break
            }
          }
          return u && (y > 1 - c0 || y < c0) && (y = Math.round(y)), (s !== qt.EventBasedOn.ELEMENT || E || E !== a.elementHovered) && (y = p ? 1 - y : y, e.dispatch((0, oi.parameterChanged)(v, y))), {
            elementHovered: E,
            clientX: f,
            clientY: g,
            pageX: d,
            pageY: h
          }
        }
      },
      [D6]: {
        types: ro,
        handler: ({
          store: e,
          eventConfig: t
        }) => {
          let {
            continuousParameterGroupId: r,
            reverse: n
          } = t, {
            scrollTop: i,
            scrollHeight: a,
            clientHeight: s
          } = Xr(), o = i / (a - s);
          o = n ? 1 - o : o, e.dispatch((0, oi.parameterChanged)(r, o))
        }
      },
      [M6]: {
        types: ro,
        handler: ({
          element: e,
          store: t,
          eventConfig: r,
          eventStateKey: n
        }, i = {
          scrollPercent: 0
        }) => {
          let {
            scrollLeft: a,
            scrollTop: s,
            scrollWidth: o,
            scrollHeight: l,
            clientHeight: p
          } = Xr(), {
            basedOn: c,
            selectedAxis: f,
            continuousParameterGroupId: g,
            startsEntering: d,
            startsExiting: h,
            addEndOffset: m,
            addStartOffset: u,
            addOffsetValue: y = 0,
            endOffsetValue: v = 0
          } = r, E = f === "X_AXIS";
          if (c === qt.EventBasedOn.VIEWPORT) {
            let b = E ? a / o : s / l;
            return b !== i.scrollPercent && t.dispatch((0, oi.parameterChanged)(g, b)), {
              scrollPercent: b
            }
          } else {
            let b = i0(n, g),
              I = e.getBoundingClientRect(),
              S = (u ? y : 0) / 100,
              _ = (m ? v : 0) / 100;
            S = d ? S : 1 - S, _ = h ? _ : 1 - _;
            let A = I.top + Math.min(I.height * S, p),
              w = I.top + I.height * _ - A,
              O = Math.min(p + w, l),
              M = Math.min(Math.max(0, p - A), O) / O;
            return M !== i.scrollPercent && t.dispatch((0, oi.parameterChanged)(b, M)), {
              scrollPercent: M
            }
          }
        }
      },
      [h0]: u0,
      [w6]: u0,
      [f0]: {
        ...no,
        handler: o0((e, t) => {
          t.scrollingDown && qe(e)
        })
      },
      [R6]: {
        ...no,
        handler: o0((e, t) => {
          t.scrollingDown || qe(e)
        })
      },
      [p0]: {
        types: "readystatechange IX2_PAGE_UPDATE",
        handler: Ke(jr, H6(qe))
      },
      [d0]: {
        types: "readystatechange IX2_PAGE_UPDATE",
        handler: Ke(jr, W6(qe))
      }
    }
  });
  var so = T(go => {
    "use strict";
    Object.defineProperty(go, "__esModule", {
      value: !0
    });

    function j6(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    j6(go, {
      observeRequests: function () {
        return T8
      },
      startActionGroup: function () {
        return ho
      },
      startEngine: function () {
        return di
      },
      stopActionGroup: function () {
        return fo
      },
      stopAllActionGroups: function () {
        return w0
      },
      stopEngine: function () {
        return mi
      }
    });
    var Y6 = ft(ns()),
      _t = ft(kn()),
      K6 = ft(ng()),
      Q6 = ft(Og()),
      $6 = ft(Rg()),
      Z6 = ft(Lg()),
      Kr = ft(qg()),
      J6 = ft(Xg()),
      Ue = ke(),
      _0 = Vt(),
      _e = ei(),
      Ae = t8(Qg()),
      e8 = ft(b0());

    function ft(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function S0(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (S0 = function (n) {
        return n ? r : t
      })(e)
    }

    function t8(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = S0(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
    var r8 = Object.keys(Ue.QuickEffectIds),
      oo = e => r8.includes(e),
      {
        COLON_DELIMITER: lo,
        BOUNDARY_SELECTOR: ci,
        HTML_ELEMENT: A0,
        RENDER_GENERAL: n8,
        W_MOD_IX: T0
      } = Ue.IX2EngineConstants,
      {
        getAffectedElements: fi,
        getElementId: i8,
        getDestinationValues: uo,
        observeStore: Gt,
        getInstanceId: a8,
        renderHTMLElement: s8,
        clearAllStyles: x0,
        getMaxDurationItemIndex: o8,
        getComputedStyle: l8,
        getInstanceOrigin: u8,
        reduceListToGroup: c8,
        shouldNamespaceEventParameter: f8,
        getNamespacedParameterId: h8,
        shouldAllowMediaQuery: hi,
        cleanupHTMLElement: p8,
        clearObjectCache: d8,
        stringifyTarget: m8,
        mediaQueriesEqual: g8,
        shallowEqual: y8
      } = _0.IX2VanillaUtils,
      {
        isPluginType: pi,
        createPluginInstance: co,
        getPluginDuration: v8
      } = _0.IX2VanillaPlugins,
      I0 = navigator.userAgent,
      E8 = I0.match(/iPad/i) || I0.match(/iPhone/),
      b8 = 12;

    function T8(e) {
      Gt({
        store: e,
        select: ({
          ixRequest: t
        }) => t.preview,
        onChange: S8
      }), Gt({
        store: e,
        select: ({
          ixRequest: t
        }) => t.playback,
        onChange: A8
      }), Gt({
        store: e,
        select: ({
          ixRequest: t
        }) => t.stop,
        onChange: x8
      }), Gt({
        store: e,
        select: ({
          ixRequest: t
        }) => t.clear,
        onChange: C8
      })
    }

    function I8(e) {
      Gt({
        store: e,
        select: ({
          ixSession: t
        }) => t.mediaQueryKey,
        onChange: () => {
          mi(e), x0({
            store: e,
            elementApi: Ae
          }), di({
            store: e,
            allowEvents: !0
          }), C0()
        }
      })
    }

    function _8(e, t) {
      let r = Gt({
        store: e,
        select: ({
          ixSession: n
        }) => n.tick,
        onChange: n => {
          t(n), r()
        }
      })
    }

    function S8({
      rawData: e,
      defer: t
    }, r) {
      let n = () => {
        di({
          store: r,
          rawData: e,
          allowEvents: !0
        }), C0()
      };
      t ? setTimeout(n, 0) : n()
    }

    function C0() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function A8(e, t) {
      let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: a,
        allowEvents: s,
        immediate: o,
        testManual: l,
        verbose: p = !0
      } = e, {
        rawData: c
      } = e;
      if (n && i && c && o) {
        let f = c.actionLists[n];
        f && (c = c8({
          actionList: f,
          actionItemId: i,
          rawData: c
        }))
      }
      if (di({
          store: t,
          rawData: c,
          allowEvents: s,
          testManual: l
        }), n && r === Ue.ActionTypeConsts.GENERAL_START_ACTION || oo(r)) {
        fo({
          store: t,
          actionListId: n
        }), O0({
          store: t,
          actionListId: n,
          eventId: a
        });
        let f = ho({
          store: t,
          eventId: a,
          actionListId: n,
          immediate: o,
          verbose: p
        });
        p && f && t.dispatch((0, _e.actionListPlaybackChanged)({
          actionListId: n,
          isPlaying: !o
        }))
      }
    }

    function x8({
      actionListId: e
    }, t) {
      e ? fo({
        store: t,
        actionListId: e
      }) : w0({
        store: t
      }), mi(t)
    }

    function C8(e, t) {
      mi(t), x0({
        store: t,
        elementApi: Ae
      })
    }

    function di({
      store: e,
      rawData: t,
      allowEvents: r,
      testManual: n
    }) {
      let {
        ixSession: i
      } = e.getState();
      t && e.dispatch((0, _e.rawDataImported)(t)), i.active || (e.dispatch((0, _e.sessionInitialized)({
        hasBoundaryNodes: !!document.querySelector(ci),
        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })), r && (L8(e), P8(), e.getState().ixSession.hasDefinedMediaQueries && I8(e)), e.dispatch((0, _e.sessionStarted)()), O8(e, n))
    }

    function P8() {
      let {
        documentElement: e
      } = document;
      e.className.indexOf(T0) === -1 && (e.className += ` ${T0}`)
    }

    function O8(e, t) {
      let r = n => {
        let {
          ixSession: i,
          ixParameters: a
        } = e.getState();
        i.active && (e.dispatch((0, _e.animationFrameChanged)(n, a)), t ? _8(e, r) : requestAnimationFrame(r))
      };
      r(window.performance.now())
    }

    function mi(e) {
      let {
        ixSession: t
      } = e.getState();
      if (t.active) {
        let {
          eventListeners: r
        } = t;
        r.forEach(w8), d8(), e.dispatch((0, _e.sessionStopped)())
      }
    }

    function w8({
      target: e,
      listenerParams: t
    }) {
      e.removeEventListener.apply(e, t)
    }

    function R8({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: a,
      parameterGroup: s,
      smoothing: o,
      restingValue: l
    }) {
      let {
        ixData: p,
        ixSession: c
      } = e.getState(), {
        events: f
      } = p, g = f[n], {
        eventTypeId: d
      } = g, h = {}, m = {}, u = [], {
        continuousActionGroups: y
      } = s, {
        id: v
      } = s;
      f8(d, i) && (v = h8(t, v));
      let E = c.hasBoundaryNodes && r ? Ae.getClosestElement(r, ci) : null;
      y.forEach(b => {
        let {
          keyframe: I,
          actionItems: S
        } = b;
        S.forEach(_ => {
          let {
            actionTypeId: A
          } = _, {
            target: D
          } = _.config;
          if (!D) return;
          let w = D.boundaryMode ? E : null,
            O = m8(D) + lo + A;
          if (m[O] = M8(m[O], I, _), !h[O]) {
            h[O] = !0;
            let {
              config: V
            } = _;
            fi({
              config: V,
              event: g,
              eventTarget: r,
              elementRoot: w,
              elementApi: Ae
            }).forEach(M => {
              u.push({
                element: M,
                key: O
              })
            })
          }
        })
      }), u.forEach(({
        element: b,
        key: I
      }) => {
        let S = m[I],
          _ = (0, _t.default)(S, "[0].actionItems[0]", {}),
          {
            actionTypeId: A
          } = _,
          w = (A === Ue.ActionTypeConsts.PLUGIN_RIVE ? (_.config ? .target ? .selectorGuids || []).length === 0 : pi(A)) ? co(A)(b, _) : null,
          O = uo({
            element: b,
            actionItem: _,
            elementApi: Ae
          }, w);
        po({
          store: e,
          element: b,
          eventId: n,
          actionListId: a,
          actionItem: _,
          destination: O,
          continuous: !0,
          parameterId: v,
          actionGroups: S,
          smoothing: o,
          restingValue: l,
          pluginInstance: w
        })
      })
    }

    function M8(e = [], t, r) {
      let n = [...e],
        i;
      return n.some((a, s) => a.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
        keyframe: t,
        actionItems: []
      })), n[i].actionItems.push(r), n
    }

    function L8(e) {
      let {
        ixData: t
      } = e.getState(), {
        eventTypeMap: r
      } = t;
      P0(e), (0, Kr.default)(r, (i, a) => {
        let s = e8.default[a];
        if (!s) {
          console.warn(`IX2 event type not configured: ${a}`);
          return
        }
        q8({
          logic: s,
          store: e,
          events: i
        })
      });
      let {
        ixSession: n
      } = e.getState();
      n.eventListeners.length && D8(e)
    }
    var F8 = ["resize", "orientationchange"];

    function D8(e) {
      let t = () => {
        P0(e)
      };
      F8.forEach(r => {
        window.addEventListener(r, t), e.dispatch((0, _e.eventListenerAdded)(window, [r, t]))
      }), t()
    }

    function P0(e) {
      let {
        ixSession: t,
        ixData: r
      } = e.getState(), n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let {
          mediaQueries: i
        } = r;
        e.dispatch((0, _e.viewportWidthChanged)({
          width: n,
          mediaQueries: i
        }))
      }
    }
    var N8 = (e, t) => (0, Q6.default)((0, Z6.default)(e, t), $6.default),
      k8 = (e, t) => {
        (0, Kr.default)(e, (r, n) => {
          r.forEach((i, a) => {
            let s = n + lo + a;
            t(i, n, s)
          })
        })
      },
      V8 = e => {
        let t = {
          target: e.target,
          targets: e.targets
        };
        return fi({
          config: t,
          elementApi: Ae
        })
      };

    function q8({
      logic: e,
      store: t,
      events: r
    }) {
      G8(r);
      let {
        types: n,
        handler: i
      } = e, {
        ixData: a
      } = t.getState(), {
        actionLists: s
      } = a, o = N8(r, V8);
      if (!(0, K6.default)(o)) return;
      (0, Kr.default)(o, (f, g) => {
        let d = r[g],
          {
            action: h,
            id: m,
            mediaQueries: u = a.mediaQueryKeys
          } = d,
          {
            actionListId: y
          } = h.config;
        g8(u, a.mediaQueryKeys) || t.dispatch((0, _e.mediaQueriesDefined)()), h.actionTypeId === Ue.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(d.config) ? d.config : [d.config]).forEach(E => {
          let {
            continuousParameterGroupId: b
          } = E, I = (0, _t.default)(s, `${y}.continuousParameterGroups`, []), S = (0, Y6.default)(I, ({
            id: D
          }) => D === b), _ = (E.smoothing || 0) / 100, A = (E.restingState || 0) / 100;
          S && f.forEach((D, w) => {
            let O = m + lo + w;
            R8({
              store: t,
              eventStateKey: O,
              eventTarget: D,
              eventId: m,
              eventConfig: E,
              actionListId: y,
              parameterGroup: S,
              smoothing: _,
              restingValue: A
            })
          })
        }), (h.actionTypeId === Ue.ActionTypeConsts.GENERAL_START_ACTION || oo(h.actionTypeId)) && O0({
          store: t,
          actionListId: y,
          eventId: m
        })
      });
      let l = f => {
          let {
            ixSession: g
          } = t.getState();
          k8(o, (d, h, m) => {
            let u = r[h],
              y = g.eventState[m],
              {
                action: v,
                mediaQueries: E = a.mediaQueryKeys
              } = u;
            if (!hi(E, g.mediaQueryKey)) return;
            let b = (I = {}) => {
              let S = i({
                store: t,
                element: d,
                event: u,
                eventConfig: I,
                nativeEvent: f,
                eventStateKey: m
              }, y);
              y8(S, y) || t.dispatch((0, _e.eventStateChanged)(m, S))
            };
            v.actionTypeId === Ue.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(u.config) ? u.config : [u.config]).forEach(b) : b()
          })
        },
        p = (0, J6.default)(l, b8),
        c = ({
          target: f = document,
          types: g,
          throttle: d
        }) => {
          g.split(" ").filter(Boolean).forEach(h => {
            let m = d ? p : l;
            f.addEventListener(h, m), t.dispatch((0, _e.eventListenerAdded)(f, [h, m]))
          })
        };
      Array.isArray(n) ? n.forEach(c) : typeof n == "string" && c(e)
    }

    function G8(e) {
      if (!E8) return;
      let t = {},
        r = "";
      for (let n in e) {
        let {
          eventTypeId: i,
          target: a
        } = e[n], s = Ae.getQuerySelector(a);
        t[s] || (i === Ue.EventTypeConsts.MOUSE_CLICK || i === Ue.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
        let n = document.createElement("style");
        n.textContent = r, document.body.appendChild(n)
      }
    }

    function O0({
      store: e,
      actionListId: t,
      eventId: r
    }) {
      let {
        ixData: n,
        ixSession: i
      } = e.getState(), {
        actionLists: a,
        events: s
      } = n, o = s[r], l = a[t];
      if (l && l.useFirstGroupAsInitialState) {
        let p = (0, _t.default)(l, "actionItemGroups[0].actionItems", []),
          c = (0, _t.default)(o, "mediaQueries", n.mediaQueryKeys);
        if (!hi(c, i.mediaQueryKey)) return;
        p.forEach(f => {
          let {
            config: g,
            actionTypeId: d
          } = f, h = g ? .target ? .useEventTarget === !0 && g ? .target ? .objectId == null ? {
            target: o.target,
            targets: o.targets
          } : g, m = fi({
            config: h,
            event: o,
            elementApi: Ae
          }), u = pi(d);
          m.forEach(y => {
            let v = u ? co(d)(y, f) : null;
            po({
              destination: uo({
                element: y,
                actionItem: f,
                elementApi: Ae
              }, v),
              immediate: !0,
              store: e,
              element: y,
              eventId: r,
              actionItem: f,
              actionListId: t,
              pluginInstance: v
            })
          })
        })
      }
    }

    function w0({
      store: e
    }) {
      let {
        ixInstances: t
      } = e.getState();
      (0, Kr.default)(t, r => {
        if (!r.continuous) {
          let {
            actionListId: n,
            verbose: i
          } = r;
          mo(r, e), i && e.dispatch((0, _e.actionListPlaybackChanged)({
            actionListId: n,
            isPlaying: !1
          }))
        }
      })
    }

    function fo({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i
    }) {
      let {
        ixInstances: a,
        ixSession: s
      } = e.getState(), o = s.hasBoundaryNodes && r ? Ae.getClosestElement(r, ci) : null;
      (0, Kr.default)(a, l => {
        let p = (0, _t.default)(l, "actionItem.config.target.boundaryMode"),
          c = n ? l.eventStateKey === n : !0;
        if (l.actionListId === i && l.eventId === t && c) {
          if (o && p && !Ae.elementContains(o, l.element)) return;
          mo(l, e), l.verbose && e.dispatch((0, _e.actionListPlaybackChanged)({
            actionListId: i,
            isPlaying: !1
          }))
        }
      })
    }

    function ho({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: a = 0,
      immediate: s,
      verbose: o
    }) {
      let {
        ixData: l,
        ixSession: p
      } = e.getState(), {
        events: c
      } = l, f = c[t] || {}, {
        mediaQueries: g = l.mediaQueryKeys
      } = f, d = (0, _t.default)(l, `actionLists.${i}`, {}), {
        actionItemGroups: h,
        useFirstGroupAsInitialState: m
      } = d;
      if (!h || !h.length) return !1;
      a >= h.length && (0, _t.default)(f, "config.loop") && (a = 0), a === 0 && m && a++;
      let y = (a === 0 || a === 1 && m) && oo(f.action ? .actionTypeId) ? f.config.delay : void 0,
        v = (0, _t.default)(h, [a, "actionItems"], []);
      if (!v.length || !hi(g, p.mediaQueryKey)) return !1;
      let E = p.hasBoundaryNodes && r ? Ae.getClosestElement(r, ci) : null,
        b = o8(v),
        I = !1;
      return v.forEach((S, _) => {
        let {
          config: A,
          actionTypeId: D
        } = S, w = pi(D), {
          target: O
        } = A;
        if (!O) return;
        let V = O.boundaryMode ? E : null;
        fi({
          config: A,
          event: f,
          eventTarget: r,
          elementRoot: V,
          elementApi: Ae
        }).forEach((L, G) => {
          let z = w ? co(D)(L, S) : null,
            re = w ? v8(D)(L, S) : null;
          I = !0;
          let x = b === _ && G === 0,
            B = l8({
              element: L,
              actionItem: S
            }),
            Q = uo({
              element: L,
              actionItem: S,
              elementApi: Ae
            }, z);
          po({
            store: e,
            element: L,
            actionItem: S,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: a,
            isCarrier: x,
            computedStyle: B,
            destination: Q,
            immediate: s,
            verbose: o,
            pluginInstance: z,
            pluginDuration: re,
            instanceDelay: y
          })
        })
      }), I
    }

    function po(e) {
      let {
        store: t,
        computedStyle: r,
        ...n
      } = e, {
        element: i,
        actionItem: a,
        immediate: s,
        pluginInstance: o,
        continuous: l,
        restingValue: p,
        eventId: c
      } = n, f = !l, g = a8(), {
        ixElements: d,
        ixSession: h,
        ixData: m
      } = t.getState(), u = i8(d, i), {
        refState: y
      } = d[u] || {}, v = Ae.getRefType(i), E = h.reducedMotion && Ue.ReducedMotionTypes[a.actionTypeId], b;
      if (E && l) switch (m.events[c] ? .eventTypeId) {
        case Ue.EventTypeConsts.MOUSE_MOVE:
        case Ue.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
          b = p;
          break;
        default:
          b = .5;
          break
      }
      let I = u8(i, y, r, a, Ae, o);
      if (t.dispatch((0, _e.instanceAdded)({
          instanceId: g,
          elementId: u,
          origin: I,
          refType: v,
          skipMotion: E,
          skipToValue: b,
          ...n
        })), R0(document.body, "ix2-animation-started", g), s) {
        B8(t, g);
        return
      }
      Gt({
        store: t,
        select: ({
          ixInstances: S
        }) => S[g],
        onChange: M0
      }), f && t.dispatch((0, _e.instanceStarted)(g, h.tick))
    }

    function mo(e, t) {
      R0(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState()
      });
      let {
        elementId: r,
        actionItem: n
      } = e, {
        ixElements: i
      } = t.getState(), {
        ref: a,
        refType: s
      } = i[r] || {};
      s === A0 && p8(a, n, Ae), t.dispatch((0, _e.instanceRemoved)(e.id))
    }

    function R0(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function B8(e, t) {
      let {
        ixParameters: r
      } = e.getState();
      e.dispatch((0, _e.instanceStarted)(t, 0)), e.dispatch((0, _e.animationFrameChanged)(performance.now(), r));
      let {
        ixInstances: n
      } = e.getState();
      M0(n[t], e)
    }

    function M0(e, t) {
      let {
        active: r,
        continuous: n,
        complete: i,
        elementId: a,
        actionItem: s,
        actionTypeId: o,
        renderType: l,
        current: p,
        groupIndex: c,
        eventId: f,
        eventTarget: g,
        eventStateKey: d,
        actionListId: h,
        isCarrier: m,
        styleProp: u,
        verbose: y,
        pluginInstance: v
      } = e, {
        ixData: E,
        ixSession: b
      } = t.getState(), {
        events: I
      } = E, S = I && I[f] ? I[f] : {}, {
        mediaQueries: _ = E.mediaQueryKeys
      } = S;
      if (hi(_, b.mediaQueryKey) && (n || r || i)) {
        if (p || l === n8 && i) {
          t.dispatch((0, _e.elementStateChanged)(a, o, p, s));
          let {
            ixElements: A
          } = t.getState(), {
            ref: D,
            refType: w,
            refState: O
          } = A[a] || {}, V = O && O[o];
          (w === A0 || pi(o)) && s8(D, O, V, f, s, u, Ae, l, v)
        }
        if (i) {
          if (m) {
            let A = ho({
              store: t,
              eventId: f,
              eventTarget: g,
              eventStateKey: d,
              actionListId: h,
              groupIndex: c + 1,
              verbose: y
            });
            y && !A && t.dispatch((0, _e.actionListPlaybackChanged)({
              actionListId: h,
              isPlaying: !1
            }))
          }
          mo(e, t)
        }
      }
    }
  });
  var D0 = T(vo => {
    "use strict";
    Object.defineProperty(vo, "__esModule", {
      value: !0
    });

    function U8(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    U8(vo, {
      actions: function () {
        return W8
      },
      destroy: function () {
        return F0
      },
      init: function () {
        return K8
      },
      setEnv: function () {
        return Y8
      },
      store: function () {
        return gi
      }
    });
    var z8 = ya(),
      H8 = X8(Vm()),
      yo = so(),
      W8 = j8(ei());

    function X8(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function L0(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap,
        r = new WeakMap;
      return (L0 = function (n) {
        return n ? r : t
      })(e)
    }

    function j8(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return {
        default: e
      };
      var r = L0(t);
      if (r && r.has(e)) return r.get(e);
      var n = {
          __proto__: null
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
          var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
        } return n.default = e, r && r.set(e, n), n
    }
    var gi = (0, z8.createStore)(H8.default);

    function Y8(e) {
      e() && (0, yo.observeRequests)(gi)
    }

    function K8(e) {
      F0(), (0, yo.startEngine)({
        store: gi,
        rawData: e,
        allowEvents: !0
      })
    }

    function F0() {
      (0, yo.stopEngine)(gi)
    }
  });
  var q0 = T((uj, V0) => {
    "use strict";
    var N0 = Pe(),
      k0 = D0();
    k0.setEnv(N0.env);
    N0.define("ix2", V0.exports = function () {
      return k0
    })
  });
  var U0 = T((cj, B0) => {
    "use strict";
    var Eo = window.jQuery,
      it = {},
      yi = [],
      G0 = ".w-ix",
      vi = {
        reset: function (e, t) {
          t.__wf_intro = null
        },
        intro: function (e, t) {
          t.__wf_intro || (t.__wf_intro = !0, Eo(t).triggerHandler(it.types.INTRO))
        },
        outro: function (e, t) {
          t.__wf_intro && (t.__wf_intro = null, Eo(t).triggerHandler(it.types.OUTRO))
        }
      };
    it.triggers = {};
    it.types = {
      INTRO: "w-ix-intro" + G0,
      OUTRO: "w-ix-outro" + G0
    };
    it.init = function () {
      for (var e = yi.length, t = 0; t < e; t++) {
        var r = yi[t];
        r[0](0, r[1])
      }
      yi = [], Eo.extend(it.triggers, vi)
    };
    it.async = function () {
      for (var e in vi) {
        var t = vi[e];
        vi.hasOwnProperty(e) && (it.triggers[e] = function (r, n) {
          yi.push([t, n])
        })
      }
    };
    it.async();
    B0.exports = it
  });
  var bi = T((fj, W0) => {
    "use strict";
    var bo = U0();

    function z0(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
    }
    var Q8 = window.jQuery,
      Ei = {},
      H0 = ".w-ix",
      $8 = {
        reset: function (e, t) {
          bo.triggers.reset(e, t)
        },
        intro: function (e, t) {
          bo.triggers.intro(e, t), z0(t, "COMPONENT_ACTIVE")
        },
        outro: function (e, t) {
          bo.triggers.outro(e, t), z0(t, "COMPONENT_INACTIVE")
        }
      };
    Ei.triggers = {};
    Ei.types = {
      INTRO: "w-ix-intro" + H0,
      OUTRO: "w-ix-outro" + H0
    };
    Q8.extend(Ei.triggers, $8);
    W0.exports = Ei
  });
  var j0 = T((hj, X0) => {
    "use strict";
    var St = Pe(),
      Z8 = bi(),
      Ce = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
    St.define("navbar", X0.exports = function (e, t) {
      var r = {},
        n = e.tram,
        i = e(window),
        a = e(document),
        s = t.debounce,
        o, l, p, c, f = St.env(),
        g = '<div class="w-nav-overlay" data-wf-ignore />',
        d = ".w-nav",
        h = "w--open",
        m = "w--nav-dropdown-open",
        u = "w--nav-dropdown-toggle-open",
        y = "w--nav-dropdown-list-open",
        v = "w--nav-link-open",
        E = Z8.triggers,
        b = e();
      r.ready = r.design = r.preview = I, r.destroy = function () {
        b = e(), S(), l && l.length && l.each(w)
      };

      function I() {
        p = f && St.env("design"), c = St.env("editor"), o = e(document.body), l = a.find(d), l.length && (l.each(D), S(), _())
      }

      function S() {
        St.resize.off(A)
      }

      function _() {
        St.resize.on(A)
      }

      function A() {
        l.each(P)
      }

      function D(R, $) {
        var ne = e($),
          X = e.data($, d);
        X || (X = e.data($, d, {
          open: !1,
          el: ne,
          config: {},
          selectedIdx: -1
        })), X.menu = ne.find(".w-nav-menu"), X.links = X.menu.find(".w-nav-link"), X.dropdowns = X.menu.find(".w-dropdown"), X.dropdownToggle = X.menu.find(".w-dropdown-toggle"), X.dropdownList = X.menu.find(".w-dropdown-list"), X.button = ne.find(".w-nav-button"), X.container = ne.find(".w-container"), X.overlayContainerId = "w-nav-overlay-" + R, X.outside = N(X);
        var fe = ne.find(".w-nav-brand");
        fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"), X.button.attr("style", "-webkit-user-select: text;"), X.button.attr("aria-label") == null && X.button.attr("aria-label", "menu"), X.button.attr("role", "button"), X.button.attr("tabindex", "0"), X.button.attr("aria-controls", X.overlayContainerId), X.button.attr("aria-haspopup", "menu"), X.button.attr("aria-expanded", "false"), X.el.off(d), X.button.off(d), X.menu.off(d), M(X), p ? (O(X), X.el.on("setting" + d, L(X))) : (V(X), X.button.on("click" + d, B(X)), X.menu.on("click" + d, "a", Q(X)), X.button.on("keydown" + d, G(X)), X.el.on("keydown" + d, z(X))), P(R, $)
      }

      function w(R, $) {
        var ne = e.data($, d);
        ne && (O(ne), e.removeData($, d))
      }

      function O(R) {
        R.overlay && (ee(R, !0), R.overlay.remove(), R.overlay = null)
      }

      function V(R) {
        R.overlay || (R.overlay = e(g).appendTo(R.el), R.overlay.attr("id", R.overlayContainerId), R.parent = R.menu.parent(), ee(R, !0))
      }

      function M(R) {
        var $ = {},
          ne = R.config || {},
          X = $.animation = R.el.attr("data-animation") || "default";
        $.animOver = /^over/.test(X), $.animDirect = /left$/.test(X) ? -1 : 1, ne.animation !== X && R.open && t.defer(x, R), $.easing = R.el.attr("data-easing") || "ease", $.easing2 = R.el.attr("data-easing2") || "ease";
        var fe = R.el.attr("data-duration");
        $.duration = fe != null ? Number(fe) : 400, $.docHeight = R.el.attr("data-doc-height"), R.config = $
      }

      function L(R) {
        return function ($, ne) {
          ne = ne || {};
          var X = i.width();
          M(R), ne.open === !0 && Z(R, !0), ne.open === !1 && ee(R, !0), R.open && t.defer(function () {
            X !== i.width() && x(R)
          })
        }
      }

      function G(R) {
        return function ($) {
          switch ($.keyCode) {
            case Ce.SPACE:
            case Ce.ENTER:
              return B(R)(), $.preventDefault(), $.stopPropagation();
            case Ce.ESCAPE:
              return ee(R), $.preventDefault(), $.stopPropagation();
            case Ce.ARROW_RIGHT:
            case Ce.ARROW_DOWN:
            case Ce.HOME:
            case Ce.END:
              return R.open ? ($.keyCode === Ce.END ? R.selectedIdx = R.links.length - 1 : R.selectedIdx = 0, re(R), $.preventDefault(), $.stopPropagation()) : ($.preventDefault(), $.stopPropagation())
          }
        }
      }

      function z(R) {
        return function ($) {
          if (R.open) switch (R.selectedIdx = R.links.index(document.activeElement), $.keyCode) {
            case Ce.HOME:
            case Ce.END:
              return $.keyCode === Ce.END ? R.selectedIdx = R.links.length - 1 : R.selectedIdx = 0, re(R), $.preventDefault(), $.stopPropagation();
            case Ce.ESCAPE:
              return ee(R), R.button.focus(), $.preventDefault(), $.stopPropagation();
            case Ce.ARROW_LEFT:
            case Ce.ARROW_UP:
              return R.selectedIdx = Math.max(-1, R.selectedIdx - 1), re(R), $.preventDefault(), $.stopPropagation();
            case Ce.ARROW_RIGHT:
            case Ce.ARROW_DOWN:
              return R.selectedIdx = Math.min(R.links.length - 1, R.selectedIdx + 1), re(R), $.preventDefault(), $.stopPropagation()
          }
        }
      }

      function re(R) {
        if (R.links[R.selectedIdx]) {
          var $ = R.links[R.selectedIdx];
          $.focus(), Q($)
        }
      }

      function x(R) {
        R.open && (ee(R, !0), Z(R, !0))
      }

      function B(R) {
        return s(function () {
          R.open ? ee(R) : Z(R)
        })
      }

      function Q(R) {
        return function ($) {
          var ne = e(this),
            X = ne.attr("href");
          if (!St.validClick($.currentTarget)) {
            $.preventDefault();
            return
          }
          X && X.indexOf("#") === 0 && R.open && ee(R)
        }
      }

      function N(R) {
        return R.outside && a.off("click" + d, R.outside),
          function ($) {
            var ne = e($.target);
            c && ne.closest(".w-editor-bem-EditorOverlay").length || k(R, ne)
          }
      }
      var k = s(function (R, $) {
        if (R.open) {
          var ne = $.closest(".w-nav-menu");
          R.menu.is(ne) || ee(R)
        }
      });

      function P(R, $) {
        var ne = e.data($, d),
          X = ne.collapsed = ne.button.css("display") !== "none";
        if (ne.open && !X && !p && ee(ne, !0), ne.container.length) {
          var fe = H(ne);
          ne.links.each(fe), ne.dropdowns.each(fe)
        }
        ne.open && ie(ne)
      }
      var F = "max-width";

      function H(R) {
        var $ = R.container.css(F);
        return $ === "none" && ($ = ""),
          function (ne, X) {
            X = e(X), X.css(F, ""), X.css(F) === "none" && X.css(F, $)
          }
      }

      function j(R, $) {
        $.setAttribute("data-nav-menu-open", "")
      }

      function J(R, $) {
        $.removeAttribute("data-nav-menu-open")
      }

      function Z(R, $) {
        if (R.open) return;
        R.open = !0, R.menu.each(j), R.links.addClass(v), R.dropdowns.addClass(m), R.dropdownToggle.addClass(u), R.dropdownList.addClass(y), R.button.addClass(h);
        var ne = R.config,
          X = ne.animation;
        (X === "none" || !n.support.transform || ne.duration <= 0) && ($ = !0);
        var fe = ie(R),
          ye = R.menu.outerHeight(!0),
          be = R.menu.outerWidth(!0),
          C = R.el.height(),
          q = R.el[0];
        if (P(0, q), E.intro(0, q), St.redraw.up(), p || a.on("click" + d, R.outside), $) {
          K();
          return
        }
        var U = "transform " + ne.duration + "ms " + ne.easing;
        if (R.overlay && (b = R.menu.prev(), R.overlay.show().append(R.menu)), ne.animOver) {
          n(R.menu).add(U).set({
            x: ne.animDirect * be,
            height: fe
          }).start({
            x: 0
          }).then(K), R.overlay && R.overlay.width(be);
          return
        }
        var W = C + ye;
        n(R.menu).add(U).set({
          y: -W
        }).start({
          y: 0
        }).then(K);

        function K() {
          R.button.attr("aria-expanded", "true")
        }
      }

      function ie(R) {
        var $ = R.config,
          ne = $.docHeight ? a.height() : o.height();
        return $.animOver ? R.menu.height(ne) : R.el.css("position") !== "fixed" && (ne -= R.el.outerHeight(!0)), R.overlay && R.overlay.height(ne), ne
      }

      function ee(R, $) {
        if (!R.open) return;
        R.open = !1, R.button.removeClass(h);
        var ne = R.config;
        if ((ne.animation === "none" || !n.support.transform || ne.duration <= 0) && ($ = !0), E.outro(0, R.el[0]), a.off("click" + d, R.outside), $) {
          n(R.menu).stop(), q();
          return
        }
        var X = "transform " + ne.duration + "ms " + ne.easing2,
          fe = R.menu.outerHeight(!0),
          ye = R.menu.outerWidth(!0),
          be = R.el.height();
        if (ne.animOver) {
          n(R.menu).add(X).start({
            x: ye * ne.animDirect
          }).then(q);
          return
        }
        var C = be + fe;
        n(R.menu).add(X).start({
          y: -C
        }).then(q);

        function q() {
          R.menu.height(""), n(R.menu).set({
            x: 0,
            y: 0
          }), R.menu.each(J), R.links.removeClass(v), R.dropdowns.removeClass(m), R.dropdownToggle.removeClass(u), R.dropdownList.removeClass(y), R.overlay && R.overlay.children().length && (b.length ? R.menu.insertAfter(b) : R.menu.prependTo(R.parent), R.overlay.attr("style", "").hide()), R.el.triggerHandler("w-close"), R.button.attr("aria-expanded", "false")
        }
      }
      return r
    })
  });
  var Q0 = T((pj, K0) => {
    "use strict";
    var At = Pe(),
      J8 = bi(),
      at = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      },
      Y0 = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    At.define("slider", K0.exports = function (e, t) {
      var r = {},
        n = e.tram,
        i = e(document),
        a, s, o = At.env(),
        l = ".w-slider",
        p = '<div class="w-slider-dot" data-wf-ignore />',
        c = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
        f = "w-slider-force-show",
        g = J8.triggers,
        d, h = !1;
      r.ready = function () {
        s = At.env("design"), m()
      }, r.design = function () {
        s = !0, setTimeout(m, 1e3)
      }, r.preview = function () {
        s = !1, m()
      }, r.redraw = function () {
        h = !0, m(), h = !1
      }, r.destroy = u;

      function m() {
        a = i.find(l), a.length && (a.each(E), !d && (u(), y()))
      }

      function u() {
        At.resize.off(v), At.redraw.off(r.redraw)
      }

      function y() {
        At.resize.on(v), At.redraw.on(r.redraw)
      }

      function v() {
        a.filter(":visible").each(z)
      }

      function E(N, k) {
        var P = e(k),
          F = e.data(k, l);
        F || (F = e.data(k, l, {
          index: 0,
          depth: 1,
          hasFocus: {
            keyboard: !1,
            mouse: !1
          },
          el: P,
          config: {}
        })), F.mask = P.children(".w-slider-mask"), F.left = P.children(".w-slider-arrow-left"), F.right = P.children(".w-slider-arrow-right"), F.nav = P.children(".w-slider-nav"), F.slides = F.mask.children(".w-slide"), F.slides.each(g.reset), h && (F.maskWidth = 0), P.attr("role") === void 0 && P.attr("role", "region"), P.attr("aria-label") === void 0 && P.attr("aria-label", "carousel");
        var H = F.mask.attr("id");
        if (H || (H = "w-slider-mask-" + N, F.mask.attr("id", H)), !s && !F.ariaLiveLabel && (F.ariaLiveLabel = e(c).appendTo(F.mask)), F.left.attr("role", "button"), F.left.attr("tabindex", "0"), F.left.attr("aria-controls", H), F.left.attr("aria-label") === void 0 && F.left.attr("aria-label", "previous slide"), F.right.attr("role", "button"), F.right.attr("tabindex", "0"), F.right.attr("aria-controls", H), F.right.attr("aria-label") === void 0 && F.right.attr("aria-label", "next slide"), !n.support.transform) {
          F.left.hide(), F.right.hide(), F.nav.hide(), d = !0;
          return
        }
        F.el.off(l), F.left.off(l), F.right.off(l), F.nav.off(l), b(F), s ? (F.el.on("setting" + l, M(F)), V(F), F.hasTimer = !1) : (F.el.on("swipe" + l, M(F)), F.left.on("click" + l, A(F)), F.right.on("click" + l, D(F)), F.left.on("keydown" + l, _(F, A)), F.right.on("keydown" + l, _(F, D)), F.nav.on("keydown" + l, "> div", M(F)), F.config.autoplay && !F.hasTimer && (F.hasTimer = !0, F.timerCount = 1, O(F)), F.el.on("mouseenter" + l, S(F, !0, "mouse")), F.el.on("focusin" + l, S(F, !0, "keyboard")), F.el.on("mouseleave" + l, S(F, !1, "mouse")), F.el.on("focusout" + l, S(F, !1, "keyboard"))), F.nav.on("click" + l, "> div", M(F)), o || F.mask.contents().filter(function () {
          return this.nodeType === 3
        }).remove();
        var j = P.filter(":hidden");
        j.addClass(f);
        var J = P.parents(":hidden");
        J.addClass(f), h || z(N, k), j.removeClass(f), J.removeClass(f)
      }

      function b(N) {
        var k = {};
        k.crossOver = 0, k.animation = N.el.attr("data-animation") || "slide", k.animation === "outin" && (k.animation = "cross", k.crossOver = .5), k.easing = N.el.attr("data-easing") || "ease";
        var P = N.el.attr("data-duration");
        if (k.duration = P != null ? parseInt(P, 10) : 500, I(N.el.attr("data-infinite")) && (k.infinite = !0), I(N.el.attr("data-disable-swipe")) && (k.disableSwipe = !0), I(N.el.attr("data-hide-arrows")) ? k.hideArrows = !0 : N.config.hideArrows && (N.left.show(), N.right.show()), I(N.el.attr("data-autoplay"))) {
          k.autoplay = !0, k.delay = parseInt(N.el.attr("data-delay"), 10) || 2e3, k.timerMax = parseInt(N.el.attr("data-autoplay-limit"), 10);
          var F = "mousedown" + l + " touchstart" + l;
          s || N.el.off(F).one(F, function () {
            V(N)
          })
        }
        var H = N.right.width();
        k.edge = H ? H + 40 : 100, N.config = k
      }

      function I(N) {
        return N === "1" || N === "true"
      }

      function S(N, k, P) {
        return function (F) {
          if (k) N.hasFocus[P] = k;
          else if (e.contains(N.el.get(0), F.relatedTarget) || (N.hasFocus[P] = k, N.hasFocus.mouse && P === "keyboard" || N.hasFocus.keyboard && P === "mouse")) return;
          k ? (N.ariaLiveLabel.attr("aria-live", "polite"), N.hasTimer && V(N)) : (N.ariaLiveLabel.attr("aria-live", "off"), N.hasTimer && O(N))
        }
      }

      function _(N, k) {
        return function (P) {
          switch (P.keyCode) {
            case at.SPACE:
            case at.ENTER:
              return k(N)(), P.preventDefault(), P.stopPropagation()
          }
        }
      }

      function A(N) {
        return function () {
          G(N, {
            index: N.index - 1,
            vector: -1
          })
        }
      }

      function D(N) {
        return function () {
          G(N, {
            index: N.index + 1,
            vector: 1
          })
        }
      }

      function w(N, k) {
        var P = null;
        k === N.slides.length && (m(), re(N)), t.each(N.anchors, function (F, H) {
          e(F.els).each(function (j, J) {
            e(J).index() === k && (P = H)
          })
        }), P != null && G(N, {
          index: P,
          immediate: !0
        })
      }

      function O(N) {
        V(N);
        var k = N.config,
          P = k.timerMax;
        P && N.timerCount++ > P || (N.timerId = window.setTimeout(function () {
          N.timerId == null || s || (D(N)(), O(N))
        }, k.delay))
      }

      function V(N) {
        window.clearTimeout(N.timerId), N.timerId = null
      }

      function M(N) {
        return function (k, P) {
          P = P || {};
          var F = N.config;
          if (s && k.type === "setting") {
            if (P.select === "prev") return A(N)();
            if (P.select === "next") return D(N)();
            if (b(N), re(N), P.select == null) return;
            w(N, P.select);
            return
          }
          if (k.type === "swipe") return F.disableSwipe || At.env("editor") ? void 0 : P.direction === "left" ? D(N)() : P.direction === "right" ? A(N)() : void 0;
          if (N.nav.has(k.target).length) {
            var H = e(k.target).index();
            if (k.type === "click" && G(N, {
                index: H
              }), k.type === "keydown") switch (k.keyCode) {
              case at.ENTER:
              case at.SPACE: {
                G(N, {
                  index: H
                }), k.preventDefault();
                break
              }
              case at.ARROW_LEFT:
              case at.ARROW_UP: {
                L(N.nav, Math.max(H - 1, 0)), k.preventDefault();
                break
              }
              case at.ARROW_RIGHT:
              case at.ARROW_DOWN: {
                L(N.nav, Math.min(H + 1, N.pages)), k.preventDefault();
                break
              }
              case at.HOME: {
                L(N.nav, 0), k.preventDefault();
                break
              }
              case at.END: {
                L(N.nav, N.pages), k.preventDefault();
                break
              }
              default:
                return
            }
          }
        }
      }

      function L(N, k) {
        var P = N.children().eq(k).focus();
        N.children().not(P)
      }

      function G(N, k) {
        k = k || {};
        var P = N.config,
          F = N.anchors;
        N.previous = N.index;
        var H = k.index,
          j = {};
        H < 0 ? (H = F.length - 1, P.infinite && (j.x = -N.endX, j.from = 0, j.to = F[0].width)) : H >= F.length && (H = 0, P.infinite && (j.x = F[F.length - 1].width, j.from = -F[F.length - 1].x, j.to = j.from - j.x)), N.index = H;
        var J = N.nav.children().eq(H).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
        N.nav.children().not(J).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), P.hideArrows && (N.index === F.length - 1 ? N.right.hide() : N.right.show(), N.index === 0 ? N.left.hide() : N.left.show());
        var Z = N.offsetX || 0,
          ie = N.offsetX = -F[N.index].x,
          ee = {
            x: ie,
            opacity: 1,
            visibility: ""
          },
          R = e(F[N.index].els),
          $ = e(F[N.previous] && F[N.previous].els),
          ne = N.slides.not(R),
          X = P.animation,
          fe = P.easing,
          ye = Math.round(P.duration),
          be = k.vector || (N.index > N.previous ? 1 : -1),
          C = "opacity " + ye + "ms " + fe,
          q = "transform " + ye + "ms " + fe;
        if (R.find(Y0).removeAttr("tabindex"), R.removeAttr("aria-hidden"), R.find("*").removeAttr("aria-hidden"), ne.find(Y0).attr("tabindex", "-1"), ne.attr("aria-hidden", "true"), ne.find("*").attr("aria-hidden", "true"), s || (R.each(g.intro), ne.each(g.outro)), k.immediate && !h) {
          n(R).set(ee), K();
          return
        }
        if (N.index === N.previous) return;
        if (s || N.ariaLiveLabel.text(`Slide ${H+1} of ${F.length}.`), X === "cross") {
          var U = Math.round(ye - ye * P.crossOver),
            W = Math.round(ye - U);
          C = "opacity " + U + "ms " + fe, n($).set({
            visibility: ""
          }).add(C).start({
            opacity: 0
          }), n(R).set({
            visibility: "",
            x: ie,
            opacity: 0,
            zIndex: N.depth++
          }).add(C).wait(W).then({
            opacity: 1
          }).then(K);
          return
        }
        if (X === "fade") {
          n($).set({
            visibility: ""
          }).stop(), n(R).set({
            visibility: "",
            x: ie,
            opacity: 0,
            zIndex: N.depth++
          }).add(C).start({
            opacity: 1
          }).then(K);
          return
        }
        if (X === "over") {
          ee = {
            x: N.endX
          }, n($).set({
            visibility: ""
          }).stop(), n(R).set({
            visibility: "",
            zIndex: N.depth++,
            x: ie + F[N.index].width * be
          }).add(q).start({
            x: ie
          }).then(K);
          return
        }
        P.infinite && j.x ? (n(N.slides.not($)).set({
          visibility: "",
          x: j.x
        }).add(q).start({
          x: ie
        }), n($).set({
          visibility: "",
          x: j.from
        }).add(q).start({
          x: j.to
        }), N.shifted = $) : (P.infinite && N.shifted && (n(N.shifted).set({
          visibility: "",
          x: Z
        }), N.shifted = null), n(N.slides).set({
          visibility: ""
        }).add(q).start({
          x: ie
        }));

        function K() {
          R = e(F[N.index].els), ne = N.slides.not(R), X !== "slide" && (ee.visibility = "hidden"), n(ne).set(ee)
        }
      }

      function z(N, k) {
        var P = e.data(k, l);
        if (P) {
          if (B(P)) return re(P);
          s && Q(P) && re(P)
        }
      }

      function re(N) {
        var k = 1,
          P = 0,
          F = 0,
          H = 0,
          j = N.maskWidth,
          J = j - N.config.edge;
        J < 0 && (J = 0), N.anchors = [{
          els: [],
          x: 0,
          width: 0
        }], N.slides.each(function (ie, ee) {
          F - P > J && (k++, P += j, N.anchors[k - 1] = {
            els: [],
            x: F,
            width: 0
          }), H = e(ee).outerWidth(!0), F += H, N.anchors[k - 1].width += H, N.anchors[k - 1].els.push(ee);
          var R = ie + 1 + " of " + N.slides.length;
          e(ee).attr("aria-label", R), e(ee).attr("role", "group")
        }), N.endX = F, s && (N.pages = null), N.nav.length && N.pages !== k && (N.pages = k, x(N));
        var Z = N.index;
        Z >= k && (Z = k - 1), G(N, {
          immediate: !0,
          index: Z
        })
      }

      function x(N) {
        var k = [],
          P, F = N.el.attr("data-nav-spacing");
        F && (F = parseFloat(F) + "px");
        for (var H = 0, j = N.pages; H < j; H++) P = e(p), P.attr("aria-label", "Show slide " + (H + 1) + " of " + j).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), N.nav.hasClass("w-num") && P.text(H + 1), F != null && P.css({
          "margin-left": F,
          "margin-right": F
        }), k.push(P);
        N.nav.empty().append(k)
      }

      function B(N) {
        var k = N.mask.width();
        return N.maskWidth !== k ? (N.maskWidth = k, !0) : !1
      }

      function Q(N) {
        var k = 0;
        return N.slides.each(function (P, F) {
          k += e(F).outerWidth(!0)
        }), N.slidesWidth !== k ? (N.slidesWidth = k, !0) : !1
      }
      return r
    })
  });
  var pe = T((dj, $0) => {
    var Ti = function (e) {
      return e && e.Math == Math && e
    };
    $0.exports = Ti(typeof globalThis == "object" && globalThis) || Ti(typeof window == "object" && window) || Ti(typeof self == "object" && self) || Ti(typeof global == "object" && global) || function () {
      return this
    }() || Function("return this")()
  });
  var xt = T((mj, Z0) => {
    Z0.exports = function (e) {
      try {
        return !!e()
      } catch {
        return !0
      }
    }
  });
  var ht = T((gj, J0) => {
    var e4 = xt();
    J0.exports = !e4(function () {
      return Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1] != 7
    })
  });
  var Bt = T((yj, ev) => {
    var Qr = Function.prototype.call;
    ev.exports = Qr.bind ? Qr.bind(Qr) : function () {
      return Qr.apply(Qr, arguments)
    }
  });
  var iv = T(nv => {
    "use strict";
    var tv = {}.propertyIsEnumerable,
      rv = Object.getOwnPropertyDescriptor,
      t4 = rv && !tv.call({
        1: 2
      }, 1);
    nv.f = t4 ? function (t) {
      var r = rv(this, t);
      return !!r && r.enumerable
    } : tv
  });
  var To = T((Ej, av) => {
    av.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      }
    }
  });
  var Oe = T((bj, ov) => {
    var sv = Function.prototype,
      Io = sv.bind,
      _o = sv.call,
      r4 = Io && Io.bind(_o);
    ov.exports = Io ? function (e) {
      return e && r4(_o, e)
    } : function (e) {
      return e && function () {
        return _o.apply(e, arguments)
      }
    }
  });
  var Ii = T((Tj, uv) => {
    var lv = Oe(),
      n4 = lv({}.toString),
      i4 = lv("".slice);
    uv.exports = function (e) {
      return i4(n4(e), 8, -1)
    }
  });
  var _i = T((Ij, cv) => {
    var a4 = pe(),
      s4 = Oe(),
      o4 = xt(),
      l4 = Ii(),
      So = a4.Object,
      u4 = s4("".split);
    cv.exports = o4(function () {
      return !So("z").propertyIsEnumerable(0)
    }) ? function (e) {
      return l4(e) == "String" ? u4(e, "") : So(e)
    } : So
  });
  var Ao = T((_j, fv) => {
    var c4 = pe(),
      f4 = c4.TypeError;
    fv.exports = function (e) {
      if (e == null) throw f4("Can't call method on " + e);
      return e
    }
  });
  var $r = T((Sj, hv) => {
    var h4 = _i(),
      p4 = Ao();
    hv.exports = function (e) {
      return h4(p4(e))
    }
  });
  var Le = T((Aj, pv) => {
    pv.exports = function (e) {
      return typeof e == "function"
    }
  });
  var Ut = T((xj, dv) => {
    var d4 = Le();
    dv.exports = function (e) {
      return typeof e == "object" ? e !== null : d4(e)
    }
  });
  var st = T((Cj, mv) => {
    var xo = pe(),
      m4 = Le(),
      g4 = function (e) {
        return m4(e) ? e : void 0
      };
    mv.exports = function (e, t) {
      return arguments.length < 2 ? g4(xo[e]) : xo[e] && xo[e][t]
    }
  });
  var yv = T((Pj, gv) => {
    var y4 = Oe();
    gv.exports = y4({}.isPrototypeOf)
  });
  var Ev = T((Oj, vv) => {
    var v4 = st();
    vv.exports = v4("navigator", "userAgent") || ""
  });
  var xv = T((wj, Av) => {
    var Sv = pe(),
      Co = Ev(),
      bv = Sv.process,
      Tv = Sv.Deno,
      Iv = bv && bv.versions || Tv && Tv.version,
      _v = Iv && Iv.v8,
      Qe, Si;
    _v && (Qe = _v.split("."), Si = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
    !Si && Co && (Qe = Co.match(/Edge\/(\d+)/), (!Qe || Qe[1] >= 74) && (Qe = Co.match(/Chrome\/(\d+)/), Qe && (Si = +Qe[1])));
    Av.exports = Si
  });
  var Po = T((Rj, Pv) => {
    var Cv = xv(),
      E4 = xt();
    Pv.exports = !!Object.getOwnPropertySymbols && !E4(function () {
      var e = Symbol();
      return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Cv && Cv < 41
    })
  });
  var Oo = T((Mj, Ov) => {
    var b4 = Po();
    Ov.exports = b4 && !Symbol.sham && typeof Symbol.iterator == "symbol"
  });
  var wo = T((Lj, wv) => {
    var T4 = pe(),
      I4 = st(),
      _4 = Le(),
      S4 = yv(),
      A4 = Oo(),
      x4 = T4.Object;
    wv.exports = A4 ? function (e) {
      return typeof e == "symbol"
    } : function (e) {
      var t = I4("Symbol");
      return _4(t) && S4(t.prototype, x4(e))
    }
  });
  var Ro = T((Fj, Rv) => {
    var C4 = pe(),
      P4 = C4.String;
    Rv.exports = function (e) {
      try {
        return P4(e)
      } catch {
        return "Object"
      }
    }
  });
  var Ir = T((Dj, Mv) => {
    var O4 = pe(),
      w4 = Le(),
      R4 = Ro(),
      M4 = O4.TypeError;
    Mv.exports = function (e) {
      if (w4(e)) return e;
      throw M4(R4(e) + " is not a function")
    }
  });
  var zt = T((Nj, Lv) => {
    var L4 = Ir();
    Lv.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : L4(r)
    }
  });
  var Dv = T((kj, Fv) => {
    var F4 = pe(),
      Mo = Bt(),
      Lo = Le(),
      Fo = Ut(),
      D4 = F4.TypeError;
    Fv.exports = function (e, t) {
      var r, n;
      if (t === "string" && Lo(r = e.toString) && !Fo(n = Mo(r, e)) || Lo(r = e.valueOf) && !Fo(n = Mo(r, e)) || t !== "string" && Lo(r = e.toString) && !Fo(n = Mo(r, e))) return n;
      throw D4("Can't convert object to primitive value")
    }
  });
  var Do = T((Vj, Nv) => {
    Nv.exports = !1
  });
  var Ai = T((qj, Vv) => {
    var kv = pe(),
      N4 = Object.defineProperty;
    Vv.exports = function (e, t) {
      try {
        N4(kv, e, {
          value: t,
          configurable: !0,
          writable: !0
        })
      } catch {
        kv[e] = t
      }
      return t
    }
  });
  var Zr = T((Gj, Gv) => {
    var k4 = pe(),
      V4 = Ai(),
      qv = "__core-js_shared__",
      q4 = k4[qv] || V4(qv, {});
    Gv.exports = q4
  });
  var No = T((Bj, Uv) => {
    var G4 = Do(),
      Bv = Zr();
    (Uv.exports = function (e, t) {
      return Bv[e] || (Bv[e] = t !== void 0 ? t : {})
    })("versions", []).push({
      version: "3.19.0",
      mode: G4 ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
    })
  });
  var pt = T((Uj, zv) => {
    var B4 = pe(),
      U4 = Ao(),
      z4 = B4.Object;
    zv.exports = function (e) {
      return z4(U4(e))
    }
  });
  var dt = T((zj, Hv) => {
    var H4 = Oe(),
      W4 = pt(),
      X4 = H4({}.hasOwnProperty);
    Hv.exports = Object.hasOwn || function (t, r) {
      return X4(W4(t), r)
    }
  });
  var ko = T((Hj, Wv) => {
    var j4 = Oe(),
      Y4 = 0,
      K4 = Math.random(),
      Q4 = j4(1.toString);
    Wv.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Q4(++Y4 + K4, 36)
    }
  });
  var ot = T((Wj, Qv) => {
    var $4 = pe(),
      Z4 = No(),
      Xv = dt(),
      J4 = ko(),
      jv = Po(),
      Kv = Oo(),
      _r = Z4("wks"),
      Ht = $4.Symbol,
      Yv = Ht && Ht.for,
      e7 = Kv ? Ht : Ht && Ht.withoutSetter || J4;
    Qv.exports = function (e) {
      if (!Xv(_r, e) || !(jv || typeof _r[e] == "string")) {
        var t = "Symbol." + e;
        jv && Xv(Ht, e) ? _r[e] = Ht[e] : Kv && Yv ? _r[e] = Yv(t) : _r[e] = e7(t)
      }
      return _r[e]
    }
  });
  var eE = T((Xj, Jv) => {
    var t7 = pe(),
      r7 = Bt(),
      $v = Ut(),
      Zv = wo(),
      n7 = zt(),
      i7 = Dv(),
      a7 = ot(),
      s7 = t7.TypeError,
      o7 = a7("toPrimitive");
    Jv.exports = function (e, t) {
      if (!$v(e) || Zv(e)) return e;
      var r = n7(e, o7),
        n;
      if (r) {
        if (t === void 0 && (t = "default"), n = r7(r, e, t), !$v(n) || Zv(n)) return n;
        throw s7("Can't convert object to primitive value")
      }
      return t === void 0 && (t = "number"), i7(e, t)
    }
  });
  var xi = T((jj, tE) => {
    var l7 = eE(),
      u7 = wo();
    tE.exports = function (e) {
      var t = l7(e, "string");
      return u7(t) ? t : t + ""
    }
  });
  var qo = T((Yj, nE) => {
    var c7 = pe(),
      rE = Ut(),
      Vo = c7.document,
      f7 = rE(Vo) && rE(Vo.createElement);
    nE.exports = function (e) {
      return f7 ? Vo.createElement(e) : {}
    }
  });
  var Go = T((Kj, iE) => {
    var h7 = ht(),
      p7 = xt(),
      d7 = qo();
    iE.exports = !h7 && !p7(function () {
      return Object.defineProperty(d7("div"), "a", {
        get: function () {
          return 7
        }
      }).a != 7
    })
  });
  var Bo = T(sE => {
    var m7 = ht(),
      g7 = Bt(),
      y7 = iv(),
      v7 = To(),
      E7 = $r(),
      b7 = xi(),
      T7 = dt(),
      I7 = Go(),
      aE = Object.getOwnPropertyDescriptor;
    sE.f = m7 ? aE : function (t, r) {
      if (t = E7(t), r = b7(r), I7) try {
        return aE(t, r)
      } catch {}
      if (T7(t, r)) return v7(!g7(y7.f, t, r), t[r])
    }
  });
  var mt = T(($j, lE) => {
    var oE = pe(),
      _7 = Ut(),
      S7 = oE.String,
      A7 = oE.TypeError;
    lE.exports = function (e) {
      if (_7(e)) return e;
      throw A7(S7(e) + " is not an object")
    }
  });
  var Wt = T(fE => {
    var x7 = pe(),
      C7 = ht(),
      P7 = Go(),
      uE = mt(),
      O7 = xi(),
      w7 = x7.TypeError,
      cE = Object.defineProperty;
    fE.f = C7 ? cE : function (t, r, n) {
      if (uE(t), r = O7(r), uE(n), P7) try {
        return cE(t, r, n)
      } catch {}
      if ("get" in n || "set" in n) throw w7("Accessors not supported");
      return "value" in n && (t[r] = n.value), t
    }
  });
  var Ci = T((Jj, hE) => {
    var R7 = ht(),
      M7 = Wt(),
      L7 = To();
    hE.exports = R7 ? function (e, t, r) {
      return M7.f(e, t, L7(1, r))
    } : function (e, t, r) {
      return e[t] = r, e
    }
  });
  var Pi = T((eY, pE) => {
    var F7 = Oe(),
      D7 = Le(),
      Uo = Zr(),
      N7 = F7(Function.toString);
    D7(Uo.inspectSource) || (Uo.inspectSource = function (e) {
      return N7(e)
    });
    pE.exports = Uo.inspectSource
  });
  var gE = T((tY, mE) => {
    var k7 = pe(),
      V7 = Le(),
      q7 = Pi(),
      dE = k7.WeakMap;
    mE.exports = V7(dE) && /native code/.test(q7(dE))
  });
  var Oi = T((rY, vE) => {
    var G7 = No(),
      B7 = ko(),
      yE = G7("keys");
    vE.exports = function (e) {
      return yE[e] || (yE[e] = B7(e))
    }
  });
  var wi = T((nY, EE) => {
    EE.exports = {}
  });
  var Yo = T((iY, SE) => {
    var U7 = gE(),
      _E = pe(),
      zo = Oe(),
      z7 = Ut(),
      H7 = Ci(),
      Ho = dt(),
      Wo = Zr(),
      W7 = Oi(),
      X7 = wi(),
      bE = "Object already initialized",
      jo = _E.TypeError,
      j7 = _E.WeakMap,
      Ri, Jr, Mi, Y7 = function (e) {
        return Mi(e) ? Jr(e) : Ri(e, {})
      },
      K7 = function (e) {
        return function (t) {
          var r;
          if (!z7(t) || (r = Jr(t)).type !== e) throw jo("Incompatible receiver, " + e + " required");
          return r
        }
      };
    U7 || Wo.state ? (Ct = Wo.state || (Wo.state = new j7), TE = zo(Ct.get), Xo = zo(Ct.has), IE = zo(Ct.set), Ri = function (e, t) {
      if (Xo(Ct, e)) throw new jo(bE);
      return t.facade = e, IE(Ct, e, t), t
    }, Jr = function (e) {
      return TE(Ct, e) || {}
    }, Mi = function (e) {
      return Xo(Ct, e)
    }) : (Xt = W7("state"), X7[Xt] = !0, Ri = function (e, t) {
      if (Ho(e, Xt)) throw new jo(bE);
      return t.facade = e, H7(e, Xt, t), t
    }, Jr = function (e) {
      return Ho(e, Xt) ? e[Xt] : {}
    }, Mi = function (e) {
      return Ho(e, Xt)
    });
    var Ct, TE, Xo, IE, Xt;
    SE.exports = {
      set: Ri,
      get: Jr,
      has: Mi,
      enforce: Y7,
      getterFor: K7
    }
  });
  var CE = T((aY, xE) => {
    var Ko = ht(),
      Q7 = dt(),
      AE = Function.prototype,
      $7 = Ko && Object.getOwnPropertyDescriptor,
      Qo = Q7(AE, "name"),
      Z7 = Qo && function () {}.name === "something",
      J7 = Qo && (!Ko || Ko && $7(AE, "name").configurable);
    xE.exports = {
      EXISTS: Qo,
      PROPER: Z7,
      CONFIGURABLE: J7
    }
  });
  var Li = T((sY, RE) => {
    var eq = pe(),
      PE = Le(),
      tq = dt(),
      OE = Ci(),
      rq = Ai(),
      nq = Pi(),
      wE = Yo(),
      iq = CE().CONFIGURABLE,
      aq = wE.get,
      sq = wE.enforce,
      oq = String(String).split("String");
    (RE.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        a = n ? !!n.enumerable : !1,
        s = n ? !!n.noTargetGet : !1,
        o = n && n.name !== void 0 ? n.name : t,
        l;
      if (PE(r) && (String(o).slice(0, 7) === "Symbol(" && (o = "[" + String(o).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!tq(r, "name") || iq && r.name !== o) && OE(r, "name", o), l = sq(r), l.source || (l.source = oq.join(typeof o == "string" ? o : ""))), e === eq) {
        a ? e[t] = r : rq(t, r);
        return
      } else i ? !s && e[t] && (a = !0) : delete e[t];
      a ? e[t] = r : OE(e, t, r)
    })(Function.prototype, "toString", function () {
      return PE(this) && aq(this).source || nq(this)
    })
  });
  var $o = T((oY, ME) => {
    var lq = Math.ceil,
      uq = Math.floor;
    ME.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? uq : lq)(t)
    }
  });
  var FE = T((lY, LE) => {
    var cq = $o(),
      fq = Math.max,
      hq = Math.min;
    LE.exports = function (e, t) {
      var r = cq(e);
      return r < 0 ? fq(r + t, 0) : hq(r, t)
    }
  });
  var NE = T((uY, DE) => {
    var pq = $o(),
      dq = Math.min;
    DE.exports = function (e) {
      return e > 0 ? dq(pq(e), 9007199254740991) : 0
    }
  });
  var jt = T((cY, kE) => {
    var mq = NE();
    kE.exports = function (e) {
      return mq(e.length)
    }
  });
  var GE = T((fY, qE) => {
    var gq = $r(),
      yq = FE(),
      vq = jt(),
      VE = function (e) {
        return function (t, r, n) {
          var i = gq(t),
            a = vq(i),
            s = yq(n, a),
            o;
          if (e && r != r) {
            for (; a > s;)
              if (o = i[s++], o != o) return !0
          } else
            for (; a > s; s++)
              if ((e || s in i) && i[s] === r) return e || s || 0;
          return !e && -1
        }
      };
    qE.exports = {
      includes: VE(!0),
      indexOf: VE(!1)
    }
  });
  var Jo = T((hY, UE) => {
    var Eq = Oe(),
      Zo = dt(),
      bq = $r(),
      Tq = GE().indexOf,
      Iq = wi(),
      BE = Eq([].push);
    UE.exports = function (e, t) {
      var r = bq(e),
        n = 0,
        i = [],
        a;
      for (a in r) !Zo(Iq, a) && Zo(r, a) && BE(i, a);
      for (; t.length > n;) Zo(r, a = t[n++]) && (~Tq(i, a) || BE(i, a));
      return i
    }
  });
  var Fi = T((pY, zE) => {
    zE.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  });
  var WE = T(HE => {
    var _q = Jo(),
      Sq = Fi(),
      Aq = Sq.concat("length", "prototype");
    HE.f = Object.getOwnPropertyNames || function (t) {
      return _q(t, Aq)
    }
  });
  var jE = T(XE => {
    XE.f = Object.getOwnPropertySymbols
  });
  var KE = T((gY, YE) => {
    var xq = st(),
      Cq = Oe(),
      Pq = WE(),
      Oq = jE(),
      wq = mt(),
      Rq = Cq([].concat);
    YE.exports = xq("Reflect", "ownKeys") || function (t) {
      var r = Pq.f(wq(t)),
        n = Oq.f;
      return n ? Rq(r, n(t)) : r
    }
  });
  var $E = T((yY, QE) => {
    var Mq = dt(),
      Lq = KE(),
      Fq = Bo(),
      Dq = Wt();
    QE.exports = function (e, t) {
      for (var r = Lq(t), n = Dq.f, i = Fq.f, a = 0; a < r.length; a++) {
        var s = r[a];
        Mq(e, s) || n(e, s, i(t, s))
      }
    }
  });
  var JE = T((vY, ZE) => {
    var Nq = xt(),
      kq = Le(),
      Vq = /#|\.prototype\./,
      en = function (e, t) {
        var r = Gq[qq(e)];
        return r == Uq ? !0 : r == Bq ? !1 : kq(t) ? Nq(t) : !!t
      },
      qq = en.normalize = function (e) {
        return String(e).replace(Vq, ".").toLowerCase()
      },
      Gq = en.data = {},
      Bq = en.NATIVE = "N",
      Uq = en.POLYFILL = "P";
    ZE.exports = en
  });
  var Yt = T((EY, e1) => {
    var el = pe(),
      zq = Bo().f,
      Hq = Ci(),
      Wq = Li(),
      Xq = Ai(),
      jq = $E(),
      Yq = JE();
    e1.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        a, s, o, l, p, c;
      if (n ? s = el : i ? s = el[r] || Xq(r, {}) : s = (el[r] || {}).prototype, s)
        for (o in t) {
          if (p = t[o], e.noTargetGet ? (c = zq(s, o), l = c && c.value) : l = s[o], a = Yq(n ? o : r + (i ? "." : "#") + o, e.forced), !a && l !== void 0) {
            if (typeof p == typeof l) continue;
            jq(p, l)
          }(e.sham || l && l.sham) && Hq(p, "sham", !0), Wq(s, o, p, e)
        }
    }
  });
  var Di = T((bY, n1) => {
    var t1 = Oe(),
      Kq = Ir(),
      r1 = t1(t1.bind);
    n1.exports = function (e, t) {
      return Kq(e), t === void 0 ? e : r1 ? r1(e, t) : function () {
        return e.apply(t, arguments)
      }
    }
  });
  var s1 = T((TY, a1) => {
    var Qq = ot(),
      $q = Qq("toStringTag"),
      i1 = {};
    i1[$q] = "z";
    a1.exports = String(i1) === "[object z]"
  });
  var tl = T((IY, o1) => {
    var Zq = pe(),
      Jq = s1(),
      eG = Le(),
      Ni = Ii(),
      tG = ot(),
      rG = tG("toStringTag"),
      nG = Zq.Object,
      iG = Ni(function () {
        return arguments
      }()) == "Arguments",
      aG = function (e, t) {
        try {
          return e[t]
        } catch {}
      };
    o1.exports = Jq ? Ni : function (e) {
      var t, r, n;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = aG(t = nG(e), rG)) == "string" ? r : iG ? Ni(t) : (n = Ni(t)) == "Object" && eG(t.callee) ? "Arguments" : n
    }
  });
  var nl = T((_Y, f1) => {
    var sG = Oe(),
      oG = xt(),
      l1 = Le(),
      lG = tl(),
      uG = st(),
      cG = Pi(),
      u1 = function () {},
      fG = [],
      c1 = uG("Reflect", "construct"),
      rl = /^\s*(?:class|function)\b/,
      hG = sG(rl.exec),
      pG = !rl.exec(u1),
      tn = function (e) {
        if (!l1(e)) return !1;
        try {
          return c1(u1, fG, e), !0
        } catch {
          return !1
        }
      },
      dG = function (e) {
        if (!l1(e)) return !1;
        switch (lG(e)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1
        }
        return pG || !!hG(rl, cG(e))
      };
    f1.exports = !c1 || oG(function () {
      var e;
      return tn(tn.call) || !tn(Object) || !tn(function () {
        e = !0
      }) || e
    }) ? dG : tn
  });
  var m1 = T((SY, d1) => {
    var il = Function.prototype,
      h1 = il.apply,
      mG = il.bind,
      p1 = il.call;
    d1.exports = typeof Reflect == "object" && Reflect.apply || (mG ? p1.bind(h1) : function () {
      return p1.apply(h1, arguments)
    })
  });
  var y1 = T((AY, g1) => {
    var gG = Jo(),
      yG = Fi();
    g1.exports = Object.keys || function (t) {
      return gG(t, yG)
    }
  });
  var E1 = T((xY, v1) => {
    var vG = ht(),
      EG = Wt(),
      bG = mt(),
      TG = $r(),
      IG = y1();
    v1.exports = vG ? Object.defineProperties : function (t, r) {
      bG(t);
      for (var n = TG(r), i = IG(r), a = i.length, s = 0, o; a > s;) EG.f(t, o = i[s++], n[o]);
      return t
    }
  });
  var T1 = T((CY, b1) => {
    var _G = st();
    b1.exports = _G("document", "documentElement")
  });
  var rn = T((PY, P1) => {
    var SG = mt(),
      AG = E1(),
      I1 = Fi(),
      xG = wi(),
      CG = T1(),
      PG = qo(),
      OG = Oi(),
      _1 = ">",
      S1 = "<",
      sl = "prototype",
      ol = "script",
      x1 = OG("IE_PROTO"),
      al = function () {},
      C1 = function (e) {
        return S1 + ol + _1 + e + S1 + "/" + ol + _1
      },
      A1 = function (e) {
        e.write(C1("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
      },
      wG = function () {
        var e = PG("iframe"),
          t = "java" + ol + ":",
          r;
        return e.style.display = "none", CG.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(C1("document.F=Object")), r.close(), r.F
      },
      ki, Vi = function () {
        try {
          ki = new ActiveXObject("htmlfile")
        } catch {}
        Vi = typeof document < "u" ? document.domain && ki ? A1(ki) : wG() : A1(ki);
        for (var e = I1.length; e--;) delete Vi[sl][I1[e]];
        return Vi()
      };
    xG[x1] = !0;
    P1.exports = Object.create || function (t, r) {
      var n;
      return t !== null ? (al[sl] = SG(t), n = new al, al[sl] = null, n[x1] = t) : n = Vi(), r === void 0 ? n : AG(n, r)
    }
  });
  var w1 = T((OY, O1) => {
    var RG = Li();
    O1.exports = function (e, t, r) {
      for (var n in t) RG(e, n, t[n], r);
      return e
    }
  });
  var M1 = T((wY, R1) => {
    var MG = xt();
    R1.exports = !MG(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    })
  });
  var D1 = T((RY, F1) => {
    var LG = pe(),
      FG = dt(),
      DG = Le(),
      NG = pt(),
      kG = Oi(),
      VG = M1(),
      L1 = kG("IE_PROTO"),
      ll = LG.Object,
      qG = ll.prototype;
    F1.exports = VG ? ll.getPrototypeOf : function (e) {
      var t = NG(e);
      if (FG(t, L1)) return t[L1];
      var r = t.constructor;
      return DG(r) && t instanceof r ? r.prototype : t instanceof ll ? qG : null
    }
  });
  var H1 = T((MY, z1) => {
    var G1 = pe(),
      B1 = Zr(),
      U1 = Le(),
      GG = rn(),
      qi = D1(),
      BG = Li(),
      UG = ot(),
      zG = Do(),
      N1 = "USE_FUNCTION_CONSTRUCTOR",
      k1 = UG("asyncIterator"),
      V1 = G1.AsyncIterator,
      q1 = B1.AsyncIteratorPrototype,
      lt, ul;
    if (q1) lt = q1;
    else if (U1(V1)) lt = V1.prototype;
    else if (B1[N1] || G1[N1]) try {
      ul = qi(qi(qi(Function("return async function*(){}()")()))), qi(ul) === Object.prototype && (lt = ul)
    } catch {}
    lt ? zG && (lt = GG(lt)) : lt = {};
    U1(lt[k1]) || BG(lt, k1, function () {
      return this
    });
    z1.exports = lt
  });
  var pl = T((LY, Y1) => {
    "use strict";
    var cl = m1(),
      Gi = mt(),
      HG = rn(),
      W1 = zt(),
      WG = w1(),
      X1 = Yo(),
      XG = st(),
      jG = H1(),
      Bi = XG("Promise"),
      YG = X1.set,
      fl = X1.get,
      hl = function (e, t, r) {
        var n = e.done;
        Bi.resolve(e.value).then(function (i) {
          t({
            done: n,
            value: i
          })
        }, r)
      },
      j1 = function (t) {
        YG(this, {
          iterator: Gi(t),
          next: t.next
        })
      };
    j1.prototype = WG(HG(jG), {
      next: function (t) {
        var r = fl(this),
          n = !!arguments.length;
        return new Bi(function (i, a) {
          var s = Gi(cl(r.next, r.iterator, n ? [t] : []));
          hl(s, i, a)
        })
      },
      return: function (e) {
        var t = fl(this).iterator,
          r = !!arguments.length;
        return new Bi(function (n, i) {
          var a = W1(t, "return");
          if (a === void 0) return n({
            done: !0,
            value: e
          });
          var s = Gi(cl(a, t, r ? [e] : []));
          hl(s, n, i)
        })
      },
      throw: function (e) {
        var t = fl(this).iterator,
          r = !!arguments.length;
        return new Bi(function (n, i) {
          var a = W1(t, "throw");
          if (a === void 0) return i(e);
          var s = Gi(cl(a, t, r ? [e] : []));
          hl(s, n, i)
        })
      }
    });
    Y1.exports = j1
  });
  var Q1 = T((FY, K1) => {
    K1.exports = {}
  });
  var dl = T((DY, Z1) => {
    var KG = tl(),
      $1 = zt(),
      QG = Q1(),
      $G = ot(),
      ZG = $G("iterator");
    Z1.exports = function (e) {
      if (e != null) return $1(e, ZG) || $1(e, "@@iterator") || QG[KG(e)]
    }
  });
  var ml = T((NY, J1) => {
    var JG = pe(),
      eB = Bt(),
      tB = Ir(),
      rB = mt(),
      nB = Ro(),
      iB = dl(),
      aB = JG.TypeError;
    J1.exports = function (e, t) {
      var r = arguments.length < 2 ? iB(e) : t;
      if (tB(r)) return rB(eB(r, e));
      throw aB(nB(e) + " is not iterable")
    }
  });
  var tb = T((kY, eb) => {
    var sB = Bt(),
      oB = pl(),
      lB = mt(),
      uB = ml(),
      cB = zt(),
      fB = ot(),
      hB = fB("asyncIterator");
    eb.exports = function (e, t) {
      var r = arguments.length < 2 ? cB(e, hB) : t;
      return r ? lB(sB(r, e)) : new oB(uB(e))
    }
  });
  var nb = T((VY, rb) => {
    var pB = pe();
    rb.exports = function (e) {
      return pB[e].prototype
    }
  });
  var lb = T((qY, sb) => {
    "use strict";
    var dB = pe(),
      ib = Bt(),
      ab = Ir(),
      gl = mt(),
      mB = st(),
      gB = zt(),
      yB = 9007199254740991,
      vB = dB.TypeError,
      nn = function (e) {
        var t = e == 0,
          r = e == 1,
          n = e == 2,
          i = e == 3;
        return function (a, s, o) {
          gl(a);
          var l = mB("Promise"),
            p = ab(a.next),
            c = 0,
            f = s !== void 0;
          return (f || !t) && ab(s), new l(function (g, d) {
            var h = function (y, v) {
                try {
                  var E = gB(a, "return");
                  if (E) return l.resolve(ib(E, a)).then(function () {
                    y(v)
                  }, function (b) {
                    d(b)
                  })
                } catch (b) {
                  return d(b)
                }
                y(v)
              },
              m = function (y) {
                h(d, y)
              },
              u = function () {
                try {
                  if (t && c > yB && f) throw vB("The allowed number of iterations has been exceeded");
                  l.resolve(gl(ib(p, a))).then(function (y) {
                    try {
                      if (gl(y).done) t ? (o.length = c, g(o)) : g(i ? !1 : n || void 0);
                      else {
                        var v = y.value;
                        f ? l.resolve(t ? s(v, c) : s(v)).then(function (E) {
                          r ? u() : n ? E ? u() : h(g, !1) : t ? (o[c++] = E, u()) : E ? h(g, i || v) : u()
                        }, m) : (o[c++] = v, u())
                      }
                    } catch (E) {
                      m(E)
                    }
                  }, m)
                } catch (y) {
                  m(y)
                }
              };
            u()
          })
        }
      };
    sb.exports = {
      toArray: nn(0),
      forEach: nn(1),
      every: nn(2),
      some: nn(3),
      find: nn(4)
    }
  });
  var cb = T((GY, ub) => {
    "use strict";
    var EB = Di(),
      bB = pt(),
      TB = nl(),
      IB = tb(),
      _B = ml(),
      SB = dl(),
      AB = zt(),
      xB = nb(),
      CB = st(),
      PB = ot(),
      OB = pl(),
      wB = lb().toArray,
      RB = PB("asyncIterator"),
      MB = xB("Array").values;
    ub.exports = function (t) {
      var r = this,
        n = arguments.length,
        i = n > 1 ? arguments[1] : void 0,
        a = n > 2 ? arguments[2] : void 0;
      return new(CB("Promise"))(function (s) {
        var o = bB(t);
        i !== void 0 && (i = EB(i, a));
        var l = AB(o, RB),
          p = l ? void 0 : SB(o) || MB,
          c = TB(r) ? new r : [],
          f = l ? IB(o, l) : new OB(_B(o, p));
        s(wB(f, i, c))
      })
    }
  });
  var fb = T(() => {
    var LB = Yt(),
      FB = cb();
    LB({
      target: "Array",
      stat: !0
    }, {
      fromAsync: FB
    })
  });
  var yl = T((zY, hb) => {
    var DB = Ii();
    hb.exports = Array.isArray || function (t) {
      return DB(t) == "Array"
    }
  });
  var vl = T((HY, mb) => {
    var NB = pe(),
      pb = yl(),
      kB = nl(),
      VB = Ut(),
      qB = ot(),
      GB = qB("species"),
      db = NB.Array;
    mb.exports = function (e) {
      var t;
      return pb(e) && (t = e.constructor, kB(t) && (t === db || pb(t.prototype)) ? t = void 0 : VB(t) && (t = t[GB], t === null && (t = void 0))), t === void 0 ? db : t
    }
  });
  var El = T((WY, gb) => {
    var BB = vl();
    gb.exports = function (e, t) {
      return new(BB(e))(t === 0 ? 0 : t)
    }
  });
  var bl = T((XY, vb) => {
    var UB = Di(),
      zB = Oe(),
      HB = _i(),
      WB = pt(),
      XB = jt(),
      jB = El(),
      yb = zB([].push),
      Pt = function (e) {
        var t = e == 1,
          r = e == 2,
          n = e == 3,
          i = e == 4,
          a = e == 6,
          s = e == 7,
          o = e == 5 || a;
        return function (l, p, c, f) {
          for (var g = WB(l), d = HB(g), h = UB(p, c), m = XB(d), u = 0, y = f || jB, v = t ? y(l, m) : r || s ? y(l, 0) : void 0, E, b; m > u; u++)
            if ((o || u in d) && (E = d[u], b = h(E, u, g), e))
              if (t) v[u] = b;
              else if (b) switch (e) {
            case 3:
              return !0;
            case 5:
              return E;
            case 6:
              return u;
            case 2:
              yb(v, E)
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              yb(v, E)
          }
          return a ? -1 : n || i ? i : v
        }
      };
    vb.exports = {
      forEach: Pt(0),
      map: Pt(1),
      filter: Pt(2),
      some: Pt(3),
      every: Pt(4),
      find: Pt(5),
      findIndex: Pt(6),
      filterReject: Pt(7)
    }
  });
  var Kt = T((jY, Eb) => {
    var YB = ot(),
      KB = rn(),
      QB = Wt(),
      Tl = YB("unscopables"),
      Il = Array.prototype;
    Il[Tl] == null && QB.f(Il, Tl, {
      configurable: !0,
      value: KB(null)
    });
    Eb.exports = function (e) {
      Il[Tl][e] = !0
    }
  });
  var bb = T(() => {
    "use strict";
    var $B = Yt(),
      ZB = bl().filterReject,
      JB = Kt();
    $B({
      target: "Array",
      proto: !0
    }, {
      filterOut: function (t) {
        return ZB(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    JB("filterOut")
  });
  var Tb = T(() => {
    "use strict";
    var e9 = Yt(),
      t9 = bl().filterReject,
      r9 = Kt();
    e9({
      target: "Array",
      proto: !0
    }, {
      filterReject: function (t) {
        return t9(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    });
    r9("filterReject")
  });
  var _b = T((ZY, Ib) => {
    Ib.exports = function (e, t) {
      for (var r = 0, n = t.length, i = new e(n); n > r;) i[r] = t[r++];
      return i
    }
  });
  var Ab = T((JY, Sb) => {
    var n9 = pe(),
      i9 = Di(),
      a9 = Oe(),
      s9 = _i(),
      o9 = pt(),
      l9 = xi(),
      u9 = jt(),
      c9 = rn(),
      f9 = _b(),
      h9 = n9.Array,
      p9 = a9([].push);
    Sb.exports = function (e, t, r, n) {
      for (var i = o9(e), a = s9(i), s = i9(t, r), o = c9(null), l = u9(a), p = 0, c, f, g; l > p; p++) g = a[p], f = l9(s(g, p, i)), f in o ? p9(o[f], g) : o[f] = [g];
      if (n && (c = n(i), c !== h9))
        for (f in o) o[f] = f9(c, o[f]);
      return o
    }
  });
  var xb = T(() => {
    "use strict";
    var d9 = Yt(),
      m9 = Ab(),
      g9 = vl(),
      y9 = Kt();
    d9({
      target: "Array",
      proto: !0
    }, {
      groupBy: function (t) {
        var r = arguments.length > 1 ? arguments[1] : void 0;
        return m9(this, t, r, g9)
      }
    });
    y9("groupBy")
  });
  var Ob = T(() => {
    var v9 = Yt(),
      E9 = yl(),
      Cb = Object.isFrozen,
      Pb = function (e, t) {
        if (!Cb || !E9(e) || !Cb(e)) return !1;
        for (var r = 0, n = e.length, i; r < n;)
          if (i = e[r++], !(typeof i == "string" || t && typeof i > "u")) return !1;
        return n !== 0
      };
    v9({
      target: "Array",
      stat: !0
    }, {
      isTemplateObject: function (t) {
        if (!Pb(t, !0)) return !1;
        var r = t.raw;
        return !(r.length !== t.length || !Pb(r, !1))
      }
    })
  });
  var wb = T(() => {
    "use strict";
    var b9 = ht(),
      T9 = Kt(),
      I9 = pt(),
      _9 = jt(),
      S9 = Wt().f;
    b9 && !("lastIndex" in []) && (S9(Array.prototype, "lastIndex", {
      configurable: !0,
      get: function () {
        var t = I9(this),
          r = _9(t);
        return r == 0 ? 0 : r - 1
      }
    }), T9("lastIndex"))
  });
  var Lb = T(() => {
    "use strict";
    var A9 = ht(),
      x9 = Kt(),
      Rb = pt(),
      Mb = jt(),
      C9 = Wt().f;
    A9 && !("lastItem" in []) && (C9(Array.prototype, "lastItem", {
      configurable: !0,
      get: function () {
        var t = Rb(this),
          r = Mb(t);
        return r == 0 ? void 0 : t[r - 1]
      },
      set: function (t) {
        var r = Rb(this),
          n = Mb(r);
        return r[n == 0 ? 0 : n - 1] = t
      }
    }), x9("lastItem"))
  });
  var Nb = T((lK, Db) => {
    "use strict";
    var P9 = st(),
      Ui = Oe(),
      O9 = Ir(),
      w9 = jt(),
      R9 = pt(),
      M9 = El(),
      Fb = P9("Map"),
      _l = Fb.prototype,
      L9 = Ui(_l.forEach),
      F9 = Ui(_l.has),
      D9 = Ui(_l.set),
      N9 = Ui([].push);
    Db.exports = function (t) {
      var r = R9(this),
        n = w9(r),
        i = M9(r, 0),
        a = new Fb,
        s = t != null ? O9(t) : function (c) {
          return c
        },
        o, l, p;
      for (o = 0; o < n; o++) l = r[o], p = s(l), F9(a, p) || D9(a, p, l);
      return L9(a, function (c) {
        N9(i, c)
      }), i
    }
  });
  var kb = T(() => {
    "use strict";
    var k9 = Yt(),
      V9 = Kt(),
      q9 = Nb();
    k9({
      target: "Array",
      proto: !0
    }, {
      uniqueBy: q9
    });
    V9("uniqueBy")
  });
  var tT = T(Ol => {
    "use strict";
    Object.defineProperty(Ol, "__esModule", {
      value: !0
    });

    function G9(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    G9(Ol, {
      strFromU8: function () {
        return eT
      },
      unzip: function () {
        return J9
      }
    });
    var Vb = {},
      B9 = function (e, t, r, n, i) {
        let a = new Worker(Vb[t] || (Vb[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
          type: "text/javascript"
        }))));
        return a.onmessage = function (s) {
          let o = s.data,
            l = o.$e$;
          if (l) {
            let p = new Error(l[0]);
            p.code = l[1], p.stack = l[2], i(p, null)
          } else i(null, o)
        }, a.postMessage(r, n), a
      },
      De = Uint8Array,
      wt = Uint16Array,
      Sl = Uint32Array,
      Al = new De([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      xl = new De([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      Ub = new De([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      zb = function (e, t) {
        let r = new wt(31);
        for (var n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
        let i = new Sl(r[30]);
        for (n = 1; n < 30; ++n)
          for (let a = r[n]; a < r[n + 1]; ++a) i[a] = a - r[n] << 5 | n;
        return [r, i]
      },
      Hb = zb(Al, 2),
      Cl = Hb[0],
      U9 = Hb[1];
    Cl[28] = 258, U9[258] = 28;
    var z9 = zb(xl, 0),
      Wb = z9[0],
      Xi = new wt(32768);
    for (ge = 0; ge < 32768; ++ge) {
      let e = (43690 & ge) >>> 1 | (21845 & ge) << 1;
      e = (52428 & e) >>> 2 | (13107 & e) << 2, e = (61680 & e) >>> 4 | (3855 & e) << 4, Xi[ge] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
    }
    var ge, Sr = function (e, t, r) {
        let n = e.length,
          i = 0,
          a = new wt(t);
        for (; i < n; ++i) e[i] && ++a[e[i] - 1];
        let s = new wt(t);
        for (i = 0; i < t; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
        let o;
        if (r) {
          o = new wt(1 << t);
          let l = 15 - t;
          for (i = 0; i < n; ++i)
            if (e[i]) {
              let p = i << 4 | e[i],
                c = t - e[i],
                f = s[e[i] - 1]++ << c;
              for (let g = f | (1 << c) - 1; f <= g; ++f) o[Xi[f] >>> l] = p
            }
        } else
          for (o = new wt(n), i = 0; i < n; ++i) e[i] && (o[i] = Xi[s[e[i] - 1]++] >>> 15 - e[i]);
        return o
      },
      an = new De(288);
    for (ge = 0; ge < 144; ++ge) an[ge] = 8;
    for (ge = 144; ge < 256; ++ge) an[ge] = 9;
    for (ge = 256; ge < 280; ++ge) an[ge] = 7;
    for (ge = 280; ge < 288; ++ge) an[ge] = 8;
    var Xb = new De(32);
    for (ge = 0; ge < 32; ++ge) Xb[ge] = 5;
    var jb = Sr(an, 9, 1),
      Yb = Sr(Xb, 5, 1),
      Hi = function (e) {
        let t = e[0];
        for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
        return t
      },
      ze = function (e, t, r) {
        let n = t / 8 | 0;
        return (e[n] | e[n + 1] << 8) >> (7 & t) & r
      },
      Wi = function (e, t) {
        let r = t / 8 | 0;
        return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
      },
      Kb = function (e) {
        return (e + 7) / 8 | 0
      },
      ji = function (e, t, r) {
        (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
        let n = new(e.BYTES_PER_ELEMENT === 2 ? wt : e.BYTES_PER_ELEMENT === 4 ? Sl : De)(r - t);
        return n.set(e.subarray(t, r)), n
      },
      Qb = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
      Fe = function (e, t, r) {
        let n = new Error(t || Qb[e]);
        if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, Fe), !r) throw n;
        return n
      },
      $b = function (e, t, r) {
        let n = e.length;
        if (!n || r && r.f && !r.l) return t || new De(0);
        let i = !t || r,
          a = !r || r.i;
        r || (r = {}), t || (t = new De(3 * n));
        let s = function (b) {
            let I = t.length;
            if (b > I) {
              let S = new De(Math.max(2 * I, b));
              S.set(t), t = S
            }
          },
          o = r.f || 0,
          l = r.p || 0,
          p = r.b || 0,
          c = r.l,
          f = r.d,
          g = r.m,
          d = r.n,
          h = 8 * n;
        do {
          if (!c) {
            o = ze(e, l, 1);
            let _ = ze(e, l + 1, 3);
            if (l += 3, !_) {
              let A = e[(u = Kb(l) + 4) - 4] | e[u - 3] << 8,
                D = u + A;
              if (D > n) {
                a && Fe(0);
                break
              }
              i && s(p + A), t.set(e.subarray(u, D), p), r.b = p += A, r.p = l = 8 * D, r.f = o;
              continue
            }
            if (_ === 1) c = jb, f = Yb, g = 9, d = 5;
            else if (_ === 2) {
              let A = ze(e, l, 31) + 257,
                D = ze(e, l + 10, 15) + 4,
                w = A + ze(e, l + 5, 31) + 1;
              l += 14;
              let O = new De(w),
                V = new De(19);
              for (var m = 0; m < D; ++m) V[Ub[m]] = ze(e, l + 3 * m, 7);
              l += 3 * D;
              let M = Hi(V),
                L = (1 << M) - 1,
                G = Sr(V, M, 1);
              for (m = 0; m < w;) {
                let re = G[ze(e, l, L)];
                var u;
                if (l += 15 & re, (u = re >>> 4) < 16) O[m++] = u;
                else {
                  var y = 0;
                  let x = 0;
                  for (u === 16 ? (x = 3 + ze(e, l, 3), l += 2, y = O[m - 1]) : u === 17 ? (x = 3 + ze(e, l, 7), l += 3) : u === 18 && (x = 11 + ze(e, l, 127), l += 7); x--;) O[m++] = y
                }
              }
              let z = O.subarray(0, A);
              var v = O.subarray(A);
              g = Hi(z), d = Hi(v), c = Sr(z, g, 1), f = Sr(v, d, 1)
            } else Fe(1);
            if (l > h) {
              a && Fe(0);
              break
            }
          }
          i && s(p + 131072);
          let b = (1 << g) - 1,
            I = (1 << d) - 1,
            S = l;
          for (;; S = l) {
            let _ = (y = c[Wi(e, l) & b]) >>> 4;
            if (l += 15 & y, l > h) {
              a && Fe(0);
              break
            }
            if (y || Fe(2), _ < 256) t[p++] = _;
            else {
              if (_ === 256) {
                S = l, c = null;
                break
              } {
                let A = _ - 254;
                if (_ > 264) {
                  var E = Al[m = _ - 257];
                  A = ze(e, l, (1 << E) - 1) + Cl[m], l += E
                }
                let D = f[Wi(e, l) & I],
                  w = D >>> 4;
                if (D || Fe(3), l += 15 & D, v = Wb[w], w > 3 && (E = xl[w], v += Wi(e, l) & (1 << E) - 1, l += E), l > h) {
                  a && Fe(0);
                  break
                }
                i && s(p + 131072);
                let O = p + A;
                for (; p < O; p += 4) t[p] = t[p - v], t[p + 1] = t[p + 1 - v], t[p + 2] = t[p + 2 - v], t[p + 3] = t[p + 3 - v];
                p = O
              }
            }
          }
          r.l = c, r.p = S, r.b = p, r.f = o, c && (o = 1, r.m = g, r.d = f, r.n = d)
        } while (!o);
        return p === t.length ? t : ji(t, 0, p)
      },
      H9 = function (e, t) {
        let r = {};
        for (var n in e) r[n] = e[n];
        for (var n in t) r[n] = t[n];
        return r
      },
      qb = function (e, t, r) {
        let n = e(),
          i = e.toString(),
          a = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(",");
        for (let s = 0; s < n.length; ++s) {
          let o = n[s],
            l = a[s];
          if (typeof o == "function") {
            t += ";" + l + "=";
            let p = o.toString();
            if (o.prototype)
              if (p.indexOf("[native code]") !== -1) {
                let c = p.indexOf(" ", 8) + 1;
                t += p.slice(c, p.indexOf("(", c))
              } else {
                t += p;
                for (let c in o.prototype) t += ";" + l + ".prototype." + c + "=" + o.prototype[c].toString()
              }
            else t += p
          } else r[l] = o
        }
        return [t, r]
      },
      zi = [],
      W9 = function (e) {
        let t = [];
        for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
        return t
      },
      X9 = function (e, t, r, n) {
        let i;
        if (!zi[r]) {
          let s = "",
            o = {},
            l = e.length - 1;
          for (let p = 0; p < l; ++p) i = qb(e[p], s, o), s = i[0], o = i[1];
          zi[r] = qb(e[l], s, o)
        }
        let a = H9({}, zi[r][1]);
        return B9(zi[r][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", r, a, W9(a), n)
      },
      j9 = function () {
        return [De, wt, Sl, Al, xl, Ub, Cl, Wb, jb, Yb, Xi, Qb, Sr, Hi, ze, Wi, Kb, ji, Fe, $b, Pl, Zb, Jb]
      },
      Zb = function (e) {
        return postMessage(e, [e.buffer])
      },
      Jb = function (e) {
        return e && e.size && new De(e.size)
      },
      Y9 = function (e, t, r, n, i, a) {
        var s = X9(r, n, i, function (o, l) {
          s.terminate(), a(o, l)
        });
        return s.postMessage([e, t], t.consume ? [e.buffer] : []),
          function () {
            s.terminate()
          }
      },
      Ot = function (e, t) {
        return e[t] | e[t + 1] << 8
      },
      gt = function (e, t) {
        return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
      };

    function K9(e, t, r) {
      return r || (r = t, t = {}), typeof r != "function" && Fe(7), Y9(e, t, [j9], function (n) {
        return Zb(Pl(n.data[0], Jb(n.data[1])))
      }, 1, r)
    }

    function Pl(e, t) {
      return $b(e, t)
    }
    var Gb = typeof TextDecoder < "u" && new TextDecoder,
      Q9 = function (e) {
        for (let t = "", r = 0;;) {
          let n = e[r++],
            i = (n > 127) + (n > 223) + (n > 239);
          if (r + i > e.length) return [t, ji(e, r - 1)];
          i ? i === 3 ? (n = ((15 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, t += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)) : t += 1 & i ? String.fromCharCode((31 & n) << 6 | 63 & e[r++]) : String.fromCharCode((15 & n) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(n)
        }
      };

    function eT(e, t) {
      if (t) {
        let r = "";
        for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
        return r
      }
      if (Gb) return Gb.decode(e); {
        let r = Q9(e),
          n = r[0];
        return r[1].length && Fe(8), n
      }
    }
    var $9 = function (e, t) {
        return t + 30 + Ot(e, t + 26) + Ot(e, t + 28)
      },
      Z9 = function (e, t, r) {
        let n = Ot(e, t + 28),
          i = eT(e.subarray(t + 46, t + 46 + n), !(2048 & Ot(e, t + 8))),
          a = t + 46 + n,
          s = gt(e, t + 20),
          o = r && s === 4294967295 ? z64e(e, a) : [s, gt(e, t + 24), gt(e, t + 42)],
          l = o[0],
          p = o[1],
          c = o[2];
        return [Ot(e, t + 10), l, p, i, a + Ot(e, t + 30) + Ot(e, t + 32), c]
      },
      Bb = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function (e) {
        e()
      };

    function J9(e, t, r) {
      r || (r = t, t = {}), typeof r != "function" && Fe(7);
      let n = [],
        i = function () {
          for (let p = 0; p < n.length; ++p) n[p]()
        },
        a = {},
        s = function (p, c) {
          Bb(function () {
            r(p, c)
          })
        };
      Bb(function () {
        s = r
      });
      let o = e.length - 22;
      for (; gt(e, o) !== 101010256; --o)
        if (!o || e.length - o > 65558) return s(Fe(13, 0, 1), null), i;
      let l = Ot(e, o + 8);
      if (l) {
        let p = l,
          c = gt(e, o + 16),
          f = c === 4294967295 || p === 65535;
        if (f) {
          let h = gt(e, o - 12);
          f = gt(e, h) === 101075792, f && (p = l = gt(e, h + 32), c = gt(e, h + 48))
        }
        let g = t && t.filter,
          d = function () {
            let h = Z9(e, c, f),
              m = h[0],
              u = h[1],
              y = h[2],
              v = h[3],
              E = h[4],
              b = h[5],
              I = $9(e, b);
            c = E;
            let S = function (_, A) {
              _ ? (i(), s(_, null)) : (A && (a[v] = A), --l || s(null, a))
            };
            if (!g || g({
                name: v,
                size: u,
                originalSize: y,
                compression: m
              }))
              if (m)
                if (m === 8) {
                  let _ = e.subarray(I, I + u);
                  if (u < 32e4) try {
                    S(null, Pl(_, new De(y)))
                  } catch (A) {
                    S(A, null)
                  } else n.push(K9(_, {
                    size: y
                  }, S))
                } else S(Fe(14, "unknown compression type " + m, 1), null);
            else S(null, ji(e, I, I + u));
            else S(null, null)
          };
        for (let h = 0; h < p; ++h) d(h)
      } else s(null, {});
      return i
    }
  });
  var iT = T(wl => {
    "use strict";
    Object.defineProperty(wl, "__esModule", {
      value: !0
    });

    function eU(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    eU(wl, {
      fetchLottie: function () {
        return oU
      },
      unZipDotLottie: function () {
        return nT
      }
    });
    var rT = tT();

    function tU(e) {
      let t = JSON.parse(e);
      if (!("animations" in t)) throw new Error("Manifest not found");
      if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
      return t
    }

    function rU(e) {
      let t = new Uint8Array(e, 0, 32);
      return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4
    }
    async function nU(e) {
      return await fetch(new URL(e, window ? .location ? .href).href).then(t => t.arrayBuffer())
    }
    async function iU(e) {
      return (await new Promise(r => {
        let n = new FileReader;
        n.readAsDataURL(new Blob([e])), n.onload = () => r(n.result)
      })).split(",", 2)[1]
    }
    async function aU(e) {
      let t = new Uint8Array(e),
        r = await new Promise((n, i) => {
          (0, rT.unzip)(t, (a, s) => a ? i(a) : n(s))
        });
      return {
        read: n => (0, rT.strFromU8)(r[n]),
        readB64: async n => await iU(r[n])
      }
    }
    async function sU(e, t) {
      if (!("assets" in e)) return e;
      async function r(i) {
        let {
          p: a
        } = i;
        if (a == null || t.read(`images/${a}`) == null) return i;
        let s = a.split(".").pop(),
          o = await t.readB64(`images/${a}`);
        if (s ? .startsWith("data:")) return i.p = s, i.e = 1, i;
        switch (s) {
          case "svg":
          case "svg+xml":
            i.p = `data:image/svg+xml;base64,${o}`;
            break;
          case "png":
          case "jpg":
          case "jpeg":
          case "gif":
          case "webp":
            i.p = `data:image/${s};base64,${o}`;
            break;
          default:
            i.p = `data:;base64,${o}`
        }
        return i.e = 1, i
      }
      return (await Promise.all(e.assets.map(r))).map((i, a) => {
        e.assets[a] = i
      }), e
    }
    async function nT(e) {
      let t = await aU(e),
        r = tU(t.read("manifest.json"));
      return (await Promise.all(r.animations.map(i => {
        let a = JSON.parse(t.read(`animations/${i.id}.json`));
        return sU(a, t)
      })))[0]
    }
    async function oU(e) {
      let t = await nU(e);
      return rU(t) ? await nT(t) : JSON.parse(new TextDecoder().decode(t))
    }
  });
  var uT = T(Dl => {
    "use strict";
    Object.defineProperty(Dl, "__esModule", {
      value: !0
    });

    function lU(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    lU(Dl, {
      cleanupElement: function () {
        return Fl
      },
      createInstance: function () {
        return oT
      },
      destroy: function () {
        return pU
      },
      init: function () {
        return lT
      },
      ready: function () {
        return dU
      }
    });
    fb();
    bb();
    Tb();
    xb();
    Ob();
    wb();
    Lb();
    kb();
    var Rl = cU(rs()),
      uU = iT();

    function cU(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var fU = e => e.Webflow.require("lottie").lottie,
      hU = e => !!(e.Webflow.env("design") || e.Webflow.env("preview")),
      sn = {
        Playing: "playing",
        Stopped: "stopped"
      },
      Ml = class {
        _cache = [];
        set(t, r) {
          let n = (0, Rl.default)(this._cache, ({
            wrapper: i
          }) => i === t);
          n !== -1 && this._cache.splice(n, 1), this._cache.push({
            wrapper: t,
            instance: r
          })
        }
        delete(t) {
          let r = (0, Rl.default)(this._cache, ({
            wrapper: n
          }) => n === t);
          r !== -1 && this._cache.splice(r, 1)
        }
        get(t) {
          let r = (0, Rl.default)(this._cache, ({
            wrapper: n
          }) => n === t);
          return r !== -1 ? this._cache[r].instance : null
        }
      },
      Yi = new Ml,
      aT = {},
      Ll = class {
        config = null;
        currentState = sn.Stopped;
        animationItem;
        handlers = {
          enterFrame: [],
          complete: [],
          loop: [],
          dataReady: [],
          destroy: [],
          error: []
        };
        load(t) {
          let n = (t.dataset || aT).src || "";
          n.endsWith(".lottie") ? (0, uU.fetchLottie)(n).then(i => {
            this._loadAnimation(t, i)
          }) : this._loadAnimation(t, void 0), Yi.set(t, this), this.container = t
        }
        _loadAnimation(t, r) {
          let n = t.dataset || aT,
            i = n.src || "",
            a = n.preserveAspectRatio || "xMidYMid meet",
            s = n.renderer || "svg",
            o = parseFloat(n.loop) === 1,
            l = parseFloat(n.direction) || 1,
            p = parseFloat(n.autoplay) === 1,
            c = parseFloat(n.duration) || 0,
            f = parseFloat(n.isIx2Target) === 1,
            g = parseFloat(n.ix2InitialState);
          isNaN(g) && (g = null);
          let d = {
            src: i,
            loop: o,
            autoplay: p,
            renderer: s,
            direction: l,
            duration: c,
            hasIx2: f,
            ix2InitialValue: g,
            preserveAspectRatio: a
          };
          if (this.animationItem && this.config && this.config.src === i && s === this.config.renderer && a === this.config.preserveAspectRatio) {
            if (o !== this.config.loop && this.setLooping(o), f || (l !== this.config.direction && this.setDirection(l), c !== this.config.duration && (c > 0 && c !== this.duration ? this.setSpeed(this.duration / c) : this.setSpeed(1))), p && this.play(), g && g !== this.config.ix2InitialValue) {
              let u = g / 100;
              this.goToFrame(this.frames * u)
            }
            this.config = d;
            return
          }
          let h = {
              container: t,
              loop: o,
              autoplay: p,
              renderer: s,
              rendererSettings: {
                preserveAspectRatio: a,
                progressiveLoad: !0,
                hideOnTransparent: !0
              }
            },
            m = t.ownerDocument.defaultView;
          try {
            this.animationItem && this.destroy(), this.animationItem = fU(m).loadAnimation({
              ...h,
              ...r ? {
                animationData: r
              } : {
                path: i
              }
            })
          } catch (u) {
            this.handlers.error.forEach(y => y(u));
            return
          }
          this.animationItem && (hU(m) && (this.animationItem.addEventListener("enterFrame", () => {
            if (!this.isPlaying) return;
            let {
              currentFrame: u,
              totalFrames: y,
              playDirection: v
            } = this.animationItem, E = u / y * 100, b = Math.round(v === 1 ? E : 100 - E);
            this.handlers.enterFrame.forEach(I => I(b, u))
          }), this.animationItem.addEventListener("complete", () => {
            if (this.currentState !== sn.Playing) {
              this.handlers.complete.forEach(u => u());
              return
            }
            if (!this.animationItem.loop) {
              this.handlers.complete.forEach(u => u());
              return
            }
            this.currentState = sn.Stopped
          }), this.animationItem.addEventListener("loopComplete", u => {
            this.handlers.loop.forEach(y => y(u))
          }), this.animationItem.addEventListener("data_failed", u => {
            this.handlers.error.forEach(y => y(u))
          }), this.animationItem.addEventListener("error", u => {
            this.handlers.error.forEach(y => y(u))
          })), this.isLoaded ? (this.handlers.dataReady.forEach(u => u()), p && this.play()) : this.animationItem.addEventListener("data_ready", () => {
            if (this.handlers.dataReady.forEach(u => u()), f || (this.setDirection(l), c > 0 && c !== this.duration && this.setSpeed(this.duration / c), p && this.play()), g) {
              let u = g / 100;
              this.goToFrame(this.frames * u)
            }
          }), this.config = d)
        }
        onFrameChange(t) {
          this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t)
        }
        onPlaybackComplete(t) {
          this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t)
        }
        onLoopComplete(t) {
          this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t)
        }
        onDestroy(t) {
          this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t)
        }
        onDataReady(t) {
          this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t)
        }
        onError(t) {
          this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t)
        }
        play() {
          if (!this.animationItem) return;
          let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
          this.animationItem.goToAndPlay(t, !0), this.currentState = sn.Playing
        }
        stop() {
          if (this.animationItem) {
            if (this.isPlaying) {
              let {
                playDirection: t
              } = this.animationItem, r = t === 1 ? 0 : this.frames;
              this.animationItem.goToAndStop(r, !0)
            }
            this.currentState = sn.Stopped
          }
        }
        destroy() {
          this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && Yi.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
        }
        get isPlaying() {
          return this.animationItem ? !this.animationItem.isPaused : !1
        }
        get isPaused() {
          return this.animationItem ? this.animationItem.isPaused : !1
        }
        get duration() {
          return this.animationItem ? this.animationItem.getDuration() : 0
        }
        get frames() {
          return this.animationItem ? this.animationItem.totalFrames : 0
        }
        get direction() {
          return this.animationItem ? this.animationItem.playDirection : 1
        }
        get isLoaded() {
          return this.animationItem, this.animationItem.isLoaded
        }
        get ix2InitialValue() {
          return this.config ? this.config.ix2InitialValue : null
        }
        goToFrame(t) {
          this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
        }
        setSubframe(t) {
          this.animationItem && this.animationItem.setSubframe(t)
        }
        setSpeed(t = 1) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
        }
        setLooping(t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
        }
        setDirection(t) {
          this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(t === 1 ? 0 : this.frames))
        }
      },
      sT = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')),
      oT = e => {
        let t = Yi.get(e);
        return t == null && (t = new Ll), t.load(e), t
      },
      Fl = e => {
        let t = Yi.get(e);
        t && t.destroy()
      },
      lT = () => {
        sT().forEach(e => {
          parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || Fl(e), oT(e)
        })
      },
      pU = () => {
        sT().forEach(Fl)
      },
      dU = lT
  });
  var cT = T((exports, module) => {
    typeof navigator < "u" && function (e, t) {
      typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).lottie = t()
    }(exports, function () {
      "use strict";
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function (e) {
          _useWebWorker = !!e
        },
        getWebWorker = function () {
          return _useWebWorker
        },
        setLocationHref = function (e) {
          locationHref = e
        },
        getLocationHref = function () {
          return locationHref
        };

      function createTag(e) {
        return document.createElement(e)
      }

      function extendPrototype(e, t) {
        var r, n, i = e.length;
        for (r = 0; r < i; r += 1)
          for (var a in n = e[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a])
      }

      function getDescriptor(e, t) {
        return Object.getOwnPropertyDescriptor(e, t)
      }

      function createProxyFunction(e) {
        function t() {}
        return t.prototype = e, t
      }
      var audioControllerFactory = function () {
          function e(t) {
            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
          }
          return e.prototype = {
              addAudio: function (t) {
                this.audios.push(t)
              },
              pause: function () {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].pause()
              },
              resume: function () {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].resume()
              },
              setRate: function (t) {
                var r, n = this.audios.length;
                for (r = 0; r < n; r += 1) this.audios[r].setRate(t)
              },
              createAudio: function (t) {
                return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                  src: [t]
                }) : {
                  isPlaying: !1,
                  play: function () {
                    this.isPlaying = !0
                  },
                  seek: function () {
                    this.isPlaying = !1
                  },
                  playing: function () {},
                  rate: function () {},
                  setVolume: function () {}
                }
              },
              setAudioFactory: function (t) {
                this.audioFactory = t
              },
              setVolume: function (t) {
                this._volume = t, this._updateVolume()
              },
              mute: function () {
                this._isMuted = !0, this._updateVolume()
              },
              unmute: function () {
                this._isMuted = !1, this._updateVolume()
              },
              getVolume: function () {
                return this._volume
              },
              _updateVolume: function () {
                var t, r = this.audios.length;
                for (t = 0; t < r; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
              }
            },
            function () {
              return new e
            }
        }(),
        createTypedArray = function () {
          function e(t, r) {
            var n, i = 0,
              a = [];
            switch (t) {
              case "int16":
              case "uint8c":
                n = 1;
                break;
              default:
                n = 1.1
            }
            for (i = 0; i < r; i += 1) a.push(n);
            return a
          }
          return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function (t, r) {
            return t === "float32" ? new Float32Array(r) : t === "int16" ? new Int16Array(r) : t === "uint8c" ? new Uint8ClampedArray(r) : e(t, r)
          } : e
        }();

      function createSizedArray(e) {
        return Array.apply(null, {
          length: e
        })
      }

      function _typeof$6(e) {
        return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$6(e)
      }
      var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        _shouldRoundValues = !1,
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};

      function ProjectInterface$1() {
        return {}
      }(function () {
        var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
          r = t.length;
        for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
      })(), BMMath.random = Math.random, BMMath.abs = function (e) {
        if (_typeof$6(e) === "object" && e.length) {
          var t, r = createSizedArray(e.length),
            n = e.length;
          for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
          return r
        }
        return Math.abs(e)
      };
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;

      function roundValues(e) {
        _shouldRoundValues = !!e
      }

      function bmRnd(e) {
        return _shouldRoundValues ? Math.round(e) : e
      }

      function styleDiv(e) {
        e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
      }

      function BMEnterFrameEvent(e, t, r, n) {
        this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
      }

      function BMCompleteEvent(e, t) {
        this.type = e, this.direction = t < 0 ? -1 : 1
      }

      function BMCompleteLoopEvent(e, t, r, n) {
        this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
      }

      function BMSegmentStartEvent(e, t, r) {
        this.type = e, this.firstFrame = t, this.totalFrames = r
      }

      function BMDestroyEvent(e, t) {
        this.type = e, this.target = t
      }

      function BMRenderFrameErrorEvent(e, t) {
        this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
      }

      function BMConfigErrorEvent(e) {
        this.type = "configError", this.nativeError = e
      }

      function BMAnimationConfigErrorEvent(e, t) {
        this.type = e, this.nativeError = t
      }
      var createElementID = (_count = 0, function () {
          return idPrefix$1 + "__lottie_element_" + (_count += 1)
        }),
        _count;

      function HSVtoRGB(e, t, r) {
        var n, i, a, s, o, l, p, c;
        switch (l = r * (1 - t), p = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), c = r * (1 - (1 - o) * t), s % 6) {
          case 0:
            n = r, i = c, a = l;
            break;
          case 1:
            n = p, i = r, a = l;
            break;
          case 2:
            n = l, i = r, a = c;
            break;
          case 3:
            n = l, i = p, a = r;
            break;
          case 4:
            n = c, i = l, a = r;
            break;
          case 5:
            n = r, i = l, a = p
        }
        return [n, i, a]
      }

      function RGBtoHSV(e, t, r) {
        var n, i = Math.max(e, t, r),
          a = Math.min(e, t, r),
          s = i - a,
          o = i === 0 ? 0 : s / i,
          l = i / 255;
        switch (i) {
          case a:
            n = 0;
            break;
          case e:
            n = t - r + s * (t < r ? 6 : 0), n /= 6 * s;
            break;
          case t:
            n = r - e + 2 * s, n /= 6 * s;
            break;
          case r:
            n = e - t + 4 * s, n /= 6 * s
        }
        return [n, o, l]
      }

      function addSaturationToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addBrightnessToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
      }

      function addHueToRGB(e, t) {
        var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
        return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
      }
      var rgbToHex = function () {
          var e, t, r = [];
          for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = t.length === 1 ? "0" + t : t;
          return function (n, i, a) {
            return n < 0 && (n = 0), i < 0 && (i = 0), a < 0 && (a = 0), "#" + r[n] + r[i] + r[a]
          }
        }(),
        setSubframeEnabled = function (e) {
          subframeEnabled = !!e
        },
        getSubframeEnabled = function () {
          return subframeEnabled
        },
        setExpressionsPlugin = function (e) {
          expressionsPlugin = e
        },
        getExpressionsPlugin = function () {
          return expressionsPlugin
        },
        setExpressionInterfaces = function (e) {
          expressionsInterfaces = e
        },
        getExpressionInterfaces = function () {
          return expressionsInterfaces
        },
        setDefaultCurveSegments = function (e) {
          defaultCurveSegments = e
        },
        getDefaultCurveSegments = function () {
          return defaultCurveSegments
        },
        setIdPrefix = function (e) {
          idPrefix$1 = e
        },
        getIdPrefix = function () {
          return idPrefix$1
        };

      function createNS(e) {
        return document.createElementNS(svgNS, e)
      }

      function _typeof$5(e) {
        return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$5(e)
      }
      var dataManager = function () {
          var e, t, r = 1,
            n = [],
            i = {
              onmessage: function () {},
              postMessage: function (l) {
                e({
                  data: l
                })
              }
            },
            a = {
              postMessage: function (l) {
                i.onmessage({
                  data: l
                })
              }
            };

          function s() {
            t || (t = function (l) {
              if (window.Worker && window.Blob && getWebWorker()) {
                var p = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], {
                    type: "text/javascript"
                  }),
                  c = URL.createObjectURL(p);
                return new Worker(c)
              }
              return e = l, i
            }(function (l) {
              if (a.dataManager || (a.dataManager = function () {
                  function c(_, A) {
                    var D, w, O, V, M, L, G = _.length;
                    for (w = 0; w < G; w += 1)
                      if ("ks" in (D = _[w]) && !D.completed) {
                        if (D.completed = !0, D.hasMask) {
                          var z = D.masksProperties;
                          for (V = z.length, O = 0; O < V; O += 1)
                            if (z[O].pt.k.i) d(z[O].pt.k);
                            else
                              for (L = z[O].pt.k.length, M = 0; M < L; M += 1) z[O].pt.k[M].s && d(z[O].pt.k[M].s[0]), z[O].pt.k[M].e && d(z[O].pt.k[M].e[0])
                        }
                        D.ty === 0 ? (D.layers = f(D.refId, A), c(D.layers, A)) : D.ty === 4 ? g(D.shapes) : D.ty === 5 && I(D)
                      }
                  }

                  function f(_, A) {
                    var D = function (w, O) {
                      for (var V = 0, M = O.length; V < M;) {
                        if (O[V].id === w) return O[V];
                        V += 1
                      }
                      return null
                    }(_, A);
                    return D ? D.layers.__used ? JSON.parse(JSON.stringify(D.layers)) : (D.layers.__used = !0, D.layers) : null
                  }

                  function g(_) {
                    var A, D, w;
                    for (A = _.length - 1; A >= 0; A -= 1)
                      if (_[A].ty === "sh")
                        if (_[A].ks.k.i) d(_[A].ks.k);
                        else
                          for (w = _[A].ks.k.length, D = 0; D < w; D += 1) _[A].ks.k[D].s && d(_[A].ks.k[D].s[0]), _[A].ks.k[D].e && d(_[A].ks.k[D].e[0]);
                    else _[A].ty === "gr" && g(_[A].it)
                  }

                  function d(_) {
                    var A, D = _.i.length;
                    for (A = 0; A < D; A += 1) _.i[A][0] += _.v[A][0], _.i[A][1] += _.v[A][1], _.o[A][0] += _.v[A][0], _.o[A][1] += _.v[A][1]
                  }

                  function h(_, A) {
                    var D = A ? A.split(".") : [100, 100, 100];
                    return _[0] > D[0] || !(D[0] > _[0]) && (_[1] > D[1] || !(D[1] > _[1]) && (_[2] > D[2] || !(D[2] > _[2]) && null))
                  }
                  var m, u = function () {
                      var _ = [4, 4, 14];

                      function A(D) {
                        var w, O, V, M = D.length;
                        for (w = 0; w < M; w += 1) D[w].ty === 5 && (V = void 0, V = (O = D[w]).t.d, O.t.d = {
                          k: [{
                            s: V,
                            t: 0
                          }]
                        })
                      }
                      return function (D) {
                        if (h(_, D.v) && (A(D.layers), D.assets)) {
                          var w, O = D.assets.length;
                          for (w = 0; w < O; w += 1) D.assets[w].layers && A(D.assets[w].layers)
                        }
                      }
                    }(),
                    y = (m = [4, 7, 99], function (_) {
                      if (_.chars && !h(m, _.v)) {
                        var A, D = _.chars.length;
                        for (A = 0; A < D; A += 1) {
                          var w = _.chars[A];
                          w.data && w.data.shapes && (g(w.data.shapes), w.data.ip = 0, w.data.op = 99999, w.data.st = 0, w.data.sr = 1, w.data.ks = {
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            }
                          }, _.chars[A].t || (w.data.shapes.push({
                            ty: "no"
                          }), w.data.shapes[0].it.push({
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            },
                            sk: {
                              k: 0,
                              a: 0
                            },
                            sa: {
                              k: 0,
                              a: 0
                            },
                            ty: "tr"
                          })))
                        }
                      }
                    }),
                    v = function () {
                      var _ = [5, 7, 15];

                      function A(D) {
                        var w, O, V = D.length;
                        for (w = 0; w < V; w += 1) D[w].ty === 5 && (O = void 0, typeof (O = D[w].t.p).a == "number" && (O.a = {
                          a: 0,
                          k: O.a
                        }), typeof O.p == "number" && (O.p = {
                          a: 0,
                          k: O.p
                        }), typeof O.r == "number" && (O.r = {
                          a: 0,
                          k: O.r
                        }))
                      }
                      return function (D) {
                        if (h(_, D.v) && (A(D.layers), D.assets)) {
                          var w, O = D.assets.length;
                          for (w = 0; w < O; w += 1) D.assets[w].layers && A(D.assets[w].layers)
                        }
                      }
                    }(),
                    E = function () {
                      var _ = [4, 1, 9];

                      function A(w) {
                        var O, V, M, L = w.length;
                        for (O = 0; O < L; O += 1)
                          if (w[O].ty === "gr") A(w[O].it);
                          else if (w[O].ty === "fl" || w[O].ty === "st")
                          if (w[O].c.k && w[O].c.k[0].i)
                            for (M = w[O].c.k.length, V = 0; V < M; V += 1) w[O].c.k[V].s && (w[O].c.k[V].s[0] /= 255, w[O].c.k[V].s[1] /= 255, w[O].c.k[V].s[2] /= 255, w[O].c.k[V].s[3] /= 255), w[O].c.k[V].e && (w[O].c.k[V].e[0] /= 255, w[O].c.k[V].e[1] /= 255, w[O].c.k[V].e[2] /= 255, w[O].c.k[V].e[3] /= 255);
                          else w[O].c.k[0] /= 255, w[O].c.k[1] /= 255, w[O].c.k[2] /= 255, w[O].c.k[3] /= 255
                      }

                      function D(w) {
                        var O, V = w.length;
                        for (O = 0; O < V; O += 1) w[O].ty === 4 && A(w[O].shapes)
                      }
                      return function (w) {
                        if (h(_, w.v) && (D(w.layers), w.assets)) {
                          var O, V = w.assets.length;
                          for (O = 0; O < V; O += 1) w.assets[O].layers && D(w.assets[O].layers)
                        }
                      }
                    }(),
                    b = function () {
                      var _ = [4, 4, 18];

                      function A(w) {
                        var O, V, M;
                        for (O = w.length - 1; O >= 0; O -= 1)
                          if (w[O].ty === "sh")
                            if (w[O].ks.k.i) w[O].ks.k.c = w[O].closed;
                            else
                              for (M = w[O].ks.k.length, V = 0; V < M; V += 1) w[O].ks.k[V].s && (w[O].ks.k[V].s[0].c = w[O].closed), w[O].ks.k[V].e && (w[O].ks.k[V].e[0].c = w[O].closed);
                        else w[O].ty === "gr" && A(w[O].it)
                      }

                      function D(w) {
                        var O, V, M, L, G, z, re = w.length;
                        for (V = 0; V < re; V += 1) {
                          if ((O = w[V]).hasMask) {
                            var x = O.masksProperties;
                            for (L = x.length, M = 0; M < L; M += 1)
                              if (x[M].pt.k.i) x[M].pt.k.c = x[M].cl;
                              else
                                for (z = x[M].pt.k.length, G = 0; G < z; G += 1) x[M].pt.k[G].s && (x[M].pt.k[G].s[0].c = x[M].cl), x[M].pt.k[G].e && (x[M].pt.k[G].e[0].c = x[M].cl)
                          }
                          O.ty === 4 && A(O.shapes)
                        }
                      }
                      return function (w) {
                        if (h(_, w.v) && (D(w.layers), w.assets)) {
                          var O, V = w.assets.length;
                          for (O = 0; O < V; O += 1) w.assets[O].layers && D(w.assets[O].layers)
                        }
                      }
                    }();

                  function I(_) {
                    _.t.a.length === 0 && _.t.p
                  }
                  var S = {
                    completeData: function (_) {
                      _.__complete || (E(_), u(_), y(_), v(_), b(_), c(_.layers, _.assets), function (A, D) {
                        if (A) {
                          var w = 0,
                            O = A.length;
                          for (w = 0; w < O; w += 1) A[w].t === 1 && (A[w].data.layers = f(A[w].data.refId, D), c(A[w].data.layers, D))
                        }
                      }(_.chars, _.assets), _.__complete = !0)
                    }
                  };
                  return S.checkColors = E, S.checkChars = y, S.checkPathProperties = v, S.checkShapes = b, S.completeLayers = c, S
                }()), a.assetLoader || (a.assetLoader = function () {
                  function c(f) {
                    var g = f.getResponseHeader("content-type");
                    return g && f.responseType === "json" && g.indexOf("json") !== -1 || f.response && _typeof$5(f.response) === "object" ? f.response : f.response && typeof f.response == "string" ? JSON.parse(f.response) : f.responseText ? JSON.parse(f.responseText) : null
                  }
                  return {
                    load: function (f, g, d, h) {
                      var m, u = new XMLHttpRequest;
                      try {
                        u.responseType = "json"
                      } catch {}
                      u.onreadystatechange = function () {
                        if (u.readyState === 4)
                          if (u.status === 200) m = c(u), d(m);
                          else try {
                            m = c(u), d(m)
                          } catch (y) {
                            h && h(y)
                          }
                      };
                      try {
                        u.open(["G", "E", "T"].join(""), f, !0)
                      } catch {
                        u.open(["G", "E", "T"].join(""), g + "/" + f, !0)
                      }
                      u.send()
                    }
                  }
                }()), l.data.type === "loadAnimation") a.assetLoader.load(l.data.path, l.data.fullPath, function (c) {
                a.dataManager.completeData(c), a.postMessage({
                  id: l.data.id,
                  payload: c,
                  status: "success"
                })
              }, function () {
                a.postMessage({
                  id: l.data.id,
                  status: "error"
                })
              });
              else if (l.data.type === "complete") {
                var p = l.data.animation;
                a.dataManager.completeData(p), a.postMessage({
                  id: l.data.id,
                  payload: p,
                  status: "success"
                })
              } else l.data.type === "loadData" && a.assetLoader.load(l.data.path, l.data.fullPath, function (c) {
                a.postMessage({
                  id: l.data.id,
                  payload: c,
                  status: "success"
                })
              }, function () {
                a.postMessage({
                  id: l.data.id,
                  status: "error"
                })
              })
            }), t.onmessage = function (l) {
              var p = l.data,
                c = p.id,
                f = n[c];
              n[c] = null, p.status === "success" ? f.onComplete(p.payload) : f.onError && f.onError()
            })
          }

          function o(l, p) {
            var c = "processId_" + (r += 1);
            return n[c] = {
              onComplete: l,
              onError: p
            }, c
          }
          return {
            loadAnimation: function (l, p, c) {
              s();
              var f = o(p, c);
              t.postMessage({
                type: "loadAnimation",
                path: l,
                fullPath: window.location.origin + window.location.pathname,
                id: f
              })
            },
            loadData: function (l, p, c) {
              s();
              var f = o(p, c);
              t.postMessage({
                type: "loadData",
                path: l,
                fullPath: window.location.origin + window.location.pathname,
                id: f
              })
            },
            completeAnimation: function (l, p, c) {
              s();
              var f = o(p, c);
              t.postMessage({
                type: "complete",
                animation: l,
                id: f
              })
            }
          }
        }(),
        ImagePreloader = function () {
          var e = function () {
            var o = createTag("canvas");
            o.width = 1, o.height = 1;
            var l = o.getContext("2d");
            return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), o
          }();

          function t() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function r() {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function n(o, l, p) {
            var c = "";
            if (o.e) c = o.p;
            else if (l) {
              var f = o.p;
              f.indexOf("images/") !== -1 && (f = f.split("/")[1]), c = l + f
            } else c = p, c += o.u ? o.u : "", c += o.p;
            return c
          }

          function i(o) {
            var l = 0,
              p = setInterval(function () {
                (o.getBBox().width || l > 500) && (this._imageLoaded(), clearInterval(p)), l += 1
              }.bind(this), 50)
          }

          function a(o) {
            var l = {
                assetData: o
              },
              p = n(o, this.assetsPath, this.path);
            return dataManager.loadData(p, function (c) {
              l.img = c, this._footageLoaded()
            }.bind(this), function () {
              l.img = {}, this._footageLoaded()
            }.bind(this)), l
          }

          function s() {
            this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
          }
          return s.prototype = {
            loadAssets: function (o, l) {
              var p;
              this.imagesLoadedCb = l;
              var c = o.length;
              for (p = 0; p < c; p += 1) o[p].layers || (o[p].t && o[p].t !== "seq" ? o[p].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(o[p]))) : (this.totalImages += 1, this.images.push(this._createImageData(o[p]))))
            },
            setAssetsPath: function (o) {
              this.assetsPath = o || ""
            },
            setPath: function (o) {
              this.path = o || ""
            },
            loadedImages: function () {
              return this.totalImages === this.loadedAssets
            },
            loadedFootages: function () {
              return this.totalFootages === this.loadedFootagesCount
            },
            destroy: function () {
              this.imagesLoadedCb = null, this.images.length = 0
            },
            getAsset: function (o) {
              for (var l = 0, p = this.images.length; l < p;) {
                if (this.images[l].assetData === o) return this.images[l].img;
                l += 1
              }
              return null
            },
            createImgData: function (o) {
              var l = n(o, this.assetsPath, this.path),
                p = createTag("img");
              p.crossOrigin = "anonymous", p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", function () {
                c.img = e, this._imageLoaded()
              }.bind(this), !1), p.src = l;
              var c = {
                img: p,
                assetData: o
              };
              return c
            },
            createImageData: function (o) {
              var l = n(o, this.assetsPath, this.path),
                p = createNS("image");
              isSafari ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", function () {
                c.img = e, this._imageLoaded()
              }.bind(this), !1), p.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
              var c = {
                img: p,
                assetData: o
              };
              return c
            },
            imageLoaded: t,
            footageLoaded: r,
            setCacheType: function (o, l) {
              o === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
            }
          }, s
        }();

      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (e, t) {
          if (this._cbs[e])
            for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t)
        },
        addEventListener: function (e, t) {
          return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
            function () {
              this.removeEventListener(e, t)
            }.bind(this)
        },
        removeEventListener: function (e, t) {
          if (t) {
            if (this._cbs[e]) {
              for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
              this._cbs[e].length || (this._cbs[e] = null)
            }
          } else this._cbs[e] = null
        }
      };
      var markerParser = function () {
          function e(t) {
            for (var r, n = t.split(`\r
`), i = {}, a = 0, s = 0; s < n.length; s += 1)(r = n[s].split(":")).length === 2 && (i[r[0]] = r[1].trim(), a += 1);
            if (a === 0) throw new Error;
            return i
          }
          return function (t) {
            for (var r = [], n = 0; n < t.length; n += 1) {
              var i = t[n],
                a = {
                  time: i.tm,
                  duration: i.dr
                };
              try {
                a.payload = JSON.parse(t[n].cm)
              } catch {
                try {
                  a.payload = e(t[n].cm)
                } catch {
                  a.payload = {
                    name: t[n].cm
                  }
                }
              }
              r.push(a)
            }
            return r
          }
        }(),
        ProjectInterface = function () {
          function e(t) {
            this.compositions.push(t)
          }
          return function () {
            function t(r) {
              for (var n = 0, i = this.compositions.length; n < i;) {
                if (this.compositions[n].data && this.compositions[n].data.nm === r) return this.compositions[n].prepareFrame && this.compositions[n].data.xt && this.compositions[n].prepareFrame(this.currentFrame), this.compositions[n].compInterface;
                n += 1
              }
              return null
            }
            return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
          }
        }(),
        renderers = {},
        registerRenderer = function (e, t) {
          renderers[e] = t
        };

      function getRenderer(e) {
        return renderers[e]
      }

      function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var e in renderers)
          if (renderers[e]) return e;
        return ""
      }

      function _typeof$4(e) {
        return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$4(e)
      }
      var AnimationItem = function () {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
      };
      extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (e) {
        (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
        var t = "svg";
        e.animType ? t = e.animType : e.renderer && (t = e.renderer);
        var r = getRenderer(t);
        this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
      }, AnimationItem.prototype.onSetupError = function () {
        this.trigger("data_failed")
      }, AnimationItem.prototype.setupAnimation = function (e) {
        dataManager.completeAnimation(e, this.configAnimation)
      }, AnimationItem.prototype.setData = function (e, t) {
        t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
        var r = {
            wrapper: e,
            animationData: t
          },
          n = e.attributes;
        r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
        var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
        i === "false" ? r.loop = !1 : i === "true" ? r.loop = !0 : i !== "" && (r.loop = parseInt(i, 10));
        var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
        r.autoplay = a !== "false", r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
      }, AnimationItem.prototype.includeLayers = function (e) {
        e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
        var t, r, n = this.animationData.layers,
          i = n.length,
          a = e.layers,
          s = a.length;
        for (r = 0; r < s; r += 1)
          for (t = 0; t < i;) {
            if (n[t].id === a[r].id) {
              n[t] = a[r];
              break
            }
            t += 1
          }
        if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
          for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
        this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
      }, AnimationItem.prototype.onSegmentComplete = function (e) {
        this.animationData = e;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.loadNextSegment()
      }, AnimationItem.prototype.loadNextSegment = function () {
        var e = this.animationData.segments;
        if (!e || e.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
        var t = e.shift();
        this.timeCompleted = t.time * this.frameRate;
        var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function () {
          this.trigger("data_failed")
        }.bind(this))
      }, AnimationItem.prototype.loadSegments = function () {
        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
      }, AnimationItem.prototype.imagesLoaded = function () {
        this.trigger("loaded_images"), this.checkLoaded()
      }, AnimationItem.prototype.preloadImages = function () {
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
      }, AnimationItem.prototype.configAnimation = function (e) {
        if (this.renderer) try {
          this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
        } catch (t) {
          this.triggerConfigError(t)
        }
      }, AnimationItem.prototype.waitForFontsLoaded = function () {
        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
      }, AnimationItem.prototype.checkLoaded = function () {
        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
          this.isLoaded = !0;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
            this.trigger("DOMLoaded")
          }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
        }
      }, AnimationItem.prototype.resize = function (e, t) {
        var r = typeof e == "number" ? e : void 0,
          n = typeof t == "number" ? t : void 0;
        this.renderer.updateContainerSize(r, n)
      }, AnimationItem.prototype.setSubframe = function (e) {
        this.isSubframeEnabled = !!e
      }, AnimationItem.prototype.gotoFrame = function () {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
      }, AnimationItem.prototype.renderFrame = function () {
        if (this.isLoaded !== !1 && this.renderer) try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
        } catch (e) {
          this.triggerRenderFrameError(e)
        }
      }, AnimationItem.prototype.play = function (e) {
        e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
      }, AnimationItem.prototype.pause = function (e) {
        e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
      }, AnimationItem.prototype.togglePause = function (e) {
        e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
      }, AnimationItem.prototype.stop = function (e) {
        e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
      }, AnimationItem.prototype.getMarkerData = function (e) {
        for (var t, r = 0; r < this.markers.length; r += 1)
          if ((t = this.markers[r]).payload && t.payload.name === e) return t;
        return null
      }, AnimationItem.prototype.goToAndStop = function (e, t, r) {
        if (!r || this.name === r) {
          var n = Number(e);
          if (isNaN(n)) {
            var i = this.getMarkerData(e);
            i && this.goToAndStop(i.time, !0)
          } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
          this.pause()
        }
      }, AnimationItem.prototype.goToAndPlay = function (e, t, r) {
        if (!r || this.name === r) {
          var n = Number(e);
          if (isNaN(n)) {
            var i = this.getMarkerData(e);
            i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
          } else this.goToAndStop(n, t, r);
          this.play()
        }
      }, AnimationItem.prototype.advanceTime = function (e) {
        if (this.isPaused !== !0 && this.isLoaded !== !1) {
          var t = this.currentRawFrame + e * this.frameModifier,
            r = !1;
          t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
        }
      }, AnimationItem.prototype.adjustSegment = function (e, t) {
        this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
      }, AnimationItem.prototype.setSegment = function (e, t) {
        var r = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
      }, AnimationItem.prototype.playSegments = function (e, t) {
        if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
          var r, n = e.length;
          for (r = 0; r < n; r += 1) this.segments.push(e[r])
        } else this.segments.push(e);
        this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
      }, AnimationItem.prototype.resetSegments = function (e) {
        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
      }, AnimationItem.prototype.checkSegments = function (e) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
      }, AnimationItem.prototype.destroy = function (e) {
        e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
      }, AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
        this.currentRawFrame = e, this.gotoFrame()
      }, AnimationItem.prototype.setSpeed = function (e) {
        this.playSpeed = e, this.updaFrameModifier()
      }, AnimationItem.prototype.setDirection = function (e) {
        this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
      }, AnimationItem.prototype.setLoop = function (e) {
        this.loop = e
      }, AnimationItem.prototype.setVolume = function (e, t) {
        t && this.name !== t || this.audioController.setVolume(e)
      }, AnimationItem.prototype.getVolume = function () {
        return this.audioController.getVolume()
      }, AnimationItem.prototype.mute = function (e) {
        e && this.name !== e || this.audioController.mute()
      }, AnimationItem.prototype.unmute = function (e) {
        e && this.name !== e || this.audioController.unmute()
      }, AnimationItem.prototype.updaFrameModifier = function () {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
      }, AnimationItem.prototype.getPath = function () {
        return this.path
      }, AnimationItem.prototype.getAssetsPath = function (e) {
        var t = "";
        if (e.e) t = e.p;
        else if (this.assetsPath) {
          var r = e.p;
          r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
        } else t = this.path, t += e.u ? e.u : "", t += e.p;
        return t
      }, AnimationItem.prototype.getAssetData = function (e) {
        for (var t = 0, r = this.assets.length; t < r;) {
          if (e === this.assets[t].id) return this.assets[t];
          t += 1
        }
        return null
      }, AnimationItem.prototype.hide = function () {
        this.renderer.hide()
      }, AnimationItem.prototype.show = function () {
        this.renderer.show()
      }, AnimationItem.prototype.getDuration = function (e) {
        return e ? this.totalFrames : this.totalFrames / this.frameRate
      }, AnimationItem.prototype.updateDocumentData = function (e, t, r) {
        try {
          this.renderer.getElementByPath(e).updateDocumentData(t, r)
        } catch {}
      }, AnimationItem.prototype.trigger = function (e) {
        if (this._cbs && this._cbs[e]) switch (e) {
          case "enterFrame":
            this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(e, new BMDestroyEvent(e, this));
            break;
          default:
            this.triggerEvent(e)
        }
        e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
      }, AnimationItem.prototype.triggerRenderFrameError = function (e) {
        var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      }, AnimationItem.prototype.triggerConfigError = function (e) {
        var t = new BMConfigErrorEvent(e, this.currentFrame);
        this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
      };
      var animationManager = function () {
          var e = {},
            t = [],
            r = 0,
            n = 0,
            i = 0,
            a = !0,
            s = !1;

          function o(m) {
            for (var u = 0, y = m.target; u < n;) t[u].animation === y && (t.splice(u, 1), u -= 1, n -= 1, y.isPaused || c()), u += 1
          }

          function l(m, u) {
            if (!m) return null;
            for (var y = 0; y < n;) {
              if (t[y].elem === m && t[y].elem !== null) return t[y].animation;
              y += 1
            }
            var v = new AnimationItem;
            return f(v, m), v.setData(m, u), v
          }

          function p() {
            i += 1, h()
          }

          function c() {
            i -= 1
          }

          function f(m, u) {
            m.addEventListener("destroy", o), m.addEventListener("_active", p), m.addEventListener("_idle", c), t.push({
              elem: u,
              animation: m
            }), n += 1
          }

          function g(m) {
            var u, y = m - r;
            for (u = 0; u < n; u += 1) t[u].animation.advanceTime(y);
            r = m, i && !s ? window.requestAnimationFrame(g) : a = !0
          }

          function d(m) {
            r = m, window.requestAnimationFrame(g)
          }

          function h() {
            !s && i && a && (window.requestAnimationFrame(d), a = !1)
          }
          return e.registerAnimation = l, e.loadAnimation = function (m) {
            var u = new AnimationItem;
            return f(u, null), u.setParams(m), u
          }, e.setSpeed = function (m, u) {
            var y;
            for (y = 0; y < n; y += 1) t[y].animation.setSpeed(m, u)
          }, e.setDirection = function (m, u) {
            var y;
            for (y = 0; y < n; y += 1) t[y].animation.setDirection(m, u)
          }, e.play = function (m) {
            var u;
            for (u = 0; u < n; u += 1) t[u].animation.play(m)
          }, e.pause = function (m) {
            var u;
            for (u = 0; u < n; u += 1) t[u].animation.pause(m)
          }, e.stop = function (m) {
            var u;
            for (u = 0; u < n; u += 1) t[u].animation.stop(m)
          }, e.togglePause = function (m) {
            var u;
            for (u = 0; u < n; u += 1) t[u].animation.togglePause(m)
          }, e.searchAnimations = function (m, u, y) {
            var v, E = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
              b = E.length;
            for (v = 0; v < b; v += 1) y && E[v].setAttribute("data-bm-type", y), l(E[v], m);
            if (u && b === 0) {
              y || (y = "svg");
              var I = document.getElementsByTagName("body")[0];
              I.innerText = "";
              var S = createTag("div");
              S.style.width = "100%", S.style.height = "100%", S.setAttribute("data-bm-type", y), I.appendChild(S), l(S, m)
            }
          }, e.resize = function () {
            var m;
            for (m = 0; m < n; m += 1) t[m].animation.resize()
          }, e.goToAndStop = function (m, u, y) {
            var v;
            for (v = 0; v < n; v += 1) t[v].animation.goToAndStop(m, u, y)
          }, e.destroy = function (m) {
            var u;
            for (u = n - 1; u >= 0; u -= 1) t[u].animation.destroy(m)
          }, e.freeze = function () {
            s = !0
          }, e.unfreeze = function () {
            s = !1, h()
          }, e.setVolume = function (m, u) {
            var y;
            for (y = 0; y < n; y += 1) t[y].animation.setVolume(m, u)
          }, e.mute = function (m) {
            var u;
            for (u = 0; u < n; u += 1) t[u].animation.mute(m)
          }, e.unmute = function (m) {
            var u;
            for (u = 0; u < n; u += 1) t[u].animation.unmute(m)
          }, e.getRegisteredAnimations = function () {
            var m, u = t.length,
              y = [];
            for (m = 0; m < u; m += 1) y.push(t[m].animation);
            return y
          }, e
        }(),
        BezierFactory = function () {
          var e = {
              getBezierEasing: function (c, f, g, d, h) {
                var m = h || ("bez_" + c + "_" + f + "_" + g + "_" + d).replace(/\./g, "p");
                if (t[m]) return t[m];
                var u = new p([c, f, g, d]);
                return t[m] = u, u
              }
            },
            t = {},
            r = .1,
            n = typeof Float32Array == "function";

          function i(c, f) {
            return 1 - 3 * f + 3 * c
          }

          function a(c, f) {
            return 3 * f - 6 * c
          }

          function s(c) {
            return 3 * c
          }

          function o(c, f, g) {
            return ((i(f, g) * c + a(f, g)) * c + s(f)) * c
          }

          function l(c, f, g) {
            return 3 * i(f, g) * c * c + 2 * a(f, g) * c + s(f)
          }

          function p(c) {
            this._p = c, this._mSampleValues = n ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
          }
          return p.prototype = {
            get: function (c) {
              var f = this._p[0],
                g = this._p[1],
                d = this._p[2],
                h = this._p[3];
              return this._precomputed || this._precompute(), f === g && d === h ? c : c === 0 ? 0 : c === 1 ? 1 : o(this._getTForX(c), g, h)
            },
            _precompute: function () {
              var c = this._p[0],
                f = this._p[1],
                g = this._p[2],
                d = this._p[3];
              this._precomputed = !0, c === f && g === d || this._calcSampleValues()
            },
            _calcSampleValues: function () {
              for (var c = this._p[0], f = this._p[2], g = 0; g < 11; ++g) this._mSampleValues[g] = o(g * r, c, f)
            },
            _getTForX: function (c) {
              for (var f = this._p[0], g = this._p[2], d = this._mSampleValues, h = 0, m = 1; m !== 10 && d[m] <= c; ++m) h += r;
              var u = h + (c - d[--m]) / (d[m + 1] - d[m]) * r,
                y = l(u, f, g);
              return y >= .001 ? function (v, E, b, I) {
                for (var S = 0; S < 4; ++S) {
                  var _ = l(E, b, I);
                  if (_ === 0) return E;
                  E -= (o(E, b, I) - v) / _
                }
                return E
              }(c, u, f, g) : y === 0 ? u : function (v, E, b, I, S) {
                var _, A, D = 0;
                do(_ = o(A = E + (b - E) / 2, I, S) - v) > 0 ? b = A : E = A; while (Math.abs(_) > 1e-7 && ++D < 10);
                return A
              }(c, h, h + r, f, g)
            }
          }, e
        }(),
        pooling = {
          double: function (e) {
            return e.concat(createSizedArray(e.length))
          }
        },
        poolFactory = function (e, t, r) {
          var n = 0,
            i = e,
            a = createSizedArray(i);
          return {
            newElement: function () {
              return n ? a[n -= 1] : t()
            },
            release: function (s) {
              n === i && (a = pooling.double(a), i *= 2), r && r(s), a[n] = s, n += 1
            }
          }
        },
        bezierLengthPool = poolFactory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", getDefaultCurveSegments()),
            lengths: createTypedArray("float32", getDefaultCurveSegments())
          }
        }),
        segmentsLengthPool = poolFactory(8, function () {
          return {
            lengths: [],
            totalLength: 0
          }
        }, function (e) {
          var t, r = e.lengths.length;
          for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
          e.lengths.length = 0
        });

      function bezFunction() {
        var e = Math;

        function t(p, c, f, g, d, h) {
          var m = p * g + c * d + f * h - d * g - h * p - f * c;
          return m > -.001 && m < .001
        }
        var r = function (p, c, f, g) {
          var d, h, m, u, y, v, E = getDefaultCurveSegments(),
            b = 0,
            I = [],
            S = [],
            _ = bezierLengthPool.newElement();
          for (m = f.length, d = 0; d < E; d += 1) {
            for (y = d / (E - 1), v = 0, h = 0; h < m; h += 1) u = bmPow(1 - y, 3) * p[h] + 3 * bmPow(1 - y, 2) * y * f[h] + 3 * (1 - y) * bmPow(y, 2) * g[h] + bmPow(y, 3) * c[h], I[h] = u, S[h] !== null && (v += bmPow(I[h] - S[h], 2)), S[h] = I[h];
            v && (b += v = bmSqrt(v)), _.percents[d] = y, _.lengths[d] = b
          }
          return _.addedLength = b, _
        };

        function n(p) {
          this.segmentLength = 0, this.points = new Array(p)
        }

        function i(p, c) {
          this.partialLength = p, this.point = c
        }
        var a, s = (a = {}, function (p, c, f, g) {
          var d = (p[0] + "_" + p[1] + "_" + c[0] + "_" + c[1] + "_" + f[0] + "_" + f[1] + "_" + g[0] + "_" + g[1]).replace(/\./g, "p");
          if (!a[d]) {
            var h, m, u, y, v, E, b, I = getDefaultCurveSegments(),
              S = 0,
              _ = null;
            p.length === 2 && (p[0] !== c[0] || p[1] !== c[1]) && t(p[0], p[1], c[0], c[1], p[0] + f[0], p[1] + f[1]) && t(p[0], p[1], c[0], c[1], c[0] + g[0], c[1] + g[1]) && (I = 2);
            var A = new n(I);
            for (u = f.length, h = 0; h < I; h += 1) {
              for (b = createSizedArray(u), v = h / (I - 1), E = 0, m = 0; m < u; m += 1) y = bmPow(1 - v, 3) * p[m] + 3 * bmPow(1 - v, 2) * v * (p[m] + f[m]) + 3 * (1 - v) * bmPow(v, 2) * (c[m] + g[m]) + bmPow(v, 3) * c[m], b[m] = y, _ !== null && (E += bmPow(b[m] - _[m], 2));
              S += E = bmSqrt(E), A.points[h] = new i(E, b), _ = b
            }
            A.segmentLength = S, a[d] = A
          }
          return a[d]
        });

        function o(p, c) {
          var f = c.percents,
            g = c.lengths,
            d = f.length,
            h = bmFloor((d - 1) * p),
            m = p * c.addedLength,
            u = 0;
          if (h === d - 1 || h === 0 || m === g[h]) return f[h];
          for (var y = g[h] > m ? -1 : 1, v = !0; v;)
            if (g[h] <= m && g[h + 1] > m ? (u = (m - g[h]) / (g[h + 1] - g[h]), v = !1) : h += y, h < 0 || h >= d - 1) {
              if (h === d - 1) return f[h];
              v = !1
            } return f[h] + (f[h + 1] - f[h]) * u
        }
        var l = createTypedArray("float32", 8);
        return {
          getSegmentsLength: function (p) {
            var c, f = segmentsLengthPool.newElement(),
              g = p.c,
              d = p.v,
              h = p.o,
              m = p.i,
              u = p._length,
              y = f.lengths,
              v = 0;
            for (c = 0; c < u - 1; c += 1) y[c] = r(d[c], d[c + 1], h[c], m[c + 1]), v += y[c].addedLength;
            return g && u && (y[c] = r(d[c], d[0], h[c], m[0]), v += y[c].addedLength), f.totalLength = v, f
          },
          getNewSegment: function (p, c, f, g, d, h, m) {
            d < 0 ? d = 0 : d > 1 && (d = 1);
            var u, y = o(d, m),
              v = o(h = h > 1 ? 1 : h, m),
              E = p.length,
              b = 1 - y,
              I = 1 - v,
              S = b * b * b,
              _ = y * b * b * 3,
              A = y * y * b * 3,
              D = y * y * y,
              w = b * b * I,
              O = y * b * I + b * y * I + b * b * v,
              V = y * y * I + b * y * v + y * b * v,
              M = y * y * v,
              L = b * I * I,
              G = y * I * I + b * v * I + b * I * v,
              z = y * v * I + b * v * v + y * I * v,
              re = y * v * v,
              x = I * I * I,
              B = v * I * I + I * v * I + I * I * v,
              Q = v * v * I + I * v * v + v * I * v,
              N = v * v * v;
            for (u = 0; u < E; u += 1) l[4 * u] = e.round(1e3 * (S * p[u] + _ * f[u] + A * g[u] + D * c[u])) / 1e3, l[4 * u + 1] = e.round(1e3 * (w * p[u] + O * f[u] + V * g[u] + M * c[u])) / 1e3, l[4 * u + 2] = e.round(1e3 * (L * p[u] + G * f[u] + z * g[u] + re * c[u])) / 1e3, l[4 * u + 3] = e.round(1e3 * (x * p[u] + B * f[u] + Q * g[u] + N * c[u])) / 1e3;
            return l
          },
          getPointInSegment: function (p, c, f, g, d, h) {
            var m = o(d, h),
              u = 1 - m;
            return [e.round(1e3 * (u * u * u * p[0] + (m * u * u + u * m * u + u * u * m) * f[0] + (m * m * u + u * m * m + m * u * m) * g[0] + m * m * m * c[0])) / 1e3, e.round(1e3 * (u * u * u * p[1] + (m * u * u + u * m * u + u * u * m) * f[1] + (m * m * u + u * m * m + m * u * m) * g[1] + m * m * m * c[1])) / 1e3]
          },
          buildBezierData: s,
          pointOnLine2D: t,
          pointOnLine3D: function (p, c, f, g, d, h, m, u, y) {
            if (f === 0 && h === 0 && y === 0) return t(p, c, g, d, m, u);
            var v, E = e.sqrt(e.pow(g - p, 2) + e.pow(d - c, 2) + e.pow(h - f, 2)),
              b = e.sqrt(e.pow(m - p, 2) + e.pow(u - c, 2) + e.pow(y - f, 2)),
              I = e.sqrt(e.pow(m - g, 2) + e.pow(u - d, 2) + e.pow(y - h, 2));
            return (v = E > b ? E > I ? E - b - I : I - b - E : I > b ? I - b - E : b - E - I) > -1e-4 && v < 1e-4
          }
        }
      }
      var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;

      function interpolateValue(e, t) {
        var r, n = this.offsetTime;
        this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
        for (var i, a, s, o, l, p, c, f, g, d = t.lastIndex, h = d, m = this.keyframes.length - 1, u = !0; u;) {
          if (i = this.keyframes[h], a = this.keyframes[h + 1], h === m - 1 && e >= a.t - n) {
            i.h && (i = a), d = 0;
            break
          }
          if (a.t - n > e) {
            d = h;
            break
          }
          h < m - 1 ? h += 1 : (d = 0, u = !1)
        }
        s = this.keyframesMetadata[h] || {};
        var y, v = a.t - n,
          E = i.t - n;
        if (i.to) {
          s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
          var b = s.bezierData;
          if (e >= v || e < E) {
            var I = e >= v ? b.points.length - 1 : 0;
            for (l = b.points[I].point.length, o = 0; o < l; o += 1) r[o] = b.points[I].point[o]
          } else {
            s.__fnct ? g = s.__fnct : (g = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = g), p = g((e - E) / (v - E));
            var S, _ = b.segmentLength * p,
              A = t.lastFrame < e && t._lastKeyframeIndex === h ? t._lastAddedLength : 0;
            for (f = t.lastFrame < e && t._lastKeyframeIndex === h ? t._lastPoint : 0, u = !0, c = b.points.length; u;) {
              if (A += b.points[f].partialLength, _ === 0 || p === 0 || f === b.points.length - 1) {
                for (l = b.points[f].point.length, o = 0; o < l; o += 1) r[o] = b.points[f].point[o];
                break
              }
              if (_ >= A && _ < A + b.points[f + 1].partialLength) {
                for (S = (_ - A) / b.points[f + 1].partialLength, l = b.points[f].point.length, o = 0; o < l; o += 1) r[o] = b.points[f].point[o] + (b.points[f + 1].point[o] - b.points[f].point[o]) * S;
                break
              }
              f < c - 1 ? f += 1 : u = !1
            }
            t._lastPoint = f, t._lastAddedLength = A - b.points[f].partialLength, t._lastKeyframeIndex = h
          }
        } else {
          var D, w, O, V, M;
          if (m = i.s.length, y = a.s || i.e, this.sh && i.h !== 1) e >= v ? (r[0] = y[0], r[1] = y[1], r[2] = y[2]) : e <= E ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(y), (e - E) / (v - E)));
          else
            for (h = 0; h < m; h += 1) i.h !== 1 && (e >= v ? p = 1 : e < E ? p = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[h] ? g = s.__fnct[h] : (D = i.o.x[h] === void 0 ? i.o.x[0] : i.o.x[h], w = i.o.y[h] === void 0 ? i.o.y[0] : i.o.y[h], O = i.i.x[h] === void 0 ? i.i.x[0] : i.i.x[h], V = i.i.y[h] === void 0 ? i.i.y[0] : i.i.y[h], g = BezierFactory.getBezierEasing(D, w, O, V).get, s.__fnct[h] = g)) : s.__fnct ? g = s.__fnct : (D = i.o.x, w = i.o.y, O = i.i.x, V = i.i.y, g = BezierFactory.getBezierEasing(D, w, O, V).get, i.keyframeMetadata = g), p = g((e - E) / (v - E)))), y = a.s || i.e, M = i.h === 1 ? i.s[h] : i.s[h] + (y[h] - i.s[h]) * p, this.propType === "multidimensional" ? r[h] = M : r = M
        }
        return t.lastIndex = d, r
      }

      function slerp(e, t, r) {
        var n, i, a, s, o, l = [],
          p = e[0],
          c = e[1],
          f = e[2],
          g = e[3],
          d = t[0],
          h = t[1],
          m = t[2],
          u = t[3];
        return (i = p * d + c * h + f * m + g * u) < 0 && (i = -i, d = -d, h = -h, m = -m, u = -u), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * p + o * d, l[1] = s * c + o * h, l[2] = s * f + o * m, l[3] = s * g + o * u, l
      }

      function quaternionToEuler(e, t) {
        var r = t[0],
          n = t[1],
          i = t[2],
          a = t[3],
          s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
          o = Math.asin(2 * r * n + 2 * i * a),
          l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
        e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
      }

      function createQuaternion(e) {
        var t = e[0] * degToRads,
          r = e[1] * degToRads,
          n = e[2] * degToRads,
          i = Math.cos(t / 2),
          a = Math.cos(r / 2),
          s = Math.cos(n / 2),
          o = Math.sin(t / 2),
          l = Math.sin(r / 2),
          p = Math.sin(n / 2);
        return [o * l * s + i * a * p, o * a * s + i * l * p, i * l * s - o * a * p, i * a * s - o * l * p]
      }

      function getValueAtCurrentTime() {
        var e = this.comp.renderedFrame - this.offsetTime,
          t = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
          this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
          var n = this.interpolateValue(e, this._caching);
          this.pv = n
        }
        return this._caching.lastFrame = e, this.pv
      }

      function setVValue(e) {
        var t;
        if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
        else
          for (var r = 0, n = this.v.length; r < n;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
      }

      function processEffectsSequence() {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
          if (this.lock) this.setVValue(this.pv);
          else {
            var e;
            this.lock = !0, this._mdf = this._isFirstFrame;
            var t = this.effectsSequence.length,
              r = this.kf ? this.pv : this.data.k;
            for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
          }
      }

      function addEffect(e) {
        this.effectsSequence.push(e), this.container.addDynamicProperty(this)
      }

      function ValueProperty(e, t, r, n) {
        this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function MultiDimensionalProperty(e, t, r, n) {
        var i;
        this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
        var a = t.k.length;
        for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
      }

      function KeyframedValueProperty(e, t, r, n) {
        this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: 0,
          _lastKeyframeIndex: -1
        }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
      }

      function KeyframedMultidimensionalProperty(e, t, r, n) {
        var i;
        this.propType = "multidimensional";
        var a, s, o, l, p = t.k.length;
        for (i = 0; i < p - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (a = t.k[i].s, s = t.k[i + 1].s, o = t.k[i].to, l = t.k[i].ti, (a.length === 2 && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || a.length === 3 && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[i].to = null, t.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && o[0] === 0 && o[1] === 0 && l[0] === 0 && l[1] === 0 && (a.length === 2 || a[2] === s[2] && o[2] === 0 && l[2] === 0) && (t.k[i].to = null, t.k[i].ti = null));
        this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
        var c = t.k[0].s.length;
        for (this.v = createTypedArray("float32", c), this.pv = createTypedArray("float32", c), i = 0; i < c; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
        this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", c)
        }, this.addEffect = addEffect
      }
      var PropertyFactory = {
        getProp: function (e, t, r, n, i) {
          var a;
          if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
            if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, n, i);
            else switch (r) {
              case 0:
                a = new KeyframedValueProperty(e, t, n, i);
                break;
              case 1:
                a = new KeyframedMultidimensionalProperty(e, t, n, i)
            } else a = new ValueProperty(e, t, n, i);
          return a.effectsSequence.length && i.addDynamicProperty(a), a
        }
      };

      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
        },
        iterateDynamicProperties: function () {
          var e;
          this._mdf = !1;
          var t = this.dynamicProperties.length;
          for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
        },
        initDynamicPropertyContainer: function (e) {
          this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
        }
      };
      var pointPool = poolFactory(8, function () {
        return createTypedArray("float32", 2)
      });

      function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
      }
      ShapePath.prototype.setPathData = function (e, t) {
        this.c = e, this.setLength(t);
        for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
      }, ShapePath.prototype.setLength = function (e) {
        for (; this._maxLength < e;) this.doubleArrayLength();
        this._length = e
      }, ShapePath.prototype.doubleArrayLength = function () {
        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
      }, ShapePath.prototype.setXYAt = function (e, t, r, n, i) {
        var a;
        switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
          case "v":
            a = this.v;
            break;
          case "i":
            a = this.i;
            break;
          case "o":
            a = this.o;
            break;
          default:
            a = []
        }(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = e, a[n][1] = t
      }, ShapePath.prototype.setTripleAt = function (e, t, r, n, i, a, s, o) {
        this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
      }, ShapePath.prototype.reverse = function () {
        var e = new ShapePath;
        e.setPathData(this.c, this._length);
        var t = this.v,
          r = this.o,
          n = this.i,
          i = 0;
        this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
        var a, s = this._length - 1,
          o = this._length;
        for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
        return e
      }, ShapePath.prototype.length = function () {
        return this._length
      };
      var shapePool = (factory = poolFactory(4, function () {
          return new ShapePath
        }, function (e) {
          var t, r = e._length;
          for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
          e._length = 0, e.c = !1
        }), factory.clone = function (e) {
          var t, r = factory.newElement(),
            n = e._length === void 0 ? e.v.length : e._length;
          for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
          return r
        }, factory),
        factory;

      function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
      }
      ShapeCollection.prototype.addShape = function (e) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
      }, ShapeCollection.prototype.releaseShapes = function () {
        var e;
        for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
        this._length = 0
      };
      var shapeCollectionPool = (ob = {
          newShapeCollection: function () {
            return _length ? pool[_length -= 1] : new ShapeCollection
          },
          release: function (e) {
            var t, r = e._length;
            for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
            e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
          }
        }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
        ob, _length, _maxLength, pool, ShapePropertyFactory = function () {
          var e = -999999;

          function t(d, h, m) {
            var u, y, v, E, b, I, S, _, A, D = m.lastIndex,
              w = this.keyframes;
            if (d < w[0].t - this.offsetTime) u = w[0].s[0], v = !0, D = 0;
            else if (d >= w[w.length - 1].t - this.offsetTime) u = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0], v = !0;
            else {
              for (var O, V, M, L = D, G = w.length - 1, z = !0; z && (O = w[L], !((V = w[L + 1]).t - this.offsetTime > d));) L < G - 1 ? L += 1 : z = !1;
              if (M = this.keyframesMetadata[L] || {}, D = L, !(v = O.h === 1)) {
                if (d >= V.t - this.offsetTime) _ = 1;
                else if (d < O.t - this.offsetTime) _ = 0;
                else {
                  var re;
                  M.__fnct ? re = M.__fnct : (re = BezierFactory.getBezierEasing(O.o.x, O.o.y, O.i.x, O.i.y).get, M.__fnct = re), _ = re((d - (O.t - this.offsetTime)) / (V.t - this.offsetTime - (O.t - this.offsetTime)))
                }
                y = V.s ? V.s[0] : O.e[0]
              }
              u = O.s[0]
            }
            for (I = h._length, S = u.i[0].length, m.lastIndex = D, E = 0; E < I; E += 1)
              for (b = 0; b < S; b += 1) A = v ? u.i[E][b] : u.i[E][b] + (y.i[E][b] - u.i[E][b]) * _, h.i[E][b] = A, A = v ? u.o[E][b] : u.o[E][b] + (y.o[E][b] - u.o[E][b]) * _, h.o[E][b] = A, A = v ? u.v[E][b] : u.v[E][b] + (y.v[E][b] - u.v[E][b]) * _, h.v[E][b] = A
          }

          function r() {
            var d = this.comp.renderedFrame - this.offsetTime,
              h = this.keyframes[0].t - this.offsetTime,
              m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              u = this._caching.lastFrame;
            return u !== e && (u < h && d < h || u > m && d > m) || (this._caching.lastIndex = u < d ? this._caching.lastIndex : 0, this.interpolateShape(d, this.pv, this._caching)), this._caching.lastFrame = d, this.pv
          }

          function n() {
            this.paths = this.localShapeCollection
          }

          function i(d) {
            (function (h, m) {
              if (h._length !== m._length || h.c !== m.c) return !1;
              var u, y = h._length;
              for (u = 0; u < y; u += 1)
                if (h.v[u][0] !== m.v[u][0] || h.v[u][1] !== m.v[u][1] || h.o[u][0] !== m.o[u][0] || h.o[u][1] !== m.o[u][1] || h.i[u][0] !== m.i[u][0] || h.i[u][1] !== m.i[u][1]) return !1;
              return !0
            })(this.v, d) || (this.v = shapePool.clone(d), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
          }

          function a() {
            if (this.elem.globalData.frameId !== this.frameId)
              if (this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else {
                  var d, h;
                  this.lock = !0, this._mdf = !1, d = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                  var m = this.effectsSequence.length;
                  for (h = 0; h < m; h += 1) d = this.effectsSequence[h](d);
                  this.setVValue(d), this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            else this._mdf = !1
          }

          function s(d, h, m) {
            this.propType = "shape", this.comp = d.comp, this.container = d, this.elem = d, this.data = h, this.k = !1, this.kf = !1, this._mdf = !1;
            var u = m === 3 ? h.pt.k : h.ks.k;
            this.v = shapePool.clone(u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
          }

          function o(d) {
            this.effectsSequence.push(d), this.container.addDynamicProperty(this)
          }

          function l(d, h, m) {
            this.propType = "shape", this.comp = d.comp, this.elem = d, this.container = d, this.offsetTime = d.data.st, this.keyframes = m === 3 ? h.pt.k : h.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
            var u = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = n, this._caching = {
              lastFrame: e,
              lastIndex: 0
            }, this.effectsSequence = [r.bind(this)]
          }
          s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = o;
          var p = function () {
              var d = roundCorner;

              function h(m, u) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u.d, this.elem = m, this.comp = m.comp, this.frameId = -1, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, u.p, 1, 0, this), this.s = PropertyFactory.getProp(m, u.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
              }
              return h.prototype = {
                reset: n,
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                },
                convertEllToPath: function () {
                  var m = this.p.v[0],
                    u = this.p.v[1],
                    y = this.s.v[0] / 2,
                    v = this.s.v[1] / 2,
                    E = this.d !== 3,
                    b = this.v;
                  b.v[0][0] = m, b.v[0][1] = u - v, b.v[1][0] = E ? m + y : m - y, b.v[1][1] = u, b.v[2][0] = m, b.v[2][1] = u + v, b.v[3][0] = E ? m - y : m + y, b.v[3][1] = u, b.i[0][0] = E ? m - y * d : m + y * d, b.i[0][1] = u - v, b.i[1][0] = E ? m + y : m - y, b.i[1][1] = u - v * d, b.i[2][0] = E ? m + y * d : m - y * d, b.i[2][1] = u + v, b.i[3][0] = E ? m - y : m + y, b.i[3][1] = u + v * d, b.o[0][0] = E ? m + y * d : m - y * d, b.o[0][1] = u - v, b.o[1][0] = E ? m + y : m - y, b.o[1][1] = u + v * d, b.o[2][0] = E ? m - y * d : m + y * d, b.o[2][1] = u + v, b.o[3][0] = E ? m - y : m + y, b.o[3][1] = u - v * d
                }
              }, extendPrototype([DynamicPropertyContainer], h), h
            }(),
            c = function () {
              function d(h, m) {
                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = h, this.comp = h.comp, this.data = m, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(h), m.sy === 1 ? (this.ir = PropertyFactory.getProp(h, m.ir, 0, 0, this), this.is = PropertyFactory.getProp(h, m.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(h, m.pt, 0, 0, this), this.p = PropertyFactory.getProp(h, m.p, 1, 0, this), this.r = PropertyFactory.getProp(h, m.r, 0, degToRads, this), this.or = PropertyFactory.getProp(h, m.or, 0, 0, this), this.os = PropertyFactory.getProp(h, m.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
              }
              return d.prototype = {
                reset: n,
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                },
                convertStarToPath: function () {
                  var h, m, u, y, v = 2 * Math.floor(this.pt.v),
                    E = 2 * Math.PI / v,
                    b = !0,
                    I = this.or.v,
                    S = this.ir.v,
                    _ = this.os.v,
                    A = this.is.v,
                    D = 2 * Math.PI * I / (2 * v),
                    w = 2 * Math.PI * S / (2 * v),
                    O = -Math.PI / 2;
                  O += this.r.v;
                  var V = this.data.d === 3 ? -1 : 1;
                  for (this.v._length = 0, h = 0; h < v; h += 1) {
                    u = b ? _ : A, y = b ? D : w;
                    var M = (m = b ? I : S) * Math.cos(O),
                      L = m * Math.sin(O),
                      G = M === 0 && L === 0 ? 0 : L / Math.sqrt(M * M + L * L),
                      z = M === 0 && L === 0 ? 0 : -M / Math.sqrt(M * M + L * L);
                    M += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(M, L, M - G * y * u * V, L - z * y * u * V, M + G * y * u * V, L + z * y * u * V, h, !0), b = !b, O += E * V
                  }
                },
                convertPolygonToPath: function () {
                  var h, m = Math.floor(this.pt.v),
                    u = 2 * Math.PI / m,
                    y = this.or.v,
                    v = this.os.v,
                    E = 2 * Math.PI * y / (4 * m),
                    b = .5 * -Math.PI,
                    I = this.data.d === 3 ? -1 : 1;
                  for (b += this.r.v, this.v._length = 0, h = 0; h < m; h += 1) {
                    var S = y * Math.cos(b),
                      _ = y * Math.sin(b),
                      A = S === 0 && _ === 0 ? 0 : _ / Math.sqrt(S * S + _ * _),
                      D = S === 0 && _ === 0 ? 0 : -S / Math.sqrt(S * S + _ * _);
                    S += +this.p.v[0], _ += +this.p.v[1], this.v.setTripleAt(S, _, S - A * E * v * I, _ - D * E * v * I, S + A * E * v * I, _ + D * E * v * I, h, !0), b += u * I
                  }
                  this.paths.length = 0, this.paths[0] = this.v
                }
              }, extendPrototype([DynamicPropertyContainer], d), d
            }(),
            f = function () {
              function d(h, m) {
                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h, this.comp = h.comp, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, m.p, 1, 0, this), this.s = PropertyFactory.getProp(h, m.s, 1, 0, this), this.r = PropertyFactory.getProp(h, m.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
              }
              return d.prototype = {
                convertRectToPath: function () {
                  var h = this.p.v[0],
                    m = this.p.v[1],
                    u = this.s.v[0] / 2,
                    y = this.s.v[1] / 2,
                    v = bmMin(u, y, this.r.v),
                    E = v * (1 - roundCorner);
                  this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + u, m - y + v, h + u, m - y + v, h + u, m - y + E, 0, !0), this.v.setTripleAt(h + u, m + y - v, h + u, m + y - E, h + u, m + y - v, 1, !0), v !== 0 ? (this.v.setTripleAt(h + u - v, m + y, h + u - v, m + y, h + u - E, m + y, 2, !0), this.v.setTripleAt(h - u + v, m + y, h - u + E, m + y, h - u + v, m + y, 3, !0), this.v.setTripleAt(h - u, m + y - v, h - u, m + y - v, h - u, m + y - E, 4, !0), this.v.setTripleAt(h - u, m - y + v, h - u, m - y + E, h - u, m - y + v, 5, !0), this.v.setTripleAt(h - u + v, m - y, h - u + v, m - y, h - u + E, m - y, 6, !0), this.v.setTripleAt(h + u - v, m - y, h + u - E, m - y, h + u - v, m - y, 7, !0)) : (this.v.setTripleAt(h - u, m + y, h - u + E, m + y, h - u, m + y, 2), this.v.setTripleAt(h - u, m - y, h - u, m - y + E, h - u, m - y, 3))) : (this.v.setTripleAt(h + u, m - y + v, h + u, m - y + E, h + u, m - y + v, 0, !0), v !== 0 ? (this.v.setTripleAt(h + u - v, m - y, h + u - v, m - y, h + u - E, m - y, 1, !0), this.v.setTripleAt(h - u + v, m - y, h - u + E, m - y, h - u + v, m - y, 2, !0), this.v.setTripleAt(h - u, m - y + v, h - u, m - y + v, h - u, m - y + E, 3, !0), this.v.setTripleAt(h - u, m + y - v, h - u, m + y - E, h - u, m + y - v, 4, !0), this.v.setTripleAt(h - u + v, m + y, h - u + v, m + y, h - u + E, m + y, 5, !0), this.v.setTripleAt(h + u - v, m + y, h + u - E, m + y, h + u - v, m + y, 6, !0), this.v.setTripleAt(h + u, m + y - v, h + u, m + y - v, h + u, m + y - E, 7, !0)) : (this.v.setTripleAt(h - u, m - y, h - u + E, m - y, h - u, m - y, 1, !0), this.v.setTripleAt(h - u, m + y, h - u, m + y - E, h - u, m + y, 2, !0), this.v.setTripleAt(h + u, m + y, h + u - E, m + y, h + u, m + y, 3, !0)))
                },
                getValue: function () {
                  this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                },
                reset: n
              }, extendPrototype([DynamicPropertyContainer], d), d
            }(),
            g = {
              getShapeProp: function (d, h, m) {
                var u;
                return m === 3 || m === 4 ? u = (m === 3 ? h.pt : h.ks).k.length ? new l(d, h, m) : new s(d, h, m) : m === 5 ? u = new f(d, h) : m === 6 ? u = new p(d, h) : m === 7 && (u = new c(d, h)), u.k && d.addDynamicProperty(u), u
              },
              getConstructorFunction: function () {
                return s
              },
              getKeyframedConstructorFunction: function () {
                return l
              }
            };
          return g
        }(),
        Matrix = function () {
          var e = Math.cos,
            t = Math.sin,
            r = Math.tan,
            n = Math.round;

          function i() {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
          }

          function a(x) {
            if (x === 0) return this;
            var B = e(x),
              Q = t(x);
            return this._t(B, -Q, 0, 0, Q, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function s(x) {
            if (x === 0) return this;
            var B = e(x),
              Q = t(x);
            return this._t(1, 0, 0, 0, 0, B, -Q, 0, 0, Q, B, 0, 0, 0, 0, 1)
          }

          function o(x) {
            if (x === 0) return this;
            var B = e(x),
              Q = t(x);
            return this._t(B, 0, Q, 0, 0, 1, 0, 0, -Q, 0, B, 0, 0, 0, 0, 1)
          }

          function l(x) {
            if (x === 0) return this;
            var B = e(x),
              Q = t(x);
            return this._t(B, -Q, 0, 0, Q, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function p(x, B) {
            return this._t(1, B, x, 1, 0, 0)
          }

          function c(x, B) {
            return this.shear(r(x), r(B))
          }

          function f(x, B) {
            var Q = e(B),
              N = t(B);
            return this._t(Q, N, 0, 0, -N, Q, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(x), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(Q, -N, 0, 0, N, Q, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function g(x, B, Q) {
            return Q || Q === 0 || (Q = 1), x === 1 && B === 1 && Q === 1 ? this : this._t(x, 0, 0, 0, 0, B, 0, 0, 0, 0, Q, 0, 0, 0, 0, 1)
          }

          function d(x, B, Q, N, k, P, F, H, j, J, Z, ie, ee, R, $, ne) {
            return this.props[0] = x, this.props[1] = B, this.props[2] = Q, this.props[3] = N, this.props[4] = k, this.props[5] = P, this.props[6] = F, this.props[7] = H, this.props[8] = j, this.props[9] = J, this.props[10] = Z, this.props[11] = ie, this.props[12] = ee, this.props[13] = R, this.props[14] = $, this.props[15] = ne, this
          }

          function h(x, B, Q) {
            return Q = Q || 0, x !== 0 || B !== 0 || Q !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, B, Q, 1) : this
          }

          function m(x, B, Q, N, k, P, F, H, j, J, Z, ie, ee, R, $, ne) {
            var X = this.props;
            if (x === 1 && B === 0 && Q === 0 && N === 0 && k === 0 && P === 1 && F === 0 && H === 0 && j === 0 && J === 0 && Z === 1 && ie === 0) return X[12] = X[12] * x + X[15] * ee, X[13] = X[13] * P + X[15] * R, X[14] = X[14] * Z + X[15] * $, X[15] *= ne, this._identityCalculated = !1, this;
            var fe = X[0],
              ye = X[1],
              be = X[2],
              C = X[3],
              q = X[4],
              U = X[5],
              W = X[6],
              K = X[7],
              Y = X[8],
              ae = X[9],
              oe = X[10],
              se = X[11],
              te = X[12],
              ue = X[13],
              ce = X[14],
              ve = X[15];
            return X[0] = fe * x + ye * k + be * j + C * ee, X[1] = fe * B + ye * P + be * J + C * R, X[2] = fe * Q + ye * F + be * Z + C * $, X[3] = fe * N + ye * H + be * ie + C * ne, X[4] = q * x + U * k + W * j + K * ee, X[5] = q * B + U * P + W * J + K * R, X[6] = q * Q + U * F + W * Z + K * $, X[7] = q * N + U * H + W * ie + K * ne, X[8] = Y * x + ae * k + oe * j + se * ee, X[9] = Y * B + ae * P + oe * J + se * R, X[10] = Y * Q + ae * F + oe * Z + se * $, X[11] = Y * N + ae * H + oe * ie + se * ne, X[12] = te * x + ue * k + ce * j + ve * ee, X[13] = te * B + ue * P + ce * J + ve * R, X[14] = te * Q + ue * F + ce * Z + ve * $, X[15] = te * N + ue * H + ce * ie + ve * ne, this._identityCalculated = !1, this
          }

          function u(x) {
            var B = x.props;
            return this.transform(B[0], B[1], B[2], B[3], B[4], B[5], B[6], B[7], B[8], B[9], B[10], B[11], B[12], B[13], B[14], B[15])
          }

          function y() {
            return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
          }

          function v(x) {
            for (var B = 0; B < 16;) {
              if (x.props[B] !== this.props[B]) return !1;
              B += 1
            }
            return !0
          }

          function E(x) {
            var B;
            for (B = 0; B < 16; B += 1) x.props[B] = this.props[B];
            return x
          }

          function b(x) {
            var B;
            for (B = 0; B < 16; B += 1) this.props[B] = x[B]
          }

          function I(x, B, Q) {
            return {
              x: x * this.props[0] + B * this.props[4] + Q * this.props[8] + this.props[12],
              y: x * this.props[1] + B * this.props[5] + Q * this.props[9] + this.props[13],
              z: x * this.props[2] + B * this.props[6] + Q * this.props[10] + this.props[14]
            }
          }

          function S(x, B, Q) {
            return x * this.props[0] + B * this.props[4] + Q * this.props[8] + this.props[12]
          }

          function _(x, B, Q) {
            return x * this.props[1] + B * this.props[5] + Q * this.props[9] + this.props[13]
          }

          function A(x, B, Q) {
            return x * this.props[2] + B * this.props[6] + Q * this.props[10] + this.props[14]
          }

          function D() {
            var x = this.props[0] * this.props[5] - this.props[1] * this.props[4],
              B = this.props[5] / x,
              Q = -this.props[1] / x,
              N = -this.props[4] / x,
              k = this.props[0] / x,
              P = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / x,
              F = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / x,
              H = new Matrix;
            return H.props[0] = B, H.props[1] = Q, H.props[4] = N, H.props[5] = k, H.props[12] = P, H.props[13] = F, H
          }

          function w(x) {
            return this.getInverseMatrix().applyToPointArray(x[0], x[1], x[2] || 0)
          }

          function O(x) {
            var B, Q = x.length,
              N = [];
            for (B = 0; B < Q; B += 1) N[B] = w(x[B]);
            return N
          }

          function V(x, B, Q) {
            var N = createTypedArray("float32", 6);
            if (this.isIdentity()) N[0] = x[0], N[1] = x[1], N[2] = B[0], N[3] = B[1], N[4] = Q[0], N[5] = Q[1];
            else {
              var k = this.props[0],
                P = this.props[1],
                F = this.props[4],
                H = this.props[5],
                j = this.props[12],
                J = this.props[13];
              N[0] = x[0] * k + x[1] * F + j, N[1] = x[0] * P + x[1] * H + J, N[2] = B[0] * k + B[1] * F + j, N[3] = B[0] * P + B[1] * H + J, N[4] = Q[0] * k + Q[1] * F + j, N[5] = Q[0] * P + Q[1] * H + J
            }
            return N
          }

          function M(x, B, Q) {
            return this.isIdentity() ? [x, B, Q] : [x * this.props[0] + B * this.props[4] + Q * this.props[8] + this.props[12], x * this.props[1] + B * this.props[5] + Q * this.props[9] + this.props[13], x * this.props[2] + B * this.props[6] + Q * this.props[10] + this.props[14]]
          }

          function L(x, B) {
            if (this.isIdentity()) return x + "," + B;
            var Q = this.props;
            return Math.round(100 * (x * Q[0] + B * Q[4] + Q[12])) / 100 + "," + Math.round(100 * (x * Q[1] + B * Q[5] + Q[13])) / 100
          }

          function G() {
            for (var x = 0, B = this.props, Q = "matrix3d("; x < 16;) Q += n(1e4 * B[x]) / 1e4, Q += x === 15 ? ")" : ",", x += 1;
            return Q
          }

          function z(x) {
            return x < 1e-6 && x > 0 || x > -1e-6 && x < 0 ? n(1e4 * x) / 1e4 : x
          }

          function re() {
            var x = this.props;
            return "matrix(" + z(x[0]) + "," + z(x[1]) + "," + z(x[4]) + "," + z(x[5]) + "," + z(x[12]) + "," + z(x[13]) + ")"
          }
          return function () {
            this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = f, this.shear = p, this.scale = g, this.setTransform = d, this.translate = h, this.transform = m, this.multiply = u, this.applyToPoint = I, this.applyToX = S, this.applyToY = _, this.applyToZ = A, this.applyToPointArray = M, this.applyToTriplePoints = V, this.applyToPointStringified = L, this.toCSS = G, this.to2dCSS = re, this.clone = E, this.cloneFromProps = b, this.equals = v, this.inversePoints = O, this.inversePoint = w, this.getInverseMatrix = D, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
          }
        }();

      function _typeof$3(e) {
        return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$3(e)
      }
      var lottie = {},
        standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";

      function setLocation(e) {
        setLocationHref(e)
      }

      function searchAnimations() {
        standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
      }

      function setSubframeRendering(e) {
        setSubframeEnabled(e)
      }

      function setPrefix(e) {
        setIdPrefix(e)
      }

      function loadAnimation(e) {
        return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
      }

      function setQuality(e) {
        if (typeof e == "string") switch (e) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10)
        } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
        getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
      }

      function inBrowser() {
        return typeof navigator < "u"
      }

      function installPlugin(e, t) {
        e === "expressions" && setExpressionsPlugin(t)
      }

      function getFactory(e) {
        switch (e) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null
        }
      }

      function checkReady() {
        document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
      }

      function getQueryVariable(e) {
        for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
          var n = t[r].split("=");
          if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
        }
        return null
      }
      lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
      var queryString = "";
      if (standalone) {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || {
            src: ""
          };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        (typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u" || typeof define == "function" && define.amd || (window.bodymovin = lottie)
      } catch (e) {}
      var ShapeModifiers = function () {
        var e = {},
          t = {};
        return e.registerModifier = function (r, n) {
          t[r] || (t[r] = n)
        }, e.getModifier = function (r, n, i) {
          return new t[r](n, i)
        }, e
      }();

      function ShapeModifier() {}

      function TrimModifier() {}

      function PuckerAndBloatModifier() {}
      ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (e) {
        if (!this.closed) {
          e.sh.container.addDynamicProperty(e.sh);
          var t = {
            shape: e.sh,
            data: e,
            localShapeCollection: shapeCollectionPool.newShapeCollection()
          };
          this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
        }
      }, ShapeModifier.prototype.init = function (e, t) {
        this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, ShapeModifier.prototype.processKeys = function () {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
      }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (e, t) {
        this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
      }, TrimModifier.prototype.addShapeToModifier = function (e) {
        e.pathsData = []
      }, TrimModifier.prototype.calculateShapeEdges = function (e, t, r, n, i) {
        var a = [];
        t <= 1 ? a.push({
          s: e,
          e: t
        }) : e >= 1 ? a.push({
          s: e - 1,
          e: t - 1
        }) : (a.push({
          s: e,
          e: 1
        }), a.push({
          s: 0,
          e: t - 1
        }));
        var s, o, l = [],
          p = a.length;
        for (s = 0; s < p; s += 1) {
          var c, f;
          (o = a[s]).e * i < n || o.s * i > n + r || (c = o.s * i <= n ? 0 : (o.s * i - n) / r, f = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([c, f]))
        }
        return l.length || l.push([0, 0]), l
      }, TrimModifier.prototype.releasePathsData = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
        return e.length = 0, e
      }, TrimModifier.prototype.processShapes = function (e) {
        var t, r, n, i;
        if (this._mdf || e) {
          var a = this.o.v % 360 / 360;
          if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
            var s = t;
            t = r, r = s
          }
          t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
        } else t = this.sValue, r = this.eValue;
        var o, l, p, c, f, g = this.shapes.length,
          d = 0;
        if (r === t)
          for (i = 0; i < g; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
        else if (r === 1 && t === 0 || r === 0 && t === 1) {
          if (this._mdf)
            for (i = 0; i < g; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
        } else {
          var h, m, u = [];
          for (i = 0; i < g; i += 1)
            if ((h = this.shapes[i]).shape._mdf || this._mdf || e || this.m === 2) {
              if (l = (n = h.shape.paths)._length, f = 0, !h.shape._mdf && h.pathsData.length) f = h.totalShapeLength;
              else {
                for (p = this.releasePathsData(h.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(n.shapes[o]), p.push(c), f += c.totalLength;
                h.totalShapeLength = f, h.pathsData = p
              }
              d += f, h.shape._mdf = !0
            } else h.shape.paths = h.localShapeCollection;
          var y, v = t,
            E = r,
            b = 0;
          for (i = g - 1; i >= 0; i -= 1)
            if ((h = this.shapes[i]).shape._mdf) {
              for ((m = h.localShapeCollection).releaseShapes(), this.m === 2 && g > 1 ? (y = this.calculateShapeEdges(t, r, h.totalShapeLength, b, d), b += h.totalShapeLength) : y = [
                  [v, E]
                ], l = y.length, o = 0; o < l; o += 1) {
                v = y[o][0], E = y[o][1], u.length = 0, E <= 1 ? u.push({
                  s: h.totalShapeLength * v,
                  e: h.totalShapeLength * E
                }) : v >= 1 ? u.push({
                  s: h.totalShapeLength * (v - 1),
                  e: h.totalShapeLength * (E - 1)
                }) : (u.push({
                  s: h.totalShapeLength * v,
                  e: h.totalShapeLength
                }), u.push({
                  s: 0,
                  e: h.totalShapeLength * (E - 1)
                }));
                var I = this.addShapes(h, u[0]);
                if (u[0].s !== u[0].e) {
                  if (u.length > 1)
                    if (h.shape.paths.shapes[h.shape.paths._length - 1].c) {
                      var S = I.pop();
                      this.addPaths(I, m), I = this.addShapes(h, u[1], S)
                    } else this.addPaths(I, m), I = this.addShapes(h, u[1]);
                  this.addPaths(I, m)
                }
              }
              h.shape.paths = m
            }
        }
      }, TrimModifier.prototype.addPaths = function (e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) t.addShape(e[r])
      }, TrimModifier.prototype.addSegment = function (e, t, r, n, i, a, s) {
        i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
      }, TrimModifier.prototype.addSegmentFromArray = function (e, t, r, n) {
        t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
      }, TrimModifier.prototype.addShapes = function (e, t, r) {
        var n, i, a, s, o, l, p, c, f = e.pathsData,
          g = e.shape.paths.shapes,
          d = e.shape.paths._length,
          h = 0,
          m = [],
          u = !0;
        for (r ? (o = r._length, c = r._length) : (r = shapePool.newElement(), o = 0, c = 0), m.push(r), n = 0; n < d; n += 1) {
          for (l = f[n].lengths, r.c = g[n].c, a = g[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
            if (h + (s = l[i - 1]).addedLength < t.s) h += s.addedLength, r.c = !1;
            else {
              if (h > t.e) {
                r.c = !1;
                break
              }
              t.s <= h && t.e >= h + s.addedLength ? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[i], g[n].v[i], r, o, u), u = !1) : (p = bez.getNewSegment(g[n].v[i - 1], g[n].v[i], g[n].o[i - 1], g[n].i[i], (t.s - h) / s.addedLength, (t.e - h) / s.addedLength, l[i - 1]), this.addSegmentFromArray(p, r, o, u), u = !1, r.c = !1), h += s.addedLength, o += 1
            } if (g[n].c && l.length) {
            if (s = l[i - 1], h <= t.e) {
              var y = l[i - 1].addedLength;
              t.s <= h && t.e >= h + y ? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[0], g[n].v[0], r, o, u), u = !1) : (p = bez.getNewSegment(g[n].v[i - 1], g[n].v[0], g[n].o[i - 1], g[n].i[0], (t.s - h) / y, (t.e - h) / y, l[i - 1]), this.addSegmentFromArray(p, r, o, u), u = !1, r.c = !1)
            } else r.c = !1;
            h += s.addedLength, o += 1
          }
          if (r._length && (r.setXYAt(r.v[c][0], r.v[c][1], "i", c), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), h > t.e) break;
          n < d - 1 && (r = shapePool.newElement(), u = !0, m.push(r), o = 0)
        }
        return m
      }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
      }, PuckerAndBloatModifier.prototype.processPath = function (e, t) {
        var r = t / 100,
          n = [0, 0],
          i = e._length,
          a = 0;
        for (a = 0; a < i; a += 1) n[0] += e.v[a][0], n[1] += e.v[a][1];
        n[0] /= i, n[1] /= i;
        var s, o, l, p, c, f, g = shapePool.newElement();
        for (g.c = e.c, a = 0; a < i; a += 1) s = e.v[a][0] + (n[0] - e.v[a][0]) * r, o = e.v[a][1] + (n[1] - e.v[a][1]) * r, l = e.o[a][0] + (n[0] - e.o[a][0]) * -r, p = e.o[a][1] + (n[1] - e.o[a][1]) * -r, c = e.i[a][0] + (n[0] - e.i[a][0]) * -r, f = e.i[a][1] + (n[1] - e.i[a][1]) * -r, g.setTripleAt(s, o, l, p, c, f, a);
        return g
      }, PuckerAndBloatModifier.prototype.processShapes = function (e) {
        var t, r, n, i, a, s, o = this.shapes.length,
          l = this.amount.v;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var TransformPropertyFactory = function () {
        var e = [0, 0];

        function t(r, n, i) {
          if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = n, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || r), n.p && n.p.s ? (this.px = PropertyFactory.getProp(r, n.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, n.p.y, 0, 0, this), n.p.z && (this.pz = PropertyFactory.getProp(r, n.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, n.p || {
              k: [0, 0, 0]
            }, 1, 0, this), n.rx) {
            if (this.rx = PropertyFactory.getProp(r, n.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, n.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, n.rz, 0, degToRads, this), n.or.k[0].ti) {
              var a, s = n.or.k.length;
              for (a = 0; a < s; a += 1) n.or.k[a].to = null, n.or.k[a].ti = null
            }
            this.or = PropertyFactory.getProp(r, n.or, 1, degToRads, this), this.or.sh = !0
          } else this.r = PropertyFactory.getProp(r, n.r || {
            k: 0
          }, 0, degToRads, this);
          n.sk && (this.sk = PropertyFactory.getProp(r, n.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, n.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, n.a || {
            k: [0, 0, 0]
          }, 1, 0, this), this.s = PropertyFactory.getProp(r, n.s || {
            k: [100, 100, 100]
          }, 1, .01, this), n.o ? this.o = PropertyFactory.getProp(r, n.o, 0, .01, r) : this.o = {
            _mdf: !1,
            v: 1
          }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
        }
        return t.prototype = {
          applyToMatrix: function (r) {
            var n = this._mdf;
            this.iterateDynamicProperties(), this._mdf = this._mdf || n, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
          },
          getValue: function (r) {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
                var n;
                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                  var i, a;
                  if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
                  else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                    i = [], a = [];
                    var s = this.px,
                      o = this.py;
                    s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / n, 0), i[1] = o.getValueAtTime((o.keyframes[0].t + .01) / n, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / n, 0), a[1] = o.getValueAtTime(o.keyframes[0].t / n, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0), i[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / n, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / n, 0), a[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / n, 0)) : (i = [s.pv, o.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / n, s.offsetTime), a[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / n, o.offsetTime))
                  } else i = a = e;
                  this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
                }
                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
              }
              this.frameId = this.elem.globalData.frameId
            }
          },
          precalculateMatrix: function () {
            if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
              if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
              }
              this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }
          },
          autoOrient: function () {}
        }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function (r) {
          this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
        }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
          getTransformProperty: function (r, n, i) {
            return new t(r, n, i)
          }
        }
      }();

      function RepeaterModifier() {}

      function RoundCornersModifier() {}

      function floatEqual(e, t) {
        return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
      }

      function floatZero(e) {
        return Math.abs(e) <= 1e-5
      }

      function lerp(e, t, r) {
        return e * (1 - r) + t * r
      }

      function lerpPoint(e, t, r) {
        return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
      }

      function quadRoots(e, t, r) {
        if (e === 0) return [];
        var n = t * t - 4 * e * r;
        if (n < 0) return [];
        var i = -t / (2 * e);
        if (n === 0) return [i];
        var a = Math.sqrt(n) / (2 * e);
        return [i - a, i + a]
      }

      function polynomialCoefficients(e, t, r, n) {
        return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
      }

      function singlePoint(e) {
        return new PolynomialBezier(e, e, e, e, !1)
      }

      function PolynomialBezier(e, t, r, n, i) {
        i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
        var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
          s = polynomialCoefficients(e[1], t[1], r[1], n[1]);
        this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, n]
      }

      function extrema(e, t) {
        var r = e.points[0][t],
          n = e.points[e.points.length - 1][t];
        if (r > n) {
          var i = n;
          n = r, r = i
        }
        for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
          if (a[s] > 0 && a[s] < 1) {
            var o = e.point(a[s])[t];
            o < r ? r = o : o > n && (n = o)
          } return {
          min: r,
          max: n
        }
      }

      function intersectData(e, t, r) {
        var n = e.boundingBox();
        return {
          cx: n.cx,
          cy: n.cy,
          width: n.width,
          height: n.height,
          bez: e,
          t: (t + r) / 2,
          t1: t,
          t2: r
        }
      }

      function splitData(e) {
        var t = e.bez.split(.5);
        return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
      }

      function boxIntersect(e, t) {
        return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
      }

      function intersectsImpl(e, t, r, n, i, a) {
        if (boxIntersect(e, t))
          if (r >= a || e.width <= n && e.height <= n && t.width <= n && t.height <= n) i.push([e.t, t.t]);
          else {
            var s = splitData(e),
              o = splitData(t);
            intersectsImpl(s[0], o[0], r + 1, n, i, a), intersectsImpl(s[0], o[1], r + 1, n, i, a), intersectsImpl(s[1], o[0], r + 1, n, i, a), intersectsImpl(s[1], o[1], r + 1, n, i, a)
          }
      }

      function crossProduct(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
      }

      function lineIntersection(e, t, r, n) {
        var i = [e[0], e[1], 1],
          a = [t[0], t[1], 1],
          s = [r[0], r[1], 1],
          o = [n[0], n[1], 1],
          l = crossProduct(crossProduct(i, a), crossProduct(s, o));
        return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
      }

      function polarOffset(e, t, r) {
        return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
      }

      function pointDistance(e, t) {
        return Math.hypot(e[0] - t[0], e[1] - t[1])
      }

      function pointEqual(e, t) {
        return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
      }

      function ZigZagModifier() {}

      function setPoint(e, t, r, n, i, a, s) {
        var o = r - Math.PI / 2,
          l = r + Math.PI / 2,
          p = t[0] + Math.cos(r) * n * i,
          c = t[1] - Math.sin(r) * n * i;
        e.setTripleAt(p, c, p + Math.cos(o) * a, c - Math.sin(o) * a, p + Math.cos(l) * s, c - Math.sin(l) * s, e.length())
      }

      function getPerpendicularVector(e, t) {
        var r = [t[0] - e[0], t[1] - e[1]],
          n = .5 * -Math.PI;
        return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
      }

      function getProjectingAngle(e, t) {
        var r = t === 0 ? e.length() - 1 : t - 1,
          n = (t + 1) % e.length(),
          i = getPerpendicularVector(e.v[r], e.v[n]);
        return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
      }

      function zigZagCorner(e, t, r, n, i, a, s) {
        var o = getProjectingAngle(t, r),
          l = t.v[r % t._length],
          p = t.v[r === 0 ? t._length - 1 : r - 1],
          c = t.v[(r + 1) % t._length],
          f = a === 2 ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)) : 0,
          g = a === 2 ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0;
        setPoint(e, t.v[r % t._length], o, s, n, g / (2 * (i + 1)), f / (2 * (i + 1)), a)
      }

      function zigZagSegment(e, t, r, n, i, a) {
        for (var s = 0; s < n; s += 1) {
          var o = (s + 1) / (n + 1),
            l = i === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
            p = t.normalAngle(o);
          setPoint(e, t.point(o), p, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
        }
        return a
      }

      function linearOffset(e, t, r) {
        var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
        return [polarOffset(e, n, r), polarOffset(t, n, r)]
      }

      function offsetSegment(e, t) {
        var r, n, i, a, s, o, l;
        r = (l = linearOffset(e.points[0], e.points[1], t))[0], n = l[1], i = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
        var p = lineIntersection(r, n, i, a);
        p === null && (p = n);
        var c = lineIntersection(s, o, i, a);
        return c === null && (c = s), new PolynomialBezier(r, p, c, o)
      }

      function joinLines(e, t, r, n, i) {
        var a = t.points[3],
          s = r.points[0];
        if (n === 3 || pointEqual(a, s)) return a;
        if (n === 2) {
          var o = -t.tangentAngle(1),
            l = -r.tangentAngle(0) + Math.PI,
            p = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
            c = p ? pointDistance(p, a) : pointDistance(a, s) / 2,
            f = polarOffset(a, o, 2 * c * roundCorner);
          return e.setXYAt(f[0], f[1], "o", e.length() - 1), f = polarOffset(s, l, 2 * c * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], f[0], f[1], e.length()), s
        }
        var g = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
        return g && pointDistance(g, a) < i ? (e.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], e.length()), g) : a
      }

      function getIntersection(e, t) {
        var r = e.intersections(t);
        return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
      }

      function pruneSegmentIntersection(e, t) {
        var r = e.slice(),
          n = t.slice(),
          i = getIntersection(e[e.length - 1], t[0]);
        return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], n[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])) ? [
          [e[0].split(i[0])[0]],
          [t[t.length - 1].split(i[1])[1]]
        ] : [r, n]
      }

      function pruneIntersections(e) {
        for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
        return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
      }

      function offsetSegmentSplit(e, t) {
        var r, n, i, a, s = e.inflectionPoints();
        if (s.length === 0) return [offsetSegment(e, t)];
        if (s.length === 1 || floatEqual(s[1], 1)) return r = (i = e.split(s[0]))[0], n = i[1], [offsetSegment(r, t), offsetSegment(n, t)];
        r = (i = e.split(s[0]))[0];
        var o = (s[1] - s[0]) / (1 - s[0]);
        return a = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
      }

      function OffsetPathModifier() {}

      function getFontProperties(e) {
        for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0; a < i; a += 1) switch (t[a].toLowerCase()) {
          case "italic":
            n = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200"
        }
        return {
          style: n,
          weight: e.fWeight || r
        }
      }
      extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
      }, RepeaterModifier.prototype.applyTransforms = function (e, t, r, n, i, a) {
        var s = a ? -1 : 1,
          o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
          l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
        e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * s * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
      }, RepeaterModifier.prototype.init = function (e, t, r, n) {
        for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
      }, RepeaterModifier.prototype.resetElements = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
      }, RepeaterModifier.prototype.cloneElements = function (e) {
        var t = JSON.parse(JSON.stringify(e));
        return this.resetElements(t), t
      }, RepeaterModifier.prototype.changeGroupRender = function (e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
      }, RepeaterModifier.prototype.processShapes = function (e) {
        var t, r, n, i, a, s = !1;
        if (this._mdf || e) {
          var o, l = Math.ceil(this.c.v);
          if (this._groups.length < l) {
            for (; this._groups.length < l;) {
              var p = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              p.it.push({
                a: {
                  a: 0,
                  ix: 1,
                  k: [0, 0]
                },
                nm: "Transform",
                o: {
                  a: 0,
                  ix: 7,
                  k: 100
                },
                p: {
                  a: 0,
                  ix: 2,
                  k: [0, 0]
                },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{
                    s: 0,
                    e: 0,
                    t: 0
                  }, {
                    s: 0,
                    e: 0,
                    t: 1
                  }]
                },
                s: {
                  a: 0,
                  ix: 3,
                  k: [100, 100]
                },
                sa: {
                  a: 0,
                  ix: 5,
                  k: 0
                },
                sk: {
                  a: 0,
                  ix: 4,
                  k: 0
                },
                ty: "tr"
              }), this.arr.splice(0, 0, p), this._groups.splice(0, 0, p), this._currentCopies += 1
            }
            this.elem.reloadShapes(), s = !0
          }
          for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
            if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
              var c = this.elemsData[n].it,
                f = c[c.length - 1];
              f.transform.op.v !== 0 ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
            }
            a += 1
          }
          this._currentCopies = l;
          var g = this.o.v,
            d = g % 1,
            h = g > 0 ? Math.floor(g) : Math.ceil(g),
            m = this.pMatrix.props,
            u = this.rMatrix.props,
            y = this.sMatrix.props;
          this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
          var v, E, b = 0;
          if (g > 0) {
            for (; b < h;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), b += d)
          } else if (g < 0) {
            for (; b > h;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), b -= d)
          }
          for (n = this.data.m === 1 ? 0 : this._currentCopies - 1, i = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
            if (E = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), b !== 0) {
              for ((n !== 0 && i === 1 || n !== this._currentCopies - 1 && i === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < E; v += 1) r[v] = this.matrix.props[v];
              this.matrix.reset()
            } else
              for (this.matrix.reset(), v = 0; v < E; v += 1) r[v] = this.matrix.props[v];
            b += 1, a -= 1, n += i
          }
        } else
          for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i;
        return s
      }, RepeaterModifier.prototype.addShape = function () {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
      }, RoundCornersModifier.prototype.processPath = function (e, t) {
        var r, n = shapePool.newElement();
        n.c = e.c;
        var i, a, s, o, l, p, c, f, g, d, h, m, u = e._length,
          y = 0;
        for (r = 0; r < u; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? r !== 0 && r !== u - 1 || e.c ? (o = r === 0 ? e.v[u - 1] : e.v[r - 1], p = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = h = i[0] + (o[0] - i[0]) * p, f = m = i[1] - (i[1] - o[1]) * p, g = c - (c - i[0]) * roundCorner, d = f - (f - i[1]) * roundCorner, n.setTripleAt(c, f, g, d, h, m, y), y += 1, o = r === u - 1 ? e.v[0] : e.v[r + 1], p = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = g = i[0] + (o[0] - i[0]) * p, f = d = i[1] + (o[1] - i[1]) * p, h = c - (c - i[0]) * roundCorner, m = f - (f - i[1]) * roundCorner, n.setTripleAt(c, f, g, d, h, m, y), y += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], y), y += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], y), y += 1);
        return n
      }, RoundCornersModifier.prototype.processShapes = function (e) {
        var t, r, n, i, a, s, o = this.shapes.length,
          l = this.rd.v;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      }, PolynomialBezier.prototype.point = function (e) {
        return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
      }, PolynomialBezier.prototype.derivative = function (e) {
        return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
      }, PolynomialBezier.prototype.tangentAngle = function (e) {
        var t = this.derivative(e);
        return Math.atan2(t[1], t[0])
      }, PolynomialBezier.prototype.normalAngle = function (e) {
        var t = this.derivative(e);
        return Math.atan2(t[0], t[1])
      }, PolynomialBezier.prototype.inflectionPoints = function () {
        var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
        if (floatZero(e)) return [];
        var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
          r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
        if (r < 0) return [];
        var n = Math.sqrt(r);
        return floatZero(n) ? n > 0 && n < 1 ? [t] : [] : [t - n, t + n].filter(function (i) {
          return i > 0 && i < 1
        })
      }, PolynomialBezier.prototype.split = function (e) {
        if (e <= 0) return [singlePoint(this.points[0]), this];
        if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
        var t = lerpPoint(this.points[0], this.points[1], e),
          r = lerpPoint(this.points[1], this.points[2], e),
          n = lerpPoint(this.points[2], this.points[3], e),
          i = lerpPoint(t, r, e),
          a = lerpPoint(r, n, e),
          s = lerpPoint(i, a, e);
        return [new PolynomialBezier(this.points[0], t, i, s, !0), new PolynomialBezier(s, a, n, this.points[3], !0)]
      }, PolynomialBezier.prototype.bounds = function () {
        return {
          x: extrema(this, 0),
          y: extrema(this, 1)
        }
      }, PolynomialBezier.prototype.boundingBox = function () {
        var e = this.bounds();
        return {
          left: e.x.min,
          right: e.x.max,
          top: e.y.min,
          bottom: e.y.max,
          width: e.x.max - e.x.min,
          height: e.y.max - e.y.min,
          cx: (e.x.max + e.x.min) / 2,
          cy: (e.y.max + e.y.min) / 2
        }
      }, PolynomialBezier.prototype.intersections = function (e, t, r) {
        t === void 0 && (t = 2), r === void 0 && (r = 7);
        var n = [];
        return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n
      }, PolynomialBezier.shapeSegment = function (e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
      }, PolynomialBezier.shapeSegmentInverted = function (e, t) {
        var r = (t + 1) % e.length();
        return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
      }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
      }, ZigZagModifier.prototype.processPath = function (e, t, r, n) {
        var i = e._length,
          a = shapePool.newElement();
        if (a.c = e.c, e.c || (i -= 1), i === 0) return a;
        var s = -1,
          o = PolynomialBezier.shapeSegment(e, 0);
        zigZagCorner(a, e, 0, t, r, n, s);
        for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, t, r, n, -s), o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null, zigZagCorner(a, e, l + 1, t, r, n, s);
        return a
      }, ZigZagModifier.prototype.processShapes = function (e) {
        var t, r, n, i, a, s, o = this.shapes.length,
          l = this.amplitude.v,
          p = Math.max(0, Math.round(this.frequency.v)),
          c = this.pointsType.v;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, p, c));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
      }, OffsetPathModifier.prototype.processPath = function (e, t, r, n) {
        var i = shapePool.newElement();
        i.c = e.c;
        var a, s, o, l = e.length();
        e.c || (l -= 1);
        var p = [];
        for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), p.push(offsetSegmentSplit(o, t));
        if (!e.c)
          for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), p.push(offsetSegmentSplit(o, t));
        p = pruneIntersections(p);
        var c = null,
          f = null;
        for (a = 0; a < p.length; a += 1) {
          var g = p[a];
          for (f && (c = joinLines(i, f, g[0], r, n)), f = g[g.length - 1], s = 0; s < g.length; s += 1) o = g[s], c && pointEqual(o.points[0], c) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), c = o.points[3]
        }
        return p.length && joinLines(i, f, p[0][0], r, n), i
      }, OffsetPathModifier.prototype.processShapes = function (e) {
        var t, r, n, i, a, s, o = this.shapes.length,
          l = this.amount.v,
          p = this.miterLimit.v,
          c = this.lineJoin;
        if (l !== 0)
          for (r = 0; r < o; r += 1) {
            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
              for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, c, p));
            a.shape.paths = a.localShapeCollection
          }
        this.dynamicProperties.length || (this._mdf = !1)
      };
      var FontManager = function () {
        var e = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
              shapes: []
            }
          },
          t = [];
        t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var r = 127988,
          n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

        function i(c, f) {
          var g = createTag("span");
          g.setAttribute("aria-hidden", !0), g.style.fontFamily = f;
          var d = createTag("span");
          d.innerText = "giItT1WQy@!-/#", g.style.position = "absolute", g.style.left = "-10000px", g.style.top = "-10000px", g.style.fontSize = "300px", g.style.fontVariant = "normal", g.style.fontStyle = "normal", g.style.fontWeight = "normal", g.style.letterSpacing = "0", g.appendChild(d), document.body.appendChild(g);
          var h = d.offsetWidth;
          return d.style.fontFamily = function (m) {
            var u, y = m.split(","),
              v = y.length,
              E = [];
            for (u = 0; u < v; u += 1) y[u] !== "sans-serif" && y[u] !== "monospace" && E.push(y[u]);
            return E.join(",")
          }(c) + ", " + f, {
            node: d,
            w: h,
            parent: g
          }
        }

        function a(c, f) {
          var g, d = document.body && f ? "svg" : "canvas",
            h = getFontProperties(c);
          if (d === "svg") {
            var m = createNS("text");
            m.style.fontSize = "100px", m.setAttribute("font-family", c.fFamily), m.setAttribute("font-style", h.style), m.setAttribute("font-weight", h.weight), m.textContent = "1", c.fClass ? (m.style.fontFamily = "inherit", m.setAttribute("class", c.fClass)) : m.style.fontFamily = c.fFamily, f.appendChild(m), g = m
          } else {
            var u = new OffscreenCanvas(500, 500).getContext("2d");
            u.font = h.style + " " + h.weight + " 100px " + c.fFamily, g = u
          }
          return {
            measureText: function (y) {
              return d === "svg" ? (g.textContent = y, g.getComputedTextLength()) : g.measureText(y).width
            }
          }
        }

        function s(c) {
          var f = 0,
            g = c.charCodeAt(0);
          if (g >= 55296 && g <= 56319) {
            var d = c.charCodeAt(1);
            d >= 56320 && d <= 57343 && (f = 1024 * (g - 55296) + d - 56320 + 65536)
          }
          return f
        }

        function o(c) {
          var f = s(c);
          return f >= 127462 && f <= 127487
        }
        var l = function () {
          this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
        };
        l.isModifier = function (c, f) {
          var g = c.toString(16) + f.toString(16);
          return n.indexOf(g) !== -1
        }, l.isZeroWidthJoiner = function (c) {
          return c === 8205
        }, l.isFlagEmoji = function (c) {
          return o(c.substr(0, 2)) && o(c.substr(2, 2))
        }, l.isRegionalCode = o, l.isCombinedCharacter = function (c) {
          return t.indexOf(c) !== -1
        }, l.isRegionalFlag = function (c, f) {
          var g = s(c.substr(f, 2));
          if (g !== r) return !1;
          var d = 0;
          for (f += 2; d < 5;) {
            if ((g = s(c.substr(f, 2))) < 917601 || g > 917626) return !1;
            d += 1, f += 2
          }
          return s(c.substr(f, 2)) === 917631
        }, l.isVariationSelector = function (c) {
          return c === 65039
        }, l.BLACK_FLAG_CODE_POINT = r;
        var p = {
          addChars: function (c) {
            if (c) {
              var f;
              this.chars || (this.chars = []);
              var g, d, h = c.length,
                m = this.chars.length;
              for (f = 0; f < h; f += 1) {
                for (g = 0, d = !1; g < m;) this.chars[g].style === c[f].style && this.chars[g].fFamily === c[f].fFamily && this.chars[g].ch === c[f].ch && (d = !0), g += 1;
                d || (this.chars.push(c[f]), m += 1)
              }
            }
          },
          addFonts: function (c, f) {
            if (c) {
              if (this.chars) return this.isLoaded = !0, void(this.fonts = c.list);
              if (!document.body) return this.isLoaded = !0, c.list.forEach(function (S) {
                S.helper = a(S), S.cache = {}
              }), void(this.fonts = c.list);
              var g, d = c.list,
                h = d.length,
                m = h;
              for (g = 0; g < h; g += 1) {
                var u, y, v = !0;
                if (d[g].loaded = !1, d[g].monoCase = i(d[g].fFamily, "monospace"), d[g].sansCase = i(d[g].fFamily, "sans-serif"), d[g].fPath) {
                  if (d[g].fOrigin === "p" || d[g].origin === 3) {
                    if ((u = document.querySelectorAll('style[f-forigin="p"][f-family="' + d[g].fFamily + '"], style[f-origin="3"][f-family="' + d[g].fFamily + '"]')).length > 0 && (v = !1), v) {
                      var E = createTag("style");
                      E.setAttribute("f-forigin", d[g].fOrigin), E.setAttribute("f-origin", d[g].origin), E.setAttribute("f-family", d[g].fFamily), E.type = "text/css", E.innerText = "@font-face {font-family: " + d[g].fFamily + "; font-style: normal; src: url('" + d[g].fPath + "');}", f.appendChild(E)
                    }
                  } else if (d[g].fOrigin === "g" || d[g].origin === 1) {
                    for (u = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), y = 0; y < u.length; y += 1) u[y].href.indexOf(d[g].fPath) !== -1 && (v = !1);
                    if (v) {
                      var b = createTag("link");
                      b.setAttribute("f-forigin", d[g].fOrigin), b.setAttribute("f-origin", d[g].origin), b.type = "text/css", b.rel = "stylesheet", b.href = d[g].fPath, document.body.appendChild(b)
                    }
                  } else if (d[g].fOrigin === "t" || d[g].origin === 2) {
                    for (u = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), y = 0; y < u.length; y += 1) d[g].fPath === u[y].src && (v = !1);
                    if (v) {
                      var I = createTag("link");
                      I.setAttribute("f-forigin", d[g].fOrigin), I.setAttribute("f-origin", d[g].origin), I.setAttribute("rel", "stylesheet"), I.setAttribute("href", d[g].fPath), f.appendChild(I)
                    }
                  }
                } else d[g].loaded = !0, m -= 1;
                d[g].helper = a(d[g], f), d[g].cache = {}, this.fonts.push(d[g])
              }
              m === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            } else this.isLoaded = !0
          },
          getCharData: function (c, f, g) {
            for (var d = 0, h = this.chars.length; d < h;) {
              if (this.chars[d].ch === c && this.chars[d].style === f && this.chars[d].fFamily === g) return this.chars[d];
              d += 1
            }
            return (typeof c == "string" && c.charCodeAt(0) !== 13 || !c) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", c, f, g)), e
          },
          getFontByName: function (c) {
            for (var f = 0, g = this.fonts.length; f < g;) {
              if (this.fonts[f].fName === c) return this.fonts[f];
              f += 1
            }
            return this.fonts[0]
          },
          measureText: function (c, f, g) {
            var d = this.getFontByName(f),
              h = c;
            if (!d.cache[h]) {
              var m = d.helper;
              if (c === " ") {
                var u = m.measureText("|" + c + "|"),
                  y = m.measureText("||");
                d.cache[h] = (u - y) / 100
              } else d.cache[h] = m.measureText(c) / 100
            }
            return d.cache[h] * g
          },
          checkLoadedFonts: function () {
            var c, f, g, d = this.fonts.length,
              h = d;
            for (c = 0; c < d; c += 1) this.fonts[c].loaded ? h -= 1 : this.fonts[c].fOrigin === "n" || this.fonts[c].origin === 0 ? this.fonts[c].loaded = !0 : (f = this.fonts[c].monoCase.node, g = this.fonts[c].monoCase.w, f.offsetWidth !== g ? (h -= 1, this.fonts[c].loaded = !0) : (f = this.fonts[c].sansCase.node, g = this.fonts[c].sansCase.w, f.offsetWidth !== g && (h -= 1, this.fonts[c].loaded = !0)), this.fonts[c].loaded && (this.fonts[c].sansCase.parent.parentNode.removeChild(this.fonts[c].sansCase.parent), this.fonts[c].monoCase.parent.parentNode.removeChild(this.fonts[c].monoCase.parent)));
            h !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
          },
          setIsLoaded: function () {
            this.isLoaded = !0
          }
        };
        return l.prototype = p, l
      }();

      function SlotManager(e) {
        this.animationData = e
      }

      function slotFactory(e) {
        return new SlotManager(e)
      }

      function RenderableElement() {}
      SlotManager.prototype.getProp = function (e) {
        return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
      }, RenderableElement.prototype = {
        initRenderable: function () {
          this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
        },
        addRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
        },
        removeRenderableComponent: function (e) {
          this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
        },
        prepareRenderableFrame: function (e) {
          this.checkLayerLimits(e)
        },
        checkTransparency: function () {
          this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
        },
        checkLayerLimits: function (e) {
          this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
        },
        renderRenderable: function () {
          var e, t = this.renderableComponents.length;
          for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
        },
        sourceRectAtTime: function () {
          return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
          }
        },
        getLayerSize: function () {
          return this.data.ty === 5 ? {
            w: this.data.textData.width,
            h: this.data.textData.height
          } : {
            w: this.data.width,
            h: this.data.height
          }
        }
      };
      var getBlendMode = (blendModeEnums = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        }, function (e) {
          return blendModeEnums[e] || ""
        }),
        blendModeEnums;

      function SliderEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function AngleEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function ColorEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function PointEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
      }

      function LayerIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function MaskIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function CheckboxEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
      }

      function NoValueEffect() {
        this.p = {}
      }

      function EffectsManager(e, t) {
        var r, n = e.ef || [];
        this.effectElements = [];
        var i, a = n.length;
        for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], t), this.effectElements.push(i)
      }

      function GroupEffect(e, t) {
        this.init(e, t)
      }

      function BaseElement() {}

      function FrameElement() {}

      function FootageElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
      }

      function AudioElement(e, t, r) {
        this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
        var n = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
          k: [100]
        }, 1, .01, this)
      }

      function BaseRenderer() {}
      extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (e, t) {
        var r;
        this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
        var n, i = this.data.ef.length,
          a = this.data.ef;
        for (r = 0; r < i; r += 1) {
          switch (n = null, a[r].ty) {
            case 0:
              n = new SliderEffect(a[r], t, this);
              break;
            case 1:
              n = new AngleEffect(a[r], t, this);
              break;
            case 2:
              n = new ColorEffect(a[r], t, this);
              break;
            case 3:
              n = new PointEffect(a[r], t, this);
              break;
            case 4:
            case 7:
              n = new CheckboxEffect(a[r], t, this);
              break;
            case 10:
              n = new LayerIndexEffect(a[r], t, this);
              break;
            case 11:
              n = new MaskIndexEffect(a[r], t, this);
              break;
            case 5:
              n = new EffectsManager(a[r], t, this);
              break;
            default:
              n = new NoValueEffect(a[r], t, this)
          }
          n && this.effectElements.push(n)
        }
      }, BaseElement.prototype = {
        checkMasks: function () {
          if (!this.data.hasMask) return !1;
          for (var e = 0, t = this.data.masksProperties.length; e < t;) {
            if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
            e += 1
          }
          return !1
        },
        initExpressions: function () {
          var e = getExpressionInterfaces();
          if (e) {
            var t = e("layer"),
              r = e("effects"),
              n = e("shape"),
              i = e("text"),
              a = e("comp");
            this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var s = r.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(s), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
          }
        },
        setBlendMode: function () {
          var e = getBlendMode(this.data.bm);
          (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
        },
        initBaseData: function (e, t, r) {
          this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
        },
        getType: function () {
          return this.type
        },
        sourceRectAtTime: function () {}
      }, FrameElement.prototype = {
        initFrame: function () {
          this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
        },
        prepareProperties: function (e, t) {
          var r, n = this.dynamicProperties.length;
          for (r = 0; r < n; r += 1)(t || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
        },
        addDynamicProperty: function (e) {
          this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
        }
      }, FootageElement.prototype.prepareFrame = function () {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function () {
        return null
      }, FootageElement.prototype.renderFrame = function () {}, FootageElement.prototype.destroy = function () {}, FootageElement.prototype.initExpressions = function () {
        var e = getExpressionInterfaces();
        if (e) {
          var t = e("footage");
          this.layerInterface = t(this)
        }
      }, FootageElement.prototype.getFootageData = function () {
        return this.footageData
      }, AudioElement.prototype.prepareFrame = function (e) {
        if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
        else {
          var t = this.tm.v;
          this._currentTime = t
        }
        this._volume = this.lv.v[0];
        var r = this._volume * this._volumeMultiplier;
        this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
      }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
      }, AudioElement.prototype.show = function () {}, AudioElement.prototype.hide = function () {
        this.audio.pause(), this._isPlaying = !1
      }, AudioElement.prototype.pause = function () {
        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
      }, AudioElement.prototype.resume = function () {
        this._canPlay = !0
      }, AudioElement.prototype.setRate = function (e) {
        this.audio.rate(e)
      }, AudioElement.prototype.volume = function (e) {
        this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
      }, AudioElement.prototype.getBaseElement = function () {
        return null
      }, AudioElement.prototype.destroy = function () {}, AudioElement.prototype.sourceRectAtTime = function () {}, AudioElement.prototype.initExpressions = function () {}, BaseRenderer.prototype.checkLayers = function (e) {
        var t, r, n = this.layers.length;
        for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
        this.checkPendingElements()
      }, BaseRenderer.prototype.createItem = function (e) {
        switch (e.ty) {
          case 2:
            return this.createImage(e);
          case 0:
            return this.createComp(e);
          case 1:
            return this.createSolid(e);
          case 3:
          default:
            return this.createNull(e);
          case 4:
            return this.createShape(e);
          case 5:
            return this.createText(e);
          case 6:
            return this.createAudio(e);
          case 13:
            return this.createCamera(e);
          case 15:
            return this.createFootage(e)
        }
      }, BaseRenderer.prototype.createCamera = function () {
        throw new Error("You're using a 3d camera. Try the html renderer.")
      }, BaseRenderer.prototype.createAudio = function (e) {
        return new AudioElement(e, this.globalData, this)
      }, BaseRenderer.prototype.createFootage = function (e) {
        return new FootageElement(e, this.globalData, this)
      }, BaseRenderer.prototype.buildAllItems = function () {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.buildItem(e);
        this.checkPendingElements()
      }, BaseRenderer.prototype.includeLayers = function (e) {
        var t;
        this.completeLayers = !1;
        var r, n = e.length,
          i = this.layers.length;
        for (t = 0; t < n; t += 1)
          for (r = 0; r < i;) {
            if (this.layers[r].id === e[t].id) {
              this.layers[r] = e[t];
              break
            }
            r += 1
          }
      }, BaseRenderer.prototype.setProjectInterface = function (e) {
        this.globalData.projectInterface = e
      }, BaseRenderer.prototype.initItems = function () {
        this.globalData.progressiveLoad || this.buildAllItems()
      }, BaseRenderer.prototype.buildElementParenting = function (e, t, r) {
        for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (n[a] && n[a] !== !0 ? (r.push(n[a]), n[a].setAsParent(), i[a].parent !== void 0 ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
      }, BaseRenderer.prototype.addPendingElement = function (e) {
        this.pendingElements.push(e)
      }, BaseRenderer.prototype.searchExtraCompositions = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var n = this.createComp(e[t]);
            n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
          }
      }, BaseRenderer.prototype.getElementById = function (e) {
        var t, r = this.elements.length;
        for (t = 0; t < r; t += 1)
          if (this.elements[t].data.ind === e) return this.elements[t];
        return null
      }, BaseRenderer.prototype.getElementByPath = function (e) {
        var t, r = e.shift();
        if (typeof r == "number") t = this.elements[r];
        else {
          var n, i = this.elements.length;
          for (n = 0; n < i; n += 1)
            if (this.elements[n].data.nm === r) {
              t = this.elements[n];
              break
            }
        }
        return e.length === 0 ? t : t.getElementByPath(e)
      }, BaseRenderer.prototype.setupGlobalData = function (e, t) {
        this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
          w: e.w,
          h: e.h
        }
      };
      var effectTypes = {
        TRANSFORM_EFFECT: "transformEFfect"
      };

      function TransformElement() {}

      function MaskElement(e, t, r) {
        this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var n, i, a = this.globalData.defs,
          s = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(s), this.solidPath = "";
        var o, l, p, c, f, g, d = this.masksProperties,
          h = 0,
          m = [],
          u = createElementID(),
          y = "clipPath",
          v = "clip-path";
        for (n = 0; n < s; n += 1)
          if ((d[n].mode !== "a" && d[n].mode !== "n" || d[n].inv || d[n].o.k !== 100 || d[n].o.x) && (y = "mask", v = "mask"), d[n].mode !== "s" && d[n].mode !== "i" || h !== 0 ? p = null : ((p = createNS("rect")).setAttribute("fill", "#ffffff"), p.setAttribute("width", this.element.comp.data.w || 0), p.setAttribute("height", this.element.comp.data.h || 0), m.push(p)), i = createNS("path"), d[n].mode === "n") this.viewData[n] = {
            op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
            elem: i,
            lastPath: ""
          }, a.appendChild(i);
          else {
            var E;
            if (h += 1, i.setAttribute("fill", d[n].mode === "s" ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), d[n].x.k !== 0 ? (y = "mask", v = "mask", g = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.element), E = createElementID(), (c = createNS("filter")).setAttribute("id", E), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), c.appendChild(f), a.appendChild(c), i.setAttribute("stroke", d[n].mode === "s" ? "#000000" : "#ffffff")) : (f = null, g = null), this.storedData[n] = {
                elem: i,
                x: g,
                expan: f,
                lastPath: "",
                lastOperator: "",
                filterId: E,
                lastRadius: 0
              }, d[n].mode === "i") {
              l = m.length;
              var b = createNS("g");
              for (o = 0; o < l; o += 1) b.appendChild(m[o]);
              var I = createNS("mask");
              I.setAttribute("mask-type", "alpha"), I.setAttribute("id", u + "_" + h), I.appendChild(i), a.appendChild(I), b.setAttribute("mask", "url(" + getLocationHref() + "#" + u + "_" + h + ")"), m.length = 0, m.push(b)
            } else m.push(i);
            d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
              elem: i,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
              invRect: p
            }, this.viewData[n].prop.k || this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n])
          } for (this.maskElement = createNS(y), s = m.length, n = 0; n < s; n += 1) this.maskElement.appendChild(m[n]);
        h > 0 && (this.maskElement.setAttribute("id", u), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + u + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
      }
      TransformElement.prototype = {
        initTransform: function () {
          var e = new Matrix;
          this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
              o: 0
            },
            _matMdf: !1,
            _localMatMdf: !1,
            _opMdf: !1,
            mat: e,
            localMat: e,
            localOpacity: 1
          }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
        },
        renderTransform: function () {
          if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
            var e, t = this.finalTransform.mat,
              r = 0,
              n = this.hierarchy.length;
            if (!this.finalTransform._matMdf)
              for (; r < n;) {
                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = !0;
                  break
                }
                r += 1
              }
            if (this.finalTransform._matMdf)
              for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
          }
          this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
        },
        renderLocalTransform: function () {
          if (this.localTransforms) {
            var e = 0,
              t = this.localTransforms.length;
            if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
              for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
            if (this.finalTransform._localMatMdf) {
              var r = this.finalTransform.localMat;
              for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                var n = this.localTransforms[e].matrix;
                r.multiply(n)
              }
              r.multiply(this.finalTransform.mat)
            }
            if (this.finalTransform._opMdf) {
              var i = this.finalTransform.localOpacity;
              for (e = 0; e < t; e += 1) i *= .01 * this.localTransforms[e].opacity;
              this.finalTransform.localOpacity = i
            }
          }
        },
        searchEffectTransforms: function () {
          if (this.renderableEffectsManager) {
            var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
            if (e.length) {
              this.localTransforms = [], this.finalTransform.localMat = new Matrix;
              var t = 0,
                r = e.length;
              for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
            }
          }
        },
        globalToLocal: function (e) {
          var t = [];
          t.push(this.finalTransform);
          for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && t.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
          var a, s = t.length;
          for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
          return e
        },
        mHelper: new Matrix
      }, MaskElement.prototype.getMaskProperty = function (e) {
        return this.viewData[e].prop
      }, MaskElement.prototype.renderFrame = function (e) {
        var t, r = this.element.finalTransform.mat,
          n = this.masksProperties.length;
        for (t = 0; t < n; t += 1)
          if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), this.masksProperties[t].mode !== "n" && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
            var i = this.storedData[t].expan;
            this.storedData[t].x.v < 0 ? (this.storedData[t].lastOperator !== "erode" && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : (this.storedData[t].lastOperator !== "dilate" && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
          }
      }, MaskElement.prototype.getMaskelement = function () {
        return this.maskElement
      }, MaskElement.prototype.createLayerSolidPath = function () {
        var e = "M0,0 ";
        return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
      }, MaskElement.prototype.drawPath = function (e, t, r) {
        var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
        for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
        if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
          var s = "";
          r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
        }
      }, MaskElement.prototype.destroy = function () {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
      };
      var filtersFactory = function () {
          var e = {};
          return e.createFilter = function (t, r) {
            var n = createNS("filter");
            return n.setAttribute("id", t), r !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
          }, e.createAlphaToLuminanceFilter = function () {
            var t = createNS("feColorMatrix");
            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
          }, e
        }(),
        featureSupport = function () {
          var e = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u"
          };
          return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
        }(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";

      function SVGEffects(e) {
        var t, r, n = "SourceGraphic",
          i = e.data.ef ? e.data.ef.length : 0,
          a = createElementID(),
          s = filtersFactory.createFilter(a, !0),
          o = 0;
        for (this.filters = [], t = 0; t < i; t += 1) {
          r = null;
          var l = e.data.ef[t].ty;
          registeredEffects$1[l] && (r = new registeredEffects$1[l].effect(s, e.effectsManager.effectElements[t], e, idPrefix + o, n), n = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
        }
        o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
      }

      function registerEffect$1(e, t, r) {
        registeredEffects$1[e] = {
          effect: t,
          countsAsEffect: r
        }
      }

      function SVGBaseElement() {}

      function HierarchyElement() {}

      function RenderableDOMElement() {}

      function IImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
          top: 0,
          left: 0,
          width: this.assetData.w,
          height: this.assetData.h
        }
      }

      function ProcessedElement(e, t) {
        this.elem = e, this.pos = t
      }

      function IShapeElement() {}
      SVGEffects.prototype.renderFrame = function (e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, SVGEffects.prototype.getEffects = function (e) {
        var t, r = this.filters.length,
          n = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
        return n
      }, SVGBaseElement.prototype = {
        initRendererElement: function () {
          this.layerElement = createNS("g")
        },
        createContainerElements: function () {
          this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
          var e = null;
          if (this.data.td) {
            this.matteMasks = {};
            var t = createNS("g");
            t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
          } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
          if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
            var r = createNS("clipPath"),
              n = createNS("path");
            n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var i = createElementID();
            if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
              var a = createNS("g");
              a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
          }
          this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function () {
          this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
        },
        destroyBaseElement: function () {
          this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
        },
        getBaseElement: function () {
          return this.data.hd ? null : this.baseElement
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
        },
        getMatte: function (e) {
          if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
            var t, r, n, i, a = this.layerId + "_" + e;
            if (e === 1 || e === 3) {
              var s = createNS("mask");
              s.setAttribute("id", a), s.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(n), this.globalData.defs.appendChild(s), featureSupport.maskType || e !== 1 || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
            } else if (e === 2) {
              var o = createNS("mask");
              o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
              var l = createNS("g");
              o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
              var p = createNS("feComponentTransfer");
              p.setAttribute("in", "SourceGraphic"), r.appendChild(p);
              var c = createNS("feFuncA");
              c.setAttribute("type", "table"), c.setAttribute("tableValues", "1.0 0.0"), p.appendChild(c), this.globalData.defs.appendChild(r);
              var f = createNS("rect");
              f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(f), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(f), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
            }
            this.matteMasks[e] = a
          }
          return this.matteMasks[e]
        },
        setMatte: function (e) {
          this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
        }
      }, HierarchyElement.prototype = {
        initHierarchy: function () {
          this.hierarchy = [], this._isParent = !1, this.checkParenting()
        },
        setHierarchy: function (e) {
          this.hierarchy = e
        },
        setAsParent: function () {
          this._isParent = !0
        },
        checkParenting: function () {
          this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
        }
      }, extendPrototype([RenderableElement, createProxyFunction({
        initElement: function (e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
        },
        hide: function () {
          this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
        },
        show: function () {
          this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
        },
        renderFrame: function () {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        renderInnerContent: function () {},
        prepareFrame: function (e) {
          this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
        },
        destroy: function () {
          this.innerElem = null, this.destroyBaseElement()
        }
      })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
        var e = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
      }, IImageElement.prototype.sourceRectAtTime = function () {
        return this.sourceRect
      }, IShapeElement.prototype = {
        addShapeToModifiers: function (e) {
          var t, r = this.shapeModifiers.length;
          for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
        },
        isShapeInAnimatedModifiers: function (e) {
          for (var t = this.shapeModifiers.length; 0 < t;)
            if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
          return !1
        },
        renderModifiers: function () {
          if (this.shapeModifiers.length) {
            var e, t = this.shapes.length;
            for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
            for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
          }
        },
        searchProcessedElement: function (e) {
          for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
            if (t[r].elem === e) return t[r].pos;
            r += 1
          }
          return 0
        },
        addProcessedElement: function (e, t) {
          for (var r = this.processedElements, n = r.length; n;)
            if (r[n -= 1].elem === e) return void(r[n].pos = t);
          r.push(new ProcessedElement(e, t))
        },
        prepareFrame: function (e) {
          this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
        }
      };
      var lineCapEnum = {
          1: "butt",
          2: "round",
          3: "square"
        },
        lineJoinEnum = {
          1: "miter",
          2: "round",
          3: "bevel"
        };

      function SVGShapeData(e, t, r) {
        this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
        for (var n = 0, i = e.length; n < i;) {
          if (e[n].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break
          }
          n += 1
        }
      }

      function SVGStyleData(e, t) {
        this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
      }

      function DashProperty(e, t, r, n) {
        var i;
        this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
        var a, s = t.length || 0;
        for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
          n: t[i].n,
          p: a
        };
        this.k || this.getValue(!0), this._isAnimated = this.k
      }

      function SVGStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
      }

      function SVGFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
      }

      function SVGNoStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
      }

      function GradientProperty(e, t, r) {
        this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
        var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
        this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
      }

      function SVGGradientFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
      }

      function SVGGradientStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
      }

      function ShapeGroupData() {
        this.it = [], this.prevViewData = [], this.gr = createNS("g")
      }

      function SVGTransformData(e, t, r) {
        this.transform = {
          mProps: e,
          op: t,
          container: r
        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
      }
      SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0
      }, SVGStyleData.prototype.reset = function () {
        this.d = "", this._mdf = !1
      }, DashProperty.prototype.getValue = function (e) {
        if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
          var t = 0,
            r = this.dataProps.length;
          for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
        }
      }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function (e, t) {
        for (var r = 0, n = this.o.length / 2; r < n;) {
          if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
          r += 1
        }
        return !0
      }, GradientProperty.prototype.checkCollapsable = function () {
        if (this.o.length / 2 != this.c.length / 4) return !1;
        if (this.data.k.k[0].s)
          for (var e = 0, t = this.data.k.k.length; e < t;) {
            if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
            e += 1
          } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
        return !0
      }, GradientProperty.prototype.getValue = function (e) {
        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
          var t, r, n, i = 4 * this.data.p;
          for (t = 0; t < i; t += 1) r = t % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
          if (this.o.length)
            for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 == 0 ? 100 : 1, n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
          this._mdf = !e
        }
      }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function (e, t, r) {
        this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
          k: 0
        }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
          k: 0
        }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
      }, SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
        var r = createElementID(),
          n = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
        var i, a, s, o = [];
        for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
        e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
      }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, t) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var r, n, i, a = createNS("mask"),
            s = createNS("path");
          a.appendChild(s);
          var o = createElementID(),
            l = createElementID();
          a.setAttribute("id", l);
          var p = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
          p.setAttribute("id", o), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
          var c = this.stops;
          for (n = 4 * e.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(r), c.push(r);
          s.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), e.ty === "gs" && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)), this.of = p, this.ms = a, this.ost = c, this.maskId = l, t.msElem = s
        }
      }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
      var buildShapeString = function (e, t, r, n) {
          if (t === 0) return "";
          var i, a = e.o,
            s = e.i,
            o = e.v,
            l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
          for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
          return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
        },
        SVGElementsRenderer = function () {
          var e = new Matrix,
            t = new Matrix;

          function r(p, c, f) {
            (f || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (f || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS())
          }

          function n() {}

          function i(p, c, f) {
            var g, d, h, m, u, y, v, E, b, I, S = c.styles.length,
              _ = c.lvl;
            for (y = 0; y < S; y += 1) {
              if (m = c.sh._mdf || f, c.styles[y].lvl < _) {
                for (E = t.reset(), b = _ - c.styles[y].lvl, I = c.transformers.length - 1; !m && b > 0;) m = c.transformers[I].mProps._mdf || m, b -= 1, I -= 1;
                if (m)
                  for (b = _ - c.styles[y].lvl, I = c.transformers.length - 1; b > 0;) E.multiply(c.transformers[I].mProps.v), b -= 1, I -= 1
              } else E = e;
              if (d = (v = c.sh.paths)._length, m) {
                for (h = "", g = 0; g < d; g += 1)(u = v.shapes[g]) && u._length && (h += buildShapeString(u, u._length, u.c, E));
                c.caches[y] = h
              } else h = c.caches[y];
              c.styles[y].d += p.hd === !0 ? "" : h, c.styles[y]._mdf = m || c.styles[y]._mdf
            }
          }

          function a(p, c, f) {
            var g = c.style;
            (c.c._mdf || f) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || f) && g.pElem.setAttribute("fill-opacity", c.o.v)
          }

          function s(p, c, f) {
            o(p, c, f), l(p, c, f)
          }

          function o(p, c, f) {
            var g, d, h, m, u, y = c.gf,
              v = c.g._hasOpacity,
              E = c.s.v,
              b = c.e.v;
            if (c.o._mdf || f) {
              var I = p.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              c.style.pElem.setAttribute(I, c.o.v)
            }
            if (c.s._mdf || f) {
              var S = p.t === 1 ? "x1" : "cx",
                _ = S === "x1" ? "y1" : "cy";
              y.setAttribute(S, E[0]), y.setAttribute(_, E[1]), v && !c.g._collapsable && (c.of.setAttribute(S, E[0]), c.of.setAttribute(_, E[1]))
            }
            if (c.g._cmdf || f) {
              g = c.cst;
              var A = c.g.c;
              for (h = g.length, d = 0; d < h; d += 1)(m = g[d]).setAttribute("offset", A[4 * d] + "%"), m.setAttribute("stop-color", "rgb(" + A[4 * d + 1] + "," + A[4 * d + 2] + "," + A[4 * d + 3] + ")")
            }
            if (v && (c.g._omdf || f)) {
              var D = c.g.o;
              for (h = (g = c.g._collapsable ? c.cst : c.ost).length, d = 0; d < h; d += 1) m = g[d], c.g._collapsable || m.setAttribute("offset", D[2 * d] + "%"), m.setAttribute("stop-opacity", D[2 * d + 1])
            }
            if (p.t === 1)(c.e._mdf || f) && (y.setAttribute("x2", b[0]), y.setAttribute("y2", b[1]), v && !c.g._collapsable && (c.of.setAttribute("x2", b[0]), c.of.setAttribute("y2", b[1])));
            else if ((c.s._mdf || c.e._mdf || f) && (u = Math.sqrt(Math.pow(E[0] - b[0], 2) + Math.pow(E[1] - b[1], 2)), y.setAttribute("r", u), v && !c.g._collapsable && c.of.setAttribute("r", u)), c.e._mdf || c.h._mdf || c.a._mdf || f) {
              u || (u = Math.sqrt(Math.pow(E[0] - b[0], 2) + Math.pow(E[1] - b[1], 2)));
              var w = Math.atan2(b[1] - E[1], b[0] - E[0]),
                O = c.h.v;
              O >= 1 ? O = .99 : O <= -1 && (O = -.99);
              var V = u * O,
                M = Math.cos(w + c.a.v) * V + E[0],
                L = Math.sin(w + c.a.v) * V + E[1];
              y.setAttribute("fx", M), y.setAttribute("fy", L), v && !c.g._collapsable && (c.of.setAttribute("fx", M), c.of.setAttribute("fy", L))
            }
          }

          function l(p, c, f) {
            var g = c.style,
              d = c.d;
            d && (d._mdf || f) && d.dashStr && (g.pElem.setAttribute("stroke-dasharray", d.dashStr), g.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), c.c && (c.c._mdf || f) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || f) && g.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || f) && (g.pElem.setAttribute("stroke-width", c.w.v), g.msElem && g.msElem.setAttribute("stroke-width", c.w.v))
          }
          return {
            createRenderFunction: function (p) {
              switch (p.ty) {
                case "fl":
                  return a;
                case "gf":
                  return o;
                case "gs":
                  return s;
                case "st":
                  return l;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return i;
                case "tr":
                  return r;
                case "no":
                  return n;
                default:
                  return null
              }
            }
          }
        }();

      function SVGShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
      }

      function LetterProps(e, t, r, n, i, a) {
        this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
          o: !0,
          sw: !!t,
          sc: !!r,
          fc: !!n,
          m: !0,
          p: !0
        }
      }

      function TextProperty(e, t) {
        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: !1,
          strokeColorAnim: !1,
          strokeWidthAnim: !1,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: !1
        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {}, SVGShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
      }, SVGShapeElement.prototype.filterUniqueShapes = function () {
        var e, t, r, n, i = this.shapes.length,
          a = this.stylesList.length,
          s = [],
          o = !1;
        for (r = 0; r < a; r += 1) {
          for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1)(t = this.shapes[e]).styles.indexOf(n) !== -1 && (s.push(t), o = t._isAnimated || o);
          s.length > 1 && o && this.setShapesAsAnimated(s)
        }
      }, SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].setAsAnimated()
      }, SVGShapeElement.prototype.createStyleElement = function (e, t) {
        var r, n = new SVGStyleData(e, t),
          i = n.pElem;
        return e.ty === "st" ? r = new SVGStrokeStyleData(this, e, n) : e.ty === "fl" ? r = new SVGFillStyleData(this, e, n) : e.ty === "gf" || e.ty === "gs" ? (r = new(e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : e.ty === "no" && (r = new SVGNoStyleData(this, e, n)), e.ty !== "st" && e.ty !== "gs" || (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
      }, SVGShapeElement.prototype.createGroupElement = function (e) {
        var t = new ShapeGroupData;
        return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
      }, SVGShapeElement.prototype.createTransformElement = function (e, t) {
        var r = TransformPropertyFactory.getTransformProperty(this, e, this),
          n = new SVGTransformData(r, r.o, t);
        return this.addToAnimatedContents(e, n), n
      }, SVGShapeElement.prototype.createShapeElement = function (e, t, r) {
        var n = 4;
        e.ty === "rc" ? n = 5 : e.ty === "el" ? n = 6 : e.ty === "sr" && (n = 7);
        var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
        return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
      }, SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
        for (var r = 0, n = this.animatedContents.length; r < n;) {
          if (this.animatedContents[r].element === t) return;
          r += 1
        }
        this.animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(e),
          element: t,
          data: e
        })
      }, SVGShapeElement.prototype.setElementStyles = function (e) {
        var t, r = e.styles,
          n = this.stylesList.length;
        for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
      }, SVGShapeElement.prototype.reloadShapes = function () {
        var e;
        this._isFirstFrame = !0;
        var t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers()
      }, SVGShapeElement.prototype.searchShapes = function (e, t, r, n, i, a, s) {
        var o, l, p, c, f, g, d = [].concat(a),
          h = e.length - 1,
          m = [],
          u = [];
        for (o = h; o >= 0; o -= 1) {
          if ((g = this.searchProcessedElement(e[o])) ? t[o] = r[g - 1] : e[o]._render = s, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no") g ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && t[o].style.pElem.parentNode !== n && n.appendChild(t[o].style.pElem), m.push(t[o].style);
          else if (e[o].ty === "gr") {
            if (g)
              for (p = t[o].it.length, l = 0; l < p; l += 1) t[o].prevViewData[l] = t[o].it[l];
            else t[o] = this.createGroupElement(e[o]);
            this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, d, s), e[o]._render && t[o].gr.parentNode !== n && n.appendChild(t[o].gr)
          } else e[o].ty === "tr" ? (g || (t[o] = this.createTransformElement(e[o], n)), c = t[o].transform, d.push(c)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (g || (t[o] = this.createShapeElement(e[o], d, i)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (g ? (f = t[o]).closed = !1 : ((f = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = f, this.shapeModifiers.push(f)), u.push(f)) : e[o].ty === "rp" && (g ? (f = t[o]).closed = !0 : (f = ShapeModifiers.getModifier(e[o].ty), t[o] = f, f.init(this, e, o, t), this.shapeModifiers.push(f), s = !1), u.push(f));
          this.addProcessedElement(e[o], o + 1)
        }
        for (h = m.length, o = 0; o < h; o += 1) m[o].closed = !0;
        for (h = u.length, o = 0; o < h; o += 1) u[o].closed = !0
      }, SVGShapeElement.prototype.renderInnerContent = function () {
        var e;
        this.renderModifiers();
        var t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].reset();
        for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
      }, SVGShapeElement.prototype.renderShape = function () {
        var e, t, r = this.animatedContents.length;
        for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && t.data !== !0 && t.fn(t.data, t.element, this._isFirstFrame)
      }, SVGShapeElement.prototype.destroy = function () {
        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
      }, LetterProps.prototype.update = function (e, t, r, n, i, a) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
        var s = !1;
        return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
      }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (e, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e
      }, TextProperty.prototype.setCurrentData = function (e) {
        e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
      }, TextProperty.prototype.searchProperty = function () {
        return this.searchKeyframes()
      }, TextProperty.prototype.searchKeyframes = function () {
        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
      }, TextProperty.prototype.addEffect = function (e) {
        this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.getValue = function (e) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
          this.currentData.t = this.data.d.k[this.keysIndex].s.t;
          var t = this.currentData,
            r = this.keysIndex;
          if (this.lock) this.setCurrentData(this.currentData);
          else {
            var n;
            this.lock = !0, this._mdf = !1;
            var i = this.effectsSequence.length,
              a = e || this.data.d.k[this.keysIndex].s;
            for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
            t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
          }
        }
      }, TextProperty.prototype.getKeyframeValue = function () {
        for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);) r += 1;
        return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
      }, TextProperty.prototype.buildFinalText = function (e) {
        for (var t, r, n = [], i = 0, a = e.length, s = !1, o = !1, l = ""; i < a;) s = o, o = !1, t = e.charCodeAt(i), l = e.charAt(i), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, i) ? l = e.substr(i, 14) : (r = e.charCodeAt(i + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(i, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(i, 4)) ? e.substr(i, 4) : e.substr(i, 2)) : t > 56319 ? (r = e.charCodeAt(i + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (n[n.length - 1] += l, s = !1) : n.push(l), i += l.length;
        return n
      }, TextProperty.prototype.completeTextData = function (e) {
        e.__complete = !0;
        var t, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
          p = this.data,
          c = [],
          f = 0,
          g = p.m.g,
          d = 0,
          h = 0,
          m = 0,
          u = [],
          y = 0,
          v = 0,
          E = l.getFontByName(e.f),
          b = 0,
          I = getFontProperties(E);
        e.fWeight = I.weight, e.fStyle = I.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
        var S, _ = e.tr / 1e3 * e.finalSize;
        if (e.sz)
          for (var A, D, w = !0, O = e.sz[0], V = e.sz[1]; w;) {
            A = 0, y = 0, r = (D = this.buildFinalText(e.t)).length, _ = e.tr / 1e3 * e.finalSize;
            var M = -1;
            for (t = 0; t < r; t += 1) S = D[t].charCodeAt(0), n = !1, D[t] === " " ? M = t : S !== 13 && S !== 3 || (y = 0, n = !0, A += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(D[t], E.fStyle, E.fFamily), b = n ? 0 : o.w * e.finalSize / 100) : b = l.measureText(D[t], e.f, e.finalSize), y + b > O && D[t] !== " " ? (M === -1 ? r += 1 : t = M, A += e.finalLineHeight || 1.2 * e.finalSize, D.splice(t, M === t ? 1 : 0, "\r"), M = -1, y = 0) : (y += b, y += _);
            A += E.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && V < A ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = D, r = e.finalText.length, w = !1)
          }
        y = -_, b = 0;
        var L, G = 0;
        for (t = 0; t < r; t += 1)
          if (n = !1, (S = (L = e.finalText[t]).charCodeAt(0)) === 13 || S === 3 ? (G = 0, u.push(y), v = y > v ? y : v, y = -2 * _, i = "", n = !0, m += 1) : i = L, l.chars ? (o = l.getCharData(L, E.fStyle, l.getFontByName(e.f).fFamily), b = n ? 0 : o.w * e.finalSize / 100) : b = l.measureText(i, e.f, e.finalSize), L === " " ? G += b + _ : (y += b + _ + G, G = 0), c.push({
              l: b,
              an: b,
              add: d,
              n,
              anIndexes: [],
              val: i,
              line: m,
              animatorJustifyOffset: 0
            }), g == 2) {
            if (d += b, i === "" || i === " " || t === r - 1) {
              for (i !== "" && i !== " " || (d -= b); h <= t;) c[h].an = d, c[h].ind = f, c[h].extra = b, h += 1;
              f += 1, d = 0
            }
          } else if (g == 3) {
          if (d += b, i === "" || t === r - 1) {
            for (i === "" && (d -= b); h <= t;) c[h].an = d, c[h].ind = f, c[h].extra = b, h += 1;
            d = 0, f += 1
          }
        } else c[f].ind = f, c[f].extra = 0, f += 1;
        if (e.l = c, v = y > v ? y : v, u.push(y), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
        else switch (e.boxWidth = v, e.j) {
          case 1:
            e.justifyOffset = -e.boxWidth;
            break;
          case 2:
            e.justifyOffset = -e.boxWidth / 2;
            break;
          default:
            e.justifyOffset = 0
        }
        e.lineWidths = u;
        var z, re, x, B, Q = p.a;
        s = Q.length;
        var N = [];
        for (a = 0; a < s; a += 1) {
          for ((z = Q[a]).a.sc && (e.strokeColorAnim = !0), z.a.sw && (e.strokeWidthAnim = !0), (z.a.fc || z.a.fh || z.a.fs || z.a.fb) && (e.fillColorAnim = !0), B = 0, x = z.s.b, t = 0; t < r; t += 1)(re = c[t]).anIndexes[a] = B, (x == 1 && re.val !== "" || x == 2 && re.val !== "" && re.val !== " " || x == 3 && (re.n || re.val == " " || t == r - 1) || x == 4 && (re.n || t == r - 1)) && (z.s.rn === 1 && N.push(B), B += 1);
          p.a[a].s.totalChars = B;
          var k, P = -1;
          if (z.s.rn === 1)
            for (t = 0; t < r; t += 1) P != (re = c[t]).anIndexes[a] && (P = re.anIndexes[a], k = N.splice(Math.floor(Math.random() * N.length), 1)[0]), re.anIndexes[a] = k
        }
        e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = E.ascent * e.finalSize / 100
      }, TextProperty.prototype.updateDocumentData = function (e, t) {
        t = t === void 0 ? this.keysIndex : t;
        var r = this.copyData({}, this.data.d.k[t].s);
        r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.recalculate = function (e) {
        var t = this.data.d.k[e].s;
        t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
      }, TextProperty.prototype.canResizeFont = function (e) {
        this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      }, TextProperty.prototype.setMinimumFontSize = function (e) {
        this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
      };
      var TextSelectorProp = function () {
        var e = Math.max,
          t = Math.min,
          r = Math.floor;

        function n(i, a) {
          this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = i, this.comp = i.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(i), this.s = PropertyFactory.getProp(i, a.s || {
            k: 0
          }, 0, 0, this), this.e = "e" in a ? PropertyFactory.getProp(i, a.e, 0, 0, this) : {
            v: 100
          }, this.o = PropertyFactory.getProp(i, a.o || {
            k: 0
          }, 0, 0, this), this.xe = PropertyFactory.getProp(i, a.xe || {
            k: 0
          }, 0, 0, this), this.ne = PropertyFactory.getProp(i, a.ne || {
            k: 0
          }, 0, 0, this), this.sm = PropertyFactory.getProp(i, a.sm || {
            k: 100
          }, 0, 0, this), this.a = PropertyFactory.getProp(i, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
        }
        return n.prototype = {
          getMult: function (i) {
            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
            var a = 0,
              s = 0,
              o = 1,
              l = 1;
            this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : l = 1 + this.xe.v / 100;
            var p = BezierFactory.getBezierEasing(a, s, o, l).get,
              c = 0,
              f = this.finalS,
              g = this.finalE,
              d = this.data.sh;
            if (d === 2) c = p(c = g === f ? i >= g ? 1 : 0 : e(0, t(.5 / (g - f) + (i - f) / (g - f), 1)));
            else if (d === 3) c = p(c = g === f ? i >= g ? 0 : 1 : 1 - e(0, t(.5 / (g - f) + (i - f) / (g - f), 1)));
            else if (d === 4) g === f ? c = 0 : (c = e(0, t(.5 / (g - f) + (i - f) / (g - f), 1))) < .5 ? c *= 2 : c = 1 - 2 * (c - .5), c = p(c);
            else if (d === 5) {
              if (g === f) c = 0;
              else {
                var h = g - f,
                  m = -h / 2 + (i = t(e(0, i + .5 - f), g - f)),
                  u = h / 2;
                c = Math.sqrt(1 - m * m / (u * u))
              }
              c = p(c)
            } else d === 6 ? (g === f ? c = 0 : (i = t(e(0, i + .5 - f), g - f), c = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (g - f))) / 2), c = p(c)) : (i >= r(f) && (c = e(0, t(i - f < 0 ? t(g, 1) - (f - i) : g - i, 1))), c = p(c));
            if (this.sm.v !== 100) {
              var y = .01 * this.sm.v;
              y === 0 && (y = 1e-8);
              var v = .5 - .5 * y;
              c < v ? c = 0 : (c = (c - v) / y) > 1 && (c = 1)
            }
            return c * this.a.v
          },
          getValue: function (i) {
            this.iterateDynamicProperties(), this._mdf = i || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, i && this.data.r === 2 && (this.e.v = this._currentTextLength);
            var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              s = this.o.v / a,
              o = this.s.v / a + s,
              l = this.e.v / a + s;
            if (o > l) {
              var p = o;
              o = l, l = p
            }
            this.finalS = o, this.finalE = l
          }
        }, extendPrototype([DynamicPropertyContainer], n), {
          getTextSelectorProp: function (i, a, s) {
            return new n(i, a, s)
          }
        }
      }();

      function TextAnimatorDataProperty(e, t, r) {
        var n = {
            propType: !1
          },
          i = PropertyFactory.getProp,
          a = t.a;
        this.a = {
          r: a.r ? i(e, a.r, 0, degToRads, r) : n,
          rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
          ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
          sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
          sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
          s: a.s ? i(e, a.s, 1, .01, r) : n,
          a: a.a ? i(e, a.a, 1, 0, r) : n,
          o: a.o ? i(e, a.o, 0, .01, r) : n,
          p: a.p ? i(e, a.p, 1, 0, r) : n,
          sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
          sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
          fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
          fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
          fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
          fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
          t: a.t ? i(e, a.t, 0, 0, r) : n
        }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
      }

      function TextAnimatorProperty(e, t, r) {
        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
          alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
      }

      function ITextElement() {}
      TextAnimatorProperty.prototype.searchProperties = function () {
        var e, t, r = this._textData.a.length,
          n = PropertyFactory.getProp;
        for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
          a: n(this._elem, this._textData.p.a, 0, 0, this),
          f: n(this._elem, this._textData.p.f, 0, 0, this),
          l: n(this._elem, this._textData.p.l, 0, 0, this),
          r: n(this._elem, this._textData.p.r, 0, 0, this),
          p: n(this._elem, this._textData.p.p, 0, 0, this),
          m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
      }, TextAnimatorProperty.prototype.getMeasures = function (e, t) {
        if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
          this._isFirstFrame = !1;
          var r, n, i, a, s, o, l, p, c, f, g, d, h, m, u, y, v, E, b, I = this._moreOptions.alignment.v,
            S = this._animatorsData,
            _ = this._textData,
            A = this.mHelper,
            D = this._renderType,
            w = this.renderedLetters.length,
            O = e.l;
          if (this._hasMaskedPath) {
            if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
              var V, M = b.v;
              for (this._pathData.r.v && (M = M.reverse()), s = {
                  tLength: 0,
                  segments: []
                }, a = M._length - 1, y = 0, i = 0; i < a; i += 1) V = bez.buildBezierData(M.v[i], M.v[i + 1], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[i + 1][0] - M.v[i + 1][0], M.i[i + 1][1] - M.v[i + 1][1]]), s.tLength += V.segmentLength, s.segments.push(V), y += V.segmentLength;
              i = a, b.v.c && (V = bez.buildBezierData(M.v[i], M.v[0], [M.o[i][0] - M.v[i][0], M.o[i][1] - M.v[i][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), s.tLength += V.segmentLength, s.segments.push(V), y += V.segmentLength), this._pathData.pi = s
            }
            if (s = this._pathData.pi, o = this._pathData.f.v, g = 0, f = 1, p = 0, c = !0, m = s.segments, o < 0 && b.v.c)
              for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), f = (h = m[g = m.length - 1].points).length - 1; o < 0;) o += h[f].partialLength, (f -= 1) < 0 && (f = (h = m[g -= 1].points).length - 1);
            d = (h = m[g].points)[f - 1], u = (l = h[f]).partialLength
          }
          a = O.length, r = 0, n = 0;
          var L, G, z, re, x, B = 1.2 * e.finalSize * .714,
            Q = !0;
          z = S.length;
          var N, k, P, F, H, j, J, Z, ie, ee, R, $, ne = -1,
            X = o,
            fe = g,
            ye = f,
            be = -1,
            C = "",
            q = this.defaultPropsArray;
          if (e.j === 2 || e.j === 1) {
            var U = 0,
              W = 0,
              K = e.j === 2 ? -.5 : -1,
              Y = 0,
              ae = !0;
            for (i = 0; i < a; i += 1)
              if (O[i].n) {
                for (U && (U += W); Y < i;) O[Y].animatorJustifyOffset = U, Y += 1;
                U = 0, ae = !0
              } else {
                for (G = 0; G < z; G += 1)(L = S[G].a).t.propType && (ae && e.j === 2 && (W += L.t.v * K), (x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars)).length ? U += L.t.v * x[0] * K : U += L.t.v * x * K);
                ae = !1
              } for (U && (U += W); Y < i;) O[Y].animatorJustifyOffset = U, Y += 1
          }
          for (i = 0; i < a; i += 1) {
            if (A.reset(), F = 1, O[i].n) r = 0, n += e.yOffset, n += Q ? 1 : 0, o = X, Q = !1, this._hasMaskedPath && (f = ye, d = (h = m[g = fe].points)[f - 1], u = (l = h[f]).partialLength, p = 0), C = "", R = "", ie = "", $ = "", q = this.defaultPropsArray;
            else {
              if (this._hasMaskedPath) {
                if (be !== O[i].line) {
                  switch (e.j) {
                    case 1:
                      o += y - e.lineWidths[O[i].line];
                      break;
                    case 2:
                      o += (y - e.lineWidths[O[i].line]) / 2
                  }
                  be = O[i].line
                }
                ne !== O[i].ind && (O[ne] && (o += O[ne].extra), o += O[i].an / 2, ne = O[i].ind), o += I[0] * O[i].an * .005;
                var oe = 0;
                for (G = 0; G < z; G += 1)(L = S[G].a).p.propType && ((x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars)).length ? oe += L.p.v[0] * x[0] : oe += L.p.v[0] * x), L.a.propType && ((x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars)).length ? oe += L.a.v[0] * x[0] : oe += L.a.v[0] * x);
                for (c = !0, this._pathData.a.v && (o = .5 * O[0].an + (y - this._pathData.f.v - .5 * O[0].an - .5 * O[O.length - 1].an) * ne / (a - 1), o += this._pathData.f.v); c;) p + u >= o + oe || !h ? (v = (o + oe - p) / l.partialLength, k = d.point[0] + (l.point[0] - d.point[0]) * v, P = d.point[1] + (l.point[1] - d.point[1]) * v, A.translate(-I[0] * O[i].an * .005, -I[1] * B * .01), c = !1) : h && (p += l.partialLength, (f += 1) >= h.length && (f = 0, m[g += 1] ? h = m[g].points : b.v.c ? (f = 0, h = m[g = 0].points) : (p -= l.partialLength, h = null)), h && (d = l, u = (l = h[f]).partialLength));
                N = O[i].an / 2 - O[i].add, A.translate(-N, 0, 0)
              } else N = O[i].an / 2 - O[i].add, A.translate(-N, 0, 0), A.translate(-I[0] * O[i].an * .005, -I[1] * B * .01, 0);
              for (G = 0; G < z; G += 1)(L = S[G].a).t.propType && (x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars), r === 0 && e.j === 0 || (this._hasMaskedPath ? x.length ? o += L.t.v * x[0] : o += L.t.v * x : x.length ? r += L.t.v * x[0] : r += L.t.v * x));
              for (e.strokeWidthAnim && (j = e.sw || 0), e.strokeColorAnim && (H = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (J = [e.fc[0], e.fc[1], e.fc[2]]), G = 0; G < z; G += 1)(L = S[G].a).a.propType && ((x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars)).length ? A.translate(-L.a.v[0] * x[0], -L.a.v[1] * x[1], L.a.v[2] * x[2]) : A.translate(-L.a.v[0] * x, -L.a.v[1] * x, L.a.v[2] * x));
              for (G = 0; G < z; G += 1)(L = S[G].a).s.propType && ((x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars)).length ? A.scale(1 + (L.s.v[0] - 1) * x[0], 1 + (L.s.v[1] - 1) * x[1], 1) : A.scale(1 + (L.s.v[0] - 1) * x, 1 + (L.s.v[1] - 1) * x, 1));
              for (G = 0; G < z; G += 1) {
                if (L = S[G].a, x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars), L.sk.propType && (x.length ? A.skewFromAxis(-L.sk.v * x[0], L.sa.v * x[1]) : A.skewFromAxis(-L.sk.v * x, L.sa.v * x)), L.r.propType && (x.length ? A.rotateZ(-L.r.v * x[2]) : A.rotateZ(-L.r.v * x)), L.ry.propType && (x.length ? A.rotateY(L.ry.v * x[1]) : A.rotateY(L.ry.v * x)), L.rx.propType && (x.length ? A.rotateX(L.rx.v * x[0]) : A.rotateX(L.rx.v * x)), L.o.propType && (x.length ? F += (L.o.v * x[0] - F) * x[0] : F += (L.o.v * x - F) * x), e.strokeWidthAnim && L.sw.propType && (x.length ? j += L.sw.v * x[0] : j += L.sw.v * x), e.strokeColorAnim && L.sc.propType)
                  for (Z = 0; Z < 3; Z += 1) x.length ? H[Z] += (L.sc.v[Z] - H[Z]) * x[0] : H[Z] += (L.sc.v[Z] - H[Z]) * x;
                if (e.fillColorAnim && e.fc) {
                  if (L.fc.propType)
                    for (Z = 0; Z < 3; Z += 1) x.length ? J[Z] += (L.fc.v[Z] - J[Z]) * x[0] : J[Z] += (L.fc.v[Z] - J[Z]) * x;
                  L.fh.propType && (J = x.length ? addHueToRGB(J, L.fh.v * x[0]) : addHueToRGB(J, L.fh.v * x)), L.fs.propType && (J = x.length ? addSaturationToRGB(J, L.fs.v * x[0]) : addSaturationToRGB(J, L.fs.v * x)), L.fb.propType && (J = x.length ? addBrightnessToRGB(J, L.fb.v * x[0]) : addBrightnessToRGB(J, L.fb.v * x))
                }
              }
              for (G = 0; G < z; G += 1)(L = S[G].a).p.propType && (x = S[G].s.getMult(O[i].anIndexes[G], _.a[G].s.totalChars), this._hasMaskedPath ? x.length ? A.translate(0, L.p.v[1] * x[0], -L.p.v[2] * x[1]) : A.translate(0, L.p.v[1] * x, -L.p.v[2] * x) : x.length ? A.translate(L.p.v[0] * x[0], L.p.v[1] * x[1], -L.p.v[2] * x[2]) : A.translate(L.p.v[0] * x, L.p.v[1] * x, -L.p.v[2] * x));
              if (e.strokeWidthAnim && (ie = j < 0 ? 0 : j), e.strokeColorAnim && (ee = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), e.fillColorAnim && e.fc && (R = "rgb(" + Math.round(255 * J[0]) + "," + Math.round(255 * J[1]) + "," + Math.round(255 * J[2]) + ")"), this._hasMaskedPath) {
                if (A.translate(0, -e.ls), A.translate(0, I[1] * B * .01 + n, 0), this._pathData.p.v) {
                  E = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                  var se = 180 * Math.atan(E) / Math.PI;
                  l.point[0] < d.point[0] && (se += 180), A.rotate(-se * Math.PI / 180)
                }
                A.translate(k, P, 0), o -= I[0] * O[i].an * .005, O[i + 1] && ne !== O[i + 1].ind && (o += O[i].an / 2, o += .001 * e.tr * e.finalSize)
              } else {
                switch (A.translate(r, n, 0), e.ps && A.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                  case 1:
                    A.translate(O[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[O[i].line]), 0, 0);
                    break;
                  case 2:
                    A.translate(O[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[O[i].line]) / 2, 0, 0)
                }
                A.translate(0, -e.ls), A.translate(N, 0, 0), A.translate(I[0] * O[i].an * .005, I[1] * B * .01, 0), r += O[i].l + .001 * e.tr * e.finalSize
              }
              D === "html" ? C = A.toCSS() : D === "svg" ? C = A.to2dCSS() : q = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]], $ = F
            }
            w <= i ? (re = new LetterProps($, ie, ee, R, C, q), this.renderedLetters.push(re), w += 1, this.lettersChangedFlag = !0) : (re = this.renderedLetters[i], this.lettersChangedFlag = re.update($, ie, ee, R, C, q) || this.lettersChangedFlag)
          }
        }
      }, TextAnimatorProperty.prototype.getValue = function () {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
      }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function (e, t, r) {
        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
      }, ITextElement.prototype.prepareFrame = function (e) {
        this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
      }, ITextElement.prototype.createPathShape = function (e, t) {
        var r, n, i = t.length,
          a = "";
        for (r = 0; r < i; r += 1) t[r].ty === "sh" && (n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e));
        return a
      }, ITextElement.prototype.updateDocumentData = function (e, t) {
        this.textProperty.updateDocumentData(e, t)
      }, ITextElement.prototype.canResizeFont = function (e) {
        this.textProperty.canResizeFont(e)
      }, ITextElement.prototype.setMinimumFontSize = function (e) {
        this.textProperty.setMinimumFontSize(e)
      }, ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, r, n, i) {
        switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
          case 1:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
            break;
          case 2:
            t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
        }
        t.translate(n, i, 0)
      }, ITextElement.prototype.buildColor = function (e) {
        return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
      }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {}, ITextElement.prototype.validateText = function () {
        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
      };
      var emptyShapeData = {
        shapes: []
      };

      function SVGTextLottieElement(e, t, r) {
        this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
      }

      function ISolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function NullElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
      }

      function SVGRendererBase() {}

      function ICompElement() {}

      function SVGCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function SVGRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
        var r = "";
        if (t && t.title) {
          var n = createNS("title"),
            i = createElementID();
          n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
        }
        if (t && t.description) {
          var a = createNS("desc"),
            s = createElementID();
          a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var o = createNS("defs");
        this.svgElement.appendChild(o);
        var l = createNS("g");
        this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          progressiveLoad: t && t.progressiveLoad || !1,
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          viewBoxOnly: t && t.viewBoxOnly || !1,
          viewBoxSize: t && t.viewBoxSize || !1,
          className: t && t.className || "",
          id: t && t.id || "",
          focusable: t && t.focusable,
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "100%",
            height: t && t.filterSize && t.filterSize.height || "100%",
            x: t && t.filterSize && t.filterSize.x || "0%",
            y: t && t.filterSize && t.filterSize.y || "0%"
          },
          width: t && t.width,
          height: t && t.height,
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          defs: o,
          renderConfig: this.renderConfig
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
      }

      function ShapeTransformManager() {
        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function () {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
      }, SVGTextLottieElement.prototype.buildTextContents = function (e) {
        for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
        return n.push(i), n
      }, SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
        if (e.shapes && e.shapes.length) {
          var r = e.shapes[0];
          if (r.it) {
            var n = r.it[r.it.length - 1];
            n.s && (n.s.k[0] = t, n.s.k[1] = t)
          }
        }
        return e
      }, SVGTextLottieElement.prototype.buildNewText = function () {
        var e, t;
        this.addDynamicProperty(this);
        var r = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
        var n = this.globalData.fontManager.getFontByName(r.f);
        if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
        else {
          this.layerElement.setAttribute("font-family", n.fFamily);
          var i = r.fWeight,
            a = r.fStyle;
          this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
        }
        this.layerElement.setAttribute("aria-label", r.t);
        var s, o = r.l || [],
          l = !!this.globalData.fontManager.chars;
        t = o.length;
        var p = this.mHelper,
          c = this.data.singleShape,
          f = 0,
          g = 0,
          d = !0,
          h = .001 * r.tr * r.finalSize;
        if (!c || l || r.sz) {
          var m, u = this.textSpans.length;
          for (e = 0; e < t; e += 1) {
            if (this.textSpans[e] || (this.textSpans[e] = {
                span: null,
                childSpan: null,
                glyph: null
              }), !l || !c || e === 0) {
              if (s = u > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), u <= e) {
                if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
                  var y = createNS("g");
                  s.appendChild(y), this.textSpans[e].childSpan = y
                }
                this.textSpans[e].span = s, this.layerElement.appendChild(s)
              }
              s.style.display = "inherit"
            }
            if (p.reset(), c && (o[e].n && (f = -h, g += r.yOffset, g += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, p, o[e].line, f, g), f += o[e].l || 0, f += h), l) {
              var v;
              if ((m = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) v = new SVGCompElement(m.data, this.globalData, this);
              else {
                var E = emptyShapeData;
                m.data && m.data.shapes && (E = this.buildShapeData(m.data, r.finalSize)), v = new SVGShapeElement(E, this.globalData, this)
              }
              if (this.textSpans[e].glyph) {
                var b = this.textSpans[e].glyph;
                this.textSpans[e].childSpan.removeChild(b.layerElement), b.destroy()
              }
              this.textSpans[e].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[e].childSpan.appendChild(v.layerElement), m.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
            } else c && s.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
          }
          c && s && s.setAttribute("d", "")
        } else {
          var I = this.textContainer,
            S = "start";
          switch (r.j) {
            case 1:
              S = "end";
              break;
            case 2:
              S = "middle";
              break;
            default:
              S = "start"
          }
          I.setAttribute("text-anchor", S), I.setAttribute("letter-spacing", h);
          var _ = this.buildTextContents(r.finalText);
          for (t = _.length, g = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = _[e], s.setAttribute("x", 0), s.setAttribute("y", g), s.style.display = "inherit", I.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            glyph: null
          }), this.textSpans[e].span = s, g += r.finalLineHeight;
          this.layerElement.appendChild(I)
        }
        for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
        this._sizeChanged = !0
      }, SVGTextLottieElement.prototype.sourceRectAtTime = function () {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
          this._sizeChanged = !1;
          var e = this.layerElement.getBBox();
          this.bbox = {
            top: e.y,
            left: e.x,
            width: e.width,
            height: e.height
          }
        }
        return this.bbox
      }, SVGTextLottieElement.prototype.getValue = function () {
        var e, t, r = this.textSpans.length;
        for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
      }, SVGTextLottieElement.prototype.renderInnerContent = function () {
        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
          var e, t;
          this._sizeChanged = !0;
          var r, n, i, a = this.textAnimator.renderedLetters,
            s = this.textProperty.currentData.l;
          for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], n = this.textSpans[e].span, (i = this.textSpans[e].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
        }
      }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
        var e = createNS("rect");
        e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
      }, NullElement.prototype.prepareFrame = function (e) {
        this.prepareProperties(e, !0)
      }, NullElement.prototype.renderFrame = function () {}, NullElement.prototype.getBaseElement = function () {
        return null
      }, NullElement.prototype.destroy = function () {}, NullElement.prototype.sourceRectAtTime = function () {}, NullElement.prototype.hide = function () {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function (e) {
        return new NullElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createShape = function (e) {
        return new SVGShapeElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createText = function (e) {
        return new SVGTextLottieElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createImage = function (e) {
        return new IImageElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.createSolid = function (e) {
        return new ISolidElement(e, this.globalData, this)
      }, SVGRendererBase.prototype.configAnimation = function (e) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
        var t = this.globalData.defs;
        this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
        var r = createNS("clipPath"),
          n = createNS("rect");
        n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
        var i = createElementID();
        r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
      }, SVGRendererBase.prototype.destroy = function () {
        var e;
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
        var t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, SVGRendererBase.prototype.updateContainerSize = function () {}, SVGRendererBase.prototype.findIndexByInd = function (e) {
        var t = 0,
          r = this.layers.length;
        for (t = 0; t < r; t += 1)
          if (this.layers[t].ind === e) return t;
        return -1
      }, SVGRendererBase.prototype.buildItem = function (e) {
        var t = this.elements;
        if (!t[e] && this.layers[e].ty !== 99) {
          t[e] = !0;
          var r = this.createItem(this.layers[e]);
          if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
            var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
            if (n === -1) return;
            if (this.elements[n] && this.elements[n] !== !0) {
              var i = t[n].getMatte(this.layers[e].tt);
              r.setMatte(i)
            } else this.buildItem(n), this.addPendingElement(r)
          }
        }
      }, SVGRendererBase.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) {
          var e = this.pendingElements.pop();
          if (e.checkParenting(), e.data.tt)
            for (var t = 0, r = this.elements.length; t < r;) {
              if (this.elements[t] === e) {
                var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                  i = this.elements[n].getMatte(this.layers[t].tt);
                e.setMatte(i);
                break
              }
              t += 1
            }
        }
      }, SVGRendererBase.prototype.renderFrame = function (e) {
        if (this.renderedFrame !== e && !this.destroyed) {
          var t;
          e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
          var r = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
          if (this.globalData._mdf)
            for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }
      }, SVGRendererBase.prototype.appendElementInPos = function (e, t) {
        var r = e.getBaseElement();
        if (r) {
          for (var n, i = 0; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
          n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
        }
      }, SVGRendererBase.prototype.hide = function () {
        this.layerElement.style.display = "none"
      }, SVGRendererBase.prototype.show = function () {
        this.layerElement.style.display = "block"
      }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
      }, ICompElement.prototype.prepareFrame = function (e) {
        if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
          if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
          else {
            var t = this.tm.v;
            t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
          }
          var r, n = this.elements.length;
          for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
        }
      }, ICompElement.prototype.renderInnerContent = function () {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }, ICompElement.prototype.setElements = function (e) {
        this.elements = e
      }, ICompElement.prototype.getElements = function () {
        return this.elements
      }, ICompElement.prototype.destroyElements = function () {
        var e, t = this.layers.length;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
      }, ICompElement.prototype.destroy = function () {
        this.destroyElements(), this.destroyBaseElement()
      }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function (e) {
        return new SVGCompElement(e, this.globalData, this)
      }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function (e) {
        return new SVGCompElement(e, this.globalData, this)
      }, ShapeTransformManager.prototype = {
        addTransformSequence: function (e) {
          var t, r = e.length,
            n = "_";
          for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
          var i = this.sequences[n];
          return i || (i = {
            transforms: [].concat(e),
            finalTransform: new Matrix,
            _mdf: !1
          }, this.sequences[n] = i, this.sequenceList.push(i)), i
        },
        processSequence: function (e, t) {
          for (var r = 0, n = e.transforms.length, i = t; r < n && !t;) {
            if (e.transforms[r].transform.mProps._mdf) {
              i = !0;
              break
            }
            r += 1
          }
          if (i)
            for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
          e._mdf = i
        },
        processSequences: function (e) {
          var t, r = this.sequenceList.length;
          for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
        },
        getNewKey: function () {
          return this.transform_key_count += 1, "_" + this.transform_key_count
        }
      };
      var lumaLoader = function () {
        var e = "__lottie_element_luma_buffer",
          t = null,
          r = null,
          n = null;

        function i() {
          var a, s, o;
          t || (a = createNS("svg"), s = createNS("filter"), o = createNS("feColorMatrix"), s.setAttribute("id", e), o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(o), a.appendChild(s), a.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), n = a, document.body.appendChild(n), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
        }
        return {
          load: i,
          get: function (a) {
            return t || i(), t.width = a.width, t.height = a.height, r.filter = "url(#" + e + ")", t
          }
        }
      };

      function createCanvas(e, t) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
        var r = createTag("canvas");
        return r.width = e, r.height = t, r
      }
      var assetLoader = {
          loadLumaCanvas: lumaLoader.load,
          getLumaCanvas: lumaLoader.get,
          createCanvas
        },
        registeredEffects = {};

      function CVEffects(e) {
        var t, r, n = e.data.ef ? e.data.ef.length : 0;
        for (this.filters = [], t = 0; t < n; t += 1) {
          r = null;
          var i = e.data.ef[t].ty;
          registeredEffects[i] && (r = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
        }
        this.filters.length && e.addRenderableComponent(this)
      }

      function registerEffect(e, t) {
        registeredEffects[e] = {
          effect: t
        }
      }

      function CVMaskElement(e, t) {
        var r;
        this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
        var n = this.masksProperties.length,
          i = !1;
        for (r = 0; r < n; r += 1) this.masksProperties[r].mode !== "n" && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
        this.hasMasks = i, i && this.element.addRenderableComponent(this)
      }

      function CVBaseElement() {}
      CVEffects.prototype.renderFrame = function (e) {
        var t, r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
      }, CVEffects.prototype.getEffects = function (e) {
        var t, r = this.filters.length,
          n = [];
        for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
        return n
      }, CVMaskElement.prototype.renderFrame = function () {
        if (this.hasMasks) {
          var e, t, r, n, i = this.element.finalTransform.mat,
            a = this.element.canvasContext,
            s = this.masksProperties.length;
          for (a.beginPath(), e = 0; e < s; e += 1)
            if (this.masksProperties[e].mode !== "n") {
              var o;
              this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
              var l = n._length;
              for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
              r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
            } this.element.globalData.renderer.save(!0), a.clip()
        }
      }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
        this.element = null
      };
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out"
      };

      function CVShapeData(e, t, r, n) {
        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
        var i, a = 4;
        t.ty === "rc" ? a = 5 : t.ty === "el" ? a = 6 : t.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
        var s, o = r.length;
        for (i = 0; i < o; i += 1) r[i].closed || (s = {
          transforms: n.addTransformSequence(r[i].transforms),
          trNodes: []
        }, this.styledShapes.push(s), r[i].elements.push(s))
      }

      function CVShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
      }

      function CVTextElement(e, t, r) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: ""
        }, this.initElement(e, t, r)
      }

      function CVImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
      }

      function CVSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function CanvasRendererBase() {}

      function CanvasContext() {
        this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
      }

      function CVContextData() {
        var e;
        for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
          var t = new CanvasContext;
          this.stack[e] = t
        }
        this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
      }

      function CVCompElement(e, t, r) {
        this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function CanvasRenderer(e, t) {
        this.animationItem = e, this.renderConfig = {
          clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
          context: t && t.context || null,
          progressiveLoad: t && t.progressiveLoad || !1,
          preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: t && t.contentVisibility || "visible",
          className: t && t.className || "",
          id: t && t.id || "",
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
          frameNum: -1,
          _mdf: !1,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
      }

      function HBaseElement() {}

      function HSolidElement(e, t, r) {
        this.initElement(e, t, r)
      }

      function HShapeElement(e, t, r) {
        this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }
      }

      function HTextElement(e, t, r) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
      }

      function HCameraElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
        var n = PropertyFactory.getProp;
        if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
          var i, a = e.ks.or.k.length;
          for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
        }
        this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
          mProp: this
        }
      }

      function HImageElement(e, t, r) {
        this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
      }

      function HybridRendererBase(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          }
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }

      function HCompElement(e, t, r) {
        this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
          _placeholder: !0
        }
      }

      function HybridRenderer(e, t) {
        this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
          className: t && t.className || "",
          imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(t && t.hideOnTransparent === !1),
          filterSize: {
            width: t && t.filterSize && t.filterSize.width || "400%",
            height: t && t.filterSize && t.filterSize.height || "400%",
            x: t && t.filterSize && t.filterSize.x || "-100%",
            y: t && t.filterSize && t.filterSize.y || "-100%"
          },
          runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
        }, this.globalData = {
          _mdf: !1,
          frameNum: -1,
          renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
      }
      CVBaseElement.prototype = {
        createElements: function () {},
        initRendererElement: function () {},
        createContainerElements: function () {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var e = this.globalData.canvasContext,
              t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(t);
            var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
            this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
          }
          this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
        },
        createContent: function () {},
        setBlendMode: function () {
          var e = this.globalData;
          if (e.blendMode !== this.data.bm) {
            e.blendMode = this.data.bm;
            var t = getBlendMode(this.data.bm);
            e.canvasContext.globalCompositeOperation = t
          }
        },
        createRenderableComponents: function () {
          this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
        },
        hideElement: function () {
          this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
        },
        showElement: function () {
          this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
        },
        clearCanvas: function (e) {
          e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
        },
        prepareLayer: function () {
          if (this.data.tt >= 1) {
            var e = this.buffers[0].getContext("2d");
            this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
          }
        },
        exitLayer: function () {
          if (this.data.tt >= 1) {
            var e = this.buffers[1],
              t = e.getContext("2d");
            if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
              var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
              r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
            }
            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
          }
        },
        renderFrame: function (e) {
          if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
            this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
            var t = this.data.ty === 0;
            this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
          }
        },
        destroy: function () {
          this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
        },
        mHelper: new Matrix
      }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
      }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
      }, CVShapeElement.prototype.createStyleElement = function (e, t) {
        var r = {
            data: e,
            type: e.ty,
            preTransforms: this.transformsManager.addTransformSequence(t),
            transforms: [],
            elements: [],
            closed: e.hd === !0
          },
          n = {};
        if (e.ty === "fl" || e.ty === "st" ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : e.ty !== "gf" && e.ty !== "gs" || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {
            k: 0
          }, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {
            k: 0
          }, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
          if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
            var i = new DashProperty(this, e.d, "canvas", this);
            n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
          }
        } else r.r = e.r === 2 ? "evenodd" : "nonzero";
        return this.stylesList.push(r), n.style = r, n
      }, CVShapeElement.prototype.createGroupElement = function () {
        return {
          it: [],
          prevViewData: []
        }
      }, CVShapeElement.prototype.createTransformElement = function (e) {
        return {
          transform: {
            opacity: 1,
            _opMdf: !1,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this, e.o, 0, .01, this),
            mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
          }
        }
      }, CVShapeElement.prototype.createShapeElement = function (e) {
        var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
        return this.shapes.push(t), this.addShapeToModifiers(t), t
      }, CVShapeElement.prototype.reloadShapes = function () {
        var e;
        this._isFirstFrame = !0;
        var t = this.itemsData.length;
        for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
      }, CVShapeElement.prototype.addTransformToStyleList = function (e) {
        var t, r = this.stylesList.length;
        for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
      }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
        var e, t = this.stylesList.length;
        for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
      }, CVShapeElement.prototype.closeStyles = function (e) {
        var t, r = e.length;
        for (t = 0; t < r; t += 1) e[t].closed = !0
      }, CVShapeElement.prototype.searchShapes = function (e, t, r, n, i) {
        var a, s, o, l, p, c, f = e.length - 1,
          g = [],
          d = [],
          h = [].concat(i);
        for (a = f; a >= 0; a -= 1) {
          if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], h), g.push(t[a].style);
          else if (e[a].ty === "gr") {
            if (l)
              for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
            else t[a] = this.createGroupElement(e[a]);
            this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, h)
          } else e[a].ty === "tr" ? (l || (c = this.createTransformElement(e[a]), t[a] = c), h.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? l || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (l ? (p = t[a]).closed = !1 : ((p = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = p, this.shapeModifiers.push(p)), d.push(p)) : e[a].ty === "rp" && (l ? (p = t[a]).closed = !0 : (p = ShapeModifiers.getModifier(e[a].ty), t[a] = p, p.init(this, e, a, t), this.shapeModifiers.push(p), n = !1), d.push(p));
          this.addProcessedElement(e[a], a + 1)
        }
        for (this.removeTransformFromStyleList(), this.closeStyles(g), f = d.length, a = 0; a < f; a += 1) d[a].closed = !0
      }, CVShapeElement.prototype.renderInnerContent = function () {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
      }, CVShapeElement.prototype.renderShapeTransform = function (e, t) {
        (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
      }, CVShapeElement.prototype.drawLayer = function () {
        var e, t, r, n, i, a, s, o, l, p = this.stylesList.length,
          c = this.globalData.renderer,
          f = this.globalData.canvasContext;
        for (e = 0; e < p; e += 1)
          if (((o = (l = this.stylesList[e]).type) !== "st" && o !== "gs" || l.wi !== 0) && l.data._shouldRender && l.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
            for (c.save(), a = l.elements, o === "st" || o === "gs" ? (c.ctxStrokeStyle(o === "st" ? l.co : l.grd), c.ctxLineWidth(l.wi), c.ctxLineCap(l.lc), c.ctxLineJoin(l.lj), c.ctxMiterLimit(l.ml || 0)) : c.ctxFillStyle(o === "fl" ? l.co : l.grd), c.ctxOpacity(l.coOp), o !== "st" && o !== "gs" && f.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
              for (o !== "st" && o !== "gs" || (f.beginPath(), l.da && (f.setLineDash(l.da), f.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, n = 0; n < i; n += 1) s[n].t === "m" ? f.moveTo(s[n].p[0], s[n].p[1]) : s[n].t === "c" ? f.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : f.closePath();
              o !== "st" && o !== "gs" || (c.ctxStroke(), l.da && f.setLineDash(this.dashResetter))
            }
            o !== "st" && o !== "gs" && this.globalData.renderer.ctxFill(l.r), c.restore()
          }
      }, CVShapeElement.prototype.renderShape = function (e, t, r, n) {
        var i, a;
        for (a = e, i = t.length - 1; i >= 0; i -= 1) t[i].ty === "tr" ? (a = r[i].transform, this.renderShapeTransform(e, a)) : t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr" ? this.renderPath(t[i], r[i]) : t[i].ty === "fl" ? this.renderFill(t[i], r[i], a) : t[i].ty === "st" ? this.renderStroke(t[i], r[i], a) : t[i].ty === "gf" || t[i].ty === "gs" ? this.renderGradientFill(t[i], r[i], a) : t[i].ty === "gr" ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
        n && this.drawLayer()
      }, CVShapeElement.prototype.renderStyledShape = function (e, t) {
        if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
          var r, n, i, a = e.trNodes,
            s = t.paths,
            o = s._length;
          a.length = 0;
          var l = e.transforms.finalTransform;
          for (i = 0; i < o; i += 1) {
            var p = s.shapes[i];
            if (p && p.v) {
              for (n = p._length, r = 1; r < n; r += 1) r === 1 && a.push({
                t: "m",
                p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0)
              }), a.push({
                t: "c",
                pts: l.applyToTriplePoints(p.o[r - 1], p.i[r], p.v[r])
              });
              n === 1 && a.push({
                t: "m",
                p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0)
              }), p.c && n && (a.push({
                t: "c",
                pts: l.applyToTriplePoints(p.o[r - 1], p.i[0], p.v[0])
              }), a.push({
                t: "z"
              }))
            }
          }
          e.trNodes = a
        }
      }, CVShapeElement.prototype.renderPath = function (e, t) {
        if (e.hd !== !0 && e._shouldRender) {
          var r, n = t.styledShapes.length;
          for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
        }
      }, CVShapeElement.prototype.renderFill = function (e, t, r) {
        var n = t.style;
        (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
      }, CVShapeElement.prototype.renderGradientFill = function (e, t, r) {
        var n, i = t.style;
        if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
          var a, s = this.globalData.canvasContext,
            o = t.s.v,
            l = t.e.v;
          if (e.t === 1) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
          else {
            var p = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
              c = Math.atan2(l[1] - o[1], l[0] - o[0]),
              f = t.h.v;
            f >= 1 ? f = .99 : f <= -1 && (f = -.99);
            var g = p * f,
              d = Math.cos(c + t.a.v) * g + o[0],
              h = Math.sin(c + t.a.v) * g + o[1];
            n = s.createRadialGradient(d, h, 0, o[0], o[1], p)
          }
          var m = e.g.p,
            u = t.g.c,
            y = 1;
          for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (y = t.g.o[2 * a + 1]), n.addColorStop(u[4 * a] / 100, "rgba(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + "," + y + ")");
          i.grd = n
        }
        i.coOp = t.o.v * r.opacity
      }, CVShapeElement.prototype.renderStroke = function (e, t, r) {
        var n = t.style,
          i = t.d;
        i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
      }, CVShapeElement.prototype.destroy = function () {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = !1;
        e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
        var r = !1;
        e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
        var n, i, a, s, o, l, p, c, f, g, d, h, m = this.globalData.fontManager.getFontByName(e.f),
          u = e.l,
          y = this.mHelper;
        this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
        var v = this.data.singleShape,
          E = .001 * e.tr * e.finalSize,
          b = 0,
          I = 0,
          S = !0,
          _ = 0;
        for (n = 0; n < i; n += 1) {
          s = (a = this.globalData.fontManager.getCharData(e.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, y.reset(), v && u[n].n && (b = -E, I += e.yOffset, I += S ? 1 : 0, S = !1), f = (p = s.shapes ? s.shapes[0].it : []).length, y.scale(e.finalSize / 100, e.finalSize / 100), v && this.applyTextPropertiesToMatrix(e, y, u[n].line, b, I), d = createSizedArray(f - 1);
          var A = 0;
          for (c = 0; c < f; c += 1)
            if (p[c].ty === "sh") {
              for (l = p[c].ks.k.i.length, g = p[c].ks.k, h = [], o = 1; o < l; o += 1) o === 1 && h.push(y.applyToX(g.v[0][0], g.v[0][1], 0), y.applyToY(g.v[0][0], g.v[0][1], 0)), h.push(y.applyToX(g.o[o - 1][0], g.o[o - 1][1], 0), y.applyToY(g.o[o - 1][0], g.o[o - 1][1], 0), y.applyToX(g.i[o][0], g.i[o][1], 0), y.applyToY(g.i[o][0], g.i[o][1], 0), y.applyToX(g.v[o][0], g.v[o][1], 0), y.applyToY(g.v[o][0], g.v[o][1], 0));
              h.push(y.applyToX(g.o[o - 1][0], g.o[o - 1][1], 0), y.applyToY(g.o[o - 1][0], g.o[o - 1][1], 0), y.applyToX(g.i[0][0], g.i[0][1], 0), y.applyToY(g.i[0][0], g.i[0][1], 0), y.applyToX(g.v[0][0], g.v[0][1], 0), y.applyToY(g.v[0][0], g.v[0][1], 0)), d[A] = h, A += 1
            } v && (b += u[n].l, b += E), this.textSpans[_] ? this.textSpans[_].elem = d : this.textSpans[_] = {
            elem: d
          }, _ += 1
        }
      }, CVTextElement.prototype.renderInnerContent = function () {
        var e, t, r, n, i, a;
        this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var s, o = this.textAnimator.renderedLetters,
          l = this.textProperty.currentData.l;
        t = l.length;
        var p, c, f = null,
          g = null,
          d = null,
          h = this.globalData.renderer;
        for (e = 0; e < t; e += 1)
          if (!l[e].n) {
            if ((s = o[e]) && (h.save(), h.ctxTransform(s.p), h.ctxOpacity(s.o)), this.fill) {
              for (s && s.fc ? f !== s.fc && (h.ctxFillStyle(s.fc), f = s.fc) : f !== this.values.fill && (f = this.values.fill, h.ctxFillStyle(this.values.fill)), n = (p = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                for (a = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
              this.globalData.canvasContext.closePath(), h.ctxFill()
            }
            if (this.stroke) {
              for (s && s.sw ? d !== s.sw && (d = s.sw, h.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, h.ctxLineWidth(this.values.sWidth)), s && s.sc ? g !== s.sc && (g = s.sc, h.ctxStrokeStyle(s.sc)) : g !== this.values.stroke && (g = this.values.stroke, h.ctxStrokeStyle(this.values.stroke)), n = (p = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                for (a = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(c[i], c[i + 1], c[i + 2], c[i + 3], c[i + 4], c[i + 5]);
              this.globalData.canvasContext.closePath(), h.ctxStroke()
            }
            s && this.globalData.renderer.restore()
          }
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
          var e = createTag("canvas");
          e.width = this.assetData.w, e.height = this.assetData.h;
          var t, r, n = e.getContext("2d"),
            i = this.img.width,
            a = this.img.height,
            s = i / a,
            o = this.assetData.w / this.assetData.h,
            l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          s > o && l === "xMidYMid slice" || s < o && l !== "xMidYMid slice" ? t = (r = a) * o : r = (t = i) / o, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
        }
      }, CVImageElement.prototype.renderInnerContent = function () {
        this.canvasContext.drawImage(this.img, 0, 0)
      }, CVImageElement.prototype.destroy = function () {
        this.img = null
      }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
        this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
      }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function (e) {
        return new CVShapeElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createText = function (e) {
        return new CVTextElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createImage = function (e) {
        return new CVImageElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createSolid = function (e) {
        return new CVSolidElement(e, this.globalData, this)
      }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function (e) {
        e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
      }, CanvasRendererBase.prototype.ctxOpacity = function (e) {
        this.canvasContext.globalAlpha *= e < 0 ? 0 : e
      }, CanvasRendererBase.prototype.ctxFillStyle = function (e) {
        this.canvasContext.fillStyle = e
      }, CanvasRendererBase.prototype.ctxStrokeStyle = function (e) {
        this.canvasContext.strokeStyle = e
      }, CanvasRendererBase.prototype.ctxLineWidth = function (e) {
        this.canvasContext.lineWidth = e
      }, CanvasRendererBase.prototype.ctxLineCap = function (e) {
        this.canvasContext.lineCap = e
      }, CanvasRendererBase.prototype.ctxLineJoin = function (e) {
        this.canvasContext.lineJoin = e
      }, CanvasRendererBase.prototype.ctxMiterLimit = function (e) {
        this.canvasContext.miterLimit = e
      }, CanvasRendererBase.prototype.ctxFill = function (e) {
        this.canvasContext.fill(e)
      }, CanvasRendererBase.prototype.ctxFillRect = function (e, t, r, n) {
        this.canvasContext.fillRect(e, t, r, n)
      }, CanvasRendererBase.prototype.ctxStroke = function () {
        this.canvasContext.stroke()
      }, CanvasRendererBase.prototype.reset = function () {
        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
      }, CanvasRendererBase.prototype.save = function () {
        this.canvasContext.save()
      }, CanvasRendererBase.prototype.restore = function (e) {
        this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
      }, CanvasRendererBase.prototype.configAnimation = function (e) {
        if (this.animationItem.wrapper) {
          this.animationItem.container = createTag("canvas");
          var t = this.animationItem.container.style;
          t.width = "100%", t.height = "100%";
          var r = "0px 0px 0px";
          t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
        } else this.canvasContext = this.renderConfig.context;
        this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
          w: e.w,
          h: e.h,
          sx: 0,
          sy: 0,
          tx: 0,
          ty: 0
        }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
      }, CanvasRendererBase.prototype.updateContainerSize = function (e, t) {
        var r, n, i, a;
        if (this.reset(), e ? (r = e, n = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
          var s = this.renderConfig.preserveAspectRatio.split(" "),
            o = s[1] || "meet",
            l = s[0] || "xMidYMid",
            p = l.substr(0, 4),
            c = l.substr(4);
          i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && o === "meet" || a < i && o === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = p === "xMid" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : p === "xMax" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = c === "YMid" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : c === "YMax" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
        } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
      }, CanvasRendererBase.prototype.destroy = function () {
        var e;
        for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
      }, CanvasRendererBase.prototype.renderFrame = function (e, t) {
        if ((this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) && !this.destroyed && e !== -1) {
          var r;
          this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
          var n = this.layers.length;
          for (this.completeLayers || this.checkLayers(e), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
          if (this.globalData._mdf) {
            for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
            this.renderConfig.clearCanvas !== !0 && this.restore()
          }
        }
      }, CanvasRendererBase.prototype.buildItem = function (e) {
        var t = this.elements;
        if (!t[e] && this.layers[e].ty !== 99) {
          var r = this.createItem(this.layers[e], this, this.globalData);
          t[e] = r, r.initExpressions()
        }
      }, CanvasRendererBase.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
      }, CanvasRendererBase.prototype.hide = function () {
        this.animationItem.container.style.display = "none"
      }, CanvasRendererBase.prototype.show = function () {
        this.animationItem.container.style.display = "block"
      }, CVContextData.prototype.duplicate = function () {
        var e = 2 * this._length,
          t = 0;
        for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
        this._length = e
      }, CVContextData.prototype.reset = function () {
        this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
      }, CVContextData.prototype.restore = function (e) {
        this.cArrPos -= 1;
        var t, r = this.stack[this.cArrPos],
          n = r.transform,
          i = this.cTr.props;
        for (t = 0; t < 16; t += 1) i[t] = n[t];
        if (e) {
          this.nativeContext.restore();
          var a = this.stack[this.cArrPos + 1];
          this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
        }
        this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (e || r.opacity !== -1 && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
      }, CVContextData.prototype.save = function (e) {
        e && this.nativeContext.save();
        var t = this.cTr.props;
        this._length <= this.cArrPos && this.duplicate();
        var r, n = this.stack[this.cArrPos];
        for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
        this.cArrPos += 1;
        var i = this.stack[this.cArrPos];
        i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit
      }, CVContextData.prototype.setOpacity = function (e) {
        this.stack[this.cArrPos].opacity = e
      }, CVContextData.prototype.setContext = function (e) {
        this.nativeContext = e
      }, CVContextData.prototype.fillStyle = function (e) {
        this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
      }, CVContextData.prototype.strokeStyle = function (e) {
        this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
      }, CVContextData.prototype.lineWidth = function (e) {
        this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
      }, CVContextData.prototype.lineCap = function (e) {
        this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
      }, CVContextData.prototype.lineJoin = function (e) {
        this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
      }, CVContextData.prototype.miterLimit = function (e) {
        this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
      }, CVContextData.prototype.transform = function (e) {
        this.transformMat.cloneFromProps(e);
        var t = this.cTr;
        this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
        var r = t.props;
        this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
      }, CVContextData.prototype.opacity = function (e) {
        var t = this.stack[this.cArrPos].opacity;
        t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
      }, CVContextData.prototype.fill = function (e) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
      }, CVContextData.prototype.fillRect = function (e, t, r, n) {
        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, n)
      }, CVContextData.prototype.stroke = function () {
        this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
      }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
        var e, t = this.canvasContext;
        for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }, CVCompElement.prototype.destroy = function () {
        var e;
        for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
        this.layers = null, this.elements = null
      }, CVCompElement.prototype.createComp = function (e) {
        return new CVCompElement(e, this.globalData, this)
      }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function (e) {
        return new CVCompElement(e, this.globalData, this)
      }, HBaseElement.prototype = {
        checkBlendMode: function () {},
        initRendererElement: function () {
          this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
        },
        createContainerElements: function () {
          this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
        },
        renderElement: function () {
          var e = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var t = this.finalTransform.mat.toCSS();
            e.transform = t, e.webkitTransform = t
          }
          this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
        },
        renderFrame: function () {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        destroy: function () {
          this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData)
        },
        addEffects: function () {},
        setMatte: function () {}
      }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
        var e;
        this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
      }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
        var e;
        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
        else {
          e = createNS("svg");
          var t = this.comp.data ? this.comp.data : this.globalData.compSize;
          e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
      }, HShapeElement.prototype.getTransformedPoint = function (e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
        return t
      }, HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
        var r, n, i, a, s, o = e.sh.v,
          l = e.transformers,
          p = o._length;
        if (!(p <= 1)) {
          for (r = 0; r < p - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, t);
          o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, t))
        }
      }, HShapeElement.prototype.checkBounds = function (e, t, r, n, i) {
        this.getBoundsOfCurve(e, t, r, n);
        var a = this.shapeBoundingBox;
        i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
      }, HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
      }, HShapeElement.prototype.getBoundsOfCurve = function (e, t, r, n) {
        for (var i, a, s, o, l, p, c, f = [
            [e[0], n[0]],
            [e[1], n[1]]
          ], g = 0; g < 2; ++g) a = 6 * e[g] - 12 * t[g] + 6 * r[g], i = -3 * e[g] + 9 * t[g] - 9 * r[g] + 3 * n[g], s = 3 * t[g] - 3 * e[g], a |= 0, s |= 0, (i |= 0) === 0 && a === 0 || (i === 0 ? (o = -s / a) > 0 && o < 1 && f[g].push(this.calculateF(o, e, t, r, n, g)) : (l = a * a - 4 * s * i) >= 0 && ((p = (-a + bmSqrt(l)) / (2 * i)) > 0 && p < 1 && f[g].push(this.calculateF(p, e, t, r, n, g)), (c = (-a - bmSqrt(l)) / (2 * i)) > 0 && c < 1 && f[g].push(this.calculateF(c, e, t, r, n, g))));
        this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
      }, HShapeElement.prototype.calculateF = function (e, t, r, n, i, a) {
        return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * n[a] + bmPow(e, 3) * i[a]
      }, HShapeElement.prototype.calculateBoundingBox = function (e, t) {
        var r, n = e.length;
        for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
      }, HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
        var r = 0;
        if (e.keyframes) {
          for (var n = 0; n < e.keyframes.length; n += 1) {
            var i = e.keyframes[n].s;
            i > r && (r = i)
          }
          r *= e.mult
        } else r = e.v * e.mult;
        t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
      }, HShapeElement.prototype.currentBoxContains = function (e) {
        return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
      }, HShapeElement.prototype.renderInnerContent = function () {
        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
          var e = this.tempBoundingBox,
            t = 999999;
          if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
          var r = !1;
          if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
            this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
            var n = this.shapeCont.style,
              i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            n.transform = i, n.webkitTransform = i
          }
        }
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
        if (this.isMasked = this.checkMasks(), this.isMasked) {
          this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
          var e = createNS("g");
          this.maskedElement.appendChild(e), this.innerElem = e
        } else this.renderType = "html", this.innerElem = this.layerElement;
        this.checkParenting()
      }, HTextElement.prototype.buildNewText = function () {
        var e = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
        var t = this.innerElem.style,
          r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
        t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
        var n, i, a = this.globalData.fontManager.getFontByName(e.f);
        if (!this.globalData.fontManager.chars)
          if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
          else {
            t.fontFamily = a.fFamily;
            var s = e.fWeight,
              o = e.fStyle;
            t.fontStyle = o, t.fontWeight = s
          } var l, p, c, f = e.l;
        i = f.length;
        var g, d = this.mHelper,
          h = "",
          m = 0;
        for (n = 0; n < i; n += 1) {
          if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (p = this.textSpans[m]).children[0] : ((p = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(l), styleDiv(p)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (p = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(p = createTag("span")), styleDiv(l = createTag("span")), p.appendChild(l)), this.globalData.fontManager.chars) {
            var u, y = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
            if (u = y ? y.data : null, d.reset(), u && u.shapes && u.shapes.length && (g = u.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), h = this.createPathShape(d, g), l.setAttribute("d", h)), this.isMasked) this.innerElem.appendChild(l);
            else {
              if (this.innerElem.appendChild(p), u && u.shapes) {
                document.body.appendChild(c);
                var v = c.getBBox();
                c.setAttribute("width", v.width + 2), c.setAttribute("height", v.height + 2), c.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                var E = c.style,
                  b = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                E.transform = b, E.webkitTransform = b, f[n].yOffset = v.y - 1
              } else c.setAttribute("width", 1), c.setAttribute("height", 1);
              p.appendChild(c)
            }
          } else if (l.textContent = f[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
          else {
            this.innerElem.appendChild(p);
            var I = l.style,
              S = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
            I.transform = S, I.webkitTransform = S
          }
          this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = p, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
        }
        for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
      }, HTextElement.prototype.renderInnerContent = function () {
        var e;
        if (this.validateText(), this.data.singleShape) {
          if (!this._isFirstFrame && !this.lettersChangedFlag) return;
          if (this.isMasked && this.finalTransform._matMdf) {
            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
            var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
            e.transform = t, e.webkitTransform = t
          }
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
          var r, n, i, a, s, o = 0,
            l = this.textAnimator.renderedLetters,
            p = this.textProperty.currentData.l;
          for (n = p.length, r = 0; r < n; r += 1) p[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
          if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var c = this.innerElem.getBBox();
            if (this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height)), this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
              this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
              var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              e.transform = f, e.webkitTransform = f
            }
          }
        }
      }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
        var e, t, r, n, i = this.comp.threeDElements.length;
        for (e = 0; e < i; e += 1)
          if ((t = this.comp.threeDElements[e]).type === "3d") {
            r = t.perspectiveElem.style, n = t.container.style;
            var a = this.pe.v + "px",
              s = "0px 0px 0px",
              o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            r.perspective = a, r.webkitPerspective = a, n.transformOrigin = s, n.mozTransformOrigin = s, n.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
          }
      }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
        var e, t, r = this._isFirstFrame;
        if (this.hierarchy)
          for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
        if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
          if (this.mat.reset(), this.hierarchy)
            for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
              var n = this.hierarchy[e].finalTransform.mProp;
              this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
            }
          if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
            var i;
            i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
            var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
              s = [i[0] / a, i[1] / a, i[2] / a],
              o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
              l = Math.atan2(s[1], o),
              p = Math.atan2(s[0], -s[2]);
            this.mat.rotateY(p).rotateX(-l)
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
          var c = !this._prevMat.equals(this.mat);
          if ((c || this.pe._mdf) && this.comp.threeDElements) {
            var f, g, d;
            for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
              if ((f = this.comp.threeDElements[e]).type === "3d") {
                if (c) {
                  var h = this.mat.toCSS();
                  (d = f.container.style).transform = h, d.webkitTransform = h
                }
                this.pe._mdf && ((g = f.perspectiveElem.style).perspective = this.pe.v + "px", g.webkitPerspective = this.pe.v + "px")
              } this.mat.clone(this._prevMat)
          }
        }
        this._isFirstFrame = !1
      }, HCameraElement.prototype.prepareFrame = function (e) {
        this.prepareProperties(e, !0)
      }, HCameraElement.prototype.destroy = function () {}, HCameraElement.prototype.getBaseElement = function () {
        return null
      }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
        var e = this.globalData.getAssetsPath(this.assetData),
          t = new Image;
        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
      }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
      }, HybridRendererBase.prototype.appendElementInPos = function (e, t) {
        var r = e.getBaseElement();
        if (r) {
          var n = this.layers[t];
          if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
          else if (this.threeDElements) this.addTo3dContainer(r, t);
          else {
            for (var i, a, s = 0; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
            i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
          }
        }
      }, HybridRendererBase.prototype.createShape = function (e) {
        return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createText = function (e) {
        return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createCamera = function (e) {
        return this.camera = new HCameraElement(e, this.globalData, this), this.camera
      }, HybridRendererBase.prototype.createImage = function (e) {
        return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createSolid = function (e) {
        return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
      }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function (e) {
        for (var t = 0, r = this.threeDElements.length; t < r;) {
          if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
          t += 1
        }
        return null
      }, HybridRendererBase.prototype.createThreeDContainer = function (e, t) {
        var r, n, i = createTag("div");
        styleDiv(i);
        var a = createTag("div");
        if (styleDiv(a), t === "3d") {
          (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
          var s = "50% 50%";
          r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
          var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          (n = a.style).transform = o, n.webkitTransform = o
        }
        i.appendChild(a);
        var l = {
          container: a,
          perspectiveElem: i,
          startPos: e,
          endPos: e,
          type: t
        };
        return this.threeDElements.push(l), l
      }, HybridRendererBase.prototype.build3dContainers = function () {
        var e, t, r = this.layers.length,
          n = "";
        for (e = 0; e < r; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (n !== "3d" && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : (n !== "2d" && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
        for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
      }, HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
        for (var r = 0, n = this.threeDElements.length; r < n;) {
          if (t <= this.threeDElements[r].endPos) {
            for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
            i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
            break
          }
          r += 1
        }
      }, HybridRendererBase.prototype.configAnimation = function (e) {
        var t = createTag("div"),
          r = this.animationItem.wrapper,
          n = t.style;
        n.width = e.w + "px", n.height = e.h + "px", this.resizerElem = t, styleDiv(t), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), n.overflow = "hidden";
        var i = createNS("svg");
        i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
        var a = createNS("defs");
        i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
      }, HybridRendererBase.prototype.destroy = function () {
        var e;
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
        var t = this.layers ? this.layers.length : 0;
        for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
      }, HybridRendererBase.prototype.updateContainerSize = function () {
        var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
          a = this.animationItem.wrapper.offsetHeight,
          s = i / a;
        this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
        var o = this.resizerElem.style;
        o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
      }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function () {
        this.resizerElem.style.display = "none"
      }, HybridRendererBase.prototype.show = function () {
        this.resizerElem.style.display = "block"
      }, HybridRendererBase.prototype.initItems = function () {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
          var e, t = this.globalData.compSize.w,
            r = this.globalData.compSize.h,
            n = this.threeDElements.length;
          for (e = 0; e < n; e += 1) {
            var i = this.threeDElements[e].perspectiveElem.style;
            i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
          }
        }
      }, HybridRendererBase.prototype.searchExtraCompositions = function (e) {
        var t, r = e.length,
          n = createTag("div");
        for (t = 0; t < r; t += 1)
          if (e[t].xt) {
            var i = this.createComp(e[t], n, this.globalData.comp, null);
            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
          }
      }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
      }, HCompElement.prototype.addTo3dContainer = function (e, t) {
        for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
        r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
      }, HCompElement.prototype.createComp = function (e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function (e) {
        return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
      };
      var CompExpressionInterface = function (e) {
        function t(r) {
          for (var n = 0, i = e.layers.length; n < i;) {
            if (e.layers[n].nm === r || e.layers[n].ind === r) return e.elements[n].layerInterface;
            n += 1
          }
          return null
        }
        return Object.defineProperty(t, "_name", {
          value: e.data.nm
        }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
      };

      function _typeof$2(e) {
        return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$2(e)
      }

      function seedRandom(e, t) {
        var r, n = this,
          i = 256,
          a = t.pow(i, 6),
          s = t.pow(2, 52),
          o = 2 * s,
          l = 255;

        function p(h) {
          var m, u = h.length,
            y = this,
            v = 0,
            E = y.i = y.j = 0,
            b = y.S = [];
          for (u || (h = [u++]); v < i;) b[v] = v++;
          for (v = 0; v < i; v++) b[v] = b[E = l & E + h[v % u] + (m = b[v])], b[E] = m;
          y.g = function (I) {
            for (var S, _ = 0, A = y.i, D = y.j, w = y.S; I--;) S = w[A = l & A + 1], _ = _ * i + w[l & (w[A] = w[D = l & D + S]) + (w[D] = S)];
            return y.i = A, y.j = D, _
          }
        }

        function c(h, m) {
          return m.i = h.i, m.j = h.j, m.S = h.S.slice(), m
        }

        function f(h, m) {
          var u, y = [],
            v = _typeof$2(h);
          if (m && v == "object")
            for (u in h) try {
              y.push(f(h[u], m - 1))
            } catch {}
          return y.length ? y : v == "string" ? h : h + "\0"
        }

        function g(h, m) {
          for (var u, y = h + "", v = 0; v < y.length;) m[l & v] = l & (u ^= 19 * m[l & v]) + y.charCodeAt(v++);
          return d(m)
        }

        function d(h) {
          return String.fromCharCode.apply(0, h)
        }
        t.seedrandom = function (h, m, u) {
          var y = [],
            v = g(f((m = m === !0 ? {
              entropy: !0
            } : m || {}).entropy ? [h, d(e)] : h === null ? function () {
              try {
                var I = new Uint8Array(i);
                return (n.crypto || n.msCrypto).getRandomValues(I), d(I)
              } catch {
                var S = n.navigator,
                  _ = S && S.plugins;
                return [+new Date, n, _, n.screen, d(e)]
              }
            }() : h, 3), y),
            E = new p(y),
            b = function () {
              for (var I = E.g(6), S = a, _ = 0; I < s;) I = (I + _) * i, S *= i, _ = E.g(1);
              for (; I >= o;) I /= 2, S /= 2, _ >>>= 1;
              return (I + _) / S
            };
          return b.int32 = function () {
            return 0 | E.g(4)
          }, b.quick = function () {
            return E.g(4) / 4294967296
          }, b.double = b, g(d(E.S), e), (m.pass || u || function (I, S, _, A) {
            return A && (A.S && c(A, E), I.state = function () {
              return c(E, {})
            }), _ ? (t.random = I, S) : I
          })(b, v, "global" in m ? m.global : this == t, m.state)
        }, g(t.random(), e)
      }

      function initialize$2(e) {
        seedRandom([], e)
      }
      var propTypes = {
        SHAPE: "shape"
      };

      function _typeof$1(e) {
        return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof$1(e)
      }
      var ExpressionManager = function () {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null,
            XMLHttpRequest = null,
            fetch = null,
            frames = null,
            _lottieGlobal = {};

          function resetFrame() {
            _lottieGlobal = {}
          }

          function $bm_isInstanceOfArray(e) {
            return e.constructor === Array || e.constructor === Float32Array
          }

          function isNumerable(e, t) {
            return e === "number" || t instanceof Number || e === "boolean" || e === "string"
          }

          function $bm_neg(e) {
            var t = _typeof$1(e);
            if (t === "number" || e instanceof Number || t === "boolean") return -e;
            if ($bm_isInstanceOfArray(e)) {
              var r, n = e.length,
                i = [];
              for (r = 0; r < n; r += 1) i[r] = -e[r];
              return i
            }
            return e.propType ? e.v : -e
          }
          initialize$2(BMMath);
          var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

          function sum(e, t) {
            var r = _typeof$1(e),
              n = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(n, t) || r === "string" || n === "string") return e + t;
            if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] += t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
              return o
            }
            return 0
          }
          var add = sum;

          function sub(e, t) {
            var r = _typeof$1(e),
              n = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(n, t)) return r === "string" && (e = parseInt(e, 10)), n === "string" && (t = parseInt(t, 10)), e - t;
            if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] -= t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
              return o
            }
            return 0
          }

          function mul(e, t) {
            var r, n, i, a = _typeof$1(e),
              s = _typeof$1(t);
            if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
              return r
            }
            if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
              for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
              return r
            }
            return 0
          }

          function div(e, t) {
            var r, n, i, a = _typeof$1(e),
              s = _typeof$1(t);
            if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
              return r
            }
            if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
              for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
              return r
            }
            return 0
          }

          function mod(e, t) {
            return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;

          function clamp(e, t, r) {
            if (t > r) {
              var n = r;
              r = t, t = n
            }
            return Math.min(Math.max(e, t), r)
          }

          function radiansToDegrees(e) {
            return e / degToRads
          }
          var radians_to_degrees = radiansToDegrees;

          function degreesToRadians(e) {
            return e * degToRads
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];

          function length(e, t) {
            if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
            var r;
            t || (t = helperLengthArray);
            var n = Math.min(e.length, t.length),
              i = 0;
            for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
            return Math.sqrt(i)
          }

          function normalize(e) {
            return div(e, length(e))
          }

          function rgbToHsl(e) {
            var t, r, n = e[0],
              i = e[1],
              a = e[2],
              s = Math.max(n, i, a),
              o = Math.min(n, i, a),
              l = (s + o) / 2;
            if (s === o) t = 0, r = 0;
            else {
              var p = s - o;
              switch (r = l > .5 ? p / (2 - s - o) : p / (s + o), s) {
                case n:
                  t = (i - a) / p + (i < a ? 6 : 0);
                  break;
                case i:
                  t = (a - n) / p + 2;
                  break;
                case a:
                  t = (n - i) / p + 4
              }
              t /= 6
            }
            return [t, r, l, e[3]]
          }

          function hue2rgb(e, t, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
          }

          function hslToRgb(e) {
            var t, r, n, i = e[0],
              a = e[1],
              s = e[2];
            if (a === 0) t = s, n = s, r = s;
            else {
              var o = s < .5 ? s * (1 + a) : s + a - s * a,
                l = 2 * s - o;
              t = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
            }
            return [t, r, n, e[3]]
          }

          function linear(e, t, r, n, i) {
            if (n !== void 0 && i !== void 0 || (n = t, i = r, t = 0, r = 1), r < t) {
              var a = r;
              r = t, t = a
            }
            if (e <= t) return n;
            if (e >= r) return i;
            var s, o = r === t ? 0 : (e - t) / (r - t);
            if (!n.length) return n + (i - n) * o;
            var l = n.length,
              p = createTypedArray("float32", l);
            for (s = 0; s < l; s += 1) p[s] = n[s] + (i[s] - n[s]) * o;
            return p
          }

          function random(e, t) {
            if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
              var r, n = t.length;
              e || (e = createTypedArray("float32", n));
              var i = createTypedArray("float32", n),
                a = BMMath.random();
              for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
              return i
            }
            return e === void 0 && (e = 0), e + BMMath.random() * (t - e)
          }

          function createPath(e, t, r, n) {
            var i, a = e.length,
              s = shapePool.newElement();
            s.setPathData(!!n, a);
            var o, l, p = [0, 0];
            for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : p, l = r && r[i] ? r[i] : p, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
            return s
          }

          function initiateExpression(elem, data, property) {
            function noOp(e) {
              return e
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf("random") !== -1,
              elemType = elem.data.ty,
              transform, $bm_transform, content, effect, thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
              get: function () {
                return thisProperty.v
              }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || this.data.hd !== !0,
              wiggle = function (e, t) {
                var r, n, i = this.pv.length ? this.pv.length : 1,
                  a = createTypedArray("float32", i),
                  s = Math.floor(5 * time);
                for (r = 0, n = 0; r < s;) {
                  for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
                  r += 1
                }
                var o = 5 * time,
                  l = o - Math.floor(o),
                  p = createTypedArray("float32", i);
                if (i > 1) {
                  for (n = 0; n < i; n += 1) p[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
                  return p
                }
                return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
              }.bind(this);

            function loopInDuration(e, t) {
              return loopIn(e, t, !0)
            }

            function loopOutDuration(e, t) {
              return loopOut(e, t, !0)
            }
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
              time, velocity, value, text, textIndex, textTotal, selectorValue;

            function lookAt(e, t) {
              var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
              return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
            }

            function easeOut(e, t, r, n, i) {
              return applyEase(easeOutBez, e, t, r, n, i)
            }

            function easeIn(e, t, r, n, i) {
              return applyEase(easeInBez, e, t, r, n, i)
            }

            function ease(e, t, r, n, i) {
              return applyEase(easeInOutBez, e, t, r, n, i)
            }

            function applyEase(e, t, r, n, i, a) {
              i === void 0 ? (i = r, a = n) : t = (t - r) / (n - r), t > 1 ? t = 1 : t < 0 && (t = 0);
              var s = e(t);
              if ($bm_isInstanceOfArray(i)) {
                var o, l = i.length,
                  p = createTypedArray("float32", l);
                for (o = 0; o < l; o += 1) p[o] = (a[o] - i[o]) * s + i[o];
                return p
              }
              return (a - i) * s + i
            }

            function nearestKey(e) {
              var t, r, n, i = data.k.length;
              if (data.k.length && typeof data.k[0] != "number")
                if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                else {
                  for (t = 0; t < i - 1; t += 1) {
                    if (e === data.k[t].t) {
                      r = t + 1, n = data.k[t].t;
                      break
                    }
                    if (e > data.k[t].t && e < data.k[t + 1].t) {
                      e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
                      break
                    }
                  }
                  r === -1 && (r = t + 1, n = data.k[t].t)
                }
              else r = 0, n = 0;
              var a = {};
              return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
            }

            function key(e) {
              var t, r, n;
              if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
              e -= 1, t = {
                time: data.k[e].t / elem.comp.globalData.frameRate,
                value: []
              };
              var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
              for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
              return t
            }

            function framesToTime(e, t) {
              return t || (t = elem.comp.globalData.frameRate), e / t
            }

            function timeToFrames(e, t) {
              return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
            }

            function seedRandom(e) {
              BMMath.seedrandom(randSeed + e)
            }

            function sourceRectAtTime() {
              return elem.sourceRectAtTime()
            }

            function substring(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
            }

            function substr(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
            }

            function posterizeTime(e) {
              time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
            }
            var index = elem.data.ind,
              hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
              parent, randSeed = Math.floor(1e6 * Math.random()),
              globalData = elem.globalData;

            function executeExpression(e) {
              return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
            }
            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
          }
          return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
        }(),
        Expressions = function () {
          var e = {};
          return e.initExpressions = function (t) {
            var r = 0,
              n = [];
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
              r += 1
            }, t.renderer.globalData.popExpression = function () {
              (r -= 1) == 0 && function () {
                var i, a = n.length;
                for (i = 0; i < a; i += 1) n[i].release();
                n.length = 0
              }()
            }, t.renderer.globalData.registerExpressionProperty = function (i) {
              n.indexOf(i) === -1 && n.push(i)
            }
          }, e.resetFrame = ExpressionManager.resetFrame, e
        }(),
        MaskManagerInterface = function () {
          function e(t, r) {
            this._mask = t, this._data = r
          }
          return Object.defineProperty(e.prototype, "maskPath", {
              get: function () {
                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
              }
            }), Object.defineProperty(e.prototype, "maskOpacity", {
              get: function () {
                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
              }
            }),
            function (t) {
              var r, n = createSizedArray(t.viewData.length),
                i = t.viewData.length;
              for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
              return function (a) {
                for (r = 0; r < i;) {
                  if (t.masksProperties[r].nm === a) return n[r];
                  r += 1
                }
                return null
              }
            }
        }(),
        ExpressionPropertyInterface = function () {
          var e = {
              pv: 0,
              v: 0,
              mult: 1
            },
            t = {
              pv: [0, 0, 0],
              v: [0, 0, 0],
              mult: 1
            };

          function r(i, a, s) {
            Object.defineProperty(i, "velocity", {
              get: function () {
                return a.getVelocityAtTime(a.comp.currentFrame)
              }
            }), i.numKeys = a.keyframes ? a.keyframes.length : 0, i.key = function (o) {
              if (!i.numKeys) return 0;
              var l = "";
              l = "s" in a.keyframes[o - 1] ? a.keyframes[o - 1].s : "e" in a.keyframes[o - 2] ? a.keyframes[o - 2].e : a.keyframes[o - 2].s;
              var p = s === "unidimensional" ? new Number(l) : Object.assign({}, l);
              return p.time = a.keyframes[o - 1].t / a.elem.comp.globalData.frameRate, p.value = s === "unidimensional" ? l[0] : l, p
            }, i.valueAtTime = a.getValueAtTime, i.speedAtTime = a.getSpeedAtTime, i.velocityAtTime = a.getVelocityAtTime, i.propertyGroup = a.propertyGroup
          }

          function n() {
            return e
          }
          return function (i) {
            return i ? i.propType === "unidimensional" ? function (a) {
              a && "pv" in a || (a = e);
              var s = 1 / a.mult,
                o = a.pv * s,
                l = new Number(o);
              return l.value = o, r(l, a, "unidimensional"),
                function () {
                  return a.k && a.getValue(), o = a.v * s, l.value !== o && ((l = new Number(o)).value = o, r(l, a, "unidimensional")), l
                }
            }(i) : function (a) {
              a && "pv" in a || (a = t);
              var s = 1 / a.mult,
                o = a.data && a.data.l || a.pv.length,
                l = createTypedArray("float32", o),
                p = createTypedArray("float32", o);
              return l.value = p, r(l, a, "multidimensional"),
                function () {
                  a.k && a.getValue();
                  for (var c = 0; c < o; c += 1) p[c] = a.v[c] * s, l[c] = p[c];
                  return l
                }
            }(i) : n
          }
        }(),
        TransformExpressionInterface = function (e) {
          function t(s) {
            switch (s) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return t.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return t.rotation;
              case "ADBE Rotate X":
                return t.xRotation;
              case "ADBE Rotate Y":
                return t.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return t.position;
              case "ADBE Position_0":
                return t.xPosition;
              case "ADBE Position_1":
                return t.yPosition;
              case "ADBE Position_2":
                return t.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return t.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return t.opacity;
              default:
                return null
            }
          }
          var r, n, i, a;
          return Object.defineProperty(t, "rotation", {
            get: ExpressionPropertyInterface(e.r || e.rz)
          }), Object.defineProperty(t, "zRotation", {
            get: ExpressionPropertyInterface(e.rz || e.r)
          }), Object.defineProperty(t, "xRotation", {
            get: ExpressionPropertyInterface(e.rx)
          }), Object.defineProperty(t, "yRotation", {
            get: ExpressionPropertyInterface(e.ry)
          }), Object.defineProperty(t, "scale", {
            get: ExpressionPropertyInterface(e.s)
          }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), n = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
            get: function () {
              return e.p ? a() : [r(), n(), i ? i() : 0]
            }
          }), Object.defineProperty(t, "xPosition", {
            get: ExpressionPropertyInterface(e.px)
          }), Object.defineProperty(t, "yPosition", {
            get: ExpressionPropertyInterface(e.py)
          }), Object.defineProperty(t, "zPosition", {
            get: ExpressionPropertyInterface(e.pz)
          }), Object.defineProperty(t, "anchorPoint", {
            get: ExpressionPropertyInterface(e.a)
          }), Object.defineProperty(t, "opacity", {
            get: ExpressionPropertyInterface(e.o)
          }), Object.defineProperty(t, "skew", {
            get: ExpressionPropertyInterface(e.sk)
          }), Object.defineProperty(t, "skewAxis", {
            get: ExpressionPropertyInterface(e.sa)
          }), Object.defineProperty(t, "orientation", {
            get: ExpressionPropertyInterface(e.or)
          }), t
        },
        LayerExpressionInterface = function () {
          function e(p) {
            var c = new Matrix;
            return p !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(p).clone(c) : this._elem.finalTransform.mProp.applyToMatrix(c), c
          }

          function t(p, c) {
            var f = this.getMatrix(c);
            return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.applyPoint(f, p)
          }

          function r(p, c) {
            var f = this.getMatrix(c);
            return this.applyPoint(f, p)
          }

          function n(p, c) {
            var f = this.getMatrix(c);
            return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.invertPoint(f, p)
          }

          function i(p, c) {
            var f = this.getMatrix(c);
            return this.invertPoint(f, p)
          }

          function a(p, c) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var f, g = this._elem.hierarchy.length;
              for (f = 0; f < g; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(p)
            }
            return p.applyToPointArray(c[0], c[1], c[2] || 0)
          }

          function s(p, c) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var f, g = this._elem.hierarchy.length;
              for (f = 0; f < g; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(p)
            }
            return p.inversePoint(c)
          }

          function o(p) {
            var c = new Matrix;
            if (c.reset(), this._elem.finalTransform.mProp.applyToMatrix(c), this._elem.hierarchy && this._elem.hierarchy.length) {
              var f, g = this._elem.hierarchy.length;
              for (f = 0; f < g; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(c);
              return c.inversePoint(p)
            }
            return c.inversePoint(p)
          }

          function l() {
            return [1, 1, 1, 1]
          }
          return function (p) {
            var c;

            function f(d) {
              switch (d) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return f.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return c;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return f.effect;
                case "ADBE Text Properties":
                  return f.textInterface;
                default:
                  return null
              }
            }
            f.getMatrix = e, f.invertPoint = s, f.applyPoint = a, f.toWorld = r, f.toWorldVec = t, f.fromWorld = i, f.fromWorldVec = n, f.toComp = r, f.fromComp = o, f.sampleImage = l, f.sourceRectAtTime = p.sourceRectAtTime.bind(p), f._elem = p;
            var g = getDescriptor(c = TransformExpressionInterface(p.finalTransform.mProp), "anchorPoint");
            return Object.defineProperties(f, {
              hasParent: {
                get: function () {
                  return p.hierarchy.length
                }
              },
              parent: {
                get: function () {
                  return p.hierarchy[0].layerInterface
                }
              },
              rotation: getDescriptor(c, "rotation"),
              scale: getDescriptor(c, "scale"),
              position: getDescriptor(c, "position"),
              opacity: getDescriptor(c, "opacity"),
              anchorPoint: g,
              anchor_point: g,
              transform: {
                get: function () {
                  return c
                }
              },
              active: {
                get: function () {
                  return p.isInRange
                }
              }
            }), f.startTime = p.data.st, f.index = p.data.ind, f.source = p.data.refId, f.height = p.data.ty === 0 ? p.data.h : 100, f.width = p.data.ty === 0 ? p.data.w : 100, f.inPoint = p.data.ip / p.comp.globalData.frameRate, f.outPoint = p.data.op / p.comp.globalData.frameRate, f._name = p.data.nm, f.registerMaskInterface = function (d) {
              f.mask = new MaskManagerInterface(d, p)
            }, f.registerEffectsInterface = function (d) {
              f.effect = d
            }, f
          }
        }(),
        propertyGroupFactory = function (e, t) {
          return function (r) {
            return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1)
          }
        },
        PropertyInterface = function (e, t) {
          var r = {
            _name: e
          };
          return function (n) {
            return (n = n === void 0 ? 1 : n) <= 0 ? r : t(n - 1)
          }
        },
        EffectsExpressionInterface = function () {
          function e(r, n, i, a) {
            function s(f) {
              for (var g = r.ef, d = 0, h = g.length; d < h;) {
                if (f === g[d].nm || f === g[d].mn || f === g[d].ix) return g[d].ty === 5 ? p[d] : p[d]();
                d += 1
              }
              throw new Error
            }
            var o, l = propertyGroupFactory(s, i),
              p = [],
              c = r.ef.length;
            for (o = 0; o < c; o += 1) r.ef[o].ty === 5 ? p.push(e(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : p.push(t(n.effectElements[o], r.ef[o].ty, a, l));
            return r.mn === "ADBE Color Control" && Object.defineProperty(s, "color", {
              get: function () {
                return p[0]()
              }
            }), Object.defineProperties(s, {
              numProperties: {
                get: function () {
                  return r.np
                }
              },
              _name: {
                value: r.nm
              },
              propertyGroup: {
                value: l
              }
            }), s.enabled = r.en !== 0, s.active = s.enabled, s
          }

          function t(r, n, i, a) {
            var s = ExpressionPropertyInterface(r.p);
            return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
              function () {
                return n === 10 ? i.comp.compInterface(r.p.v) : s()
              }
          }
          return {
            createEffectsInterface: function (r, n) {
              if (r.effectsManager) {
                var i, a = [],
                  s = r.data.ef,
                  o = r.effectsManager.effectElements.length;
                for (i = 0; i < o; i += 1) a.push(e(s[i], r.effectsManager.effectElements[i], n, r));
                var l = r.data.ef || [],
                  p = function (c) {
                    for (i = 0, o = l.length; i < o;) {
                      if (c === l[i].nm || c === l[i].mn || c === l[i].ix) return a[i];
                      i += 1
                    }
                    return null
                  };
                return Object.defineProperty(p, "numProperties", {
                  get: function () {
                    return l.length
                  }
                }), p
              }
              return null
            }
          }
        }(),
        ShapePathInterface = function (e, t, r) {
          var n = t.sh;

          function i(s) {
            return s === "Shape" || s === "shape" || s === "Path" || s === "path" || s === "ADBE Vector Shape" || s === 2 ? i.path : null
          }
          var a = propertyGroupFactory(i, r);
          return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
            path: {
              get: function () {
                return n.k && n.getValue(), n
              }
            },
            shape: {
              get: function () {
                return n.k && n.getValue(), n
              }
            },
            _name: {
              value: e.nm
            },
            ix: {
              value: e.ix
            },
            propertyIndex: {
              value: e.ix
            },
            mn: {
              value: e.mn
            },
            propertyGroup: {
              value: r
            }
          }), i
        },
        ShapeExpressionInterface = function () {
          function e(d, h, m) {
            var u, y = [],
              v = d ? d.length : 0;
            for (u = 0; u < v; u += 1) d[u].ty === "gr" ? y.push(t(d[u], h[u], m)) : d[u].ty === "fl" ? y.push(r(d[u], h[u], m)) : d[u].ty === "st" ? y.push(a(d[u], h[u], m)) : d[u].ty === "tm" ? y.push(s(d[u], h[u], m)) : d[u].ty === "tr" || (d[u].ty === "el" ? y.push(l(d[u], h[u], m)) : d[u].ty === "sr" ? y.push(p(d[u], h[u], m)) : d[u].ty === "sh" ? y.push(ShapePathInterface(d[u], h[u], m)) : d[u].ty === "rc" ? y.push(c(d[u], h[u], m)) : d[u].ty === "rd" ? y.push(f(d[u], h[u], m)) : d[u].ty === "rp" ? y.push(g(d[u], h[u], m)) : d[u].ty === "gf" ? y.push(n(d[u], h[u], m)) : y.push(i(d[u], h[u])));
            return y
          }

          function t(d, h, m) {
            var u = function (E) {
              switch (E) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return u.content;
                default:
                  return u.transform
              }
            };
            u.propertyGroup = propertyGroupFactory(u, m);
            var y = function (E, b, I) {
                var S, _ = function (D) {
                  for (var w = 0, O = S.length; w < O;) {
                    if (S[w]._name === D || S[w].mn === D || S[w].propertyIndex === D || S[w].ix === D || S[w].ind === D) return S[w];
                    w += 1
                  }
                  return typeof D == "number" ? S[D - 1] : null
                };
                _.propertyGroup = propertyGroupFactory(_, I), S = e(E.it, b.it, _.propertyGroup), _.numProperties = S.length;
                var A = o(E.it[E.it.length - 1], b.it[b.it.length - 1], _.propertyGroup);
                return _.transform = A, _.propertyIndex = E.cix, _._name = E.nm, _
              }(d, h, u.propertyGroup),
              v = o(d.it[d.it.length - 1], h.it[h.it.length - 1], u.propertyGroup);
            return u.content = y, u.transform = v, Object.defineProperty(u, "_name", {
              get: function () {
                return d.nm
              }
            }), u.numProperties = d.np, u.propertyIndex = d.ix, u.nm = d.nm, u.mn = d.mn, u
          }

          function r(d, h, m) {
            function u(y) {
              return y === "Color" || y === "color" ? u.color : y === "Opacity" || y === "opacity" ? u.opacity : null
            }
            return Object.defineProperties(u, {
              color: {
                get: ExpressionPropertyInterface(h.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(h.o)
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), h.c.setGroupProperty(PropertyInterface("Color", m)), h.o.setGroupProperty(PropertyInterface("Opacity", m)), u
          }

          function n(d, h, m) {
            function u(y) {
              return y === "Start Point" || y === "start point" ? u.startPoint : y === "End Point" || y === "end point" ? u.endPoint : y === "Opacity" || y === "opacity" ? u.opacity : null
            }
            return Object.defineProperties(u, {
              startPoint: {
                get: ExpressionPropertyInterface(h.s)
              },
              endPoint: {
                get: ExpressionPropertyInterface(h.e)
              },
              opacity: {
                get: ExpressionPropertyInterface(h.o)
              },
              type: {
                get: function () {
                  return "a"
                }
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), h.s.setGroupProperty(PropertyInterface("Start Point", m)), h.e.setGroupProperty(PropertyInterface("End Point", m)), h.o.setGroupProperty(PropertyInterface("Opacity", m)), u
          }

          function i() {
            return function () {
              return null
            }
          }

          function a(d, h, m) {
            var u, y = propertyGroupFactory(S, m),
              v = propertyGroupFactory(I, y);

            function E(_) {
              Object.defineProperty(I, d.d[_].nm, {
                get: ExpressionPropertyInterface(h.d.dataProps[_].p)
              })
            }
            var b = d.d ? d.d.length : 0,
              I = {};
            for (u = 0; u < b; u += 1) E(u), h.d.dataProps[u].p.setGroupProperty(v);

            function S(_) {
              return _ === "Color" || _ === "color" ? S.color : _ === "Opacity" || _ === "opacity" ? S.opacity : _ === "Stroke Width" || _ === "stroke width" ? S.strokeWidth : null
            }
            return Object.defineProperties(S, {
              color: {
                get: ExpressionPropertyInterface(h.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(h.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(h.w)
              },
              dash: {
                get: function () {
                  return I
                }
              },
              _name: {
                value: d.nm
              },
              mn: {
                value: d.mn
              }
            }), h.c.setGroupProperty(PropertyInterface("Color", y)), h.o.setGroupProperty(PropertyInterface("Opacity", y)), h.w.setGroupProperty(PropertyInterface("Stroke Width", y)), S
          }

          function s(d, h, m) {
            function u(v) {
              return v === d.e.ix || v === "End" || v === "end" ? u.end : v === d.s.ix ? u.start : v === d.o.ix ? u.offset : null
            }
            var y = propertyGroupFactory(u, m);
            return u.propertyIndex = d.ix, h.s.setGroupProperty(PropertyInterface("Start", y)), h.e.setGroupProperty(PropertyInterface("End", y)), h.o.setGroupProperty(PropertyInterface("Offset", y)), u.propertyIndex = d.ix, u.propertyGroup = m, Object.defineProperties(u, {
              start: {
                get: ExpressionPropertyInterface(h.s)
              },
              end: {
                get: ExpressionPropertyInterface(h.e)
              },
              offset: {
                get: ExpressionPropertyInterface(h.o)
              },
              _name: {
                value: d.nm
              }
            }), u.mn = d.mn, u
          }

          function o(d, h, m) {
            function u(v) {
              return d.a.ix === v || v === "Anchor Point" ? u.anchorPoint : d.o.ix === v || v === "Opacity" ? u.opacity : d.p.ix === v || v === "Position" ? u.position : d.r.ix === v || v === "Rotation" || v === "ADBE Vector Rotation" ? u.rotation : d.s.ix === v || v === "Scale" ? u.scale : d.sk && d.sk.ix === v || v === "Skew" ? u.skew : d.sa && d.sa.ix === v || v === "Skew Axis" ? u.skewAxis : null
            }
            var y = propertyGroupFactory(u, m);
            return h.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", y)), h.transform.mProps.p.setGroupProperty(PropertyInterface("Position", y)), h.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", y)), h.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", y)), h.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", y)), h.transform.mProps.sk && (h.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", y)), h.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", y))), h.transform.op.setGroupProperty(PropertyInterface("Opacity", y)), Object.defineProperties(u, {
              opacity: {
                get: ExpressionPropertyInterface(h.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(h.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(h.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(h.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(h.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(h.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(h.transform.mProps.sa)
              },
              _name: {
                value: d.nm
              }
            }), u.ty = "tr", u.mn = d.mn, u.propertyGroup = m, u
          }

          function l(d, h, m) {
            function u(E) {
              return d.p.ix === E ? u.position : d.s.ix === E ? u.size : null
            }
            var y = propertyGroupFactory(u, m);
            u.propertyIndex = d.ix;
            var v = h.sh.ty === "tm" ? h.sh.prop : h.sh;
            return v.s.setGroupProperty(PropertyInterface("Size", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), Object.defineProperties(u, {
              size: {
                get: ExpressionPropertyInterface(v.s)
              },
              position: {
                get: ExpressionPropertyInterface(v.p)
              },
              _name: {
                value: d.nm
              }
            }), u.mn = d.mn, u
          }

          function p(d, h, m) {
            function u(E) {
              return d.p.ix === E ? u.position : d.r.ix === E ? u.rotation : d.pt.ix === E ? u.points : d.or.ix === E || E === "ADBE Vector Star Outer Radius" ? u.outerRadius : d.os.ix === E ? u.outerRoundness : !d.ir || d.ir.ix !== E && E !== "ADBE Vector Star Inner Radius" ? d.is && d.is.ix === E ? u.innerRoundness : null : u.innerRadius
            }
            var y = propertyGroupFactory(u, m),
              v = h.sh.ty === "tm" ? h.sh.prop : h.sh;
            return u.propertyIndex = d.ix, v.or.setGroupProperty(PropertyInterface("Outer Radius", y)), v.os.setGroupProperty(PropertyInterface("Outer Roundness", y)), v.pt.setGroupProperty(PropertyInterface("Points", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), d.ir && (v.ir.setGroupProperty(PropertyInterface("Inner Radius", y)), v.is.setGroupProperty(PropertyInterface("Inner Roundness", y))), Object.defineProperties(u, {
              position: {
                get: ExpressionPropertyInterface(v.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(v.r)
              },
              points: {
                get: ExpressionPropertyInterface(v.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(v.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(v.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(v.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(v.is)
              },
              _name: {
                value: d.nm
              }
            }), u.mn = d.mn, u
          }

          function c(d, h, m) {
            function u(E) {
              return d.p.ix === E ? u.position : d.r.ix === E ? u.roundness : d.s.ix === E || E === "Size" || E === "ADBE Vector Rect Size" ? u.size : null
            }
            var y = propertyGroupFactory(u, m),
              v = h.sh.ty === "tm" ? h.sh.prop : h.sh;
            return u.propertyIndex = d.ix, v.p.setGroupProperty(PropertyInterface("Position", y)), v.s.setGroupProperty(PropertyInterface("Size", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), Object.defineProperties(u, {
              position: {
                get: ExpressionPropertyInterface(v.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(v.r)
              },
              size: {
                get: ExpressionPropertyInterface(v.s)
              },
              _name: {
                value: d.nm
              }
            }), u.mn = d.mn, u
          }

          function f(d, h, m) {
            function u(E) {
              return d.r.ix === E || E === "Round Corners 1" ? u.radius : null
            }
            var y = propertyGroupFactory(u, m),
              v = h;
            return u.propertyIndex = d.ix, v.rd.setGroupProperty(PropertyInterface("Radius", y)), Object.defineProperties(u, {
              radius: {
                get: ExpressionPropertyInterface(v.rd)
              },
              _name: {
                value: d.nm
              }
            }), u.mn = d.mn, u
          }

          function g(d, h, m) {
            function u(E) {
              return d.c.ix === E || E === "Copies" ? u.copies : d.o.ix === E || E === "Offset" ? u.offset : null
            }
            var y = propertyGroupFactory(u, m),
              v = h;
            return u.propertyIndex = d.ix, v.c.setGroupProperty(PropertyInterface("Copies", y)), v.o.setGroupProperty(PropertyInterface("Offset", y)), Object.defineProperties(u, {
              copies: {
                get: ExpressionPropertyInterface(v.c)
              },
              offset: {
                get: ExpressionPropertyInterface(v.o)
              },
              _name: {
                value: d.nm
              }
            }), u.mn = d.mn, u
          }
          return function (d, h, m) {
            var u;

            function y(v) {
              if (typeof v == "number") return (v = v === void 0 ? 1 : v) === 0 ? m : u[v - 1];
              for (var E = 0, b = u.length; E < b;) {
                if (u[E]._name === v) return u[E];
                E += 1
              }
              return null
            }
            return y.propertyGroup = propertyGroupFactory(y, function () {
              return m
            }), u = e(d, h, y.propertyGroup), y.numProperties = u.length, y._name = "Contents", y
          }
        }(),
        TextExpressionInterface = function (e) {
          var t;

          function r(n) {
            return n === "ADBE Text Document" ? r.sourceText : null
          }
          return Object.defineProperty(r, "sourceText", {
            get: function () {
              e.textProperty.getValue();
              var n = e.textProperty.currentData.t;
              return t && n === t.value || ((t = new String(n)).value = n || new String(n), Object.defineProperty(t, "style", {
                get: function () {
                  return {
                    fillColor: e.textProperty.currentData.fc
                  }
                }
              })), t
            }
          }), r
        };

      function _typeof(e) {
        return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
          return typeof t
        } : function (t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, _typeof(e)
      }
      var FootageInterface = (dataInterfaceFactory = function (e) {
          function t(r) {
            return r === "Outline" ? t.outlineInterface() : null
          }
          return t._name = "Outline", t.outlineInterface = function (r) {
            var n = "",
              i = r.getFootageData();

            function a(s) {
              if (i[s]) return n = s, _typeof(i = i[s]) === "object" ? a : i;
              var o = s.indexOf(n);
              if (o !== -1) {
                var l = parseInt(s.substr(o + n.length), 10);
                return _typeof(i = i[l]) === "object" ? a : i
              }
              return ""
            }
            return function () {
              return n = "", i = r.getFootageData(), a
            }
          }(e), t
        }, function (e) {
          function t(r) {
            return r === "Data" ? t.dataInterface : null
          }
          return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
        }),
        dataInterfaceFactory, interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface
        };

      function getInterface(e) {
        return interfaces[e] || null
      }
      var expressionHelpers = {
        searchExpressions: function (e, t, r) {
          t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
        },
        getSpeedAtTime: function (e) {
          var t = this.getValueAtTime(e),
            r = this.getValueAtTime(e + -.01),
            n = 0;
          if (t.length) {
            var i;
            for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
            n = 100 * Math.sqrt(n)
          } else n = 0;
          return n
        },
        getVelocityAtTime: function (e) {
          if (this.vel !== void 0) return this.vel;
          var t, r, n = -.001,
            i = this.getValueAtTime(e),
            a = this.getValueAtTime(e + n);
          if (i.length)
            for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) t[r] = (a[r] - i[r]) / n;
          else t = (a - i) / n;
          return t
        },
        getValueAtTime: function (e) {
          return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
        },
        getStaticValueAtTime: function () {
          return this.pv
        },
        setGroupProperty: function (e) {
          this.propertyGroup = e
        }
      };

      function addPropertyDecorator() {
        function e(f, g, d) {
          if (!this.k || !this.keyframes) return this.pv;
          f = f ? f.toLowerCase() : "";
          var h, m, u, y, v, E = this.comp.renderedFrame,
            b = this.keyframes,
            I = b[b.length - 1].t;
          if (E <= I) return this.pv;
          if (d ? m = I - (h = g ? Math.abs(I - this.elem.comp.globalData.frameRate * g) : Math.max(0, I - this.elem.data.ip)) : ((!g || g > b.length - 1) && (g = b.length - 1), h = I - (m = b[b.length - 1 - g].t)), f === "pingpong") {
            if (Math.floor((E - m) / h) % 2 != 0) return this.getValueAtTime((h - (E - m) % h + m) / this.comp.globalData.frameRate, 0)
          } else {
            if (f === "offset") {
              var S = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                _ = this.getValueAtTime(I / this.comp.globalData.frameRate, 0),
                A = this.getValueAtTime(((E - m) % h + m) / this.comp.globalData.frameRate, 0),
                D = Math.floor((E - m) / h);
              if (this.pv.length) {
                for (y = (v = new Array(S.length)).length, u = 0; u < y; u += 1) v[u] = (_[u] - S[u]) * D + A[u];
                return v
              }
              return (_ - S) * D + A
            }
            if (f === "continue") {
              var w = this.getValueAtTime(I / this.comp.globalData.frameRate, 0),
                O = this.getValueAtTime((I - .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (y = (v = new Array(w.length)).length, u = 0; u < y; u += 1) v[u] = w[u] + (w[u] - O[u]) * ((E - I) / this.comp.globalData.frameRate) / 5e-4;
                return v
              }
              return w + (E - I) / .001 * (w - O)
            }
          }
          return this.getValueAtTime(((E - m) % h + m) / this.comp.globalData.frameRate, 0)
        }

        function t(f, g, d) {
          if (!this.k) return this.pv;
          f = f ? f.toLowerCase() : "";
          var h, m, u, y, v, E = this.comp.renderedFrame,
            b = this.keyframes,
            I = b[0].t;
          if (E >= I) return this.pv;
          if (d ? m = I + (h = g ? Math.abs(this.elem.comp.globalData.frameRate * g) : Math.max(0, this.elem.data.op - I)) : ((!g || g > b.length - 1) && (g = b.length - 1), h = (m = b[g].t) - I), f === "pingpong") {
            if (Math.floor((I - E) / h) % 2 == 0) return this.getValueAtTime(((I - E) % h + I) / this.comp.globalData.frameRate, 0)
          } else {
            if (f === "offset") {
              var S = this.getValueAtTime(I / this.comp.globalData.frameRate, 0),
                _ = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                A = this.getValueAtTime((h - (I - E) % h + I) / this.comp.globalData.frameRate, 0),
                D = Math.floor((I - E) / h) + 1;
              if (this.pv.length) {
                for (y = (v = new Array(S.length)).length, u = 0; u < y; u += 1) v[u] = A[u] - (_[u] - S[u]) * D;
                return v
              }
              return A - (_ - S) * D
            }
            if (f === "continue") {
              var w = this.getValueAtTime(I / this.comp.globalData.frameRate, 0),
                O = this.getValueAtTime((I + .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (y = (v = new Array(w.length)).length, u = 0; u < y; u += 1) v[u] = w[u] + (w[u] - O[u]) * (I - E) / .001;
                return v
              }
              return w + (w - O) * (I - E) / .001
            }
          }
          return this.getValueAtTime((h - ((I - E) % h + I)) / this.comp.globalData.frameRate, 0)
        }

        function r(f, g) {
          if (!this.k) return this.pv;
          if (f = .5 * (f || .4), (g = Math.floor(g || 5)) <= 1) return this.pv;
          var d, h, m = this.comp.renderedFrame / this.comp.globalData.frameRate,
            u = m - f,
            y = g > 1 ? (m + f - u) / (g - 1) : 1,
            v = 0,
            E = 0;
          for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; v < g;) {
            if (h = this.getValueAtTime(u + v * y), this.pv.length)
              for (E = 0; E < this.pv.length; E += 1) d[E] += h[E];
            else d += h;
            v += 1
          }
          if (this.pv.length)
            for (E = 0; E < this.pv.length; E += 1) d[E] /= g;
          else d /= g;
          return d
        }

        function n(f) {
          this._transformCachingAtTime || (this._transformCachingAtTime = {
            v: new Matrix
          });
          var g = this._transformCachingAtTime.v;
          if (g.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
            var d = this.a.getValueAtTime(f);
            g.translate(-d[0] * this.a.mult, -d[1] * this.a.mult, d[2] * this.a.mult)
          }
          if (this.appliedTransformations < 2) {
            var h = this.s.getValueAtTime(f);
            g.scale(h[0] * this.s.mult, h[1] * this.s.mult, h[2] * this.s.mult)
          }
          if (this.sk && this.appliedTransformations < 3) {
            var m = this.sk.getValueAtTime(f),
              u = this.sa.getValueAtTime(f);
            g.skewFromAxis(-m * this.sk.mult, u * this.sa.mult)
          }
          if (this.r && this.appliedTransformations < 4) {
            var y = this.r.getValueAtTime(f);
            g.rotate(-y * this.r.mult)
          } else if (!this.r && this.appliedTransformations < 4) {
            var v = this.rz.getValueAtTime(f),
              E = this.ry.getValueAtTime(f),
              b = this.rx.getValueAtTime(f),
              I = this.or.getValueAtTime(f);
            g.rotateZ(-v * this.rz.mult).rotateY(E * this.ry.mult).rotateX(b * this.rx.mult).rotateZ(-I[2] * this.or.mult).rotateY(I[1] * this.or.mult).rotateX(I[0] * this.or.mult)
          }
          if (this.data.p && this.data.p.s) {
            var S = this.px.getValueAtTime(f),
              _ = this.py.getValueAtTime(f);
            if (this.data.p.z) {
              var A = this.pz.getValueAtTime(f);
              g.translate(S * this.px.mult, _ * this.py.mult, -A * this.pz.mult)
            } else g.translate(S * this.px.mult, _ * this.py.mult, 0)
          } else {
            var D = this.p.getValueAtTime(f);
            g.translate(D[0] * this.p.mult, D[1] * this.p.mult, -D[2] * this.p.mult)
          }
          return g
        }

        function i() {
          return this.v.clone(new Matrix)
        }
        var a = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (f, g, d) {
          var h = a(f, g, d);
          return h.dynamicProperties.length ? h.getValueAtTime = n.bind(h) : h.getValueAtTime = i.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h
        };
        var s = PropertyFactory.getProp;
        PropertyFactory.getProp = function (f, g, d, h, m) {
          var u = s(f, g, d, h, m);
          u.kf ? u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u) : u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u), u.setGroupProperty = expressionHelpers.setGroupProperty, u.loopOut = e, u.loopIn = t, u.smooth = r, u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u), u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u), u.numKeys = g.a === 1 ? g.k.length : 0, u.propertyIndex = g.ix;
          var y = 0;
          return d !== 0 && (y = createTypedArray("float32", g.a === 1 ? g.k[0].s.length : g.k.length)), u._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: y
          }, expressionHelpers.searchExpressions(f, g, u), u.k && m.addDynamicProperty(u), u
        };
        var o = ShapePropertyFactory.getConstructorFunction(),
          l = ShapePropertyFactory.getKeyframedConstructorFunction();

        function p() {}
        p.prototype = {
          vertices: function (f, g) {
            this.k && this.getValue();
            var d, h = this.v;
            g !== void 0 && (h = this.getValueAtTime(g, 0));
            var m = h._length,
              u = h[f],
              y = h.v,
              v = createSizedArray(m);
            for (d = 0; d < m; d += 1) v[d] = f === "i" || f === "o" ? [u[d][0] - y[d][0], u[d][1] - y[d][1]] : [u[d][0], u[d][1]];
            return v
          },
          points: function (f) {
            return this.vertices("v", f)
          },
          inTangents: function (f) {
            return this.vertices("i", f)
          },
          outTangents: function (f) {
            return this.vertices("o", f)
          },
          isClosed: function () {
            return this.v.c
          },
          pointOnPath: function (f, g) {
            var d = this.v;
            g !== void 0 && (d = this.getValueAtTime(g, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
            for (var h, m = this._segmentsLength, u = m.lengths, y = m.totalLength * f, v = 0, E = u.length, b = 0; v < E;) {
              if (b + u[v].addedLength > y) {
                var I = v,
                  S = d.c && v === E - 1 ? 0 : v + 1,
                  _ = (y - b) / u[v].addedLength;
                h = bez.getPointInSegment(d.v[I], d.v[S], d.o[I], d.i[S], _, u[v]);
                break
              }
              b += u[v].addedLength, v += 1
            }
            return h || (h = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), h
          },
          vectorOnPath: function (f, g, d) {
            f == 1 ? f = this.v.c : f == 0 && (f = .999);
            var h = this.pointOnPath(f, g),
              m = this.pointOnPath(f + .001, g),
              u = m[0] - h[0],
              y = m[1] - h[1],
              v = Math.sqrt(Math.pow(u, 2) + Math.pow(y, 2));
            return v === 0 ? [0, 0] : d === "tangent" ? [u / v, y / v] : [-y / v, u / v]
          },
          tangentOnPath: function (f, g) {
            return this.vectorOnPath(f, g, "tangent")
          },
          normalOnPath: function (f, g) {
            return this.vectorOnPath(f, g, "normal")
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([p], o), extendPrototype([p], l), l.prototype.getValueAtTime = function (f) {
          return this._cachingAtTime || (this._cachingAtTime = {
            shapeValue: shapePool.clone(this.pv),
            lastIndex: 0,
            lastTime: initialDefaultFrame
          }), f *= this.elem.globalData.frameRate, (f -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f, this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
        }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var c = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (f, g, d, h, m) {
          var u = c(f, g, d, h, m);
          return u.propertyIndex = g.ix, u.lock = !1, d === 3 ? expressionHelpers.searchExpressions(f, g.pt, u) : d === 4 && expressionHelpers.searchExpressions(f, g.ks, u), u.k && f.addDynamicProperty(u), u
        }
      }

      function initialize$1() {
        addPropertyDecorator()
      }

      function addDecorator() {
        TextProperty.prototype.getExpressionValue = function (e, t) {
          var r = this.calculateExpression(t);
          if (e.t !== r) {
            var n = {};
            return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
          }
          return e
        }, TextProperty.prototype.searchProperty = function () {
          var e = this.searchKeyframes(),
            t = this.searchExpressions();
          return this.kf = e || t, this.kf
        }, TextProperty.prototype.searchExpressions = function () {
          return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
        }
      }

      function initialize() {
        addDecorator()
      }

      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function (e, t) {
          var r, n, i = createNS("feMerge");
          for (i.setAttribute("result", e), n = 0; n < t.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
          return i
        }
      };
      var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

      function SVGTintFilter(e, t, r, n, i) {
        this.filterManager = t;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
        var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
        e.appendChild(s)
      }

      function SVGFillFilter(e, t, r, n) {
        this.filterManager = t;
        var i = createNS("feColorMatrix");
        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), e.appendChild(i), this.matrixFilter = i
      }

      function SVGStrokeEffect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
      }

      function SVGTritoneFilter(e, t, r, n) {
        this.filterManager = t;
        var i = createNS("feColorMatrix");
        i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
        var a = createNS("feComponentTransfer");
        a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
        var s = createNS("feFuncR");
        s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
        var o = createNS("feFuncG");
        o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
        var l = createNS("feFuncB");
        l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
      }

      function SVGProLevelsFilter(e, t, r, n) {
        this.filterManager = t;
        var i = this.filterManager.effectElements,
          a = createNS("feComponentTransfer");
        (i[10].p.k || i[10].p.v !== 0 || i[11].p.k || i[11].p.v !== 1 || i[12].p.k || i[12].p.v !== 1 || i[13].p.k || i[13].p.v !== 0 || i[14].p.k || i[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || i[17].p.v !== 0 || i[18].p.k || i[18].p.v !== 1 || i[19].p.k || i[19].p.v !== 1 || i[20].p.k || i[20].p.v !== 0 || i[21].p.k || i[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || i[24].p.v !== 0 || i[25].p.k || i[25].p.v !== 1 || i[26].p.k || i[26].p.v !== 1 || i[27].p.k || i[27].p.v !== 0 || i[28].p.k || i[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || i[31].p.v !== 0 || i[32].p.k || i[32].p.v !== 1 || i[33].p.k || i[33].p.v !== 1 || i[34].p.k || i[34].p.v !== 0 || i[35].p.k || i[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || i[3].p.v !== 0 || i[4].p.k || i[4].p.v !== 1 || i[5].p.k || i[5].p.v !== 1 || i[6].p.k || i[6].p.v !== 0 || i[7].p.k || i[7].p.v !== 1) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
      }

      function SVGDropShadowEffect(e, t, r, n, i) {
        var a = t.container.globalData.renderConfig.filterSize,
          s = t.data.fs || a;
        e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
        var o = createNS("feGaussianBlur");
        o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
        var l = createNS("feOffset");
        l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
        var p = createNS("feFlood");
        p.setAttribute("flood-color", "#00ff00"), p.setAttribute("flood-opacity", "1"), p.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = p, e.appendChild(p);
        var c = createNS("feComposite");
        c.setAttribute("in", n + "_drop_shadow_3"), c.setAttribute("in2", n + "_drop_shadow_2"), c.setAttribute("operator", "in"), c.setAttribute("result", n + "_drop_shadow_4"), e.appendChild(c);
        var f = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
        e.appendChild(f)
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            n = this.filterManager.effectElements[2].p.v / 100;
          this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
        }
      }, SVGFillFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[2].p.v,
            r = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
        }
      }, SVGStrokeEffect.prototype.initialize = function () {
        var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (this.filterManager.effectElements[1].p.v === 1 ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
          p: e,
          m: r
        });
        if (this.filterManager.effectElements[10].p.v === 3) {
          var a = createNS("mask"),
            s = createElementID();
          a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
          var o = createNS("g");
          for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
          this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
          if (this.filterManager.effectElements[10].p.v === 2)
            for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
          this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = t
      }, SVGStrokeEffect.prototype.renderFrame = function (e) {
        var t;
        this.initialized || this.initialize();
        var r, n, i = this.paths.length;
        for (t = 0; t < i; t += 1)
          if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
            var a;
            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
              var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                l = n.getTotalLength();
              a = "0 0 0 " + l * s + " ";
              var p, c = l * (o - s),
                f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                g = Math.floor(c / f);
              for (p = 0; p < g; p += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
              a += "0 " + 10 * l + " 0 0"
            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
            n.setAttribute("stroke-dasharray", a)
          } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
          var d = this.filterManager.effectElements[3].p.v;
          this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
        }
      }, SVGTritoneFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            n = this.filterManager.effectElements[2].p.v,
            i = n[0] + " " + r[0] + " " + t[0],
            a = n[1] + " " + r[1] + " " + t[1],
            s = n[2] + " " + r[2] + " " + t[2];
          this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
        }
      }, SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
        var r = createNS(e);
        return r.setAttribute("type", "table"), t.appendChild(r), r
      }, SVGProLevelsFilter.prototype.getTableValue = function (e, t, r, n, i) {
        for (var a, s, o = 0, l = Math.min(e, t), p = Math.max(e, t), c = Array.call(null, {
            length: 256
          }), f = 0, g = i - n, d = t - e; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? i : n : a >= p ? d < 0 ? n : i : n + g * Math.pow((a - e) / d, 1 / r), c[f] = s, f += 1, o += 256 / 255;
        return c.join(" ")
      }, SVGProLevelsFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t, r = this.filterManager.effectElements;
          this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
        }
      }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
            var t = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
          }
          if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
            var r = this.filterManager.effectElements[3].p.v,
              n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
              i = r * Math.cos(n),
              a = r * Math.sin(n);
            this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
          }
        }
      };
      var _svgMatteSymbols = [];

      function SVGMatte3Effect(e, t, r) {
        this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
      }

      function SVGGaussianBlurEffect(e, t, r, n) {
        e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
        var i = createNS("feGaussianBlur");
        i.setAttribute("result", n), e.appendChild(i), this.feGaussianBlur = i
      }

      function TransformEffect() {}

      function SVGTransformEffect(e, t) {
        this.init(t)
      }

      function CVTransformEffect(e) {
        this.init(e)
      }
      return SVGMatte3Effect.prototype.findSymbol = function (e) {
        for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
          if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
          t += 1
        }
        return null
      }, SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
        var r = e.layerElement.parentNode;
        if (r) {
          for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
          a <= s - 2 && (n = i[a + 1]);
          var o = createNS("use");
          o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o)
        }
      }, SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
        if (!this.findSymbol(t)) {
          var r = createElementID(),
            n = createNS("mask");
          n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
          var i = e.globalData.defs;
          i.appendChild(n);
          var a = createNS("symbol");
          a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
          var s = createNS("use");
          s.setAttribute("href", "#" + r), n.appendChild(s), t.data.hd = !1, t.show()
        }
        e.setMatte(t.layerId)
      }, SVGMatte3Effect.prototype.initialize = function () {
        for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
        this.initialized = !0
      }, SVGMatte3Effect.prototype.renderFrame = function () {
        this.initialized || this.initialize()
      }, SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
        if (e || this.filterManager._mdf) {
          var t = .3 * this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            n = r == 3 ? 0 : t,
            i = r == 2 ? 0 : t;
          this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
          var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", a)
        }
      }, TransformEffect.prototype.init = function (e) {
        this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
      }, TransformEffect.prototype.renderFrame = function (e) {
        if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
          var t = this.effectsManager.effectElements,
            r = t[0].p.v,
            n = t[1].p.v,
            i = t[2].p.v === 1,
            a = t[3].p.v,
            s = i ? a : t[4].p.v,
            o = t[5].p.v,
            l = t[6].p.v,
            p = t[7].p.v;
          this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-p * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
        }
      }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
    })
  });
  var hT = T((dK, fT) => {
    "use strict";
    var mU = Pe(),
      on = uT(),
      gU = cT();
    mU.define("lottie", fT.exports = function () {
      return {
        lottie: gU,
        createInstance: on.createInstance,
        cleanupElement: on.cleanupElement,
        init: on.init,
        destroy: on.destroy,
        ready: on.ready
      }
    })
  });
  var yT = T(Vl => {
    "use strict";
    Object.defineProperty(Vl, "__esModule", {
      value: !0
    });

    function yU(e, t) {
      for (var r in t) Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      })
    }
    yU(Vl, {
      createInstance: function () {
        return dT
      },
      destroy: function () {
        return IU
      },
      destroyInstance: function () {
        return mT
      },
      getInstance: function () {
        return bU
      },
      init: function () {
        return gT
      },
      ready: function () {
        return _U
      },
      setLoadHandler: function () {
        return TU
      }
    });
    var Nl;
    async function vU() {
      let {
        Application: e
      } = await import("https://unpkg.com/@splinetool/runtime/build/runtime.js");
      Nl = e
    }
    var un = new Map,
      ln = new Map,
      EU = new Event("w-spline-load"),
      kl = class {
        spline;
        container;
        destroy() {
          this.container && (un.delete(this.container), ln.delete(this.container)), this.spline ? .dispose ? .()
        }
        async load(t, r) {
          Nl || await vU();
          let n = t.querySelector("canvas"),
            i = new Nl(n);
          await i.load(r), un.set(t, this), this.container = t, this.spline = i, t.dispatchEvent(EU), ln.has(t) && (ln.get(t)(i), ln.delete(t))
        }
      },
      pT = () => Array.from(document.querySelectorAll('[data-animation-type="spline"]')),
      dT = async (e, t) => {
        let r = un.get(e);
        return r == null && (r = new kl), await r.load(e, t), r
      }, mT = e => {
        un.get(e) ? .destroy()
      }, bU = e => un.get(e), TU = (e, t) => {
        ln.set(e, t)
      }, gT = () => {
        pT().forEach(e => {
          let t = e.getAttribute("data-spline-url");
          t && dT(e, t)
        })
      }, IU = () => {
        pT().forEach(mT)
      }, _U = gT
  });
  var ET = T((gK, vT) => {
    "use strict";
    var SU = Pe(),
      Qt = yT();
    SU.define("spline", vT.exports = function () {
      return {
        createInstance: Qt.createInstance,
        destroyInstance: Qt.destroyInstance,
        getInstance: Qt.getInstance,
        setLoadHandler: Qt.setLoadHandler,
        init: Qt.init,
        destroy: Qt.destroy,
        ready: Qt.ready
      }
    })
  });
  var bT = T(ql => {
    "use strict";
    Object.defineProperty(ql, "__esModule", {
      value: !0
    });
    Object.defineProperty(ql, "default", {
      enumerable: !0,
      get: function () {
        return AU
      }
    });

    function AU(e, t, r, n, i, a, s, o, l, p, c, f, g) {
      return function (d) {
        e(d);
        var h = d.form,
          m = {
            name: h.attr("data-name") || h.attr("name") || "Untitled Form",
            pageId: h.attr("data-wf-page-id") || "",
            elementId: h.attr("data-wf-element-id") || "",
            domain: f("html").attr("data-wf-domain") || null,
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(h.html()),
            trackingCookies: n()
          };
        let u = h.attr("data-wf-flow");
        u && (m.wfFlow = u), i(d);
        var y = a(h, m.fields);
        if (y) return s(y);
        if (m.fileUploads = o(h), l(d), !p) {
          c(d);
          return
        }
        f.ajax({
          url: g,
          type: "POST",
          data: m,
          dataType: "json",
          crossDomain: !0
        }).done(function (v) {
          v && v.code === 200 && (d.success = !0), c(d)
        }).fail(function () {
          c(d)
        })
      }
    }
  });
  var IT = T((vK, TT) => {
    "use strict";
    var Ki = Pe(),
      xU = (e, t, r, n) => {
        let i = document.createElement("div");
        t.appendChild(i), turnstile.render(i, {
          sitekey: e,
          callback: function (a) {
            r(a)
          },
          "error-callback": function () {
            n()
          }
        })
      };
    Ki.define("forms", TT.exports = function (e, t) {
      let r = "TURNSTILE_LOADED";
      var n = {},
        i = e(document),
        a, s = window.location,
        o = window.XDomainRequest && !window.atob,
        l = ".w-form",
        p, c = /e(-)?mail/i,
        f = /^\S+@\S+$/,
        g = window.alert,
        d = Ki.env(),
        h, m, u;
      let y = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
        v;
      var E = /list-manage[1-9]?.com/i,
        b = t.debounce(function () {
          g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
        }, 100);
      n.ready = n.design = n.preview = function () {
        S(), I(), !d && !h && A()
      };

      function I() {
        p = e("html").attr("data-wf-site"), m = "https://webflow.com/api/v1/form/" + p, o && m.indexOf("https://webflow.com") >= 0 && (m = m.replace("https://webflow.com", "https://formdata.webflow.com")), u = `${m}/signFile`, a = e(l + " form"), a.length && a.each(_)
      }

      function S() {
        y && (v = document.createElement("script"), v.src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(v), v.onload = () => {
          i.trigger(r)
        })
      }

      function _(P, F) {
        var H = e(F),
          j = e.data(F, l);
        j || (j = e.data(F, l, {
          form: H
        })), D(j);
        var J = H.closest("div.w-form");
        j.done = J.find("> .w-form-done"), j.fail = J.find("> .w-form-fail"), j.fileUploads = J.find(".w-file-upload"), j.fileUploads.each(function (ee) {
          Q(ee, j)
        }), y && (j.wait = !1, w(j), i.on(typeof turnstile < "u" ? "ready" : r, function () {
          xU(y, F, ee => {
            j.turnstileToken = ee, D(j)
          }, () => {
            w(j)
          })
        }));
        var Z = j.form.attr("aria-label") || j.form.attr("data-name") || "Form";
        j.done.attr("aria-label") || j.form.attr("aria-label", Z), j.done.attr("tabindex", "-1"), j.done.attr("role", "region"), j.done.attr("aria-label") || j.done.attr("aria-label", Z + " success"), j.fail.attr("tabindex", "-1"), j.fail.attr("role", "region"), j.fail.attr("aria-label") || j.fail.attr("aria-label", Z + " failure");
        var ie = j.action = H.attr("action");
        if (j.handler = null, j.redirect = H.attr("data-redirect"), E.test(ie)) {
          j.handler = re;
          return
        }
        if (!ie) {
          if (p) {
            j.handler = (() => {
              let ee = bT().default;
              return ee(D, s, Ki, L, B, O, g, V, w, p, x, e, m)
            })();
            return
          }
          b()
        }
      }

      function A() {
        h = !0, i.on("submit", l + " form", function (ee) {
          var R = e.data(this, l);
          R.handler && (R.evt = ee, R.handler(R))
        });
        let P = ".w-checkbox-input",
          F = ".w-radio-input",
          H = "w--redirected-checked",
          j = "w--redirected-focus",
          J = "w--redirected-focus-visible",
          Z = ":focus-visible, [data-wf-focus-visible]",
          ie = [
            ["checkbox", P],
            ["radio", F]
          ];
        i.on("change", l + ' form input[type="checkbox"]:not(' + P + ")", ee => {
          e(ee.target).siblings(P).toggleClass(H)
        }), i.on("change", l + ' form input[type="radio"]', ee => {
          e(`input[name="${ee.target.name}"]:not(${P})`).map(($, ne) => e(ne).siblings(F).removeClass(H));
          let R = e(ee.target);
          R.hasClass("w-radio-input") || R.siblings(F).addClass(H)
        }), ie.forEach(([ee, R]) => {
          i.on("focus", l + ` form input[type="${ee}"]:not(` + R + ")", $ => {
            e($.target).siblings(R).addClass(j), e($.target).filter(Z).siblings(R).addClass(J)
          }), i.on("blur", l + ` form input[type="${ee}"]:not(` + R + ")", $ => {
            e($.target).siblings(R).removeClass(`${j} ${J}`)
          })
        })
      }

      function D(P) {
        var F = P.btn = P.form.find(':input[type="submit"]');
        P.wait = P.btn.attr("data-wait") || null, P.success = !1, F.prop("disabled", !!(y && !P.turnstileToken)), P.label && F.val(P.label)
      }

      function w(P) {
        var F = P.btn,
          H = P.wait;
        F.prop("disabled", !0), H && (P.label = F.val(), F.val(H))
      }

      function O(P, F) {
        var H = null;
        return F = F || {}, P.find(':input:not([type="submit"]):not([type="file"])').each(function (j, J) {
          var Z = e(J),
            ie = Z.attr("type"),
            ee = Z.attr("data-name") || Z.attr("name") || "Field " + (j + 1);
          ee = encodeURIComponent(ee);
          var R = Z.val();
          if (ie === "checkbox") R = Z.is(":checked");
          else if (ie === "radio") {
            if (F[ee] === null || typeof F[ee] == "string") return;
            R = P.find('input[name="' + Z.attr("name") + '"]:checked').val() || null
          }
          typeof R == "string" && (R = e.trim(R)), F[ee] = R, H = H || G(Z, ie, ee, R)
        }), H
      }

      function V(P) {
        var F = {};
        return P.find(':input[type="file"]').each(function (H, j) {
          var J = e(j),
            Z = J.attr("data-name") || J.attr("name") || "File " + (H + 1),
            ie = J.attr("data-value");
          typeof ie == "string" && (ie = e.trim(ie)), F[Z] = ie
        }), F
      }
      let M = {
        _mkto_trk: "marketo"
      };

      function L() {
        return document.cookie.split("; ").reduce(function (F, H) {
          let j = H.split("="),
            J = j[0];
          if (J in M) {
            let Z = M[J],
              ie = j.slice(1).join("=");
            F[Z] = ie
          }
          return F
        }, {})
      }

      function G(P, F, H, j) {
        var J = null;
        return F === "password" ? J = "Passwords cannot be submitted." : P.attr("required") ? j ? c.test(P.attr("type")) && (f.test(j) || (J = "Please enter a valid email address for: " + H)) : J = "Please fill out the required field: " + H : H === "g-recaptcha-response" && !j && (J = "Please confirm you\u2019re not a robot."), J
      }

      function z(P) {
        B(P), x(P)
      }

      function re(P) {
        D(P);
        var F = P.form,
          H = {};
        if (/^https/.test(s.href) && !/^https/.test(P.action)) {
          F.attr("method", "post");
          return
        }
        B(P);
        var j = O(F, H);
        if (j) return g(j);
        w(P);
        var J;
        t.each(H, function (R, $) {
          c.test($) && (H.EMAIL = R), /^((full[ _-]?)?name)$/i.test($) && (J = R), /^(first[ _-]?name)$/i.test($) && (H.FNAME = R), /^(last[ _-]?name)$/i.test($) && (H.LNAME = R)
        }), J && !H.FNAME && (J = J.split(" "), H.FNAME = J[0], H.LNAME = H.LNAME || J[1]);
        var Z = P.action.replace("/post?", "/post-json?") + "&c=?",
          ie = Z.indexOf("u=") + 2;
        ie = Z.substring(ie, Z.indexOf("&", ie));
        var ee = Z.indexOf("id=") + 3;
        ee = Z.substring(ee, Z.indexOf("&", ee)), H["b_" + ie + "_" + ee] = "", e.ajax({
          url: Z,
          data: H,
          dataType: "jsonp"
        }).done(function (R) {
          P.success = R.result === "success" || /already/.test(R.msg), P.success || console.info("MailChimp error: " + R.msg), x(P)
        }).fail(function () {
          x(P)
        })
      }

      function x(P) {
        var F = P.form,
          H = P.redirect,
          j = P.success;
        if (j && H) {
          Ki.location(H);
          return
        }
        P.done.toggle(j), P.fail.toggle(!j), j ? P.done.focus() : P.fail.focus(), F.toggle(!j), D(P)
      }

      function B(P) {
        P.evt && P.evt.preventDefault(), P.evt = null
      }

      function Q(P, F) {
        if (!F.fileUploads || !F.fileUploads[P]) return;
        var H, j = e(F.fileUploads[P]),
          J = j.find("> .w-file-upload-default"),
          Z = j.find("> .w-file-upload-uploading"),
          ie = j.find("> .w-file-upload-success"),
          ee = j.find("> .w-file-upload-error"),
          R = J.find(".w-file-upload-input"),
          $ = J.find(".w-file-upload-label"),
          ne = $.children(),
          X = ee.find(".w-file-upload-error-msg"),
          fe = ie.find(".w-file-upload-file"),
          ye = ie.find(".w-file-remove-link"),
          be = fe.find(".w-file-upload-file-name"),
          C = X.attr("data-w-size-error"),
          q = X.attr("data-w-type-error"),
          U = X.attr("data-w-generic-error");
        if (d || $.on("click keydown", function (se) {
            se.type === "keydown" && se.which !== 13 && se.which !== 32 || (se.preventDefault(), R.click())
          }), $.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), ye.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), d) R.on("click", function (se) {
          se.preventDefault()
        }), $.on("click", function (se) {
          se.preventDefault()
        }), ne.on("click", function (se) {
          se.preventDefault()
        });
        else {
          ye.on("click keydown", function (se) {
            if (se.type === "keydown") {
              if (se.which !== 13 && se.which !== 32) return;
              se.preventDefault()
            }
            R.removeAttr("data-value"), R.val(""), be.html(""), J.toggle(!0), ie.toggle(!1), $.focus()
          }), R.on("change", function (se) {
            H = se.target && se.target.files && se.target.files[0], H && (J.toggle(!1), ee.toggle(!1), Z.toggle(!0), Z.focus(), be.text(H.name), oe() || w(F), F.fileUploads[P].uploading = !0, N(H, Y))
          });
          var W = $.outerHeight();
          R.height(W), R.width(1)
        }

        function K(se) {
          var te = se.responseJSON && se.responseJSON.msg,
            ue = U;
          typeof te == "string" && te.indexOf("InvalidFileTypeError") === 0 ? ue = q : typeof te == "string" && te.indexOf("MaxFileSizeError") === 0 && (ue = C), X.text(ue), R.removeAttr("data-value"), R.val(""), Z.toggle(!1), J.toggle(!0), ee.toggle(!0), ee.focus(), F.fileUploads[P].uploading = !1, oe() || D(F)
        }

        function Y(se, te) {
          if (se) return K(se);
          var ue = te.fileName,
            ce = te.postData,
            ve = te.fileId,
            Ge = te.s3Url;
          R.attr("data-value", ve), k(Ge, ce, H, ue, ae)
        }

        function ae(se) {
          if (se) return K(se);
          Z.toggle(!1), ie.css("display", "inline-block"), ie.focus(), F.fileUploads[P].uploading = !1, oe() || D(F)
        }

        function oe() {
          var se = F.fileUploads && F.fileUploads.toArray() || [];
          return se.some(function (te) {
            return te.uploading
          })
        }
      }

      function N(P, F) {
        var H = new URLSearchParams({
          name: P.name,
          size: P.size
        });
        e.ajax({
          type: "GET",
          url: `${u}?${H}`,
          crossDomain: !0
        }).done(function (j) {
          F(null, j)
        }).fail(function (j) {
          F(j)
        })
      }

      function k(P, F, H, j, J) {
        var Z = new FormData;
        for (var ie in F) Z.append(ie, F[ie]);
        Z.append("file", H, j), e.ajax({
          type: "POST",
          url: P,
          data: Z,
          processData: !1,
          contentType: !1
        }).done(function () {
          J(null)
        }).fail(function (ee) {
          J(ee)
        })
      }
      return n
    })
  });
  var AT = T((EK, ST) => {
    "use strict";
    var Gl = Pe(),
      _T = "w-condition-invisible",
      CU = "." + _T;

    function PU(e) {
      return e.filter(function (t) {
        return !fn(t)
      })
    }

    function fn(e) {
      return !!(e.$el && e.$el.closest(CU).length)
    }

    function Bl(e, t) {
      for (var r = e; r >= 0; r--)
        if (!fn(t[r])) return r;
      return -1
    }

    function Ul(e, t) {
      for (var r = e; r <= t.length - 1; r++)
        if (!fn(t[r])) return r;
      return -1
    }

    function OU(e, t) {
      return Bl(e - 1, t) === -1
    }

    function wU(e, t) {
      return Ul(e + 1, t) === -1
    }

    function cn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t)
    }

    function RU(e, t, r, n) {
      var i = r.tram,
        a = Array.isArray,
        s = "w-lightbox",
        o = s + "-",
        l = /(^|\s+)/g,
        p = [],
        c, f, g, d = [];

      function h(k, P) {
        return p = a(k) ? k : [k], f || h.build(), PU(p).length > 1 && (f.items = f.empty, p.forEach(function (F, H) {
          var j = Q("thumbnail"),
            J = Q("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(j);
          cn(J, `show item ${H+1} of ${p.length}`), fn(F) && J.addClass(_T), f.items = f.items.add(J), w(F.thumbnailUrl || F.url, function (Z) {
            Z.prop("width") > Z.prop("height") ? z(Z, "wide") : z(Z, "tall"), j.append(z(Z, "thumbnail-image"))
          })
        }), f.strip.empty().append(f.items), z(f.content, "group")), i(re(f.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
          opacity: 1
        }), z(f.html, "noscroll"), h.show(P || 0)
      }
      h.build = function () {
        return h.destroy(), f = {
          html: r(t.documentElement),
          empty: r()
        }, f.arrowLeft = Q("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.arrowRight = Q("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.close = Q("control close").attr("role", "button"), cn(f.arrowLeft, "previous image"), cn(f.arrowRight, "next image"), cn(f.close, "close lightbox"), f.spinner = Q("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), f.strip = Q("strip").attr("role", "tablist"), g = new M(f.spinner, L("hide")), f.content = Q("content").append(f.spinner, f.arrowLeft, f.arrowRight, f.close), f.container = Q("container").append(f.content, f.strip), f.lightbox = Q("backdrop hide").append(f.container), f.strip.on("click", G("item"), E), f.content.on("swipe", b).on("click", G("left"), u).on("click", G("right"), y).on("click", G("close"), v).on("click", G("image, caption"), y), f.container.on("click", G("view"), v).on("dragstart", G("img"), S), f.lightbox.on("keydown", _).on("focusin", I), r(n).append(f.lightbox), h
      }, h.destroy = function () {
        f && (re(f.html, "noscroll"), f.lightbox.remove(), f = void 0)
      }, h.show = function (k) {
        if (k !== c) {
          var P = p[k];
          if (!P) return h.hide();
          if (fn(P)) {
            if (k < c) {
              var F = Bl(k - 1, p);
              k = F > -1 ? F : k
            } else {
              var H = Ul(k + 1, p);
              k = H > -1 ? H : k
            }
            P = p[k]
          }
          var j = c;
          c = k, f.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), g.show();
          var J = P.html && N(P.width, P.height) || P.url;
          return w(J, function (Z) {
            if (k !== c) return;
            var ie = Q("figure", "figure").append(z(Z, "image")),
              ee = Q("frame").append(ie),
              R = Q("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ee),
              $, ne;
            P.html && ($ = r(P.html), ne = $.is("iframe"), ne && $.on("load", X), ie.append(z($, "embed"))), P.caption && ie.append(Q("caption", "figcaption").text(P.caption)), f.spinner.before(R), ne || X();

            function X() {
              if (f.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), g.hide(), k !== c) {
                R.remove();
                return
              }
              let fe = OU(k, p);
              x(f.arrowLeft, "inactive", fe), B(f.arrowLeft, fe), fe && f.arrowLeft.is(":focus") && f.arrowRight.focus();
              let ye = wU(k, p);
              if (x(f.arrowRight, "inactive", ye), B(f.arrowRight, ye), ye && f.arrowRight.is(":focus") && f.arrowLeft.focus(), f.view ? (i(f.view).add("opacity .3s").start({
                  opacity: 0
                }).then(O(f.view)), i(R).add("opacity .3s").add("transform .3s").set({
                  x: k > j ? "80px" : "-80px"
                }).start({
                  opacity: 1,
                  x: 0
                })) : R.css("opacity", 1), f.view = R, f.view.prop("tabIndex", 0), f.items) {
                re(f.items, "active"), f.items.removeAttr("aria-selected");
                var be = f.items.eq(k);
                z(be, "active"), be.attr("aria-selected", !0), V(be)
              }
            }
          }), f.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), d.length === 0 && (r("body").children().each(function () {
            r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (d.push({
              node: r(this),
              hidden: r(this).attr("aria-hidden"),
              tabIndex: r(this).attr("tabIndex")
            }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
          }), f.close.focus()), h
        }
      }, h.hide = function () {
        return i(f.lightbox).add("opacity .3s").start({
          opacity: 0
        }).then(D), h
      }, h.prev = function () {
        var k = Bl(c - 1, p);
        k > -1 && h.show(k)
      }, h.next = function () {
        var k = Ul(c + 1, p);
        k > -1 && h.show(k)
      };

      function m(k) {
        return function (P) {
          this === P.target && (P.stopPropagation(), P.preventDefault(), k())
        }
      }
      var u = m(h.prev),
        y = m(h.next),
        v = m(h.hide),
        E = function (k) {
          var P = r(this).index();
          k.preventDefault(), h.show(P)
        },
        b = function (k, P) {
          k.preventDefault(), P.direction === "left" ? h.next() : P.direction === "right" && h.prev()
        },
        I = function () {
          this.focus()
        };

      function S(k) {
        k.preventDefault()
      }

      function _(k) {
        var P = k.keyCode;
        P === 27 || A(P, "close") ? h.hide() : P === 37 || A(P, "left") ? h.prev() : P === 39 || A(P, "right") ? h.next() : A(P, "item") && r(":focus").click()
      }

      function A(k, P) {
        if (k !== 13 && k !== 32) return !1;
        var F = r(":focus").attr("class"),
          H = L(P).trim();
        return F.includes(H)
      }

      function D() {
        f && (f.strip.scrollLeft(0).empty(), re(f.html, "noscroll"), z(f.lightbox, "hide"), f.view && f.view.remove(), re(f.content, "group"), z(f.arrowLeft, "inactive"), z(f.arrowRight, "inactive"), c = f.view = void 0, d.forEach(function (k) {
          var P = k.node;
          P && (k.hidden ? P.attr("aria-hidden", k.hidden) : P.removeAttr("aria-hidden"), k.tabIndex ? P.attr("tabIndex", k.tabIndex) : P.removeAttr("tabIndex"))
        }), d = [], r(".active-lightbox").removeClass("active-lightbox").focus())
      }

      function w(k, P) {
        var F = Q("img", "img");
        return F.one("load", function () {
          P(F)
        }), F.attr("src", k), F
      }

      function O(k) {
        return function () {
          k.remove()
        }
      }

      function V(k) {
        var P = k.get(0),
          F = f.strip.get(0),
          H = P.offsetLeft,
          j = P.clientWidth,
          J = F.scrollLeft,
          Z = F.clientWidth,
          ie = F.scrollWidth - Z,
          ee;
        H < J ? ee = Math.max(0, H + j - Z) : H + j > Z + J && (ee = Math.min(H, ie)), ee != null && i(f.strip).add("scroll-left 500ms").start({
          "scroll-left": ee
        })
      }

      function M(k, P, F) {
        this.$element = k, this.className = P, this.delay = F || 200, this.hide()
      }
      M.prototype.show = function () {
        var k = this;
        k.timeoutId || (k.timeoutId = setTimeout(function () {
          k.$element.removeClass(k.className), delete k.timeoutId
        }, k.delay))
      }, M.prototype.hide = function () {
        var k = this;
        if (k.timeoutId) {
          clearTimeout(k.timeoutId), delete k.timeoutId;
          return
        }
        k.$element.addClass(k.className)
      };

      function L(k, P) {
        return k.replace(l, (P ? " ." : " ") + o)
      }

      function G(k) {
        return L(k, !0)
      }

      function z(k, P) {
        return k.addClass(L(P))
      }

      function re(k, P) {
        return k.removeClass(L(P))
      }

      function x(k, P, F) {
        return k.toggleClass(L(P), F)
      }

      function B(k, P) {
        return k.attr("aria-hidden", P).attr("tabIndex", P ? -1 : 0)
      }

      function Q(k, P) {
        return z(r(t.createElement(P || "div")), k)
      }

      function N(k, P) {
        var F = '<svg xmlns="http://www.w3.org/2000/svg" width="' + k + '" height="' + P + '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(F)
      }
      return function () {
        var k = e.navigator.userAgent,
          P = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
          F = k.match(P),
          H = k.indexOf("Android ") > -1 && k.indexOf("Chrome") === -1;
        if (!H && (!F || F[2] > 7)) return;
        var j = t.createElement("style");
        t.head.appendChild(j), e.addEventListener("resize", J, !0);

        function J() {
          var Z = e.innerHeight,
            ie = e.innerWidth,
            ee = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Z + "px}.w-lightbox-view {width:" + ie + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Z + "px}.w-lightbox-image {max-width:" + ie + "px;max-height:" + Z + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Z + "px}.w-lightbox-strip {padding: 0 " + .01 * Z + "px}.w-lightbox-item {width:" + .1 * Z + "px;padding:" + .02 * Z + "px " + .01 * Z + "px}.w-lightbox-thumbnail {height:" + .1 * Z + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Z + "px}.w-lightbox-content {margin-top:" + .02 * Z + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Z + "px}.w-lightbox-image {max-width:" + .96 * ie + "px;max-height:" + .96 * Z + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * ie + "px;max-height:" + .84 * Z + "px}}";
          j.textContent = ee
        }
        J()
      }(), h
    }
    Gl.define("lightbox", ST.exports = function (e) {
      var t = {},
        r = Gl.env(),
        n = RU(window, document, e, r ? "#lightbox-mountpoint" : "body"),
        i = e(document),
        a, s, o = ".w-lightbox",
        l;
      t.ready = t.design = t.preview = p;

      function p() {
        s = r && Gl.env("design"), n.destroy(), l = {}, a = i.find(o), a.webflowLightBox(), a.each(function () {
          cn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
        })
      }
      jQuery.fn.extend({
        webflowLightBox: function () {
          var d = this;
          e.each(d, function (h, m) {
            var u = e.data(m, o);
            u || (u = e.data(m, o, {
              el: e(m),
              mode: "images",
              images: [],
              embed: ""
            })), u.el.off(o), c(u), s ? u.el.on("setting" + o, c.bind(null, u)) : u.el.on("click" + o, f(u)).on("click" + o, function (y) {
              y.preventDefault()
            })
          })
        }
      });

      function c(d) {
        var h = d.el.children(".w-json").html(),
          m, u;
        if (!h) {
          d.items = [];
          return
        }
        try {
          h = JSON.parse(h)
        } catch (y) {
          console.error("Malformed lightbox JSON configuration.", y)
        }
        g(h), h.items.forEach(function (y) {
          y.$el = d.el
        }), m = h.group, m ? (u = l[m], u || (u = l[m] = []), d.items = u, h.items.length && (d.index = u.length, u.push.apply(u, h.items))) : (d.items = h.items, d.index = 0)
      }

      function f(d) {
        return function () {
          d.items.length && n(d.items, d.index || 0)
        }
      }

      function g(d) {
        d.images && (d.images.forEach(function (h) {
          h.type = "image"
        }), d.items = d.images), d.embed && (d.embed.type = "video", d.items = [d.embed]), d.groupId && (d.group = d.groupId)
      }
      return t
    })
  });
  ru();
  iu();
  su();
  uu();
  fu();
  pu();
  mu();
  q0();
  bi();
  j0();
  Q0();
  hT();
  ET();
  IT();
  AT();
  Webflow.require("ix2").init({
    events: {
      "e-45": {
        id: "e-45",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-33",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-866"
          }
        },
        mediaQueries: ["main"],
        target: {
          selector: ".footer-link-wrapper",
          originalId: "a91e9a07-2ef3-4399-decb-6410b4eb788b",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".footer-link-wrapper",
          originalId: "a91e9a07-2ef3-4399-decb-6410b4eb788b",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1696922917111
      },
      "e-46": {
        id: "e-46",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-34",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-865"
          }
        },
        mediaQueries: ["main"],
        target: {
          selector: ".footer-link-wrapper",
          originalId: "a91e9a07-2ef3-4399-decb-6410b4eb788b",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".footer-link-wrapper",
          originalId: "a91e9a07-2ef3-4399-decb-6410b4eb788b",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1696922917112
      },
      "e-49": {
        id: "e-49",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-50"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "fa36639f-bc34-8f1a-4024-d088998077f8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "fa36639f-bc34-8f1a-4024-d088998077f8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1720092645922
      },
      "e-51": {
        id: "e-51",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: !1,
          config: {
            actionListId: "growIn",
            autoStopEventId: "e-52"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "fa36639f-bc34-8f1a-4024-d0889980784b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "fa36639f-bc34-8f1a-4024-d0889980784b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0
        },
        createdOn: 1720092661356
      },
      "e-53": {
        id: "e-53",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-54"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "fa36639f-bc34-8f1a-4024-d0889980784c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "fa36639f-bc34-8f1a-4024-d0889980784c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 350,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1720092677769
      },
      "e-55": {
        id: "e-55",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-35",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-14"
          }
        },
        mediaQueries: ["main"],
        target: {
          selector: ".nav-link-wrapper",
          originalId: "4d957ff1-b76d-e291-d2c8-f0dc37bfa6bc",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".nav-link-wrapper",
          originalId: "4d957ff1-b76d-e291-d2c8-f0dc37bfa6bc",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1696918771696
      },
      "e-56": {
        id: "e-56",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-36",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-13"
          }
        },
        mediaQueries: ["main"],
        target: {
          selector: ".nav-link-wrapper",
          originalId: "4d957ff1-b76d-e291-d2c8-f0dc37bfa6bc",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".nav-link-wrapper",
          originalId: "4d957ff1-b76d-e291-d2c8-f0dc37bfa6bc",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1696918771698
      },
      "e-61": {
        id: "e-61",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-217"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "06ab6c64-468c-b44e-1b8c-856deb96ba7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "06ab6c64-468c-b44e-1b8c-856deb96ba7f",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: null,
          effectIn: !0
        },
        createdOn: 1726215005160
      },
      "e-73": {
        id: "e-73",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-25",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-74"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "67497cd2720eea8d5d3d18b2|022bdf7a-1da5-487f-e90a-10a13619b2dd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2|022bdf7a-1da5-487f-e90a-10a13619b2dd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1721758735030
      },
      "e-74": {
        id: "e-74",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-73"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "67497cd2720eea8d5d3d18b2|022bdf7a-1da5-487f-e90a-10a13619b2dd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2|022bdf7a-1da5-487f-e90a-10a13619b2dd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1721758735031
      },
      "e-134": {
        id: "e-134",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-38",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-168"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".posts-card",
          originalId: "66e458b80dec7fe0a27cb1ee|d61fddcd-9ed1-1e76-8ca1-5207d2c8b96f",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".posts-card",
          originalId: "66e458b80dec7fe0a27cb1ee|d61fddcd-9ed1-1e76-8ca1-5207d2c8b96f",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1701862985580
      },
      "e-135": {
        id: "e-135",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-39",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-167"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".posts-card",
          originalId: "66e458b80dec7fe0a27cb1ee|d61fddcd-9ed1-1e76-8ca1-5207d2c8b96f",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".posts-card",
          originalId: "66e458b80dec7fe0a27cb1ee|d61fddcd-9ed1-1e76-8ca1-5207d2c8b96f",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1701862985582
      },
      "e-136": {
        id: "e-136",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-40",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-160"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".featured-card",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc48",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".featured-card",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc48",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1701861935998
      },
      "e-137": {
        id: "e-137",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-41",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-159"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".featured-card",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc48",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".featured-card",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc48",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1701861936e3
      },
      "e-138": {
        id: "e-138",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-40",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-162"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".plus-wrapper",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc57",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".plus-wrapper",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc57",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1701861687389
      },
      "e-139": {
        id: "e-139",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-41",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-161"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".plus-wrapper",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc57",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".plus-wrapper",
          originalId: "66e458b80dec7fe0a27cb1ee|c5b67c4a-1ce9-5951-eebe-63d95554fc57",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1701861687391
      },
      "e-155": {
        id: "e-155",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-25",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-156"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1723184685925
      },
      "e-156": {
        id: "e-156",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-155"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1723184685925
      },
      "e-157": {
        id: "e-157",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-23",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-158"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1723184685925
      },
      "e-158": {
        id: "e-158",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-24",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-157"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "3beb919a-4aaa-f885-16a0-1c9b6601a3ec",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1723184685925
      },
      "e-159": {
        id: "e-159",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-1153"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".slide-from-left-animation",
          originalId: "66a5f61b61b9f0a48636c94a|10a1229d-b44c-8e97-79d2-177c670d8e4e",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".slide-from-left-animation",
          originalId: "66a5f61b61b9f0a48636c94a|10a1229d-b44c-8e97-79d2-177c670d8e4e",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1697619097072
      },
      "e-161": {
        id: "e-161",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInRight",
            autoStopEventId: "e-1155"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".slide-from-right-animation",
          originalId: "66a5f61b61b9f0a48636c94a|ff71deb3-4ffa-9557-7360-be0dafc26ddb",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".slide-from-right-animation",
          originalId: "66a5f61b61b9f0a48636c94a|ff71deb3-4ffa-9557-7360-be0dafc26ddb",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "RIGHT",
          effectIn: !0
        },
        createdOn: 1697619141756
      },
      "e-163": {
        id: "e-163",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: {
            actionListId: "fadeIn",
            autoStopEventId: "e-1157"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".fade-in-animation",
          originalId: "66a5f61b61b9f0a48636c94d|eb00cdea-2b0f-0b59-23cc-b4466198396f",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".fade-in-animation",
          originalId: "66a5f61b61b9f0a48636c94d|eb00cdea-2b0f-0b59-23cc-b4466198396f",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0
        },
        createdOn: 1697619806364
      },
      "e-165": {
        id: "e-165",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInBottom",
            autoStopEventId: "e-166"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".flip-from-bottom-animation",
          originalId: "65328e7318301f7c61771a9a|c196eb5f-8c32-b7d6-5f49-7ed4815b8f83",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".flip-from-bottom-animation",
          originalId: "65328e7318301f7c61771a9a|c196eb5f-8c32-b7d6-5f49-7ed4815b8f83",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1700543162385
      },
      "e-167": {
        id: "e-167",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-1139"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".slide-up-animation",
          originalId: "66a5f61b61b9f0a48636c94a|23de71b9-3b8e-95a9-13ec-59e20b58a1a6",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".slide-up-animation",
          originalId: "66a5f61b61b9f0a48636c94a|23de71b9-3b8e-95a9-13ec-59e20b58a1a6",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1697618988968
      },
      "e-169": {
        id: "e-169",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInTop",
            autoStopEventId: "e-170"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".slide-down-animation",
          originalId: "66a5f61b61b9f0a48636c955|95ae4e1e-7c60-2ee0-e16c-520ca98f3459",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".slide-down-animation",
          originalId: "66a5f61b61b9f0a48636c955|95ae4e1e-7c60-2ee0-e16c-520ca98f3459",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 30,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "TOP",
          effectIn: !0
        },
        createdOn: 1721751087637
      },
      "e-171": {
        id: "e-171",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInLeft",
            autoStopEventId: "e-172"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".flip-from-left-animation",
          originalId: "67497cd2720eea8d5d3d18c0|af69efed-2480-f498-6a64-f8f642b460a0",
          appliesTo: "CLASS"
        },
        targets: [{
          selector: ".flip-from-left-animation",
          originalId: "67497cd2720eea8d5d3d18c0|af69efed-2480-f498-6a64-f8f642b460a0",
          appliesTo: "CLASS"
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1726317753524
      },
      "e-205": {
        id: "e-205",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-43",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-206"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "67497cd2720eea8d5d3d18b2|b8530d7c-77c4-ca31-aa4d-bfa6034db74b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2|b8530d7c-77c4-ca31-aa4d-bfa6034db74b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726325825242
      },
      "e-206": {
        id: "e-206",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-44",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-205"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "67497cd2720eea8d5d3d18b2|b8530d7c-77c4-ca31-aa4d-bfa6034db74b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2|b8530d7c-77c4-ca31-aa4d-bfa6034db74b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726325825243
      },
      "e-216": {
        id: "e-216",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-47",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-218"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae3026416e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae3026416e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-217": {
        id: "e-217",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-47",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-224"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae3026414a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae3026414a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-218": {
        id: "e-218",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-216"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae3026416e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae3026416e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-219": {
        id: "e-219",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-47",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-223"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae30264162",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae30264162",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-220": {
        id: "e-220",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-47",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-222"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae30264156",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae30264156",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-222": {
        id: "e-222",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-220"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae30264156",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae30264156",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-223": {
        id: "e-223",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-219"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae30264162",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae30264162",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-224": {
        id: "e-224",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-217"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae3026414a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae3026414a",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1695974709746
      },
      "e-225": {
        id: "e-225",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-47",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-226"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae3026413e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae3026413e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726331902189
      },
      "e-226": {
        id: "e-226",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-48",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-225"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae3026413e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae3026413e",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726331902190
      },
      "e-237": {
        id: "e-237",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-49",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "67497cd2720eea8d5d3d18be|575c569b-04f8-535b-a62d-6ecd1d1e4795",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18be|575c569b-04f8-535b-a62d-6ecd1d1e4795",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-49-p",
          smoothing: 90,
          startsEntering: !0,
          addStartOffset: !1,
          addOffsetValue: 0,
          startsExiting: !0,
          addEndOffset: !1,
          endOffsetValue: 50
        }],
        createdOn: 1696857943544
      },
      "e-240": {
        id: "e-240",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-52",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-241"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "67497cd2720eea8d5d3d18be|359835b5-3b7f-5044-6d19-3e23fc095620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18be|359835b5-3b7f-5044-6d19-3e23fc095620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1708955196865
      },
      "e-241": {
        id: "e-241",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-53",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-240"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "67497cd2720eea8d5d3d18be|359835b5-3b7f-5044-6d19-3e23fc095620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18be|359835b5-3b7f-5044-6d19-3e23fc095620",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1708955196866
      },
      "e-269": {
        id: "e-269",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInBottom",
            autoStopEventId: "e-278"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f1",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1703395510808
      },
      "e-272": {
        id: "e-272",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInLeft",
            autoStopEventId: "e-271"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f9",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1709373142141
      },
      "e-274": {
        id: "e-274",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInRight",
            autoStopEventId: "e-276"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 1900,
          direction: "RIGHT",
          effectIn: !0
        },
        createdOn: 1709373135774
      },
      "e-275": {
        id: "e-275",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInLeft",
            autoStopEventId: "e-277"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "6e9750ff-a872-9aa1-2869-bd0dc16b00f6",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 20,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1709373135774
      },
      "e-288": {
        id: "e-288",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-56",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13b",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-56-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }, {
          continuousParameterGroupId: "a-56-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }],
        createdOn: 1726748768722
      },
      "e-289": {
        id: "e-289",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-57",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-290"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726748768722
      },
      "e-290": {
        id: "e-290",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-58",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-289"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726748768722
      },
      "e-291": {
        id: "e-291",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-59",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e142",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e142",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-59-p",
          smoothing: 90,
          startsEntering: !0,
          addStartOffset: !1,
          addOffsetValue: 0,
          startsExiting: !0,
          addEndOffset: !1,
          endOffsetValue: 50
        }],
        createdOn: 1726748768722
      },
      "e-293": {
        id: "e-293",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-61",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-294"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "67497cd2720eea8d5d3d18b2",
          appliesTo: "PAGE",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2",
          appliesTo: "PAGE",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726748914234
      },
      "e-295": {
        id: "e-295",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-62",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-296"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "67497cd2720eea8d5d3d18b2|4bf48e95-1b6f-5737-3242-d95977d5bf77",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2|4bf48e95-1b6f-5737-3242-d95977d5bf77",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1696916723494
      },
      "e-303": {
        id: "e-303",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInBottom",
            autoStopEventId: "e-304"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "67497cd2720eea8d5d3d18b4|77a23f5d-dc7c-c2f9-d18d-536935e52a2d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b4|77a23f5d-dc7c-c2f9-d18d-536935e52a2d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 1500,
          direction: "BOTTOM",
          effectIn: !0
        },
        createdOn: 1697619472554
      },
      "e-317": {
        id: "e-317",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInLeft",
            autoStopEventId: "e-318"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a546ec61-5762-16bd-4aea-b274da1ddef3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "a546ec61-5762-16bd-4aea-b274da1ddef3",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 40,
          scrollOffsetUnit: "%",
          delay: 0,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1726853776355
      },
      "e-319": {
        id: "e-319",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInLeft",
            autoStopEventId: "e-320"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a546ec61-5762-16bd-4aea-b274da1ddef8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "a546ec61-5762-16bd-4aea-b274da1ddef8",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 40,
          scrollOffsetUnit: "%",
          delay: 150,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1726853811801
      },
      "e-321": {
        id: "e-321",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FLIP_EFFECT",
          instant: !1,
          config: {
            actionListId: "flipInLeft",
            autoStopEventId: "e-322"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "a546ec61-5762-16bd-4aea-b274da1ddefd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "a546ec61-5762-16bd-4aea-b274da1ddefd",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 40,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1726853826499
      },
      "e-329": {
        id: "e-329",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: {
            actionListId: "slideInLeft",
            autoStopEventId: "e-330"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "0e5d0adf-3843-4287-2b23-42ae30264137",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "0e5d0adf-3843-4287-2b23-42ae30264137",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "LEFT",
          effectIn: !0
        },
        createdOn: 1726854459307
      },
      "e-331": {
        id: "e-331",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-332"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726888620977
      },
      "e-332": {
        id: "e-332",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-331"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "cdd86b2f-751d-506f-06f5-7a0831b8e13c",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726888620978
      },
      "e-333": {
        id: "e-333",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-56",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e916",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e916",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-56-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }, {
          continuousParameterGroupId: "a-56-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: !1,
          smoothing: 50,
          restingState: 50
        }],
        createdOn: 1726888864517
      },
      "e-334": {
        id: "e-334",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-335"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e917",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e917",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726888864517
      },
      "e-335": {
        id: "e-335",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-334"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e917",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e917",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726888864517
      },
      "e-336": {
        id: "e-336",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-57",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-337"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e918",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e918",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726888864517
      },
      "e-337": {
        id: "e-337",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-58",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-336"
          }
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e918",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e918",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1726888864517
      },
      "e-338": {
        id: "e-338",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: {
            actionListId: "a-59",
            affectedElements: {},
            duration: 0
          }
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e91d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "17c3bbeb-afc3-b040-2382-7c4d2319e91d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: [{
          continuousParameterGroupId: "a-59-p",
          smoothing: 90,
          startsEntering: !0,
          addStartOffset: !1,
          addOffsetValue: 0,
          startsExiting: !0,
          addEndOffset: !1,
          endOffsetValue: 50
        }],
        createdOn: 1726888864517
      },
      "e-339": {
        id: "e-339",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-25",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-340"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "67497cd2720eea8d5d3d18b2|57c8da69-743c-6131-01a4-6e21761d4a2d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2|57c8da69-743c-6131-01a4-6e21761d4a2d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1732870820696
      },
      "e-340": {
        id: "e-340",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-26",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-339"
          }
        },
        mediaQueries: ["main"],
        target: {
          id: "67497cd2720eea8d5d3d18b2|57c8da69-743c-6131-01a4-6e21761d4a2d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        },
        targets: [{
          id: "67497cd2720eea8d5d3d18b2|57c8da69-743c-6131-01a4-6e21761d4a2d",
          appliesTo: "ELEMENT",
          styleBlockIds: []
        }],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null
        },
        createdOn: 1732870820696
      }
    },
    actionLists: {
      "a-33": {
        id: "a-33",
        title: "Footer hover link on hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-33-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".footer-link",
                selectorGuids: ["f719198e-9ad6-a9fa-1598-cd34dbb0d3a0"]
              },
              yValue: -100,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1696922923070
      },
      "a-34": {
        id: "a-34",
        title: "Footer hover link hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-34-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".footer-link",
                selectorGuids: ["f719198e-9ad6-a9fa-1598-cd34dbb0d3a0"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1696922923070
      },
      "a-35": {
        id: "a-35",
        title: "Nav link mouse on hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-35-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".nav-link",
                selectorGuids: ["3ea3cd8b-1ded-3514-1c98-af4617f9bf4f"]
              },
              yValue: -100,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1696918784439
      },
      "a-36": {
        id: "a-36",
        title: "Nav link mouse hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-36-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".nav-link",
                selectorGuids: ["3ea3cd8b-1ded-3514-1c98-af4617f9bf4f"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1696918784439
      },
      "a-25": {
        id: "a-25",
        title: "Slide arrow move on hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-25-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "rem",
              yUnit: "rem",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-25-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 200,
              yValue: -200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-25-n-4",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-25-n-5",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: -200,
              yValue: 200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-25-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }, {
            id: "a-25-n-7",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1701861058018
      },
      "a-26": {
        id: "a-26",
        title: "Slide arrow move hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-26-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 200,
              yValue: -200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-26-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-26-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: -200,
              yValue: 200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-26-n-4",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-26-n-5",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                id: "67497cd2720eea8d5d3d18b2|022bdf7a-1da5-487f-e90a-10a13619b2dd"
              },
              globalSwatchId: "--white",
              rValue: 245,
              bValue: 245,
              gValue: 245,
              aValue: 1
            }
          }, {
            id: "a-26-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1701861058018
      },
      "a-38": {
        id: "a-38",
        title: "Posts card on hover arrow move",
        actionItemGroups: [{
          actionItems: [{
            id: "a-38-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "px",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-38-n-2",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {},
              globalSwatchId: "",
              rValue: 219,
              bValue: 116,
              gValue: 255,
              aValue: 1
            }
          }, {
            id: "a-38-n-3",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              filters: [{
                type: "invert",
                filterId: "012d",
                value: 0,
                unit: "%"
              }]
            }
          }]
        }, {
          actionItems: [{
            id: "a-38-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 200,
              yValue: -200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-38-n-5",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-38-n-6",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: -200,
              yValue: 200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-38-n-7",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }, {
            id: "a-38-n-8",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-38-n-9",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {},
              globalSwatchId: "",
              rValue: 0,
              bValue: 0,
              gValue: 0,
              aValue: 1
            }
          }, {
            id: "a-38-n-10",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              filters: [{
                type: "invert",
                filterId: "012d",
                value: 100,
                unit: "%"
              }]
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1701861058018
      },
      "a-39": {
        id: "a-39",
        title: "Posts card hover out arrow move",
        actionItemGroups: [{
          actionItems: [{
            id: "a-39-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 200,
              yValue: -200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-39-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-39-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: -200,
              yValue: 200,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }, {
            id: "a-39-n-4",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              filters: [{
                type: "invert",
                filterId: "012d",
                value: 100,
                unit: "%"
              }]
            }
          }]
        }, {
          actionItems: [{
            id: "a-39-n-5",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-39-n-6",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {},
              globalSwatchId: "",
              rValue: 219,
              bValue: 116,
              gValue: 255,
              aValue: 1
            }
          }, {
            id: "a-39-n-7",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              filters: [{
                type: "invert",
                filterId: "012d",
                value: 0,
                unit: "%"
              }]
            }
          }, {
            id: "a-39-n-8",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".arrow",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d758"]
              },
              xValue: 0,
              yValue: 0,
              xUnit: "%",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1701861058018
      },
      "a-40": {
        id: "a-40",
        title: "Feature card plus on hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-40-n",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".plus-wrapper",
                selectorGuids: ["581fc186-17f4-f443-1b10-bfb0642feafd"]
              },
              globalSwatchId: "--primary",
              rValue: 245,
              bValue: 245,
              gValue: 245,
              aValue: 1
            }
          }, {
            id: "a-40-n-2",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {},
              filters: [{
                type: "invert",
                filterId: "d10e",
                value: 0,
                unit: "%"
              }]
            }
          }]
        }, {
          actionItems: [{
            id: "a-40-n-3",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".plus-wrapper",
                selectorGuids: ["581fc186-17f4-f443-1b10-bfb0642feafd"]
              },
              globalSwatchId: "",
              rValue: 0,
              bValue: 0,
              gValue: 0,
              aValue: 1
            }
          }, {
            id: "a-40-n-4",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {},
              filters: [{
                type: "invert",
                filterId: "d10e",
                value: 100,
                unit: "%"
              }]
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1701861694174
      },
      "a-41": {
        id: "a-41",
        title: "Feature card plus hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-41-n",
            actionTypeId: "STYLE_FILTER",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {},
              filters: [{
                type: "invert",
                filterId: "d10e",
                value: 0,
                unit: "%"
              }]
            }
          }, {
            id: "a-41-n-2",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".plus-wrapper",
                selectorGuids: ["581fc186-17f4-f443-1b10-bfb0642feafd"]
              },
              globalSwatchId: "--primary",
              rValue: 245,
              bValue: 245,
              gValue: 245,
              aValue: 1
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1701861694174
      },
      "a-23": {
        id: "a-23",
        title: "Button on hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-23-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text-absolute",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d75b"]
              },
              yValue: 150,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }, {
            id: "a-23-n-2",
            actionTypeId: "GENERAL_DISPLAY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text-absolute",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d75b"]
              },
              value: "block"
            }
          }, {
            id: "a-23-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d757"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-23-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d757"]
              },
              yValue: -150,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }, {
            id: "a-23-n-5",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text-absolute",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d75b"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1696918784439
      },
      "a-24": {
        id: "a-24",
        title: "Button hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-24-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d757"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }, {
            id: "a-24-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "inQuad",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text-absolute",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d75b"]
              },
              yValue: 150,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-24-n-3",
            actionTypeId: "GENERAL_DISPLAY",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text-absolute",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d75b"]
              },
              value: "none"
            }
          }, {
            id: "a-24-n-4",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".button-text-absolute",
                selectorGuids: ["bab13ab7-d803-7a8e-be5c-1e995fb4d75b"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "%",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1696918784439
      },
      "a-43": {
        id: "a-43",
        title: "Services link on hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-43-n-2",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {},
              zValue: -45,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-43-n-3",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {},
              zValue: -45,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1726325831441
      },
      "a-44": {
        id: "a-44",
        title: "Services link hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-44-n",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {},
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }, {
            id: "a-44-n-2",
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {},
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "deg"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1726325831441
      },
      "a-47": {
        id: "a-47",
        title: "FAQ dropdown toggle open",
        actionItemGroups: [{
          actionItems: [{
            id: "a-47-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-47-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              yValue: -20,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-47-n-3",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              heightValue: 0,
              widthUnit: "PX",
              heightUnit: "px",
              locked: !1
            }
          }, {
            id: "a-47-n-4",
            actionTypeId: "PLUGIN_LOTTIE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f028c"]
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            id: "a-47-n-5",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "ease",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              widthUnit: "PX",
              heightUnit: "AUTO",
              locked: !1
            }
          }, {
            id: "a-47-n-6",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "ease",
              duration: 1e3,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              value: 1,
              unit: ""
            }
          }, {
            id: "a-47-n-7",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              yValue: 0,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-47-n-8",
            actionTypeId: "PLUGIN_LOTTIE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f028c"]
              },
              value: 100
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1695972145487
      },
      "a-48": {
        id: "a-48",
        title: "FAQ dropdown toggle close",
        actionItemGroups: [{
          actionItems: [{
            id: "a-48-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-48-n-2",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              heightValue: 0,
              widthUnit: "PX",
              heightUnit: "px",
              locked: !1
            }
          }, {
            id: "a-48-n-3",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              yValue: -20,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-48-n-4",
            actionTypeId: "PLUGIN_LOTTIE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f028c"]
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            id: "a-48-n-5",
            actionTypeId: "STYLE_SIZE",
            config: {
              delay: 0,
              easing: "ease",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              heightValue: 0,
              widthUnit: "PX",
              heightUnit: "px",
              locked: !1
            }
          }, {
            id: "a-48-n-6",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "ease",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              value: 0,
              unit: ""
            }
          }, {
            id: "a-48-n-7",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".dropdown-answer",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f0291"]
              },
              yValue: -20,
              xUnit: "PX",
              yUnit: "px",
              zUnit: "PX"
            }
          }, {
            id: "a-48-n-8",
            actionTypeId: "PLUGIN_LOTTIE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".faq-icon",
                selectorGuids: ["32e508a1-ba03-6582-c590-8d72e56f028c"]
              },
              value: 0
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1695972145487
      },
      "a-49": {
        id: "a-49",
        title: "Image parallax curve",
        continuousParameterGroups: [{
          id: "a-49-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [{
            keyframe: 0,
            actionItems: [{
              id: "a-49-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".image-parallax-curve",
                  selectorGuids: ["94df0b06-90d9-a4d5-0d5b-6d841b15458c"]
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }, {
              id: "a-49-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".image-parallax-curve",
                  selectorGuids: ["94df0b06-90d9-a4d5-0d5b-6d841b15458c"]
                },
                xValue: 1,
                yValue: 1,
                locked: !0
              }
            }]
          }, {
            keyframe: 80,
            actionItems: [{
              id: "a-49-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".image-parallax-curve",
                  selectorGuids: ["94df0b06-90d9-a4d5-0d5b-6d841b15458c"]
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: !0
              }
            }, {
              id: "a-49-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".image-parallax-curve",
                  selectorGuids: ["94df0b06-90d9-a4d5-0d5b-6d841b15458c"]
                },
                yValue: -17,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }]
          }, {
            keyframe: 90,
            actionItems: [{
              id: "a-49-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".image-parallax-curve",
                  selectorGuids: ["94df0b06-90d9-a4d5-0d5b-6d841b15458c"]
                },
                value: 1,
                unit: ""
              }
            }]
          }, {
            keyframe: 100,
            actionItems: [{
              id: "a-49-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".image-parallax-curve",
                  selectorGuids: ["94df0b06-90d9-a4d5-0d5b-6d841b15458c"]
                },
                value: .2,
                unit: ""
              }
            }]
          }]
        }],
        createdOn: 1695966388544
      },
      "a-52": {
        id: "a-52",
        title: "Work small image on hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-52-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".thumbnails",
                selectorGuids: ["1b68e8c5-e2bf-5f4a-4e4b-05ae3dc15549"]
              },
              xValue: 1,
              yValue: 1,
              locked: !0
            }
          }]
        }, {
          actionItems: [{
            id: "a-52-n-2",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".thumbnails",
                selectorGuids: ["1b68e8c5-e2bf-5f4a-4e4b-05ae3dc15549"]
              },
              xValue: 1.05,
              yValue: 1.05,
              locked: !0
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1708955236710
      },
      "a-53": {
        id: "a-53",
        title: "Work small image hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-53-n",
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "",
              duration: 200,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".thumbnails",
                selectorGuids: ["1b68e8c5-e2bf-5f4a-4e4b-05ae3dc15549"]
              },
              xValue: 1,
              yValue: 1,
              locked: !0
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1708955236710
      },
      "a-56": {
        id: "a-56",
        title: "Move icon arrow",
        continuousParameterGroups: [{
          id: "a-56-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [{
            keyframe: 0,
            actionItems: [{
              id: "a-56-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".works-icon-wrapper",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798b"]
                },
                xValue: -50,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX"
              }
            }]
          }, {
            keyframe: 100,
            actionItems: [{
              id: "a-56-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".works-icon-wrapper",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798b"]
                },
                xValue: 50,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX"
              }
            }]
          }]
        }, {
          id: "a-56-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [{
            keyframe: 0,
            actionItems: [{
              id: "a-56-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".works-icon-wrapper",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798b"]
                },
                yValue: -50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX"
              }
            }]
          }, {
            keyframe: 100,
            actionItems: [{
              id: "a-56-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".works-icon-wrapper",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798b"]
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX"
              }
            }]
          }]
        }],
        createdOn: 1696666491605
      },
      "a-57": {
        id: "a-57",
        title: "Works hover",
        actionItemGroups: [{
          actionItems: [{
            id: "a-57-n",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: !0,
                id: "67497cd2720eea8d5d3d18bf|182e8265-1089-4a4b-bd0e-79f4149aff97"
              },
              globalSwatchId: "--light-gray",
              rValue: 231,
              bValue: 233,
              gValue: 231,
              aValue: 1
            }
          }, {
            id: "a-57-n-2",
            actionTypeId: "STYLE_TEXT_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".works-hover",
                selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798c"]
              },
              globalSwatchId: "--black",
              rValue: 5,
              bValue: 5,
              gValue: 5,
              aValue: 1
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1719721634295
      },
      "a-58": {
        id: "a-58",
        title: "Works hover out",
        actionItemGroups: [{
          actionItems: [{
            id: "a-58-n",
            actionTypeId: "STYLE_BACKGROUND_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: !0,
                id: "67497cd2720eea8d5d3d18bf|182e8265-1089-4a4b-bd0e-79f4149aff97"
              },
              globalSwatchId: "--black",
              rValue: 5,
              bValue: 5,
              gValue: 5,
              aValue: 1
            }
          }, {
            id: "a-58-n-2",
            actionTypeId: "STYLE_TEXT_COLOR",
            config: {
              delay: 0,
              easing: "",
              duration: 300,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".works-hover",
                selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798c"]
              },
              globalSwatchId: "--white",
              rValue: 245,
              bValue: 245,
              gValue: 245,
              aValue: 1
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1719721634295
      },
      "a-59": {
        id: "a-59",
        title: "Parallax Image",
        continuousParameterGroups: [{
          id: "a-59-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [{
            keyframe: 0,
            actionItems: [{
              id: "a-59-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".parallax-image",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798e"]
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }, {
              id: "a-59-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".parallax-image",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798e"]
                },
                xValue: 1,
                yValue: 1,
                locked: !0
              }
            }, {
              id: "a-59-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".works-block",
                  selectorGuids: ["33b54947-02f9-c012-279e-7b777a0a1a18"]
                },
                xValue: 1,
                yValue: 1,
                locked: !0
              }
            }]
          }, {
            keyframe: 50,
            actionItems: [{
              id: "a-59-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".parallax-image",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798e"]
                },
                xValue: 1,
                yValue: 1,
                locked: !0
              }
            }, {
              id: "a-59-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".parallax-image",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798e"]
                },
                yValue: -15,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX"
              }
            }, {
              id: "a-59-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".works-block",
                  selectorGuids: ["33b54947-02f9-c012-279e-7b777a0a1a18"]
                },
                xValue: .85,
                yValue: .85,
                locked: !0
              }
            }]
          }, {
            keyframe: 90,
            actionItems: [{
              id: "a-59-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".parallax-image",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798e"]
                },
                value: 1,
                unit: ""
              }
            }]
          }, {
            keyframe: 100,
            actionItems: [{
              id: "a-59-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".parallax-image",
                  selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798e"]
                },
                value: .2,
                unit: ""
              }
            }]
          }]
        }],
        createdOn: 1695966388544
      },
      "a-61": {
        id: "a-61",
        title: "Hero spline opacity",
        actionItemGroups: [{
          actionItems: [{
            id: "a-61-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                id: "67497cd2720eea8d5d3d18b2|769eaa28-9e57-8d2b-bd19-a0fd96681ba3"
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-61-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 1e3,
              easing: "",
              duration: 500,
              target: {
                id: "67497cd2720eea8d5d3d18b2|769eaa28-9e57-8d2b-bd19-a0fd96681ba3"
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1726748921978
      },
      "a-62": {
        id: "a-62",
        title: "Big letter move",
        actionItemGroups: [{
          actionItems: [{
            id: "a-62-n",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 25e3,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".works-title",
                selectorGuids: ["ad14e6bc-6a79-c436-3692-3aa7fc7c4a00"]
              },
              xValue: -1180,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            id: "a-62-n-2",
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "",
              duration: 0,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".works-title",
                selectorGuids: ["ad14e6bc-6a79-c436-3692-3aa7fc7c4a00"]
              },
              xValue: 0,
              xUnit: "px",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1696588036536
      },
      "a-63": {
        id: "a-63",
        title: "Show view works",
        actionItemGroups: [{
          actionItems: [{
            id: "a-63-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".works-icon-wrapper",
                selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798b"]
              },
              value: 0,
              unit: ""
            }
          }]
        }, {
          actionItems: [{
            id: "a-63-n-2",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".works-icon-wrapper",
                selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798b"]
              },
              value: 1,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: !0,
        createdOn: 1726888627102
      },
      "a-64": {
        id: "a-64",
        title: "Hide view works",
        actionItemGroups: [{
          actionItems: [{
            id: "a-64-n",
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "",
              duration: 500,
              target: {
                useEventTarget: "CHILDREN",
                selector: ".works-icon-wrapper",
                selectorGuids: ["b14103f8-3c70-1daa-e275-e915680a798b"]
              },
              value: 0,
              unit: ""
            }
          }]
        }],
        useFirstGroupAsInitialState: !1,
        createdOn: 1726888627102
      },
      slideInBottom: {
        id: "slideInBottom",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 100,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      },
      growIn: {
        id: "growIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: .7500000000000001,
              yValue: .7500000000000001
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_SCALE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 1,
              yValue: 1
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      },
      fadeIn: {
        id: "fadeIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      },
      slideInLeft: {
        id: "slideInLeft",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: -100,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }, {
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }]
      },
      slideInRight: {
        id: "slideInRight",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 100,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }, {
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }]
      },
      flipInBottom: {
        id: "flipInBottom",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: -90,
              yValue: 0,
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "DEG"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "DEG"
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      },
      slideInTop: {
        id: "slideInTop",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: -100,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }, {
            actionTypeId: "TRANSFORM_MOVE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              xUnit: "PX",
              yUnit: "PX",
              zUnit: "PX"
            }
          }]
        }]
      },
      flipInLeft: {
        id: "flipInLeft",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              duration: 0,
              delay: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: -90,
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "DEG"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "DEG"
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      },
      flipInRight: {
        id: "flipInRight",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [{
          actionItems: [{
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 0
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              duration: 0,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 90,
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "DEG"
            }
          }]
        }, {
          actionItems: [{
            actionTypeId: "TRANSFORM_ROTATE",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              xValue: 0,
              yValue: 0,
              zValue: 0,
              xUnit: "DEG",
              yUnit: "DEG",
              zUnit: "DEG"
            }
          }, {
            actionTypeId: "STYLE_OPACITY",
            config: {
              delay: 0,
              easing: "outQuart",
              duration: 1e3,
              target: {
                id: "N/A",
                appliesTo: "TRIGGER_ELEMENT",
                useEventTarget: !0
              },
              value: 1
            }
          }]
        }]
      }
    },
    site: {
      mediaQueries: [{
        key: "main",
        min: 992,
        max: 1e4
      }, {
        key: "medium",
        min: 768,
        max: 991
      }, {
        key: "small",
        min: 480,
        max: 767
      }, {
        key: "tiny",
        min: 0,
        max: 479
      }]
    }
  });
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/