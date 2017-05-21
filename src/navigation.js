import Home from './containers/Home';
import ToteList from './containers/ToteList';
import AllItems from './containers/AllItems';

class Navigation {
    static get routes() {
        return [
            {
                name: 'Home',
                navigation: true,
                path: '/',
                exact: true,
                component: Home
            },
            {
                name: 'Tote List',
                navigation: true,
                path: '/ToteList',
                component: ToteList
            },
            {
                name: 'All Items',
                navigation: true,
                path: '/AllItems',
                component: AllItems
            }
        ];
    }
}

export default Navigation;
