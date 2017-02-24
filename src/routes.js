
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Index = resolve => {
    require.ensure(['./pages/index.vue'], () => {
        resolve(require('./pages/index.vue'));
    });
};

const Movie = resolve => {
    require.ensure(['./pages/book.vue'], () => {
        resolve(require('./pages/book.vue'));
    });
};

const routers = [{
    path: '/',
    name: 'index',
    component: Index
}, {
    path: '/movie',
    component: require('./pages/movie.vue')
},{
    path: '/book',
    component: require('./pages/book.vue')
},{
    path: '*',
    component: Index
}];

export default routers;