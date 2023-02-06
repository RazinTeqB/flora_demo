import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default defineNuxtPlugin(nuxtApp => {
    // for advanced usage; to use the bootstrap components
    nuxtApp.provide('bootstrap', bootstrap)
})