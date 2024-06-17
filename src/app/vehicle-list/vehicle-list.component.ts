import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../vehicle.model";
import {VehicleService} from "../vehicle.service";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] =[];
  selectedVehicle?: Vehicle;
  showPopup: boolean = false;
  selectedOption: string = '';
  addButtonOptions= {
        icon: 'plus',
        onClick: this.addVehicle.bind(this),
        text: 'Add Vehicle'
      }
  popupTitle: string='';
  constructor(private vehicleService: VehicleService) {
    this.editVehicle = this.editVehicle.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);
  }

  ngOnInit(): void {
    console.log('Loading vehicles')
    this.getVehicles();
  }

  getVehicles(): void {
    this.showPopup = false;
    this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

  deleteVehicle(e: any)  {
    this.vehicleService.deleteVehicle(e.row.data.id).subscribe(() => this.getVehicles());
  }

  editVehicle(e: any) {
    this.selectedVehicle = JSON.parse(JSON.stringify(e.row.data));
    this.selectedOption = 'edit';
    this.popupTitle = 'Edit'
    this.showPopup = true;

  }

  addVehicle() {
    this.selectedVehicle = new Vehicle();
    this.selectedOption = 'add'
    this.popupTitle = 'Add';
    this.showPopup = true;
  }
}
