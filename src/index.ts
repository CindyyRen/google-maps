import { Loader } from '@googlemaps/js-api-loader';
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const loader = new Loader({
  apiKey: 'AIzaSyBM84TIyN7UgeipvPgVVWQwZMaPLryQNxY',
  version: 'weekly',
});
const user=new User()
const company=new Company()
loader.load().then(() => {
  const map = new CustomMap('map')
  map.addMarker(user)
  map.addMarker(company)
});
