const int r = 9;             //connect red led at pin 9    
const int y = 10;           //connect yellow led at pin 10
const int g = 11;           //connect green led at pin 11
const int sec = 1000;       //seconds defined 
void setup() 
  {
    pinMode(r,OUTPUT);
    pinMode(y,OUTPUT);
    pinMode(g,OUTPUT);
    delay(sec);
  }

void loop()
    {
        digitalWrite(r,HIGH) ;
        delay(sec*5);
        digitalWrite(r,LOW) ;
        digitalWrite(y,HIGH) ;
        delay(sec*5);
        digitalWrite(y,LOW) ;
        digitalWrite(g,HIGH) ;
        delay(sec*5);
        digitalWrite(g,LOW) ;
        
    }
