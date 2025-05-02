<template>
  <section id="activities" class="activities-section py-12 bg-grey-lighten-4">
    <v-container>
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-h3 font-weight-bold text-primary mb-2">
          Program Activities
        </h2>
        <p class="text-subtitle-1 text-grey-darken-1 mx-auto" style="max-width: 700px">
          Discover the exciting activities waiting for you at Hospital Hangout
        </p>
      </div>
      
      <v-row>
        <v-col 
          v-for="(activity, index) in programStore.activities" 
          :key="activity.id"
          cols="12"
          sm="6"
          md="3"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <v-card height="100%" class="activity-card">
            <div class="activity-icon-container d-flex justify-center">
              <v-icon :icon="activity.icon" size="x-large" color="white"></v-icon>
            </div>
            <v-card-title class="text-center font-weight-bold pt-6">
              {{ activity.title }}
            </v-card-title>
            <v-card-text class="text-center pb-6">
              {{ activity.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="d-flex justify-center mt-8" data-aos="fade-up" data-aos-delay="400">
        <v-btn
          color="secondary"
          variant="flat"
          size="large"
          href="#schedule"
          class="px-6"
        >
          View Schedule
          <v-icon end>mdi-calendar</v-icon>
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
import { useProgramStore } from '../stores/programStore'

export default {
  name: 'ActivitiesSection',
  setup() {
    const programStore = useProgramStore()
    return { programStore }
  }
}
</script>

<style scoped>
.activities-section {
  position: relative;
}

.activity-card {
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  height: 100%;
}

.activity-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.activity-icon-container {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  padding: 20px;
  border-radius: 0 0 50% 50% / 20%;
  margin-top: -10px;
}
</style>