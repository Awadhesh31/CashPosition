import React from 'react';
import MailIndex from '../components/MailIndex';
import YourPeople from '../components/yourpeople';

const SideNave = () => (
    <div>
        <div className="sidebar-nav">
            <MailIndex />
        </div>
        <div className="sidebar-nav">
            <YourPeople />
        </div>
    </div>
)

export default SideNave;
