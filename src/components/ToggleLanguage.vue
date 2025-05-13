<script setup lang="ts">
import { locale } from '@/composables/useLocale';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
</script>

<template>
  <Select v-model="locale">
    <!-- trigger now just shows the current locale code -->
    <SelectTrigger size="sm" variant="ghost">
      <SelectValue placeholder="EN" />
    </SelectTrigger>

    <SelectContent>
      <!-- full language names if you prefer -->
      <SelectItem value="en">English</SelectItem>
      <SelectItem value="ru">Русский</SelectItem>
      <SelectItem value="kk">Қазақша</SelectItem>
    </SelectContent>
  </Select>
</template>
