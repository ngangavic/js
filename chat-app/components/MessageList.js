import React from 'react'

const SAMPLE_DATA = [
    {
        senderId: 'Vic',
        text: 'Hi. How are you?'
    },
    {
        senderId: 'Mak',
        text: 'Go code.'
    },
    {
        senderId: 'Vic',
        text: 'Always coding :-)'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {SAMPLE_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>

                        </div>
                    )
                })}
            </div>
        )
    }
}
export default MessageList