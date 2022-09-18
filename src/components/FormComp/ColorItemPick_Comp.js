import { useState } from "react";
import colorVar from "../../utils/ColorVar";

const ColorItemPicComp = ({ inputColor, setInputColor }) => {
    const [openColorPick, setOpenColorPick] = useState(false);
    const handleOpenColorPick = () => {
        setOpenColorPick(!openColorPick);
    };

    const handlePickColor = (color) => {
        setInputColor(color);
        setOpenColorPick(false);
    };
    return (
        <div className="ml-4 relative">
            <div
                className="border border-slate-300 p-2 rounded-md h-fit mt-1 hover:bg-slate-100 cursor-pointer"
                onClick={handleOpenColorPick}
            >
                <div
                    className="w-4 h-4 rounded-full"
                    style={{
                        backgroundColor: colorVar.filter(
                            (color) => color.name === inputColor
                        )[0].color,
                    }}
                ></div>
            </div>
            <div
                className={
                    "absolute right-0 bg-slate-100 border border-slate-300 mt-2 px-1 py-3 rounded-xl rounded-tr-none z-10 " +
                    (openColorPick ? null : "hidden")
                }
            >
                <span className="px-2">Pilih Warna Item Jadwal:</span>
                <div className="flex mt-3">
                    {colorVar.map((color) => {
                        return (
                            <div
                                className={
                                    "bg-white p-2 rounded-md h-fit mx-2 hover:bg-slate-100 cursor-pointer " +
                                    (color.name === inputColor
                                        ? "border-2 border-blue-400"
                                        : "border border-slate-300")
                                }
                                onClick={() => {
                                    handlePickColor(color.name);
                                }}
                                key={color.name}
                            >
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{
                                        backgroundColor: color.color,
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ColorItemPicComp;
