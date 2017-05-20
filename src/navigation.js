import MainPage from './containers/MainPage';

class Navigation {
    static get routes() {
        return [
            {
                name: 'Home',
                navigation: true,
                path: '/',
                exact: true,
                component: MainPage
            }
        ];
    }
}

export default Navigation;
