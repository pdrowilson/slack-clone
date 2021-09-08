import { useState } from 'react'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

import firebase from 'firebase/app'
import 'firebase/firestore'
import { db } from '../firebase'

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()

    console.log(channelId)

    if (!channelId) {
      return false
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Pedro Wilson',
      userImage:
        'https://scontent.ffor15-1.fna.fbcdn.net/v/t31.18172-8/14708071_323496961346779_6339931618825170226_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lZSYvyZvBm4AX_8tooq&_nc_ht=scontent.ffor15-1.fna&oh=384b731085d7b2ae08160c0cd5242de9&oe=615B5225'
    })

    setInput('')
  }

  chatRef?.current?.scrollIntoView({
    behavior: 'smooth'
  })

  return (
    <ChatInputContainer>
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message ${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`
