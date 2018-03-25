

import React from "react";
import { Switch, Route } from "react-router-dom";
import InboxList from "../indexRoutes/indexlist";
import IndexView from "../indexRoutes/inboxview";

const Inbox = () => (
  <Switch>
    <Route exact path="/inbox" component={InboxList} />
    <Route path="/inbox/:number" component={IndexView} />
  </Switch>
);

export default Inbox;
