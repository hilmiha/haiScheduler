import { differenceInMinutes, startOfDay, format } from "date-fns";

const TimeLineClockComp = ({ today }) => {
    const midnight = startOfDay(today);
    const marginTop = differenceInMinutes(today, midnight) * 1.2;

    return (
        <div
            className="absolute border border-red-500 rounded-br-xl bg-red-500 pl-2 pr-3 py-2 text-white"
            style={{ marginTop: marginTop + "px" }}
        >
            {format(today, "hh:mm")}
        </div>
    );
};

export default TimeLineClockComp;
