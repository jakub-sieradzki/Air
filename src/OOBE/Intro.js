const Intro = () => {
    return (
        <div className="main h-full w-full flex flex-col items-center">
            <p class="text-8xl mt-32">Air</p>
            <div class="info-div bg-slate-700 w-5/6 py-4 px-6 rounded-xl drop-shadow-xl mt-auto">
                <p>Uniwersalna aplikacja do sprawdzania:</p>
                <br />
                <ul class="list-disc px-7">
                    <li>smogu</li>
                    <li>zanieczyszczenia radiacyjnego</li>
                    <li>stężenia pyłków alergicznych</li>
                </ul>
            </div>
            <div class="nav-div w-full h-36 mt-auto flex items-center justify-center">
                <div class="go-btn w-40 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center rounded-full">
                    <p class="text-sm">Rozpocznij</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;