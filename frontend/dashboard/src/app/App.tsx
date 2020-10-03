import './App.scss';
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import ROUTES, {RenderRoutes} from "./routes";

const App: FC = () => {
    return (
        <Provider store={store}>
            <RenderRoutes routes={ROUTES} />
        </Provider>
    );
};

export default App;
