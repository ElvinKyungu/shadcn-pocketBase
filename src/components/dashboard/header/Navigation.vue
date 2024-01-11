<template>
  <NavigationMenuRoot 
    v-model="currentTrigger" 
    class="relative z-[1] flex w-full justify-end ">
    <NavigationMenuList 
        class="
            m-0 flex list-none 
            rounded-[6px] bg-white 
            p-1 gap-4 items-center
        "
    >
      <NavigationMenuItem>
        <NavigationMenuTrigger
          class="
            text-grass11 hover:bg-green3 focus:shadow-green7 
            group flex select-none items-center justify-between 
            gap-[2px] rounded-[4px] px-3 py-4 text-[15px] 
            font-medium leading-none outline-none 
            focus:shadow-[0_0_0_2px] text-black bg-green-100  border border-black/50
          "
        >
          Learn
          <Icon
            icon="radix-icons:caret-down"
            class="text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent
          class="
            data-[motion=from-start]:animate-enterFromLeft 
            data-[motion=from-end]:animate-enterFromRight 
            data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight 
            absolute top-0 left-0 w-full sm:w-auto bg-green-100 border border-gray-200 shadow-lg
          "
        >
          <ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
            <li class="row-span-3 grid">
              <NavigationMenuLink as-child>
                <a
                  class="
                    focus:shadow-green7 from-green9 to-teal9 flex h-full 
                    w-full select-none flex-col justify-end rounded-[6px] 
                    bg-gradient-to-b p-[25px] no-underline outline-none 
                    focus:shadow-[0_0_0_2px] text-black
                  "
                  href="/"
                >
                  <img class="w-16" src="https://www.radix-vue.com/logo.svg">
                  <div class="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-black text-left">Radix Primitives</div>
                  <p class="text-mauve4 text-[14px] leading-[1.3] text-left">Unstyled, accessible components for Vue.</p>
                </a>
              </NavigationMenuLink>
            </li>

            <NavigationMenuListItem class="text-black text-left" href="#" title="Stitches">
              CSS-in-JS with best-in-class developer experience.
            </NavigationMenuListItem>
            <NavigationMenuListItem class="text-black text-left" href="#" title="Colors">
              Beautiful, thought-out palettes with auto dark mode.
            </NavigationMenuListItem>
            <NavigationMenuListItem class="text-black text-left" href="#" title="Icons">
              A crisp set of 15x15 icons, balanced and consistent.
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger
          class="
            text-grass11 hover:bg-green3 focus:shadow-green7 group 
            flex select-none items-center justify-between gap-[2px] 
            rounded-[4px] px-3 py-4 text-[15px] font-medium leading-none 
            outline-none focus:shadow-[0_0_0_2px] text-black bg-green-100 border border-gray-400"
        >
          Overview
          <Icon
            icon="radix-icons:caret-down"
            class="text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent 
            class="
                data-[motion=from-start]:animate-enterFromLeft 
                data-[motion=from-end]:animate-enterFromRight 
                data-[motion=to-start]:animate-exitToLeft 
                data-[motion=to-end]:animate-exitToRight absolute 
                top-0 left-0 w-full sm:w-auto bg-green-100 border border-gray-200 shadow-lg"
            >
          <ul class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3 text-left">
            <NavigationMenuListItem class="text-black" title="Introduction" href="#">
              Build high-quality, accessible design systems and web apps.
            </NavigationMenuListItem>
            <NavigationMenuListItem class="text-black" title="Getting started" href="#">
              A quick tutorial to get you up and running with Radix Primitives.
            </NavigationMenuListItem>
            <NavigationMenuListItem class="text-black" title="Styling" href="#">
              Unstyled and compatible with any styling solution.
            </NavigationMenuListItem>
            <NavigationMenuListItem class="text-black" title="Animation" href="#">
              Use CSS keyframes or any animation library of your choice.
            </NavigationMenuListItem>
            <NavigationMenuListItem class="text-black" title="Accessibility" href="#">
              Tested in a range of browsers and assistive technologies.
            </NavigationMenuListItem>
            <NavigationMenuListItem class="text-black" title="Releases" href="#">
              Radix Primitives releases and their changelogs.
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem @click="handleProfilModalClik">
        <div class="rounded-full text-white items-center justify-center p-4 bg-primary flex gap-2 cursor-pointer">
          <span>Profile</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <transition name="fade" mode="out-in">
          <ProfilModal v-if="showProfilModal" />
        </transition>
      </NavigationMenuItem>

      <NavigationMenuIndicator
        class="data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]"
      >
        <div class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] " />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
      <NavigationMenuViewport
        class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
      />
    </div>
  </NavigationMenuRoot>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'
//import { Button } from '@/components/ui/button'
import NavigationMenuListItem from './NavigationMenuListItem.vue'
import ProfilModal from '@/components/dashboard/profil/ProfilModal.vue'
import { useUserStore } from '@/stores/store';
import { useRouter } from 'vue-router'

const userStore = useUserStore();
const router = useRouter();
const showProfilModal = ref(false)
const handleProfilModalClik = () => {
  showProfilModal.value = !showProfilModal.value;
}

const currentTrigger = ref('')
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>