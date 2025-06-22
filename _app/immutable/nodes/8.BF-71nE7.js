import{s as Et,n as ct}from"../chunks/scheduler.Dw93JyHj.js";import{S as Ht,i as kt,e as n,a as dt,s as a,c as o,b as G,d as pt,f as e,g as r,n as $,h as l,j as y,k as Lt,o as Ft,m as u,p as Rt,q as At,t as Mt,r as Ot,u as Dt}from"../chunks/index.DdJWsZXy.js";const Nt=!0,Yt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Nt},Symbol.toStringTag,{value:"Module"}));function Ut(f){let s,v,p,d,C,T,_,b,x,m,q;return{c(){s=n("details"),v=n("summary"),p=n("b"),d=dt(f[1]),C=a(),T=n("br"),_=a(),b=n("pre"),x=n("code"),m=dt(f[0]),q=dt(`
`),this.h()},l(c){s=o(c,"DETAILS",{});var h=G(s);v=o(h,"SUMMARY",{});var j=G(v);p=o(j,"B",{});var I=G(p);d=pt(I,f[1]),I.forEach(e),j.forEach(e),C=r(h),T=o(h,"BR",{}),_=r(h),b=o(h,"PRE",{class:!0});var w=G(b);x=o(w,"CODE",{class:!0});var z=G(x);m=pt(z,f[0]),z.forEach(e),q=pt(w,`
`),w.forEach(e),h.forEach(e),this.h()},h(){$(x,"class","language-'''"),$(b,"class","language-'''")},m(c,h){l(c,s,h),y(s,v),y(v,p),y(p,d),y(s,C),y(s,T),y(s,_),y(s,b),y(b,x),y(x,m),y(b,q)},p(c,[h]){h&2&&Lt(d,c[1]),h&1&&Lt(m,c[0])},i:ct,o:ct,d(c){c&&e(s)}}}function qt(f,s,v){let{data:p}=s,{sum:d}=s;return f.$$set=C=>{"data"in C&&v(0,p=C.data),"sum"in C&&v(1,d=C.sum)},[p,d]}class Gt extends Ht{constructor(s){super(),kt(this,s,qt,Ut,Et,{data:0,sum:1})}}function jt(f){let s,v="Self-Gardener",p,d,C='<a href="https://github.com/kakhil2004/esp32-testing" rel="nofollow">Click me for GitHub Link</a>',T,_,b="Still in progress (Will add updates as I go)",x,m,q="Why?",c,h,j="I bought a google home assistant and some lights and could control them using my voice. Why not try to use the same thing to water my garden and get some stats about it?",I,w,z="High Level Process (changed over time)",Y,P,mt='<li>Decide which communication system to use (WiFi, Bluetooth, NRF24L01 etc.)</li> <li>Wire up the electronics</li> <li>Connect it to <a href="https://sinric.pro/" rel="nofollow">Sinric Pro</a></li> <li>Complete!</li>',X,W,ft="Step 1",J,L,vt="The device",V,E,Ct="Immediately I knew that an ESP32 is the way to go since it is tiny, uses much less power than a Raspberry PI but comes with in-built WiFi unlike a regular Arduino. There is also one more advantage that I discovered later.",K,H,_t="Using the standard WiFi protocol 802.11 b/g/n",Q,k,xt="These protocols were super simple to use and after I connected it to my network. I could easily transmit data. The problem was the range was absolutely terrible. If I went more than 5 meters away while having a direct line from the ESP32 to the router, it would lose connection. This was extremely frustrating because it had already taken me so long to figure out everything to this point due to the lack of documentation.",Z,F,tt,R,wt="Research the LoRa protocol",et,A,bt="After some research and realizing that the ESP’s antenna was just too small, I found the LoRa protocol. Apparently ESP32s without an external antenna could communicate with one another over huge ranges (500 meters). I could not believe it since the regular protocols performed so terribly.",it,B,lt,S,yt='<iframe width="560" height="315" src="https://www.youtube.com/embed/oz0a7Ur7nko?si=TRT9Fx0RM0AYx2Ty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>',nt,M,gt="Using the LR protocol",ot,O,Tt="There isn’t proper code documentation on this protocol so it took me some time to find it and I was able to get it to work. After a few old forums I managed to create the following testing code:",st,g,St="<button>Click me to see code</button>",at,D,It="The problem was I couldn’t have LR running on the ESP32 and use normal Wi-Fi since they were two seperate protocols. To solve this I needed to combine two ESP32s, one that uses Wi-Fi and the other that talks to the devies in the house. Using the TX and RX pins, I could make the two communicate using the Serial monitor.",rt,N,Pt="Creating a test server",ut,U,Wt="Using Glitch I was able to test if it worked and it did, I will add pictures soon!",ht;return F=new Gt({props:{sum:"Look here for the code for WiFi protocols 802.11 b/g/n",data:f[0]}}),{c(){s=n("h1"),s.textContent=v,p=a(),d=n("p"),d.innerHTML=C,T=a(),_=n("h5"),_.textContent=b,x=a(),m=n("h2"),m.textContent=q,c=a(),h=n("p"),h.textContent=j,I=a(),w=n("h2"),w.textContent=z,Y=a(),P=n("ol"),P.innerHTML=mt,X=a(),W=n("h2"),W.textContent=ft,J=a(),L=n("h4"),L.textContent=vt,V=a(),E=n("p"),E.textContent=Ct,K=a(),H=n("h4"),H.textContent=_t,Q=a(),k=n("p"),k.textContent=xt,Z=a(),Ft(F.$$.fragment),tt=a(),R=n("h4"),R.textContent=wt,et=a(),A=n("p"),A.textContent=bt,it=a(),B=n("h4"),lt=a(),S=n("div"),S.innerHTML=yt,nt=a(),M=n("h4"),M.textContent=gt,ot=a(),O=n("p"),O.textContent=Tt,st=a(),g=n("a"),g.innerHTML=St,at=a(),D=n("p"),D.textContent=It,rt=a(),N=n("h4"),N.textContent=Pt,ut=a(),U=n("p"),U.textContent=Wt,this.h()},l(t){s=o(t,"H1",{"data-svelte-h":!0}),u(s)!=="svelte-1vm0idr"&&(s.textContent=v),p=r(t),d=o(t,"P",{"data-svelte-h":!0}),u(d)!=="svelte-1okoqye"&&(d.innerHTML=C),T=r(t),_=o(t,"H5",{"data-svelte-h":!0}),u(_)!=="svelte-ewv9e9"&&(_.textContent=b),x=r(t),m=o(t,"H2",{"data-svelte-h":!0}),u(m)!=="svelte-lerqz1"&&(m.textContent=q),c=r(t),h=o(t,"P",{"data-svelte-h":!0}),u(h)!=="svelte-vwb3wt"&&(h.textContent=j),I=r(t),w=o(t,"H2",{"data-svelte-h":!0}),u(w)!=="svelte-tgtk4b"&&(w.textContent=z),Y=r(t),P=o(t,"OL",{"data-svelte-h":!0}),u(P)!=="svelte-2ro0ei"&&(P.innerHTML=mt),X=r(t),W=o(t,"H2",{"data-svelte-h":!0}),u(W)!=="svelte-ushnq7"&&(W.textContent=ft),J=r(t),L=o(t,"H4",{"data-svelte-h":!0}),u(L)!=="svelte-14i9luh"&&(L.textContent=vt),V=r(t),E=o(t,"P",{"data-svelte-h":!0}),u(E)!=="svelte-kxq196"&&(E.textContent=Ct),K=r(t),H=o(t,"H4",{"data-svelte-h":!0}),u(H)!=="svelte-bb08dg"&&(H.textContent=_t),Q=r(t),k=o(t,"P",{"data-svelte-h":!0}),u(k)!=="svelte-1eg3mdf"&&(k.textContent=xt),Z=r(t),Rt(F.$$.fragment,t),tt=r(t),R=o(t,"H4",{"data-svelte-h":!0}),u(R)!=="svelte-y0f5is"&&(R.textContent=wt),et=r(t),A=o(t,"P",{"data-svelte-h":!0}),u(A)!=="svelte-dfbnfi"&&(A.textContent=bt),it=r(t),B=o(t,"H4",{}),G(B).forEach(e),lt=r(t),S=o(t,"DIV",{class:!0,"data-svelte-h":!0}),u(S)!=="svelte-ju4td8"&&(S.innerHTML=yt),nt=r(t),M=o(t,"H4",{"data-svelte-h":!0}),u(M)!=="svelte-16gq1bl"&&(M.textContent=gt),ot=r(t),O=o(t,"P",{"data-svelte-h":!0}),u(O)!=="svelte-gnrgs0"&&(O.textContent=Tt),st=r(t),g=o(t,"A",{href:!0,target:!0,"data-svelte-h":!0}),u(g)!=="svelte-4zc7fy"&&(g.innerHTML=St),at=r(t),D=o(t,"P",{"data-svelte-h":!0}),u(D)!=="svelte-1xey7h8"&&(D.textContent=It),rt=r(t),N=o(t,"H4",{"data-svelte-h":!0}),u(N)!=="svelte-105myhh"&&(N.textContent=Pt),ut=r(t),U=o(t,"P",{"data-svelte-h":!0}),u(U)!=="svelte-t2agd4"&&(U.textContent=Wt),this.h()},h(){$(S,"class","video-container"),$(g,"href","https://github.com/kakhil2004/esp32-testing"),$(g,"target","_blank")},m(t,i){l(t,s,i),l(t,p,i),l(t,d,i),l(t,T,i),l(t,_,i),l(t,x,i),l(t,m,i),l(t,c,i),l(t,h,i),l(t,I,i),l(t,w,i),l(t,Y,i),l(t,P,i),l(t,X,i),l(t,W,i),l(t,J,i),l(t,L,i),l(t,V,i),l(t,E,i),l(t,K,i),l(t,H,i),l(t,Q,i),l(t,k,i),l(t,Z,i),At(F,t,i),l(t,tt,i),l(t,R,i),l(t,et,i),l(t,A,i),l(t,it,i),l(t,B,i),l(t,lt,i),l(t,S,i),l(t,nt,i),l(t,M,i),l(t,ot,i),l(t,O,i),l(t,st,i),l(t,g,i),l(t,at,i),l(t,D,i),l(t,rt,i),l(t,N,i),l(t,ut,i),l(t,U,i),ht=!0},p:ct,i(t){ht||(Mt(F.$$.fragment,t),ht=!0)},o(t){Ot(F.$$.fragment,t),ht=!1},d(t){t&&(e(s),e(p),e(d),e(T),e(_),e(x),e(m),e(c),e(h),e(I),e(w),e(Y),e(P),e(X),e(W),e(J),e(L),e(V),e(E),e(K),e(H),e(Q),e(k),e(Z),e(tt),e(R),e(et),e(A),e(it),e(B),e(lt),e(S),e(nt),e(M),e(ot),e(O),e(st),e(g),e(at),e(D),e(rt),e(N),e(ut),e(U)),Dt(F,t)}}}function zt(f){return[`#include <WiFi.h>;
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
}`]}class Xt extends Ht{constructor(s){super(),kt(this,s,zt,jt,Et,{})}}export{Xt as component,Yt as universal};
