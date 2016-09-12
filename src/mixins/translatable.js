export default {
  data () {
    return {
      obj_height: null,
      parallax: null,
      parallax_dist: null,
      bottom: null,
      top: null,
      scroll_top: null,
      window_height: null,
      window_bottom: null
    }
  },

  mounted () {
    this.$vuetify.load.call(this, this.init)
  },

  methods: {
    listeners () {
      document.addEventListener('scroll', this.translate)
      document.addEventListener('resize', this.translate)
    },

    translate () {
      this.calcDimensions()

      let percent_scrolled = (
        (this.window_bottom - this.top) / (this.height + this.window_height)
      )
      
      this.parallax = Math.round((this.parallax_dist * percent_scrolled))

      if (this.translated) {
        this.translated()
      }
    },

    calcDimensions () {
      this.obj_height = this.objHeight()
      this.parallax_dist = this.obj_height - this.height
      this.top = this.elOffsetTop()
      this.bottom = this.top + this.height
      this.scroll_top = window.pageYOffset
      this.window_height = window.innerHeight
      this.window_bottom = this.scroll_top + this.window_height
    }
  }
}