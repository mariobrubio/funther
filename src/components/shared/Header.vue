<template>
<div>
  <v-navigation-drawer
    :mini-variant="miniVariant"
    clipped
    fixed
    v-model="sideNav"
    app
    width=250>
    <v-list
    dense
    v-for="item in menuItems"
    :key="item.title">
        <v-list-tile :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
      <v-list>
        <v-list-group
          prepend-icon="accessibility"
          no-action
        >
          <v-list-tile slot="activator" :to="'/exercises'">
            <v-list-tile-title>Exercises</v-list-tile-title>
          </v-list-tile>
          <v-list-group
          no-action
          sub-group
          value="true"
          >
          <v-list-tile slot="activator">
            <v-list-tile-title>Arms</v-list-tile-title>
          </v-list-tile>

            <v-list-tile
              v-for="(arm, i) in arms"
              :key="i"
              :to="arm[2]"
            >
              <v-list-tile-title v-text="arm[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="arm[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group
          no-action
          sub-group
          value="true"
          >
          <v-list-tile slot="activator">
            <v-list-tile-title>Knees</v-list-tile-title>
          </v-list-tile>

            <v-list-tile
              v-for="(knee, i) in knees"
              :key="i"
              :to="knee[2]"
            >
              <v-list-tile-title v-text="knee[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="knee[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>

      </v-list-group>
    </v-list>

    <v-list>
        <v-list-tile :to="'/songs'">
          <v-list-tile-action>
            <v-icon>audiotrack</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Songs</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>

    <v-divider></v-divider>
    
    <v-list>
        <v-list-tile @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>

    <v-list dense>
      <v-list-tile icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-list-tile>
    </v-list>



  </v-navigation-drawer>


  <v-toolbar
  dark
  clipped-left
  fixed
  app>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">
          <router-link
          to="/"
          tag="span"
          style="cursor: pointer">

          
          Funther Engaging Therapies

          </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

   </v-toolbar>
</div>


</template>

<script>

export default {
  data () {
    return {
      sideNav: null,
      miniVariant: false,
      notificationsMenu: [
        { title: 'notification 1' },
        { title: 'notification 2' }
      ],
      userMenu: [
        { title: 'Settings', link: '/settings' }
      ],
      menuItems: [
        { icon: 'home', title: 'Home', link: '/signup' },
        { icon: 'trending_up', title: 'Progress', link: '/progress' }
      ],
      knees: [
        ['Knees 1', 'launch', '/knees1'],
        ['Knees 2', 'launch', '/knees2'],
        ['Knees 3', 'launch', '/knees3']
      ],
      arms: [
        ['Arms 1', 'launch', '/arms1'],
        ['Arms 2', 'launch', '/arms2'],
        ['Arms 3', 'launch', '/arms3']
      ]
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      window.location.replace('./signin')
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
