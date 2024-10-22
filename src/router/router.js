import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login_base_view = () => import('../page/layout/login-base-view');
const login = () => import('../page/login/login');
const register = () => import('../page/login/register');
const baseView = () => import('../page/layout/base-view');

const index = () => import('../page/index/index.vue');
const level = () => import('../page/index/service/app/level.vue');
const template = () => import('../page/index/service/app/template.vue');
const component = () => import('../page/index/service/app/component.vue');
const field = () => import('../page/index/service/app/field.vue');

const aep = () => import('../page/index/service/extend/aep.vue');
const  message= () => import('../page/index/service/extend/message.vue');
const uav = () => import('../page/index/service/extend/uav.vue');
const example = () => import('../page/index/control/device/example.vue');
const device_group = () => import('../page/index/control/device/group.vue');
const standard = () => import('../page/index/control/device/standard.vue');

const automation_control = () => import('../page/index/control/automation/control.vue');
const hook = () => import('../page/index/control/automation/hook.vue');
const listen = () => import('../page/index/control/automation/listen.vue');
const api_group = () => import('../page/index/approve/api/group.vue');
const acl = () => import('../page/index/approve/mqtt/acl.vue');
const account = () => import('../page/index/approve/mqtt/account.vue');
const mqtt_control = () => import('../page/index/approve/mqtt/control.vue');

export const routes = [
    {
        path: '',
        name: 'index',
        component: baseView,
        redirect: '/index',
        children: [
            {
                path: 'index',
                name: '首页',
                component: index,
                hidden: false,
            },
            {
                path: 'service/app/level',
                name: '层级展示',
                component: level,
                hidden: false,
            },
            {
                path: 'service/app/template',
                name: '模版页面',
                component: template,
                hidden: false,
            },
            {
                path: 'service/app/component',
                name: '布局与组件',
                component: component,
                hidden: false,
            },
            {
                path: 'service/app/field',
                name: '字段映射',
                component: field,
                hidden: false,
            },
            {
                path: 'service/extend/aep',
                name: 'AEP方案生成',
                component: aep,
                hidden: false,
            },
            {
                path: 'service/extend/message',
                name: '警报消息发送',
                component: message,
                hidden: false,
            },
            {
                path: 'service/extend/uav',
                name: '无人机平台',
                component: uav,
                hidden: false,
            },
            {
                path: 'control/device/standard',
                name: '设备标准',
                component: standard,
                hidden: false,
            },
            {
                path: 'control/device/example',
                name: '设备示例',
                component: example,
                hidden: false,
            },
            {
                path: 'control/device/group',
                name: '设备分组',
                component: device_group,
                hidden: false,
            },
            {
                path: 'control/automation/listen',
                name: '监听器',
                component: listen,
                hidden: false,
            },
            {
                path: 'control/automation/control',
                name: '控制器',
                component: automation_control,
                hidden: false,
            },
            {
                path: 'control/automation/hook',
                name: 'Hook触发',
                component: hook,
                hidden: false,
            },
            {
                path: 'approve/mqtt/account',
                name: '认证账户',
                component: account,
                hidden: false,
            },
            {
                path: 'approve/mqtt/acl',
                name: 'ACL规则组',
                component: acl,
                hidden: false,
            },
            {
                path: 'approve/mqtt/control',
                name: '控制台订阅',
                component: mqtt_control,
                hidden: false,
            },
            {
                path: 'approve/api/group',
                name: '设备分组API',
                component: api_group,
                hidden: false,
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login_base_view,
        hidden: false,
        children: [
            {
                path: '',
                name: 'login',
                component: login,
                hidden: false,
            },
            {
                path: '/register',
                name: 'register',
                component: register,
                hidden: false,
            }
        ]
    },
];

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

export default router;
