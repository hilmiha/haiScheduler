import FormDetailJadwalComp from "./FormDetailJadwal_Comp";
import FormEditJadwalComp from "./FormEditJadwal_Comp";

const PopUpCanvasComp = ({
    popUpOpen,
    setPopUpOpen,
    popSelectedIdJdwl,
    setPopSelectedIdJdwl,
    popUpEdit,
    setPopUpEdit,
}) => {
    const handleClodePopUp = () => {
        setPopUpOpen(false);
        setPopUpEdit(false);
        setPopSelectedIdJdwl("");
    };

    if (popUpOpen) {
        return (
            <div className="flex z-40 absolute w-screen justify-center items-center">
                <div
                    className="bg-gray-900 bg-opacity-40 h-screen w-full"
                    onClick={handleClodePopUp}
                ></div>
                <div className="bg-white w-[450px] min-h-fit max-h-[600px] absolute overflow-auto rounded-xl">
                    {popUpEdit ? (
                        <FormEditJadwalComp
                            popSelectedIdJdwl={popSelectedIdJdwl}
                        />
                    ) : (
                        <FormDetailJadwalComp
                            popSelectedIdJdwl={popSelectedIdJdwl}
                            setPopUpEdit={setPopUpEdit}
                        />
                    )}
                </div>
            </div>
        );
    } else {
        return null;
    }
};
export default PopUpCanvasComp;
