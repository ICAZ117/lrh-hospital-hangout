<template>
  <section id="testimonials" class="testimonials-section py-12 bg-primary">
    <v-container>
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-h3 font-weight-bold text-white mb-2">
          What Volunteers Say
        </h2>
        <p class="text-subtitle-1 text-white-darken-2 mx-auto" style="max-width: 700px; opacity: 0.8">
          Hear from previous participants about their Healthcare Hangout experiences
        </p>
      </div>
      
      <v-carousel
        show-arrows="hover"
        hide-delimiters
        height="auto"
        :interval="5000"
      >
        <v-carousel-item
          v-for="(testimonial, i) in programStore.testimonials"
          :key="i"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="8" lg="6">
              <v-card class="testimonial-card mx-auto" flat data-aos="zoom-in-up">
                <div class="text-center py-6">
                  <v-avatar class="mb-4" size="100">
                    <v-img :src="testimonial.avatar" :alt="testimonial.name"></v-img>
                  </v-avatar>
                  <div class="quote-icon mb-4">
                    <v-icon color="secondary" size="40">mdi-format-quote-open</v-icon>
                  </div>
                  <div class="text-body-1 font-italic px-6 mb-6">
                    {{ testimonial.content }}
                  </div>
                  <v-divider class="mb-4 mx-auto" width="50"></v-divider>
                  <div class="text-h6 font-weight-bold">{{ testimonial.name }}</div>
                  <div class="text-subtitle-2 text-grey">{{ testimonial.role }}</div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>

<script>
import { useProgramStore } from '../stores/programStore'

export default {
  name: 'TestimonialsSection',
  setup() {
    const programStore = useProgramStore()
    return { programStore }
  }
}
</script>

<style scoped>
.testimonials-section {
  position: relative;
}

.testimonial-card {
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
}

.quote-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>