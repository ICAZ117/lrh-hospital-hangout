<template>
  <section class="hero-section">
    <v-parallax
      src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      :height="600"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <v-container>
          <v-row justify="center" align="center">
            <v-col cols="12" md="10" lg="8" class="text-center">
              <h1 
                class="text-white text-h2 font-weight-bold mb-4"
                data-aos="fade-up"
              >
                Hospital Hangout
              </h1>
              <p 
                class="text-white text-h6 mb-8 hero-subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Take a sneak peek behind the scenes of Lakeland Regional Health this summer.
              </p>
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <v-btn
                  color="white"
                  size="large"
                  href="#about"
                  variant="outlined"
                  class="px-8"
                >
                  Learn More
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-parallax>
    
    <div class="wave-container">
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#f5f5f5"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 118, 168, 0.8), rgba(121, 178, 67, 0.6));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
}

.hero-subtitle {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 2;
  overflow: hidden;
}

@media (max-width: 768px) {
  .wave-container {
    height: 33px;
  }
}
</style>