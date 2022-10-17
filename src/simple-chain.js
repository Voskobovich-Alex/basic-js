const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
    if(value) this.chain.push(`( ${value} )`);
    else if(value == null || value == 0 || isNaN(value)) this.chain.push(`( ${value} )`);
    else this.chain.push("");
    return this;
    
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position < this.getLength()) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
