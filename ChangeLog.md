## Version Information ##
### Version 0.9.6 (05/29/2010) ###
**New Features**

---

  * Dashboard
    * Displays current track, art and buffering info
    * Previous, Play, Pause and Next
    * Tap art or song info to return to app
    * Controls available from locked screen
    * Configurable in settings
**Improvements**

---

  * Button to close release notes
  * Saved search now a button on the header in the search screen
**Bug Fixes**

---

  * Filtering songs and albums lists caused text overlap
  * Stall detection tweaked further, less false positives
### Version 0.9.5 (05/11/2010) ###
**Improvements**

---

  * Navigation in App Menu, Jump to the Home and Search Screens from any Screen
  * 'Shuffle All' stays at the top of lists, no more scrolling back up for it.
  * Will prompt to restart music if you navigate away while paused, happens all the time when I get calls
  * Added Grab more items from Random lists
**Bug Fixes**

---

  * Banner Notifications showing up while App in focus
  * Stall detection always off

### Version 0.9.4 (05/03/2010) ###
**New Features**

---

  * Stored Searches
    * Save your favorite searches for quick access to your music.
    * Tap and Hold Search from the main menu for quick access.
    * Searches are stored per account.
    * Some searches can be date limited. Including Artists, Albums and Songs
    * Tap Icon to Edit, Swipe to Delete, Hold to Reorder
**Improvements**

---

  * Video Search, added video search to search options.
  * Added no items found message for empty search results.
**Bug Fixes**

---

  * Type to search in video scene broken.
  * Banner notifications didn't show up when in app but away from now playing screen.
  * Extended stall detection timer to 30 secs, was 20
  * On/Off preferences weren't being saved correctly
  * Paused now playing didn't show current time

### Version 0.9.3 (04/26/2010) ###
New Feature

---

  * Video Playback
    * Playback of Videos indexed by Amapache which webOS supports. m4v seem to work the best.
    * Using Palm Video Player for streaming playback. Launches in seperate window.
    * Ampache has no video transcoding yet, so videos must be preconverted. I've found handbreak to work best.
Bug Fixes

---

  * Delete confirmation turned off in now playing list, on now.

### Version 0.9.2 (04/21/2010) ###
Improvements

---

  * Sorting: Tap and Hold the Header on any list to bring up a sort menu. Only the Albums Sort saves its state.
  * Jump: Added Jump to Top/Bottom on Songs, Genre and Playlist screens
  * Added first time use popup
Bug Fixes

---

  * Infinite loop in now playing screen caused the app to lock up, possibly resulting in false audio stall detection.
  * Playback errors sometime broke the now playing list.
  * Fixed Check for Updates so it doesn't have to launch the browser.

### Version 0.9.1 (04/17/2010) ###

Improvements

---

  * Updates to Help Scene, including Check for Update, User Guide and App Introduction
  * Made stall/crash recovery optional, configurable in account editor. Default:On
  * Added Donate Button to About Screen
  * Tweaked stall detection for less false positives
  * Fixed formatting on account editor
Bug Fixes

---

  * Reset Stall detection when buffer loss is detected
  * Fixed orange key on search causing scene to exit
  * Fixed load albums from the genre page
  * Fixed a bug which caused the playlist and buffer ahead to die


### Version 0.9.0  (04/12/2010) ###
Note: I've switched to using the Palm App Catalog to distribute Ampache Mobile, mostly because I want to [win some money](http://palmhotapps.com/).  The application can now be installed by clicking this link from your phone... [Install](http://developer.palm.com/appredirect/?packageid=com.ampachemobile)

**New Features**

