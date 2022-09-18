import "react-toggle/style.css";
import Toggle from "react-toggle";
import { format } from "date-fns";
import ColorItemPicComp from "./FormComp/ColorItemPick_Comp";
import DatePickComp from "./FormComp/DatePick_Comp";
import TimePickComp from "./FormComp/TimePick_Comp";

import {
    IoReaderOutline,
    IoTimeOutline,
    IoAddCircleOutline,
} from "react-icons/io5";
import { MdEditCalendar } from "react-icons/md";
import { useState } from "react";

const FormEditJadwalComp = ({ popSelectedIdJdwl }) => {
    const [inputJudul, setInputJudul] = useState(popSelectedIdJdwl.title);
    const [inputColor, setInputColor] = useState(popSelectedIdJdwl.color);
    const [inputDateStart, setInputDateStart] = useState(
        new Date(popSelectedIdJdwl.start)
    );
    const [inputJamStart, setInputJamStart] = useState(
        format(new Date(popSelectedIdJdwl.start), "HH")
    );
    const [inputMenitStart, setInputMenitStart] = useState(
        format(new Date(popSelectedIdJdwl.start), "mm")
    );
    const [inputDateEnd, setInputDateEnd] = useState(
        new Date(popSelectedIdJdwl.end)
    );
    const [inputJamEnd, setInputJamEnd] = useState(
        format(new Date(popSelectedIdJdwl.end), "HH")
    );
    const [inputMenitEnd, setInputMenitEnd] = useState(
        format(new Date(popSelectedIdJdwl.end), "mm")
    );
    const [inputCatatan, setInputCatatan] = useState(popSelectedIdJdwl.catatan);

    const handleInputTyping = (event, editElm) => {
        switch (editElm) {
            case "judul":
                setInputJudul(event.target.value);
                break;
            case "catatan":
                setInputCatatan(event.target.value);
                break;
            case "jamStart":
                setInputJamStart(event.target.value);
                break;
            default:
                break;
        }
    };
    return (
        <div className="p-8">
            <div className="mb-8">
                <p className="text-lg font-bold">Edit Event</p>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <IoAddCircleOutline size={20} />
                    <label htmlFor="judul">
                        <span className="ml-2">Judul</span>
                    </label>
                </div>

                <div className="flex ml-7 mt-4 items-end">
                    <input
                        type={"text"}
                        className={
                            "mt-1 block grow px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        }
                        value={inputJudul}
                        onChange={(e) => {
                            handleInputTyping(e, "judul");
                        }}
                    />
                    <ColorItemPicComp
                        inputColor={inputColor}
                        setInputColor={setInputColor}
                    />
                </div>
            </div>

            <hr className="my-8" />

            <div className="flex w-full justify-between mb-4">
                <div className="flex items-center">
                    <IoTimeOutline size={20} />
                    <label htmlFor="judul">
                        <span className="ml-2">Sepanjang Hari</span>
                    </label>
                </div>

                <Toggle defaultChecked={false} name="milkIsReady" value="yes" />
            </div>
            <div className="ml-7">
                <div className="mb-8">
                    <span>From:</span>
                    <DatePickComp
                        date={inputDateStart}
                        setDate={setInputDateStart}
                    />
                    <TimePickComp
                        hour={inputJamStart}
                        minute={inputMenitStart}
                        setHour={setInputJamStart}
                        setMinute={setInputMenitStart}
                    />
                </div>
                <div>
                    <span>To:</span>
                    <DatePickComp
                        date={inputDateEnd}
                        setDate={setInputDateEnd}
                    />
                    <TimePickComp
                        hour={inputJamEnd}
                        minute={inputMenitEnd}
                        setHour={setInputJamEnd}
                        setMinute={setInputMenitEnd}
                    />
                </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-col">
                <div className="flex items-center">
                    <IoReaderOutline size={20} />
                    <label htmlFor="judul">
                        <span className="ml-2">Catatan</span>
                    </label>
                </div>
                <textarea
                    rows="4"
                    className={
                        "ml-7 mt-4 block grow px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    }
                    value={inputCatatan}
                    onChange={(e) => {
                        handleInputTyping(e, "catatan");
                    }}
                ></textarea>
            </div>
            <hr className="my-8" />
            <div className="mb-8">
                <button className="w-full bg-sky-400 rounded-md px-4 py-3 text-white flex justify-center items-center">
                    <MdEditCalendar size={20} />
                    <span className="ml-2">Edit Event</span>
                </button>
            </div>
        </div>
    );
};

export default FormEditJadwalComp;
