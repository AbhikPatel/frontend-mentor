import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SplitterPresenterService } from '../splitter-presenter/splitter-presenter.service';

@Component({
  selector: 'app-splitter-presentation',
  templateUrl: './splitter-presentation.component.html',
  viewProviders:[SplitterPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SplitterPresentationComponent implements OnInit {

  public tip:number;
  public billGroup:FormGroup;
  public totalPerPerson:any;

  constructor(
    private service: SplitterPresenterService
  ) { 
    this.tip = 0;
    this.totalPerPerson = 0;
    this.billGroup = this.service.getGroup();
  }

  ngOnInit(): void {
    this.calculate()
  }

  public tipCount = [
    {
      value:5,
      id:'five'
    },
    {
      value:10,
      id:'ten'
    },
    {
      value:15,
      id:'fifteen'
    },
    {
      value:25,
      id:'half'
    },
    {
      value:50,
      id:'century'
    },
  ];

  public calculate() {
    this.billGroup.valueChanges.subscribe((res: any) => {
      this.getResult();
    })
  }

  public get getControls(){
    return this.billGroup['controls'];
  }

  public getResult(){
    let data = this.billGroup.value
    if(data){
      // let totalBill = data.bill * (data.tip/100);
      let result = data.bill/data.people;
      this.totalPerPerson = Math.floor(result)
    }
  }

  public onReset(){
    this.totalPerPerson = 0;
    this.billGroup.reset();
  }

}
