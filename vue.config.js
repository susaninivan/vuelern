const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // css: {
  //   loaderOptions: {
  //     // Note: this option is named as "prependData" in sass-loader v8
  //     sass: {
  //       additionalData: `
  //       @import "./assets/styles/styles.scss";
  //     `
  //     },
  //     scss: {
  //       additionalData: `
  //       @import "./assets/styles/styles.scss";
  //     `

  //     },
  //   }
  // },
  publicPath: `/vuelern/`,
  transpileDependencies: true


})
