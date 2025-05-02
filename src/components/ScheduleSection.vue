<template>
  <section id="schedule" class="schedule-section py-12">
    <v-container>
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-h3 font-weight-bold text-primary mb-2">
          Upcoming Events
        </h2>
        <p class="text-subtitle-1 text-grey-darken-1 mx-auto" style="max-width: 700px">
          Join us every Wednesday at 12:00 PM for unique Hospital Hangout experiences
        </p>
      </div>
      
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-timeline align="start" line-color="secondary">
            <v-timeline-item
              v-for="(event, index) in programStore.events"
              :key="event.id"
              dot-color="primary"
              fill-dot
              size="small"
              :elevation="3"
            >
              <template v-slot:opposite>
                <div class="d-none d-md-block" data-aos="fade-right" :data-aos-delay="index * 100">
                  <div class="text-h6 font-weight-bold mb-1">{{ event.date }}</div>
                  <div class="text-subtitle-2">{{ event.time }}</div>
                </div>
              </template>
              
              <v-card class="event-card" data-aos="fade-left" :data-aos-delay="index * 100">
                <v-card-title class="d-flex flex-wrap align-center pa-4">
                  <div class="text-primary">{{ event.title }}</div>
                  <div class="d-md-none text-subtitle-2 text-grey-darken-1 mt-1 w-100">
                    {{ event.date }} | {{ event.time }}
                  </div>
                </v-card-title>
                
                <v-card-text class="pt-0 pb-4 px-4">
                  <p class="mb-3">{{ event.description }}</p>
                  <div class="d-flex align-center">
                    <v-icon color="secondary" size="small" class="mr-2">mdi-map-marker</v-icon>
                    <span class="text-grey-darken-2">{{ event.location }}</span>
                  </div>
                </v-card-text>
                
                <v-card-actions class="pa-4 pt-0">
                  <v-btn color="primary" variant="tonal">
                    Add to Calendar
                    <v-icon end>mdi-calendar-plus</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      
      <div class="text-center mt-8" data-aos="fade-up">
        <v-alert
          type="info"
          variant="tonal"
          icon="mdi-information"
          elevation="2"
          border
          class="d-inline-block mx-auto"
        >
          <div class="text-subtitle-1 font-weight-medium">
            Meeting location for each event will be announced the Monday before
          </div>
        </v-alert>
      </div>
    </v-container>
  </section>
</template>

<script>
import { useProgramStore } from '../stores/programStore'

export default {
  name: 'ScheduleSection',
  setup() {
    const programStore = useProgramStore()
    return { programStore }
  }
}
</script>

<style scoped>
.schedule-section {
  position: relative;
  background-color: #f9f9f9;
}

.event-card {
  border-left: 4px solid var(--primary);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

@media (max-width: 600px) {
  .v-timeline {
    padding-left: 0;
    padding-right: 0;
  }
  
  .event-card {
    margin-left: 12px;
  }
}
</style>