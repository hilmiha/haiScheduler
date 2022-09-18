import { format } from "date-fns";
import { id } from "date-fns/locale";

import {
    IoReaderOutline,
    IoTimeOutline,
    IoArrowForwardOutline,
} from "react-icons/io5";

import { MdMoreVert } from "react-icons/md";
import colorVar from "../utils/ColorVar";
import { useState } from "react";

const FormDetailJadwalComp = ({ popSelectedIdJdwl, setPopUpEdit }) => {
    const [openOptionPop, setOpenOptionPop] = useState(false);
    const handleOpenOptionPop = () => {
        setOpenOptionPop(!openOptionPop);
    };

    const handleMenuEdit = () => {
        setPopUpEdit(true);
    };
    return (
        <>
            <div
                className="h-4 sticky top-[-8px] z-10"
                style={{
                    backgroundColor: colorVar.filter(
                        (color) => color.name === popSelectedIdJdwl.color
                    )[0].color,
                }}
            ></div>
            <div className="p-8">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-bold">
                            {popSelectedIdJdwl.title}
                        </p>
                        <div
                            className="text-slate-400 ml-2 relative hover:bg-slate-100 rounded-md"
                            onClick={handleOpenOptionPop}
                        >
                            <MdMoreVert size={24} />
                            <div
                                className={`absolute right-0 bg-slate-100 border border-slate-300 p-2 mt-2 rounded-md rounded-tr-none ${
                                    openOptionPop ? "" : "hidden"
                                }`}
                            >
                                <div
                                    className="bg-white px-4 py-2 rounded md border border-slate-300 hover:bg-slate-100 cursor-pointer mb-2 text-center"
                                    onClick={handleMenuEdit}
                                >
                                    Edit
                                </div>
                                <div className="bg-white px-4 py-2 rounded md border border-slate-300 hover:bg-slate-100 cursor-pointer text-center">
                                    Hapus
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-300">
                        {popSelectedIdJdwl.id}
                    </p>
                </div>

                <div className="flex w-full justify-between mb-4">
                    <div className="flex w-full">
                        <div className="mt-1">
                            <IoTimeOutline size={20} />
                        </div>

                        <div className="flex w-full ml-2 justify-between">
                            <div>
                                <p>
                                    {format(
                                        new Date(popSelectedIdJdwl.start),
                                        "EEE, dd MMM yyyy",
                                        { locale: id }
                                    )}
                                </p>
                                <p>
                                    {format(
                                        new Date(popSelectedIdJdwl.start),
                                        "HH:mm"
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <IoArrowForwardOutline size={24} />
                            </div>
                            <div>
                                <p>
                                    {format(
                                        new Date(popSelectedIdJdwl.end),
                                        "EEE, dd MMM yyyy",
                                        { locale: id }
                                    )}
                                </p>
                                <p>
                                    {format(
                                        new Date(popSelectedIdJdwl.end),
                                        "HH:mm"
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8" />

                <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                        <IoReaderOutline size={20} />
                        <label htmlFor="judul">
                            <span className="ml-2">Catatan</span>
                        </label>
                    </div>
                    <div className="ml-7 h-32 border border-slate-300 p-3 rounded-md overflow-auto">
                        <p>{popSelectedIdJdwl.catatan}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormDetailJadwalComp;
