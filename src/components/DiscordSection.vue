<template>
  <section id="discord" class="discord-section py-12 bg-grey-lighten-4">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" lg="6" class="text-center">
          <h2 class="text-h3 font-weight-bold text-primary mb-6" data-aos="fade-up">
            Join Our Discord Community
          </h2>
          <p class="text-body-1 mb-6" data-aos="fade-up" data-aos-delay="100">
            <strong>Important:</strong> To participate in Hospital Hangout, you must join our Discord server. 
            This is where we share important updates, coordinate meetups, and build our community.
          </p>
          <v-btn
            color="primary"
            size="x-large"
            :href="discordLink"
            target="_blank"
            class="px-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <v-icon start>mdi-bullhorn-variant</v-icon>
            Join Discord Server
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { useProgramStore } from '../stores/programStore'

export default {
  name: 'DiscordSection',
//   setup() {
//     const programStore = useProgramStore()
//     return { programStore }
//   },
  data() {
    return {
      discordLink: '',
    }
  },
  async beforeMount() {
    const programStore = useProgramStore()
    await programStore.fetchPageData()

    const temp = programStore.pageData;
    console.table("data", temp[0].discordLink);
    this.discordLink = temp[0].discordLink;
  },
}
</script>

<style scoped>
.discord-section {
  position: relative;
}
</style>