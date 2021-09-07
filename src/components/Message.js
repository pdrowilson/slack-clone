import styled from "styled-components"

function Message( {message, user, userImage, timeStamp} ) {
  return (
    <MessageContainer>
       <img src={userImage} alt={user} />
       <MessageInfo>
         <h4>
           {user} <span>{new Date(timeStamp?.toDate()).toUTCString()}</span>
         </h4>
         <p>{message}</p>
       </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    width: 50px;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;