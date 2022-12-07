import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-gradient-to-b from-gray-900 via-cyan-900
    to-black p-4 text-white">
        <div className="flex flex-col p-4 justify-center 
        max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-5xl font-signature2 inline
                border-b-4 border-purple-600 ">Contact</p>
                <p className="text-2xl py-10">Let's get started</p>
            </div>
             <div className="flex justify-center items-center">
                <form action="https://getform.io/f/96476f33-418d-41cd-ac93-55607370cba7"
                method="POST" className="flex flex-col w-full
                md:w-1/2  ">
                    <input type ="text" name="name" placeholder="
                    Enter your Name" className="p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none "/>

                  < input type ="text" name="email" placeholder="
                    Enter your Email" className="my-4 p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none "/>

                    <textarea name="message" rows="10" 
                    placeholder="Enter your Message!"
                    className="
                    p-2 bg-transparent border-2 rounded-md text-white
                    focus:outline-none" ></textarea>

                    <button className="text-white
                    bg-gradient-to-b from-cyan-500 to to-blue-500
                    px-6 py-3 my-8 mx-auto flex items-center
                    rounded-md hover:scale-110
                    duration-300">Get in Touch</button>
                </form>
             </div>
        </div>
    </div>
  )
}

export default Contact