import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLink
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {


  @Input()
  public title?: string;
  @Input()
  public city?: string ;
  @Input()
  public contrat?: string ;
  @Input()
  public salaire?: string;
  @Input()
  public logo?: string;
  @Input()
  public company?: string ;
  @Input()
  public image?: string ;



}
