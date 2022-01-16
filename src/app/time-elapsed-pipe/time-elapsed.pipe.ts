import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'timeElapsed',
  pure:false
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value:any): any {
    var timeElapsed=moment(value).fromNow();
    return timeElapsed;
  }

}
