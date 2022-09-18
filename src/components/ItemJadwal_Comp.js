import {
    differenceInMinutes,
    areIntervalsOverlapping,
    format,
    startOfDay,
} from "date-fns";
import colorVar from "../utils/ColorVar";

const JadwalItemComp = ({ jadwalItm, mt, h, ml, setPopSelectedIdJdwl }) => {
    const itmColor = colorVar.filter((clr) => {
        return clr.name === jadwalItm.color;
    });
    const start = new Date(jadwalItm.start);
    const end = new Date(jadwalItm.end);
    const time = format(start, "HH:mm") + " - " + format(end, "HH:mm");

    const setSelected = () => {
        setPopSelectedIdJdwl(jadwalItm);
    };

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
                onClick={setSelected}
            >
                <div className="sticky top-[48px]">
                    <p className={h <= 36 ? "hidden" : null}>{time}</p>
                    <p className="font-bold line-clamp-1">{jadwalItm.title}</p>

                    <div
                        className={
                            h <= 36
                                ? "hidden"
                                : h <= 108
                                ? "mt-3 line-clamp-1"
                                : "mt-3 line-clamp-2"
                        }
                    >
                        <p>{jadwalItm.catatan}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JadwalInDayComp = ({ jadwalItms, setPopSelectedIdJdwl }) => {
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
                jadwalItm={jadwalItms[i]}
                mt={marginTop}
                h={heightItm}
                ml={overlapMl}
                setPopSelectedIdJdwl={setPopSelectedIdJdwl}
                key={jadwalItms[i].id}
            />
        );
    }
    return <>{processedJadwalDay.map((row) => row)}</>;
};

export default JadwalInDayComp;
