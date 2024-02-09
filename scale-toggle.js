AFRAME.registerComponent('scale-toggle',{
    init: function() {
        let el = this.el;
        var cam = document.querySelector("#rig");
        var box = document.querySelector("#room"); 
        var imgO = document.querySelector("#A01");
        var img7 = document.querySelector("#A07");
        this.togglescale = function() {
            console.log('clicked');
            box.setAttribute('animation','property:scale; to:2 2 2; dur:4500; loop:false');
            cam.setAttribute('animation','property:position; to:0 0 0; dur:4500 loop:false');
            imgO.setAttribute('opacity','0');
            img7.setAttribute('opacity','1');
        }
        this.el.addEventListener('click',this.togglescale);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.togglescale);

    }
})