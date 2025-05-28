<template>
  <section id="faq" class="faq-section py-12">
    <v-container>
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-h3 font-weight-bold text-primary mb-2">
          Frequently Asked Questions
        </h2>
        <p class="text-subtitle-1 text-grey-darken-1 mx-auto" style="max-width: 700px">
          Find answers to common questions about the Healthcare Hangout program
        </p>
      </div>
      
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-expansion-panels
            v-model="openPanel"
            variant="accordion"
            elevation="2"
            rounded="xl"
            data-aos="fade-up"
          >
            <v-expansion-panel
              v-for="(faq, index) in programStore.faqs"
              :key="faq.id"
              :value="index"
              class="mb-3"
              :data-aos-delay="index * 100"
            >
              <v-expansion-panel-title class="text-body-1 font-weight-medium">
                {{ faq.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                {{ faq.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      
      <div class="text-center mt-8" data-aos="fade-up" data-aos-delay="500">
        <v-btn color="secondary" variant="flat" size="large" href="#contact">
          Still have questions?
          <v-icon end>mdi-help-circle</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
import { useProgramStore } from '../stores/programStore'

export default {
  name: 'FAQSection',
  data() {
    return {
      openPanel: 0
    }
  },
  setup() {
    const programStore = useProgramStore()
    return { programStore }
  }
}
</script>

<style scoped>
.faq-section {
  position: relative;
  background-color: #f9f9f9;
}
</style>