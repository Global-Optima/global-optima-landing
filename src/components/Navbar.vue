<script setup lang="ts">
import { ref, computed } from 'vue';
import { useColorMode } from '@vueuse/core';
import { locale, translations } from '@/composables/useLocale';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Code, Mail } from 'lucide-vue-next';
import ToggleTheme from './ToggleTheme.vue';
import ToggleLanguage from './ToggleLanguage.vue';

const mode = useColorMode();
mode.value = 'dark';

interface RouteProps {
  href: string;
  label: string;
}

// reactive translations for navbar
const brand = computed(() => translations[locale.value].navbar.brand);
const contactLabel = computed(() => translations[locale.value].navbar.contact);
const getInTouch = computed(() => translations[locale.value].navbar.getInTouch);

const routeList = computed<RouteProps[]>(() => [
  { href: '#features', label: translations[locale.value].navbar.aboutUs },
  { href: '#products',  label: translations[locale.value].navbar.projects },
  { href: '#services',  label: translations[locale.value].navbar.services },
  { href: '#contact',   label: translations[locale.value].navbar.careers },
]);

const isOpen = ref(false);
</script>

<template>
  <header
    :class="[
      'sticky top-5 z-40 mx-auto flex w-fit items-center justify-between whitespace-nowrap gap-8 lg:gap-4',
      'p-4 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-white/20 dark:border-black/20',
      mode === 'light' ? 'shadow-light' : 'shadow-dark'
    ]"
  >
    <!-- Logo / Brand -->
    <a href="/" class="font-bold text-lg flex items-center">
      <Code
        class="bg-gradient-to-tr from-blue-600 via-blue-500 to-teal-400 p-2 rounded-lg w-9 h-9 mr-2 text-white"
      />
      <span>{{ brand }}</span>
    </a>

    <!-- Mobile Menu -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu class="w-6 h-6 cursor-pointer text-foreground" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card p-4"
        >
          <div>
            <SheetHeader class="mb-4">
              <SheetTitle class="flex items-center">
                <Code
                  class="bg-gradient-to-tr from-blue-600 via-blue-500 to-teal-400 p-2 rounded-lg w-9 h-9 mr-2 text-white"
                />
                <span>{{ brand }}</span>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="({ href, label }) in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
                @click="isOpen = false"
              >
                <a :href="href">{{ label }}</a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex flex-col items-start gap-4">
            <div class="flex items-center space-x-2">
              <ToggleTheme />
            </div>
            <div class="flex items-center space-x-2">
              <ToggleLanguage />
            </div>

            <Button as-child size="sm" variant="ghost" class="">
              <a href="#contact" class="flex items-center space-x-2 text-white">
                <Mail class="w-5 h-5 mr-0.5" />
                <span>{{ contactLabel }}</span>
              </a>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop Menu -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem
          v-for="({ href, label }) in routeList"
          :key="label"
        >
          <NavigationMenuLink asChild>
            <Button as-child variant="ghost" class="justify-start text-base">
              <a :href="href">{{ label }}</a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Actions -->
    <div class="hidden lg:flex items-center space-x-4">
      <ToggleTheme />
      <ToggleLanguage />
    
      <Button
        as-child
        size="sm"
        variant="default"
        class="font-bold px-6 py-3 bg-blue-600 hover:bg-blue-400"
      >
        <a href="#contact" class="text-white">{{ getInTouch }}</a>
      </Button>      
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}
.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
