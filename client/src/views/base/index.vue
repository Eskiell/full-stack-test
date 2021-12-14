<template>
  <div class="children-router">
    <slot name="header">
      <the-header></the-header>
    </slot>
    <slot>
      <router-view></router-view>
    </slot>
    <slot name="footer">
      <the-footer></the-footer>
    </slot>
  </div>
</template>

<script>
import TheHeader from '@/views/base/header'
import TheFooter from '@/views/base/footer'

export default {
  name: 'TheMain',
  components: { TheHeader, TheFooter }
}
</script>
