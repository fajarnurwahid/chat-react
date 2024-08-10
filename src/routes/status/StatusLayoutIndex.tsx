import StatusViewIndex from "./StatusViewIndex";
import Status from "./Status";

export default function StatusLayoutIndex() {
    return (
        <>
            <Status isIndex={true} />
            <StatusViewIndex />
        </>
    );
}
