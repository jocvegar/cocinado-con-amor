<template>
    <div>
        <div class="my-8 flex justify-center">
            <a href="https://drive.google.com/file/d/1t9WbdH82Ky4isIZ-0ypfT8Gx-2sf_aFk/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
                class="inline-flex items-center font-bold bg-white text-md sm:text-lg py-3 px-6 sm:px-24 md:px-40 lg:px-64 leading-none border-2 rounded text-my-teal border-my-teal hover:border-transparent hover:text-white hover:bg-my-teal mt-4 lg:mt-0">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                Descarga Tu Clase Aquí
            </a>            
        </div>
        <div class="my-8">
            <img class="object-contain px-4 sm:px-0 md:max-w-3xl h-auto mx-auto" 
                src="@/assets/images/conoce_tu_corte/inicio.jpg"/>
        </div>
       <div class="my-8">
            <img class="object-contain px-4 sm:px-0 md:max-w-3xl h-auto mx-auto" 
                src="@/assets/images/conoce_tu_corte/menu.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Cocinando Con Amor | Conoce tu Corte",
        }
    }
}
</script>
