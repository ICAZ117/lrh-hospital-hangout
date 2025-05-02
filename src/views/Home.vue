<template>
  <div>
    <HeroSection />
    <DiscordSection />
    <AboutSection />
    <ActivitiesSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import DiscordSection from '../components/DiscordSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ActivitiesSection from '../components/ActivitiesSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import FAQSection from '../components/FAQSection.vue'
import ContactSection from '../components/ContactSection.vue'
import { useProgramStore } from '../stores/programStore'

export default {
  name: 'Home',
  components: {
    HeroSection,
    DiscordSection,
    AboutSection,
    ActivitiesSection,
    TestimonialsSection,
    FAQSection,
    ContactSection
  },
  setup() {
    const programStore = useProgramStore()
    
    // Fetch data on component creation
    // programStore.fetchPageData()
    programStore.fetchActivities()
    programStore.fetchFAQs()
    programStore.fetchTestimonials()
  }
}
</script>