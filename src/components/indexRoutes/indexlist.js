import React from 'react';
import InboxData from '../data/inboxdata';
import { Link } from 'react-router-dom';
import SideNave from '../sidenave';

const InboxList = () => (
  <div>
    <div className="row-fluid">
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <SideNave />
      </div>
      <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
        <div className="panel panel-default">
          <div className="panel-body inbox-menu">
            <div className="dev-email-message-title"><i className="fa fa-inbox"></i>&nbsp;&nbsp;Inbox</div>
            <hr />
            {
              InboxData.all().map(p => (
                <div className="dev-email-messages-list-item" key={p.number}>
                  <div className="dev-email-messages-list-item-toolbar">
                    <div className="checkbox">
                      <input type="checkbox" id={p.number} />
                      <label htmlFor={p.number}>&nbsp;</label>
                    </div>
                    <div className="star">
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>
                  <div className="dev-email-messages-list-item-info">
                    <Link to={`/inbox/${p.number}`}>
                      <div className="name"><img src={"/img/" + p.image} className="dev-email-message-from-four mCS_img_loaded" alt={p.name} role='presentation' />{p.subject}</div>
                      <div className="time"><i className="fa fa-calendar"></i>&nbsp;&nbsp;{p.time}</div>
                      <div className="message">
                        {p.smallinfo}
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div />
    </div>
  </div>
)

export default InboxList;