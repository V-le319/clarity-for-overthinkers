export function ThoughtQuestion({onComplete} : {
    onComplete: ()=> void
}) {
    return (
        <div className="bg-mainBg h-screen max-w-screen p-6 md:p-10  flex flex-col gap-10 justify-center items-start">
            <div className="header w-full ">
                <h1 className="font-serif text-2xl font-extralight tracking-widest text-button mb-6 md:mb-10">Clarity</h1>
                <div className="flex gap-2 w-full">
                    <div className="h-1 w-full bg-button rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                    <div className="h-1 w-full bg-lightBg rounded-md"></div>
                </div>
            </div>

            <div className="thought-question py-10 ">
                <p className="text-text font-sans uppercase  font-light opacity-80 text-xs tracking-widest ">Let it out</p>
                <h1 className="text-text font-serif font-light text-4xl md:text-5xl py-4 tracking-wide">
                    What's been living <span className="text-button italic">rent-free</span> in your head?
                    </h1>
                <p className="text-text font-sans  opacity-70 text-sm md:text-base tracking-wide ">No filter. No judgement. Just write it out — messy, scattered, all of it.</p>
            </div>

            <div className="w-full h-1/3 ">
                <textarea 
                        className="w-full h-full p-4 text-text font-sans bg-mainBg outline-none border-b-2 border-button border-opacity-70"
                        placeholder="I keep worrying about..."
                        ></textarea>
            </div>

            <div className="w-full">
                <button onClick={onComplete}
                        className="w-full h-10 md:h-14 tracking-widest  bg-text rounded-full text-white transform md:text-lg hover:bg-button">
                    Got it →</button>
                <p className="text-center mt-6 text-text opacity-50 text-sm">one thought · one action · one block of time</p>
            </div>
        </div>
    )
}