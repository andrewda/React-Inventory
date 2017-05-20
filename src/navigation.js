import MainPage from './containers/MainPage';
import ToteList from './containers/ToteList';

class Navigation {
    static get routes() {
        return [
            {
                name: 'Home',
                navigation: true,
                path: '/',
                exact: true,
                component: MainPage
            },
            {
                name: 'ToteList',
                navigation: true,
                path: '/ToteList',
                exact: true,
                component: ToteList
            },
        ];
    }
}

export default Navigation;
