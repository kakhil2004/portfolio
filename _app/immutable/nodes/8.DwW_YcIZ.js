import{$ as e,I as t,L as n,Q as r,R as i,et as a,g as o,h as s,i as c,j as l,v as u}from"../chunks/CAt3Me7R.js";import"../chunks/t62M88qj.js";import"../chunks/ViJdONpo.js";var d=a({prerender:()=>!0}),f=u(`<details><summary><b> </b></summary> <br/> <pre class="language-'''"><code class="language-'''"> </code>
</pre></details>`);function p(n,a){let u=c(a,`data`,8),d=c(a,`sum`,8);var p=f(),m=t(p),h=t(m),g=t(h,!0);e(h),e(m);var _=i(m,4),v=t(_),y=t(v,!0);e(v),r(),e(_),e(p),l(()=>{s(g,d()),s(y,u())}),o(n,p)}var m=u(`<h1>Self-Gardener</h1> <p><a href="https://github.com/kakhil2004/esp32-testing" rel="nofollow">Click me for GitHub Link</a></p> <h5>Still in progress (Will add updates as I go)</h5> <h2>Why?</h2> <p>I bought a google home assistant and some lights and could control them using my voice. Why not try to use the same thing to water my garden and get some stats about it?</p> <h2>High Level Process (changed over time)</h2> <ol><li>Decide which communication system to use (WiFi, Bluetooth, NRF24L01 etc.)</li> <li>Wire up the electronics</li> <li>Connect it to <a href="https://sinric.pro/" rel="nofollow">Sinric Pro</a></li> <li>Complete!</li></ol> <h2>Step 1</h2> <h4>The device</h4> <p>Immediately I knew that an ESP32 is the way to go since it is tiny, uses much less power than a Raspberry PI but comes with in-built WiFi unlike a regular Arduino. There is also one more advantage that I discovered later.</p> <h4>Using the standard WiFi protocol 802.11 b/g/n</h4> <p>These protocols were super simple to use and after I connected it to my network. I could easily transmit data. The problem was the range was absolutely terrible. If I went more than 5 meters away while having a direct line from the ESP32 to the router, it would lose connection. This was extremely frustrating because it had already taken me so long to figure out everything to this point due to the lack of documentation.</p> <!> <h4>Research the LoRa protocol</h4> <p>After some research and realizing that the ESP’s antenna was just too small, I found the LoRa protocol. Apparently ESP32s without an external antenna could communicate with one another over huge ranges (500 meters). I could not believe it since the regular protocols performed so terribly.</p> <h4></h4> <div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/oz0a7Ur7nko?si=TRT9Fx0RM0AYx2Ty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe></div> <h4>Using the LR protocol</h4> <p>There isn’t proper code documentation on this protocol so it took me some time to find it and I was able to get it to work. After a few old forums I managed to create the following testing code:</p> <a href="https://github.com/kakhil2004/esp32-testing" target="_blank"><button>Click me to see code</button></a> <p>The problem was I couldn’t have LR running on the ESP32 and use normal Wi-Fi since they were two seperate protocols. To solve this I needed to combine two ESP32s, one that uses Wi-Fi and the other that talks to the devies in the house. Using the TX and RX pins, I could make the two communicate using the Serial monitor.</p> <h4>Creating a test server</h4> <p>Using Glitch I was able to test if it worked and it did, I will add pictures soon!</p>`,1);function h(e){var t=m();p(i(n(t),24),{sum:`Look here for the code for WiFi protocols 802.11 b/g/n`,data:`#include <WiFi.h>;
#include <HTTPClient.h>;
#include <ArduinoJson.h>;
#include <esp_wifi.h>;

const char* ssid  = "WiFi Name";
const char* password = "Password";

#define LED 2

IPAddress server(); // put server ip in the parenthesis 

void setup() {
  Serial.begin(9600);
  WiFi.setTxPower(WIFI_POWER_19_5dBm);
  WiFi.mode(WIFI_AP_STA);
  esp_wifi_set_protocol(WIFI_IF_STA, WIFI_PROTOCOL_11N);   //Change the N to B or G to try those protocols
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  pinMode(LED, OUTPUT);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(5000);
  }
  Serial.println("\\nConnected to Wifi");
  Serial.println(WiFi.localIP());
}


void loop() {
  if ((WiFi.status() == WL_CONNECTED)) {
    Serial.println("Accessing Server");

    HTTPClient client;

    client.begin(" route to server ");
    int httpCode = client.GET();
    Serial.println(httpCode);
    String payload = client.getString();
    payload.trim();
    Serial.println(payload);
    if (payload == "\\"On\\"") { 
      digitalWrite(LED, HIGH);
      Serial.println("Tried to turn on");
    } else {
      digitalWrite(LED, LOW);
      Serial.println("Tried to turn off");
    }

  } else {
    Serial.println("Connection lost");
  }   
  delay(5000);
}`}),r(20),o(e,t)}export{h as component,d as universal};