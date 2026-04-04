import { ActionQuestion } from "./ActionQuestion";
import { ThoughtQuestion } from "./ThoughtQuestion";
import { TimeChoice } from "./TimeChoice";
import { Countdown } from "./Countdown";
import { useState, useEffect } from "react";

function App() {
        const [selected, setSelected] = useState<string | null>(null);
        const [selectedTimer, setSelectedTimer] = useState<number | null>(null);

        const [currentStep, setCurrentStep] = useState(0);
        const handleNext = () => setCurrentStep(currentStep + 1); 

          useEffect(() => {
            if(currentStep === 0) {
              const timer = setTimeout(() => {
                handleNext()
              }, 3000);
              return ()=>clearTimeout(timer) 
            }
          }, [currentStep])

  return (
    <>
    {currentStep === 0 && (
    <div className="min-h-screen bg-lightBg flex flex-col items-center justify-center ">
      <svg className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 -rotate-90" viewBox="0 0 200 200">
  <circle
    cx="100" cy="100" r="80"
    fill="none"
    stroke="#e8ded3"
    strokeWidth="6"
  />
 
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


        <h1 className="md:text-5xl text-3xl absolute rotate-90 font-serif text-button ">clarity</h1>
       
    </div>
    )}

      {currentStep === 1 && <ThoughtQuestion onComplete={handleNext}/>}
      {currentStep === 2 && <ActionQuestion selected={selected} setSelected={setSelected} onComplete={handleNext}/>}
      {currentStep === 3 && <TimeChoice selectedTimer={selectedTimer} setSelectedTimer={setSelectedTimer} onComplete={handleNext}/>}
      {currentStep === 4 && <Countdown selectedTimer={selectedTimer} selected={selected} onComplete={handleNext}/>}

    </>

  );
}

export default App;




