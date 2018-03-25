import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Archive from './mail_components/Archive';
import DeletedItems from './mail_components/DeletedItems';
import Drafts from './mail_components/Drafts';
import Inbox from './mail_components/inbox';
import JunkEmail from './mail_components/JunkEmail';
import SentItems from './mail_components/SentItems';
import Compose from './composeMail';

const Roster = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/compose' component={Compose}/>
    <Route path='/archive' component={Archive}/>
    <Route path='/deletedItems' component={DeletedItems}/>
    <Route path='/drafts' component={Drafts}/>
    <Route path='/inbox' component={Inbox}/>
    <Route path='/junkemail' component={JunkEmail}/>
    <Route path='/sentitems' component={SentItems}/>
  </Switch>
)

export default Roster;
