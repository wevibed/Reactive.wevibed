
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WA="263772501205";

const images={
 hero:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
 laptop:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=900&q=85",
 desktop:"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=85",
 monitor:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
 accessories:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=85",
 repair:"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=85",
 networking:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
 printer:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=85",
 gaming:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85",
};

function WAButton(){
 return <a className="wa" href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello Reactive Computers, I would like to enquire about your products/services.")}`} aria-label="Chat on WhatsApp">⌕<span>WhatsApp</span></a>
}
function Header(){
 return <><div className="top"><span>📍 Shop C1, Eastgate Market, Cnr Robert Mugabe & Wynne St, Harare</span><a href="tel:+263772501205">☎ 077 250 1205</a></div>
 <header><a className="brand" href="#"><span className="brandMark">▱</span><span>REACTIVE<small>COMPUTERS</small></span></a>
 <nav><a href="#products">Products</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
 <div className="actions"><button aria-label="Search">⌕</button><button aria-label="Menu">☰</button></div></header></>
}
function Card({image,title,text}){return <article className="card"><img src={image} alt={title}/><div><h3>{title}</h3><p>{text}</p><a href="#contact">Enquire →</a></div></article>}
function App(){
 return <div><Header/>
 <main>
  <section className="hero">
   <div className="heroCopy"><p className="eyebrow">COMPUTERS • IT • SUPPORT</p><h1>TECHNOLOGY.<br/><b>REAL SOLUTIONS.</b></h1>
   <p>Computers, laptops, accessories, repairs, upgrades, networking and IT services for home, business and professional use.</p>
   <a className="btn" href="#products">BROWSE PRODUCTS →</a></div>
   <img src={images.hero} alt="Laptop computer"/>
  </section>

  <section id="products" className="section"><div className="sectionHead"><div><p className="eyebrow blue">SHOP TECHNOLOGY</p><h2>Products & equipment</h2></div><a href="#contact">Ask about stock →</a></div>
   <div className="grid">
    <Card image={images.laptop} title="Laptops" text="New and refurbished laptops for home, study and professional use."/>
    <Card image={images.desktop} title="Desktops & PCs" text="Desktop computers and custom-built PC options."/>
    <Card image={images.monitor} title="Monitors" text="Displays and computer equipment for work and entertainment."/>
    <Card image={images.accessories} title="Accessories & Components" text="Computer peripherals, storage and supporting equipment."/>
    <Card image={images.printer} title="Printers & Supplies" text="Printers and related computer consumables."/>
    <Card image={images.gaming} title="Gaming PCs" text="Gaming-focused computer solutions and hardware."/>
   </div>
  </section>

  <section id="services" className="serviceBand"><div><p className="eyebrow blue">TECHNICAL SERVICES</p><h2>Keep your technology running.</h2><p>Reactive Computers provides computer repairs, hardware upgrades, software installations, networking and IT support.</p></div><img src={images.repair} alt="Computer repair technician"/></section>

  <section className="section serviceGrid">
   <Card image={images.repair} title="Computer Repairs & Upgrades" text="Laptop and desktop repairs, servicing, hardware repairs, SSD and RAM upgrades, screen replacements and software support."/>
   <Card image={images.networking} title="IT Support & Networking" text="Network setup, Wi‑Fi solutions, printer configuration and technical IT support."/>
   <Card image={images.accessories} title="Computer Accessories & Components" text="Accessories and components for everyday computing and upgrades."/>
  </section>

  <section className="split">
   <div><p className="eyebrow blue">FOR HOME & BUSINESS</p><h2>Technology for the way you work.</h2><p>From everyday computing to business IT support, the goal is simple: reliable technology and practical technical help.</p><a className="btn dark" href={`https://wa.me/${WA}`}>CHAT ON WHATSAPP →</a></div>
   <img src={images.networking} alt="Networking equipment"/>
  </section>

  <section id="contact" className="contact"><div><p className="eyebrow blue">VISIT REACTIVE COMPUTERS</p><h2>Find us at Eastgate Market.</h2><p><b>Shop C1, Eastgate Market</b><br/>Cnr Robert Mugabe & Wynne St<br/>Harare, Zimbabwe</p><p><a href="tel:+263772501205">077 250 1205</a><br/><a href="tel:+263782769292">078 276 9292</a><br/><a href="mailto:sales@reactivecomputers.co.zw">sales@reactivecomputers.co.zw</a></p></div>
   <div className="contactBox"><h3>Need a product or service?</h3><p>Message Reactive Computers directly to ask about availability, repairs, upgrades or IT support.</p><a className="btn" href={`https://wa.me/${WA}`}>MESSAGE ON WHATSAPP →</a></div>
  </section>
 </main>
 <footer><div className="brand footerBrand"><span className="brandMark">▱</span><span>REACTIVE<small>COMPUTERS</small></span></div><p>Computers • IT Support • Repairs • Networking</p><p>© 2026 Reactive Computers</p></footer>
 <WAButton/>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
