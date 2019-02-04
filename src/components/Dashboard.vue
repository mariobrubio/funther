<template>
  <div id="page-parallax">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
            <div class="text-xs-center">
              <v-parallax src="/static/bg/21.jpg" height="700">
                  <v-layout  align-center justify-center >
                    
                    <v-flex d-flex xs12 sm6 md4>
                    <v-card color="blue-grey darken-2" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div align-center justify-center class="headline">Funther</div>
                        </div>
                      </v-card-title>
                      <v-card-text><h4 class="font-weight-thin regular">En Funther, puedes realizar tus terapias sin aburrirte. Para comenzar ponte el dispositivo Funther, una vez que comiences a hacer el ejercicio, los sensores incorporados reconocerán la actividad y, al final de la terapia, ¡se generará la canción!<br>¿Qué esperas? Hay un montón de ejercicios para hacer</h4></v-card-text>
                      <v-card-media src="/static/johy.gif" height="350">
                      </v-card-media>
                      <v-btn :to="'/exercises'" large>Iniciar</v-btn>  
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