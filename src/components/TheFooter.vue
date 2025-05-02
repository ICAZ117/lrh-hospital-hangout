<template>
  <v-footer color="primary">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <h3 class="text-h6 text-white mb-4">Hospital Hangout</h3>
          <p class="text-white text-opacity-70">
            A summer volunteer program offering exclusive behind-the-scenes experiences
            at Lakeland Regional Health.
          </p>
          <div class="mt-4">
            <v-btn
              v-for="(icon, index) in socialIcons"
              :key="index"
              icon
              variant="text"
              color="white"
              :aria-label="icon.label"
              class="mr-2"
            >
              <v-icon>{{ icon.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
        
        <v-col cols="6" md="2" offset-md="1">
          <h3 class="text-h6 text-white mb-4">Quick Links</h3>
          <v-list bg-color="transparent" density="compact">
            <v-list-item
              v-for="(link, index) in quickLinks"
              :key="index"
              :href="link.url"
              class="px-0"
              link
            >
              <v-list-item-title class="text-white text-opacity-70 hover-opacity-100">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        
        <v-col cols="6" md="2">
          <h3 class="text-h6 text-white mb-4">Program</h3>
          <v-list bg-color="transparent" density="compact">
            <v-list-item
              v-for="(link, index) in programLinks"
              :key="index"
              :href="link.url"
              class="px-0"
              link
            >
              <v-list-item-title class="text-white text-opacity-70 hover-opacity-100">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        
        <v-col cols="12" md="3">
          <h3 class="text-h6 text-white mb-4">Contact</h3>
          <div class="d-flex align-center mb-3">
            <v-icon color="white" class="mr-2">mdi-map-marker</v-icon>
            <span class="text-white text-opacity-70">
              1324 Lakeland Hills Blvd, Lakeland, FL 33805
            </span>
          </div>
          <div class="d-flex align-center mb-3">
            <v-icon color="white" class="mr-2">mdi-phone</v-icon>
            <span class="text-white text-opacity-70">(863) 687-1100</span>
          </div>
          <div class="d-flex align-center">
            <v-icon color="white" class="mr-2">mdi-email</v-icon>
            <span class="text-white text-opacity-70">volunteers@myLRH.org</span>
          </div>
        </v-col>
      </v-row>
      
      <v-divider color="white" class="my-4 opacity-30"></v-divider>
      
      <div class="text-center">
        <span class="text-white text-opacity-70">
          &copy; {{ new Date().getFullYear() }} Lakeland Regional Health. All rights reserved.
        </span>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      socialIcons: [
        { icon: 'mdi-facebook', label: 'Facebook' },
        { icon: 'mdi-twitter', label: 'Twitter' },
        { icon: 'mdi-instagram', label: 'Instagram' },
        { icon: 'mdi-linkedin', label: 'LinkedIn' }
      ],
      quickLinks: [
        { title: 'Home', url: '#' },
        { title: 'About Us', url: '#about' },
        { title: 'Activities', url: '#activities' },
        { title: 'Discord', url: '#discord' }
      ],
      programLinks: [
        { title: 'Schedule', url: '#schedule' },
        { title: 'FAQ', url: '#faq' },
        { title: 'Testimonials', url: '#testimonials' },
        { title: 'Contact', url: '#contact' }
      ]
    }
  }
}
</script>

<style scoped>
.hover-opacity-100:hover {
  opacity: 1 !important;
}

.v-footer {
  position: relative !important;
}
</style>