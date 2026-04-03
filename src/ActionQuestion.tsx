export function ActionQuestion() {
    return (
        <div className="bg-mainBg h-screen max-w-screen p-6 md:p-10 flex flex-col justify-center items-start">
            <div className="header w-full">
                <h1 className="font-serif text-2xl md:text-4xl text-button mb-6 md:mb-10">Clarity</h1>
                <div className="flex gap-2 w-full">
                    <div className="h-1 w-full bg-button rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                </div>
                </div>

                <div className="thought-question py-10 ">
                <p className="text-text font-sans uppercase  font-light opacity-80 text-xs tracking-widest ">one small move</p>
                <h1 className="text-text font-serif font-light text-4xl md:text-5xl py-4 tracking-wide">
                    What's <span className="text-button italic">one thing</span> you could do about it right now?
                    </h1>
                <p className="text-text font-sans  opacity-70 text-sm md:text-base tracking-wide ">No filter. No judgement. Just write it out — messy, scattered, all of it.</p>
            </div>

        </div>
    )
}