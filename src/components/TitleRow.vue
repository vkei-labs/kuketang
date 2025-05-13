

<template>
    <header class="navbar py-075 sticky-top header-blur navbar-expand-lg">
      <nav class="d-grid grid-container px-md-5 px-3 w-100 align-items-center">
          <div class="navbar-brand p-0 m-0 d-flex align-items-left">
            <a href="/">
              <HeadLogo />
              <!-- <img src="@/assets/images/site-logo.png" alt="logo" class="img-fluid" id="siteLogo" /> -->
            </a>
          </div>

          <div class="d-flex w-100">
            <!-- <div class="Search Search-Button">
              <span class="d-flex align-items-center w-100">
                <svg width="16" height="16" class="Modal-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <input type="text" class="search-input" placeholder="搜索资源" />
              </span>
            </div> -->
          </div>

          <div class="dropdown d-flex align-items-center justify-content-end ">
            <button id="Onlinehelp" class="dropdown-svg" href="javascript:;" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation="">
                <span></span>
                <span></span>
            </button>
            <div id="header" class="dropdown-menu dropdown-menu-end navbar-dropdown-menu-borderless" aria-labelledby="accountNavbarDropdown" style="width: 12rem;">

                <div class="d-flex align-items-center justify-content-between exterior-box">
                    <div>
                        <div class="card-radio form-check sidebar-setting ps-0 m-0" data-theme-key="Light" @click="changeTheme('Light')">
                            <input class="form-check-input d-none" type="radio" name="theme-color" id="theme-light" value="Light"  >
                            <label class="form-check-label d-flex p-0 avatar-md" for="theme-light">
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
                            <input class="form-check-input d-none" type="radio" name="theme-color" id="theme-dark" value="Dark">
                            <label class="form-check-label d-flex p-0 avatar-md" for="theme-dark">
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


                </div>
                <hr class="text-white-50" />
                <a class="dropdown-item" href="https://site.kuketang.cn/">探索更多内容</a>
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
    import { onMounted } from 'vue';
    import HeadLogo from "@/assets/icons/head-logo.svg";

    // 设置 cookie
    function setCookie(name: string, value: string, days = 365) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
    }

    // 读取 cookie
    function getCookie(name: string) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '');
    }

    const changeTheme = function(theme: string) {
        const themeKey = theme === 'Device' ? 'auto' : theme;
        // document.documentElement.setAttribute('data-theme', themeKey);
        // 设置name=“theme-color” value=themeKey 的radio 为选中状态
        const radio = document.querySelector(`input[name="theme-color"][value="${themeKey}"]`) as HTMLInputElement;
        radio.checked = true;
        document.documentElement.setAttribute('data-sy-theme', theme);
        setCookie('theme', theme, 365);
    };

    onMounted(() => {
        // 页面加载时读取 cookie 设置默认主题
        const theme = getCookie('theme') || 'Light';
        changeTheme(theme);
    });
</script>
