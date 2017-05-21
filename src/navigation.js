import Home from './containers/Home';
import ToteList from './containers/ToteList';
import AllItems from './containers/AllItems';

class Navigation {
    static get routes() {
        return [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/items',
                component: AllItems
            },
            {
                path: '/totes',
                component: ToteList
            }
        ];
    }
}

export default Navigation;
