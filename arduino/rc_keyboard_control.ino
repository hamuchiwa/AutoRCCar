// assign pin num
int right_pin = 6;
int left_pin = 7;
int forward_pin = 10;
int reverse_pin = 9;
/int f1 = A2;
int re1 = A3;
int l1 = A4;
int r1 = A5;/

// duration for output
int time = 50;
// initial command
int command = 0;

void setup() {
pinMode(right_pin, OUTPUT);
pinMode(left_pin, OUTPUT);
pinMode(forward_pin, OUTPUT);
pinMode(reverse_pin, OUTPUT);
/* pinMode(f1, OUTPUT);
pinMode(re1, OUTPUT);
pinMode(l1, OUTPUT);
pinMode(r1, OUTPUT);*/
digitalWrite(forward_pin, LOW);
digitalWrite(reverse_pin, LOW);
digitalWrite(right_pin, LOW);
digitalWrite(left_pin, LOW);
digitalWrite(f1, LOW);
digitalWrite(re1, LOW);
digitalWrite(r1, LOW);
digitalWrite(l1, LOW);/
Serial.begin(115200);
}

void loop() {
//receive command
if (Serial.available() > 0){
command = Serial.read();
}
else{
reset();
}
send_command(command,time);
}

void right(int time){
digitalWrite(right_pin, HIGH);
//digitalWrite(r1, HIGH);
delay(time);
// digitalWrite(right_pin, LOW);
//digitalWrite(r1, LOW);

}

void left(int time){
digitalWrite(left_pin, HIGH);
// digitalWrite(l1, HIGH);
delay(time);
// digitalWrite(left_pin, LOW);
//digitalWrite(l1, LOW);
}

void forward(int time){
digitalWrite(forward_pin, HIGH);
//digitalWrite(f1, HIGH);
delay(time);
//digitalWrite(forward_pin, LOW);
//digitalWrite(f1, LOW);
}

void reverse(int time){
digitalWrite(reverse_pin, HIGH);
//digitalWrite(re1, HIGH);
delay(time);
//digitalWrite(reverse_pin, LOW);
//digitalWrite(re1, LOW);
}

void forward_right(int time){
digitalWrite(forward_pin, HIGH);
//digitalWrite(f1, HIGH);
digitalWrite(right_pin, HIGH);
//digitalWrite(r1, HIGH);
delay(time);
// digitalWrite(forward_pin, LOW);
//digitalWrite(f1, LOW);
//digitalWrite(right_pin, LOW);
//digitalWrite(r1, LOW);
}

void reverse_right(int time){
digitalWrite(reverse_pin, HIGH);
//digitalWrite(re1, HIGH);
digitalWrite(right_pin, HIGH);
//digitalWrite(l1, HIGH);
delay(time);
//digitalWrite(reverse_pin, LOW);
//digitalWrite(re1, LOW);
//digitalWrite(right_pin, LOW);
//digitalWrite(l1, LOW);

}

void forward_left(int time){
digitalWrite(forward_pin, HIGH);
//digitalWrite(f1, HIGH);
digitalWrite(left_pin, HIGH);
// digitalWrite(l1, HIGH);
delay(time);
//digitalWrite(forward_pin, LOW);
//digitalWrite(f1, LOW);
//digitalWrite(left_pin, LOW);
//digitalWrite(l1, LOW);
}

void reverse_left(int time){
digitalWrite(reverse_pin, HIGH);
//digitalWrite(re1, HIGH);
digitalWrite(left_pin, HIGH);
//digitalWrite(l1, HIGH);
delay(time);
//digitalWrite(reverse_pin, LOW);
//digitalWrite(re1, LOW);
//digitalWrite(left_pin, LOW);
//digitalWrite(l1, LOW);
}

void reset(){
digitalWrite(right_pin, LOW);
digitalWrite(left_pin, LOW);
digitalWrite(forward_pin, LOW);
digitalWrite(reverse_pin, LOW);
/digitalWrite(l1, LOW);
digitalWrite(r1, LOW);
digitalWrite(re1, LOW);
digitalWrite(f1, LOW);/
}

void send_command(int command, int time){
switch (command){

 //reset command
 case 0: reset(); break;

 // single command
 case 1: forward(time); break;
 case 2: reverse(time); break;
 case 3: right(time); break;
 case 4: left(time); break;

 //combination command
 case 6: forward_right(time); break;
 case 7: forward_left(time); break;
 case 8: reverse_right(time); break;
 case 9: reverse_left(time); break;

 default: Serial.print("Inalid Command\n");
}
}
