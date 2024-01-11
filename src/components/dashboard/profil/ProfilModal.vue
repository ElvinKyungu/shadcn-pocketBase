<template>
  <div class="flex w-full h-screen fixed">
    <div>
      <div class="fixed inset-0 transition-opacity cursor-pointer">
        <div class="absolute inset-0 bg-gray-800 opacity-50 w-full z-40 cursor-pointer"></div>
      </div>
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex text-center sm:block sm:p-0">
          <div class="ml-[77%] -mt-20 sm:max-w-[24rem] sm:w-full">
            <div class="relative">
              <div class="flex justify-end items-end">
                <div class="container mx-auto my-60">
                  <div class="bg-white relative shadow rounded-lg mx-auto">
                    <div class="flex justify-center cursor-pointer">
                      <img 
                        src="https://avatars0.githubusercontent.com/u/35900628?v=4" 
                        alt="" 
                        class="
                          rounded-full mx-auto absolute -top-20 w-28 h-28 
                          shadow-md border-4 border-white transition 
                          duration-200 transform hover:scale-110
                        "
                      >
                    </div>
                    <div class="mt-16">
                      <h1 class="font-bold text-center text-3xl text-gray-900">Elvin Kyungu</h1>
                      <p class="text-center text-sm text-gray-400 font-medium mb-4">Développeur web frontend</p>
                    </div>
                    <div class="px-6">
                      <router-link 
                        to="/profile"
                        class="
                          text-gray-200 block rounded-lg text-center font-medium 
                          leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white
                        "
                      >
                        Voir le profil complet
                      </router-link>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>