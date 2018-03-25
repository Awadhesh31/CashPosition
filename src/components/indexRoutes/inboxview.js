import React from 'react';
import { Link } from 'react-router-dom';
import InboxData from '../data/inboxdata';
import SideNave from '../sidenave';

const IndexView = (props) => {
  const i = InboxData.get(
    parseInt(props.match.params.number, 10)
  )
  if (!i) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <div className="row-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <SideNave />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
          <div className="panel panel-default">
            <div className="panel-body inbox-menu">
            </div>
            <div className="container-fluid">
              <div className="dev-email-message-title"><i className="fa fa-bookmark"></i>&nbsp;&nbsp;{i.subject}</div>
              <hr />
              <div className="dev-email-message-from-one">
                <img src={"/img/" + i.image} className="mCS_img_loaded" alt={i.name} role='presentation' />
              </div>
              <div className="dev-email-message-from-two">
                &nbsp;&nbsp; <i className="fa fa-user"></i>&nbsp;&nbsp;{i.name} &nbsp;,&nbsp; &nbsp;&nbsp; <i className="fa fa-calendar"></i>&nbsp;&nbsp;{i.time}<br />
                <span>
                  &nbsp;&nbsp; <b>From :</b>&nbsp;&nbsp;&nbsp;{i.email}
                </span>
              </div>
              <div className="btn-group dev-email-message-from-three">
                <button className="btn btn-default replay-btn"><i className="fa fa-trash"></i></button>
                <Link to="/compose" className="btn btn-default replay-btn"><i className="fa fa-comments"></i></Link>
                <button className="btn btn-default replay-btn"><i className="fa fa-archive"></i></button>
                <Link to='/inbox'>
                  <button className="btn btn-default replay-btn"><i className="fa fa-mail-reply"></i></button>
                </Link>
              </div>
            </div>
            <div className="dev-email-message-text container-fluid">
              <p className="messg-view">{i.info}</p>
            </div>
            <div className="dev-email-message-form container-fluid">
              <div className="form-group">
                <textarea className="form-control cashposittive-textarea" placeholder="Post a quick reply"></textarea><br />
                <button className="btn btn-default"><i className="fa fa-paperclip"></i></button>&nbsp;&nbsp;&nbsp;
                <button className="btn btn-default"><i className="fa fa-photo"></i></button>
                <button className="btn btn-danger pull-right">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexView;
