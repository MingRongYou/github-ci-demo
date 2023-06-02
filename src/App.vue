<template>
  <div class="app">
    <div class="background"></div>
    <h1>情人节快乐！</h1>
    <div class="heart-container">
      <div class="heart"></div>
    </div>
    <p>我爱你！</p>
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: pink;
  z-index: -1;
}

.heart-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 20px;
}

.heart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: #f44336;
  transform: rotate(-45deg);
  transform-origin: 50% 50%;
  border-radius: 50%;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #f44336;
  border-radius: 50%;
}

.heart::before {
  top: -50px;
  left: 0;
}

.heart::after {
  top: 0;
  left: 50px;
}
</style>