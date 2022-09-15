import { format, isSameDay } from "date-fns";
import { id } from "date-fns/locale";

const ColumnHeadComp = ({ dates, today }) => {
    return (
        <div className="absolute z-50 h-full flex w-full pointer-events-none">
            <div className="border border-gray-300 border-l-0 bg-gray-100 px-2 py-1 h-[48px] capitalize sticky top-0 left-0 z-20 w-32"></div>

            {dates.map((itmDate) => {
                const dayName = format(itmDate, "EEEE", { locale: id });
                const dayNumber = format(itmDate, "d");

                return (
                    <div className="w-44 grow" key={dayName + dayNumber}>
                        <div
                            className={
                                "border border-gray-300 border-l-0 " +
                                (isSameDay(itmDate, today)
                                    ? "bg-white"
                                    : "bg-gray-100") +
                                " px-2 py-1 h-[48px] capitalize sticky top-0 z-10 flex flex-col items-center justify-center w-"
                            }
                        >
                            <p
                                className={
                                    isSameDay(itmDate, today)
                                        ? "text-lime-600 font-bold"
                                        : null
                                }
                            >
                                {dayName + " " + dayNumber}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ColumnHeadComp;
