<!-- src/components/Contact.vue -->
<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { locale, translations } from '@/composables/useLocale'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AlertCircle, Building2, Phone, Mail, Clock } from 'lucide-vue-next'

interface InfoItem { icon: string; label: string; value: string }

// Translations & static info
const infoList  = computed<InfoItem[]>(() => [...translations[locale.value].contact.info])
const formTexts = computed(() => translations[locale.value].contact.form)

// Form state
const contactForm = reactive({
  firstName: '',
  lastName:  '',
  email:     '',
  message:   '',
})
const invalid   = ref(false)
const success   = ref(false)
const errorMsg  = ref('')

// — Telegram Bot API credentials —
const TELEGRAM_BOT_TOKEN = '7737221891:AAGJlT0FYwNkKeH2Rm3df_ND6aDJ7S-TTw0'
const TELEGRAM_CHAT_ID   = '776450472'

// simple HTML escape
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// on submit: send to Telegram
async function handleSubmit() {
  const { firstName, lastName, email, message } = contactForm

  if (!firstName || !lastName || !email || !message) {
    invalid.value = true
    return
  }
  invalid.value = false
  success.value = false
  errorMsg.value = ''

  // timestamp
  const now  = new Date()
  const date = now.toLocaleDateString('ru-RU')
  const time = now.toLocaleTimeString('ru-RU')

  // build HTML message
  const html = `
<b>📩 Новый запрос с сайта</b>
<b>📅 Дата:</b> ${date}
<b>⏰ Время:</b> ${time}
<b>👤 Имя:</b> ${escapeHtml(firstName + ' ' + lastName)}
<b>✉️ Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
<b>💬 Сообщение:</b>
<pre>${escapeHtml(message)}</pre>
  `.trim()

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: html,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      }
    )
    const data = await res.json()
    if (!res.ok || !data.ok) {
      throw new Error(data.description || 'Ошибка отправки в Telegram')
    }

    success.value = true
    // reset form
    Object.assign(contactForm, {
      firstName: '',
      lastName:  '',
      email:     '',
      subject:   'Software Development',
      message:   '',
    })
  } catch (err: any) {
    errorMsg.value = err.message
  }
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
              <component
                :is="({ Building2, Phone, Mail, Clock } as Record<string, any>)[icon]"
                class="w-5 h-5 text-blue-600"
              />
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
                  v-model="contactForm.firstName"
                  :placeholder="formTexts.placeholderFirstName"
                />
              </div>
              <div class="flex-1 flex flex-col gap-1.5">
                <Label for="last-name">{{ formTexts.labelLastName }}</Label>
                <Input
                  id="last-name"
                  type="text"
                  v-model="contactForm.lastName"
                  :placeholder="formTexts.placeholderLastName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">{{ formTexts.labelEmail }}</Label>
              <Input
                id="email"
                type="email"
                v-model="contactForm.email"
                :placeholder="formTexts.placeholderEmail"
              />
            </div>


            <div class="flex flex-col gap-1.5">
              <Label for="message">{{ formTexts.labelMessage }}</Label>
              <Textarea
                id="message"
                v-model="contactForm.message"
                :placeholder="formTexts.placeholderMessage"
                rows="5"
              />
            </div>

            <!-- Alerts -->
            <Alert v-if="invalid" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>{{ formTexts.alertTitle }}</AlertTitle>
              <AlertDescription>{{ formTexts.alertDescription }}</AlertDescription>
            </Alert>
            <Alert v-if="errorMsg" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertDescription>{{ errorMsg }}</AlertDescription>
            </Alert>
            <Alert v-if="success" variant="default">
              <AlertDescription>Ваше сообщение успешно отправлено!</AlertDescription>
            </Alert>

            <!-- Submit -->
            <Button
              type="submit"
              class="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-400"
            >
              {{ formTexts.buttonText }}
            </Button>
          </form>
        </CardContent>

        <CardFooter />
      </Card>
    </div>
  </section>
</template>
