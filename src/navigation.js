import Home from './containers/Home';
import ToteView from './containers/ToteView';
import AllItems from './containers/AllItems';
import AllLocations from './containers/AllLocations';

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
                component: ToteView
            },
            {
                path: '/locations',
                component: AllLocations
            }
        ];
    }
}

export default Navigation;
