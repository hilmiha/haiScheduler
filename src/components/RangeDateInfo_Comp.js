import { startOfWeek, endOfWeek, format } from "date-fns";
import { id } from "date-fns/locale";
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

const RangeDateInfoComp = ({ dateSelected, setDateSelected }) => {
    const startWeek = startOfWeek(dateSelected, { weekStartsOn: 1 });
    const endWeek = endOfWeek(dateSelected, { weekStartsOn: 1 });

    return (
        <div className="flex py-5 px-5 items-center grow">
            <div>
                <RangeDateInfo startWeek={startWeek} endWeek={endWeek} />
            </div>
        </div>
    );
};
export default RangeDateInfoComp;
