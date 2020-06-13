var link;
var streams = []
// var symbol;
var symbolSize = 20;
function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);

  var x = 0;

  for (var i = 0; i <= width/symbolSize; i++ ){
     stream = new Stream();
     stream.generateSymbols(x, random(-500,0))
     streams.push(stream)
     x +=(symbolSize)
  }
  textSize(symbolSize)
}

function draw() {
    background(0);
 
    textFont('Georgia');
 
    textSize(20);
    streams.forEach(function(stream){
      stream.render()
    })
  }

  
        
  function Symbol(x, y, n, switchInterval, randomnum, speed) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
   
    this.setToRandomSymbol = function() {
       
        var possibilitys = [
            {
            letter: ['','','a', 'c', 'i','s', 's', 'e', 'J', '',]
            },
            {
             letter: ['','', 'S', 'S', 'C',' ', 'L', 'M', 'T','H']
            },
            {
             letter: ['','','g', 'n', 'i','d', 'o', 'C', '', '']
            },
            {
            letter: ['t','p', 'i', 'r','c', 's', 'a','v','a','J']
            }
        ]
       var bob = randomnum + 1
        var array = ['J', 'e', 's','s', 'i', 'c', 'a']
    
        if (frameCount % switchInterval == 0){
            this.value = possibilitys[randomnum].letter[n]
        }
  }
 this.render = function(){
     var color1 = round(random(0,255))
     var color2 = round(random(0,255))
     var color3 = round(random(0,255))

      fill(color1,color2 ,color3)      
      text(this.value, this.x, this.y)
      this.rain()
  }  
  this.rain = function(){
      if(this.y >=height){
          this.y = 0
      }
      else{
        this.y += this.speed;
        
      }
  }
}    

function Stream() {

    this.symbols = [];
    this.totalSymbols = 9;
    this.speed = random(1,5)
    var color1 = round(random(0,255))
    var color2 = round(random(0,255))
    var color3 = round(random(0,255)) 

    this.generateSymbols = function(x,y) {
    var switchInterval = round(random(10, 2)) 
       var n = 0;
       var randomnum = round(random(0,3))
       for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x,y, n , switchInterval,randomnum,this.speed) 
            symbol.setToRandomSymbol();
            // console.log(symbol)
            this.symbols.push(symbol);
            y -= (symbolSize + 5);
            
            if(n <= this.totalSymbols){
                n++ 
            }
            else{
                n = 0
            }
        
      }
    }
  
    this.render = function() {
       
      this.symbols.forEach(function(symbol) {
        
     
      fill(color1,color2 ,color3)  
        text(symbol.value, symbol.x, symbol.y);
        symbol.rain();
        
         symbol.setToRandomSymbol();
        
      });
    }
  }

 