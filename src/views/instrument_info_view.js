const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:instrument-family-found', (event) => {
    const instrumentFamilyObject = event.detail;
    console.log(instrumentFamilyObject.instruments);
    this.render(instrumentFamilyObject);
  });
}

InstrumentInfoView.prototype.render = function(instrumentFamily){
  this.container.innerHTML = '';

  const heading = this.createHeading(instrumentFamily);
  const infoPara = this.createPara(instrumentFamily);
  const instrumentListIntro = this.createIntro(instrumentFamily);
  const instrumentList = this.createInfoList(instrumentFamily);

  this.container.appendChild(heading);
  this.container.appendChild(infoPara);
  this.container.appendChild(instrumentListIntro);
  this.container.appendChild(instrumentList);

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
};

InstrumentInfoView.prototype.createIntro = function(instrumentFamily){
  const instrumentListIntro = document.createElement('p');
  instrumentListIntro.textContent = `Instruments in the ${instrumentFamily.name} family include:`;
  return instrumentListIntro;
};

InstrumentInfoView.prototype.createInfoList = function(instrumentFamily){
  const instrumentsInFamily = document.createElement('ul');
  instrumentFamily.instruments.forEach((instrument) => {
    const li = document.createElement('li');
    li.textContent = instrument;
    instrumentsInFamily.appendChild(li);
  });
  return instrumentsInFamily;
}


module.exports = InstrumentInfoView;
