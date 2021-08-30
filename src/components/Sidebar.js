import styled from "styled-components"
import { 
    FiberManualRecord, 
    Create, 
    InsertComment, 
    Inbox, 
    Drafts,
    BookmarkBorder,
    FileCopy,
    PeopleAlt,
    Apps,
    ExpandLess,
    ExpandMore,
    Add
} from "@material-ui/icons"

import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>PW Team</h2>
                    <h3>
                        <FiberManualRecord />
                        Pedro Wilson
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title={'Threads'} />
            <SidebarOption Icon={Inbox} title={'Mentions & Reactions'} />
            <SidebarOption Icon={Drafts} title={'Saved Items'} />
            <SidebarOption Icon={BookmarkBorder} title={'Chanel Browser'} />
            <SidebarOption Icon={FileCopy} title={'Chanel Browser'} />
            <SidebarOption Icon={PeopleAlt} title={'People & User Groups'} />
            <SidebarOption Icon={Apps} title={'Apps'} />
            <SidebarOption Icon={ExpandLess} title={'Show Less'} />
            <hr />
            <SidebarOption Icon={ExpandMore} title={'Channels'} />
            <hr />
            <SidebarOption Icon={Add} addChannelOption title={'Add Channels'} />
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;
    
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 50%;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;

