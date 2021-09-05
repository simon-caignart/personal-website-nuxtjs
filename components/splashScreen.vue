<template>
  <div
    v-if="loading"
    class="fixed text-4xl font-medium flex flex-col items-center justify-center h-screen w-screen bg-white dark:bg-gray-800 z-50"
  >
    <svg id="test">
      <g>
        <path d="M 50,100 A 1,1 0 0 1 50,0" />
      </g>
      <g>
        <path d="M 50,75 A 1,1 0 0 0 50,-25" />
      </g>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#D53930;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#EA7412;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style>
#test {
  overflow: visible;
  width: 100px;
  height: 150px;
}
#test g {
  animation: slide 2s linear infinite;
}
#test g:nth-child(2) {
  animation-delay: 0.5s;
}
#test g:nth-child(2) path {
  animation-delay: 0.5s;
  stroke-dasharray: 0px 158px;
  stroke-dashoffset: 1px;
}
#test path {
  stroke: url(#gradient);
  stroke-width: 20px;
  stroke-linecap: round;
  fill: none;
  stroke-dasharray: 0 157px;
  stroke-dashoffset: 0;
  animation: escalade 2s cubic-bezier(0.8, 0, 0.2, 1) infinite;
}
@keyframes slide {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(50px);
  }
}
@keyframes escalade {
  0% {
    stroke-dasharray: 0 157px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 156px 157px;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 156px 157px;
    stroke-dashoffset: -156px;
  }
}
</style>
