var wave_frequency_tangle;
var light_color;
var radio = "Radio: Your radio captures radio waves emitted by radio stations, bringing your favorite tunes. Radio waves are also emitted by stars and gases in space.";
var microwave = "Microwave: Microwave radiation will cook your popcorn in just a few minutes, but is also used by astronomers to learn about the structure of nearby galaxies.";
var visible = "Visible: Our eyes detect visible light. Fireflies, light bulbs, and stars all emit visible light.";
var infrared = "Infrared: Night vision goggles pick up the infrared light emitted by our skin and objects with heat. In space, infrared light helps us map the dust between stars.";
var ultraviolet = "Ultraviolet: Ultraviolet radiation is emitted by the Sun and are the reason skin tans and burns. Hot objects in space emit UV radiation as well.";
var x_ray = "X-ray: A dentist uses X-rays to image your teeth, and airport security uses them to see through your bag. Hot gases in the Universe also emit X-rays.";
var gamma_ray = "Gamma-Ray: Doctors use gamma-ray imaging to see inside your body. The biggest gamma-ray generator of all is the Universe.";


function setUpTangle () {

    var wave_length_element = document.getElementById("wave_length");
    var wave_frequency_element = document.getElementById("wave_frequency");


    wave_frequency_tangle = new Tangle(wave_frequency_element, {
        initialize: function () {
          this.wave_frequency = 534;
          this.wave_length = 560;
          this.where = "visible";
        },
        update: function () {

          var wave_frequency_aux = this.wave_frequency * 1000000000000;
          var wave_length_aux;
          wave_length_aux = 300000000/wave_frequency_aux;

          if(Math.round(wave_length_aux / 0.000000001) == 0)
            this.wave_length = wave_length_aux / 0.000000001;
          else {
            this.wave_length = Math.round(wave_length_aux / 0.000000001)
          }

          draw(this.wave_frequency,this.wave_length);

          this.color = light_color;

          if (this.wave_frequency <= 0.003){
            this.where = "Radio";
          $("#desc").text(radio);
            where = "Radio";
          }
          else if (this.wave_frequency > 0.003 && this.wave_frequency <= 3){
            this.where = "Microwaves";
            $("#desc").text(microwave);
            where = "Microwaves";
          }
          else if (this.wave_frequency > 3 && this.wave_frequency <= 384){
            this.where = "Infrared";
            $("#desc").text(infrared);
            where = "Infrared";
          }
          else if (this.wave_frequency >= 790 && this.wave_frequency <= 300000){
            this.where = "Ultraviolet";
            $("#desc").text(ultraviolet);
            where = "Ultraviolet";
          }
          else if (this.wave_frequency >= 300000 && this.wave_frequency <= 30000000){
            this.where = "X-Ray";
            $("#desc").text(x_ray);
            where = "X-Ray";
          }
          else if (this.wave_frequency >= 30000000){
            this.where = "Gamma-Ray";
            $("#desc").text(gamma_ray);
            where = "Gamma-Ray";
          }
          else{
            this.where = "visible";
            $("#desc").text(visible);
            where = "visible";
          }


        }
    });

}

function apply(){
  var wfrequency = document.getElementById("wfrequency").value;
  if (wfrequency == "")
    alert("Input frequency values between 0 and 300000000 please!");
  else if (wfrequency < 0 || wfrequency > 300000000)
    alert("Input frequency values between 0 and 300000000 please!");
  else if (isNaN(wfrequency))
    alert("Input frequency values of numeric type!");
  else
    wave_frequency_tangle.setValue("wave_frequency",Number(wfrequency));
}
//function fun1(x) {return Math.sin((2*Math.pi)*(540/(300000000))*x);  }
function draw(frequency,wavelength){
  var wave_frequency_aux = frequency * 1000000000000;
 var c = wavelengthToColor(wavelength);


  functionPlot({
    target: '#domain',
    yAxis: {domain: [-3, 3]},
    xAxis: {domain: [0, 0.0000000000001]},
    data: [{
      fn: 'sin('+wave_frequency_aux+'*x)',
      color: c//d3.rgb("#" + c)
    }]
  })
}

function wavelengthToColor(wavelength) {
        var r,
            g,
            b,
            wl = wavelength,
            color;


        if (wl >= 380 && wl < 440) {
            R = -1 * (wl - 440) / (440 - 380);
            G = 0;
            B = 1;
       } else if (wl >= 440 && wl < 490) {
            R = 0;
            G = (wl - 440) / (490 - 440);
            B = 1;
        } else if (wl >= 490 && wl < 510) {
            R = 0;
            G = 1;
            B = -1 * (wl - 510) / (510 - 490);
        } else if (wl >= 510 && wl < 580) {
            R = (wl - 510) / (580 - 510);
            G = 1;
            B = 0;
        } else if (wl >= 580 && wl < 645) {
            R = 1;
            G = -1 * (wl - 645) / (645 - 580);
            B = 0.0;
        } else if (wl >= 645 && wl <= 780) {
            R = 1;
            G = 0;
            B = 0;
        } else {
            R = 0;
            G = 0;
            B = 0;
        }


        R = R * 255;
        G = G * 255;
        B = B * 255;

        color = d3.rgb(R,G,B);
        var n_match  = ntc.name(""+ color +"");

        n_rgb        = n_match[0]; // RGB value of closest match
        n_name       = n_match[1]; // Text string: Color name
        n_exactmatch = n_match[2]; // True if exact color match



        light_color = n_name;


        return color;

    }
