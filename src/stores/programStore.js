import { defineStore } from 'pinia'
import { db } from '../firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export const useProgramStore = defineStore('program', {
    state: () => ({
        activities: [],
        faqs: [],
        testimonials: [],
        pageData: {},
        loading: {
            pageData: false,
            activities: false,
            faqs: false,
            testimonials: false
        },
        error: null
    }),

    actions: {
        async fetchPageData() {
            this.loading.pageData = true
            try {
                const querySnapshot = await getDocs(collection(db, "page-data"))
                this.pageData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            } catch (error) {
                console.error("Error fetching pageData:", error)
                this.error = error.message
            } finally {
                this.loading.pageData = false
            }
        },

        async fetchActivities() {
            this.loading.activities = true
            try {
                // Simulated data until Firebase is connected
                // this.activities = [
                //   {
                //     id: '1',
                //     title: 'Hospital Tours',
                //     icon: 'mdi-hospital-building',
                //     description: 'Exclusive access to specialized departments and cutting-edge facilities.'
                //   },
                //   {
                //     id: '2',
                //     title: 'Hands-on Activities',
                //     icon: 'mdi-hand',
                //     description: 'Try medical simulation equipment and get practical experience in a controlled environment.'
                //   },
                //   {
                //     id: '3',
                //     title: 'Q&A Sessions',
                //     icon: 'mdi-comment-question',
                //     description: 'Engage with healthcare professionals and get answers to all your medical career questions.'
                //   },
                //   {
                //     id: '4',
                //     title: 'Medical Demonstrations',
                //     icon: 'mdi-doctor',
                //     description: 'Watch live demonstrations of medical procedures and techniques.'
                //   }
                // ]

                // When Firebase is connected, we would use this code:
                const querySnapshot = await getDocs(collection(db, "activities"))
                this.activities = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            } catch (error) {
                console.error("Error fetching activities:", error)
                this.error = error.message
            } finally {
                this.loading.activities = false
            }
        },

        async fetchFAQs() {
            this.loading.faqs = true
            try {
                // Simulated data until Firebase is connected
                // this.faqs = [
                //   {
                //     id: '1',
                //     question: 'Who can participate in Hospital Hangout?',
                //     answer: 'Hospital Hangout is open to all summer volunteers at Lakeland Regional Health.'
                //   },
                //   {
                //     id: '2',
                //     question: 'Do I need to register in advance?',
                //     answer: 'Yes, registration is required for each session. You can register through our website or by contacting the volunteer coordinator.'
                //   },
                //   {
                //     id: '3',
                //     question: 'What should I wear?',
                //     answer: 'Please wear your volunteer uniform or business casual attire. Comfortable shoes are recommended as there will be walking involved.'
                //   },
                //   {
                //     id: '4',
                //     question: 'How long are the sessions?',
                //     answer: 'Each Hospital Hangout session lasts approximately 1-2 hours, depending on the activities planned.'
                //   },
                //   {
                //     id: '5',
                //     question: 'Will I receive volunteer hours for attending?',
                //     answer: 'Yes, all time spent at Hospital Hangout counts toward your volunteer hours.'
                //   }
                // ]

                // When Firebase is connected, we would use this code:
                const querySnapshot = await getDocs(collection(db, "faqs"))
                this.faqs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            } catch (error) {
                console.error("Error fetching FAQs:", error)
                this.error = error.message
            } finally {
                this.loading.faqs = false
            }
        },

        async fetchTestimonials() {
            this.loading.testimonials = true
            try {
                // Simulated data until Firebase is connected
                this.testimonials = [
                    {
                        id: '1',
                        name: 'Alex Johnson',
                        role: 'Summer Volunteer 2024',
                        content: 'Hospital Hangout gave me incredible insight into medical careers. The simulation lab was my favorite part!',
                        avatar: 'https://i.pravatar.cc/150?img=8'
                    },
                    {
                        id: '2',
                        name: 'Sarah Williams',
                        role: 'Pre-Med Student',
                        content: 'The behind-the-scenes tours were amazing. I learned so much about hospital operations and medical technology.',
                        avatar: 'https://i.pravatar.cc/150?img=5'
                    },
                    {
                        id: '3',
                        name: 'Michael Rodriguez',
                        role: 'High School Volunteer',
                        content: 'I never knew how much goes into running a hospital. This program has inspired me to pursue nursing.',
                        avatar: 'https://i.pravatar.cc/150?img=7'
                    }
                ]

                // When Firebase is connected, we would use this code:
                // const querySnapshot = await getDocs(collection(db, "testimonials"))
                // this.testimonials = querySnapshot.docs.map(doc => ({
                //   id: doc.id,
                //   ...doc.data()
                // }))
            } catch (error) {
                console.error("Error fetching testimonials:", error)
                this.error = error.message
            } finally {
                this.loading.testimonials = false
            }
        },

        async submitRegistration(formData) {
            try {
                // When Firebase is connected, we would use this code:
                // const docRef = await addDoc(collection(db, "registrations"), formData)
                // return docRef.id

                // For now, just return a success message
                console.log("Registration submitted:", formData)
                return "registration-123"
            } catch (error) {
                console.error("Error submitting registration:", error)
                throw error
            }
        }
    }
})