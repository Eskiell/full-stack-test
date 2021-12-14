<template>
  <GHead></GHead>
  <div class="app-wrapper">
    <div class="app-content pt-3 p-md-3 p-lg-4">
      <div class="container-xl">
        <infinite-scroll
          @infinite-scroll="loadDataFromServer" :message="message" :noResult="noResult">
          <div class="row">
            <div class="col-lg-12 mx-auto">
              <ul class="list-group shadow" v-for="repo in beers" :key="repo.id">
                <li class="list-group-item">
                  <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div class="media-body order-2 order-lg-1">
                      <h5 class="mt-0 font-weight-bold mb-2">{{ repo.name }}</h5>
                      <p class="font-italic text-muted mb-0 small">{{ repo.description }}</p>
                      <div class="d-flex align-items-center justify-content-between mt-1">
                        <h6 class="font-weight-bold my-2">{{ repo.first_brewed }}</h6>
                      </div>
                    </div>
                    <img :src="repo.image_url" :alt="repo.image_url" style="width: 100px;height: 400px"
                         class="ml-lg-5 order-1 order-lg-2">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </infinite-scroll>
      </div>
    </div>
    <footer class="app-footer">
      <div class="container text-center py-3">
        <base-copyright></base-copyright>
      </div>
    </footer>
  </div>
</template>
<script>
import InfiniteScroll from 'infinite-loading-vue3'
import BaseCopyright from '@/components/GCopyright'
import axios from 'axios'
import GHead from '@/components/GHead'
import Beers from '@/api/Beers'

export default {
  name: 'main',
  components: {
    GHead,
    BaseCopyright,
    InfiniteScroll
  },

  data () {
    return {
      beers: [],
      page: 1,
      noResult: false,
      message: '',
      loading: false
    }
  },
  methods: {
    async loadDataFromServer () {
      try {
        if (this.loading) {
          return null
        }
        this.loading = true
        const b = new Beers()
        const result = await b.list(this.page)
        if (result.data.length) {
          this.beers.push(...result.data)
          this.page++
        } else {
          this.noResult = true
          this.message = 'Sem cerveja'
        }
      } catch (err) {
        this.noResult = true
        this.message = 'Erro ao carregar as cervejas'
      }
      this.loading = false
    }
  },
  mounted () {
    this.loadDataFromServer()
  }
}
</script>

<style scoped>

</style>
