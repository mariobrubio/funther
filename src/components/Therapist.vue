<template>
  <div id="page-parallax">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
            <div class="text-xs-center">
              <v-parallax src="/static/bg/25.jpg" height="700">
                  <v-layout  align-center justify-center >
                    
                    <v-flex d-flex xs12 sm6 md4>
                    <v-card color="blue-grey darken-2" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Funther Therapist</div>
                          <span>In this application you can assign therapy exercises for your patients, you can also track the progress of each patient and reward them. </span>
                        </div>
                      </v-card-title>
                      <v-card-media src="/static/johy.gif" height="350">
                      </v-card-media>
                      <v-btn :to="'/exercises'" large>Get Started</v-btn>    
                    </v-card>
                    </v-flex>
                    
                  </v-layout>
               
              </v-parallax>
            </div>          
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget'
export default {
  components: {
    VWidget
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>