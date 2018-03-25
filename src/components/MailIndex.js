import React from 'react';
import { Link } from 'react-router-dom';

const MailIndex = () => (
  <div>
    <div className="panel panel-default">
      <div className="panel-body inbox-menu">
        <Link to="/compose" className="btn btn-danger btn-block">Compose New Mail</Link>
        <ul>
          <li>
            <Link to='/inbox'><i className="fa fa-inbox"></i> Inbox <span className="label label-danger">4</span></Link>
          </li>
          <li>
            <Link to='/sentitems'><i className="fa fa-star"></i>Sent Items<span className="label label-success">2</span></Link>
          </li>
          <li>
            <Link to='/junkemail'><i className="fa fa-rocket"></i>Junk Email<span className="label label-warning">1</span></Link>
          </li>
          <li>
            <Link to='/drafts'><i className="fa fa-bookmark"></i>Drafts</Link>
          </li>
          <li>
            <Link to='/deleteditems'><i className="fa  fa-trash-o"></i>Deleted Items<span className="label label-info">12</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default MailIndex;