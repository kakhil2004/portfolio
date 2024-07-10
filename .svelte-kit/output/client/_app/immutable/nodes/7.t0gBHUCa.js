import{s as dt,n as tt}from"../chunks/scheduler.BfJEPAwo.js";import{S as pt,i as mt,e as o,a as X,s as r,c as s,b as R,d as Z,f as e,g as u,n as et,h as l,j as b,k as ct,o as ft,m as c,p as vt,q as Ct,t as _t,r as xt,u as yt}from"../chunks/index.DMVctPuR.js";const wt=!0,Et=Object.freeze(Object.defineProperty({__proto__:null,prerender:wt},Symbol.toStringTag,{value:"Module"}));function bt(f){let n,v,d,h,C,g,_,w,x,m,A;return{c(){n=o("details"),v=o("summary"),d=o("b"),h=X(f[1]),C=r(),g=o("br"),_=r(),w=o("pre"),x=o("code"),m=X(f[0]),A=X(`\r
`),this.h()},l(p){n=s(p,"DETAILS",{});var a=R(n);v=s(a,"SUMMARY",{});var M=R(v);d=s(M,"B",{});var T=R(d);h=Z(T,f[1]),T.forEach(e),M.forEach(e),C=u(a),g=s(a,"BR",{}),_=u(a),w=s(a,"PRE",{class:!0});var y=R(w);x=s(y,"CODE",{class:!0});var D=R(x);m=Z(D,f[0]),D.forEach(e),A=Z(y,`\r
`),y.forEach(e),a.forEach(e),this.h()},h(){et(x,"class","language-'''"),et(w,"class","language-'''")},m(p,a){l(p,n,a),b(n,v),b(v,d),b(d,h),b(n,C),b(n,g),b(n,_),b(n,w),b(w,x),b(x,m),b(w,A)},p(p,[a]){a&2&&ct(h,p[1]),a&1&&ct(m,p[0])},i:tt,o:tt,d(p){p&&e(n)}}}function gt(f,n,v){let{data:d}=n,{sum:h}=n;return f.$$set=C=>{"data"in C&&v(0,d=C.data),"sum"in C&&v(1,h=C.sum)},[d,h]}class St extends pt{constructor(n){super(),mt(this,n,gt,bt,dt,{data:0,sum:1})}}function Tt(f){let n,v="Self-Gardener",d,h,C='<a href="https://github.com/kakhil2004/esp32-testing" rel="nofollow">Click me for GitHub Link</a>',g,_,w="Still in progress (Will add updates as I go)",x,m,A="Why?",p,a,M="I bought a google home assistant and some lights and could control them using my voice. Why not try to use the same thing to water my garden and get some stats about it?",T,y,D="High Level Process",z,W,it='<li>Decide which communicaiton system to use (WiFi, Bluetooth, NRF24L01 etc.)</li> <li>Wire up the electronics</li> <li>Connect it to <a href="https://sinric.pro/" rel="nofollow">Sinric Pro</a></li> <li>Complete!</li>',j,I,lt="Step 1",q,P,nt="The device",B,E,ot="Immediately I knew that an ESP32 is the way to go since it is tiny, uses much less power than a Raspberry PI but comes with in-built WiFi unlike a regular Arduino. There is also one more advantage that I discovered later.",G,L,st="Using the standard WiFi protocol 802.11 b/g/n",U,H,at="These protocols were super simple to use and after I connected it to my network. I could easily transmit data. The problem was the range was absolutely terrible. If I went more than 5 meters away while having a direct line from the ESP32 to the router, it would lose connection. This was extremely frustrating because it had already taken me so long to figure out everything to this point due to the lack of documentation.",$,F,Y,k,rt="Research the LoRa protocol",J,O,ut="After some research and realizing that the ESP’s antenna was just too small, I found the LoRa protocol. Apparently ESP32s without an external antenna could communicate with one another over huge ranges (500 meters). I could not believe it since the regular protocols performed so terribly.",V,N,K,S,ht='<iframe width="560" height="315" src="https://www.youtube.com/embed/oz0a7Ur7nko?si=TRT9Fx0RM0AYx2Ty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>',Q;return F=new St({props:{sum:"Look here for the code for WiFi protocols 802.11 b/g/n",data:f[0]}}),{c(){n=o("h1"),n.textContent=v,d=r(),h=o("p"),h.innerHTML=C,g=r(),_=o("h5"),_.textContent=w,x=r(),m=o("h2"),m.textContent=A,p=r(),a=o("p"),a.textContent=M,T=r(),y=o("h2"),y.textContent=D,z=r(),W=o("ol"),W.innerHTML=it,j=r(),I=o("h2"),I.textContent=lt,q=r(),P=o("h4"),P.textContent=nt,B=r(),E=o("p"),E.textContent=ot,G=r(),L=o("h4"),L.textContent=st,U=r(),H=o("p"),H.textContent=at,$=r(),ft(F.$$.fragment),Y=r(),k=o("h4"),k.textContent=rt,J=r(),O=o("p"),O.textContent=ut,V=r(),N=o("h4"),K=r(),S=o("div"),S.innerHTML=ht,this.h()},l(t){n=s(t,"H1",{"data-svelte-h":!0}),c(n)!=="svelte-1vm0idr"&&(n.textContent=v),d=u(t),h=s(t,"P",{"data-svelte-h":!0}),c(h)!=="svelte-1okoqye"&&(h.innerHTML=C),g=u(t),_=s(t,"H5",{"data-svelte-h":!0}),c(_)!=="svelte-ewv9e9"&&(_.textContent=w),x=u(t),m=s(t,"H2",{"data-svelte-h":!0}),c(m)!=="svelte-lerqz1"&&(m.textContent=A),p=u(t),a=s(t,"P",{"data-svelte-h":!0}),c(a)!=="svelte-vwb3wt"&&(a.textContent=M),T=u(t),y=s(t,"H2",{"data-svelte-h":!0}),c(y)!=="svelte-1wzzish"&&(y.textContent=D),z=u(t),W=s(t,"OL",{"data-svelte-h":!0}),c(W)!=="svelte-zmsgjg"&&(W.innerHTML=it),j=u(t),I=s(t,"H2",{"data-svelte-h":!0}),c(I)!=="svelte-ushnq7"&&(I.textContent=lt),q=u(t),P=s(t,"H4",{"data-svelte-h":!0}),c(P)!=="svelte-14i9luh"&&(P.textContent=nt),B=u(t),E=s(t,"P",{"data-svelte-h":!0}),c(E)!=="svelte-kxq196"&&(E.textContent=ot),G=u(t),L=s(t,"H4",{"data-svelte-h":!0}),c(L)!=="svelte-bb08dg"&&(L.textContent=st),U=u(t),H=s(t,"P",{"data-svelte-h":!0}),c(H)!=="svelte-1eg3mdf"&&(H.textContent=at),$=u(t),vt(F.$$.fragment,t),Y=u(t),k=s(t,"H4",{"data-svelte-h":!0}),c(k)!=="svelte-y0f5is"&&(k.textContent=rt),J=u(t),O=s(t,"P",{"data-svelte-h":!0}),c(O)!=="svelte-dfbnfi"&&(O.textContent=ut),V=u(t),N=s(t,"H4",{}),R(N).forEach(e),K=u(t),S=s(t,"DIV",{class:!0,"data-svelte-h":!0}),c(S)!=="svelte-ju4td8"&&(S.innerHTML=ht),this.h()},h(){et(S,"class","video-container")},m(t,i){l(t,n,i),l(t,d,i),l(t,h,i),l(t,g,i),l(t,_,i),l(t,x,i),l(t,m,i),l(t,p,i),l(t,a,i),l(t,T,i),l(t,y,i),l(t,z,i),l(t,W,i),l(t,j,i),l(t,I,i),l(t,q,i),l(t,P,i),l(t,B,i),l(t,E,i),l(t,G,i),l(t,L,i),l(t,U,i),l(t,H,i),l(t,$,i),Ct(F,t,i),l(t,Y,i),l(t,k,i),l(t,J,i),l(t,O,i),l(t,V,i),l(t,N,i),l(t,K,i),l(t,S,i),Q=!0},p:tt,i(t){Q||(_t(F.$$.fragment,t),Q=!0)},o(t){xt(F.$$.fragment,t),Q=!1},d(t){t&&(e(n),e(d),e(h),e(g),e(_),e(x),e(m),e(p),e(a),e(T),e(y),e(z),e(W),e(j),e(I),e(q),e(P),e(B),e(E),e(G),e(L),e(U),e(H),e($),e(Y),e(k),e(J),e(O),e(V),e(N),e(K),e(S)),yt(F,t)}}}function Wt(f){return[`#include <WiFi.h>;
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
}`]}class Lt extends pt{constructor(n){super(),mt(this,n,Wt,Tt,dt,{})}}export{Lt as component,Et as universal};
