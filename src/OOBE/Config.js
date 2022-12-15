import { useParams } from "react-router-dom";

const Config = () => {
    const { id } = useParams();
    return (
        <div className="h-full w-full p-5">
            { id === 0 && <p className="">Wybierz lokalizację</p>}

        </div>
     );
}
 
export default Config;