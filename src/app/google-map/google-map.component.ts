import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { identity } from 'rxjs';
import { AgenceMapModel} from 'src/app/model/agenceMapModel.model';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, OnChanges {
  @Input() agences :AgenceMapModel[] = [];
  @Input() goToAgence : {start: number, end: number} = {start : 0, end: 0}

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("I detect it"+changes['agences'].currentValue.length)
    this.assignAgencesInMap();
    this.calcRoute(changes['goToAgence'].currentValue.start, changes['goToAgence'].currentValue.start)
  }

  ngOnInit(): void {
  }
  @ViewChild('mapContainer', { static: false })
  gmap!: ElementRef;
  map!: google.maps.Map;
  lat = 36.8665;
  lng = 10.1647;
  
  assignAgencesInMap(){
    const infoWindow = new google.maps.InfoWindow();
    this.agences.forEach(agenceData => {
      let marker = new google.maps.Marker({
        title: agenceData.agenceName,
        position : new google.maps.LatLng(agenceData.latitude, agenceData.longitude),
        clickable: true,
        map: this.map
      });
      marker.addListener("click", ()=>{
        infoWindow.close();
        infoWindow.setContent(
          '<div style="width:300px;" >' +
            '<div class="row" >' +
              '<div class="col-4" >' +
                '<img style="width : 100px" src="assets/images/logo.png">'+
              "</div>" +
              '<div class="col-8" >'+
                '<h2 id="firstHeading" class="firstHeading">'+agenceData.agenceName+'</h2>' +
                '<div id="bodyContent">' +
                  "<p><b>Tel: </b>"+agenceData.agenceNum+"<br>" +
                  "<b>Governorat</b>" +agenceData.agenceGovernorat+"<br>" +
                  "</p>" +
                "</div>" +
              "</div>"+
            "</div>"+
          "</div>");
        infoWindow.open(this.map, marker);
        
      })
      marker.setMap(this.map);
    })
  }
  

   directionsService = new google.maps.DirectionsService();
   directionsRenderer = new google.maps.DirectionsRenderer();
    calcRoute(start: google.maps.LatLng, end: google.maps.LatLng) {
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsService.route(request, (result, status) => {
      if (status == 'OK') {
        this.directionsRenderer.setDirections(result);
      }
    });
  }


  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
    this.assignAgencesInMap();
    
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions, );
    this.marker.setMap(this.map);
    this.assignAgencesInMap();
  }

 getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      
    });
  }
 }

}
