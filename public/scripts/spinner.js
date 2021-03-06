$(document).ready(function() {


$( "#processing" ).append(`
    <div class="box">
      <style scoped>
        * {
      box-sizing: border-box;
    }
    .box {
      position: relative;
      width: 200px;
      height: 200px;
      display: block;
      background: #FFFFFF;
      margin: auto;
      margin-top: 10px;
      border-radius: 50%;
    }
    .pizza-slice-1 {
      position: absolute;
      top: 5%;
      left: 14.5%;
      width: 65%;
      height: 50%;
      background: #FFFFFF;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
      transform: scale(0.8) rotate(-10deg);
    }
    .border {
      position: absolute;
      top: 5%;
      left: 7.5%;
      width: 85%;
      height: 85%;
      background: #4A3768;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
      overflow: hidden;
    }
    .crust {
      position: absolute;
      top: 6%;
      left: 10%;
      width: 80%;
      height: 80%;
      background: #C59C6F;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
    }
    .border-copy {
      position: absolute;
      top: 15%;
      left: 10%;
      width: 80%;
      height: 80%;
      background: #4A3768;
      border-radius: 50%;
    }
    .cheese {
      position: absolute;
      top: 20%;
      left: 17.5%;
      width: 65%;
      height: 65%;
      background: #FADC81;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
      overflow: hidden;
    }
    .peperoni-1 {
      position: absolute;
      top: 10%;
      left: 35%;
      width: 25%;
      height: 30%;
      background: #4A3768;
      border-radius: 50%;
    }
    .meat {
      position: absolute;
      top: 25%;
      left: 25%;
      width: 50%;
      height: 50%;
      background: #D95071;
      border-radius: 50%;
    }
    .peperoni-2 {
      position: absolute;
      top: 38%;
      right: 16%;
      width: 25%;
      height: 30%;
      background: #4A3768;
      border-radius: 50%;
    }
    .peperoni-3 {
      position: absolute;
      bottom: 10%;
      left: 26%;
      width: 25%;
      height: 30%;
      background: #4A3768;
      border-radius: 50%;
    }
    .olive-1 {
      position: absolute;
      width: 8%;
      height: 10%;
      background: #4A3768;
      top: 10%;
      left: 24%;
      border-radius: 50%;
      transform: scale(0.6);
    }
    .olive-2 {
      position: absolute;
      width: 8%;
      height: 10%;
      background: #4A3768;
      top: 26%;
      left: 22%;
      border-radius: 50%;
      transform: scale(0.7);
    }
    .olive-3 {
      position: absolute;
      width: 8%;
      height: 10%;
      background: #4A3768;
      top: 42%;
      left: 32%;
      border-radius: 50%;
      transform: scale(0.5);
    }
    .olive-4 {
      position: absolute;
      width: 8%;
      height: 10%;
      background: #4A3768;
      top: 55%;
      left: 50%;
      border-radius: 50%;
      transform: scale(0.6);
    }
    .olive-5 {
      position: absolute;
      width: 8%;
      height: 10%;
      background: #4A3768;
      bottom: 15%;
      right: 40%;
      border-radius: 50%;
      transform: scale(0.75);
    }
    .olive-6 {
      position: absolute;
      width: 8%;
      height: 10%;
      background: #4A3768;
      top: 15%;
      right: 28%;
      border-radius: 50%;
      transform: scale(0.9);
    }
    .olive-7 {
      position: absolute;
      width: 8%;
      height: 10%;
      background: #4A3768;
      top: 25%;
      right: 18%;
      border-radius: 50%;
      transform: scale(0.5);
    }
    .pizza-slice-2 {
      position: absolute;
      top: 14.5%;
      left: 34%;
      width: 65%;
      height: 50%;
      background: #FFFFFF;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
      transform: scale(0.8) rotate(60deg);
      opacity: 0;
      animation: slice 5s infinite;
      animation-direction: alternate;
      z-index: 2;
    }
    .pizza-slice-3 {
      position: absolute;
      top: 35%;
      left: 29.5%;
      width: 65%;
      height: 50%;
      background: #FFFFFF;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
      transform: scale(0.8) rotate(135deg);
      opacity: 0;
      animation: slice-2 5s infinite;
      animation-direction: alternate;
    }
    .pizza-slice-4 {
      position: absolute;
      top: 38.5%;
      left: 9.5%;
      width: 65%;
      height: 50%;
      background: #FFFFFF;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
      transform: scale(0.8) rotate(205deg);
      opacity: 0;
      animation: slice-3 5s infinite;
      animation-direction: alternate;
    }
    .pizza-slice-5 {
      position: absolute;
      top: 21.5%;
      left: -.15%;
      width: 65%;
      height: 50%;
      background: #FFFFFF;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      border-radius: 50%;
      transform: scale(0.8) rotate(275deg);
      opacity: 0;
      animation: slice-4 5s infinite;
      animation-direction: alternate;
    }
    @keyframes slice {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes slice-2 {
      0% {
        opacity: 0;
      }
      25% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes slice-3 {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      75% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes slice-4 {
      0% {
        opacity: 0;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
      </style>
      <div class="pizza-slice-1">
        <div class="border">
          <div class="crust"></div>
          <div class="border-copy"></div>
          <div class="cheese">
            <div class="peperoni-1">
              <div class="meat"></div>
            </div>
            <div class="peperoni-2">
              <div class="meat"></div>
            </div>
            <div class="peperoni-3">
              <div class="meat"></div>
            </div>
            <div class="olive-1"></div>
            <div class="olive-2"></div>
            <div class="olive-3"></div>
            <div class="olive-4"></div>
            <div class="olive-5"></div>
            <div class="olive-6"></div>
            <div class="olive-7"></div>
          </div>
        </div>
      </div>
      <div class="pizza-slice-2">
        <div class="border">
          <div class="crust"></div>
          <div class="border-copy"></div>
          <div class="cheese">
            <div class="peperoni-1">
              <div class="meat"></div>
            </div>
            <div class="peperoni-2">
              <div class="meat"></div>
            </div>
            <div class="peperoni-3">
              <div class="meat"></div>
            </div>
            <div class="olive-1"></div>
            <div class="olive-2"></div>
            <div class="olive-3"></div>
            <div class="olive-4"></div>
            <div class="olive-5"></div>
            <div class="olive-6"></div>
            <div class="olive-7"></div>
          </div>
        </div>
      </div>
      <div class="pizza-slice-3">
        <div class="border">
          <div class="crust"></div>
          <div class="border-copy"></div>
          <div class="cheese">
            <div class="peperoni-1">
              <div class="meat"></div>
            </div>
            <div class="peperoni-2">
              <div class="meat"></div>
            </div>
            <div class="peperoni-3">
              <div class="meat"></div>
            </div>
            <div class="olive-1"></div>
            <div class="olive-2"></div>
            <div class="olive-3"></div>
            <div class="olive-4"></div>
            <div class="olive-5"></div>
            <div class="olive-6"></div>
            <div class="olive-7"></div>
          </div>
        </div>
      </div>
      <div class="pizza-slice-4">
        <div class="border">
          <div class="crust"></div>
          <div class="border-copy"></div>
          <div class="cheese">
            <div class="peperoni-1">
              <div class="meat"></div>
            </div>
            <div class="peperoni-2">
              <div class="meat"></div>
            </div>
            <div class="peperoni-3">
              <div class="meat"></div>
            </div>
            <div class="olive-1"></div>
            <div class="olive-2"></div>
            <div class="olive-3"></div>
            <div class="olive-4"></div>
            <div class="olive-5"></div>
            <div class="olive-6"></div>
            <div class="olive-7"></div>
          </div>
        </div>
      </div>
      <div class="pizza-slice-5">
        <div class="border">
          <div class="crust"></div>
          <div class="border-copy"></div>
          <div class="cheese">
            <div class="peperoni-1">
              <div class="meat"></div>
            </div>
            <div class="peperoni-2">
              <div class="meat"></div>
            </div>
            <div class="peperoni-3">
              <div class="meat"></div>
            </div>
            <div class="olive-1"></div>
            <div class="olive-2"></div>
            <div class="olive-3"></div>
            <div class="olive-4"></div>
            <div class="olive-5"></div>
            <div class="olive-6"></div>
            <div class="olive-7">        </div>
          </div>
        </div>
      </div>
    </div>`
    )





$('#in_progress').append(`<p id="demo"></p>
        <script>
            function startTimer(duration, display) {
                var timer = duration, minutes, seconds;
                setInterval(function () {
                    minutes = parseInt(timer / 60, 10)
                    seconds = parseInt(timer % 60, 10);
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    display.textContent = minutes + ":" + seconds;
                    if (--timer < 0) {
                        timer = duration;
                    }
                }, 1000);
            }
                var time = 60 *  parseInt($('#script').attr('class'))
                display = document.querySelector('#demo');
                startTimer(time, display)
        </script>`)




  })