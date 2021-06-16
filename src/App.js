import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Стили
import './style/mainStyle.scss';
//-------------------

//Задний фон
import Background from './components/background/background';
//--------------

//Страницы
import ErrorBoundary from './layout/errors/ErrorBoundary'; // Предохранитель

import ViewSource from './layout/viewsource/viewsource';
import Header from './layout/header/header';

const Main = lazy(() => import("./layout/main/main"));
const Example = lazy(() => import("./layout/example/example"));
const Reviews = lazy(() => import("./layout/reviews/reviews"));
const Contacts = lazy(() => import("./layout/contacts/contacts"));
const Errors = lazy(() => import("./layout/errors/Errors"));

//--------

export default function App(){
    return(
        <ErrorBoundary>
            <Background />
            <Router>
                <Header />
                <Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/example' component={Example} />
                        <Route exact path='/reviews' component={Reviews} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route exact path="*">
                            <Errors id="404" />
                        </Route>
                    </Switch>
                </Suspense>
                <ViewSource />
            </Router>
        </ErrorBoundary>
    );
};