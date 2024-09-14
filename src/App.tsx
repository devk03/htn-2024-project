/*

landing page 
upload video
view video with chat and all that

*/


import { ConvexAiChat } from "@/aiChat";
import { Link } from "@/components/typography/link";
import { Button } from "@/components/ui/button";
import LandingPage from "./landingPage";

function App() {
  return (
    // <main className="container max-w-2xl flex flex-col gap-8">
    //   <h1 className="text-4xl font-extrabold my-8 text-center">
    //     AI Chat using Convex and LangChain
    //   </h1>
    //   <p>Click the button to open the chat window</p>
    //   <p>
    //     <ConvexAiChat
    //       convexUrl={import.meta.env.VITE_CONVEX_URL as string}
    //       name="Linguist"
    //       infoMessage="Ask linguist anything about the video, in any language."
    //       welcomeMessage="Hey there, what can I help you with?"
    //       renderTrigger={(onClick) => (
    //         <Button onClick={onClick}>Chat with Linguist</Button>
    //       )}
    //     />
    //   </p>
    //   <p>
    //     Check out{" "}
    //     <Link target="_blank" href="https://docs.convex.dev/home">
    //       Convex docs
    //     </Link>
    //   </p>
    // </main>
    <LandingPage />
  );
}

export default App;
