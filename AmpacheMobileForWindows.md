## Introduction ##
Want to try Ampache Mobile and don't actually have a WebOS phone.  Or do you use Ampache Mobile on your phone and want to use it on your PC.  Well now you can!!  WebOS is a combination Javascript, CSS and HTML.  It runs the WebKit browser (the same foundation that Safari and Google Chrome are built on).  The one missing piece to running a WebOS app on windows, or any other desktop operating system are the javascript and css libraries which palm created, otherwise known as the Mojo SDK.  If you can get the SDK on your PC then you can use it to run Ampache Mobile on your Windows computer.

![http://lh4.ggpht.com/_IXK8RpquMHQ/S6qTdZBQ-1I/AAAAAAAAAGM/rFRDwvuJfWY/windows.png](http://lh4.ggpht.com/_IXK8RpquMHQ/S6qTdZBQ-1I/AAAAAAAAAGM/rFRDwvuJfWY/windows.png)

## Installation ##
  1. Download and Install Safari for Windows (Only tested with Safari 4.x, Chrome wont work) [link](http://www.apple.com/safari)
  1. Mojo Libraries (NOTE: Distribution of the Mojo Framework is not legal)
    * You are going to have to find this on your own
    * [PreCentral Thread on this Topic](http://forums.precentral.net/web-os-development/185038-develop-pre-apps-safari-without-sdk.html)
  1. Run the Ampache Mobile for Windows executable [link](http://code.google.com/p/ampache-mobile/downloads/list)
    * It will uncompress a zip file to C:\usr\palm\applications\
    * Then launch Safari for you.

## FAQ ##
How do I bring up the Preferences Menu?
```
ALT+M
```

How do I navigate?
```
Escape to go back

Otherwise its mouse driven.
```

## Known Issues ##
  * Device Image will not work for the Backgrounds, because there is no Device.
  * This is pretty processor intensive, running lots of javascript.
  * Disable your popup blocker

## Special Notes ##
Palm has been very supportive of the WebOS community so please resist the urge to distribute their framework freely on the internet, that way we can continue to benefit from their openness and this app will keep working hopefully.