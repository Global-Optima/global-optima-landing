<script setup lang="ts">
import { computed } from 'vue';
import { locale, translations } from '@/composables/useLocale';
import { Code, Mail, Linkedin, Github } from 'lucide-vue-next';
import Separator from '@/components/ui/separator/Separator.vue';

interface LinkItem { href: string; label: string; }

const brand = computed(() => translations[locale.value].footer.brand);
const tagline = computed(() => translations[locale.value].footer.tagline);
const companyLinks = computed<LinkItem[]>(
  () => [
    { href: '#about-us', label: translations[locale.value].footer.aboutUs },
    { href: '#careers', label: translations[locale.value].footer.careers },
    { href: '#contact', label: translations[locale.value].footer.contact },
  ]
);
const servicesLinks = computed<LinkItem[]>(
  () => [
    { href: '#services', label: translations[locale.value].footer.softwareDev },
    { href: '#services', label: translations[locale.value].footer.cloudInfra },
    { href: '#services', label: translations[locale.value].footer.itConsulting },
    { href: '#services', label: translations[locale.value].footer.analyticsBI },
  ]
);
const resourcesLinks = computed<LinkItem[]>(
  () => [
    { href: '/faq', label: translations[locale.value].footer.faq },
    { href: '/blog', label: translations[locale.value].footer.blog },
    { href: '/support', label: translations[locale.value].footer.support },
  ]
);
const followUs = computed(() => translations[locale.value].footer.followUs);
const copyrightText = computed(() => translations[locale.value].footer.copyright);
</script>

<template>
  <footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <!-- Brand -->
        <div class="col-span-full xl:col-span-2">
          <a href="/" class="flex items-center font-bold">
            <Code
              class="bg-gradient-to-tr from-blue-600 via-blue-500 to-teal-400 p-2 rounded-lg w-9 h-9 mr-2 text-white"
            />
            <h3 class="text-2xl">{{ brand }}</h3>
          </a>
          <p class="mt-4 text-muted-foreground">
            {{ tagline }}
          </p>
        </div>

        <!-- Company -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ translations[locale].footer.company }}</h3>
          <a
            v-for="link in companyLinks"
            :key="link.label"
            :href="link.href"
            class="opacity-60 hover:opacity-100"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Services -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ translations[locale].footer.services }}</h3>
          <a
            v-for="link in servicesLinks"
            :key="link.label"
            :href="link.href"
            class="opacity-60 hover:opacity-100"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Resources -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ translations[locale].footer.resources }}</h3>
          <a
            v-for="link in resourcesLinks"
            :key="link.label"
            :href="link.href"
            class="opacity-60 hover:opacity-100"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Social -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">{{ followUs }}</h3>
          <div class="flex space-x-4 mt-2">
            <a href="https://github.com/globaloptimatech" target="_blank" class="opacity-60 hover:opacity-100">
              <Github class="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="https://linkedin.com/company/globaloptimatech" target="_blank" class="opacity-60 hover:opacity-100">
              <Linkedin class="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="https://twitter.com/globaloptech" target="_blank" class="opacity-60 hover:opacity-100">
              <Mail class="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />

      <div class="text-center text-muted-foreground">
        {{ copyrightText }}
      </div>
    </div>
  </footer>
</template>
