import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';


//pages
const Main = lazy(() => import("../pages/main/main"));
const Example = lazy(() => import("../pages/example/example"));
const Contacts = lazy(() => import("../pages/contacts/contacts"));
const Errors = lazy(() => import("../pages/errors/Errors"));
//

export default function Routes(){
    return(
        <Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/example' component={Example} />
                <Route exact path='/contacts' component={Contacts} />
                <Route exact path="*">
                    <Errors id="404" />
                </Route>
            </Switch>
        </Suspense>
    );
}