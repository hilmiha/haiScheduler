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

export default JadwalInDay;
