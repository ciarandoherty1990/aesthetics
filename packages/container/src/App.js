import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <p>Dr. Laura Aestheticss</p>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};