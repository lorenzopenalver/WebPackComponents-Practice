class myTag extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ['img', 'btn', 'h1','title','h2','h3','p','span']

    }
    attributeChangedCallback(attr, oldVal, newVal) {
     
        if (attr === 'img' && oldVal !== newVal) {
            this.img = newVal
        }
        if(attr === 'h1' && oldVal !== newVal){
            this.h1 = newVal
        }
        if (attr === 'h2' && oldVal !== newVal) {
            this.h2 = newVal
        }
        if(attr === 'h3' && oldVal !== newVal){
            this.h3 = newVal
        }
        if (attr === 'p' && oldVal !== newVal) {
            this.p = newVal
        }
        if (attr === 'btn' && oldVal !== newVal) {
            this.btn = newVal
        }
        if(attr === 'span' && oldVal !== newVal){
            this.span = newVal
        }
        if (attr === 'title' && oldVal !== newVal) {
            this.title = newVal
        }
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
      <section>
      <div class="logo-and-shoes-container">
      <h1 class="title">${this.title}</h1>
      <img src="${this.img}"/>
      </div>

      <div class="description-text-container">

      <div class="nike-zoom-text">
      <h1> ${this.h1} 
      </h1>
      <h3>${this.h3}</h3>

      <span> ${this.span} </span>

      </div>
     
      <p> ${this.p} </p>
      <div class="price-container">
      <h2> ${this.h2} </h2> 
      
      <a href="">${this.btn}</a>
      </div>
    
      </div>
      </section>
      ${this.getStyles()}`;
  
      return template;
    }
    getStyles() {
      return `
        <style>
        
        :host{
            --background-nike: #4855a0;
            --nike-title: #414b93;
            --text-container-background: #ffffff;
            --title-text-size: 28px;
            --secondary-text-color: #8a868b94;
            --buy-now-color: #4b55a5;
        }
       
        
        section{
            width: 95%;
            margin: 20px auto;
            display:flex;
            flex-direction: column;
            min-width: 310px;
              
        }
        .title{
            color: var(--nike-title);
            font-size: 90px;
            margin: 10px 0 0 15px;
            position: relative;
            font-family: helvetica;
        }
        .logo-and-shoes-container{
            background: var(--background-nike) ;
        }
        .description-text-container{
            background: var(--text-container-background);
            margin-top: -21px;
        }
        .description-text-container p{
            width: 95%;
            margin: 10px 0px 5px 7px;
            font-size: 16px;
            text-align: start;
            font-family: Helvetica;
        }
          img{
           max-height: 700px;
            width: 80%;
            position: relative;
            bottom: -20px;
            right: -40px
          }
          .nike-zoom-text h1{
            font-size: var(--title-text-size);
            margin: 15px 0 0 7px;
            font-family: helvetica;
            font-weight: 700;
        }
        .nike-zoom-text{
            display:flex;
            align-items: end;
            flex-wrap: wrap;
            justify-content: start;
            font-family: helvetica;
        }
        .nike-zoom-text h3{
            color: var(--secondary-text-color);
            margin: 0 5px 0px 7px;
            font-size: 15px;
            letter-spacing: 0.9px;
            padding-bottom: 3px;
        }
        .nike-zoom-text span{
            color: var(--secondary-text-color);
            padding-bottom: 3px;
            margin-left: 7px;
            margin-top:10px;
            font-size: 12px;
            letter-spacing: 0.9px;
            font-weight: 600;
        }

        .price-container{
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        .price-container h2{
            color: var(--secondary-text-color);
            margin-left: 10px;

        }
        .price-container a{
            color: var(--text-container-background);
            margin-right: 10px;
            font-size: 15px;
            background-color: var(--buy-now-color);
            padding: 9px;
            border-radius: 15px;
            box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.75);
            border: #454e96 0.5px solid;
            text-decoration: none;
        }
        @media(min-width: 1024px){
        section{
            display:flex;
            flex-direction: row;
            align-items: center;
            justify-content:center;
  
        }
        img{
            height: 520px;
            width: 720px;
            position: relative;
            transform: rotate(-25deg);
            top: -80px;
            left: -170px;

        }
        .logo-and-shoes-container{
            width:100%;
            height: 500px;
            max-width: 500px;
        }
        .description-text-container{
            width:100%;
            max-width: 400px;
            height: 500px;
            align-items: center;
            display: flex;
            flex-direction: column;
            margin-top: 0;
        }
        .title{
            font-size: 120px;
        }
        .nike-zoom-text h1{
            font-size: 40px;
            width:100%;
            margin-top: 50px;
            margin-left: 50px;
        }
        .nike-zoom-text h3{
            margin-left: 50px;
        }
        .nike-zoom-text span{
            font-size: 15px;
        }
        .description-text-container p{
            margin-top: 30px;
            margin-bottom: 20px;
            font-size: 21px;
            text-align: start;
            width: 70%
        }
        .price-container{
            width: 100%;
        }
        .price-container a{
            margin-right: 30px;
        }
        .price-container h2{
            margin-left: 30px;
        }
        }
        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
      this.render();
    }
  }
  customElements.define("my-tag", myTag);