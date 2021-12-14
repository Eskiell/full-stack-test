<template>
  <header class="app-header fixed-top">
    <div class="app-header-inner">
      <div class="container-fluid py-2">
        <div class="app-header-content">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto">
              <a id="sidepanel-toggler" class="sidepanel-toggler d-inline-block d-xl-none" href="#">
                <svg height="30" role="img" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
                  <title>
                    Menu</title>
                  <path d="M4 7h22M4 15h22M4 23h22" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                        stroke-width="2"></path>
                </svg>
              </a>
            </div>
            <div class="search-mobile-trigger d-sm-none col">
              <i class="search-mobile-trigger-icon fas fa-search"></i>
            </div>
            <div class="app-search-box col">
              <form class="app-search-form">
                <input class="form-control search-input" name="search" placeholder="Pesquisar cervejas..." type="text">
                <button class="btn search-btn btn-primary" type="submit" value="Search"><i class="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div class="app-utilities col-auto">
              <div class="app-utility-item app-user-dropdown dropdown">
                <a id="user-dropdown-toggle" aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown"
                   href="#"
                   role="button">
                  <i class="bi bi-person-square" style="font-size: 25px"></i>
                </a>
                <ul aria-labelledby="user-dropdown-toggle" class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Minha conta</a></li>
                  <li><a class="dropdown-item" href="#">Configurações</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" @click.prevent="logout">Sair</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="app-sidepanel" class="app-sidepanel">
      <div id="sidepanel-drop" class="sidepanel-drop"></div>
      <div class="sidepanel-inner d-flex flex-column">
        <a id="sidepanel-close" class="sidepanel-close d-xl-none" href="#">&times;</a>
        <div class="app-branding">
          <router-link :to="{ name: 'routerFactoryHome' }" class="app-logo">
            <img alt="logo" class="logo-icon mr-2" src="@/assets/images/app-logo.png"><span
            class="logo-text">MyTapp</span></router-link>
        </div>
        <!--//app-branding-->
        <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
          <ul id="menu-accordion" class="app-menu list-unstyled accordion">
            <li class="nav-item">
              <router-link :class="currentRoute==='routerFactoryHome'?'nav-link active':'nav-link'"
                           :to="{ name: 'routerFactoryHome' }">
                                <span class="nav-icon">
                                    <svg class="bi bi-house-door" fill="currentColor" height="1em" viewBox="0 0 16 16"
                                         width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                                          fill-rule="evenodd"/>
                                        <path d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                              fill-rule="evenodd"/>
                                    </svg>
                                </span>
                <span class="nav-link-text">Principal</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="currentRoute==='routerFactoryProducts'?'nav-link active':'nav-link'"
                           :to="{ name: 'routerFactoryProducts' }">
                                <span class="nav-icon">
                                    <svg class="bi bi-card-list" fill="currentColor" height="1em" viewBox="0 0 16 16"
                                         width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                                          fill-rule="evenodd"/>
                                        <path
                                          d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
                                          fill-rule="evenodd"/>
                                        <circle cx="3.5" cy="5.5" r=".5"/>
                                        <circle cx="3.5" cy="8" r=".5"/>
                                        <circle cx="3.5" cy="10.5" r=".5"/>
                                    </svg>
                                </span>
                <span class="nav-link-text">Cervejas</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="app-sidepanel-footer">
          <nav class="app-nav app-nav-footer">
            <ul class="app-menu footer-menu list-unstyled">
              <!--//nav-item-->
              <li class="nav-item">
                <a class="nav-link" href="/license">
                                    <span class="nav-icon">
                                        <svg class="bi bi-file-person" fill="currentColor" height="1em"
                                             viewBox="0 0 16 16"
                                             width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                              d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                                              fill-rule="evenodd"/>
                                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill-rule="evenodd"/>
                                        </svg>
                                    </span>
                  <span class="nav-link-text">teste</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <ElementLoading :active="loading" :is-full-screen="true"/>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { Dropdown } from 'bootstrap'
import ElementLoading from 'vue-element-loading'
import Auth from '@/api/Auth'

export default defineComponent({
  components: { ElementLoading },
  setup () {
    const route = useRoute()
    const currentRoute = computed(() => route.name)
    return {
      currentRoute
    }
  },
  data () {
    return {
      loading: null
    }
  },
  mounted () {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    dropdownElementList.map(function (dropdownToggleEl) {
      return new Dropdown(dropdownToggleEl)
    })
  },
  methods: {
    logout () {
      const vm = (this as any)
      // eslint-disable-next-line func-call-spacing
      vm.loading = true as never
      // eslint-disable-next-line no-unexpected-multiline
      (new Auth()).revoke().then(() => {
        localStorage.removeItem('accessToken')
        vm.$router.push('/login')
      }).catch(() => {
        localStorage.removeItem('accessToken')
        vm.$router.push('/login')
      })
    }
  }
})
</script>
