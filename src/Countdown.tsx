import { useState, useEffect, useRef } from "react";

export function Countdown({selectedTimer, selected, currentStep, onRestart} : {
    selectedTimer: number | null;
    selected: string | null;
    currentStep: number;
    
    onRestart: ()=> void
}) {

        const [isPaused, setIsPaused] = useState(false);
        const [timeLeft, setTimeLeft] = useState((selectedTimer ?? 0) * 60);
        const [alarmPlaying, setAlarmPlaying] = useState(false);
        const audioCtxRef = useRef<AudioContext | null>(null);
        const alarmIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

         useEffect(() => {
            if (timeLeft === 0 || isPaused) return
  
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1)
                }, 1000)
  
                return () => clearInterval(timer)
                }, [timeLeft, isPaused])

// Trigger alarm when timeLeft hits 0
    useEffect(() => {
        if (timeLeft === 0) {
            playAlarm();
             // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [timeLeft]);

    // Cleanup on unmount
    useEffect(() => {
        return () => stopAlarm();
    }, []);

    const playAlarm = () => {
        stopAlarm(); // clear any previous
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;
        setAlarmPlaying(true);

        const beep = () => {
            // Two-tone chime: high then low
            [[880, 0, 0.15], [660, 0.18, 0.15]].forEach(([freq, delay, dur]) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = "sine";
                osc.frequency.value = freq;
                const start = ctx.currentTime + delay;
                gain.gain.setValueAtTime(0, start);
                gain.gain.linearRampToValueAtTime(0.4, start + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
                osc.start(start);
                osc.stop(start + dur + 0.05);
            });
        };

        beep();
        // Repeat every 1.2s
        alarmIntervalRef.current = setInterval(beep, 1200);
    };

    const stopAlarm = () => {
        if (alarmIntervalRef.current) {
            clearInterval(alarmIntervalRef.current);
            alarmIntervalRef.current = null;
        }
        if (audioCtxRef.current) {
            audioCtxRef.current.close();
            audioCtxRef.current = null;
        }
        setAlarmPlaying(false);
    };

const minutes = Math.floor(timeLeft / 60)
const seconds = timeLeft % 60;



    return (
        <div className="page-transition bg-mainBg h-screen max-w-screen p-6 md:p-10 flex flex-col gap-10 justify-center items-start">
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

                {/* Alarm indicator + dismiss */}
                {alarmPlaying && (
                    <div className="flex flex-col items-center gap-3 mt-2 animate-pulse">
                        <p className="text-button text-sm tracking-widest font-light">Time's up</p>
                        <button
                            onClick={stopAlarm}
                            className="border border-button text-text text-sm tracking-wider px-6 py-2 hover:bg-lightBg rounded-full"
                        >
                            Dismiss
                        </button>
                    </div>
                )}
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
            <p className="w-full text-center mt-1 text-text opacity-50 text-sm">Copyright © 2026 VLe</p>
        </div>

    </div>
    )
}