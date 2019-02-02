<template>
  <div id="page-statistic">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>

          <v-flex sm12>
            <h4 class="font-weight-thin display-2">Generated Songs</h4>
          </v-flex>          
          <v-flex lg4 sm12>
          
          <v-flex sm12>  
            <v-list subheader>
            <v-subheader>Songs</v-subheader>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar

            >

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <div>
                  <v-btn v-if="item.isPlaying" flat icon color="blue darken-3" @click="item.isPlaying ? pause(item) : play(item)">
                      <v-icon>pause_circle_filled</v-icon>           
                  </v-btn>
                  <v-btn v-else flat icon color="blue darken-3" @click="item.isPlaying ? pause(item) : play(item)"> <v-icon>play_circle_filled</v-icon>  </v-btn>
                
                </div>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          </v-flex>
        </v-flex>
          <!-- linear statistic  end -->  
          
          <!-- circle statistic  end -->  
                              
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
      items: [
        { active: true, title: 'Back in Black', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', file: new Audio('https://online.freemusicdownloads.world/get-file?fn=AC_DC+-+Back+In+Black+%28Official+Music+Video%29&pl=False&dt=MP3&vid=pAgnJDJN4VA'),
          isPlaying: false },
        { active: true, title: 'Tremor', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', file: new Audio('https://online.freemusicdownloads.world/get-file?fn=Martin+garrix+tremor+%28original+mix%29&pl=False&dt=MP3&vid=jdPrs3iGj4c'), isPlaying: false },
        { active: true, title: 'Boquita de Caramelo', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', file: new Audio('https://online.freemusicdownloads.world/get-file?fn=Rodolfo+Aicardi+con+Los+Hispanos+-+Boquita+de+Caramelo&pl=False&dt=MP3&vid=DI5QBaIZj1o'), isPlaying: false }
      ]
    }
  },
  methods: {
    play (audio) {
      audio.isPlaying = true
      audio.file.play()
    },
    pause (audio) {
      audio.isPlaying = false
      audio.file.pause()
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
