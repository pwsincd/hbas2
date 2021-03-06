/* @preserve
 *
 *  Homebrew App Store    - 11/2016
 *  Webpage code & design by Jaames
 *  rakujira.jp | github.com/jaames
 *
 *  Third-party librabries used:
 *  - Vue JS (ver 2.0.1)
 *    vuejs.org
 *  - VueRouter (ver 2.0.0)
 *    router.vuejs.org
 *
 */
var appList = {
        apps: []
    },
    fetch = function() {
        var e = {};
        return function(t, a) {
            if (void 0 !== e[t] && "function" == typeof a) a(!0, e[t]);
            else {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function() {
                    if (4 == n.readyState) {
                        var r = 200 == n.status;
                        r && (e[t] = n.responseText), "function" == typeof a && a(200 == n.status, r ? n.responseText : null)
                    }
                }, n.open("GET", t, !0), n.send()
            }
        }
    }(),
    getFormatedDesc = function(e) {
        return e = e.replace(/^\s*\\n|\\n\s*$/g, ""), e = e.replace(/\\t/g, "&#9;"), e = "<p>" + e.replace(/\\n\s*\\n/g, "</p><p>") + "</p>", e = e.replace(/<p>\s*<\/p>/g, ""), e = e.replace(/\\n/g, "<br/>"), e = e.replace(/(<script|<iframe).*?(\/script>|\/iframe>)/g, "")
    },
    appGridComponent = Vue.component("app-grid", {
        template: "#app-grid-template",
        props: ["title", "items", "showButtons"]
    }),
    frontPageView = {
        template: "#front-page-template",
        computed: {
            appList: function() {
                for (var e = [], t = config.categories, a = 0; a < t.length; a++) {
                    var n = t[a],
                        r = this.$parent.appList.apps.filter(function(e) {
                            var t = e.cat === n.json_id;
                            return t && (e.img_src = config.getAppImageURL(e.directory)), t
                        }),
                        i = r.length < 6 ? 3 : 6;
                    e.push({
                        title: n.id,
                        items: r.splice(0, i)
                    })
                }
                return e
            }
        }
    },
    categoryPageView = {
        template: "#category-page-template",
        computed: {
            appList: function() {
                for (var e = this.$route.params.id, t, a = 0; a < config.categories.length; a++)
                    if (config.categories[a].id === e) {
                        t = config.categories[a].json_id;
                        break
                    }
                return {
                    title: e,
                    items: this.$parent.appList.apps.filter(function(e) {
                        var a = e.cat === t;
                        return a && (e.img_src = config.getAppImageURL(e.directory)), a
                    })
                }
            }
        }
    },
    searchPageView = {
        template: "#search-page-template",
        data: function() {
            return {
                searchQuery: ""
            }
        },
        computed: {
            appList: function() {
                var e = this.$route.params.query || "",
                    t = new RegExp(decodeURI(e), "gi");
                return {
                    items: this.$parent.appList.apps.filter(function(e) {
                        var a = t.test(e.name) || t.test(e.long_desc) || t.test(e.author);
                        return a && (e.img_src = config.getAppImageURL(e.directory)), a
                    })
                }
            }
        },
        methods: {
            submitQuery: function(e) {
                return this.$router.push("/search/" + encodeURI(this.searchQuery)), e.preventDefault(), !1
            }
        },
        beforeRouteEnter: function(e, t, a) {
            a(function(e) {
                e.searchQuery = e.$route.params.query || ""
            })
        }
    },
    appPageView = {
        template: "#app-page-template",
        data: function() {
            return {
                formatted_desc: "",
                download_link: ""
            }
        },
        computed: {
            app: function() {
                var e = this.$route.params.id,
                    t = this.$parent.appList.apps.filter(function(t) {
                        var a = t.directory === e;
                        return a && (t.img_src = config.getAppImageURL(t.directory)), a
                    }),
                    a = t.length > 0 && t[0];
                return a && (this.$data.formatted_desc = getFormatedDesc(a.long_desc), this.$data.download_link = config.getAppDownloadURL(a.directory, a.binary)), a
            }
        }
    },
    app = new Vue({
        el: "#app",
        data: {
            appList: appList,
            categories: config.categories,
            sideMenuIsOpen: !1
        },
        methods: {
            showSideMenu: function() {
                this.sideMenuIsOpen = !0
            },
            hideSideMenu: function() {
                this.sideMenuIsOpen = !1
            },
            toggleSideMenu: function() {
                var e = this.sideMenuIsOpen ? this.hideSideMenu : this.showSideMenu;
                e()
            }
        },
        router: new VueRouter({
            routes: [{
                path: "/",
                component: frontPageView
            }, {
                path: "/category/:id",
                component: categoryPageView
            }, {
                path: "/search/:query",
                component: searchPageView
            }, {
                path: "/search/",
                component: searchPageView
            }, {
                path: "/app/:id",
                component: appPageView
            }],
            linkActiveClass: "is-active"
        }),
        watch: {
            $route: function(e, t) {
                window.scrollTo(0, 0), this.hideSideMenu()
            }
        },
        created: function() {
            fetch(config.appListURL, function(e, t) {
                e ? this.appList = JSON.parse(t) : console.warn("There was an error fetching the App List JSON from the server")
            }.bind(this))
        }
    });
