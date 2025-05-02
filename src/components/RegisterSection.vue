<template>
  <section id="register" class="register-section py-12">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6" data-aos="fade-right">
          <h2 class="text-h3 font-weight-bold text-primary mb-6">
            Join Hospital Hangout
          </h2>
          
          <p class="text-body-1 mb-4">
            Ready to explore behind the scenes of Lakeland Regional Health? Register now for our exclusive Hospital Hangout program for summer volunteers.
          </p>
          
          <p class="text-body-1 mb-6">
            Complete the form to secure your spot. Space is limited for each session to ensure the best experience for all participants.
          </p>
          
          <v-list class="bg-transparent pa-0">
            <v-list-item
              v-for="(benefit, index) in benefits"
              :key="index"
              class="px-0 py-2"
            >
              <template v-slot:prepend>
                <v-icon color="secondary" class="mr-3">mdi-check-circle</v-icon>
              </template>
              <v-list-item-title class="text-body-1">{{ benefit }}</v-list-item-title>
            </v-list-item>
          </v-list>
          
          <v-alert
            class="mt-6"
            text="Note: You must be an active summer volunteer at Lakeland Regional Health to participate."
            type="info"
            variant="tonal"
            density="compact"
            border
          ></v-alert>
        </v-col>
        
        <v-col cols="12" md="6" data-aos="fade-left">
          <v-card class="register-card mx-auto" elevation="5">
            <v-card-title class="text-center text-white pa-6" style="background-color: var(--primary)">
              <h3 class="text-h4 font-weight-bold">Registration Form</h3>
            </v-card-title>
            
            <v-card-text class="pa-6">
              <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="formData.firstName"
                      label="First Name"
                      variant="outlined"
                      density="comfortable"
                      :rules="nameRules"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="formData.lastName"
                      label="Last Name"
                      variant="outlined"
                      density="comfortable"
                      :rules="nameRules"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12">
                    <v-text-field
                      v-model="formData.email"
                      label="Email"
                      variant="outlined"
                      density="comfortable"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12">
                    <v-text-field
                      v-model="formData.phone"
                      label="Phone Number"
                      variant="outlined"
                      density="comfortable"
                      :rules="phoneRules"
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12">
                    <v-select
                      v-model="formData.eventId"
                      label="Select Event"
                      :items="eventItems"
                      variant="outlined"
                      density="comfortable"
                      :rules="[(v) => !!v || 'Please select an event']"
                      required
                    ></v-select>
                  </v-col>
                  
                  <v-col cols="12">
                    <v-checkbox
                      v-model="formData.agreeTerms"
                      label="I agree to the terms and conditions"
                      :rules="[(v) => !!v || 'You must agree to continue']"
                      required
                    ></v-checkbox>
                  </v-col>
                </v-row>
                
                <v-btn
                  color="secondary"
                  variant="flat"
                  size="large"
                  block
                  type="submit"
                  :loading="loading"
                  :disabled="!valid || loading"
                >
                  Register Now
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Registration success dialog -->
    <v-dialog v-model="successDialog" max-width="500">
      <v-card>
        <v-card-title class="text-center text-white pa-4" style="background-color: var(--secondary)">
          Registration Successful!
        </v-card-title>
        <v-card-text class="pa-6 text-center">
          <v-icon size="64" color="secondary" class="mb-4">mdi-check-circle</v-icon>
          <h3 class="text-h5 font-weight-bold mb-3">Thank You for Registering!</h3>
          <p class="mb-4">
            Your registration for Hospital Hangout has been confirmed.
            We've sent a confirmation email with all the details to your registered email address.
          </p>
          <v-btn color="primary" variant="flat" block @click="successDialog = false">
            Close
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import { useProgramStore } from '../stores/programStore'

export default {
  name: 'RegisterSection',
  data() {
    return {
      valid: false,
      loading: false,
      successDialog: false,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventId: null,
        agreeTerms: false
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 50 || 'Name must be less than 50 characters'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      phoneRules: [
        v => !v || /^[0-9]{10}$/.test(v.replace(/\D/g, '')) || 'Phone number must be valid'
      ],
      benefits: [
        'Exclusive access to hospital areas not open to the public',
        'Hands-on experience with medical simulation equipment',
        'Networking opportunities with healthcare professionals',
        'Certificate of participation for your volunteer portfolio',
        'Priority registration for future hospital programs'
      ]
    }
  },
  computed: {
    eventItems() {
      return this.programStore.events.map(event => ({
        title: `${event.title} - ${event.date}`,
        value: event.id
      }))
    }
  },
  methods: {
    async submitForm() {
      if (!this.$refs.form.validate()) return
      
      this.loading = true
      
      try {
        await this.programStore.submitRegistration({
          ...this.formData,
          createdAt: new Date().toISOString()
        })
        
        // Reset form
        this.$refs.form.reset()
        this.successDialog = true
      } catch (error) {
        console.error('Registration error:', error)
        // Would handle error notification here
      } finally {
        this.loading = false
      }
    }
  },
  setup() {
    const programStore = useProgramStore()
    return { programStore }
  }
}
</script>

<style scoped>
.register-section {
  position: relative;
}

.register-card {
  border-radius: 16px;
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
}
</style>