import "react-toggle/style.css";
import Toggle from "react-toggle";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
    IoReaderOutline,
    IoTimeOutline,
    IoAddCircleOutline,
} from "react-icons/io5";

const FormAddEventComp = () => {
    return (
        <div className="mt-4 px-8">
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
                    />
                    <div className="ml-4">
                        <div className="border border-slate-300 p-2 rounded-md h-fit mt-1">
                            <div className="w-4 h-4 bg-sky-400 rounded-full"></div>
                        </div>
                        <div className="absolute right-8 bg-slate-100 border border-slate-300 mt-2 px-1 py-3 rounded-xl rounded-tr-none z-10 hidden">
                            <span className="px-2">
                                Pilih Warna Item Jadwal:
                            </span>
                            <div className="flex mt-3">
                                <div className="bg-white border border-slate-300 p-2 rounded-md h-fit mx-2">
                                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-300 p-2 rounded-md h-fit mx-2">
                                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-300 p-2 rounded-md h-fit mx-2">
                                    <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-300 p-2 rounded-md h-fit mx-2">
                                    <div className="w-4 h-4 bg-sky-400 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-300 p-2 rounded-md h-fit mx-2">
                                    <div className="w-4 h-4 bg-fuchsia-400 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-300 p-2 rounded-md h-fit mx-2">
                                    <div className="w-4 h-4 bg-rose-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-8" />

            <div className="flex w-full justify-between mb-4">
                <div className="flex items-center">
                    <IoTimeOutline size={20} />
                    <label htmlFor="judul">
                        <span className="ml-2">Semua Hari</span>
                    </label>
                </div>

                <Toggle defaultChecked={false} name="milkIsReady" value="yes" />
            </div>
            <div className="ml-7">
                <div className="mb-8">
                    <span>From:</span>
                    <div className="border border-slate-300 px-3 py-2 mt-1 rounded-md text-sm mb-2">
                        Jumat, 16 September 2022
                    </div>
                    <div className="hidden justify-center border border-slate-300 rounded-md">
                        <DayPicker />
                    </div>
                    <div className="flex items-center mt-2">
                        <input
                            type="number"
                            className="mt-1 block w-16 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                        <span className="text-center mx-2">:</span>
                        <input
                            type="number"
                            className="mt-1 block w-16 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </div>
                </div>
                <div>
                    <span>To:</span>
                    <div className="border border-slate-300 px-3 py-2 mt-1 rounded-md text-sm mb-2">
                        Jumat, 16 September 2022
                    </div>
                    <div className="hidden justify-center border border-slate-300 rounded-md">
                        <DayPicker />
                    </div>
                    <div className="flex items-center mt-2">
                        <input
                            type="number"
                            className="mt-1 block w-16 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                        <span className="text-center mx-2">:</span>
                        <input
                            type="number"
                            className="mt-1 block w-16 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                    </div>
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
                        "ml-7 mt-1 block grow px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    }
                ></textarea>
            </div>
            <hr className="my-8" />
            <div className="mb-8">
                <button className="w-full bg-sky-400 rounded-md px-4 py-2">
                    Tambah Event
                </button>
            </div>
        </div>
    );
};

export default FormAddEventComp;
