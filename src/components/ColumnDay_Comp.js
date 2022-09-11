import { differenceInMinutes, areIntervalsOverlapping, format } from "date-fns";

const JadwalItem = ({ title, catatan, time, mt, h, ml }) => {
    return (
        <div className="absolute w-full pl-[10px]">
            <div
                className="bg-lime-200 px-3 py-2 rounded-xl rounded-tr-none rounded-br-none"
                style={{
                    height: h + "px",
                    marginTop: mt + "px",
                    marginLeft: ml + "px",
                    borderStyle: "solid",
                    borderWidth: "1px 0 1px 4px",
                    borderColor: "#4d7c0f",
                }}
            >
                <div className="sticky top-[37px]">
                    <div className="flex">
                        <p
                            className={
                                h <= 72
                                    ? "font-bold grow line-clamp-1 pr-2"
                                    : "font-bold grow line-clamp-2 pr-2"
                            }
                        >
                            {title}
                        </p>
                        <p className="w-20 min-w-max text-right">{time}</p>
                    </div>
                    <div
                        className={
                            h <= 36
                                ? "hidden"
                                : h <= 108
                                ? "mt-3 line-clamp-1"
                                : "mt-3 line-clamp-2"
                        }
                    >
                        <p>{catatan}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JadwalInDay = ({ jadwalItms }) => {
    const processedJadwalDay = [];
    let overlapMl = 0;

    for (let i = 0; i < jadwalItms.length; i++) {
        if (i !== 0) {
            for (let j = i - 1; j >= 0; j--) {
                const overlap = areIntervalsOverlapping(
                    {
                        start: new Date(jadwalItms[j].start),
                        end: new Date(jadwalItms[j].end),
                    },
                    {
                        start: new Date(jadwalItms[i].start),
                        end: new Date(jadwalItms[i].end),
                    }
                );
                console.log("hello");
                if (overlap) {
                    overlapMl = overlapMl + 20;
                    break;
                } else {
                    overlapMl = 0;
                }
            }
        }

        const start = new Date(jadwalItms[i].start);
        const end = new Date(jadwalItms[i].end);
        const midnight = new Date("2022-09-12T00:00:00");
        const marginTop = differenceInMinutes(start, midnight) * 1.2;
        const heightItm = differenceInMinutes(end, start) * 1.2;

        processedJadwalDay.push(
            <JadwalItem
                title={jadwalItms[i].title}
                catatan={jadwalItms[i].catatan}
                time={format(start, "HH:mm") + " - " + format(end, "HH:mm")}
                mt={marginTop}
                h={heightItm}
                ml={overlapMl}
                key={jadwalItms[i].id}
            />
        );
    }
    return <>{processedJadwalDay.map((row) => row)}</>;
};

const EmptyJdwl = () => {
    return (
        <div className="border border-gray-300 border-t-0 border-l-0 h-[72px] overflow-hidden">
            <div className="border border-dashed border-t-0 border-x-0 border-gray-300 h-[36px]"></div>
        </div>
    );
};

const ColumnDay = ({ day }) => {
    const EmptyJadwal = [];

    for (let i = 0; i < 24; i++) {
        EmptyJadwal.push(<EmptyJdwl key={i} />);
    }

    // const JadwalInSenin = [
    //     {
    //         id: "102931293",
    //         title: "Breakfast",
    //         start: "2022-09-12T07:30:00",
    //         end: "2022-09-12T08:00:00",
    //         catatan: "test catatan 1",
    //         color: "green",
    //     },
    //     {
    //         id: "1029388213",
    //         title: "Focus Time",
    //         start: "2022-09-12T08:00:00",
    //         end: "2022-09-12T09:30:00",
    //         catatan: "",
    //         color: "green",
    //     },
    //     {
    //         id: "1029380039",
    //         title: "Client Call",
    //         start: "2022-09-12T09:30:00",
    //         end: "2022-09-12T10:30:00",
    //         catatan: "dagkw asdg awudgau sadjwuaskj asia",
    //         color: "green",
    //     },
    //     {
    //         id: "102991293",
    //         title: "Lunch",
    //         start: "2022-09-12T10:30:00",
    //         end: "2022-09-12T11:00:00",
    //         catatan: "",
    //         color: "green",
    //     },
    // ];

    const JadwalInSenin = [
        {
            id: "1029388213",
            title: "Basda Asdlhaw ashdao saodjhaow sjodhawd asjhda",
            start: "2022-09-12T00:00:00",
            end: "2022-09-12T03:00:00",
            catatan: "test catatan 1",
            color: "green",
        },
        {
            id: "1029380233",
            title: "Llkansd Kksnaw sahd ajdwhao uahsabdis sadohw",
            start: "2022-09-12T02:00:00",
            end: "2022-09-12T04:30:00",
            catatan:
                "aksdja sjadhaw djsgdakjwhd kahsgdjaw asdkgakjwd kshdakwhd asuhdkjwb asgdauwgduahsiod askjd",
            color: "red",
        },
        {
            id: "1029399834",
            title: "Llkansd Kksnaw sahd ajdwhao uahsabdis sadohw",
            start: "2022-09-12T03:00:00",
            end: "2022-09-12T05:00:00",
            catatan:
                "aksdja sjadhaw djsgdakjwhd kahsgdjaw asdkgakjwd kshdakwhd asuhdkjwb asgdauwgduahsiod askjd",
            color: "red",
        },
        {
            id: "0298477189",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T06:00:00",
            end: "2022-09-12T09:30:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "green",
        },
        {
            id: "1029387732",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T07:00:00",
            end: "2022-09-12T08:00:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "green",
        },
        {
            id: "102938773sda2",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T07:30:00",
            end: "2022-09-12T10:00:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "green",
        },
        {
            id: "1029383009",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T08:30:00",
            end: "2022-09-12T09:00:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "green",
        },
        {
            id: "1029389300",
            title: "Pnalw Leas",
            start: "2022-09-12T16:00:00",
            end: "2022-09-12T23:59:00",
            catatan: "test catatan 3",
            color: "green",
        },
    ];

    return (
        <>
            <div className="w-72">
                <div className="border border-gray-300 border-l-0 bg-white px-2 py-1 h-[36px] capitalize sticky top-0 z-10">
                    {day}
                </div>
                <div className="relative">
                    <JadwalInDay jadwalItms={JadwalInSenin} />

                    <div>{EmptyJadwal.map((row) => row)}</div>
                </div>
            </div>
        </>
    );
};

export default ColumnDay;
