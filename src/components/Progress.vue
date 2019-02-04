<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>

          <v-flex sm12>
            <h4 class="font-weight-thin display-2">Logros</h4>
          </v-flex>       
          <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/ach1.jpg" height="250">
              
            </v-card-media>
            <v-card-text>
              <span class="headline">Principiante</span>
              <div class="text-xs-center">
                <v-rating
                  :value="value1"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="20"
                ></v-rating>
                
              </div>
            </v-card-text>
            <v-divider></v-divider>
               
          </v-card>
        </v-flex>

           <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/arch2.jpeg" height="250">
              
            </v-card-media>
            <v-card-text>
              <span class="headline">Intermedio</span>
              <div class="text-xs-center">
                <v-rating
                  :value="value2"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="20"
                ></v-rating>
              </div>
            </v-card-text>
            <v-divider></v-divider>
               
          </v-card>
        </v-flex>

            <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/ach3.jpg" height="250">
              
            </v-card-media>
            <v-card-text>
              <span class="headline">Experto</span>
              <div class="text-xs-center">
                <v-rating
                  :value="value3"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="20"
                ></v-rating>
                
              </div>
            </v-card-text>
            <v-divider></v-divider>
               
          </v-card>
        </v-flex> 


          <v-flex sm12>
            <h4 class="font-weight-thin display-2">Progreso de la Terapia</h4>
          </v-flex>          
          <v-flex lg4 sm12>
            
            <v-card
              class="mt-3 mx-auto"
              max-width="400"
            >
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
              >
                <v-sparkline
                  :labels="labels"
                  :value="value"
                  color="white"
                  line-width="2"
                  padding="16"
                ></v-sparkline>
              </v-sheet>

              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">Progreso Total</div>
                <v-divider class="my-2"></v-divider>
                <v-icon
                  class="mr-2"
                  small
                >
                  timeline
                </v-icon>
                <span class="caption grey--text font-weight-light">Gráfica de Progreso vs Tiempo</span>
              </v-card-text>
            </v-card>
  
          </v-flex>
          <v-flex lg4 sm12>
            
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">24 Sesiones Faltantes</div>
                  <span>Para completar tu proceso recuperatorio luego del post-operatorio, debes completar al menos 60 sesiones completas de terapia intensiva.</span>
                </div>
              </v-card-title>
            </v-card>
  
          </v-flex>
          <v-flex lg4 sm12>
            
            <v-card color="blue darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">36 Canciones Generadas</div>
                  <span>¡Haz terminado correctamente 36 sesiones de terapia, lo que significa que has generado 36 canciones con tus ejercicios!</span>
                </div>
              </v-card-title>
            </v-card>
  
          </v-flex>

          <!-- linear statistic  end -->  
          
          <!-- circle statistic  end -->  
          <v-flex sm12>
            <h4 class="font-weight-thin display-2">Progreso por temporada</h4>
          </v-flex>       
          <v-flex lg4 sm12 v-for="(item,index) in trending2" :key="'c-trending'+index">
            <circle-statistic
              :title="item.subheading"
              :sub-title="item.headline"
              :caption="item.caption"
              :icon="item.icon.label"
              :color="item.linear.color"
              :value="item.linear.value"
            >
            </circle-statistic>            
          </v-flex>                      
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from '@/components/statistic/MiniStatistic'
import LinearStatistic from '@/components/statistic/LinearStatistic'
import CircleStatistic from '@/components/statistic/CircleStatistic'
export default {
  components: {
    CircleStatistic,
    MiniStatistic,
    LinearStatistic
  },
  data () {
    return {
      value1: 5,
      value2: 4.5,
      value3: 2.5,
      labels: [
        '12/18',
        '01/19',
        '02/19',
        '03/19',
        '04/19',
        '05/19'
      ],
      value: [
        200,
        380,
        320,
        420,
        490,
        600
      ],
      trending2: [
        {
          subheading: 'Primer Trimestre',
          headline: '100%',
          caption: 'de Sesiones.',
          percent: 100,
          icon: {
            label: 'check_circle',
            color: 'info'
          },
          linear: {
            value: 100,
            color: 'info'
          }
        },
        {
          subheading: 'Segundo Trimestre',
          headline: '90%',
          caption: 'de Sesiones.',
          percent: 90,
          icon: {
            label: 'check_circle_outline',
            color: 'primary'
          },
          linear: {
            value: 90,
            color: 'success'
          }
        },
        {
          subheading: 'Tercer Trimestre',
          headline: '0%',
          caption: 'de Sesiones.',
          percent: 0,
          icon: {
            label: 'check_circle_outline',
            color: 'primary'
          },
          linear: {
            value: 0,
            color: 'error'
          }
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
