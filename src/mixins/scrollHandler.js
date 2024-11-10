export default {
    methods: {
        
        onScroll(event) {
          const container = event.target
          if (container.clientHeight + container.scrollTop >= container.scrollHeight) {
            // this.isRulesReaded = true
            this.onScrollEnd ()
          }
        }
    }
}