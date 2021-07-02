import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hub',
      name: 'view-hub',
      component: require('@/views/ViewHub').default
    },
    {
      path: '/wordcounter',
      name: 'view-wordcounter',
      component: require('@/views/ViewWordCounter').default
    },
    {
      path: '/googlepagespeed',
      name: 'view-googlepagespeed',
      component: require('@/views/ViewGooglePagespeed').default
    },
    {
      path: '/loremipsum',
      name: 'view-loremipsum',
      component: require('@/views/ViewLoremIpsum').default
    },
    {
      path: '/adobecolorcc',
      name: 'view-adobecolorcc',
      component: require('@/views/ViewAdobeColorCC').default
    },
    {
      path: '/mxtoolbox',
      name: 'view-mxtoolbox',
      component: require('@/views/ViewMXToolbox').default
    },
    {
      path: '/pwapreview',
      name: 'view-pwapreview',
      component: require('@/views/ViewPWAPreview').default
    },
    {
      path: '/about',
      name: 'view-about',
      component: require('@/views/ViewAbout').default
    },
    {
      path: '*',
      redirect: '/hub'
    }
  ]
})
