<template>
  <main class="d-flex flex-grow-1 flex-column">
    <div class="overflow-hidden text-center w-100 min-height position-relative">
      <div class="d-flex flex-column justify-content-between align-items-center w-100 pt-t pb-5 h-100 min-box">
        <div class="z-n1 w-100 justify-content-between flex-row position-absolute px-md-5 px-3 min-images">
          <div class="d-grid grid-cols">
            <div class="position-relative overflow-hidden img-box grid-span-3"><img width="140px" class="back-image"
                src="@/assets/images/icon-1.webp"></div>
            <div class="position-relative overflow-hidden img-box grid-start-2 grid-span-2"><img width="140px"
                class="back-image" src="@/assets/images/icon-2.webp"></div>
            <div class="position-relative overflow-hidden img-box grid-span-2"><img width="140px" class="back-image"
                src="@/assets/images/icon-3.webp"></div>
            <div class="position-relative overflow-hidden img-box "><img width="140px" class="back-image"
                src="@/assets/images/icon-4.webp"></div>
          </div>
          <div class="d-grid grid-cols">
            <div class="position-relative overflow-hidden img-box grid-start-3"><img width="140px" class="back-image"
                src="@/assets/images/icon-5.webp"></div>
            <div class="position-relative overflow-hidden img-box grid-start-2 grid-span-2"><img width="140px"
                class="back-image" src="@/assets/images/icon-6.webp"></div>
            <div class="position-relative overflow-hidden img-box grid-span-2"><img width="140px" class="back-image"
                src="@/assets/images/icon-7.webp"></div>
            <div class="position-relative overflow-hidden img-box"><img width="140px" class="back-image"
                src="@/assets/images/icon-8.webp"></div>
          </div>
        </div>
        <div class="position-absolute bottom-0 w-100 light"></div>
        <div class="d-flex flex-column justify-content-center align-items-center px-4 title-slogan" style="">
          <div class="numbert"><span class="number">欢迎来到酷课堂导航🎉</span></div>
          <h1 class="display-2 fw-bold slogan-title m-0">酷课堂<span>网址导航</span></h1>
          <p class="text-muted">一个免费、基于Vue开发的网址导航，直接修改构建。<br>界面优雅简洁，自适应客户端。</p>

          <div class="hero-link d-flex align-items-center justify-content-center flex-wrap">
              <a target="_blank" class="media-svg"
                href="#"><img src="https://gitee.com/static/images/logo_themecolor.png" width="35" /></a>

            <a target="_blank" class="grocery webname webhref d-flex" href="https://www.kuketang.cn/">演示网址</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
