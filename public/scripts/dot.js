
$(document).ready(function() {




    $(document).ready(function (e){
       $( "form#customer" ).append(`

<div class="ring-container">
  <style scoped>
  .ring-container {
    position: relative;
}

.circle {
    width: 15px;
    height: 15px;
    background-color: #62bd19;
    border-radius: 50%;
    position: absolute;
    top: 23px;
    left: 23px;
}

.ringring {
    border: 3px solid #62bd19;
    -webkit-border-radius: 30px;
    height: 25px;
    width: 25px;
    position: absolute;
    left: 15px;
    top: 15px;
    -webkit-animation: pulsate 1s ease-out;
    -webkit-animation-iteration-count: infinite;
    opacity: 0.0
}
@-webkit-keyframes pulsate {
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
}
  </style>
    <div class="ringring"></div>
    <div class="circle"></div>
</div>`)

}
