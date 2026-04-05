import { useState } from "react"

export function ActionQuestion({selected, setSelected, thought, currentStep, onComplete} : {
    selected: string | null;
    setSelected: (value: string) => void;
    thought: string;
    currentStep: number;
    onComplete: ()=> void
}) {
    
    const [showOther, setShowOther] = useState(false)

    return (
        <div className="bg-mainBg min-h-screen max-w-screen p-6 md:p-10 flex flex-col gap-6 justify-center items-start">
            <div className="header w-full">
                <h1 className="font-serif text-2xl font-extralight tracking-widest text-button mb-6 md:mb-10">Clarity</h1>
                <div className="flex gap-2 w-full">
                {[1,2,3,4].map((step) => (
  <div key={step} className={`h-1 w-full rounded-md ${currentStep >= step ? 'bg-button' : 'bg-lightBg'}`}/>
))}
</div>
                </div>

                <div className="action-question py-4 ">
                    <p className="text-text font-sans uppercase  font-light opacity-80 text-xs tracking-widest ">one small move</p>
                    <h1 className="text-text font-serif font-light text-4xl md:text-5xl py-4  tracking-wide">
                    What's <span className="text-button italic">one thing</span> you could do about it right now?
                    </h1>
                </div>

                <div className="w-full h-auto bg-lightBg p-4 rounded-md flex flex-col gap-4 justify-center items-start">
                    <h2 className="text-text opacity-70 uppercase tracking-wider text-xs">you said</h2>
                    <p id="thought" className="text-text font-sans tracking-wide italic">{thought}</p>
                </div>

                <div className="h-full w-full text-text text-opacity-70 italic tracking-wider ">
                    <p>You can now...</p>
                </div>

                <div className="h-full w-full flex flex-col gap-2">
                    <div onClick={() => setSelected('Write it down')}
                        className={`h-10 w-full p-2 border-2 flex items-center cursor-pointer text-text font-sans text-sm rounded-md
    ${selected === 'Write it down' ? 'bg-lightBg text-text border-button border-opacity-50' : 'border-button border-opacity-50 hover:bg-lightBg'}`}>
                        ✍ Write it down</div>
                    <div onClick={() => setSelected('Take a breath')}
                        className={`h-10 w-full p-2 border-2 flex items-center cursor-pointer text-text font-sans text-sm rounded-md
    ${selected === 'Take a breath' ? 'bg-lightBg text-text border-button border-opacity-50' : 'border-button border-opacity-50 hover:bg-lightBg'}`}>
                        🍃 Take a breath</div>
                    <div onClick={()=> setSelected('Talk it out')}
                        className={`h-10 w-full p-2 border-2 flex items-center cursor-pointer text-text font-sans text-sm rounded-md
    ${selected === 'Talk it out' ? 'bg-lightBg text-text border-button border-opacity-50' : 'border-button border-opacity-50 hover:bg-lightBg'}`}>
                       🗣️ Talk it out</div>
                    <div onClick={()=> setSelected('Move your body')}
                        className={`h-10 w-full p-2 border-2 flex items-center cursor-pointer text-text font-sans text-sm rounded-md
    ${selected === 'Move your body' ? 'bg-lightBg text-text border-button border-opacity-50' : 'border-button border-opacity-50 hover:bg-lightBg'}`}>
                        🚶 Move the body</div>
                    <div onClick={() => setShowOther(true)}
  className={`w-full p-2 border-2 flex items-center cursor-pointer text-text font-sans text-sm rounded-md
    ${showOther ? 'bg-lightBg border-button' : 'border-button border-opacity-50 hover:bg-lightBg'}`}>

  {showOther ? (
    <textarea
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => setSelected(e.target.value)}
      className="w-full h-auto p-2 bg-transparent outline-none resize-none text-sm font-sans text-text"
      placeholder="I'm going to..."
      rows={2}
      autoFocus
    />
  ) : (
    <span>✏️ Other</span>
  )}
</div>
                </div>

                     <div className="w-full">
                <button onClick={onComplete}
                        className="w-full h-10 md:h-14 tracking-widest  bg-text rounded-full text-white transform md:text-lg hover:bg-button">
                    I know what to do →</button>
                <p className="text-center mt-6 text-text opacity-50 text-sm">one thought · one action · one block of time</p>
            </div>

        </div>
    )
}