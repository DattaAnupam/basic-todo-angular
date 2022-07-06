import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // input veriables for taking inputs through compnents
  @Input() text: string = '';
  @Input() color: string = '';

  // output veriables for taking inputs through compnents
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick = () => {
    // emits the event, which will occur on clicking button
    this.btnClick.emit();
  };
}
