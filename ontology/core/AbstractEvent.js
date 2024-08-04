const { Resource } = require('./Resource.js');

class AbstractEvent extends Resource{
    constructor(allControllers) {
          super(allControllers)
          this.attributes = [];
          
        }

}

module.exports.AbstractEvent = AbstractEvent;
