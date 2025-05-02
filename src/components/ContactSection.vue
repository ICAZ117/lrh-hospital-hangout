<template>
  <section id="contact" class="contact-section py-12 bg-grey-lighten-4">
    <v-container>
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-h3 font-weight-bold text-primary mb-2">
          Contact Us
        </h2>
        <p class="text-subtitle-1 text-grey-darken-1 mx-auto" style="max-width: 700px">
          Have questions about Hospital Hangout? Contact our event coordinator, Ibraheem Cazalas!
        </p>
      </div>
      
      <v-row>
        <v-col cols="12" md="6" lg="4" data-aos="fade-up" data-aos-delay="100">
          <v-card class="contact-card h-100" elevation="2">
            <v-card-text class="text-center pa-6">
              <v-avatar color="primary" size="64" class="mb-4">
                <v-icon size="32" color="white">mdi-web</v-icon>
              </v-avatar>
              <h3 class="text-h5 font-weight-bold mb-3">Website</h3>
              <a href="http://icaz117.web.app" target="_blank" rel="noopener noreferrer">http://icaz117.web.app</a>
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
              <a href="mailto:lrhhospitalhangout+ibraheemcazalas@gmail.com">ibraheemcazalas@gmail.com</a>
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
              <p>(863) 397-3832</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
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