---

  * Buffer Ahead!
    * Configurable from 1 to 5 songs
    * This is true buffer ahead, using system RAM. Other solutions download to flash, which is bad for your device.
    * Intelligent buffer selection, attempts to provide seamless playback with no downloading break between tracks.
    * Many workarounds for bugs in webOS, don't think many people have attempted to use webOS in this way.
    * Auto Detection of changes in network coverage and buffer stalls
    * Auto Detection of buffers lost due to device sleep
    * I've done my best to make this stable without transcoding, but it really shines when you enable it with transcoding.
    * Settings in the Accounts Settings Page
    * Updated the error reporting to follow the new audio api
  * Artists and Albums List Caching
    * Saves a local copy of your entire albums and artists lists, load times are ridiculous!
    * Auto detects when a change to your server occurs and re-saves the lists. Note: if you have auto scanning enabled on your server this will cause the list to re-download after every scan.
    * Only applies to full Albums and Artist lists, everything else still goes against the server.
    * Updated account editor to reflect how many saved items you have
  * New Icon and Splash Screen
    * Lets face it, the old icon is kinda ugly. Thankfully forum contributor Globex has stepped up and volunteered his services and designed a new one along with anew splash screen! It still pays homage to the people at the Ampache project, aka it features their squirrel logo but I hope you agree with me, it looks a lot better on the phone. So a big thanks to [Globex Designs, Inc.](http://www.globexdesigns.com/) for the new icon.
**Improvements**

---

  * Figured out how to use the Shift and Sym Keys, updated the controls popup with changes.
  * Lowered the search character limit to 2.
  * Redesign of the Accounts Settings Page to Accommodate all the new options.
  * Added a whole more shuffle to the playlist shuffle.
  * Changed repeat list once to repeat song.
  * Banner notifications where they felt right.
  * Shuffling a list now displays the list in the order playback will occur.
  * Banner Notifications of new songs when you are looking at another app. Will not wake up screen if its asleep.
  * Go straight to songs view from artists if there is only one album

**Bug Fixes**

---

  * Fixed date selector CSS so its no longer black on black with palm-dark
  * Added work around for %20 (spaces) in song URL issue. If you have been having trouble streaming enable it in the Account Editor

### Version 0.8.5 (Beta) (03/24/2010) ###

**New Features**

---

  * Search Recent Additions
    * Find Arists, Albums and Songs recently added to your server
    * Choices include: Last Update, 1 Week, 1 Month, Custom Date
    * Tap and hold from main menu for quick access, timespan configurable in preferences
    * NOTE: This is the date files where scanned into your server, not the timestamps on the files. It will be most useful for servers that have been running awhile and have had music added periodically.
  * Theme and Text Configuration
    * Customizations preview in preferences
    * Selection of text color
    * Selection of theme, current options: none and palm-dark
  * Keyboard Commands
    * Type to Search
      * Just start typing while on the main screen and a search will start.
      * Default search type is denoted with an enter image, configurable in preferences
      * Tap Delete twice to exit.
    * Now Playing Screen
      * Previous Track: @ (Left of space bar)
      * Next Track: Period (Right of space bar)
      * Skip 15 second ahead: P (Upper Right Key)
      * Skip 15 second back: Q (Upper Left Key)
      * Toggle Play/Pause: Space Bar
      * Toggle Shuffle Mode: S
      * Toggle Repeat Mode: R
      * Toggle View: V
    * Global Commands
      * Note: Hold finger in gesture area for Meta
      * Meta + P: Preferences
      * Meta + D: Delete Now Playing
      * Meta + N: Goto Now Playing
      * Meta + [Space](Space.md): Play/Pause
  * Improving user experience
    * Release Notes
    * Help Page
    * Keyboard Commands Popup

**Improvements**

---

  * Tap and hold an Artist to skip the albums screen and go straight to all songs.
  * Many optimizations to Now Playing screen, should improve performance
  * Numerous formating fixes
  * Release Notes Link in About
  * Added time countdown to now playing playlist.
  * Added new icons to various scenes: Connection, Preferences, Accounts

**Bug Fixes**

---

  * Fixed a bug which caused buttons to not work correctly while a song was loading on the now playing screen.
  * Update to Now Playing button so it clearly shows its been pressed (turns blue).
  * Alpha Divider rendering incorrectly
  * Hold single song to play/enqueue, broke with jslint changes.
  * Enqueueing the same song more than once broke the playlist.
  * Date in "About.." was incorrect.

### Version 0.8.0 (Beta) (03/14/2010) ###
  * New Feature: Playlist view added to now playing screen.
    * Application saves last view state between sessions
    * Swipe to delete
    * Drag to reorder
    * Buffer and playback indicators
    * Tap Header to toggle view
    * Coming with Ampache 3.6, ability to save a now playing list to the server
  * New Feature: Added configuration for auto stall recovery, per account.  Default:Off
    * Turn this off if you are having issues with songs restarting
  * New Feature: List Jump: tap the header on a page with dividers to bring up a Selector to jump down in the list.  No more scrolling forever.
    * Currently on Artists and Albums Lists
    * Long lists can take awhile to populate the drop down, be patient
  * New Feature: New splash screen when app starts
  * New Feature: Volume Keys: instructs webOS that the application wants music volume, allows changing of music volume prior to starting playback of music
  * Improvement: Added drag to reorder accounts in preferences screen.
  * Improvement: Requests which result in no information from the server now display a useful message allow the user to retry the request.  Formerly these messages were mistaken as Unicode errors.
  * Improvement: Request confirmation for preferences screen when playing music
  * Improvement: About... now shows server information
  * Bug Fix: Downloading indicators broke with webOS 1.4
  * Bug Fix: Simplified AudioPlayer class due to improvements made in webOS media handling
  * Bug Fix: Fixed alpha divider in artists view.
  * Known Bug: Ampache 3.5.4 broke stream all songs.  Requested fix, slated for Ampache 3.6.  Added error message.
```
   [Note] New application name space, no longer using com.palm.ampachemobile, the API is mature enough to move to com.ampachemobile.
      o This means 0.7.0 and 0.8.0 can coexist.  Transfer account settings and delete old app.

```



### Version 0.7.0 (Beta) (10/29/2009) ###
  * New Feature: Now Playing, now playing screen will now continue playing after navigating away from the now playing page
    * Any list of songs can be enqueued onto the end of the current playlist
    * Tap and Hold a song to add just that song
    * Delete the now playing list from any scene
    * TODO: Build a playlist editor to remove items from a list
  * New Feature: Random Music
    * Shuffle all Songs NOTE: This is using an documented method from the Ampache Server and does not allow for retrieval of song information.
    * Random Album Selector cover-flow like to allow random browsing
    * Artist, Albums, Songs of the moment lists
  * New Feature: Redesign of progress indicator for loading content, works the same as the web browser and you can cancel while loading at any point.
  * New Feature: Added the ability to e-mail the xml from problem tracks with corrupted tags to enable easier debug
  * Improvement: Auto restart stalled stream after 20 seconds of stalled state.
  * Improvement: Optimized all images included in the ipk making for a much smaller download.
    * NOTE: If you are using the included backgrounds you will need to reset you settings.
  * Improvement: Modified all icons to have the same look and feel.
  * Improvement: Spinner on now playing scene is now in the command menu and not covering up the cover art.
  * Improvement: Made restarting a partially downloaded list optional, button click continues download
  * Improvement: Removed all scene transitions makes the app much faster
  * Improvement: Fixed the buffering indicator
    * Can now move the slider outside the buffered part of a song and it will start the download from the point you dropped
    * If the start of the buffer has been deleted by the audio service it will now be displayed
    * Fixed the issue where it would resize itself and make the now playing screen jump around
  * Bug Fix: Added code to remove bad characters resulting in "unicode error" on the application side


### Version 0.6.0 (Beta) (10/15/2009) ###

  * New Feature: Genre Browser
  * Performance Improvement: Entire app has been optimized using dburmans new optimizer, should make it snappier
  * Performance Improvement: Speed improvements to list loading
  * Performance Improvement: Pending Ampache Server Requests canceled when navigated away from
  * Improvement: Using real published APIs for bluetooth and headset controls
    * Headset Controls are as follows: Double Click: Next Track, Click: Play/pause, Click and Hold: Prev Track
    * Bluetooth has been updated to the new API, untested so check it out.
  * Improvement: Connection Cancel Button
  * Improvement: Artist Albums Scene allows grabbing all songs from 1 artist.
  * Improvement: Filtered songs lists now have have intelligent options. Giving you the option to play filtered songs or all songs.
  * Bug Fix: Filtered Songs list pushed to now playing fixed
  * Bug Fix: Found bug in ampache global search, added work around
  * Bug Fix: Fixed problem if you pressed next at the last item your song would fail to load
  * Bug Fix: Infinity NaN:NaN in now playing should be gone now, pesky bug




### Version 0.5.0 (Beta) (09/27/2009) ###
  * New Feature: (Global Search) should vastly improve performance if you know what you are looking for.
  * New Feature: (Dynamic Resizing) Dynamic resizing of now playing screen. Meaning support for the Palm Pixi.  Resizing during notifications. ect.
  * New Feature: (Rotation) Landscape Mode (Rotation) Default:Off
  * New Feature: (Performance Tuning) Per/Account Settings for fine tuning of performance (Recommended Usage: Make 2 accounts, one for a fast connection and one for a slow)
    * Fetch Size: Change how many items are downloaded at once from the server. Default: 300 items.  Recommended higher number for fast connection, lower number for slow connection.
    * Artist Albums Art: Moved this setting from system wide to account specific.
  * New Feature: (Quick Links) Clickable Links in Songs list for Search, Playlists, for loading Album or
  * New Feature: (Albums Sorting) Albums List is now Sortable thru App Menu current sorting choices are Alphabetical, Year, Artist.  Choice is saved.
  * Improvement: Partially loaded lists will start loading where they left off, upon navigating back to them.
  * Improvement: Made Audio player wait 500 ms before starting stream when user requests next/prev song this way if you a user is tapping next repeatedly it will not attempt to start every song as it did before.
  * Improvement: Complete rewrite of underlying code that drives list loading, should be faster && less buggy.
  * Improvement: Icons in list headers
  * Improvement: Added scrims to cover up clickable items when app is busy
  * Bug Fix: Play/Pause with Palm Headphones restarted track.  Works as expected now.
  * Bug Fix: Fixed filtering while loading on Albums and Artists.  If you attempted to filter the list while it was loading the filter would not apply to newly downloaded items.  This is now resolved.
  * Bug Fix: Fixed ping so that it pings in sync with the session timeout (~30minutes).  Previously pinged every 1 minute.  Should save on battery.
  * Bug Fix: Auto size background to fit available screen, choosing a part of a bigger image as the background isn't going to happen with current API.
  * Bug Fix: Fixed spaces in background path.
```
NOTE: Changed versioning to allow for lower number to be used for small bug fixes.
```

### Version 0.0.4 (Beta)(09/13/2009) ###
  * Feature Add: Background Selector
  * New Feature: Pause on Headphone Removal.
  * New Feature: Stream Debug Mode
  * New Feature: Now Playing Gestures
  * New Feature: Remote Control via Bluetooth
    * Left-to-Right: Previous Track (Quick Flick)
    * Right-to-Left: Next Track (Quick Flick)
    * Double Tap: Play/Pause
  * Improvement: Icons in Main Menu
  * Improvement: New Icon
  * Improvement: Now Playing Scrolling Turned off.
  * Improvement: Preferences Menu clean up.
  * Bug Fix: Stopped run away timer in the AudioPlayer (should improve battery life)
  * Bug Fix: Accidentally released with log level cranked to max (not sure what the Pre does with this).  Turned it down, likely will improve performance.
  * Bug fix: Fixed issue with "The  " in artist list.  Caused extra dividers to be displayed.


### Version 0.0.3 (Alpha)(08/30/2009) ###
  * Bug Fix: Albums with no Art were breaking XML parsing
  * Improvement: Spinnner stays in the middle after a scroll
  * Improvement: Displays Error message if you are running the wrong version of Ampache

### Version 0.0.2 (Alpha)(08/29/2009) ###
  * Feature Add: Playlist Browser (Play lists need to generated via the Ampache web interface)
  * Feature Add: Cover art in AristAlbums List (Off by default)
  * Feature Add: Better Help when things go wrong
  * Bug Fix: Shuffle All for an Individual album crashed app.
  * Improvement: UI Improvements to numerous to list.

### Version 0.0.1 (Alpha) (08/27/2009) ###
  * Initial Release
  * Album Browser (w/Search)
  * Artist Browser (w/Search)
  * In Application Now Playing Screen
    * Playlist
    * Shuffle
    * Song Buffering
  * Multiple Server/Accounts Support