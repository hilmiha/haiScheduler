import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { id } from "date-fns/locale";
import {
    startOfWeek,
    endOfWeek,
    addDays,
    subDays,
    getMonth,
    format,
} from "date-fns";

import {
    IoTodayOutline,
    IoCalendarOutline,
    IoAddOutline,
    IoCloseOutline,
    IoChevronBackOutline,
    IoChevronForwardOutline,
} from "react-icons/io5";

const NavButtonFuncComp = ({
    today,
    dateSelected,
    setDateSelected,
    setSideNavOpen,
}) => {
    const [openCalendar, setOpenCalendar] = useState(false);

    useEffect(() => {
        setOpenCalendar(false);
    }, [dateSelected]);

    const startWeek = startOfWeek(dateSelected, { weekStartsOn: 1 });
    const endWeek = endOfWeek(dateSelected, { weekStartsOn: 1 });

    const handlePrevButton = () => {
        setDateSelected(subDays(startWeek, 7));
    };

    const handleNextButton = () => {
        setDateSelected(addDays(endWeek, 1));
    };

    const handleGoToToday = () => {
        setDateSelected(today);
    };

    const handleOpenCalendar = (close) => {
        close === undefined
            ? setOpenCalendar(!openCalendar)
            : setOpenCalendar(close);
    };

    const handleOpenAddEvent = () => {
        setSideNavOpen(true);
    };
    return (
        <div className="flex py-5 px-5 items-center justify-end w-fit">
            <div className="mr-20 flex">
                <div className="mr-4">
                    <button
                        className="bg-white p-2 rounded-md border border-slide-400 hover:bg-slate-100"
                        onClick={handlePrevButton}
                    >
                        <IoChevronBackOutline size={24} color={"#64748b"} />
                    </button>
                </div>
                <div className="mr-4">
                    <button
                        className="bg-white p-2 rounded-md border border-slide-400 hover:bg-slate-100"
                        onClick={handleNextButton}
                    >
                        <IoChevronForwardOutline size={24} color={"#64748b"} />
                    </button>
                </div>
                <div className="mr-4">
                    <button
                        className="bg-white p-2 rounded-md border border-slide-400 hover:bg-slate-100 flex items-center justify-center w-40 text-sm text-slate-500"
                        onClick={handleGoToToday}
                    >
                        <IoTodayOutline size={24} />
                        <span className="ml-2 text-sm">Go To Today</span>
                    </button>
                </div>
                <div className="relative">
                    <button
                        className="bg-white p-2 rounded-md border border-slide-400 hover:bg-slate-100 flex items-center justify-center text-sm w-40 text-slate-500"
                        onClick={() => {
                            handleOpenCalendar();
                        }}
                    >
                        <IoCalendarOutline size={24} />
                        <span className="ml-2 text-sm">Open Calendar</span>
                    </button>
                    {openCalendar ? (
                        <div className="bg-slate-100 border border-slate-300 rounded-xl rounded-tr-none absolute right-0 w-fit h-fit z-30 mt-2">
                            <div className="flex justify-end pt-2 pr-2 absolute w-full">
                                <button
                                    onClick={() => {
                                        handleOpenCalendar(false);
                                    }}
                                >
                                    <IoCloseOutline size={24} />
                                </button>
                            </div>
                            <DayPicker
                                mode="single"
                                defaultMonth={dateSelected}
                                onSelect={setDateSelected}
                                fromYear={2015}
                                toYear={2025}
                                captionLayout="dropdown"
                                locale={id}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
            <div>
                <div>
                    <button
                        className="bg-sky-500 p-2 rounded-md border border-sky-400 hover:bg-sky-600 flex items-center justify-center w-32 text-sm text-white"
                        onClick={handleOpenAddEvent}
                    >
                        <IoAddOutline size={24} />
                        <span className="ml-2 text-sm">Add Event</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavButtonFuncComp;
