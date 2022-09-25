import { useState, useEffect } from "react";
import { format, setHours, setMinutes, isSameHour } from "date-fns";

const ItemNumbers = (int, vari, set, type) => {
    const handleClick = () => {
        switch (type) {
            case "hour":
                set(setHours(new Date(vari), int));
                break;
            case "minute":
                set(setMinutes(new Date(vari), int));
                break;
            default:
                break;
        }
    };
    return (
        <div
            className="bg-white text-center rounded-md py-1 mb-2 border border-slate-300 hover:bg-slate-100 cursor-pointer"
            onClick={handleClick}
            key={int}
        >
            {int}
        </div>
    );
};

const TimePickComp = ({ date, setDate, min }) => {
    const [openPickHour, setOpenPickHour] = useState(false);
    const [openPickMinute, setOpenPickMinute] = useState(false);

    useEffect(() => {
        setOpenPickHour(false);
        setOpenPickMinute(false);
    }, [date]);

    const [minHour, setMinHour] = useState(0);
    const [minMinute, setMinMinute] = useState(0);

    useEffect(() => {
        if (min !== undefined) {
            setMinHour(parseInt(format(new Date(min), "H")));
        }
    }, [min]);

    useEffect(() => {
        if (min !== undefined) {
            if (isSameHour(min, date)) {
                setMinMinute(parseInt(format(new Date(min), "m")));
            } else {
                setMinMinute(0);
            }
        }
    }, [date]);

    const ItemHours = [];
    for (let i = minHour; i < 24; i++) {
        let num = "";
        if (i < 10) {
            num = "0" + i;
        } else {
            num = num + i;
        }
        ItemHours.push(ItemNumbers(num, date, setDate, "hour"));
    }

    const ItemMinute = [];
    for (let j = minMinute; j < 60; j++) {
        let num = "";
        if (j < 10) {
            num = "0" + j;
        } else {
            num = num + j;
        }
        ItemMinute.push(ItemNumbers(num, date, setDate, "minute"));
    }

    const handleOpenPickHour = () => {
        setOpenPickMinute(false);
        setOpenPickHour(!openPickHour);
    };
    const handleOpenPickMinute = () => {
        setOpenPickHour(false);
        setOpenPickMinute(!openPickMinute);
    };

    return (
        <div className="flex items-center">
            <div className="flex flex-col w-14">
                <div
                    className="border border-slate-300 text-sm px-3 py-2 rounded-md shadow-sm text-center hover:bg-slate-100 cursor-pointer"
                    onClick={handleOpenPickHour}
                >
                    <span>{format(date, "HH")}</span>
                </div>
                <div className={"relative " + (openPickHour ? null : "hidden")}>
                    <div className="bg-slate-100 border border-slate-300 absolute w-20 p-2 z-10 h-40 overflow-auto rounded-md rounded-tr-none right-0 mt-2">
                        {ItemHours.map((itmHours) => {
                            return itmHours;
                        })}
                    </div>
                </div>
            </div>
            <span className="mx-4">:</span>
            <div className="flex flex-col w-14">
                <div
                    className="border border-slate-300 text-sm px-3 py-2 rounded-md shadow-sm text-center hover:bg-slate-100 cursor-pointer"
                    onClick={handleOpenPickMinute}
                >
                    <span>{format(date, "mm")}</span>
                </div>
                <div
                    className={"relative " + (openPickMinute ? null : "hidden")}
                >
                    <div className="bg-slate-100 border border-slate-300 absolute w-20 p-2 z-10 h-40 overflow-auto rounded-md rounded-tl-none left-0 mt-2">
                        {ItemMinute.map((itmMinute) => {
                            return itmMinute;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimePickComp;
