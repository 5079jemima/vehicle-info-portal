import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {VehicleService} from "../vehicle.service";
import {Vehicle} from "../vehicle.model";
import {DxFormComponent} from "devextreme-angular";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  @Input() vehicle: any;
  @Input() type: any;
  @Output() refresh: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent | undefined;
  constructor(private vehicleService: VehicleService) {
    this.saveData = this.saveData.bind(this);
  }

  ngOnInit(): void {
  }

  saveData() {
    if(this.form!=null) {
      let isValid = this.form.instance.validate().isValid;
      if (isValid) {
        if (this.type == 'edit') {
          this.vehicleService.updateVehicle(this.vehicle).subscribe(() =>
            this.refresh.emit()
          );
        } else if (this.type == 'add') {
          this.vehicleService.createVehicle(this.vehicle).subscribe(() =>
            this.refresh.emit());
        }
      }
    }
  }
}
