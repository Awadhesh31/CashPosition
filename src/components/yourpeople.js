import React from 'react';
import User from './data/usrdata';

const YourPeople = () => (
  <div>
    <div className="panel panel-default">
      <div className="panel-body inbox-people">
        <div className="dev-email-message-people"><img src="/img/logo.jpg" className="people-img" alt='cashpositive' role='presentation' />&nbsp;&nbsp;Cashpositive People</div>
        <hr />
        <ul>
          {
            User.all().map(u => (
              <li key={u.people}>
                <img src={"/img/" + u.image} className={"people-img"} alt={u.name} role='presentation' />{u.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
)

export default YourPeople;
