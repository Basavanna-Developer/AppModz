import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homepage-youtube',
  templateUrl: './homepage-youtube.component.html',
  styleUrls: ['./homepage-youtube.component.css']
})
export class HomepageYoutubeComponent implements OnInit {
  @ViewChild('myVideo') myVideo: ElementRef;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      // Gets the video src from the data-src on each button
      var $videoSrc;
      $(".video-btn").click(function() {
        $videoSrc = $(this).attr("data-src");
      });
    
      // when the modal is opened autoplay it
      $("#myModal").on("shown.bs.modal", function(e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr(
          "src",
          $videoSrc + "?amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1"
        );
      });
    
      // stop playing the youtube video when I close the modal
      $("#myModal").on("hide.bs.modal", function(e) {
        // a poor man's stop video
        $("#video").attr("src", $videoSrc);
      });
    
      // document ready
    });
  }
pauseVideo() {
    this.myVideo.nativeElement.pause();
  }
  playVideo(){
    this.myVideo.nativeElement.play();
  }
}
