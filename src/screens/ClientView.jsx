import React from 'react'
import { Link } from 'react-router-dom';
import { NavBarVertical } from '../components/NavBarVertical';
import 'flowbite';

export const ClientView = () => {
    return (
        <>  
            <NavBarVertical></NavBarVertical>
            <section className="text-gray-400 bg-white body-font min-h-screen">
                <div className="ml-64 p-4 mt-[56px]">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://pics.filmaffinity.com/083236163337254-nm_200.jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Cliente</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'>1006111456</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/InfoClientView'>Santiago Belalcazar</Link></h2>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://i.ytimg.com/vi/YOoIMauBGXo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgZig5MA8=&rs=AOn4CLAtT9IwHumgLsutYo_qPLPQS-2khg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Cliente</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'>1006111456</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/InfoClientView'>Luis Pitillos</Link></h2>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?cs=srgb&dl=pexels-dshanp-2876486.jpg&fm=jpg" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Cliente</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'>1006111456</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/InfoClientView'>Kevin Loachamin</Link></h2>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-lg shadow-md border border-gray-800 hover:shadow-xl mx-10 mb-8">
                            <div className="block relative h-48 rounded">
                                <img alt="tokio" className="object-cover object-center w-full h-full block" src="https://cnnespanol.cnn.com/wp-content/uploads/2015/01/150108073920-peter-griffin-real-life-super-169.jpg?quality=100&strip=info" />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-black font-semibold text-xs tracking-widest title-font mb-1">Cliente</h3>
                                <h2 className='text-black text-xs tracking-widest title-font mb-1'>1006111456</h2>
                                <h2 className="text-black title-font text-lg font-medium hover:text-hover-orange"><Link to='/InfoClientView'>Manuel Herrera</Link></h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}