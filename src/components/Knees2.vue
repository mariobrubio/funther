<template>
  <div id="page-parallax">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
            <div class="text-xs-center">
              <v-parallax src="/static/bg/33.jpg" height="700">
                  <v-layout  align-center justify-center >
                    
                    <v-flex d-flex xs12 sm6 md4>
                    <v-card color="blue-grey darken-4" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Funther</div>
                          <span>In this application, you can perform your therapies without being bored. There are plenty of exercises to do. For each repetition you make, a sound of an specific sound is generated, at the end of the routine, the final song is completed and ready for you to listen it!</span>
                          <span>To start, put the Funther Device on, once you start doing the exercise, the built in sensors on it would recognize the activity and by the end of the therapy it would generate the song!</span>
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