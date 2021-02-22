require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'

window.bus = new Vue()

Vue.component('main-layout', require('./layouts/Main.vue'))
Vue.directive('mousemove', require('./directives/MouseMove.vue'))

Vue.use(VueRouter)
Vue.use(VeeValidate)

// Pages
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Sitework from './pages/Sitework.vue'
import Contact from './pages/Contact.vue'
import CodeExamples from './pages/CodeExamples.vue'
import Resume from './pages/Resume.vue'
import Uses from './pages/Uses.vue'
import p404 from './pages/404.vue'

const routes = [
      {
        path: '/', component: Home,
        meta: {
            sidebar:true,
            title: 'Shawn Crigger - Full-Stack Developer Resume',
            metaTags: [{
                name: 'description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    { path: '/portfolio/:slug', component: Sitework,
        meta: {
            sidebar:false,
            title: 'Shawn Crigger - Portfolio',
            metaTags: [{
                name: 'description',
                content: 'Portfolio for Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Portfolio for Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    { path: '/portfolio', component: Portfolio,
        meta: {
            sidebar:false,
            title: 'Shawn Crigger - Portfolio',
            metaTags: [{
                name: 'description',
                content: 'Portfolio for Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Portfolio for Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    { path: '/resume', component : Resume,
        meta: {
            sidebar:false,
            title: 'Shawn Crigger - Full-Stack Developer Resume',
            metaTags: [{
                name: 'description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    { path: '/code-examples', component : CodeExamples,
        meta: {
            sidebar:false,
            title: 'Code Examples by Shawn Crigger - Full-Stack Developer',
            metaTags: [{
                name: 'description',
                content: 'Code Examples by Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Code Examples by Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    { path: '/uses', component : Uses,
        meta: {
            sidebar:false,
            title: 'Shawn Crigger Uses - Full-Stack Developer Resume',
            metaTags: [{
                name: 'description',
                content: 'Development gear Shawn Crigger Uses - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Development gear Shawn Crigger Uses - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    // { path: '/blog', component : Blog},
    { path: '/contact', component : Contact,
        meta: {
            sidebar:true,
            title: 'Contact Shawn Crigger - Full-Stack Developer Resume',
            metaTags: [{
                name: 'description',
                content: 'Contact Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Contact Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    { path: '/404', component: p404,
        meta: {
            invert:true,
            title: 'Page not found',
            metaTags: [{
                name: 'description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    },
    { path: '*',
        redirect: '/404',
        meta: {
            invert:true,
            title: 'Shawn Crigger - Full-Stack Developer Resume',
            metaTags: [{
                name: 'description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with building servers, PHP, HTML5, CSS3, JavaScript, MySQl, MongoDB and all other types of development.'
            },
            {
                property: 'og:description',
                content: 'Resume for Shawn Crigger - A full-stack web developer, over 10 years experience working with PHP, HTML5, Javascript, CSS3 and MySQL/MongoDB.'
            }
            ]
        }
    }
]


const router = new VueRouter({
    linkExactActiveClass : 'active',
    mode: 'history',
    routes // short for `routes: routes`
})
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));
    bus.$emit('menu:close');
    next();
})

const app = new Vue({
    router
}).$mount('#app')
