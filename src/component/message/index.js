import React, { useState } from 'react';

function useInput({ type /*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
  }

function Message() {
    const [data, setData] = useState([])
    const [username, userInput] = useInput({ type: "text" })
    const [relation, relationInput] = useInput({ type: "text" })
    const [message, messageInput] = useInput({ type: "text" });

    const submitMessage = () => {
        const frmdetails = {
            username,
            relation,
            message,
        }

        setData([...data, frmdetails])
    }
    
    return (
        <div>
          <div>- {userInput}</div>
          <div>- {relationInput}</div>
          <div>- {messageInput}</div>
          <button onClick={() => submitMessage()}>submitMessage</button>
          <div>
              {data.map((item, key) => {
                      return (
                          <div key={key}>
                              <h1>{item.username}</h1>
                              <h1>{item.relation}</h1> 
                          </div>
                      )
                  })}
          </div>
        </div>
    )
}

export default Message

