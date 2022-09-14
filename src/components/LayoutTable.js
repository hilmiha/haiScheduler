import ColumnTime from "./ColumnTime_Comp";
import ColumnDay from "./ColumnDay_Comp";
import NextPrevNav from "./NextPrevNavigation_Comp";
import { useState, useEffect } from "react";
import { startOfWeek, addDays } from "date-fns";
import { id } from "date-fns/locale";

const LayoutTable = () => {
    const [dateSelected, setDateSelected] = useState(new Date());
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const startDate = startOfWeek(dateSelected, { weekStartsOn: 1 });
        const dates_temp = [];
        for (let i = 0; i < 7; i++) {
            const addedDay = addDays(startDate, i);
            dates_temp.push(addedDay);
        }
        setDates(dates_temp);
    }, [dateSelected]);

    return (
        <div className="max-w-full flex flex-col h-screen">
            <NextPrevNav
                dateSelected={dateSelected}
                setDateSelected={setDateSelected}
            />
            <div className="overflow-auto flex flex-grow text-xs">
                <div className="flex min-w-max">
                    <ColumnTime />
                    {dates.map((itmDate) => (
                        <ColumnDay itmDate={itmDate} />
                    ))}
                    {/* <ColumnDay day="senin" />
                    <ColumnDay day="selasa" />
                    <ColumnDay day="rabu" />
                    <ColumnDay day="kamis" />
                    <ColumnDay day="jumat" />
                    <ColumnDay day="sabtu" />
                    <ColumnDay day="minggu" /> */}
                </div>
            </div>
        </div>
    );
};

export default LayoutTable;
