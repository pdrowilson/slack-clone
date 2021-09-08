import { useEffect, useRef } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectRoomId } from '../features/appSlice'
import { useDocument, useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase";

import { 
    StarBorderOutlined,
    InfoOutlined
} from '@material-ui/icons'

import ChatInput from './ChatInput'
import Message from '../components/Message';

function Chat() {
    const chatRef = useRef(null)
    const roomId = useSelector(selectRoomId)
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages, loading] = useCollection(
        roomId && 
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timeStamp', 'asc')
    )

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                    <Header>
                        <HeaderLeft>
                            <h4>
                                <strong>#{roomDetails?.data().name} </strong>
                            </h4>
                            <StarBorderOutlined />
                        </HeaderLeft>
                        <HeaderRight>
                            <p><InfoOutlined /> Details</p>
                        </HeaderRight>
                    </Header>
                    <ChatMessages>
                        {roomMessages?.docs.map((doc) => {
                            const { message, timeStamp, user, userImage } = doc.data()
                            return (
                                <Message 
                                    key={doc.id}
                                    message={message}
                                    timeStamp={timeStamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            );
                        })}
                        <ChatBottom ref={chatRef}/>
                    </ChatMessages>
                    <ChatInput 
                        chatRef={chatRef}
                        channelName={ roomDetails?.data().name }
                        channelId={roomId}
                    />
                </>
            )}
        </ChatContainer>
    )

}

export default Chat

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
    padding-bottom: 100px;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px;
        font-size: 16px;
        
    }
`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;