import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58c2d9cb = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _2c301f52 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _049b3bab = () => interopDefault(import('..\\pages\\blog\\post.vue' /* webpackChunkName: "pages/blog/post" */))
const _0e941c7f = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _57dd9bf9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _58c2d9cb,
    children: [{
      path: "",
      component: _2c301f52,
      name: "blog"
    }, {
      path: "post",
      component: _049b3bab,
      name: "blog-post"
    }, {
      path: ":id",
      component: _0e941c7f,
      name: "blog-id"
    }]
  }, {
    path: "/",
    component: _57dd9bf9,
    name: "index"
  }, {
    path: "/test",
    component: _58c2d9cb,
    name: "home"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
