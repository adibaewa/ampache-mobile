WARNING: This is a work in progress and is not yet 100% complete.

# Introduction #

---

AAC+ v2 also known as [HE-AAC+](http://en.wikipedia.org/wiki/High-Efficiency_Advanced_Audio_Coding) provides the best overall streaming experience for Ampache Mobile.  It will give you good quality music with very fast buffering times.

In order to use it you need to do some setup on your server.

# Required Tools #

---

  * Text Editor
  * aacplusenc
    * Windows: http://markspark.net/slasha/aacplusenc-0.17.1.rar
    * Others: http://teknoraver.net/software/mp4tools/
  * mp3splt
    * http://mp3splt.sourceforge.net/mp3splt_page/downloads.php
  * lame
    * Windows: http://www.free-codecs.com/Lame_Encoder_download.htm
  * Others: www.google.com

# Details #

---

NOTE: This guide is written against Ampache 3.5.4

## Dual Server Config (Optional) ##

The biggest issue with transcoding to AAC+ is that it can break the flash player.

If you would like to maintain the flash player functionality in Ampache, perhaps for listening to from work or school.  Here is my solution.

  1. Copy your whole **/ampache** directory to another directory in htdocs, mine is called **/ampache\_aac**.
  1. From there on out do all the modifications described below to **/ampache\_aac** leaving the other directory untouched.
    * NOTE: In my setup I have both of these instances pointed to the same database and it seems to be working fine.
  1. Next change your **web\_path** to the new path in **ampache.config.php**
  1. Then create a new user which you can turn on the low bit rate (48) transcoding.
  1. Every time you want to stream AAC log into this copied server and enter your new user.


## Step 1: Setting up MIME types ##

The MIME type tells the player what type of file its streaming.  We need to teach ampache about AAC+

Edit the file **lib/class/song.class.php** in your Ampache directory and make the changes highlighted below.
```
switch ($this->type) {
    case 'spx':
    case 'ogg':
        $this->mime = "application/ogg";
        break;
    case 'wma':
    case 'asf':
        $this->mime = "audio/x-ms-wma";
        break;
    case 'mp3':
    case 'mpeg3':
        $this->mime = "audio/mpeg";
        break;
    case 'rm':
    case 'ra':
        $this->mime = "audio/x-realaudio";
        break;
    case 'flac';
        $this->mime = "audio/x-flac";
        break;
    case 'wv':
        $this->mime = 'audio/x-wavpack';
        break;
    case 'aac':
    case 'mp4':
    case 'm4a':
        $this->mime = "audio/mp4";
        break;
    /**********************************************/
    /* begin  addition to support AAC+ */
    case 'aacp':
        $this->mime = "audio/aacp";
        break;
    /* end addition to support AAC+ */
    /**********************************************/
    case 'mpc':
       $this->mime = "audio/x-musepack";
       break;
    default:
        $this->mime = "audio/mpeg";
        break;
}
```

## Step 2: Enable Transcoding ##

Update your **config/ampache.config.php** as follows.  I'd recommend making a backup copy of your config file.

> Note: this configuration will transcode all codecs to AAC+ if you only have mp3s in your collection you only need to change the lines pertaining to mp3.

> Also remember to remove ; as this indicates which lines are commented out. To comment it in the ; must be removed and Ampache will run the command.

### Setup Command Lines ###
```
;######################################################

; These are commands used to transcode non-streaming
; formats to the target file type for streaming.
; This can be useful in re-encoding file types that don't stream
; very well, or if your player doesn't support some file types.
; This is also the string used when 'downsampling' is selected
; as some people have complained its not bloody obvious, any programs
; referenced in the downsample commands must be installed manually and in
; the web server path, and executable by the web server

; REQUIRED variables
; transcode_TYPE        = true/false ## True to force transcode regardless of prefs
; transcode_TYPE_target = TARGET_FILE_TYPE
; transcode_cmd_TYPE    = TRANSCODE_COMMAND
; %FILE%        = filename
; %OFFSET%      = offset
; %SAMPLE%      = sample rate
; %EOF%         = end of file in min.sec
; List of filetypes to transcode

transcode_m4a           = true
transcode_m4a_target    = aacp
transcode_flac          = true
transcode_flac_target   = aacp
transcode_mp3           = true
transcode_mp3_target    = aacp
transcode_ogg           = true
transcode_ogg_target    = aacp

; These are the commands that will be run to transcode the file
transcode_cmd_flac      = "flac -dc --skip=%OFFSET% --until=%EOF% %FILE% | aacplusenc - - %SAMPLE%"
transcode_cmd_m4a       = "faad -f 2 -w %FILE% | aacplusenc - - %SAMPLE%"
transcode_cmd_mp3       = "mp3splt -qnf -o - %FILE% %OFFSET% %EOF% | lame --mp3input -S --decode - - | aacplusenc - - %SAMPLE%"
transcode_cmd_ogg       = "oggsplt -qn  -o - %FILE% %OFFSET% %EOF% | oggdec -Q -o - - | aacplusenc - - %SAMPLE%""
```

> NOTE: These are all command line executable files you will need to download them and place them in a path which they can be run from.
### Setting up Windows ###
Command lines for Windows require the full system path to the executable for each item in the command chain.<br>
<b>Example:</b>
<pre><code>transcode_cmd_mp3 = "c:\ampache_tools\mp3splt -qnf %FILE% %OFFSET% %EOF% -o - | c:\ampache_tools\lame --mp3input -S --decode - - | c:\ampache_tools\aacplusenc - - %SAMPLE%"<br>
</code></pre></li></ul>

Remember to save your changes!<br>
<br>
<h2>Step 3: Change your Ampache Settings ##

> WARNING: Incorrect configuration of these settings will cause the streaming to fail.

  1. Next load your Ampache Web interface as the Administrator
  1. Select the "Admin" menu and chose "Streaming" under the "Server Config" section
  1. Modify it to:
    * Type of Playback - "Stream"
    * Rate Limit - any, but default 8192 should be fine
    * Transcode Bitrate - 48
    * Transcoding - Default
  1. Make sure you check "Apply to All"

## Step 4: (Optional) Fix Song Clipping ##
Because aacplusenc doesn't create a file with a constant bitrate it can break the math Ampache uses to determine the end of a stream.  If you're experiencing songs having the last few seconds cut off here is a potential solution.

I'd wait a few days and see if you notice an issue before doing this.

Edit  **/lib/class/stream.class.php** and look for this line (656 in Ampache 3.5.4):

```
$sample_ratio = $sample_rate/($song->bitrate/1000);
```

Change it to this:
```
if ($song->type == 'aacp')
{
    $sample_ratio = ($sample_rate+3)/($song->bitrate/1000);
}
else
{
    $sample_ratio = $sample_rate/($song->bitrate/1000);
}
```

# Troubleshooting #

---

## Enable Logging ##
[Enable Ampache Logging](http://ampache.org/wiki/support#enabling_logging)
## Run Command Outside of Ampache ##
Try streaming a file and look for the command Ampache generates in the log.

Copy that command and change the last command in the pipe to output to a file.
> Example:  mp3splt -qnf 'C:\Music\test.mp3' 00.00 03.56 -o - | lame --mp3input -S --decode - - | aacplusenc - test.aacp 48

# Known Issues #

---

  1. Bitrates higher then 48 are not supported by aacplusenc, but this encoder with the AAC+ format provides easily the same quality product as a 96 kbps MP3.
  1. It will fail on mono files.
  1. The flash player included with Ampache cannot play AAC+
  1. webOS cannot seek within a track when using AAC+
  1. aacplusenc supports only 32000, 44100 and 48000 Hz files

# References #

---

[ihooten's Precentral Post](http://forums.precentral.net/showthread.php?p=2423515&posted=1#post2423018)<br>
<a href='http://ampache.org/forums/viewtopic.php?f=2&t=3067'>Ampache.org AAC+ Discussion</a><br>
<a href='http://tech.poojanblog.com/blog/unix-linux/setting-up-aacplusenc-with-ampache/'>Poojan's Tech Blog - Setting up aacplusenc with Ampache</a>