import $ from '../core';

$.prototype.setAttr = function(attribute, value){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(attribute, value);
    }

    return this;
};

$.prototype.getAttr = function(attribute){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute) {
            continue;
        }
        this[i].getAttribute(attribute);
        console.log(this[i].getAttribute(attribute));
    }

    return this;
};

$.prototype.removeAttr = function(attribute){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].removeAttribute) {
            continue;
        }
        this[i].removeAttribute(attribute);
    }

    return this;
};

$.prototype.toggleAttr = function(attribute, value) {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute && !this[i].setAttribute) {
            continue;
        }

        if(this[i].getAttribute(attribute)) {
            this[i].removeAttribute(attribute);
        } else {
            this[i].setAttribute(attribute, value);
        }
    }

    return this;
};

$.prototype.setMoreAttr = function(...attributes){
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute) {
            continue;
        }
        for (let item = 0; item < attributes.length; item++) {
            if ((item + 1) % 2 == 0) {
                this[i].setAttribute(attributes[item - 1], attributes[item]);
            } 
        }
        
    }

    return this;
};