import { Component, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {

  @ViewChild('video', {static: true}) video: ElementRef<HTMLVideoElement>;
  //  canvas: CanvasCaptureMediaStreamTrack;
  //  ctx;
  constructor( 
    @Inject(PLATFORM_ID)  private _platform: Object
    ) { }

  onStart(){
    if(isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({video: true}).then((ms: MediaStream) => {
        const _video = this.video.nativeElement;
        _video.srcObject = ms;
        _video.play(); 
      });
    }
  }

  onStop() {
    this.video.nativeElement.pause();
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
    this.video.nativeElement.srcObject = null;
  }

  ngOnDestroy() {
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
  }
}
  // ngOnInit(): void {
  //   // Delay the camera request by a bit, until the main body has loaded
  // // document.addEventListener("DOMContentLoaded", this.main);
  // }
//   setupCamera = async () => {
//     // Find the video element on our HTML page
//     let video = document.getElementById('video');
    
//     // Request the front-facing camera of the device
//     const stream = await navigator.mediaDevices.getUserMedia({
//         'audio': false,
//         'video': {
//           facingMode: 'user',
//           height: {ideal:1920},
//           width: {ideal: 1920},
//         },
//       });
//     _video.srcObject = stream;
    
//     // Handle the video stream once it loads.
//     return new Promise((resolve) => {
//         video.onloadedmetadata = () => {
//             resolve(.video);
//         };
//     });
// }

//  drawWebcamContinuous() {
//     this.ctx.drawImage(this.video,0,0);
//     requestAnimationFrame(this.drawWebcamContinuous);
// }



//  main = async() => {
//     // Set up front-facing camera
//     await this.setupCamera();
//     this.video.play()

//     // Set up canvas for livestreaming
//     this.canvas = document.getElementById('facecanvas');
//     this.canvas.width = this.video.videoWidth;
//     this.canvas.height = this.video.videoHeight;
//     this.ctx = this.canvas.getContext('2d');
  
//     // Start continuous drawing function
//     this.drawWebcamContinuous();
  
//     console.log("Camera setup done")
// }



