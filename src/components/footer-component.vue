<template>
  <footer class="footer">
    <h4>Connect with me</h4>
    <div class="socials">
      <a class="instagram" href="https://www.instagram.com/kontrsk/" target="_blank"></a>
      <a class="linkedin" href="https://www.linkedin.com/in/kristers-pulle/" target="_blank"></a>
      <a class="facebook" href="https://www.facebook.com/kristers.pulle/" target="_blank"></a>
      <a class="github" href="https://github.com/kristerspulle" target="_blank"></a>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
  display: flex;
  background-color: #1e282d;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 40px;
  margin-top: auto;
}
.socials {
  display: flex;
  gap: 40px;
  padding: 30px;
  align-items: center;
}
.instagram {
  width: 32px;
  height: 32px;
  background-image: url(public/instagram.png);
  background-size: contain;
}
.facebook {
  width: 32px;
  height: 32px;
  background-image: url(public/facebook.png);
  background-size: contain;
}
.linkedin {
  width: 32px;
  height: 32px;
  background-image: url(public/linkedin.png);
  background-size: contain;
}
.github {
  width: 32px;
  height: 32px;
  background-image: url(public/github.svg);
  background-size: contain;
}
</style>
