**WARNING: Setting up an Ampache is not a hard task but it's also not trivial, If you are a beginner be sure to read the linked documentation carefully**
  1. Setup instructions of the Ampache Music Server can be found at
    * [Ampache Wiki](http://ampache.org/wiki/)
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
    * Not yet available on the PreCentral Homebrew Catalog
    * [Homebrew Installation Guide](http://www.precentral.net/how-to-install-homebrew-apps)
  1. First time the App runs it will ask for:
    * Descriptive Name
    * Full Server URL: http://myserver.com/ampache (SSL might work with properly signed keys from a CA WebOS supports)
    * User Name (For a user who has ACL access)
    * Password  (Password would would use to log into the website)