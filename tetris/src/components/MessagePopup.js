// message disply maybe use as overlay??

import classes from'./MessagePopup.module.css'

const MessagePopup = props =>{
    return (
        <div className={classes.message_popup}>
          <h1>Message Title</h1>
          <p>Message info...</p>
        </div>
      )
}

export default MessagePopup;