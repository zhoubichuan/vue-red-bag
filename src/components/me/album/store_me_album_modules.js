export default {
  namespaced: true,
  state: {
    meAlbumHeader: {
      left: "<",
      middle: "朋友圈相册|视频动态"
    },
  },
  actions: {
    get_weChatMomentAlbum(state, {
      axios
    }) {
      return new Promise((resolve, reject) => {
        this.$axios.get("api/me/album/weChatMomentAlbum").then(res => {
          resolve(res)
        }, rej => {
          reject(rej)
        })
      })
    },
  }
}