const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:instrument-family-found', (event) => {
    const instrumentFamilyObject = event.detail;
    this.render(instrumentFamilyObject);
  });
}

InstrumentInfoView.prototype.render = function(instrumentFamily){
  this.container.innerHTML = '';

  const heading = this.createHeading(instrumentFamily);
  const infoPara = this.createPara(instrumentFamily);
  // const instrumentList = this.createInfoList(instrumentFamily);

  this.container.appendChild(heading);
  this.container.appendChild(infoPara);
  // this.container.appendChild(instrumentList);

};

InstrumentInfoView.prototype.createHeading = function(instrumentFamily){
  const heading = document.createElement('h2');
  heading.textContent = instrumentFamily.name;
  return heading;
};

InstrumentInfoView.prototype.createPara = function(instrumentFamily){
  const infoPara = document.createElement('p');
  infoPara.textContent = instrumentFamily.description;
  return infoPara;
}


module.exports = InstrumentInfoView;
