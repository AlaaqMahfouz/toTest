'use client'




export default function TopNavbar(){



    return(
        <>  
        
            

            <nav className="bg-red-800 border-gray-200 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/Logo/lebanese-quiz-logo.png" className="h-20" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Quiz The Cedars</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="#  " className="text-sm  text-gray-500 dark:text-white hover:underline">About me</a>
                        {/* <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a> */}
                    </div>
                </div>
            </nav>


        </>
    )
}