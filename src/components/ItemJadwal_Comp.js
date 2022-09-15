import {
    differenceInMinutes,
    areIntervalsOverlapping,
    format,
    startOfDay,
} from "date-fns";

const colorVar = [
    {
        name: "orange",
        bgColor: "#fed7aa", //orange-200
        brColor: "#c2410c", //orange-700
    },
    {
        name: "yellow",
        bgColor: "#fef08a", //yellow-200
        brColor: "#a16207", //yellow-700
    },
    {
        name: "green",
        bgColor: "#d9f99d", //lime-200
        brColor: "#4d7c0f", //lime-700
    },
    {
        name: "blue",
        bgColor: "#bae6fd", //sky-200
        brColor: "#0369a1", //sky-700
    },
    {
        name: "purple",
        bgColor: "#f5d0fe", //Fuchsia-200
        brColor: "#a21caf", //Fuchsia-700
    },
    {
        name: "red",
        bgColor: "#fecdd3", //rose-200
        brColor: "#be123c", //rose-700
    },
];

const JadwalItemComp = ({ title, catatan, time, color, mt, h, ml }) => {
    const itmColor = colorVar.filter((clr) => {
        return clr.name === color;
    });

    return (
        <div className="absolute w-full pl-[10px] pointer-events-none">
            <div
                className="px-3 py-2 rounded-xl rounded-tr-none rounded-br-none pointer-events-auto"
                style={{
                    height: h + "px",
                    marginTop: mt + "px",
                    marginLeft: ml + "px",
                    borderStyle: "solid",
                    borderWidth: "1px 0 1px 4px",
                    borderColor: itmColor[0].brColor,
                    backgroundColor: itmColor[0].bgColor,
                }}
                onClick={() => {
                    alert("Hello! I am an alert box!!" + time);
                }}
            >
                <div className="sticky top-[48px]">
                    <p className={h <= 36 ? "hidden" : null}>{time}</p>
                    <p className="font-bold line-clamp-1">{title}</p>

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

const JadwalInDayComp = ({ jadwalItms }) => {
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
        const midnight = startOfDay(new Date(jadwalItms[i].start));
        const marginTop = differenceInMinutes(start, midnight) * 1.2;
        const heightItm = differenceInMinutes(end, start) * 1.2;

        processedJadwalDay.push(
            <JadwalItemComp
                title={jadwalItms[i].title}
                catatan={jadwalItms[i].catatan}
                time={format(start, "HH:mm") + " - " + format(end, "HH:mm")}
                color={jadwalItms[i].color}
                mt={marginTop}
                h={heightItm}
                ml={overlapMl}
                key={jadwalItms[i].id}
            />
        );
    }
    return <>{processedJadwalDay.map((row) => row)}</>;
};

export default JadwalInDayComp;
