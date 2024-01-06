<template>
  <aside class="h-screen w-1/5 relative">
    <div class="absolute left-0 h-full bg-slate-100 w-full flex p-4 ">
      <nav class="fixed">
        <ul class="flex flex-col justify-start items-start relative wh-screen mt-24 w-full">
          <li>
            <router-link 
              class="
                p-2 pl-5 text-lg transition hover:bg-slate-200 pr-[11.9rem] 
                flex items-center justify-start text-left"
              to=""
            >
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link 
              class="
                p-2 pl-5 text-lg transition hover:bg-slate-200 pr-[12.9rem] 
                flex items-center justify-start text-left" 
              to=""
            >
              All Tasks
            </router-link>
          </li>
          <li>
            <router-link
              class="p-2 pl-5 text-lg transition hover:bg-slate-200 pr-[12.9rem] flex items-center justify-start text-left"
              to=""
            >
              My Tasks
            </router-link>
          </li>
          <li class="p-2 pointer-events-none mt-5">
            Tags
          </li>
          <ul>
           <li>
              <router-link 
                class="
                  p-2 pl-5 text-lg transition hover:bg-slate-200 pr-[8.9rem] 
                  flex items-center justify-start text-left
                "
                to=""
              >
                Important
              </router-link>
            </li>
            <li>
              <router-link 
                class="
                  p-2 pl-5 text-lg transition hover:bg-slate-200 pr-[8.9rem] 
                  flex items-center justify-start text-left
                "
                to=""
              >
                Social
              </router-link>
            </li>
            <li>
              <router-link 
                class="
                  p-2 pl-5 text-lg transition hover:bg-slate-200 pr-[11.9rem] 
                  flex items-center justify-start text-left
                " 
                to=""
              >
                Homework
              </router-link>
            </li>
            <li>
              <router-link
                class="
                  p-2 pl-5 text-lg transition hover:bg-slate-200 
                  flex items-center justify-start text-left pr-[11.9rem] 
                "
               to=""
              >
                Fun
              </router-link>
            </li>
          </ul>
          <li>
            <router-link 
              class="
                p-2 pl-5 text-lg transition hover:bg-slate-200 pr-[13.9rem] 
                flex items-center justify-start text-left
              "
              to=""
            >
              Logout
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>