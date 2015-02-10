// 'use strict';

Array.prototype.moveUp = function(value, by) {
    var index = this.indexOf(value),     
        newPos = index - (by || 1);
    
    if(index === -1) 
        throw new Error("Element not found in array");
    
    if(newPos < 0) 
        newPos = 0;
        
    this.splice(index,1);
    this.splice(newPos,0,value);
};

Array.prototype.moveDown = function(value, by) {
    var index = this.indexOf(value),     
        newPos = index + (by || 1);
    
    if(index === -1) 
        throw new Error("Element not found in array");
    
    if(newPos >= this.length) 
        newPos = this.length;
    
    this.splice(index, 1);
    this.splice(newPos,0,value);
};

if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(what, i) {
        i = i || 0;
        var L = this.length;
        while (i < L) {
            if(this[i] === what) return i;
            ++i;
        }
        return -1;
    };
}

Array.prototype.removeElement = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
