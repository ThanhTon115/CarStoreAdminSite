<template>
  <q-page class="flex flex-center statistic-container">
    <div class="statistic-group">
      <div class="top-choice">
        <div class="statistic-title">Top Choice</div>
        <div class="top-choice-list">
          <q-card
            class="my-card"
            v-for="(item, index) in topChoiceList"
            :key="index"
          >
            <q-card-section>
              <div class="text-h6 q-mb-xs">{{ item.name }}</div>
              <div class="row no-wrap items-center">
                <q-rating
                  size="18px"
                  v-model="item.rating"
                  :max="5"
                  color="primary"
                ></q-rating>
                <span class="text-caption text-grey q-ml-sm">{{
                  `${item.rating} (${item.like})`
                }}</span>
              </div>
            </q-card-section>
            <img :src="item.img" />
          </q-card>
        </div>
      </div>
      <div class="statistic-title">Top Choice</div>
      <div class="chart-group">
          <div class="chart-group__item">
            <pie-chart
              :data="[
                ['Blueberry', 44],
                ['Strawberry', 23],
              ]"
            ></pie-chart>
          </div>
          <div class="chart-group__item">
            <column-chart
              :data="[
                ['Sun', 32],
                ['Mon', 46],
                ['Tue', 28],
              ]"
            ></column-chart>
          </div>
          <div class="summary-group">
        <div class="summary-card">
          <div>Tổng tiền</div>
        </div>
        <div class="summary-card">
          <div>Tổng xe bán được</div>
        </div>
      </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import "./style.scss";

export default defineComponent({
  name: "StatisticComponent",
  setup() {
    const topChoiceList = [
      {
        name: "yamaha olala",
        rating: 4.9,
        img: "https://firebasestorage.googleapis.com/v0/b/carsstoreproject-9c1c1.appspot.com/o/Car%2FToyota%2Favalon-red.png?alt=media&token=c2a38162-5105-46ec-b758-763dbec562fe",
        like: 11250,
      },
      {
        name: "vinfast olala",
        rating: 4.7,
        img: "https://firebasestorage.googleapis.com/v0/b/carsstoreproject-9c1c1.appspot.com/o/Car%2FToyota%2Fgr-supra-white.png?alt=media&token=2c0cd35c-e7e9-40e1-a423-a40489120d72",
        like: 10302,
      },
      {
        name: "toyota olala",
        rating: 4.5,
        img: "https://firebasestorage.googleapis.com/v0/b/carsstoreproject-9c1c1.appspot.com/o/Car%2FToyota%2Fcamry-white.png?alt=media&token=7e1c605d-56ff-4013-96d9-18572e85b4e3",
        like: 10301,
      },
    ];
    return {
      stars: 4,
      topChoiceList,
    };
  },
});
</script>
