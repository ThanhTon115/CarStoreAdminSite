<template>
  <q-layout view="lHh Lpr lFf">
    <SideBarComponent :leftDrawerOpen="leftDrawerOpen" @isOpen="(value) => leftDrawerOpen = value"/>
    <q-page-container :class="{'colapse-page' : !leftDrawerOpen}">
      <q-header elevated :class="{'colapse-header' : !leftDrawerOpen}">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'keyboard_double_arrow_left': 'keyboard_double_arrow_right'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          {{routeName ?? 'Admin site'}}
        </q-toolbar-title>
        <q-avatar round size="32px">
          <img style="object-fit: cover" src="https://cdn.zenquiz.net/external/2016/05/22/12/10f287e0-2019-11e6-9fed-050901070303-compressed.jpg" />
        </q-avatar>
      </q-toolbar>
    </q-header>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBarComponent from 'components/side-bar/SideBarComponent.vue'

import { defineComponent, ref } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SideBarComponent
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
