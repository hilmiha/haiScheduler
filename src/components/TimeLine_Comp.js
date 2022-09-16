import { differenceInMinutes, startOfDay } from "date-fns";

const TimeLineComp = ({ today }) => {
    const midnight = startOfDay(today);
    const marginTop = differenceInMinutes(today, midnight) * 1.2;

    return (
        <div className="absolute pt-[48px] w-full">
            <div
                className="border-2 border-x-0 border-b-0 absolute border-red-500 z-10 w-full"
                style={{ marginTop: marginTop + "px" }}
            ></div>
        </div>
    );
};
export default TimeLineComp;
