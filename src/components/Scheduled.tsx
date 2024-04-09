import { FunctionComponent, useMemo, type CSSProperties } from "react";
import one from "../assets/guc153-18.svg";
import spoon from "../assets/guc153-7.svg";
import calender from "../assets/guc153-9.svg";

export type ScheduledType = {
  /** Style props */
  propOverflowX?: CSSProperties["overflowX"];
};

const Scheduled: FunctionComponent<ScheduledType> = ({ propOverflowX }) => {
  const gUC2781Style: CSSProperties = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  return (
    <div className="self-stretch rounded-regular bg-background-background-primary flex flex-col items-start justify-start p-2 gap-[12px] text-left text-xs text-text-text-dark font-button-button-text-secondary border-[0.5px] border-solid border-default-grey">
      <div className="self-stretch h-5 flex flex-row items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[4px]">
          <div
            className="self-stretch rounded bg-background-grey-light overflow-x-auto flex flex-row items-start justify-start py-0.5 px-1 gap-[5px]"
            style={gUC2781Style}
          >
            <img
              className="h-smaller2 w-smaller2 relative rounded-sm overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src={spoon}
            />
            <div className="relative font-semibold inline-block min-w-[42px]">
              Rajesh
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-accent-danger-accent" />
            </div>
          </div>
          <div className="h-5 rounded bg-background-grey-light hidden flex-row items-center justify-center py-0.5 px-1 box-border">
            <div className="relative font-medium">Scheduled</div>
          </div>
          <div className="h-5 w-6 rounded-xl bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 box-border">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src={one}
            />
          </div>
        </div>
        <div className="h-5 w-[207px] hidden" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
        <div className="flex-1 relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
          Routine Cleaning
        </div>
        <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
          <div className="relative text-xs font-medium font-text-description-text text-default-color-primary text-left inline-block min-w-[67px]">
            Guest Task
          </div>
        </button>
      </div>
      <div className="self-stretch h-4 flex flex-row items-start justify-between gap-[20px] text-3xs text-text-text-dark-secondary font-text-description-text">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-0 gap-[5px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src={calender}
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[113px] whitespace-nowrap">
              {" "}
              21 Jul 2024 | 03:00 am
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="flex flex-row items-start justify-start">
            <div className="relative font-medium inline-block min-w-[42px]">
              # 68988
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary">
        <div className="flex flex-row items-start justify-start">
          <div className="relative font-semibold inline-block min-w-[80px]">
            From:Pantry
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative font-semibold inline-block min-w-[83px]">
            To:Reception
          </div>
        </div>
      </div>
      <div className="self-stretch bg-background-grey-light hidden flex-col items-start justify-start p-3 gap-[12px] font-text-description-text">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[13px]">
            <div className="h-[15px] w-[295px] flex flex-row items-center justify-start py-0 pr-[23px] pl-0 box-border gap-[8px]">
              <div className="self-stretch flex-1 relative">
                <b>Step 1:</b>
                <span> Change the sheets and replace towels</span>
              </div>
              <div className="self-stretch w-3.5 relative text-secondary-gray hidden">
                x2
              </div>
            </div>
            <div className="h-4 w-4 relative hidden">
              <div className="absolute h-smaller w-smaller top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
            </div>
          </div>
          <div className="w-[229px] relative font-medium hidden text-default-color-primary">
            <span>Instructions:</span>
            <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
            <span className="text-text-text-dark">
              Please get conditioners.
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[13px]">
            <div className="h-[15px] w-[295px] flex flex-row items-center justify-start py-0 pr-6 pl-0 box-border gap-[8px]">
              <div className="self-stretch flex-1 relative">
                <b>Step2:</b>
                <span> Change the sheets and replace towels</span>
              </div>
              <div className="self-stretch w-3.5 relative text-secondary-gray hidden">
                x2
              </div>
            </div>
            <div className="h-4 w-4 relative hidden">
              <div className="absolute h-smaller w-smaller top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
            </div>
          </div>
          <div className="h-[15px] relative font-medium inline-block text-default-color-primary">
            <span>Instructions:</span>
            <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
            <span className="text-text-text-dark">
              Please get conditioners.
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[13px]">
            <div className="h-[15px] w-[295px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
              <div className="self-stretch flex-1 relative">
                <b>Step 3:</b>
                <span> Change the sheets and replace towels</span>
              </div>
              <div className="self-stretch w-3.5 relative text-secondary-gray hidden">
                x2
              </div>
            </div>
            <div className="h-4 w-4 relative hidden">
              <div className="absolute h-smaller w-smaller top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
            </div>
          </div>
          <div className="w-[229px] relative font-medium hidden text-default-color-primary">
            <span>Instructions:</span>
            <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
            <span className="text-text-text-dark">
              Please get conditioners.
            </span>
          </div>
        </div>
        <div className="self-stretch rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium gap-[8px] whitespace-nowrap text-default-color-primary-light font-button-button-text-secondary">
          <img
            className="h-small w-small relative"
            alt=""
            src="/guc153-29.svg"
          />
          <div className="relative font-medium">Accept Task</div>
        </div>
      </div>
      <div className="self-stretch rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium gap-[8px] whitespace-nowrap text-default-color-primary-light">
        <img className="h-small w-small relative" alt="" src="/guc153-29.svg" />
        <div className="relative font-medium">Notify Staff</div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-xl flex flex-row items-start justify-start">
        <div className="flex-1 rounded-small flex flex-row items-start justify-center py-regular1 px-5 whitespace-nowrap border-[1px] border-solid border-royalblue">
          <div className="relative text-xs font-medium font-button-button-text-secondary text-royalblue text-left inline-block min-w-[78px]">
            View Details
          </div>
        </div>
      </button>
    </div>
  );
};

export default Scheduled;
