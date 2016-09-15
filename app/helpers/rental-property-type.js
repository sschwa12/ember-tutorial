import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]/*, hash*/) {
  if (communityPropertyTypes.includes(type)) {
    return 'Community';
  } else {
    return 'Standalone';
  }
}

export default Ember.Helper.helper(rentalPropertyType);
