<template>
  <div id="pageCard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3 class="font-weight-thin display-2">Ejercicios personalizados</h3>
        </v-flex>        
        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/rodilla1.png" height="250">
              <h2 class="white--text pa-3">
                Flexión de Rodilla 1
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                Acostado sobre el vientre, flexionar la rodilla intentando llegar a tocar el glúteo con el talón del pie.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn :to="'/knees1'" flat small>¡Ir al Ejercicio!</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>


        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/rodilla2.png" height="250">
              <h2 class="white--text pa-3">
                Flexión de Rodilla 2
              </h2>
            </v-card-media>
            <v-card-text>
              <v-avatar size="64px" class="right mt-56">
                <img src="/static/avatar/man_2.jpg" alt="">
              </v-avatar>
              <div>
               Sentado y con un rodillo o toalla bajo la rodilla, se eleva la pierna lentamente todo lo que se pueda.
              </div>              
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn :to="'/knees2'" flat small>¡Ir al Ejercicio!</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>


        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/rodilla3.png" height="250">
              <h2 class="white--text pa-3">
                Flexión de Rodilla 3
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                Tumbado boca arriba, flexionar la rodilla hasta 90º (ángulo recto) y luego estirar la pierna de nuevo.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn :to="'/knees3'" flat small>¡Ir al Ejercicio!</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>

        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/hombro1.png" height="250">
              <h2 class="white--text pa-3">
                Pendulares Circulares
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                De pie, nos apoyamos con la mano sana, nos inclinamos y realizamos movimientos circulares en ambos sentidos.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn :to="'/arms1'" flat small>¡Ir al Ejercicio!</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>

        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/hombro2.png" height="250">
              <h2 class="white--text pa-3">
                Pendulares Delante-Atrás
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                De pie, nos apoyamos con la mano sana, nos inclinamos y realizamos movimientos hacia un lado y hacia el otro.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn :to="'/arms2'" flat small>¡Ir al Ejercicio!</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>

        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/hombro3.png" height="250">
              <h2 class="white--text pa-3">
                Estiramientos Posteriores
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                Pasamos la mano del brazo afectado por encima del hombro contrario, colocando la mano del brazo sano sobre el codo.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn :to="'/arms3'" flat small>¡Ir al Ejercicio!</v-btn>
            </v-card-actions>   
          </v-card>
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
      show: true,
      cardText: 'Hey there, I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.'
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
  .mt-45
    margin-top: -45px
  .mt-56
    margin-top: -56px  
</style>
