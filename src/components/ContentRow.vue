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
          <div class="dn-fDbox">
            <div class="dn-slt d-flex align-items-stretch m-auto position-relative flex-flow-row">
              <div class="dn-bjba"
                :style="{ 'transform': (viewMode == 'card' ? 'translateX(0px)' : 'translateX(50px)') }"></div>
              <button class="btn dn-btn border-0 d-flex align-items-center flex-flow-row position-relative"
                :class="{ 'dn-btCl': viewMode == 'card' }" @click="viewMode = 'card'">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg"
                  class="dn-shjg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15 4.9231C13.8954 4.9231 13 5.81853 13 6.9231V9.9231C13 11.0277 13.8954 11.9231 15 11.9231H18C19.1046 11.9231 20 11.0277 20 9.9231V6.9231C20 5.81853 19.1046 4.9231 18 4.9231H15ZM15 13.9231C13.8954 13.9231 13 14.8185 13 15.9231V18.9231C13 20.0277 13.8954 20.9231 15 20.9231H18C19.1046 20.9231 20 20.0277 20 18.9231V15.9231C20 14.8185 19.1046 13.9231 18 13.9231H15ZM4 15.9231C4 14.8185 4.89543 13.9231 6 13.9231H9C10.1046 13.9231 11 14.8185 11 15.9231V18.9231C11 20.0277 10.1046 20.9231 9 20.9231H6C4.89543 20.9231 4 20.0277 4 18.9231V15.9231ZM6 4.9231C4.89543 4.9231 4 5.81853 4 6.9231V9.9231C4 11.0277 4.89543 11.9231 6 11.9231H9C10.1046 11.9231 11 11.0277 11 9.9231V6.9231C11 5.81853 10.1046 4.9231 9 4.9231H6Z"
                    fill="currentColor"></path>
                </svg>
              </button>
              <button class="btn dn-btn border-0 d-flex align-items-center flex-flow-row position-relative"
                :class="{ 'dn-btCl': viewMode == 'simple' }" @click="viewMode = 'simple'">
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xlmns="http://www.w3.org/2000/svg"
                  class="dn-shjg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4 6.9231C4 5.81853 4.89543 4.9231 6 4.9231C7.10457 4.9231 8 5.81853 8 6.9231C8 8.02767 7.10457 8.9231 6 8.9231C4.89543 8.9231 4 8.02767 4 6.9231ZM4 12.9231C4 11.8185 4.89543 10.9231 6 10.9231C7.10457 10.9231 8 11.8185 8 12.9231C8 14.0277 7.10457 14.9231 6 14.9231C4.89543 14.9231 4 14.0277 4 12.9231ZM6 16.9231C4.89543 16.9231 4 17.8185 4 18.9231C4 20.0277 4.89543 20.9231 6 20.9231C7.10457 20.9231 8 20.0277 8 18.9231C8 17.8185 7.10457 16.9231 6 16.9231ZM10 6.9231C10 5.81853 10.8954 4.9231 12 4.9231C13.1046 4.9231 14 5.81853 14 6.9231C14 8.02767 13.1046 8.9231 12 8.9231C10.8954 8.9231 10 8.02767 10 6.9231ZM12 10.9231C10.8954 10.9231 10 11.8185 10 12.9231C10 14.0277 10.8954 14.9231 12 14.9231C13.1046 14.9231 14 14.0277 14 12.9231C14 11.8185 13.1046 10.9231 12 10.9231ZM10 18.9231C10 17.8185 10.8954 16.9231 12 16.9231C13.1046 16.9231 14 17.8185 14 18.9231C14 20.0277 13.1046 20.9231 12 20.9231C10.8954 20.9231 10 20.0277 10 18.9231ZM18 4.9231C16.8954 4.9231 16 5.81853 16 6.9231C16 8.02767 16.8954 8.9231 18 8.9231C19.1046 8.9231 20 8.02767 20 6.9231C20 5.81853 19.1046 4.9231 18 4.9231ZM16 12.9231C16 11.8185 16.8954 10.9231 18 10.9231C19.1046 10.9231 20 11.8185 20 12.9231C20 14.0277 19.1046 14.9231 18 14.9231C16.8954 14.9231 16 14.0277 16 12.9231ZM18 16.9231C16.8954 16.9231 16 17.8185 16 18.9231C16 20.0277 16.8954 20.9231 18 20.9231C19.1046 20.9231 20 20.0277 20 18.9231C20 17.8185 19.1046 16.9231 18 16.9231Z"
                    fill="currentColor"></path>
                </svg>
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
          <div class="swiper-button-next"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  stroke-width="0.6"></path>
              </svg></span></div>
          <div class="swiper-button-prev"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  stroke-width="0.6"></path>
              </svg></span></div>
        </div>
      </swiper>

      <div class="pb-5 child-grid" id="container">
        <div class="child-item" v-for="site in filteredSites" v-bind:key="site.Id">
          <div class="card animate-target fade-in cardclick" :class="{ 'card-hibr': (viewMode == 'simple') }"
            :navigation="site.ChannelId">
            <template v-if="viewMode == 'card'">
              <div class="card-img overflow-hidden position-relative mb-2">
                <a :href="site.Url" target="_blank" rel="nofollow" class="card-img-over position-relative d-block">
                  <img class="w-100 card-img-core lazy lazy-loaded" :src="site.Background" />
                </a>
                <div class="card-img-txt">
                  <div class="card-img-txt-over">
                    <div class="d-flex align-items-center key">
                      <span>{{ site.Brief }}</span>
                    </div>
                    <ul class="card-img-list">
                      <li class="d-flex"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-title flex-nowrap border-0">
                <div class="d-flex align-items-center overflow-hidden w-100">
                  <a :href="site.Url" target="_blank" rel="nofollow" class="icon-img ">
                    <img class="mr-3 lazy lazy-loaded" :src="site.Logo" />
                  </a>
                  <div class="card-title-content">
                    <div class="card-title-box">
                      <a :href="site.Url" target="_blank" rel="nofollow" class="title-h6 collection-title"
                        :alt="site.Description">{{ site.Name }}</a>
                      <button class="card-title-icon" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="22"
                          viewBox="0 0 24 24" width="22" focusable="false" aria-hidden="true">
                          <path
                            d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                          </path>
                        </svg>
                      </button>
                    </div>
                    <div class="d-flex align-items-center desc-small" :alt="site.Description">{{ site.Description }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-title flex-nowrap border-0">
                <div class="d-flex align-items-center overflow-hidden w-100">
                  <a :href="site.Url" target="_blank" rel="nofollow" class="icon-img dn-iciMg">
                    <img class="mr-3 lazy lazy-loaded" :src="site.Logo">
                  </a>
                  <div class="card-title-content">
                    <div class="card-title-box">
                      <a :href="site.Url" target="_blank" rel="nofollow" class="title-h6 collection-title"> {{ site.Name
                        }}</a>
                      <button class="card-title-icon" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="22"
                          viewBox="0 0 24 24" width="22" focusable="false" aria-hidden="true">
                          <path
                            d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                          </path>
                        </svg>
                      </button>
                    </div>
                    <div class="d-flex align-items-center desc-small" :alt="site.Description">{{ site.Description }}
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
                    <small class="desc-small card-list-small">{{ site.Description }}</small>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { ref, type Ref } from 'vue';
import type { Channel } from '@/models/Channel';
import { Site } from '@/models/Site';
import { RankSubject } from '@/models/RankSubject';

const lastUpdateTime = ref('2025年04月19日');
const viewMode: Ref<string> = ref('simple');
const activeTab: Ref<string> = ref('all');
const channels: Ref<Channel[]> = ref([
  { Id: 0, Name: '精选', Sort: 0, IsActive: true },
  { Id: 1, Name: '官方网站', Sort: 1, IsActive: false },
  { Id: 2, Name: '知名高校', Sort: 2, IsActive: false },
  { Id: 3, Name: '中小学',  Sort: 3, IsActive: false },
  { Id: 4, Name: '备课资源', Sort: 4, IsActive: false },
  { Id: 5, Name: '教育软件', Sort: 5, IsActive: false },
]);
const sites: Ref<Site[]> = ref([
  new Site(17, '21世纪教育网', 'https://www.21cnjy.com/favicon.ico', '旨在为用户提供强大的人工智能对话功能', 'https://www.21cnjy.com', 4, '/images/cover-null.png', '课件，教案，学案备课资源', 1),
  new Site(14, '出卷网', 'https://www.chujuan.cn/favicon.ico', '海量中小学题库，线上题库组卷网站', 'https://www.chujuan.cn/', 4, '/images/cover-null.png', '出卷、组卷网', 2),

  new Site(15, '在线组卷网', 'https://www.zujuan.com/favicon.ico', '老牌中小学题库组卷网站', 'https://www.zujuan.com/', 5, '/images/cover-null.png', '中小学组卷网站', 3),
  new Site(26, '二一阅卷系统', 'https://www.21cnjy.com/favicon.ico', '阅卷系统，教务软件', 'https://yj.21cnjy.com', 5, '/images/cover-null.png', '教务软件阅卷系统', 2),
  new Site(16, '二一排课系统', 'https://www.21cnjy.com/favicon.ico', '智能排课软件，教务软件', 'https://paike.21cnjy.com', 5, '/images/cover-null.png', '教务排课软件', 2),

  new Site(1, '国家教育部', 'https://www.moe.gov.cn/favorite.ico', '中华人民共和国教育部官网', 'http://www.moe.gov.cn/', 1, '/images/cover-null.png', '官方网站', 1),
  new Site(2, '中国教育电视台', 'https://www.moe.gov.cn/favorite.ico', '中国教育电视台', 'http://www.cetv.cn/', 1, '/images/cover-null.png', '官方网站', 1),
  new Site(3, '国家开放大学', 'https://www.ouchn.edu.cn/favicon.ico', '国家开放大学', 'https://www.ouchn.edu.cn/', 1, '/images/cover-null.png', '官方网站', 1),

  new Site(5, '北京大学', 'https://www.pku.edu.cn/favicon.ico', '北京大学，教育部直属，全国知名大学，985,211', 'https://www.pku.edu.cn/', 2, '/images/cover-null.png', '知名高校', 2),
  new Site(6, '清华大学', 'https://www.tsinghua.edu.cn/favicon.ico', '清华大学，教育部直属，全国知名大学，985,211', 'https://www.tsinghua.edu.cn/', 2, '/images/cover-null.png', '知名高校', 2),
  new Site(7, '中国人民大学', 'https://www.ruc.edu.cn/favicon.ico', '中国人民大学，教育部直属，全国知名大学，985,211', 'https://www.ruc.edu.cn/', 2, '/images/cover-null.png', '知名高校', 2),
  new Site(8, '北京师范大学', 'https://www.bnu.edu.cn/images/favicon.ico', '北京师范大学，教育部直属，全国知名大学，北京', 'https://www.bnu.edu.cn/', 2, '/images/cover-null.png', '知名高校', 2),
  new Site(9, '中国政法大学', 'https://www.cupl.edu.cn/image/favicon.ico', '中国政法大学，教育部直属，全国知名大学，北京', 'https://www.cupl.edu.cn/', 2, '/images/cover-null.png', '知名高校', 2),
  new Site(10, '北京交通大学', 'https://www.bjtu.edu.cn/images/img2019/favicon.ico', '北京交通大学，教育部直属，全国知名大学，北京', 'https://www.bjtu.edu.cn/', 2, '/images/cover-null.png', '知名高校', 2)
]);
const ranks: Ref<RankSubject[]> = ref([
  new RankSubject(1, "AI榜", sites.value.filter(site => site.ChannelId == 1)),
  new RankSubject(2, "工具榜", sites.value.filter(site => site.ChannelId == 7)),
]);

const filteredSites = ref<Site[]>(sites.value);

const filterSites = (channelId: number) => {
  if (channelId === 0)
    filteredSites.value = sites.value;
  else
    filteredSites.value = sites.value.filter(site => site.ChannelId === channelId);
};
const switchTab = function (type: string) {
  activeTab.value = type;
};

const activeChannel = function (channel: Channel) {
  channels.value.forEach((item) => {
    item.IsActive = false;
  });
  channel.IsActive = true;
};

</script>
