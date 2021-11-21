import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';


const generateClassName = createGenerateClassName ({
    productionPrefix: 'in',
});

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    {/*<Route path="/" component={Landing}/>*/}
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}