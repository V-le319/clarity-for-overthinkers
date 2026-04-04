import { useState } from "react";

export function Countdown({selectedTimer, selected} : {
    selectedTimer: number | null;
    selected: string | null
}) {
        const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="bg-mainBg h-screen max-w-screen p-6 md:p-10 flex flex-col gap-8 justify-center items-start">
            <div className="header w-full">
                <h1 className="font-serif text-2xl font-extralight tracking-widest text-button mb-6 md:mb-10">Clarity</h1>
                <div className="flex gap-2 w-full">
                    <div className="h-1 w-full bg-button rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                </div>
                </div>

        <div className="w-full flex flex-col justify-center items-center">
            <svg className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 -rotate-90" viewBox="0 0 200 200">
                <circle
                    cx="100" cy="100" r="80"
                    fill="none"
                    stroke="#e8ded3"
                    strokeWidth="6"
                />
                    <text 
                        x="100" y="110" 
                        textAnchor="middle" 
                        className="fill-button font-sans text-opacity-80 font-light text-text text-3xl"
                       
                    >
                    {selectedTimer}
                    </text>

                <circle
                    cx="100" cy="100" r="80"
                    fill="none"
                    stroke="#a67a5b"
                    strokeWidth="3"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeDashoffset={2 * Math.PI * 80}
                    className="animate-ring"
                    />
                </svg>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
            <h3 className="text-text text-2xl md:text-3xl pb-2 italic font-serif">"{selected}"</h3>
            <div className="w-full flex flex-col justify-center items-center text-text text-opacity-80 text-sm font-light">
                <p>You don't need to finish.</p>
                <p>Just start. </p>
            </div>
        </div>

        <div className="w-full flex gap-4 md:gap-6 items-center justify-center">
            <button onClick={()=> setIsPaused(!isPaused)}
                    className="border border-button text-text text-sm tracking-wider px-6 p-2 md:px-10 hover:bg-lightBg rounded-full">
                {isPaused ? "Resume" : "Pause"}
                </button>
            <button className="border border-button  text-text text-sm tracking-wider px-6 p-2 md:px-10  hover:bg-lightBg rounded-full">Restart</button>
        </div>

        <div className="w-full">
            <p className="text-center mt-6 text-text opacity-50 text-sm">one thought · one action · one block of time</p>
        </div>

    </div>
    )
}