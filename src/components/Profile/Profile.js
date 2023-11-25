import { useEffect } from "react";

export const Profile = () => {
  console.log("Profile");

  const channel = new BroadcastChannel("app-data");

  const sendMessage = (e) => {
    setTimeout(() => {
      channel.postMessage("hi");
    }, 1000);
  };

  useEffect(() => {
    console.log("PROFILE: use effect");
      channel.postMessage("вкладка открыта");
  });

  useEffect(() => {
    console.log("PROFILE: use effect-channel");

    channel.onmessage = (event) => {
      console.log(2, "message", event.data);
      sendMessage();
    };
  }, [channel]);
  return <div>Привет, Натали!</div>;
};
