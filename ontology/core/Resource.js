
class Resource{
  constructor(allController) {
    this._type = 'Resource'
    this._controller = [];
    if(typeof allController === 'object' && !Array.isArray(allController)){
      if(allController === null)
      return
      if(typeof allController === 'undefined')
      return
      let didAddController = this.addController(allController)
    }else{
      if (typeof allController === 'undefined' || allController === null || allController.length <= 0 || typeof allController[0] === 'undefined') { //|| !Array.isArray(allController)
        return;
      }
      let didAddController = this.setController(allController);
    }
}

// INTERFACE


// Code from template association_GetMany

getController(index) {
  let aController = this._controller[index];
  return aController;
}

getController() {
  let newController = Object.freeze(this._controller);
  return newController;
}

//Utlity function 
findController(aController){
  let isController = false
  this._controller.forEach(obj => {if(obj === aController){
    isController = true;
    return isController
  }  
  
})
  return  isController  
}

numberOfController() {
  let number = this._controller.length;
  return number;
}

hasController() {
  let has = this._controller.length > 0;
  return has;
}

indexOfController(aController) {
  let index = this._controller.indexOf(aController);
  return index;
}

/* Code from template association_MinimumNumberOfMethod */
// deleted static from here
minimumNumberOfController() {
  return 1;
}

/* Code from template association_AddUnidirectionalMStar */
addController(aController) {
  let wasAdded = false;
  if (!this._controller.includes(aController) && !(typeof aController === 'undefined') 
  && !(aController === null)) {
  this._controller.push(aController);
  wasAdded = true;
  }
  return wasAdded; 
}

removeController(aController) {
  let wasRemoved = false;
  if (!this._controller.includes(aController)) { return wasRemoved; }
  if (this.numberOfController() <= this.minimumNumberOfController()) { return wasRemoved; }
  let index = this._controller.indexOf(aController);
  this._controller.splice(index, 1);
  wasRemoved = true;
  return wasRemoved;
}

/* Code from template association_SetUnidirectionalMStar */
// setController method
setController(newController) {
  let wasSet = false;
  for (let aController of newController) {
    if (!this._controller.includes(aController) && !(typeof aController === 'undefined') && !(aController === null)) {
      this._controller.push(aController);
      //this.Controller = [verifiedController];
      wasSet = true;
      }
  }
  return wasSet;
}

/* Code from template association_AddIndexControlFunctions */
// addControllerAt method
addControllerAt(aController, index) {
  let wasAdded = false;
  if (this.addController(aController)) {
      if (index < 0) { index = 0; }
      if (index > this.numberOfController()) { index = this.numberOfController(); }
      this._controller.splice(index, 0, aController);
      wasAdded = true;
  }
  return wasAdded;
}

// addOrMoveControllerAt method
addOrMoveControllerAt(aController, index) {
  let wasAdded = false;
  if (this._controller.includes(aController)) {
      if (index < 0) { index = 0; }
      if (index > this.numberOfController()) { index = this.numberOfController(); }
      this._controller.splice(this._controller.indexOf(aController), 1);
      this._controller.splice(index, 0, aController);
      wasAdded = true;
  } else {
      wasAdded = this.addControllerAt(aController, index);
  }
  return wasAdded;
}

// delete method
delete() {
  this._controller = [];
}

    
}

module.exports.Resource = Resource;
