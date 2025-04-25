

<template>
    <header class="navbar py-075 sticky-top header-blur navbar-expand-lg">
      <nav class="d-grid grid-container px-md-5 px-3 w-100 align-items-center">
          <div class="navbar-brand p-0 m-0 d-flex align-items-left">
            <a href="/"><img src="@/assets/images/site-logo.png" alt="logo" class="img-fluid" id="siteLogo" /></a>
          </div>
          <div class="d-flex w-100">
            <div class="Search Search-Button">
              <span class="d-flex align-items-center w-100">
                <svg width="16" height="16" class="Modal-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <input type="text" class="search-input" placeholder="搜索资源" />
              </span>
            </div>
          </div>
          <div class="dropdown d-flex align-items-center justify-content-end ">
            <button id="Onlinehelp" class="dropdown-svg" href="javascript:;" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation="">
                <span></span>
                <span></span>
            </button>
            <div id="header" class="dropdown-menu dropdown-menu-end navbar-dropdown-menu-borderless" aria-labelledby="accountNavbarDropdown" style="width: 16rem;">

                <div class="d-flex align-items-center justify-content-between exterior-box">

                    <div>
                        <div class="card-radio form-check sidebar-setting ps-0 m-0" data-theme-key="Light" @click="changeTheme('Light')">
                            <input class="form-check-input d-none" type="radio" name="data-menu-color" id="leftbar-color-light" value="Light"  >
                            <label class="form-check-label d-flex p-0 avatar-md" for="leftbar-color-light">
                            <span class="d-flex h-100 flex-column bg-sy-l">
                                <span class="bg-sy-light d-flex p-1 align-items-center"></span>
                                <span class="d-flex pt-2 px-1 gap-1 justify-content-center flex-wrap">
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                </span>
                            </span>
                        </label>
                        </div>
                        <h5 class="small text-center mt-2 mb-0">浅色</h5>
                    </div>

                    <div>
                        <div class="card-radio form-check sidebar-setting ps-0 m-0" data-theme-key="Dark" @click="changeTheme('Dark')">
                            <input class="form-check-input d-none" type="radio" name="data-menu-color" id="leftbar-color-dark" value="Dark">
                            <label class="form-check-label d-flex p-0 avatar-md" for="leftbar-color-dark">
                            <span class="d-flex h-100 flex-column bg-sy-d">
                                <span class="bg-sy-Dark d-flex p-1 align-items-center"></span>
                                <span class="d-flex pt-2 px-1 gap-1 justify-content-center flex-wrap">
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                </span>
                            </span>
                        </label>
                        </div>
                        <h5 class="small text-center mt-2 mb-0">深色</h5>
                    </div>

                    <div>
                        <div class="card-radio form-check sidebar-setting ps-0 m-0" data-theme-key="Device" @click="changeTheme('Device')">
                            <input class="form-check-input d-none" type="radio" name="data-menu-color" id="leftbar-color-device" value="Device">
                            <label class="form-check-label d-flex p-0 avatar-md" for="leftbar-color-device">
                            <span class="d-flex h-100 flex-column bg-sy-l">
                                <span class="bg-sy-light d-flex p-1 align-items-center"></span>
                                <span class="d-flex pt-2 px-1 gap-1 justify-content-center flex-wrap">
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-light d-flex flex-column p-1 px-2"></span>
                                </span>
                            </span>
                            <span class="d-flex h-100 flex-column bg-sy-d">
                                <span class="bg-sy-Dark d-flex p-1 align-items-center"></span>
                                <span class="d-flex pt-2 px-1 gap-1 justify-content-center flex-wrap">
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                    <span class="bg-sy-Dark d-flex flex-column p-1 px-2"></span>
                                </span>
                            </span>
                        </label>
                        </div>
                        <h5 class="small text-center mt-2 mb-0">系统</h5>
                    </div>
                </div>
                <hr class="text-white-50" />
                <a class="dropdown-item" target="_blank" href="https://www.baidu.com">探索</a>
                <a class="dropdown-item" target="_blank" href="feedback.html">反馈</a>
                <a class="dropdown-item" target="_blank" href="cooperate.html">合作</a>
                <a class="dropdown-item" target="_blank" href="about.html">关于</a>
            </div>
          </div>
      </nav>
  </header>
</template>
<style scoped>
  #siteLogo {
    width: 125px;
  }
    .search-input {
        width: 100%;
        height: 2.5rem;
        padding: 0.5rem 1rem;
        background-color: transparent;
    }

    *[data-sy-theme="Dark"] .search-input {
        color: var(--dn-body) !important;
    }
</style>
<script setup lang="ts">
    const changeTheme = function(theme: string) {
        const themeKey = theme === 'Device' ? 'auto' : theme;
        document.documentElement.setAttribute('data-theme', themeKey);
        document.documentElement.setAttribute('data-sy-theme', theme);
    };
</script>
