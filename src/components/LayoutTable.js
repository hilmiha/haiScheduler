import ColumnTime from "./ColumnTime_Comp";
import ColumnDay from "./ColumnDay_Comp";

const LayoutTable = () => {
    return (
        <div className="max-w-[80%]">
            <div className="overflow-auto h-screen text-xs">
                <div className="flex min-w-max">
                    <ColumnTime />
                    <ColumnDay day="senin" />
                </div>
            </div>
        </div>
    );
};

export default LayoutTable;
