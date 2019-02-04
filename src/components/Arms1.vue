<template>
  <div id="page-parallax">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
            <div class="text-xs-center">
              <v-parallax src="/static/bg/24.jpg" height="700">
                  <v-layout  align-center justify-center >
                    
                    <v-fade-transition mode="out-in">
                  <v-layout v-if="show" key="0" wrap align-center justify-center>
                  <v-flex d-flex xs12 sm6 md4>
                    <v-card color="cyan darken-3" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Pendulares Circulares</div>
                          <span>De pie, nos apoyamos sobre una mesa con la mano sana, nos inclinamos y realizamos movimientos circulares en ambos sentidos.</span><br>
                          <span>10 repeticiones en el menor tiempo posible</span>
                        </div>
                      </v-card-title>
                      <v-card-media src="/static/videos/hombro1.gif" height="350">
                      </v-card-media>                      
                    </v-card>                    
                    </v-flex>
                        </v-layout>

                    <v-layout v-else key="1" justify-center align-center>
                      <v-card color="cyan darken-3" class="white--text">
                      <v-card-title primary-title>
                        <div>
                          <div class="headline">Pendulares Circulares</div>
                          <span>De pie, nos apoyamos sobre una mesa con la mano sana, nos inclinamos y realizamos movimientos circulares en ambos sentidos.</span><br>
                          <span>10 repeticiones en el menor tiempo posible</span>
                        </div>
                      </v-card-title>
                      <v-card-media src="/static/hombro1.png" height="350">
                      </v-card-media>
                      

                          <v-btn large @click="show = true">Empezar</v-btn>
                          <v-btn :to="'/exercises'" large>Volver</v-btn>
                    </v-card>
                        </v-layout>
                      </v-fade-transition>
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
      page: 1,
      show: false
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>