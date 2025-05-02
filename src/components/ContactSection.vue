<template>
  <section id="contact" class="contact-section py-12 bg-grey-lighten-4">
    <v-container>
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-h3 font-weight-bold text-primary mb-2">
          Contact Us
        </h2>
        <p class="text-subtitle-1 text-grey-darken-1 mx-auto" style="max-width: 700px">
          Have questions about Hospital Hangout? We're here to help!
        </p>
      </div>
      
      <v-row>
        <v-col cols="12" md="6" lg="4" data-aos="fade-up" data-aos-delay="100">
          <v-card class="contact-card h-100" elevation="2">
            <v-card-text class="text-center pa-6">
              <v-avatar color="primary" size="64" class="mb-4">
                <v-icon size="32" color="white">mdi-map-marker</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-3">Location</h3>
              <p class="mb-1">Lakeland Regional Health</p>
              <p>1324 Lakeland Hills Blvd, Lakeland, FL 33805</p>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6" lg="4" data-aos="fade-up" data-aos-delay="200">
          <v-card class="contact-card h-100" elevation="2">
            <v-card-text class="text-center pa-6">
              <v-avatar color="primary" size="64" class="mb-4">
                <v-icon size="32" color="white">mdi-email</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-3">Email</h3>
              <p class="mb-1">General Inquiries:</p>
              <p>volunteers@myLRH.org</p>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" lg="4" data-aos="fade-up" data-aos-delay="300">
          <v-card class="contact-card h-100" elevation="2">
            <v-card-text class="text-center pa-6">
              <v-avatar color="primary" size="64" class="mb-4">
                <v-icon size="32" color="white">mdi-phone</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-3">Phone</h3>
              <p class="mb-1">Volunteer Services:</p>
              <p>(863) 687-1100</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row class="mt-8">
        <v-col cols="12" data-aos="fade-up" data-aos-delay="400">
          <div class="text-center">
            <h3 class="text-h5 font-weight-bold mb-4">Connect With Us</h3>
            <div>
              <v-btn
                v-for="(social, index) in socials"
                :key="index"
                icon
                color="primary"
                variant="tonal"
                class="mx-2"
                :aria-label="social.name"
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      socials: [
        { name: 'Facebook', icon: 'mdi-facebook' },
        { name: 'Twitter', icon: 'mdi-twitter' },
        { name: 'Instagram', icon: 'mdi-instagram' },
        { name: 'YouTube', icon: 'mdi-youtube' },
        { name: 'LinkedIn', icon: 'mdi-linkedin' }
      ]
    }
  }
}
</script>

<style scoped>
.contact-section {
  position: relative;
}

.contact-card {
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}
</style>