import Home from './containers/Home';
import ToteList from './containers/ToteList';

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
            }
        ];
    }
}

export default Navigation;
