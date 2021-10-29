import "./style.css";
import { MiniCard } from "../MiniCard/index";
import word from "../../assets/icon-work.svg";
import play from "../../assets/icon-play.svg";
import study from "../../assets/icon-study.svg";
import exercise from "../../assets/icon-exercise.svg";
import social from "../../assets/icon-social.svg";
import selfcare from "../../assets/icon-self-care.svg";

export const ListMiniCard = () => {
  const list = [
    {
      backgroundColor: "hsl(15, 100%, 70%)",
      icon: word,
      active: "Work",
      hour: "32hrs",
      time: "Last Week - 36hrs",
    },
    {
      backgroundColor: "hsl(195, 74%, 62%)",
      icon: play,
      active: "Play",
      hour: "10hrs",
      time: "Last Week - 8hrs",
    },
    {
      backgroundColor: "hsl(348, 100%, 68%)",
      icon: study,
      active: "Study",
      hour: "4hrs",
      time: "Last Week - 7hrs",
    },
    {
      backgroundColor: "hsl(145, 58%, 55%)",
      icon: exercise,
      active: "Exercise",
      hour: "4hrs",
      time: "Last Week - 5hrs",
    },
    {
      backgroundColor: "hsl(264, 64%, 52%)",
      icon: social,
      active: "Social",
      hour: "5hrs",
      time: "Last Week - 10 rs",
    },
    {
      backgroundColor: "hsl(43, 84%, 65%)",
      icon: selfcare,
      active: "Self Care",
      hour: "2hrs",
      time: "Last Week - 2hrs",
    },
  ];
  return (
    <main>
      {list.map((i) => {
        return <MiniCard InfoCard={i} />;
      })}
    </main>
  );
};
