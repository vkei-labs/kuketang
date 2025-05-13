<template>
  <div class="container-swiper shadow-lg border-t-slate-700 mx-7 px-xl-7 px-md-5 px-3" id="dynamicLoadBox">
    <div class="d-flex dn-pb-2 pt-3 justify-content-between align-items-center nav-tab-box">
      <div class="nav-tab gap-4 d-flex">
        <button class="fw-medium m-0 tab-btn h3" :class="{ 'active-tab': activeTab == 'all' }" data-tab="Tab1"
          @click="switchTab('all')">全部</button>
        <button class="fw-medium m-0 tab-btn h3" :class="{ 'active-tab': activeTab == 'rank' }"
          @click="switchTab('rank')">榜单</button>
      </div>
      <div class="icon-time d-flex">
        <template v-if="activeTab == 'all'">
          <div class="dn-box">
            <div class="dn-slt d-flex align-items-stretch m-auto position-relative flex-flow-row">
              <div class="dn-bjba"
                :style="{ 'transform': (viewMode == 'card' ? 'translateX(0px)' : 'translateX(48px)') }"></div>
              <button class="btn dn-btn border-0 d-flex align-items-center flex-flow-row position-relative"
                :class="{ 'dn-btCl': viewMode == 'card' }" @click="viewMode = 'card'">
                <IconSwitchCard />
              </button>
              <button class="btn dn-btn border-0 d-flex align-items-center flex-flow-row position-relative"
                :class="{ 'dn-btCl': viewMode == 'simple' }" @click="viewMode = 'simple'">
                <IconSwitchSimple />
              </button>
            </div>
          </div>
        </template>
        <template v-else-if="activeTab == 'rank'">
          <div class="icon-time-box"><i class="bi bi-clock"></i> 更新时间：{{ lastUpdateTime }}</div>
        </template>
      </div>
    </div>
    <template v-if="activeTab == 'all'">
      <swiper :modules="[Navigation]" class="mb-5" :CSSWidthAndHeight="true" slidesPerView="auto" :spaceBetween="10"
        direction="horizontal" :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
        :scrollbar="{ draggable: true }">
        <swiper-slide v-for="channel in channels" v-bind:key="channel.Id" @click="filterSites(channel.Id)">
          <a :class="{ navigation: channel.IsActive }" href="javascript:void(0);" v-bind:data-banner="channel.Id"
            @click="activeChannel(channel)">{{ channel.Name }}</a>
        </swiper-slide>
        <div class="swiper-navigation">
          <div class="swiper-button-next"><span><IconArrowNext /></span></div>
          <div class="swiper-button-prev"><span><IconArrowPrev /></span></div>
        </div>
      </swiper>

      <div class="pb-5 child-grid" id="container">
        <div class="child-item" v-for="site in filteredSites" v-bind:key="site.Id">
          <div class="card animate-target fade-in" :class="{ 'card-click': (viewMode == 'simple') }"
            :navigation="site.ChannelId">
            <template v-if="viewMode == 'card'">
              <div class="card-img overflow-hidden position-relative mb-2">
                <a :href="site.Url" target="_blank" rel="nofollow" class="card-img-over position-relative d-block">
                  <img class="w-100 card-img-core lazy lazy-loaded" :src="site.Cover || '/images/cover-null.png'" />
                </a>
                <div class="card-img-txt">
                  <div class="card-img-txt-over">
                    <div class="d-flex align-items-center key">
                      <span>{{ site.Name }}</span>
                    </div>
                    <ul class="card-img-list">
                      <li class="d-flex"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-title flex-nowrap border-0">
                <div class="d-flex align-items-center overflow-hidden w-100">
                  <a :href="site.Url" rel="nofollow" class="icon-img ">
                    <img class="mr-3 lazy lazy-loaded" :src="site.Logo || site.Url+'/favicon.ico'" onerror="this.src = '/images/favicon-null.png'"/>
                  </a>
                  <div class="card-title-content">
                    <div class="card-title-box">
                      <a :href="site.Url" rel="nofollow" class="title-h6 collection-title"
                        :alt="site.Desc">{{ site.Name }}</a>
                      <button class="card-title-icon" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <IconTitleMore />
                      </button>
                    </div>
                    <div class="d-flex align-items-center desc-small" :alt="site.Desc">{{ site.Desc }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-title flex-nowrap border-0">
                <div class="d-flex align-items-center overflow-hidden w-100">
                  <a :href="site.Url" target="_blank" rel="nofollow" class="icon-img dn-iciMg">
                    <img class="mr-3 lazy lazy-loaded" :src="site.Logo || site.Url+'/favicon.ico'" onerror="this.src = '/images/favicon-null.png'">
                  </a>
                  <div class="card-title-content">
                    <div class="card-title-box">
                      <a :href="site.Url" target="_blank" rel="nofollow" class="title-h6 collection-title"> {{ site.Name
                        }}</a>
                      <button class="card-title-icon" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="handleMoreClick(site)">
                        <IconTitleMore />
                      </button>
                    </div>
                    <div class="d-flex align-items-center desc-small" :alt="site.Name">{{ site.Desc }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="activeTab == 'rank'">
      <div class="pb-5 child-list-grid" id="container">
        <div class="card-list-group p-4" v-for="rank in ranks" v-bind:key="rank.Id">
          <h5 class="list-title">{{ rank.Title }}</h5>
          <div class="child-item" v-for="(site, index) in rank.Sites" v-bind:key="site.Id">
            <a :href="site.Url" target="_blank" class="px-0 fade-in card-list collection" rel="nofollow"
              :navigation="rank.Title">
              <div class="card-list-box">
                <div class="card-list-num"><i class="num">{{ index + 1 }}</i></div>
                <div class="icon-img w-img">
                  <img class="mr-3 lazy lazy-loaded" :src="site.Logo" :alt="site.Name">
                </div>
                <div class="card-list-box  card-list-title">
                  <div class="card-list-hidden">
                    <h6 class="mb-1 card-list-hidden card-list-h6 collection-title">{{ site.Name }}</h6>
                    <small class="desc-small card-list-small">{{ site.Desc }}</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>

  <!-- Offcanvas 右侧弹窗 -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">
     站点详情
    </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="关闭"></button>
  </div>
  <div class="offcanvas-body" v-if="selectedSite">
    <p><strong>名称：</strong>{{ selectedSite.Name }}</p>
    <p><strong>频道：</strong>{{ selectedSite.ChannelId }}</p>
    <p><strong>网址：</strong><a :href="selectedSite.Url" target="_blank">{{ selectedSite.Url }}</a></p>
    <p><strong>简介：</strong>{{ selectedSite.Desc }}</p>
    <!-- 你可以根据需要补充更多字段 -->
  </div>
  <div class="offcanvas-body" v-else>
    暂无数据
  </div>
</div>

</template>
<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { ref, type Ref, onMounted, computed } from 'vue';
import type { Channel } from '@/models/Channel';
import { Site } from '@/models/Site';
import { RankSubject } from '@/models/RankSubject';
import IconSwitchCard from '@/assets/icons/switch-card.svg';
import IconSwitchSimple from '@/assets/icons/switch-simple.svg';
import IconTitleMore from '@/assets/icons/title-more.svg';
import IconArrowPrev from '@/assets/icons/arrow-prev.svg';
import IconArrowNext from '@/assets/icons/arrow-next.svg';

const lastUpdateTime = ref('2025年04月19日');
const viewMode: Ref<string> = ref('simple');
const activeTab: Ref<string> = ref('all');


const channels: Ref<Channel[]> = ref([]);
const sites: Ref<Site[]> = ref([]);
const selectedSite = ref<Site | null>(null);

// 异步加载本地 JSON 文件
async function loadData() {
  // 加载频道
  const channelsRes = await fetch('/src/assets/json/channels.json');
  channels.value = await channelsRes.json();

  // 加载站点
  const sitesRes = await fetch('/src/assets/json/sites.json');
  const sitesData = await sitesRes.json();
  // 如果 Site 是类，需要转换
  sites.value = sitesData.map((item: Site) => new Site(
    item.Id, item.Name, item.Logo, item.Desc, item.Url,
    item.ChannelId, item.Cover, item.Sort,item.Hits, item.Recommend
  ));
}

const ranks = computed(() => [
  new RankSubject(1, "官网榜", sites.value.filter(site => site.ChannelId == 1&& site.Hits > 40)),
  new RankSubject(2, "高校榜", sites.value.filter(site => site.ChannelId == 2&& site.Hits > 40)),
]);

const filteredSites = ref<Site[]>(sites.value);

const filterSites = (channelId: number) => {
  if (channelId === 0)
    filteredSites.value = sites.value.filter(site => site.Recommend === 1);
  else
    filteredSites.value = sites.value.filter(site => site.ChannelId === channelId);
};
const switchTab = function (type: string) {
  activeTab.value = type;
};
const handleMoreClick = (site: Site) => {
  selectedSite.value = site;
};
const activeChannel = function (channel: Channel) {
  channels.value.forEach((item) => {
    item.IsActive = false;
  });
  channel.IsActive = true;
};

onMounted(async () => {
  await loadData();
  filterSites(0);
});
</script>
