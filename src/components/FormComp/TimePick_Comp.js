import { useState, useEffect } from "react";

const ItemNumbers = (int, set) => {
    const handleClick = () => {
        set(int);
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

const TimePickComp = ({ hour, minute, setHour, setMinute }) => {
    const [openPickHour, setOpenPickHour] = useState(false);
    const [openPickMinute, setOpenPickMinute] = useState(false);

    useEffect(() => {
        setOpenPickHour(false);
    }, [hour]);

    useEffect(() => {
        setOpenPickMinute(false);
    }, [minute]);

    const ItemHours = [];
    for (let i = 0; i < 24; i++) {
        let num = "";
        if (i < 10) {
            num = "0" + i;
        } else {
            num = num + i;
        }
        ItemHours.push(ItemNumbers(num, setHour));
    }

    const ItemMinute = [];
    for (let j = 0; j < 59; j++) {
        let num = "";
        if (j < 10) {
            num = "0" + j;
        } else {
            num = num + j;
        }
        ItemMinute.push(ItemNumbers(num, setMinute));
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
                    <span>{hour}</span>
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
                    <span>{minute}</span>
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
