const instrumentData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const infoContainer = document.querySelector('#instrument-family-details');
  const instrumentInfoView = new InstrumentInfoView(infoContainer);
  instrumentInfoView.bindEvents();

  const selectElement = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentData);
  instrumentFamilies.bindEvents();

});
