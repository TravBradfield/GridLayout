import { Component, OnInit, NgZone } from '@angular/core';
import * as clone from 'clone';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public grid;
  showSizeSlider: boolean = false;
  public gridSize: number = 5;
  sliderValue: number = 5;
  freshGrid;

  connections: number = 0;
  selected: boolean = false;;
  x: number;
  y: number;

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.sliderChange({value: 5});
  }

  check(i, j) {
    if (this.grid[i][j] === 1) {
      this.grid[i][j] = 5;
      if (i !== 0) {
        this.check(i - 1, j);
      }
      if (j !== 0) {
        this.check(i, j - 1);
      }

      if (j !== this.grid[0].length - 1) {
        this.check(i, j + 1);
      }
      if (i !== this.grid.length - 1) {
        this.check(i + 1, j);
      }
    }
  }

  chooseGroup(i, j) {
    this.connections = 0;
    this.x = i;
    this.y = j;
    for (let row of this.grid) {
      for (let c of row) {
        if (c == 5) {
          this.connections ++
        }
      }
    }
  }

  resetGrid() {
    console.log('resetGrid()');
    // this.connections = 0;
    this.grid = clone(this.freshGrid);
  }

  newGrid() {
    this.showSizeSlider = true;
  }

  glidSlider(value: number) {
    this.gridSize = value;
    let result = [];
    for (var i = 0; i < value; i++) {
      result[i] = [];
      for (var j = 0; j < value; j++) {
        result[i][j] = Math.round(Math.random() % 2);
      }
    }
    this.grid = result;
    console.log('new grid: ', this.grid);

    return value;
  }

  sliderChange(ev) {
    console.log('sliderChange(): ', this.sliderValue);
    console.log('ev(): ', ev.value);
    let result = [];
    for (var i = 0; i < ev.value; i++) {
      result[i] = [];
      for (var j = 0; j < ev.value; j++) {
        result[i][j] = Math.round(Math.random() % 2);
      }
    }
    this.freshGrid = clone(result);
    this.grid = result;
    console.log('new grid: ', this.grid);
  }

}
