<template>
  <q-page class="flex flex-center">
    <div class="statistic-group">
      <div class="summary-card">
        <h1> hello</h1>
      </div>
      <div class="best-seller">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary"></q-rating>
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-card>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary"></q-rating>
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-card>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary"></q-rating>
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
        </q-card>
      </div>
    </div>
    <div class="chart-group">
      <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23]]"></pie-chart>
      <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import './style.scss'

export default defineComponent({
  name: 'StatisticComponent',
  setup() {
    return {
      stars: 4,
    }
  }
})
</script>
