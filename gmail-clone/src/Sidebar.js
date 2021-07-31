import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize='large'/>} className="sidebar__compose">Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54}/>
        </div>
    )
}

export default Sidebar;