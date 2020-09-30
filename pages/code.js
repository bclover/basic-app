export default {
  layout: 'default',
  data() {
    return {
      test: 'Hello'
    }
  },
  created() {
    console.log('Index page created!')
    this.init()
  },
  methods: {
    init() {
      console.log('init() called!')
      const testObj = { dog: 'goldendoodle', cat: 'tabby' }
      this.removeProperty(testObj, 'cat')
    },
    removeProperty(obj, prop) {
      console.log('removeProperty() called!')
      console.log('object before:', obj)
      if (obj[prop]) {
        delete obj[prop]
        console.log('return true')
        console.log('object after', obj)
        return true
      }
      console.log('return false')
      return false
    }
  }
}
