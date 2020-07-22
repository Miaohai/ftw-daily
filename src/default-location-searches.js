import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-helsinki',
    predictionPlace: {
      address: 'Blk 768, Singapore, North 760765, Singapore',
      bounds: new LatLngBounds(new LatLng(1.44284230554143, 103.85209886265906), new LatLng(1.4069096944585702, 103.81615513734093)),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'AMK Hub, 53 Ang Mo Kio Ave. 3, Singapore, Central 569933, Singapore',
      bounds: new LatLngBounds(new LatLng(1.37994919, 103.87108821), new LatLng(1.34853133, 103.84199146)),
    },
  },
];
