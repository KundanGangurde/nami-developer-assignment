import { FunctionComponent } from "react";
import notification from "../assets/notification.svg"
import profile from "../assets/ellipse-185@2x.png"

const GUC: FunctionComponent = () => {
  return (
    <header className="self-stretch bg-background-background-primary flex flex-row items-start justify-between py-7 pr-8 pl-10 top-[0] z-[99] sticky gap-[20px] text-left text-13xl text-text-text-dark font-button-button-text-secondary border-b-[1px] border-solid border-default-grey">
      <div className="w-[163px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit">
          ABCHotel
        </h1>
      </div>
      <div className="h-12 w-[136px] flex flex-row items-start justify-start gap-[40px]">
        <img
          className="h-bigger w-bigger relative overflow-hidden shrink-0 min-h-[48px]"
          loading="lazy"
          alt=""
          src={notification}
        />
        <img
          className="h-bigger w-bigger relative rounded-[50%] object-cover min-h-[48px]"
          loading="lazy"
          alt=""
          src={profile}
        />
      </div>
    </header>
  );
};

export default GUC;
