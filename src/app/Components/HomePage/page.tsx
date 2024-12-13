'use client'

import TopNavbar from "../TopNavBar/page"




export default function HomePage(){

    // get the root element
    const root = document.getElementById('lebanon-flag');

    document.addEventListener('mousemove', (event) => {
    // calculate transformation values
    const smoothMove = 0.01;
    const rotateX = (event.clientY - window.innerHeight / 2) * smoothMove;
    const rotateY = (event.clientX - window.innerWidth / 2) * -smoothMove / 2;

    // set CSS variables
    root.style.setProperty('--rotate-x', `${rotateX}deg`);
    root.style.setProperty('--rotate-y', `${rotateY}deg`);
    });



    return(
        <>  
            <TopNavbar/>

            <div className="bg-black h-screen">

                <img id="lebanon-flag" src="/LebanonFlag/lebanon-flag.webp" className="w-full h-full opacity-50"/>

            </div>


        </>
    )
}