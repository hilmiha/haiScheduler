import {
    startOfWeek,
    endOfWeek,
    addDays,
    subDays,
    getMonth,
    format,
} from "date-fns";
import { id } from "date-fns/locale";

const NextPrevNavComp = ({ dateSelected, setDateSelected }) => {
    const startWeek = startOfWeek(dateSelected, { weekStartsOn: 1 });
    const endWeek = endOfWeek(dateSelected, { weekStartsOn: 1 });

    const handlePrevButton = () => {
        setDateSelected(subDays(startWeek, 7));
    };

    const handleNextButton = () => {
        setDateSelected(addDays(endWeek, 1));
    };
    return (
        <div className="flex justify-between py-5 px-5">
            <div>
                <button
                    className="bg-lime-200 px-4 py-2 rounded-full w-36 border border-lime-800"
                    onClick={handlePrevButton}
                >
                    <span className="font-bold text-lime-800">{"< Prev."}</span>
                </button>
            </div>
            <div>
                <span className="font-bold text-xl">
                    {getMonth(startWeek) === getMonth(endWeek)
                        ? format(startWeek, "MMMM yyyy", { locale: id })
                        : format(startWeek, "MMMM yyyy", { locale: id }) +
                          " / " +
                          format(endWeek, "MMMM yyyy", { locale: id })}
                </span>
            </div>
            <div>
                <button
                    className="bg-lime-200 px-4 py-2 rounded-full w-36 border border-lime-800"
                    onClick={handleNextButton}
                >
                    <span className="font-bold text-lime-800">{"Next >"}</span>
                </button>
            </div>
        </div>
    );
};
export default NextPrevNavComp;
