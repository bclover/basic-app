export default {
  layout: 'default',
  data() {
    return {
      test: 'Hello world!'
    }
  },
  created() {
    console.log('Index page created!')
    this.init()
  },
  methods: {
    init() {
      console.log('init() called!')
    }
  }
}
