<template>
  <q-drawer 
  :mini="!item"
  show-if-above bordered
  :width="300"
  :breakpoint="500">
  <q-item class="avatar-section">
    <q-avatar round size="60px">
      <img style="object-fit: cover" src="https://cdn.zenquiz.net/external/2016/05/22/12/10f287e0-2019-11e6-9fed-050901070303-compressed.jpg" />
    </q-avatar>
    <div v-if="item">
      <div>
      {{name ?? 'Trần Thị Cẩm Lan'}}
    </div>
    <div>
      {{name ?? 'camlansucsuc@gmail.com'}}
    </div>
    </div>
  </q-item>
    <q-list>
      <q-item v-for="link in linksList"
        :key="link.title" clickable tag="a" target="_blank" :href="link.link">
        <q-item-section v-if="link.icon" avatar>
          <q-icon :name="link.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ link.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";
import {linksList} from './index.js';
import './style.scss';

export default defineComponent({
  name: "SideBarComponent",
  props: ['leftDrawerOpen'],
  data() {
    const miniState = ref(true)
      return {
          linksList,
          item: false,
          miniState,
          drawerClick (e) {
            if (miniState.value) {
              miniState.value = false;
              e.stopPropagation();
            }
          }
      }
  },
  watch: {
      leftDrawerOpen (newvalue) {
          this.item = newvalue;
      },
      item (newValue) {
          this.$emit('isOpen', newValue);
      }
  },
  created () {
    this.item = this.leftDrawerOpen 
  },
});
</script>
