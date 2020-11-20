import React from "react";
import Message from "./Message";


const messageData1 = {
  avatar: "https://www.clipartmax.com/png/full/466-4663678_owls-‿✿⁀°••○-subject-adorable-owl-cute-owl-svg.png",
  name: "Ignat",
  message: "Hello, Dear Friend !",
  time: "12:15",
};

const messageData2 = {
  avatar: "https://img.pngio.com/cute-owl-png-clipart-gallery-yopriceville-high-quality-images-cute-owl-png-8000_7072.png",
  name: "Viktor",
  message: "Hey, How are you?",
  time: "12:20",
};


function HW1() {
  return (
    <div>
      <hr/>
      homeworks 1

      <Message
        avatar={messageData1.avatar}
        name={messageData1.name}
        message={messageData1.message}
        time={messageData1.time}
      />

      <Message
        avatar={messageData2.avatar}
        name={messageData2.name}
        message={messageData2.message}
        time={messageData2.time}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr/>
    </div>
  );
}

export default HW1;
