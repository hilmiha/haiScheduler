import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const DatePickComp = ({ date, setDate }) => {
    const [openDatePick, setOpenDatePick] = useState(false);

    const handleOpenDatePick = () => {
        setOpenDatePick(!openDatePick);
    };

    return (
        <div className="relative">
            <div
                className="border border-slate-300 px-3 py-2 mt-1 rounded-md text-sm mb-2 cursor-pointer hover:bg-slate-100"
                onClick={handleOpenDatePick}
            >
                {format(date, "eeee, dd MMMM yyyy", {
                    locale: id,
                })}
            </div>
            {openDatePick ? (
                <div className="bg-slate-100 border border-slate-300 rounded-xl rounded-tr-none absolute right-0 w-fit h-fit z-30">
                    <DayPicker
                        mode="single"
                        required
                        selected={date}
                        onSelect={setDate}
                        locale={id}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default DatePickComp;
