<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>

          <v-flex sm12>
            <h4 class="font-weight-thin display-2">Achievements</h4>
          </v-flex>       
          <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/ach1.jpg" height="250">
              
            </v-card-media>
            <v-card-text>
              <span class="headline">Beginner</span>
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
              <span class="headline">Intermediate</span>
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
              <span class="headline">Expert</span>
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
            <h4 class="font-weight-thin display-2">Therapy Progress</h4>
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
                <div class="title font-weight-light mb-2">Total Progress</div>
                <v-divider class="my-2"></v-divider>
                <v-icon
                  class="mr-2"
                  small
                >
                  timeline
                </v-icon>
                <span class="caption grey--text font-weight-light">Progress vs Time Graph</span>
              </v-card-text>
            </v-card>
  
          </v-flex>
          <v-flex lg4 sm12>
            
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">24 Sessions Remaining</div>
                  <span>To complete your recover process after post-operatory you must complete 60 full sessions of intense therapy.</span>
                </div>
              </v-card-title>
            </v-card>
  
          </v-flex>
          <v-flex lg4 sm12>
            
            <v-card color="blue darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">36 Songs Generated</div>
                  <span>You have successfuly finished 36 therapy sessions, that means that you have generated 36 songs with your exercises!</span>
                </div>
              </v-card-title>
            </v-card>
  
          </v-flex>

          <!-- linear statistic  end -->  
          
          <!-- circle statistic  end -->  
          <v-flex sm12>
            <h4 class="font-weight-thin display-2">Progress by Quarter</h4>
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
          subheading: 'First Quarter',
          headline: '100%',
          caption: 'of Sessions.',
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
          subheading: 'Second Quarter',
          headline: '90%',
          caption: 'of Sessions.',
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
          subheading: 'Third Quarter',
          headline: '0%',
          caption: 'of Sessions.',
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
