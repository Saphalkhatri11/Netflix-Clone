import { useState, useContext } from "react";
import { useLanguage } from "./App";
function Signup(){
    
    return(
        <div>
            <div className="w-full h-screen overflow-hidden">
                <img src="/signup-page-image/signup-page-backgroung-image.jpg" alt="" className="brightness-20 
                w-full h-full object-cover" />
            </div>
            <img src="/signup-page-image/netflix-logo.svg" alt="" className="h-7 w-auto absolute top-8 left-8" />
            <TopLeft/>
            <MidSection/>
            
        </div>
    )
}

function TopLeft(){
    const { language, setLanguage} = useContext(useLanguage);
    return(
        <div className="
        absolute
        right-10
        w-auto
        top-8 
        flex 
        gap-4 
        column ">
            <select name="Language" value={language} onChange={(e) => setLanguage(e.target.value)} id="" className="
            bg-stone-950
            text-md
            w-7
            sm:w-auto
            border 
            px-3           
           text-white">
                <option value="English" className="text-black bg-white">English</option>
                <option value="Hindi" className="text-black bg-white">हिन्दी </option>
            </select>
            <a href="" className="
            text-md 
            bg-red-600 
            text-white 
            px-3 
            py-1 
            rounded">{language === "Hindi" ? "साइन इन करें"  : "Sign In" }</a>
        </div>)
}

function MidSection(){
    const {language, setLanguage} = useContext(useLanguage);
    const [email, updateEmail] = useState("");
    return(

    <>    
    <div className="absolute top-50 w-full flex-row justify-center overflow-hidden  ">
            <p className="
            text-4xl
            lg:text-5xl
            px-6 
            font-bold 
            text-center
            w-auto 
            text-white">{language === "English" ? "Unlimited movies, shows, and more" : "अनलिमिटेड फ़िल्में, शो और बहुत कुछ"}</p>

            <p className="
            mt-1
            text-lg 
            font-medium  
            text-center
            w-full 
            text-white
            ">{language === "English" ? " Starts at ₹149. Cancel at any time" : "₹149 से शुरू। कभी भी कैंसल करें"}</p>
            <p className="
            text-lg  
            text-center 
            text-white
            mt-4 ">{language === "English" ? "Ready to watch? Enter your email to create or restart your membership" : "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या फिर से शुरू करने के लिए अपना ईमेल डालें"}</p>
            </div>
            <form action="" className="absolute mt-10 sm:-mt-5 top-96 px-10 w-screen  border-white sm:flex sm:flex-row  sm:justify-center  sm:gap-4 ">
                <div className="w-full max-w-md relative">                   
                    <input type="email" name="email" value={email} maxLength={50} onChange={(e) => updateEmail(e.target.value)} 
                    className="
                    border
                    bg-transparent
                    text-white
                    w-full
                    h-12 
                    px-4 
                    pt-6 
                    pb-3 
                    peer
                    rounded-sm
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-white-500 
                    focus:ring-offset-2
                  focus:ring-offset-black" />
                  <label className="absolute top-3 left-4 text-zinc-400 pointer-events-none text-lg peer-focus:top-1 peer-focus:text-sm transition-all duration-300  ">{language === "English" ? "Email address" : "ईमेल एड्रेस"}</label>
            </div>

                    
                <div>    
                    <button type="submit"  className="border block  w-48 sm:w-50  rounded text-2xl px-6 py-2 bg-red-600 text-white font-medium border-none mt-7 mx-auto sm:mt-0 ">{language === "English" ? "Get started ❯ ": "शुरू करें  ❯"}</button>
                </div>



            </form>
          </>  

        
    )
}

//section 2 start 
function SecondSection(){
    return(
        <>
            <div className="
            z-[-12]
            overflow-hidden
            relative
            bottom-30
            border
            w-full 
            bg-black
            h-[100vh]
            ">
            </div>
            <CurveLine></CurveLine>
        </>
    )
}

//curved line in the center
function CurveLine(){
    return(
    <div className="
    overflow-hidden
     z-12
     absolute
     top-[600px]">
            <div className="
            bg-black
            right-50
            w-[120vw]
            relative
            right-20
            h-40
            border-t-4 
            border-red-600 
            rounded-t-[80%]
            
            
             "></div>
    </div>)
}

//create the corousel of the signin page
function HorizontalCorousle(){
    return(
    <>

    </>
    )
}


//create a single card for horizontal corousel
function CorosCard(){
    return(
    <div>
        

    </div>
    )
}

export default Signup

