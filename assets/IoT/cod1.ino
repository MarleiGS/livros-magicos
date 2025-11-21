#define BOTAO 2
#define LED_VERMELHO 3
#define LED_VERDE 4
#define BUZZER 5

void setup() {
  pinMode(BOTAO, INPUT_PULLUP); // usa resistor interno
  pinMode(LED_VERMELHO, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  // estado inicial
  digitalWrite(LED_VERMELHO, HIGH);
  digitalWrite(LED_VERDE, LOW);
  noTone(BUZZER);
}

void loop() {
  int leitura = digitalRead(BOTAO);

  if (leitura == LOW) { // botão pressionado
    digitalWrite(LED_VERMELHO, LOW);
    digitalWrite(LED_VERDE, HIGH);
    tone(BUZZER, 1000, 200); // bip rápido
  } 
  else { // botão solto
    digitalWrite(LED_VERMELHO, HIGH);
    digitalWrite(LED_VERDE, LOW);
    noTone(BUZZER);
  }
}
