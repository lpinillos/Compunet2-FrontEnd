import React from 'react'
import { NavBarVertical } from '../components/NavBarVertical'

export const InfoClientView = () => {
    return (
        <>
        <NavBarVertical></NavBarVertical>
            <section class="text-gray-400 bg-white body-font min-h-screen">
                <div class="ml-64 p-4">
                    <div class="lg:w-4/5 mt-28 ml-28 flex flex-wrap shadow-md border border-gray-800 border-x-2 border-y-2 hover:shadow-xl rounded-lg">
                        <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded" src="https://images.ecestaticos.com/svQkpRHGCpf_arlLfdRSHczlJU0=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F09b%2F94b%2F0af%2F09b94b0afe62646e72bd87ae96c0d359.jpg" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-black tracking-widest font-semibold">Tokio - Japón</h2>
                            <h1 class="text-black text-3xl title-font font-medium mb-1">Plan Mochilero</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-hover-orange" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-hover-orange" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-hover-orange" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-hover-orange" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-hover-orange" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                
                            </div>
                            <p class="leading-relaxed mr-2 mb-10">¡Descubre Tokio de una manera única con nuestro plan mochilero! Sumérgete en la vibrante cultura de la ciudad mientras exploras sus bulliciosos mercados callejeros y sus tranquilos jardines zen. Desde los rascacielos de Shibuya hasta los santuarios ancestrales de Asakusa, cada rincón ofrece una experiencia fascinante. Déjate sorprender por la exquisita gastronomía local y la calidez de su gente. ¡Prepárate para una aventura inolvidable en la ciudad más emocionante del mundo!</p>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">$800.00</span>
                                <button class="flex ml-auto text-white bg-custom-orange border-0 py-2 px-6 focus:outline-none hover:bg-hover-orange rounded">Editar Plan</button>
                                <button class="rounded-full w-10 h-10 bg-gray-200 hover:bg-custom-orange p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 mr-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
