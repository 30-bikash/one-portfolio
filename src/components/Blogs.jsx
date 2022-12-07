import React from 'react'
import blg1 from "../assets/Blog/blg1.jpg"
import blg2 from "../assets/Blog/blg2.png"

const Blogs = () => {

  const Blog = [
    {
        id:1,
        src: blg1,
        href:"https://bananablogs.hashnode.dev/configuring-cloud-applications-in-kubernetes"
    },
    {
        id:2,
        src: blg2,
        href:"https://bananablogs.hashnode.dev/redhat-openshift"
    },
  ]
    
  return (
    <div name="Blogs" className="bg-gradient-to-b from-white 
    via-white to-cyan-800 w-full text-black md:h-screen">

    
        <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full ">
            <div className="pb-8">
                <p className="text-5xl inline border-b-4
                border-purple-600 font-signature2"> Blogs
                </p>
                <p className="py-10 font-semibold text-2xl ">Who you work with matters</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
                        px-12 sm:px-8 ">
            
                
                    {Blog.map(({id, src, href})=>(
                        
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-200
                                hover:scale-105" />
                                <div href={href} className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 
                                 duration-200 hover:scale-105 "><a href={href}
                                 >Link</a></button>
                         </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs