<template>
  <div class="app">
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
  background-color: #fde2e4;
  font-family: Arial, sans-serif;
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