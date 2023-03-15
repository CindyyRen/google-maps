import { User } from './User';
import { Company } from './Company';

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  private marker: google.maps.Marker;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 1,
      }
    );
  }
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
      map: this.googleMap,
      title: 'Hello World!',
    });
  }
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     position: { lat: user.location.lat, lng: user.location.lng },
  //     map: this.googleMap,
  //     title: 'Hello World!',
  //   });
  // }
}
