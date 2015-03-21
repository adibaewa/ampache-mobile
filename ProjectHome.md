

# Install on Phone #
[Palm Web Distribution](http://developer.palm.com/appredirect/?packageid=com.app.ampachemobile)
# Overview #
This is a [webOS](http://en.wikipedia.org/wiki/WebOS) application for streaming music from the [Ampache Music Server](http://ampache.org/).  Using this application with the Ampache Music Server you can stream all of YOUR music over your internet connection anywhere you take your mobile phone.  It works exactly as any music player you have used with one major difference, everything is streaming over the network and nearly no space is devoted to storing music on your device.
# Description #
For years we have been tied to how much storage space a mobile device has and we've been willing to pay ridiculous amounts for more space.  This application represents a paradigm shift in how we access our personal music collections.  With this application you can access your entire music collection no matter how large and save all your storage space for other cool things.
## Features: ##
  * **Smart Buffering:** Ampache Mobile will buffer tracks ahead of what you are playing to provide a seamless music experience.
  * **Videos:** Stream your videos to your phone.
  * **Transcoding:** With transcoding you can play audio formats not currently supported in WebOS such as ogg and flac.  Also you can down sample high bitrate files and save precious bandwidth.
  * **Last.fm Scrobbling:** Scrobble your playbacks through your Ampache Server.
  * **Bluetooth:** A2PD support and Bluetooth controls for (play/pause/next ect.)
  * **Search:**  Have a very large collection? Ampache Mobile allows you to find what you are looking for extremely fast.
  * **Cover Art:** If your Ampache Server has cover art this app will use it.
  * **Share Servers:** Ampache Mobile supports multiple servers.  Trade with friends and have access to their entire music collection as well.
  * **Privacy:** Your music streaming from your server to your phone, means a level of privacy not available with cloud music services.
  * **Security:** Ampache has strict security rules to stop people you don't want accessing your collection from doing so.
  * **Ampache:** Ampache is designed to give you a one stop website for your music collection.  Once you get Ampache working not only can you access your collection from your phone you can access it anywhere with a standard web browser.

> WARNING: This app requires an Ampache Server to connect to.  That means you will be responsible for installing and configuring your very own web server.  Setting up Ampache is not a hard task but it's also not trivial. If you are a beginner be sure to read up and look to the forums for help and be prepared to spend some time.

# Donate #
If you would like to support the Ampache Mobile project please donate.  Ampache Mobile will always be free, but as the project grows some monetary support would be nice.  Donations will be used to support development of Ampache Mobile.

The Goal is to provide the best possible streaming media solution on webOS for FREE.

[![](https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RZKZ3GCDQUWY8&lc=US&item_name=Ampache%20Mobile&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
# See the App #
## Demo Video ##
<a href='http://www.youtube.com/watch?feature=player_embedded&v=V2DzNXyeMU0' target='_blank'><img src='http://img.youtube.com/vi/V2DzNXyeMU0/0.jpg' width='640' height=480 /></a>
## Screen Shots ##
![http://lh4.ggpht.com/_IXK8RpquMHQ/S9h3jBr_L_I/AAAAAAAAAOE/Vy--p1oD1OI/ampachemobile_2010-26-04_010407%5B5%5D.png](http://lh4.ggpht.com/_IXK8RpquMHQ/S9h3jBr_L_I/AAAAAAAAAOE/Vy--p1oD1OI/ampachemobile_2010-26-04_010407%5B5%5D.png)
![http://lh3.ggpht.com/_IXK8RpquMHQ/S6m_NpSfD4I/AAAAAAAAAF8/GRJINb11oK8/ampachemobile_2010-24-03_014205.png](http://lh3.ggpht.com/_IXK8RpquMHQ/S6m_NpSfD4I/AAAAAAAAAF8/GRJINb11oK8/ampachemobile_2010-24-03_014205.png)
![http://lh3.ggpht.com/_IXK8RpquMHQ/S8SivVexOrI/AAAAAAAAAIw/XQzk0hI4y1g/ampachemobile_2010-12-04_174457_thumb%5B2%5D.png](http://lh3.ggpht.com/_IXK8RpquMHQ/S8SivVexOrI/AAAAAAAAAIw/XQzk0hI4y1g/ampachemobile_2010-12-04_174457_thumb%5B2%5D.png)
![http://i607.photobucket.com/albums/tt151/bjgeiser/search.png](http://i607.photobucket.com/albums/tt151/bjgeiser/search.png)
![http://i607.photobucket.com/albums/tt151/bjgeiser/ampachemobile_2009-27-08_022355.png](http://i607.photobucket.com/albums/tt151/bjgeiser/ampachemobile_2009-27-08_022355.png)
![http://i607.photobucket.com/albums/tt151/bjgeiser/ampachemobile_2009-27-08_023229.png](http://i607.photobucket.com/albums/tt151/bjgeiser/ampachemobile_2009-27-08_023229.png)
![http://i607.photobucket.com/albums/tt151/bjgeiser/ampachemobile_2009-27-08_023141.png](http://i607.photobucket.com/albums/tt151/bjgeiser/ampachemobile_2009-27-08_023141.png)
![http://lh5.ggpht.com/_IXK8RpquMHQ/S9h3pUAjkDI/AAAAAAAAAOU/WKo905eMda4/ampachemobile_2010-26-04_010805%5B8%5D.png](http://lh5.ggpht.com/_IXK8RpquMHQ/S9h3pUAjkDI/AAAAAAAAAOU/WKo905eMda4/ampachemobile_2010-26-04_010805%5B8%5D.png)
# Change Log #
[Version Information](ChangeLog.md)
# Requirements #
  * A phone running webOS.  Pre and Pixi Supported
  * Ampache Music Server running at least version 3.5.1
# Setup #
**WARNING: Setting up an Ampache is not a hard task but it's also not trivial, If you are a beginner be sure to read the linked documentation carefully**
  1. Setup instructions of the Ampache Music Server can be found at
    * Windows: [Some Guides and Tutorials](WindowsAmpacheServer.md)
    * Other Operating Systems: [Ampache Wiki](http://ampache.org/wiki/)
    * It's best to get Ampache working from a PC first before attempting to use it from your phone.  If it doesn't work from a PC it likely won't work on your phone.
  1. Configure the server with an ACL to Allow Remote Access
    * [ACL Guide](http://ampache.org/wiki/config:acl)
  1. (Optional) Transcoding makes the app much more responsive as it requires far less bandwidth to stream a song
    * Get this working on a PC first, it will be much easier to troubleshoot
    * [Ampache Transcoding Guide](http://ampache.org/wiki/config:transcode)
    * [webOS 1.1 Supported Codecs](http://developer.palm.com/index.php?option=com_content&view=article&id=1741)
  1. Set up your server for external access
    1. If you plan to use this over the internet/cellular network you will need a way to get your home IP address.
      * http://www.google.com/search?q=free+dynamic+dns
    1. Open the correct ports for Ampache on your firewall/router this is usually the standard HTTP port (80)
  1. Download and install Ampache Mobile
  1. First time the App runs it will ask for:
    * Descriptive Name
    * Full Server URL: http://myserver.com/ampache (SSL might work with properly signed keys from a CA WebOS supports)
    * User Name (For a user who has ACL access)
    * Password  (Password you would use to log into the website)
# Known Bugs/Issues #
## webOS Bugs ##
|XML Processing Errors | [Bug Report](https://developer.palm.com/distribution/viewtopic.php?f=80&t=6719) |
|:---------------------|:--------------------------------------------------------------------------------|
|Audio Stalls | [Bug Report](https://developer.palm.com/distribution/viewtopic.php?f=80&t=6661)|
|Streaming URLs with %20s Fail | [Bug Report](https://developer.palm.com/distribution/viewtopic.php?f=80&t=6680) |

# Future Plans #
  * [Issue Tracker](http://code.google.com/p/ampache-mobile/issues/list)
# Credits #
  * [Globex Designs](http://www.globexdesigns.com/) for: Design of App Icon and Splash Screen
  * [Main Menu Icons by:   Christian F. Burprich](http://chrfb.deviantart.com/art/quot-ecqlipse-2-quot-PNG-59941546)
  * [Color Selector](http://ecritters.biz/colorselector/)
  * [Ampache Project](http://ampache.org)
  * [Palm](http://www.palm.com) for: Backgrounds/Buttons/Logo/Mojo Framework