import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import java from "../assets/Java.png"
import reactImage from "../assets/react.png"
import python from "../assets/python.png"
import linux from "../assets/linux.png"
import node from "../assets/node.png"
import git from "../assets/Git.png"
import apache from "../assets/apache.png"


const Experience = () => {

        const tools =[

               {

                id:1,
                src:html,
                title: 'HTML',
                Style: 'shadow-orange-500'

               }, 
               {

                id:2,
                src:css,
                title: 'CSS',
                Style: 'shadow-blue-500'

               }, 
               {

                id:3,
                src:java,
                title: 'JAVA',
                Style: 'shadow-white-500'

               }, 
               {

                id:4,
                src:reactImage,
                title: 'REACT',
                Style: 'shadow-blue-600'

               }, 
               {

                id:5,
                src:python,
                title: 'PYTHON',
                Style: 'shadow-sky-500'

               }, 
               {

                id:6,
                src:linux,
                title: 'LINUX',
                Style: 'shadow-yellow-600'

               }, 
               {

                id:7,
                src:node,
                title: 'NODE JS',
                Style: 'shadow-orange-500'

               }, 
               {

                id:8,
                src:git,
                title: 'GIT',
                Style: 'shadow-red-500'

               },
               {

                id:9,
                src:apache,
                title: 'APACHE',
                Style: 'shadow-red-500'

               },  

        ]

  return (
    <div name="experience" className="bg-gradient-to-b from-cyan-800 
    via-cyan-700 to-gray-900 w-full h-full">

        <div className="max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white ">

            <div>
                <p className="text-5xl font-signature2 border-b-4
                border-purple-600 p-2 py-0 inline">Experience</p>
                <p className="py-10 text-2xl">These are the tools I've worked with</p>
            </div>

              <div className="w-full grid grid-cols-2 sm:grid-cols-3
              gap-8 text-center py-8 px-12 sm:px-8 ">

                {
                    tools.map(({id, src, title, style}) =>(

                        <div key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                         <img src={src} alt=""  className="w-20 mx-auto"/>
                         <p className="mt-4">{title}</p>
                        </div>
                    ))
                }

              </div>

        </div>

    </div>
  )
}

export default Experience