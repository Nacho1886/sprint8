import { Component, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @ViewChild('bb8Robot') bb8Robot: ElementRef
  constructor() { }


moveDroid(){
  var $w = $( window ).width();
  var $dW : any= $('.bb8').css('width');
  $dW = $dW.replace('px', '');
  $dW = parseInt($dW);
  var $dPos = 0;
  var $dSpeed = 1;
  var $dMinSpeed = 1;
  var $dMaxSpeed = 4;
  var $dAccel = 1.04;
  var $dRot = 0;
  var $mPos = $w! - $w!/5;
  var $slowOffset = 120;
  var $movingRight = false;
  if($mPos > $dPos + ($dW/4)){
    // moving right
    if(!$movingRight){
      $movingRight = true;
      $('.antennas').addClass('right');
      $('.eyes').addClass('right');
    }
    if($mPos - $dPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($mPos-$dPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if($mPos < $dPos - ($dW/4)){
    // moving left
    if($movingRight){
      $movingRight = false;
      $('.antennas').removeClass('right');
      $('.eyes').removeClass('right');
    }
    if($dPos - $mPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($dPos - $mPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  } else { }
  $('.bb8').css('left', $dPos);
  $('.ball').css({ WebkitTransform: 'rotate(' + $dRot + 'deg)'});
  $('.ball').css({ '-moz-transform': 'rotate(' + $dRot + 'deg)'});
}
ngOnInit(): void {
  
  setInterval(this.moveDroid, 10);
  
  $( document ).on( "mousemove", ( event ) => {
    $('h2').addClass('hide');
    const $mPos = event.pageX;
    return $mPos;
  });
}

}
