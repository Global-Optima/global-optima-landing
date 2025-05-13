<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { locale, translations } from '@/composables/useLocale';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Building2, Phone, Mail, Clock } from 'lucide-vue-next';

interface InfoItem {
  icon: string;
  label: string;
  value: string;
}

const infoList = computed<InfoItem[]>(
  () => [...translations[locale.value].contact.info]
);
const formTexts = computed(() => translations[locale.value].contact.form);

const contactForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: 'Software Development',
  message: '',
});
const invalidInputForm = ref(false);

function handleSubmit() {
  const { firstName, lastName, email, subject, message } = contactForm;
  if (!firstName || !lastName || !email || !message) {
    invalidInputForm.value = true;
    return;
  }
  invalidInputForm.value = false;

  const mailToLink = `mailto:contact@globaloptimatech.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Hello, I am ${firstName} ${lastName} (${email}).\n\n${message}`
  )}`;
  window.location.href = mailToLink;
}
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Info -->
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-blue-600 mb-2 tracking-wider">
            {{ translations[locale].contact.smallHeading }}
          </h2>
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ translations[locale].contact.largeHeading }}
          </h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          {{ translations[locale].contact.intro }}
        </p>

        <div class="flex flex-col gap-6 text-lg">
          <div v-for="({ icon, label, value }) in infoList" :key="label">
            <div class="flex gap-2 mb-1 items-center">
              <component :is="{ Building2, Phone, Mail, Clock }[icon]" class="w-5 h-5 text-blue-600" />
              <span class="font-bold">{{ label }}</span>
            </div>
            <p>{{ value }}</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <Card class="bg-muted/50 dark:bg-card">
        <CardHeader class="text-2xl text-blue-600">
          {{ formTexts.cardHeader }}
        </CardHeader>

        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1 flex flex-col gap-1.5">
                <Label for="first-name">{{ formTexts.labelFirstName }}</Label>
                <Input
                  id="first-name"
                  type="text"
                  :placeholder="formTexts.placeholderFirstName"
                  v-model="contactForm.firstName"
                />
              </div>
              
              <div class="flex-1 flex flex-col gap-1.5">
                <Label for="last-name">{{ formTexts.labelLastName }}</Label>
                <Input
                  id="last-name"
                  type="text"
                   :placeholder="formTexts.placeholderLastName"
                  v-model="contactForm.lastName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">{{ formTexts.labelEmail }}</Label>
              <Input
                id="email"
                type="email"
                :placeholder="formTexts.placeholderEmail"
                v-model="contactForm.email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">{{ formTexts.labelMessage }}</Label>
              <Textarea
                id="message"
                :placeholder="formTexts.placeholderMessage"
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ formTexts.alertTitle }}</AlertTitle>
              <AlertDescription>{{ formTexts.alertDescription }}</AlertDescription>
            </Alert>

            <Button type="submit" class="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-400">
              {{ formTexts.buttonText }}
            </Button>
          </form>
        </CardContent>

        <CardFooter />
      </Card>
    </div>
  </section>
</template>
