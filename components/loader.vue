<template>
  <div class="loader-bg">
    <div class="loader">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style>
.loader-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 40px;
  margin: -20px 0 0 -71px;
}
.loader .dot {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;

  border-radius: 50%;
  transform: translateX(0);
  animation: dot 2.8s infinite;
}

@media (prefers-color-scheme: light) {
  .loader-bg {
    background: #fff;
  }

  .loader {
    background: #fff;
    filter: contrast(20);
  }

  .loader .dot {
    background: #000;
    filter: blur(4px);
  }

  .loader .dots span {
    background: #000;
    filter: blur(4px);
  }
}

@media (prefers-color-scheme: dark) {
  .loader-bg {
    background: #1f2937;
  }

  .loader {
    background: #1f2937;
  }
  .loader .dot {
    background: #d1d5db;
  }

  .loader .dots span {
    background: #d1d5db;
  }
}

.loader .dots {
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: dots 2.8s infinite;
}
.loader .dots span {
  display: block;
  float: left;
  width: 16px;
  height: 16px;
  margin-left: 16px;

  border-radius: 50%;
}
@-moz-keyframes dot {
  50% {
    transform: translateX(96px);
  }
}
@-webkit-keyframes dot {
  50% {
    transform: translateX(96px);
  }
}
@-o-keyframes dot {
  50% {
    transform: translateX(96px);
  }
}
@keyframes dot {
  50% {
    transform: translateX(96px);
  }
}
@-moz-keyframes dots {
  50% {
    transform: translateX(-31px);
  }
}
@-webkit-keyframes dots {
  50% {
    transform: translateX(-31px);
  }
}
@-o-keyframes dots {
  50% {
    transform: translateX(-31px);
  }
}
@keyframes dots {
  50% {
    transform: translateX(-31px);
  }
}
</style>
