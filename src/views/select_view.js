const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    this.populate(event.detail);
  });
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:instrument-family-selected', selectedIndex);
    console.log('Published on instrument-family-selected:', selectedIndex);
  })
};

SelectView.prototype.populate = function(instrumentFamilies){
  instrumentFamilies.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = instrumentFamily.name;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
