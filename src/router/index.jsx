import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import routesConfig from './config';
import AllComponents from '../components';

export default class CRouter extends Component {
    render() {
        return (
            <Switch>
                {Object.keys(routesConfig).map(key => {
                    routesConfig[key].map(r => {
                        const route = r => {
                            const Component = AllComponents[r.component]
                            return (<Route></Route>)
                        }
                    })
                })}
            </Switch>
        )
    }
}