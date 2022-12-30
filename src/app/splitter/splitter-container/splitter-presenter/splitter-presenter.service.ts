import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()

export class SplitterPresenterService {

  constructor(
    private fb:FormBuilder
  ) { }

  public getGroup(){
    return this.fb.group({
      bill:['',[Validators.required]],
      tip:[''],
      people:['',[Validators.required]]
    })
  }
}
