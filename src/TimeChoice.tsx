import { useState } from "react"

export function TimeChoice() {
        const [selectedTimer, setselectedTimer] = useState<number | null>(null)

    return (
        <div className="bg-mainBg min-h-screen max-w-screen p-6 md:p-10 flex flex-col gap-10 justify-center items-start">
            <div className="header w-full">
                <h1 className="font-serif text-2xl font-extralight tracking-widest text-button mb-6 md:mb-10">Clarity</h1>
                <div className="flex gap-2 w-full">
                    <div className="h-1 w-full bg-button rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                </div>
                </div>

            <div className="action-question py-4 ">
                    <p className="text-text font-sans uppercase  font-light opacity-80 text-xs tracking-widest ">
                        Your commitment</p>
                    <h1 className="text-text font-serif font-light text-4xl md:text-5xl py-4  tracking-wide">
                   Here's your plan.
                    </h1>
                </div>

            <div className="h-1/4 w-full bg-white border border-button border-opacity-50 rounded-md flex flex-col justify-center gap-4 p-2">
                <div className="w-full h-auto p-4 rounded-md flex flex-col gap-4 justify-center items-start">
                    <h2 className="text-text opacity-70 uppercase tracking-wider text-xs">The Thought</h2>
                    <p id="thought"  className="text-text font-sans tracking-wide italic">I keep worrying about finishing the project...</p>
                {/*adding logic later to register previous thought to this */}
                </div>

                <div className="h-px w-full bg-button bg-opacity-50"></div>
                
                <div className="w-full h-auto p-4 rounded-md flex flex-col gap-4 justify-center items-start">
                    <h2 className="text-text opacity-70 uppercase tracking-wider text-xs">Your move</h2>
                    <p id="action"  className="text-text font-sans tracking-wide italic">Write it down</p>
                {/*adding logic later to register previous choice of action to this */}
                </div>
            </div>

            <div className="time-choice h-auto w-full flex flex-col gap-10">
                <p className="text-text font-sans uppercase  font-light opacity-80 text-xs tracking-widest ">
                        How long will you give it?</p>

                        {/*make sure to not set fixed bg-colour in className when setting condition for select */}
                <div className="h-40 w-full grid grid-cols-3 gap-3">
                    <div onClick={()=> setselectedTimer(5)}
                        className={` text-text border cursor-pointer border-button rounded-md flex flex-col justify-center items-center
                            ${selectedTimer === 5 ? 'bg-lightBg' : 'bg-mainBg'}`
                         }>
                        <h3 className="text-5xl">5</h3>
                        <p className="uppercase font-light text-sm">min</p>
                    </div>
                    <div onClick={()=> setselectedTimer(15)}
                        className={` text-text border cursor-pointer border-button rounded-md flex flex-col justify-center items-center
                          ${selectedTimer === 15 ? 'bg-lightBg' : 'bg-mainBg'}      `
                        }>
                        <h3 className="text-5xl ">15</h3>
                        <p className="uppercase font-light text-sm">min</p>
                    </div>
                    <div onClick={()=> setselectedTimer(30)}
                        className={` text-text border cursor-pointer border-button rounded-md flex flex-col justify-center items-center
                          ${selectedTimer === 30 ? 'bg-lightBg' : 'bg-mainBg'}      `
                        }>
                        <h3 className="text-5xl">30</h3>
                        <p className="uppercase font-light text-sm">min</p>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <button className="w-full h-10 md:h-14 tracking-widest  bg-text rounded-full text-white transform md:text-lg hover:bg-button">
                    Begin →</button>
                <p className="text-center mt-6 text-text opacity-50 text-sm">one thought · one action · one block of time</p>
            </div>

        </div>
    )
}