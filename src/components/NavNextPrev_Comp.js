import {
    startOfWeek,
    endOfWeek,
    addDays,
    subDays,
    getMonth,
    format,
} from "date-fns";
import { id } from "date-fns/locale";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { isSameMonth, isSameYear, endOfMonth, startOfMonth } from "date-fns";

const RangeDateInfo = ({ startWeek, endWeek }) => {
    if (isSameYear(startWeek, endWeek)) {
        if (isSameMonth(startWeek, endWeek)) {
            return (
                <span className="font-bold text-xl">
                    {format(startWeek, "MMMM d", { locale: id }) +
                        "-" +
                        format(endWeek, "d, yyyy", { locale: id })}
                </span>
            );
        } else {
            return (
                <span className="font-bold text-xl">
                    {format(startWeek, "MMMM d", { locale: id }) +
                        "-" +
                        format(endOfMonth(startWeek), "d & ", {
                            locale: id,
                        }) +
                        format(startOfMonth(endWeek), "MMMM d", {
                            locale: id,
                        }) +
                        "-" +
                        format(endWeek, "d, yyyy", {
                            locale: id,
                        })}
                </span>
            );
        }
    }
};

const NavNextPrevComp = ({ dateSelected, setDateSelected }) => {
    const startWeek = startOfWeek(dateSelected, { weekStartsOn: 1 });
    const endWeek = endOfWeek(dateSelected, { weekStartsOn: 1 });

    const handlePrevButton = () => {
        setDateSelected(subDays(startWeek, 7));
    };

    const handleNextButton = () => {
        setDateSelected(addDays(endWeek, 1));
    };

    return (
        <div className="flex py-5 px-5 items-center w-1/2">
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
            <div>
                <RangeDateInfo startWeek={startWeek} endWeek={endWeek} />
            </div>
        </div>
    );
};
export default NavNextPrevComp;
