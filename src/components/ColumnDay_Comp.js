import JadwalInDay from "./ItemJadwal_Comp";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const EmptyJdwl = () => {
    return (
        <div className="border border-gray-300 border-t-0 border-l-0 h-[72px] overflow-hidden">
            <div className="border border-dashed border-t-0 border-x-0 border-gray-300 h-[36px]"></div>
        </div>
    );
};

const ColumnDay = ({ itmDate }) => {
    const dayName = format(itmDate, "EEEE", { locale: id });
    const dayNumber = format(itmDate, "d");
    const EmptyJadwal = [];

    for (let i = 0; i < 24; i++) {
        EmptyJadwal.push(<EmptyJdwl key={i} />);
    }

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
            id: "1029300356",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T11:00:00",
            end: "2022-09-12T14:30:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "green",
        },
        {
            id: "1029300357",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T12:00:00",
            end: "2022-09-12T12:30:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "green",
        },
        {
            id: "1029300358",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T13:00:00",
            end: "2022-09-12T15:00:00",
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
                <div className="border border-gray-300 border-l-0 bg-white px-2 py-1 h-[84px] capitalize sticky top-0 z-10 flex flex-col items-center justify-center">
                    <p className="text-base">{dayName}</p>
                    <p className="text-base mt-2">{dayNumber}</p>
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

// const JadwalInSenin = [
//     {
//         id: "1029388213",
//         title: "Basda Asdlhaw ashdao saodjhaow sjodhawd asjhda",
//         start: "2022-09-12T00:00:00",
//         end: "2022-09-12T03:00:00",
//         catatan: "test catatan 1",
//         color: "green",
//     },
//     {
//         id: "1029380233",
//         title: "Llkansd Kksnaw sahd ajdwhao uahsabdis sadohw",
//         start: "2022-09-12T02:00:00",
//         end: "2022-09-12T04:30:00",
//         catatan:
//             "aksdja sjadhaw djsgdakjwhd kahsgdjaw asdkgakjwd kshdakwhd asuhdkjwb asgdauwgduahsiod askjd",
//         color: "red",
//     },
//     {
//         id: "1029399834",
//         title: "Llkansd Kksnaw sahd ajdwhao uahsabdis sadohw",
//         start: "2022-09-12T03:00:00",
//         end: "2022-09-12T05:00:00",
//         catatan:
//             "aksdja sjadhaw djsgdakjwhd kahsgdjaw asdkgakjwd kshdakwhd asuhdkjwb asgdauwgduahsiod askjd",
//         color: "red",
//     },
//     {
//         id: "0298477189",
//         title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
//         start: "2022-09-12T06:00:00",
//         end: "2022-09-12T09:30:00",
//         catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
//         color: "green",
//     },
//     {
//         id: "1029387732",
//         title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
//         start: "2022-09-12T07:00:00",
//         end: "2022-09-12T08:00:00",
//         catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
//         color: "green",
//     },
//     {
//         id: "102938773sda2",
//         title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
//         start: "2022-09-12T07:30:00",
//         end: "2022-09-12T10:00:00",
//         catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
//         color: "green",
//     },
//     {
//         id: "1029383009",
//         title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
//         start: "2022-09-12T08:30:00",
//         end: "2022-09-12T09:00:00",
//         catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
//         color: "green",
//     },
//     {
//         id: "1029389300",
//         title: "Pnalw Leas",
//         start: "2022-09-12T16:00:00",
//         end: "2022-09-12T23:59:00",
//         catatan: "test catatan 3",
//         color: "green",
//     },
// ];
