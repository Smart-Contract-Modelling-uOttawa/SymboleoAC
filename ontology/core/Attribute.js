const { Resource } = require('./Resource.js');

class Attribute extends Resource {
    // Constructor
    constructor(name,value,allController) {
        super(allController);
        this._name = name;
        this._value = value;
    }
    //utility function
    read(){
        return this._value
    }
    
    //utility function
    write(aValue){
        this._value = aValue
        return true;
    }

    // Interface method
    delete() {
        super.delete();
    }
}


module.exports.Attribute = Attribute
