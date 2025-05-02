<template>
  <v-app-bar app color="white" elevation="1" :height="80">
    <div class="d-flex align-center justify-space-between w-100 px-4">
      <router-link to="/" class="d-flex align-center text-decoration-none">
        <div class="d-flex align-center">
          <img 
            src="https://www.myLRH.org/-/media/project/logoarchive/featured-logos/lakelandregionalhealth.png" 
            alt="Lakeland Regional Health"
            height="50"
          />
          <div class="ml-3 d-none d-sm-flex flex-column">
            <span class="text-h6 font-weight-bold text-primary">Hospital Hangout</span>
            <span class="text-caption text-secondary">Summer Volunteer Program</span>
          </div>
        </div>
      </router-link>
      
      <!-- Desktop navigation -->
      <div class="d-none d-md-flex">
        <v-btn
          v-for="item in navItems"
          :key="item.title"
          :href="item.link"
          variant="text"
          class="font-weight-medium mx-1"
          color="primary"
        >
          {{ item.title }}
        </v-btn>
        <v-btn color="secondary" variant="flat" class="font-weight-medium ml-4" href="#register">
          Register Now
        </v-btn>
      </div>
      
      <!-- Mobile menu button -->
      <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
  
  <!-- Mobile navigation drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item class="text-center pa-4">
        <span class="text-h6 font-weight-bold text-primary">Hospital Hangout</span>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :href="item.link"
        link
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-list-item href="#register" @click="drawer = false">
        <v-btn color="secondary" variant="flat" block>
          Register Now
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      drawer: false,
      navItems: [
        { title: 'About', link: '#about' },
        { title: 'Activities', link: '#activities' },
        { title: 'Schedule', link: '#schedule' },
        { title: 'FAQ', link: '#faq' },
        { title: 'Contact', link: '#contact' }
      ]
    }
  }
}
</script>