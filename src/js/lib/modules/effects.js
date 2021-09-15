import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElepsed = time - timeStart;
        let complection = Math.min(timeElepsed / dur, 1);

        cb(complection);

        if (timeElepsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.techFadeIn = function(dur, display, fin, i) {
    this[i].style.display = display || 'block';

    const _fadeIn = (complection) => {
        this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    
    
    return ani;
};

$.prototype.techFadeOut = function(dur, fin, i) {
    const _fadeOut = (complection) => {
        this[i].style.opacity = 1 - complection;
        if (complection === 1) {
            this[i].style.display = 'none';
        }
        
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    
    return ani;
};

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
            /* this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };
    
            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani); */
            requestAnimationFrame(this.techFadeIn(dur, display, fin, i));
    }
    
    return this;
};

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {
        /* const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
            
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani); */
        requestAnimationFrame(this.techFadeOut(dur, fin, i));
    }

    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            /* this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };

            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani); */

            requestAnimationFrame(this.techFadeIn(dur, display, fin, i));
        } else {
            /* const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = 'none';
                }
                
            };
    
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani); */

            requestAnimationFrame(this.techFadeOut(dur, fin, i));
        }
    }
    return this;
};