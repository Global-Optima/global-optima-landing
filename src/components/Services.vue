<script setup lang="ts">
import { computed } from 'vue';
import { locale, translations } from '@/composables/useLocale';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceProps {
  title: string;
  description: string;
  pro: number;
}

const smallHeading = computed(() => translations[locale.value].services.smallHeading);
const largeHeading = computed(() => translations[locale.value].services.largeHeading);
const subheading = computed(() => translations[locale.value].services.subheading);
const serviceList = computed<ServiceProps[]>(
  () => [...translations[locale.value].services.list]
);
</script>

<template>
  <section id="services" class="container py-24 sm:py-32">
    <h2 class="text-lg text-blue-600 text-center mb-2 tracking-wider">
      {{ smallHeading }}
    </h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      {{ largeHeading }}
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      {{ subheading }}
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[60%] mx-auto">
      <Card
        v-for="({ title, description, pro }) in serviceList"
        :key="title"
        class="bg-muted/50 dark:bg-card h-full relative hover:bg-background transition-all"
      >
        <CardHeader>
          <CardTitle>{{ title }}</CardTitle>
          <CardDescription>{{ description }}</CardDescription>
        </CardHeader>
        <Badge
          v-if="pro === 1"
          variant="secondary"
          class="absolute -top-2 -right-3 bg-blue-600 text-white"
        >
          PRO
        </Badge>
      </Card>
    </div>
  </section>
</template>
