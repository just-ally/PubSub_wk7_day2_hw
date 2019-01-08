const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data)
  console.log('Published on all-instruments-ready');

  PubSub.subscribe('SelectView:instrument-family-selected', (event) => {
    const index = event.detail;
    const foundInstrumentFamily = this.findFamily(index);
    PubSub.publish('InstrumentFamilies:instrument-family-found', foundInstrumentFamily);
    console.log('Published on instrument-family-found:', foundInstrumentFamily);
  })
}

InstrumentFamilies.prototype.findFamily = function(index){
  return this.data[index];
}

module.exports = InstrumentFamilies;
