import ColumnHeadComp from "./ColumnHead_Comp";
import ColumnTimeComp from "./ColumnTime_Comp";
import ColumnDayComp from "./ColumnDay_Comp";
import TimeLineComp from "./TimeLine_Comp";
import NavNextPrevComp from "./NavNextPrev_Comp";
import NavButtonFuncComp from "./NavButtonFunc_Comp";

import SideCanvasComp from "./SideCanvas_Comp";
import { useState, useEffect } from "react";
import { startOfWeek, addDays } from "date-fns";

const LayoutTable = () => {
    const [today, setToday] = useState(new Date());
    const [dateSelected, setDateSelected] = useState(new Date());
    const [dates, setDates] = useState([]);
    const [sideNavOpen, setSideNavOpen] = useState(false);

    useEffect(() => {
        const startDate = startOfWeek(dateSelected, { weekStartsOn: 1 });
        const dates_temp = [];
        for (let i = 0; i < 7; i++) {
            const addedDay = addDays(startDate, i);
            dates_temp.push(addedDay);
        }
        setDates(dates_temp);
    }, [dateSelected]);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setToday(new Date());
            console.log("Update" + today);
        }, 30000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <SideCanvasComp
                sideNavOpen={sideNavOpen}
                setSideNavOpen={setSideNavOpen}
            />
            <div className="flex flex-col h-screen w-full">
                <div className="flex">
                    <NavNextPrevComp
                        dateSelected={dateSelected}
                        setDateSelected={setDateSelected}
                    />
                    <NavButtonFuncComp
                        today={today}
                        dateSelected={dateSelected}
                        setDateSelected={setDateSelected}
                        setSideNavOpen={setSideNavOpen}
                    />
                </div>

                <div className="overflow-auto text-xs">
                    <div className="flex h-fit min-w-max relative">
                        <ColumnHeadComp dates={dates} today={today} />
                        <ColumnTimeComp today={today} />
                        {dates.map((itmDate) => (
                            <ColumnDayComp
                                itmDate={itmDate}
                                today={today}
                                key={itmDate}
                            />
                        ))}
                        <TimeLineComp today={today} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutTable;
