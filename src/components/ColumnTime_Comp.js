import TimeLineClockComp from "./TimeLineClock_Comp";
const ColumnTimeComp = ({ today }) => {
    const time = [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
    ];
    return (
        <>
            <div className="w-32 sticky left-0 z-10 bg-gray-100 mt-[48px]">
                <div>
                    <TimeLineClockComp today={today} />
                    {time.map((timeItm) => {
                        return (
                            <div
                                className="border border-gray-300 border-t-0 px-2 py-2 h-[72px] overflow-hidden"
                                key={timeItm}
                            >
                                {timeItm}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ColumnTimeComp;
