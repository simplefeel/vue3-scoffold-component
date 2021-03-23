!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("vue")) : "function" == typeof define && define.amd ? define(["exports", "vue"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).vui = {}), e.vue);
})(this, function (e, t) {
  "use strict";
  var n = t.defineComponent({
    render: function () {
      return t.createVNode("div", { class: "title" }, [t.createTextVNode("component")]);
    },
  });
  var o = t.defineComponent({
      name: "v-count",
      setup: function () {
        var e = t.ref(0),
          o = function () {
            e.value++;
          };
        return function () {
          var r, u;
          return t.createVNode("div", null, [
            t.createVNode("button", { onClick: o }, [t.createTextVNode("click")]),
            t.createVNode(
              t.Transition,
              { name: "slide-fade" },
              ((u = r = t.withDirectives(t.createVNode("h1", null, [t.createTextVNode("Count: "), e.value]), [[t.vShow, e.value % 2 == 0]])),
              "function" == typeof u || ("[object Object]" === Object.prototype.toString.call(u) && !t.isVNode(u))
                ? r
                : {
                    default: function () {
                      return [r];
                    },
                  })
            ),
            t.createVNode(n, null, null),
          ]);
        };
      },
    }),
    r = /-(\w)/g;
  var u,
    c =
      (((u = o).install = function (e) {
        var t = u.name;
        e.component(t, u),
          e.component(
            "-".concat(t).replace(r, function (e, t) {
              return t.toUpperCase();
            }),
            u
          );
      }),
      u);
  (e.Count = c), (e.default = c), Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=bundle.js.map
