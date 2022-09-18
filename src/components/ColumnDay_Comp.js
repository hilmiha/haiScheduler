import JadwalInDayComp from "./ItemJadwal_Comp";
import { isSameDay } from "date-fns";

const EmptyJdwlComp = () => {
    return (
        <div className="border border-gray-300 border-t-0 border-l-0 h-[72px] overflow-hidden">
            <div className="border border-dashed border-t-0 border-x-0 border-gray-300 h-[36px]"></div>
        </div>
    );
};

const ColumnDayComp = ({ itmDate, today, setPopSelectedIdJdwl }) => {
    const EmptyJadwal = [];

    for (let i = 0; i < 24; i++) {
        EmptyJadwal.push(<EmptyJdwlComp key={i} />);
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
            color: "yellow",
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
            color: "purple",
        },
        {
            id: "102938773sda2",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T07:30:00",
            end: "2022-09-12T10:00:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "orange",
        },
        {
            id: "1029383009",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T08:30:00",
            end: "2022-09-12T09:00:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "blue",
        },
        {
            id: "1029300356",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T11:00:00",
            end: "2022-09-12T14:30:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "yellow",
        },
        {
            id: "1029300357",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T12:00:00",
            end: "2022-09-12T12:30:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "red",
        },
        {
            id: "1029300358",
            title: "Pnalw Leas sadhowia isahdoaw oiadhwi h",
            start: "2022-09-12T13:00:00",
            end: "2022-09-12T14:00:00",
            catatan: "test catatan 3 sadlah dawhd adhwalbw audhwua",
            color: "purple",
        },
        {
            id: "1029389300",
            title: "Pnalw Leas",
            start: "2022-09-12T16:00:00",
            end: "2022-09-12T23:59:00",
            catatan: "test catatan 3",
            color: "orange",
        },
    ];

    return (
        <div
            className={
                "relative mt-[48px] w-52 grow " +
                (isSameDay(itmDate, today) ? "bg-white" : "bg-gray-100")
            }
        >
            <JadwalInDayComp
                jadwalItms={JadwalInSenin}
                setPopSelectedIdJdwl={setPopSelectedIdJdwl}
            />

            <div>{EmptyJadwal.map((row) => row)}</div>
        </div>
    );
};

export default ColumnDayComp;

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
