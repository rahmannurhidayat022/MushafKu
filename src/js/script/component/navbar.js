class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="teal light-blue darken-4" role="navigation" style="overflow: hidden;">
            <div class="nav-wrapper container">
                <a href="#!" class="brand-logo"><i class="material-icons">class</i>MushafKu</a>
                <a href="#" class="sidenav-trigger" data-target="nav-mobile">☰</a>
                
                <ul class="topnav right hide-on-med-and-down"></ul>
                <ul class="sidenav" id="nav-mobile"></ul>
            </div>
        </nav>
        `;
    }
};

customElements.define("nav-bar", Navbar);