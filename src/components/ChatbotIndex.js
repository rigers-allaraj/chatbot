import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import botPathImage from "./chatbotAvatarImage.jpg";
import userPathImage from "./userImage.png";

const ChatBotIndex = () => {
  //1) if image import is an object usually we access in this way
  //2) bot avatar and user avatar accept only "string" type
  // const botPathImage = botFavicon.src;
  // const userPathImage = userImage.src;

  // 3) open chat bot after 5 seconds even the user open it earlier we should remove the set interval time for that case
  // const [openChatBot, setOpenChatBot] = useState(false);
  // const [initialTimer, setInitialTimer] = useState(true);
  // const [timerValue, setTimerValue] = useState(null);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setOpenChatBot(true);
  //   }, 5000);
  //   setInitialTimer(true);
  //   setTimerValue(timerId);

  //   return () => {
  //     clearTimeout(timerId);
  //     setInitialTimer(false);
  //     setTimerValue(null);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (initialTimer && timerValue) {
  //     clearTimeout(timerValue);
  //     setInitialTimer(false);
  //     setTimerValue(null);
  //   }
  //   // eslint-disable-next-line
  // }, [openChatBot]);

  // 4)Last one should be this function to get all values from the chat bot steps
  // const onFinish = ({ renderedSteps, steps, values }) => {
  //   const name = renderedSteps.find(obj => obj.id == 'TriggerID').value;
  //   const surname = renderedSteps.find(obj => obj.id == 'TriggerID') != undefined ? renderedSteps.find(obj => obj.id == 'TriggerID').value : undefined;

  //   let myHeaders = new Headers();
  //   myHeaders.append('Authorization', `${process.env.SENDGRID_API_KEY}`);
  //   myHeaders.append('Content-Type', 'application/json');
  //   const raw = JSON.stringify({
  //     list_ids: ['SendgridcollectionID'],
  //     contacts: [
  //       {
  //         first_name: name,
  //         last_name: surname,
  //         email: email,
  //         phone_number: phone,

  //         custom_fields: {
  //           e10_T: time != undefined ? time.toLocaleString() : undefined,
  //           e5_T: brand == 'Tjeter' ? renderedSteps.find(obj => obj.id == 'TrigerID').value : brand.toString(),
  //           e13_T: name,
  //         },
  //       },
  //     ],
  //   });

  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow',
  //   };

  //   if (email != undefined) {
  //     fetch('https://api.sendgrid.com/v3/marketing/contacts', requestOptions)
  //       .then(response => {
  //         if (response.status === 202) {
  //           console.log('Thanks for contacting us!');
  //         }
  //       })
  //       .then(result => console.log(result))
  //       .catch(error => console.log('error', error));
  //   }
  // };
  return (
    <ChatBot
      floatingStyle={{
        background: "linear-gradient(to bottom right, #000 15%, #fff 75%)",
      }}
      style={{
        backgroundColor: "#FFFFF",
        boxShadow: `0.34rem 0.34rem 13px -8px #003399`,
        borderRadius: "20px",
      }}
      headerTitle='React Simple Chatbot'
      bubbleOptionStyle={{
        paddingInline: "8px",
        backgroundColor: "inherit",
        color: "#003399",
        border: "1px solid #0062a5",
      }}
      floating={true}
      // enableMobileAutoFocus={true}
      botAvatar={botPathImage}
      // opened={openChatBot}
      // toggleFloating={({ opened }) => setOpenChatBot(opened)}
      // handleEnd={onFinish}
      userAvatar={userPathImage}
      customDelay={200}
      botDelay={200}
      inputStyle={{
        width: "19rem",
        marginLeft: "1px",
        height: "3rem",
        background: "linear-gradient(to right, #D3D3D3, #DCDCDC, #FFFFFF)",
        borderRadius: "289px",
      }}
      // submitButtonStyle={{ borderRadius:'35px', color: 'black !important', background: 'linear-gradient(to #DCDCDC, blue, pink)'}}
      // submitButtonStyle={{color:'#f75d34 !important', marginRight:'5px', borderRadius: '80%' , backgroundColor: '#FFFFFF', radius: '30', color: '#003399' , border: `2px solid #003399`, position: 'absolute', fontSize:'5px', msTransform: 'translateY(-50%)',transform: 'translateY(-50%)',  top: '50%', margin: '0'}}
      // hideUserAvatar={true}
      // botAvatar={{ src: userbotimage, srcSet: userbotimage }}
      // userDelay={0}
      // enableMobileAutoFocus={true}
      steps={[
        {
          id: "BOT/intro",
          message: `Hi! Nice to meet you! What is you name?`,
          trigger: "user-01",
        },
        {
          id: "user-01",
          user: true,
          trigger: "ID-02",
        },
        {
          id: "ID-02",
          message: `Hi {previousValue}, Do you need any help ? `,
          trigger: "ID-03",
        },
        {
          id: "ID-03",
          options: [
            {
              value: 1,
              label: "Yes",
              trigger: "ID-04",
            },
            {
              value: 2,
              label: "No",
              trigger: "BOT/last",
            }
          ]
        },

        {
          id: "ID-03",
          options: [
            {
              value: 1,
              label: "Yes",
              trigger: "ID-04",
            },
            {
              value: 2,
              label: "No",
              trigger: "BOT/last",
            }
          ]
        },
        {
          id: "ID-04",
          message: `Nice  Do you want to learn about the emojipedia or chatbot?`,
          trigger: "ID-05",
        },

        {
          id: "ID-05",
          options: [
            {
              value: 1,
              label: "Emojipedia 🔥",
              trigger: "ID-06",
            },
            {
              value: 2,
              label: "Chatbot 😎 ",
              trigger: "ID-07",
            }
          ]
        },
        {
          id: "ID-06",
          // component: <Test />,   => You can create a component and use in that way
          component: (
            <div>
              {" "}
              <a
                href='https://emojipedia.org/'
                target='_blank'
                style={{
                  textDecoration: "none",
                  outline: "none",
                  color: "#003399",
                }}
                rel='noreferrer'>
                {" "}
                Learn Emojipedia 🚀
              </a>{" "}
            </div>
          ),
          trigger: "BOT/last-01",
          // waitAction: true,
        },

        {
          id: "ID-07",
          // component: <Test />,   => You can create a component and use in that way
          component: (
            <div>
              {" "}
              <a
                href='https://www.npmjs.com/package/react-simple-chatbot'
                target='_blank'
                style={{
                  textDecoration: "none",
                  outline: "none",
                  color: "#003399",
                }}
                rel='noreferrer'>
                {" "}
                Click here to learn react simple chatbot and I challenge you to write 4 numbers last one 7
              </a>{" "}
            </div>
          ),
          // waitAction: true,
          trigger: "ID-08",
        },
        {
          id: "ID-08",
          // component: <Test />,   => You can create a component and use in that way
          // waitAction: true,
          // message : "User text input",
          user: true,
          validator: (value) => {
            if (
              // value.match(
              //   /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
              // )
              value.match(/^(\d{3}7)$/i)
            ) {
              return true;
            } else {
              return "Please enter a 4 digits finished 7";
              //or only continue the next step  return true;
            }
          },
          trigger: "ID-09",
        },
        {
          id: "ID-09",
          message: ({ previousValue, steps }) =>
            `Your number was ${steps["ID-08"].value} 😃`,
          trigger: "ID-10",
        },
        {
          id: "ID-10",
          message: 'If you now know selectors, very easily you can learn Xpath at the link that i will attach above 💪',
          trigger:"ID-11"
        },
        {
          id: "ID-11",
          component: (
            <div>
              {" "}
              <a
                href='https://devhints.io/xpath'
                target='_blank'
                style={{
                  textDecoration: "none",
                  outline: "none",
                  color: "#003399",
                }}
                rel='noreferrer'>
                {" "}
                //xpath[contains(@id,"devhints")]
              </a>{" "}
            </div>
          ),
          end: true,
        },
        {
          id: "BOT/last",
          message: 'No problem! You know were i am if you need to learn this cool library. 👍',
          end: true,
        },
        {
          id: "BOT/last-01",
          waitAction: true,
          message: 'Now you know where to find the best emojies 🙌',
          end: true,
        },
      ]}
    />
  );
}

// you can trigger to the next step inside The Test component
// {
//   id: 'BOT/defensive-11',
//   component: <Test />,
//   waitAction: true,
// },



export default ChatBotIndex;