<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>

          <v-flex sm12>
            <h4 class="font-weight-thin display-2">Achievements</h4>
          </v-flex>       
          <v-flex lg4 sm12 >
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
                width="344"
              >
                <v-img
                  :aspect-ratio="16/9"
                  src="https://cdn.pixabay.com/photo/2016/03/01/10/08/life-fitness-house-1230004_960_720.jpg"
                ></v-img>
                <v-card-title>
                  <div>
                    <span class="headline">Beginner</span>
                    <div class="d-flex">
                      <v-rating
                        :value="value1"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <div class="ml-2 grey--text text--darken-2">
                        <span>{{ value1 }}</span>
                      </div>
                    </div>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn icon class="mr-0">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-title>
              </v-card>
            </v-hover>  
          </v-flex>

            <v-flex lg4 sm12>
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
                width="344"
              >
                <v-img
                  :aspect-ratio="16/9"
                  src="https://images.unsplash.com/photo-1533094722813-3b99daa73237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                ></v-img>
                <v-card-title>
                  <div>
                    <span class="headline">Intermediate</span>
                    <div class="d-flex">
                      <v-rating
                        :value="value2"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <div class="ml-2 grey--text text--darken-2">
                        <span>{{ value2 }}</span>
                      </div>
                    </div>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn icon class="mr-0">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-title>
              </v-card>
            </v-hover> 
          </v-flex>      

            <v-flex lg4 sm12>
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
                width="344"
              >
                <v-img
                  :aspect-ratio="16/9"
                  src="https://images.agoramedia.com/everydayhealth/gcms/Rehab-Options-for-Living-With-Multiple-Sclerosis-722x406.jpg"
                ></v-img>
                <v-card-title>
                  <div>
                    <span class="headline">Expert</span>
                    <div class="d-flex">
                      <v-rating
                        :value="value3"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>
                      <div class="ml-2 grey--text text--darken-2">
                        <span>{{ value3 }}</span>
                      </div>
                    </div>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn icon class="mr-0">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-title>
              </v-card>
            </v-hover> 
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
      trending: [
        {
          subheading: 'Sales',
          headline: '2,55',
          caption: 'increase',
          percent: 15,
          icon: {
            label: 'trending_up',
            color: 'success'
          },
          linear: {
            value: 15,
            color: 'success'
          }
        },
        {
          subheading: 'Revenue',
          headline: '6,553',
          caption: 'increase',
          percent: 10,
          icon: {
            label: 'trending_down',
            color: 'error'
          },
          linear: {
            value: 15,
            color: 'error'
          }
        },
        {
          subheading: 'Orders',
          headline: '5,00',
          caption: 'increase',
          percent: 50,
          icon: {
            label: 'arrow_upward',
            color: 'info'
          },
          linear: {
            value: 50,
            color: 'info'
          }
        }
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
