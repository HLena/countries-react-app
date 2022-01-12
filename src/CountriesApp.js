import { Provider } from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';


const CountriesApp = () => {

    return (
        <Provider store = {store}>
            <AppRouter/>
        </Provider>
    )
}

export default CountriesApp
