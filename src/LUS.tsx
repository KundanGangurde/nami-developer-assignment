import { FunctionComponent } from "react";
import GUC from "./components/GUC";
import Scheduled1 from "./components/Scheduled1";
import Scheduled from "./components/Scheduled";
import TaskHistory1 from "./components/TaskHistory1";
import TaskHistory from "./components/TaskHistory";
import home from "./assets/guc153.svg"
import down from "./assets/guc153-1.svg"
import console from "./assets/guc153-2.svg"
import attendance from "./assets/guc153-3.svg"
import overview from "./assets/guc153-4.svg"
import staff from "./assets/guc153-6.svg"
import time from "./assets/access-time.svg"
import check from "./assets/guc153-10.svg"
import swap from "./assets/guc153-8.svg"
import spoon from "./assets/guc153-7.svg"
import one from "./assets/guc153-18.svg"
import calender from "./assets/guc153-9.svg"

const LUS: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-background-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[42px] box-border gap-[32px] tracking-[normal] text-left text-5xl text-text-text-dark font-button-button-text-secondary mq925:gap-[16px_32px]">
      <GUC />
      <div className="rounded-smaller2 bg-default-color-primary-light box-border overflow-x-auto hidden flex-row items-center justify-start py-device-padding pr-[31px] pl-8 gap-[40px] max-w-full border-[1px] border-solid border-default-grey">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="relative font-semibold mq450:text-lgi">Welcome!</div>
          <div className="relative text-[20px] whitespace-pre-wrap mq450:text-base">{`Checkout What’s goin on!  `}</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[32px] text-default-color-primary mq925:flex-wrap">
          <div className="h-[98px] w-[212px] rounded-big bg-background-grey-light box-border flex flex-col items-center justify-start py-smaller4 pr-0 pl-smaller4 gap-[16px] border-[1px] border-solid border-default-grey">
            <div className="flex-1 relative font-semibold whitespace-nowrap mq450:text-lgi">
              ₹ 1,85,000
            </div>
            <div className="self-stretch h-5 relative text-base font-semibold text-text-text-dark-secondary inline-block">
              Housekeeping revenue
            </div>
          </div>
          <div className="h-[98px] w-[212px] rounded-big bg-background-grey-light box-border flex flex-col items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-default-grey">
            <div className="flex-1 relative font-semibold mq450:text-lgi">
              30 sec
            </div>
            <div className="h-5 relative text-base font-semibold text-text-text-dark-secondary inline-block">
              Avg Response Time
            </div>
          </div>
          <div className="h-[98px] w-[212px] rounded-big bg-background-grey-light box-border flex flex-col items-center justify-start py-smaller4 pr-2.5 pl-smaller4 gap-[16px] border-[1px] border-solid border-default-grey">
            <div className="flex-1 relative font-semibold mq450:text-lgi">
              93%
            </div>
            <div className="self-stretch h-5 relative text-base font-semibold text-text-text-dark-secondary inline-block">
              Task Completion Rate
            </div>
          </div>
        </div>
        <img
          className="h-normal1 w-normal1 relative overflow-hidden shrink-0"
          alt=""
          src="/globalicon.svg"
        />
      </div>
      <main className="w-[1376px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
        <section className="flex-1 flex flex-row items-start justify-start gap-[31px] max-w-full text-left text-base text-text-text-dark font-button-button-text-secondary mq700:gap-[31px_15px]">
          <div className="h-[922px] w-56 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border mq925:hidden">
            <div className="self-stretch flex-1 bg-background-background-primary flex flex-col items-start justify-start pt-[5px] px-0 pb-[629px] gap-[10px] mq450:pb-[266px] mq450:box-border mq925:pt-5 mq925:pb-[409px] mq925:box-border">
              <div className="h-12 bg-background-background-secondary box-border flex flex-row items-center justify-start py-3 pr-[105px] pl-8 gap-[12px] border-b-[5px] border-solid border-default-color-primary">
                <img
                  className="h-normal w-normal relative overflow-hidden shrink-0"
                  alt=""
                  src={home}
                />
                <div className="relative font-semibold inline-block min-w-[51px]">
                  Home
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch h-12 flex flex-row items-center justify-start py-3 pr-[30px] pl-1.5 box-border">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                    <img
                      className="h-very-big w-very-big relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src={down}
                    />
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[59px] pl-0 gap-[12px]">
                      <img
                        className="h-normal w-normal relative overflow-hidden shrink-0"
                        alt=""
                        src={console}
                      />
                      <div className="relative font-semibold inline-block min-w-[67px]">
                        Console
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start py-regular1 pr-[50px] pl-10 gap-[12px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src={attendance}
                    />
                    <div className="relative font-semibold inline-block min-w-[98px]">
                      Attendance
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start py-regular1 pr-[65px] pl-10 gap-[12px]">
                    <img
                      className="h-very-big w-very-big relative"
                      alt=""
                      src={overview}
                    />
                    <div className="relative font-semibold inline-block min-w-[83px]">
                      Overview
                    </div>
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start py-regular1 pr-[17px] pl-10 gap-[12px]">
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/guc153-5.svg"
                    />
                    <div className="h-5 flex-1 relative font-semibold inline-block">
                      Scheduled Task
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start py-regular1 pr-[107px] pl-10 gap-[12px]">
                    <img
                      className="h-normal w-normal relative overflow-hidden shrink-0"
                      alt=""
                      src={staff}
                    />
                    <div className="relative font-semibold inline-block min-w-[41px]">
                      Staff
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_255px)] text-5xl mq925:max-w-full">
            <h1 className="m-0 w-[228px] relative text-inherit font-semibold font-inherit inline-block box-border pr-5 mq450:text-lgi">
              Tasks of the day
            </h1>
            <div className="self-stretch flex flex-row items-end justify-start gap-[24px] max-w-full text-xs font-text-description-text mq925:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border max-w-full mq700:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="w-[583px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] max-w-full mq700:flex-wrap">
                    <button className="cursor-pointer py-[5px] px-[7px] bg-[transparent] rounded-xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-default-grey hover:bg-gray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                      <div className="relative text-sm font-medium font-button-button-text-secondary text-text-text-dark-secondary text-left inline-block min-w-[98px]">
                        Not Accepted
                      </div>
                    </button>
                    <button className="cursor-pointer py-[5px] px-[7px] bg-[transparent] w-[79px] rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-default-grey hover:bg-gray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                      <div className="relative text-sm font-medium font-button-button-text-secondary text-text-text-dark-secondary text-left inline-block min-w-[63px]">
                        Ongoing
                      </div>
                    </button>
                    <button className="cursor-pointer py-[5px] px-[7px] bg-[transparent] w-[91px] rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-default-grey hover:bg-gray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                      <div className="relative text-sm font-medium font-button-button-text-secondary text-text-text-dark-secondary text-left inline-block min-w-[75px]">
                        Scheduled
                      </div>
                    </button>
                    <button className="cursor-pointer py-[5px] px-[7px] bg-[transparent] w-[94px] rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-default-grey hover:bg-gray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                      <div className="relative text-sm font-medium font-button-button-text-secondary text-text-text-dark-secondary text-left inline-block min-w-[78px]">
                        Completed
                      </div>
                    </button>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px] min-w-[99px]">
                      <button className="cursor-pointer py-[5px] px-[7px] bg-[transparent] flex-1 rounded-xl flex flex-row items-center justify-center border-[1px] border-solid border-default-grey hover:bg-gray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                        <div className="relative text-sm font-medium font-button-button-text-secondary text-text-text-dark-secondary text-left inline-block min-w-[59px]">
                          Delayed
                        </div>
                      </button>
                      <button className="cursor-pointer py-[5px] px-[7px] bg-[transparent] flex-1 rounded-xl flex flex-row items-center justify-center border-[1px] border-solid border-default-grey hover:bg-gray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                        <div className="relative text-sm font-medium font-button-button-text-secondary text-text-text-dark-secondary text-left inline-block min-w-[54px]">
                          Ontime
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq700:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[234px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 rounded-regular bg-background-background-primary box-border flex flex-col items-start justify-start p-2 gap-[12px] max-w-full shrink-0 border-[0.5px] border-solid border-default-grey">
                          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-3xs text-background-background-primary mq450:flex-wrap">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[4px] min-w-[140px]">
                              <div className="h-[21.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-xs text-text-text-dark font-button-button-text-secondary">
                                <div className="flex-1 rounded bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 gap-[5px]">
                                  <img
                                    className="h-smaller2 w-smaller2 relative rounded-sm overflow-hidden shrink-0 min-h-[16px]"
                                    loading="lazy"
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
                              <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
                                <div className="relative text-xs font-medium font-text-description-text text-accent-danger-accent text-left inline-block min-w-[84px]">
                                  Not Accepted
                                </div>
                              </button>
                              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                                <div className="w-6 h-5 rounded-xl bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 box-border">
                                  <img
                                    className="h-4 w-4 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={swap}
                                  />
                                </div>
                              </div>
                              <div className="h-5 w-16 rounded bg-accent-danger-accent hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Delayed
                                </div>
                              </div>
                              <div className="h-5 w-16 rounded bg-accent-danger-accent overflow-hidden shrink-0 hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Complaint
                                </div>
                              </div>
                            </div>
                            <div className="w-32 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                              <div className="self-stretch flex flex-row items-start justify-end">
                                <button className="cursor-pointer [border:none] py-smaller3 px-small2 bg-honeydew h-[21px] rounded-xl flex flex-row items-start justify-start box-border gap-[4px] hover:bg-paleturquoise">
                                  <img
                                    className="h-smaller w-smaller relative overflow-hidden shrink-0"
                                    alt=""
                                    src={time}
                                  />
                                  <div className="relative text-sm font-medium font-text-description-text text-accent-accent-success text-left inline-block min-w-[46px]">
                                    20min
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-base font-button-button-text-secondary mq450:flex-wrap">
                            <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[113px]">
                              Routine Cleaning
                            </div>
                            <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
                              <div className="relative text-xs font-medium font-text-description-text text-default-color-primary text-left inline-block min-w-[67px]">
                                Guest Task
                              </div>
                            </button>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary mq450:flex-wrap">
                            <div className="h-4 flex flex-row items-start justify-start gap-[5px]">
                              <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] [debug_commit:f6aba90]"
                                loading="lazy"
                                alt=""
                                src={calender}
                              />
                              <div className="relative font-medium shrink-0 [debug_commit:f6aba90]">
                                {" "}
                                21 Jul 2024 | 03:00 am
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start">
                              <div className="relative font-medium inline-block min-w-[50px]">
                                # 68988
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary font-button-button-text-secondary mq450:flex-wrap">
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
                          <div className="w-[319px] bg-background-grey-light hidden flex-col items-start justify-start p-3 box-border gap-[12px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                              <div className="self-stretch flex flex-row items-center justify-between gap-[13px]">
                                <div className="h-[15px] w-[295px] flex flex-row items-center justify-start py-0 pr-[23px] pl-0 box-border gap-[8px]">
                                  <div className="self-stretch flex-1 relative">
                                    <b>Step 1:</b>
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                            <div className="self-stretch rounded-regular1 bg-default-color-primary flex flex-row items-center justify-center py-regular1 px-mediium gap-[8px] whitespace-nowrap text-default-color-primary-light font-button-button-text-secondary">
                              <img
                                className="h-small w-small relative"
                                alt=""
                                src={check}
                              />
                              <div className="relative font-medium">
                                Accept Task
                              </div>
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] py-regular1 px-5 bg-royalblue self-stretch h-9 rounded-small flex flex-row items-start justify-center box-border gap-[8px]">
                            <img
                              className="h-small w-small relative min-h-[20px]"
                              alt=""
                              src={check}
                            />
                            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                              <div className="relative text-xs font-medium font-button-button-text-secondary text-default-color-primary-light text-left inline-block min-w-[72px]">
                                Notify Staff
                              </div>
                            </div>
                          </button>
                          <div className="w-[319px] hidden flex-row items-start justify-start text-default-color-primary font-button-button-text-secondary">
                            <div className="h-[31px] flex-1 rounded-regular1 box-border flex flex-row items-center justify-center py-regular1 px-mediium whitespace-nowrap border-[1px] border-solid border-default-color-primary">
                              <div className="self-stretch relative font-medium">
                                View Details
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 rounded-regular bg-background-background-primary box-border flex flex-col items-start justify-start p-2 gap-[12px] max-w-full shrink-0 border-[0.5px] border-solid border-default-grey">
                          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-3xs text-background-background-primary mq450:flex-wrap">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[4px] min-w-[140px]">
                              <div className="h-[21.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-xs text-text-text-dark font-button-button-text-secondary">
                                <div className="flex-1 rounded bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 gap-[5px]">
                                  <img
                                    className="h-smaller2 w-smaller2 relative rounded-sm overflow-hidden shrink-0 min-h-[16px]"
                                    loading="lazy"
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
                              <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
                                <div className="relative text-xs font-medium font-text-description-text text-accent-danger-accent text-left inline-block min-w-[84px]">
                                  Not Accepted
                                </div>
                              </button>
                              <div className="h-5 w-16 rounded bg-accent-danger-accent hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Delayed
                                </div>
                              </div>
                              <div className="h-5 w-16 rounded bg-accent-danger-accent overflow-hidden shrink-0 hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Complaint
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                                <div className="w-6 h-5 rounded-xl bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 box-border">
                                  <img
                                    className="h-4 w-4 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={swap}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-32 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                              <div className="self-stretch flex flex-row items-start justify-end">
                                <button className="cursor-pointer [border:none] py-smaller3 px-small2 bg-mistyrose h-[21px] rounded-xl flex flex-row items-start justify-start box-border gap-[4px] hover:bg-silver">
                                  <img
                                    className="h-smaller w-smaller relative overflow-hidden shrink-0"
                                    alt=""
                                    src={time}
                                  />
                                  <div className="relative text-sm font-medium font-text-description-text text-accent-danger-accent text-left inline-block min-w-[34px]">
                                    1min
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-base font-button-button-text-secondary mq450:flex-wrap">
                            <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[113px]">
                              Routine Cleaning
                            </div>
                            <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
                              <div className="relative text-xs font-medium font-text-description-text text-royalblue text-left inline-block min-w-[79px]">
                                Internal Task
                              </div>
                            </button>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary mq450:flex-wrap">
                            <div className="h-4 flex flex-row items-start justify-start gap-[5px]">
                              <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] [debug_commit:f6aba90]"
                                loading="lazy"
                                alt=""
                                src={calender}
                              />
                              <div className="relative font-medium shrink-0 [debug_commit:f6aba90]">
                                {" "}
                                21 Jul 2024 | 03:00 am
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start">
                              <div className="relative font-medium inline-block min-w-[50px]">
                                # 68988
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary font-button-button-text-secondary mq450:flex-wrap">
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
                          <div className="w-[319px] bg-background-grey-light hidden flex-col items-start justify-start p-3 box-border gap-[12px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                              <div className="self-stretch flex flex-row items-center justify-between gap-[13px]">
                                <div className="h-[15px] w-[295px] flex flex-row items-center justify-start py-0 pr-[23px] pl-0 box-border gap-[8px]">
                                  <div className="self-stretch flex-1 relative">
                                    <b>Step 1:</b>
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                            <div className="self-stretch rounded-regular1 bg-default-color-primary flex flex-row items-center justify-center py-regular1 px-mediium gap-[8px] whitespace-nowrap text-default-color-primary-light font-button-button-text-secondary">
                              <img
                                className="h-small w-small relative"
                                alt=""
                                src={check}
                              />
                              <div className="relative font-medium">
                                Accept Task
                              </div>
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] py-regular1 px-5 bg-accent-danger-accent self-stretch h-9 rounded-small flex flex-row items-start justify-center box-border gap-[8px]">
                            <img
                              className="h-small w-small relative min-h-[20px]"
                              alt=""
                              src={check}
                            />
                            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                              <div className="relative text-xs font-medium font-button-button-text-secondary text-default-color-primary-light text-left inline-block min-w-[72px]">
                                Notify Staff
                              </div>
                            </div>
                          </button>
                          <div className="w-[319px] hidden flex-row items-start justify-start text-default-color-primary font-button-button-text-secondary">
                            <div className="h-[31px] flex-1 rounded-regular1 box-border flex flex-row items-center justify-center py-regular1 px-mediium whitespace-nowrap border-[1px] border-solid border-default-color-primary">
                              <div className="self-stretch relative font-medium">
                                View Details
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 rounded-regular bg-background-background-primary box-border flex flex-col items-start justify-start p-2 gap-[12px] max-w-full shrink-0 border-[0.5px] border-solid border-default-grey">
                          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-3xs text-background-background-primary mq450:flex-wrap">
                            <div className="flex flex-row items-start justify-start gap-[4px]">
                              <div className="h-[21.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-xs text-text-text-dark font-button-button-text-secondary">
                                <div className="flex-1 rounded bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 gap-[5px]">
                                  <img
                                    className="h-smaller2 w-smaller2 relative rounded-sm overflow-hidden shrink-0 min-h-[16px]"
                                    loading="lazy"
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
                              <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start hover:bg-gainsboro">
                                <div className="relative text-xs font-medium font-text-description-text text-accent-ongoing-accent text-left inline-block min-w-[54px]">
                                  Ongoing
                                </div>
                              </button>
                              <div className="h-5 w-16 rounded bg-accent-danger-accent hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Delayed
                                </div>
                              </div>
                              <div className="h-5 w-16 rounded bg-accent-danger-accent overflow-hidden shrink-0 hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Complaint
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                                <div className="w-6 h-5 rounded-xl bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 box-border">
                                  <img
                                    className="h-4 w-4 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={one}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-[158px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                              <div className="self-stretch flex flex-row items-start justify-end">
                                <button className="cursor-pointer [border:none] py-smaller3 px-small2 bg-honeydew h-[21px] rounded-xl flex flex-row items-start justify-start box-border gap-[4px] hover:bg-paleturquoise">
                                  <img
                                    className="h-smaller w-smaller relative overflow-hidden shrink-0"
                                    alt=""
                                    src={time}
                                  />
                                  <div className="relative text-sm font-medium font-text-description-text text-accent-accent-success text-left inline-block min-w-[46px]">
                                    20min
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-base font-button-button-text-secondary mq450:flex-wrap">
                            <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[113px]">
                              Routine Cleaning
                            </div>
                            <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
                              <div className="relative text-xs font-medium font-text-description-text text-royalblue text-left inline-block min-w-[79px]">
                                Internal Task
                              </div>
                            </button>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary mq450:flex-wrap">
                            <div className="h-4 flex flex-row items-start justify-start gap-[5px]">
                              <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] [debug_commit:f6aba90]"
                                loading="lazy"
                                alt=""
                                src={calender}
                              />
                              <div className="relative font-medium shrink-0 [debug_commit:f6aba90]">
                                {" "}
                                21 Jul 2024 | 03:00 am
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start">
                              <div className="relative font-medium inline-block min-w-[50px]">
                                # 68988
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary font-button-button-text-secondary mq450:flex-wrap">
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
                          <div className="w-[319px] bg-background-grey-light hidden flex-col items-start justify-start p-3 box-border gap-[12px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                              <div className="self-stretch flex flex-row items-center justify-between gap-[13px]">
                                <div className="h-[15px] w-[295px] flex flex-row items-center justify-start py-0 pr-[23px] pl-0 box-border gap-[8px]">
                                  <div className="self-stretch flex-1 relative">
                                    <b>Step 1:</b>
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                                    <span>
                                      {" "}
                                      Change the sheets and replace towels
                                    </span>
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
                            <div className="self-stretch rounded-regular1 bg-default-color-primary flex flex-row items-center justify-center py-regular1 px-mediium gap-[8px] whitespace-nowrap text-default-color-primary-light font-button-button-text-secondary">
                              <img
                                className="h-small w-small relative"
                                alt=""
                                src={check}
                              />
                              <div className="relative font-medium">
                                Accept Task
                              </div>
                            </div>
                          </div>
                          <div className="w-[319px] hidden flex-row items-start justify-start text-default-color-primary font-button-button-text-secondary">
                            <div className="h-[31px] flex-1 rounded-regular1 box-border flex flex-row items-center justify-center py-regular1 px-mediium whitespace-nowrap border-[1px] border-solid border-default-color-primary">
                              <div className="self-stretch relative font-medium">
                                View Details
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 rounded-regular bg-background-background-primary box-border flex flex-col items-start justify-start p-2 gap-[12px] max-w-full border-[0.5px] border-solid border-default-grey">
                          <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] text-3xs text-background-background-primary mq450:flex-wrap">
                            <div className="h-5 flex flex-row items-start justify-start gap-[4px]">
                              <div className="self-stretch rounded bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 gap-[5px] text-xs text-text-text-dark font-button-button-text-secondary">
                                <img
                                  className="h-smaller2 w-smaller2 relative rounded-sm overflow-hidden shrink-0 min-h-[16px]"
                                  loading="lazy"
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
                              <div className="w-16 rounded bg-accent-danger-accent h-5 hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Delayed
                                </div>
                              </div>
                              <div className="w-16 rounded bg-accent-danger-accent h-5 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-1 box-border">
                                <div className="self-stretch relative font-medium">
                                  Complaint
                                </div>
                              </div>
                            </div>
                            <div className="h-5 w-6 rounded-xl bg-background-grey-light flex flex-row items-start justify-start py-0.5 px-1 box-border">
                              <img
                                className="h-4 w-4 relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src={one}
                              />
                            </div>
                            <div className="flex-1 flex flex-row items-start justify-end min-w-[74px]">
                              <button className="cursor-pointer [border:none] py-smaller3 px-small2 bg-honeydew h-[21px] rounded-xl flex flex-row items-start justify-start box-border gap-[4px] hover:bg-paleturquoise">
                                <img
                                  className="h-smaller w-smaller relative overflow-hidden shrink-0"
                                  alt=""
                                  src={time}
                                />
                                <div className="relative text-sm font-medium font-text-description-text text-accent-accent-success text-left inline-block min-w-[46px]">
                                  20min
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-base font-button-button-text-secondary mq450:flex-wrap">
                            <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[113px]">
                              Routine Cleaning
                            </div>
                            <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
                              <div className="relative text-xs font-medium font-text-description-text text-royalblue text-left inline-block min-w-[79px]">
                                Internal Task
                              </div>
                            </button>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary mq450:flex-wrap">
                            <div className="h-4 flex flex-row items-start justify-start gap-[5px]">
                              <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] [debug_commit:f6aba90]"
                                loading="lazy"
                                alt=""
                                src={calender}
                              />
                              <div className="relative font-medium shrink-0 [debug_commit:f6aba90]">
                                {" "}
                                21 Jul 2024 | 03:00 am
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start">
                              <div className="relative font-medium inline-block min-w-[50px]">
                                # 68988
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-text-dark-secondary font-button-button-text-secondary mq450:flex-wrap">
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
                          <div className="self-stretch bg-background-grey-light flex flex-col items-start justify-start p-3 gap-[12px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                              <div className="self-stretch flex flex-row items-center justify-center">
                                <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[241px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
                                  <b className="relative inline-block min-w-[60px]">
                                    Shampoo
                                  </b>
                                  <div className="relative text-secondary-gray inline-block min-w-[11px]">
                                    x1
                                  </div>
                                </div>
                                <div className="h-4 w-4 relative hidden z-[2]">
                                  <div className="absolute h-smaller w-smaller top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
                                </div>
                              </div>
                              <div className="w-[229px] relative font-medium hidden text-background-background-primary">
                                <span>Instructions:</span>
                                <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
                                <span>Please get conditioners.</span>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                              <div className="self-stretch flex flex-row items-center justify-center">
                                <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[223px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
                                  <b className="relative inline-block min-w-[75px]">
                                    Conditioner
                                  </b>
                                  <div className="relative text-secondary-gray inline-block min-w-[14px]">
                                    x2
                                  </div>
                                </div>
                                <div className="h-4 w-4 relative hidden z-[2]">
                                  <div className="absolute h-smaller w-smaller top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
                                </div>
                              </div>
                              <div className="relative font-medium text-royalblue">
                                <span>Instructions:</span>
                                <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
                                <span>Please get conditioners.</span>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                              <div className="self-stretch flex flex-row items-center justify-center">
                                <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[261px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
                                  <b className="relative inline-block min-w-[37px]">
                                    Towel
                                  </b>
                                  <div className="relative text-secondary-gray inline-block min-w-[14px]">
                                    x2
                                  </div>
                                </div>
                                <div className="h-4 w-4 relative hidden z-[2]">
                                  <div className="absolute h-smaller w-smaller top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
                                </div>
                              </div>
                              <div className="w-[229px] relative font-medium hidden text-background-background-primary">
                                <span>Instructions:</span>
                                <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
                                <span>Please get conditioners.</span>
                              </div>
                            </div>
                            <div className="w-[295px] rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium box-border gap-[8px] whitespace-nowrap text-default-color-primary-light font-button-button-text-secondary">
                              <img
                                className="h-small w-small relative"
                                alt=""
                                src={check}
                              />
                              <div className="relative font-medium">
                                Accept Task
                              </div>
                            </div>
                          </div>
                          <button className="cursor-pointer [border:none] py-regular1 px-5 bg-royalblue self-stretch h-9 rounded-small flex flex-row items-start justify-center box-border gap-[8px]">
                            <img
                              className="h-small w-small relative min-h-[20px]"
                              alt=""
                              src={check}
                            />
                            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                              <div className="relative text-xs font-medium font-button-button-text-secondary text-default-color-primary-light text-left inline-block min-w-[72px]">
                                Notify Staff
                              </div>
                            </div>
                          </button>
                          <div className="w-[319px] hidden flex-row items-start justify-start text-default-color-primary font-button-button-text-secondary">
                            <div className="h-[31px] w-[319px] rounded-regular1 box-border hidden flex-row items-center justify-center py-regular1 px-mediium whitespace-nowrap border-[1px] border-solid border-default-color-primary">
                              <div className="self-stretch relative font-medium">
                                View Details
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-col items-start justify-start gap-[24px] min-w-[335px] max-w-full mq700:flex-1">
                      <Scheduled1 />
                      <Scheduled />
                      <Scheduled1 propOverflowX="auto" />
                      <Scheduled1 propOverflowX="auto" />
                      <Scheduled propOverflowX="unset" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[360px] flex flex-col items-start justify-start gap-[24px] min-w-[360px] max-w-full font-button-button-text-secondary mq450:min-w-full mq925:flex-1">
                <TaskHistory1 />
                <TaskHistory />
                <TaskHistory />
                <div className="self-stretch rounded-regular bg-background-background-primary box-border flex flex-col items-start justify-start p-2 gap-[12px] max-w-full shrink-0 border-[0.5px] border-solid border-default-grey">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[4px]">
                      <div className="h-[21.5px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
                        <div className="flex-1 rounded bg-background-grey-light overflow-x-auto flex flex-row items-start justify-start py-0.5 px-1 gap-[5px]">
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
                    </div>
                    <div className="h-5 w-[198px] hidden" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
                    <div className="flex-1 relative font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[85px]">
                      Routine Cleaning
                    </div>
                    <button className="cursor-pointer [border:none] py-small1 px-regular1 bg-background-grey-light rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
                      <div className="relative text-xs font-medium font-text-description-text text-default-color-primary text-left inline-block min-w-[67px]">
                        Guest Task
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
                        src={check}
                      />
                      <div className="relative font-medium">Accept Task</div>
                    </div>
                  </div>
                  <div className="w-[319px] rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium box-border gap-[8px] whitespace-nowrap text-default-color-primary-light">
                    <img
                      className="h-small w-small relative"
                      alt=""
                      src={check}
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
                <TaskHistory1 propOverflowX="unset" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LUS;
