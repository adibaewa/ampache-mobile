
# What do I put for a server URL? #

---

## Have you setup a server? ##
### No ###
Ampache Mobile is just an app that plays music from a server, an [Ampache server](http://ampache.org).  You are responsible for setting up your own server.
  * [Server Setup](AmpacheServerSetup.md)
### Yes ###
When have completed all setup you should be able to access your Ampache Server from anywhere in the world using your own personal web address (URL).

> EXAMPLE: http://myhome.dyndns.org/ampache

[See Below](CommonIssues#Ampache_Mobile_doesn't_work.md) for more information on how this works.

# Ampache Mobile doesn't work #

---

If Ampache Mobile starts up and seems to run OK on your Pre, but you are unable to connect to your server, use the test below to help you figure out why Ampache Mobile isn't working.

Please go through the steps before posting a "Ampache Mobile isn't working" post.
If you still have issues after doing this test then post which of the steps worked for you and which didn't.

## Ampache Server Test ##
NOTE:URLs are examples, yours may be different.
### Step 1: Server Version ###
Are you running the correct version of Ampache?  Ampache Mobile requires at least version 3.5.1 of Ampache to operate correctly.  [Download](http://ampache.org/download.php)
### Step 2: Server Running? ###
Can you access Ampache using a web browser from the machine it is running on (i.e `http://localhost/ampache` )?  If no, then it looks like your Ampache music server is not working yet.
### Step 3: Local Network Test ###
Can you access Ampache using a web browser from another machine on your network (i.e. `http://192.168.x.x/ampache`  or `10.x.x.x` or `172.16.x.x` )?  NOTE: This should be the IP Address of your server.
> NOTE: If you don't have a second machine you can do this test on the machine running the server.  Just by changing the URL in your browser.

If no, it could be a firewall issue on the machine running the Amapche music server or maybe an Ampache Server ACL rule.
  * See this [page](http://www.ehow.com/how_2317017_turn-off-firewalls-computer.html) on "how to turn off your firewall".
  * Check out this [page](http://ampache.org/wiki/config:acl) on Ampache ACL rules
### Step 4: Pre Test ###
Can you access Ampache using a **web browser** via Wifi from your Pre (i.e. `http://192.168.x.x/ampache`)?

If no, it could be a firewall issue on the machine running the Amapche music server or maybe an ACL rule. See links above.
### Step 5: Ampache Mobile Test ###
Can you access Ampache using Ampache Mobile via Wifi (Using the same URL from Step 4) from your Pre?
# Works on Wifi but not EVDO/3G #

---

## IP Address Correct? ##
Are you connecting to a private network address IP Address like `192.168.x.x`  or `10.x.x.x` or `172.16.x.x` ?
Most Wi-Fi routers have an internal IP pool and one External IP.
  * A `192.168.x.x/10.x.x.x/172.16.x.x` address is Internal and not accessible via EVDO
  * To find your external address try this link http://www.whatismyip.com/
## Port Forwarding Setup? ##
Once you determine your internal address and external IP address you need to setup port forwarding on your router (or a "virtual port" on some routers).
    * Your goal is to forward your External IP address to your Internal Ampache Server address. Imagine that your router is a large building.
      * The building has a unique public address that can be seen by everyone on the outside world (i.e. external IP address).
      * The building has 100's of outside doors (i.e. the ports on you router).
      * Each outside door has a unique number (i.e. port numbers on you router).
      * Almost all outside doors are always locked.
      * The building has one or more suites inside (i.e. private network address IP).
      * By default, the suites cannot be accessed from the outside: there are no hallways going from the outside doors to the suites.
      * All the suites are connected by an internal hallway (i.e. your private network)
      * Each suite has 100's of offices with each office having an individual door (i.e the ports on your music server).
      * The doors for each office are usually locked (by the firewall on your music server)
      * The Ampache server by default is occupying suite office 192.168.x.x, office 80. (where 192.168.x.x is the private IP address of the Ampache server, and port 80 by default is used for all HTML request)
      * When you set up a port forwarding rule, you are basically unlocking an outside door so everyone can come in whenever they like and building a hallway in the building that goes directly to one suite in the building. As an example: unlock door 80 and build a hallway that goes to suite 192.168.x.x, office 80
      * Some ISPs block door 80: they install a lock on the outside of the door and you cannot unlock it...or you may have a router that is already running a web server on the public side of your router on port 80 (You see a web page for your router whenever you point a web browser at your public IP address) :
        * To get around this, you open up another door...as an example door 8080. At the same time you build a hallway in the building so anyone coming in on door 8080 is automatically directed to suite 192.168.x.x, office 80.
        * To use the new door, add a ":port\_number" to your URL. Example: http://music_server.dyndns.com:8080
        * Note: If you are using a secure server (i.e. https), you many need to also forward port 443 request.

  * [This site](http://www.portforward.com/routers.htm) has a ton of port forwarding guides, most web servers default to running on port 80.  But you can choose any port you like as long as your configure your web server as such.
## Access Control Rules ##
Could be an ACL issue. Ampache uses Access Control Lists to restrict access to the music server (see http://ampache.org/wiki/config:acl). You will need to create a an ACL rule for EVDO access
    * Go to the Ampache Admin page
    * click on "Add ACL"
      * Name it (ex: EVDO Streaming)
      * Level = all
      * User = all
      * ACL type = Stream Access
      * Remote Key =            (leave blank)
      * Start = 0.0.0.0
      * End =  255.255.255.255
    * click on "Create ACL"

## Dynamic DNS ##
Once you have confirmed you can access your server over the internet using your IP address next stop is setting up dynamic DNS.

Dynamic DNS monitors your homes IP address and updates a server when it changes.  Allowing you to not have to keep tabs on a constantly changing IP address.

Here are some free sites that provide this service.  [Dynamic DNS](http://www.google.com/search?q=free+dynamic+dns)

Most people prefer dyndns.org

# Transcoding not working #

---

  * Transcoding tools are not installed as part of Apache/XAMMP. You must download and install them separately. Here are some links to get you started :
    * LAME : http://en.wikipedia.org/wiki/LAME
    * FLAC : http://en.wikipedia.org/wiki/Flac
    * FACC : http://en.wikipedia.org/wiki/Advanced_Audio_Coding#FAAC_and_FAAD2
    * Mp3splt : http://en.wikipedia.org/wiki/Mp3splt
    * oggsplt/oggdec  : http://en.wikipedia.org/wiki/Ogg
    * ALAC : http://en.wikipedia.org/wiki/Alac
  * If things are not working, look at the Ampache log file on the music server for the command Ampache is running. Copy it and try to run it on the command line. [Enable Logging](http://ampache.org/wiki/support#enabling_logging)
  * You set the default sample rate on the Ampache Admin page-> streaming. It is called "Transcode Bitrate".
  * The ";" is a comment character in the Ampache configuration file. Everything on the line after it is a comment and will not be executed. By default most transcoding commands are commented out -- they will not run.
  * Use the Amapche log file...it can REALLY help you to figure out why things are not working.
  * The Ampache page on Transcoding: http://ampache.org/wiki/config:transcode

# Getting a lot of Audio Stalls #

---

There are a couple of things you can do for webOS audio stalls.
  1. Properly configure your Apache timeout work around in the account editor.
    * Basically webOS can only download a finite amount of music, lets say its 12MB.  Once it hits this limit it puts downloading the track on hold until it needs more data to play it.
    * There is an issue when downloading is put on hold within webOS. If it waits to long the server will close the connection and webOS fails to realize this, when it attempts to finish its download the audio service crashes. The timeout workaround in the account manager is for detecting this potential error and circumventing it.
    * The Apache setting for this is can be found in httpd.conf.  Setting [Description](http://httpd.apache.org/docs/2.0/mod/core.html#timeout)
    * You can also extend the timeout for less crashes.
    * The value in httpd.conf and Ampache Mobile should match, if there is no value in httpd.conf then leave Ampache Mobile at 300.
  1. Enabling transcoding/downsampling causes the Audio service to wait for downloading tracks far less often, thus avoiding the bug described above.  So it's a good thing to enable.
    * Most people use 96kpbs or 128kpbs depending on preference.

**Possible Fix**

  1. Edit your httpd.conf file, if using Apache. Add the following line to the main body.  Making the TCP timeout 10 minutes.
```
Timeout 600
```
  1. Restart Apache, setting won't take effect until a restart.
  1. Set Apache Timeout Workaround in Ampache Mobile to 600

# Getting XML Errors Loading Lists #

---

## Empty fields in your music tags ##
  * webOS has a few issues with processing xml which are exposed when you have empty fields in your tags.  [See webOS bug report](https://developer.palm.com/distribution/viewtopic.php?f=80&t=6719)
  * A simple solution is to use an id3 tag editor to fill those fields in and rescan your music catalog.
    * For Artists: Ampache Mobile uses Name only from the tag
    * For Albums: Its Artist, Album, Year and Genre (optional)
## Corrupt data inside tags ##
  * Sometimes music tags can get corrupt.  An easy way to spot this corruption is to browse your collection with Ampache.  If you notice any strange characters investigate the tag with a tag editor, I'd even just go ahead and rewrite them to the file.  Once complete rescan your catalog.
# Videos Not Working #

---

## Incorrect Video Format ##
The supported audio/video types for webOS are MP4, M4A, M4V, MOV, 3GP, and 3G2.

It is recommended that you import videos into Ampache in a format that webOS has support for.  You should convert unsupported videos on a PC or Mac and reimport them into Ampache.

To convert existing videos to a format suitable for webOS use the free h.264 encoder <a href='http://handbrake.fr/'>Handbrake</a> on your PC or Mac.  The iPod Touch/iPhone profile creates files perfect for playback on webOS.

## Transcoding Setting ##
Ampache itself does not yet support video transcoding.  There is a bug in Ampache if you have transcoding set to Always it will try to transcode videos, make sure your transcoding setting is 'Default'.