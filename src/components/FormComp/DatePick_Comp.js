import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format, set, subDays, compareAsc, addHours } from "date-fns";
import { id } from "date-fns/locale";

const DatePickComp = ({ date, setDate, min, settedDef }) => {
    const [setted, setSetted] = useState(settedDef);
    const [openDatePick, setOpenDatePick] = useState(false);
    const [disabledDays, setDisabledDays] = useState([]);

    useEffect(() => {
        if (compareAsc(date, min) === -1) {
            setSetted(false);
        }

        if ((min !== null) & (setted === false)) {
            setDisabledDays([
                {
                    from: new Date(2020, 1, 1),
                    to: subDays(min, 1),
                },
            ]);

            if (compareAsc(date, min) === -1) {
                console.log("test");
                setDate(
                    set(new Date(min), {
                        hours: parseInt(format(addHours(min, 1), "H")),
                        minutes: parseInt(format(min, "m")),
                    })
                );
            } else {
                console.log("test2");
                setDate(
                    set(new Date(date), {
                        hours: parseInt(format(addHours(min, 1), "H")),
                        minutes: parseInt(format(min, "m")),
                    })
                );
            }
        }
    }, [min, setted]);

    const handleOpenDatePick = () => {
        setOpenDatePick(!openDatePick);
    };

    const handleSelect = (dateSel) => {
        const currentHour = parseInt(format(date, "HH"));
        const currentMinute = parseInt(format(date, "mm"));

        setDate(
            set(new Date(dateSel), {
                hours: currentHour,
                minutes: currentMinute,
            })
        );
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
                        defaultMonth={date}
                        selected={date}
                        onSelect={handleSelect}
                        fromYear={2020}
                        disabled={disabledDays}
                        locale={id}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default DatePickComp;
