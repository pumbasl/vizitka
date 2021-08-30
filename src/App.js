import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


//Стили
import './style/mainStyle.scss';
//-------------------

//Задний фон
import Background from './components/background/background';
//--------------

//routes
import PublicRoutes from './routes/publicRoutes';
//

//Страницы
import ErrorBoundary from './pages/errors/ErrorBoundary'; // Предохранитель
import ViewSource from './components/viewsource/viewsource';
import Header from './layout/header/header';
//--------

export default function App(){
    return(
        <ErrorBoundary>
            <Background />
            <Router>
                <Header />
                    <PublicRoutes />
                <ViewSource />
            </Router>
        </ErrorBoundary>
    );
};