import { useState, useEffect } from "react";

export function Countdown({selectedTimer, selected, currentStep, onRestart} : {
    selectedTimer: number | null;
    selected: string | null;
    currentStep: number;
    
    onRestart: ()=> void
}) {

        const [isPaused, setIsPaused] = useState(false);

        const [timeLeft, setTimeLeft] = useState((selectedTimer ?? 0) * 60);
         useEffect(() => {
  if (timeLeft === 0 || isPaused) return
  
  const timer = setInterval(() => {
    setTimeLeft(timeLeft - 1)
  }, 1000)
  
  return () => clearInterval(timer)
}, [timeLeft, isPaused])

const minutes = Math.floor(timeLeft / 60)
const seconds = timeLeft % 60;



    return (
        <div className="bg-mainBg h-screen max-w-screen p-6 md:p-10 flex flex-col gap-10 justify-center items-start">
            <div className="header w-full">
                <h1 className="font-serif text-2xl font-extralight tracking-widest text-button mb-6 md:mb-10">Clarity</h1>
                <div className="flex gap-2 w-full">
                {[1,2,3,4].map((step) => (
  <div key={step} className={`h-1 w-full rounded-md ${currentStep >= step ? 'bg-button' : 'bg-lightBg'}`}/>
))}
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
                    {minutes}:{seconds.toString().padStart(2, '0')}
                    </text>

                <circle
                    cx="100" cy="100" r="80"
                    fill="none"
                    stroke="#a67a5b"
                    strokeWidth="3"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeDashoffset={2 * Math.PI * 80 * (timeLeft / ((selectedTimer ?? 1) * 60))}
                    
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
            <button onClick={onRestart}
            className="border border-button  text-text text-sm tracking-wider px-6 p-2 md:px-10  hover:bg-lightBg rounded-full">Restart</button>
        </div>

        <div className="w-full">
            <p className="text-center mt-6 text-text opacity-50 text-sm">one thought · one action · one block of time</p>
        </div>

    </div>
    )
}