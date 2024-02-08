AFRAME.registerComponent('scale-toggle',{
    init: function() {
        let el = this.el;
        var cam = document.querySelector("#rig");
        this.togglescale = function() {
            console.log('clicked');
            el.setAttribute('animation','property:scale; to:3 7 3; dur:4500; loop:false');
            cam.setAttribute('animation','property:position; to:0 1.5 1; dur:4500 loop:false');
        }
        this.el.addEventListener('click',this.togglescale);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.togglescale);

    }
})