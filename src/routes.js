
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Index = resolve => {
    require.ensure(['./pages/index.vue'], () => {
        resolve(require('./pages/index.vue'));
    });
};

const About = resolve => {
    require.ensure(['./pages/about.vue'], () => {
        resolve(require('./pages/about.vue'));
    });
};

const routers = [{
    path: '/',
    name: 'index',
    component: Index
}, {
    path: '/testUrl',
    component: require('./pages/ALL.vue')
},{
    path: '*',
    component: Index
}];

export default routers;