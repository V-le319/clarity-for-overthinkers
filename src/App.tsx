import { ActionQuestion } from "./ActionQuestion";
import { ThoughtQuestion } from "./ThoughtQuestion";

function App() {
  return (
    <>
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

      <ThoughtQuestion/>
      <ActionQuestion/>

    </>

  );
}

export default App;




