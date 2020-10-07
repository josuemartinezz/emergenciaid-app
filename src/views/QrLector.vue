<template>
  <div class="code-qr">
    <p>
      Mi codigo es: <b>{{ retorno }}</b>
    </p>
    <div style="width: 100%">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div>
  </div>
</template>

<style lang="less">
.code-qr {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
</style>

<script>
export default {
  data() {
    return {
      retorno: "",
    };
  },
  methods: {
    async onDetect(promise) {
      const { imageData, content, location } = await promise;
      this.retorno = content;
    },
  },
};
</script>