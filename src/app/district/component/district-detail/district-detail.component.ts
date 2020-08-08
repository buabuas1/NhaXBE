import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {District} from "@app/shared/interfaces";

@Component({
  selector: 'app-district-detail',
  templateUrl: './district-detail.component.html',
  styleUrls: ['./district-detail.component.css']
})
export class DistrictDetailComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  @Input() district!: District
  constructor() { }

  ngOnInit(): void {
  }

}
