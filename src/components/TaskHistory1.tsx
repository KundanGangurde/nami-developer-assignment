import { FunctionComponent, useMemo, type CSSProperties } from "react";
import spoon from "../assets/guc153-7.svg";
import calender from "../assets/guc153-9.svg";
import star from "../assets/grid-garden.svg";

export type TaskHistory1Type = {
  /** Style props */
  propOverflowX?: CSSProperties["overflowX"];
};

const TaskHistory1: FunctionComponent<TaskHistory1Type> = ({
  propOverflowX,
}) => {
  const gUC2782Style: CSSProperties = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full shrink-0 text-left text-xs text-text-text-dark font-button-button-text-secondary">
      <div className="flex-1 rounded-regular bg-background-background-primary box-border flex flex-col items-start justify-start p-2 gap-[12px] max-w-full shrink-0 border-[0.5px] border-solid border-default-grey">
        <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-start gap-[4px] min-w-[144px]">
            <div className="h-[21.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
              <div
                className="flex-1 rounded bg-background-grey-light overflow-x-auto flex flex-row items-start justify-start py-0.5 px-1 gap-[5px]"
                style={gUC2782Style}
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
            </div>
            <div className="h-5 rounded bg-background-grey-light hidden flex-row items-center justify-center py-0.5 px-1 box-border">
              <div className="relative font-medium">Scheduled</div>
            </div>
            <button className="cursor-pointer [border:none] p-1 bg-accent-danger-accent rounded-xl flex flex-row items-start justify-start hover:bg-tomato">
              <div className="relative text-xs font-medium font-text-description-text text-background-background-primary text-left inline-block min-w-[50px]">
                Delayed
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-1 bg-accent-danger-accent rounded-xl flex flex-row items-start justify-start hover:bg-tomato">
              <div className="relative text-xs font-medium font-text-description-text text-background-background-primary text-left inline-block min-w-[64px]">
                Complaint
              </div>
            </button>
          </div>
          <div className="w-[122px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-background-background-primary">
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="rounded-xl bg-accent-danger-accent flex flex-row items-start justify-start py-[2.5px] px-[9px] gap-[4px]">
                <div className="relative font-semibold inline-block min-w-[6px]">
                  1
                </div>
                <div className="h-[13.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                  <img
                    className="w-3 h-3 relative rounded-12xs-5"
                    alt=""
                    src={star}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
          <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[85px]">
            Routine Cleaning
          </div>
          <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
            <div className="relative text-xs font-medium font-text-description-text text-royalblue text-left inline-block min-w-[79px]">
              Internal Task
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-3xs text-text-text-dark-secondary font-text-description-text mq450:flex-wrap">
          <div className="h-4 flex flex-row items-start justify-start py-0 pr-[18px] pl-0 box-border gap-[5px]">
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
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary mq450:flex-wrap">
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
        <div className="w-[319px] bg-background-grey-light hidden flex-col items-start justify-start p-3 box-border gap-[12px] font-text-description-text">
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
              src="/guc153-10.svg"
            />
            <div className="relative font-medium">Accept Task</div>
          </div>
        </div>
        <div className="w-[319px] rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium box-border gap-[8px] whitespace-nowrap text-default-color-primary-light">
          <img
            className="h-small w-small relative"
            alt=""
            src="/guc153-10.svg"
          />
          <div className="relative font-medium">Notify Staff</div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 rounded-small box-border flex flex-row items-start justify-center py-regular1 px-5 whitespace-nowrap max-w-full border-[1px] border-solid border-royalblue">
            <div className="relative text-xs font-medium font-button-button-text-secondary text-royalblue text-left inline-block min-w-[78px]">
              View Details
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TaskHistory1;
