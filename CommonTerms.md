# Terms #
**ACL** (Access Control Lists) :  these are "rules" that grant different
kinds of access to Ampache based on the remote computer's IP address.

> You will need to set up 1 or more ACLs on Ampache to get **Ampache mobile** working

  * more information :
    * [Ampache ACL page](http://ampache.org/wiki/config:acl)
    * [Wikipedia](http://en.wikipedia.org/wiki/Access_control_list)

**Ampache** : This is the free web-based music server that runs on a desktop/laptop computer using **Apache**, **PHP** and **MySQL**.

> You will need to install Ampache on a computer to use Ampache mobile. Your music will need to be either stored on this computer or be accessible by this computer. This music server must be powered on or **Ampache Mobile** will not work.

> You must use version 3.5.1 or newer, or **Ampache Mobile** will not work

  * more information :
    * [Ampache Home Page](http://ampache.org/)
    * [Wikipdedia](http://en.wikipedia.org/wiki/Ampache)

**Ampache Mobile** : an application written for the Palm Pre to access an **Ampache** music server.

**Ampache Pre** : a similar application to **Ampache Mobile**.

**Apache** : The web server program that Ampache runs on top of. Apache runs on a variety of different OS's such as Linux, Windows XP/Vista/7, OSX,...

> You will need to install Apache on a computer to use **Ampache mobile**. See XAMPP for an easy way to install Apache.

  * more information :
    * [Apache Home Page](http://www.apache.org/)
    * [Wikipedia](http://en.wikipedia.org/wiki/Apache_HTTP_Server)

**DSL modem** : a network device used to connect a single computer or private network using a router to the Internet. Some DSL modem have built-in routers.

> You will only need to worry about this if you have a ISP that uses DSL and you will want to use **Ampache mobile** when you are away from home and not on the same private network as your **Ampache** server.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/DSL_modem)

**Dynamic IP address** : an IP address that changes from time to time. It is most often changed when a device is powered off and back on, but it can also be changed base on a time cycle such as every 24 hours.

> You may need worry about Dynamic IP addresses if :
    * the private ip address of your **Ampache** server keeps changing and you have to keep changing it in **Ampache Mobile**
    * you want to set up port forwarding
    * you want to use DynDNS

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Static_IP#Static_and_dynamic_IP_addresses)

**DynDNS.com** : a website offering a free service to provide a "static" names to routers/DSL modems/Cable modems that have dynamic IP addresses.

> You will only need to worry about this if you will want to use **Ampache mobile** when you are away from home and not on the same private network as your **Ampache** server. If the public IP address for your home private network keeps changing, it make life a lot easier to get one of these "static" names and use it with Ampache mobile.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/DynDNS)

**EVDO** : is the wireless standard for data communication that the Pre uses when Wifi is turned off.

> You will only need to worry about this if you will want to use **Ampache mobile** when you are away from home and not on the same private network as your **Ampache** server. Whenever your Pre is using EVDO, it has a public IP address on the Internet. It must go through your router to access the **Ampache** music server.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/EVDO)

**Firewall** : a program/service that prevents unauthorized access to the computer. A properly configured firewall will permit valid network traffic while blocking unauthorized traffic.

> You may need to configure your firewall to allow other computers and **Ampache Mobile** to access the **Ampache** music server.  As a quick test: If **Ampache Mobile** is not working, but you turn off your firewall and **Ampache Mobile** works, then you need to configure your firewall.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Firewall)

**MySQL** : is a database server where information can be stored logically for faster retrieval and storage.

> You must have **MySQL** running or **Ampache** will not work. Whenever you add a catalog, Ampache reads metadata from the audio files stored on your hard drive and stores the meta data in the database. Likewise, when you access Ampache via it's web interface, it uses the database to retrieve the information it is displaying. See XAMPP for an easy way to install MySQL.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Mysql)

**PHP** : is a popular programming language used for web sites.

> Ampache is written in PHP, so you must have **PHP** running or **Ampache** will not work. See XAMPP for an easy way to install PHP.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Php)

**Port 80** : default port number for HTTP traffic.

**Port 443** : default port number for HTTPS traffic. All traffic is encrypted using the SSL/TLS protocol.

  * more information :
    * [Wikipedia](http://http://en.wikipedia.org/wiki/Https)

**Port Forwarding** : allows computers on the Internet to connect to a specific computer on a private network. On most home networks, Amapche is not accessible from the Internet. One or more "port forwarding" rules must be created to forward request from the Internet to Ampache on the home network.

> You will only need to setup port forwarding if you want to use **Ampache mobile** when you are away from home and not on the same private network as your **Ampache** server.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Port_forwarding)
    * [Wiki Page](http://code.google.com/p/ampache-mobile/wiki/CommonIssues) See the section "Works on Wi-Fi but not EVDO" for more information on How to set up Port Forwarding.

**Portforward.com** : a web site with tons of "how do I configure my router to do XXX" sorted by manufacturer, model and service.

> You will only need to worry about this if you will want to use **Ampache mobile** when you are away from home and not on the same private network as your **Ampache** server. Once you choose the manufacturer and the model, look for port forward information under "Apache".

  * more information :
    * [Home Page](http://Portforward.com)

**Private IP address** : Address like 192.168.x.x or 10.x.x.x or 172.16.x.x of machines on a private network usually assigned to computers by your router on you home network. These IP addresses are not directly accessible from the Internet. Each private IP address within a the same home network must be unique.

> You will need to have the private IP address of your **Ampache** server to configure **Ampache mobile** to work when your Pre is in Wi-Fi mode. You will also need it if you are setting up port forwarding rules on your router.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Private_IP_address)

**Public IP address** : unique IP addresses that are accessible via the Internet. These addresses tend to be dynamic on most home networks and are assigned by the ISP.

> You will only need to worry about public IP addresses if you want to use **Ampache mobile** when you are away from home and not on the same private network as your **Ampache** server.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/IPv4#Addressing)

**Router** : a network device that acts like a gateway between the Internet and the home network. A router has both a Public IP Address and a Private IP Address.

> You will only need to setup your router if you want to use **Ampache mobile** when you are away from home and not on the same private network as your Ampache server. See port forwarding.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Router)

**RPC** : (ACL type) A standard that allows computers to execute programming commands on a remote computer.

> This is the standard that **Ampache mobile** uses to run commands on **Ampache**. You must set up at least one RPC-XML ACL rule or **Ampache mobile** will not work.

  * more information :
    * [Ampache Access Control Lists](http://ampache.org/wiki/config:acl)

**SSL/TLS** : protocol used to provide encryption for all traffic when using a HTTPS server.

  * more information :
    * [Wikipedia](http://ampache.org/wiki/Transport_Layer_Security)

**Static IP address** : an IP address that does not change, even when the device is powered off and back on.

> You may need worry about a Static IP addresses if :
    * the private ip address of your **Ampache** server keeps changing and you have to keep changing it in **Ampache Mobile**
    * you want to set up port forwarding and your brand of router can only forward to computers in your private network that have a static IP address.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Static_IP#Static_and_dynamic_IP_addresses)
    * [How To setup a Static IP Address](http://www.portforward.com/networking/staticip.htm)

**Streaming** : (ACL type) A standard that allows for the transfer of multimedia files to a remote device.

  * This is the standard that **Ampache mobile** uses to get music over a network from the **Ampache** server. You must set up at least one Streaming ACL rule or **Ampache mobile** will not be able to play audio.

  * more information :
    * [Ampache Access Control Lists](http://ampache.org/wiki/config:acl)

**Transcoding** : On-the-fly conversion from one type of audio file to another.

> You will only have to worry about this if you have music file types (i.e. FLAC, M4a,..) that are not compatible with the Pre. You may also want to use transcoding to save bandwidth: you can convert from a high-bit MP3 file (320kbs, 256kbs,..) to a lower-bit MP3 file (128kbs, 96kbs).

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Transcoding)
    * [Ampache Transcoding](http://ampache.org/wiki/config:transcode)
    * [Wiki Page](http://code.google.com/p/ampache-mobile/wiki/CommonIssues) See the section "Transcoding not working" for more information.

**Wi-Fi** : a wireless network communication protocol.

> Whenever you use **Ampache Mobile** on your Wi-Fi home network, the Pre will have a private IP address. It will not have to go through your router to access Ampache since both the Ampache Server and your Pre will be on the same private network, but it will have to go through the firewall on the Ampache Server.

  * more information :
    * [Wikipedia](http://en.wikipedia.org/wiki/Wifi)

**XAMPP** :  A free "all-in-one" web server package containing **Apache**, **MySQL** and **PHP**. There are a variety of different installers for different OS's such as Linux, Windows XP/Vista/7, OSX,...

> A lot of people find it easier to just install this single package, rather than install Apache, PHP & MySQL separately.  Note that if you use this package, you will still need to install **Ampache**.

  * more information :
    * [XAMPP Home Page](http://www.apachefriends.org/en/index.html)
    * [Wikipedia](http://en.wikipedia.org/wiki/Xampp)

