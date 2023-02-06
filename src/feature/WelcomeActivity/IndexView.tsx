import { useInstance } from "../../hooks/useInstance";

function IndexView() {
    const { state } = useInstance();

    return (
        <h1>{ state?.title }</h1>
    );
}

export { IndexView };