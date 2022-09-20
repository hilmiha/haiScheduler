import FormAddEventComp from "./FormAddEvent_Comp";

const SideCanvasComp = ({
    setLastUpdate,
    dateSelected,
    sideNavOpen,
    setSideNavOpen,
}) => {
    const handleClodeSideNav = () => {
        setSideNavOpen(false);
    };

    if (sideNavOpen) {
        return (
            <div className="flex z-40 absolute w-screen">
                <div
                    className="grow bg-gray-900 bg-opacity-40 h-screen"
                    onClick={handleClodeSideNav}
                ></div>
                <div className="bg-white w-[400px] max-h-screen overflow-auto">
                    <FormAddEventComp
                        setLastUpdate={setLastUpdate}
                        dateSelected={dateSelected}
                        setSideNavOpen={setSideNavOpen}
                    />
                </div>
            </div>
        );
    } else {
        return null;
    }
};
export default SideCanvasComp;
