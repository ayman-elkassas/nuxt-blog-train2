export { default as Header } from '../..\\components\\Header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
