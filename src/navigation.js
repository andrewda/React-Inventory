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
                path: '/totes',
                component: ToteList
            },
            {
                name: 'All Items',
                navigation: true,
                path: '/all',
                component: AllItems
            }
        ];
    }
}

export default Navigation;
