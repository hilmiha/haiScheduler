import "react-toggle/style.css";
import Toggle from "react-toggle";

import ColorItemPicComp from "./FormComp/ColorItemPick_Comp";
import DatePickComp from "./FormComp/DatePick_Comp";
import TimePickComp from "./FormComp/TimePick_Comp";

import {
    IoReaderOutline,
    IoTimeOutline,
    IoAddCircleOutline,
} from "react-icons/io5";
import { useState } from "react";

const FormAddEventComp = ({ dateSelected }) => {
    const [inputJudul, setInputJudul] = useState("");
    const [inputColor, setInputColor] = useState("blue");
    const [inputDateStart, setInputDateStart] = useState(dateSelected);
    const [inputJamStart, setInputJamStart] = useState("00");
    const [inputMenitStart, setInputMenitStart] = useState("00");
    const [inputDateEnd, setInputDateEnd] = useState(dateSelected);
    const [inputJamEnd, setInputJamEnd] = useState("00");
    const [inputMenitEnd, setInputMenitEnd] = useState("00");
    const [inputCatatan, setInputCatatan] = useState("");

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
        <div className="mt-4 px-8">
            <div className="mb-8">
                <p className="text-lg font-bold">Add Event</p>
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
                <button className="w-full bg-sky-400 rounded-md px-4 py-2 text-white">
                    Tambah Event
                </button>
            </div>
        </div>
    );
};

export default FormAddEventComp;
