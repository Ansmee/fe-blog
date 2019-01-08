import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Class from '@/views/Class'
import File from '@/views/File'
import Blogger from '@/views/Blogger'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/class',
            name: 'class',
            component: Class
        },
        {
            path: '/file',
            name: 'file',
            component: File
        },
        {
            path: '/blogger',
            name: 'blogger',
            component: Blogger
        }
    ]
})
