import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import ShowsIndexContainer from './show/containers/ShowsIndexContainer';
import ShowShowContainer from './show/containers/ShowShowContainer';
import UsersIndexContainer from './user/containers/UsersIndexContainer';
import UserShowContainer from './user/containers/UserShowContainer';
import TeamsIndexContainer from './team/containers/TeamsIndexContainer';
import TeamShowContainer from './team/containers/TeamShowContainer';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={ShowsIndexContainer} />
    <Route path="shows" component={ShowsIndexContainer} />
    <Route path="shows/:id" component={ShowShowContainer} />
    <Route path="users" component={UsersIndexContainer} />
    <Route path="users/:id" component={UserShowContainer} />
    <Route path="teams" component={TeamsIndexContainer} />
    <Route path="teams/:id" component={TeamShowContainer} />
  </Route>
);

export default routes;
