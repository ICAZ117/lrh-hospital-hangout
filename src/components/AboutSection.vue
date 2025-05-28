<template>
  <section id="about" class="about-section py-12">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6" data-aos="fade-right">
          <div class="about-image-container mb-8 mb-md-0">
            <img
              src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Hospital Simulation Lab"
              class="about-image rounded-xl"
            />
            <div class="about-image-accent"></div>
          </div>
        </v-col>
        
        <v-col cols="12" md="6" data-aos="fade-left">
          <h2 class="text-h3 font-weight-bold text-primary mb-6">
            What is Healthcare Hangout?
          </h2>
          
          <p class="text-body-1 mb-4">
            Healthcare Hangout is a free program for summer volunteers at our local hospital, offering exclusive tours of some of the hospital's most advanced facilities, hands-on experiences in the simulation lab, and insights into medical marvels.
          </p>
          
          <p class="text-body-1 mb-6">
            From state-of-the-art equipment to innovative procedures, our program opens your mind to new possibilities in healthcare. Each session is designed to be both educational and engaging, providing a unique experience that can't be found elsewhere.
          </p>
          
          <div class="d-flex flex-wrap">
            <v-chip
              v-for="(feature, index) in features"
              :key="index"
              color="secondary"
              text-color="white"
              class="mr-2 mb-2 py-3 px-4"
            >
              <v-icon start>{{ feature.icon }}</v-icon>
              {{ feature.text }}
            </v-chip>
          </div>
          
          <v-btn
            color="primary"
            variant="tonal"
            size="large"
            class="mt-6"
            href="#activities"
          >
            Explore Activities
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      features: [
        { icon: 'mdi-hospital-building', text: 'Exclusive Tours' },
        { icon: 'mdi-hand-back-right', text: 'Hands-on Experience' },
        { icon: 'mdi-account-group', text: 'Networking' },
        { icon: 'mdi-school', text: 'Educational' },
        { icon: 'mdi-certificate', text: 'Volunteer Hours' }
      ]
    }
  }
}
</script>

<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
}

.about-image-container {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.about-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: relative;
}

.about-image-accent {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  top: 20px;
  left: 20px;
  z-index: 1;
  border-radius: 0.75rem;
}
</style>