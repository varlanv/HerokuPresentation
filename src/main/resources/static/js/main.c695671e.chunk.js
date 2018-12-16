(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    15: function (t, e, n) {
    }, 19: function (t, e, n) {
        "use strict";
        n.r(e);
        var a = n(0), o = n.n(a), c = n(3), r = n.n(c);
        n(15), Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        var s = n(4), i = n(5), l = n(7), u = n(6), m = n(8), h = n(1), d = function (t) {
            function e() {
                var t;
                return Object(s.a)(this, e), (t = Object(l.a)(this, Object(u.a)(e).call(this))).state = {
                    count: 0,
                    tags: ["tag1", "tag2", "tag3"]
                }, t.styles = {
                    fontSize: "15px",
                    fontWeight: "bold"
                }, t.handleIncrement = t.handleIncrement.bind(Object(h.a)(Object(h.a)(t))), t
            }

            return Object(m.a)(e, t), Object(i.a)(e, [{
                key: "render", value: function () {
                    return o.a.createElement("div", null, o.a.createElement("span", {
                        style: this.styles,
                        className: this.getBadgeClass()
                    }, this.formatCount()), o.a.createElement("button", {
                        onClick: this.handleIncrement,
                        className: "btn btn-secondary btn-sm"
                    }, "Increment"), o.a.createElement("ul", null, this.state.tags.map(function (t) {
                        return o.a.createElement("li", {key: t}, t)
                    })))
                }
            }, {
                key: "handleIncrement", value: function () {
                    this.setState({count: this.state.count + 1})
                }
            }, {
                key: "getBadgeClass", value: function () {
                    var t = "badge m-2 badge-";
                    return t += 0 === this.state.count ? "danger" : "success"
                }
            }, {
                key: "formatCount", value: function () {
                    var t = this.state.count;
                    return 0 === t ? "zero" : t
                }
            }]), e
        }(a.Component);
        n(17);
        r.a.render(o.a.createElement(d, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (t) {
            t.unregister()
        })
    }, 9: function (t, e, n) {
        t.exports = n(19)
    }
}, [[9, 2, 1]]]);
//# sourceMappingURL=main.c695671e.chunk.js.map