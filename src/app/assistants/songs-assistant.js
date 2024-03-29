/*
 Copyright (c) Ampache Mobile
 All rights reserved.
 This file is part of Ampache Mobile.
 Ampache Mobile is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 Ampache Mobile is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 along with Ampache Mobile.  If not, see <http://www.gnu.org/licenses/>.
 */

var SongSortType = {
    "alpha": 0,
    "artist": 1,
    "album": 2,
    "track": 3
};

SongsAssistant = Class.create({

    initialize: function(params) {
        this.SceneTitle = params.SceneTitle;
        this.Type = params.Type;
        this.Item = params.Item;

        this.Playlist_id = params.Playlist_id;
        this.Album_id = params.Album_id;
        this.Artist_id = params.Artist_id;
        this.Expected_items = params.Expected_items;

        this.SingleAlbum = params.SingleAlbum;

        if ((this.Type === "recent") || (this.Type === "random") || (this.Type === "playlist") || (this.Type === "all-songs") || (this.Type === "search") || (this.Type === "search-global") || (this.Type === "genre") || this.Type === "artist-songs") {
            this.DisplayAlbumInfo = true;
        }

        if(params.FromDate)
        {
            this.FromDate = params.FromDate;
        }
        
         if(params.ToDate)
        {
            this.ToDate = params.ToDate;
        }

        if (params.Genre_id) {
            this.Genre_id = params.Genre_id;
        }

        if (params.Search) {
            this.Search = params.Search;
        }

        this.itemsHelper = new ItemsHelper();

        AmpacheMobile.clickedLink = false;
        
        
        this.sortType = SongSortType.track;
        this.sortOrder = SortOrder.descending;
        
    },

    setup: function() {

        var title = this.controller.get('title');
        title.innerHTML = this.SceneTitle;

        //*********************************************************************************
        //Setup Sort List
        var template = 'songs/listitem';

        if ((this.DisplayAlbumInfo === true) && (this.Type === "artist-songs")) {
            template = 'songs/listitem_w_artist_simple';
        } else if (this.DisplayAlbumInfo === true) {
            template = 'songs/listitem_w_artist';
        }

        var attributes = {
            filterFunction: this.itemsHelper.FilterList.bind(this.itemsHelper),
            itemTemplate: template,
            hasNoWidgets:true
            
            //dividerTemplate: 'artist-albums/divider',
            //dividerFunction: this.dividerFunc.bind(this),
        };

        if(this.Type==="random")
        {
            this.grabSize = this.Expected_items;
            attributes.addItemLabel = "Grab " + this.grabSize + " More Songs";
        }

        this.listModel = {
            disabled: false,
            items: this.itemsHelper.ItemsList
        };
        this.controller.setupWidget('songsList', attributes, this.listModel);
        


        //*********************************************************************************************************
        // Items Helper
        var params = {
            controller: this.controller,
            //TurnOffSpinner: this.TurnOffSpinner.bind(this),
            filterList: this.controller.get('songsList'),
            getItemsCallback: this.GetSongs.bind(this),
            numItemsDisplay:this.controller.get("numSongs"),
            listModel: this.listModel,
            //progressModel: this.songLoadModel,
            onLoadingFinished:this.songsLoadingFinished.bind(this),
            onFilter:this.onFilter.bind(this),
            fetchLimit: AmpacheMobile.FetchSize,
            ExpectedItems: this.Expected_items,
            SortFunction: null,
            MatchFunction: this.IsMatch/*,
            IndexBusted: (this.Type === "search-global") ? true: false
*/
        };
        this.itemsHelper.setup(params);

        this.controller.setupWidget(Mojo.Menu.appMenu, StageAssistant.appMenuAttr, StageAssistant.appMenuModel);

        //**********************************************************************
        // Events
        this.shuffleHandler = this.handleShuffleAll.bindAsEventListener(this);
        Mojo.Event.listen(this.controller.get('shuffleAll'), Mojo.Event.tap, this.shuffleHandler);

        this.listTapHandler = this.listTapHandler.bindAsEventListener(this);
        Mojo.Event.listen(this.controller.get('songsList'), Mojo.Event.listTap, this.listTapHandler);

        this.holdHandler = this.listHeld.bindAsEventListener(this);
        Mojo.Event.listen(this.controller.get('songsList'), Mojo.Event.hold, this.holdHandler);
        
        this.header = this.controller.get('header');
        this.sortSelector = this.sortSelect.bindAsEventListener(this);
        Mojo.Event.listen(this.header, Mojo.Event.hold, this.sortSelector);
        
        this.jumpSelector = this.jumpSelect.bindAsEventListener(this);
        Mojo.Event.listen(this.header, Mojo.Event.tap, this.jumpSelector);
        
        
        if(this.Type==="random")
        {
            this.listAddHandler = this.listAddHandler.bindAsEventListener(this);
            Mojo.Event.listen(this.controller.get('songsList'), Mojo.Event.listAdd, this.listAddHandler);
        }
        
        
    },

    cleanup: function(event) {
        Mojo.Event.stopListening(this.controller.get('songsList'), Mojo.Event.listTap, this.listTapHandler);
        Mojo.Event.stopListening(this.controller.get('shuffleAll'), Mojo.Event.tap, this.shuffleHandler);
        Mojo.Event.stopListening(this.controller.get('songsList'), Mojo.Event.hold, this.holdHandler);
        Mojo.Event.stopListening(this.header, Mojo.Event.tap, this.jumpSelector);
        Mojo.Event.stopListening(this.header, Mojo.Event.hold, this.sortSelector);
        
        if(this.listAddHandler)
        {
            Mojo.Event.stopListening(this.controller.get('songsList'), Mojo.Event.listAdd, this.listAddHandler);    
        }
        
        this.itemsHelper.cleanup();
        this.itemsHelper = null;
    },

    findSongId: function(event) {
        var element = event.srcElement;
        i = 0;
        while ((!element.id.match("_song")) && i < 100) {
            element = element.parentElement;
            i++;
        }
        if (i === 100) {
            return - 1;
        }

        idStr = element.id.split("_")[0];
        id = parseInt(idStr, 10);
        return id;
    },

    findSong: function(songId) {
        for (i = 0; i < this.itemsHelper.ItemsList.length; i++) {
            if (Number(this.itemsHelper.ItemsList[i].id) === Number(songId)) {
                return this.itemsHelper.ItemsList[i];
            }
        }
        return null;
    },

    heldPending: false,
    listHeld: function(event) {
        this.heldPending = true;
        id = this.findSongId(event);
        if (id === -1) {
            return;
        }
        song = this.findSong(id);

        if (song) {
            var i = 0;
            var filteredCmd = [];
            song._this = this;
            song._event = event;

            filteredCmd[i++] = {
                label: "Play " + song.title,
                command: "play-justone"
            };

            if (AmpacheMobile.audioPlayer.hasPlayList === true) {

                filteredCmd[i++] = {
                    label: "Enqueue " + song.title,
                    command: "enqueue-justone"
                };
            }

            this.controller.popupSubmenu({
                onChoose: this.popupHandler.bind(song),
                placeNear: event.srcElement,
                items: filteredCmd
            });
        }
        else
        {
            this.heldPending = false;
        }
        
        //Mojo.Log.info("listHeld " + song.title);
    },

    handleCommand: function(event) {
        Mojo.Log.info("handleCommand");
        this.itemsHelper.handleCommand(event);
    },

    holdEvent: function(event) {
        event.stop();
        //alert(event.count);
    },

    pushArtist: function(id) {
        //alert(id);
    },

    GetSongs: function(callback, offset, limit) {

        var params = {};
        params.CallBack = callback;
        params.offset = offset;
        params.limit = limit;
        params.FromDate = this.FromDate;
        params.ToDate = this.ToDate;
        
        if (this.Type === "recent") {
            this.itemsHelper.ExpectedItems = AmpacheMobile.ampacheServer.songs;
            
            AmpacheMobile.ampacheServer.GetSongs(params);
        }
        else if (this.Type === "random") {
            this.itemsHelper.fetchLimit = 1;
            var random = Math.floor(Math.random() * parseInt(AmpacheMobile.ampacheServer.songs, 10));
            params.offset = random;
            params.limit = 1;
            AmpacheMobile.ampacheServer.GetSongs(params);
        } else if (this.Type === "playlist") {
            this.itemsHelper.ExpectedItems = this.Item.items;
            params.PlayListID = this.Playlist_id;
            AmpacheMobile.ampacheServer.GetSongs(params);
        } else if (this.Type === "album") {
            if (this.Item) {
                this.itemsHelper.ExpectedItems = this.Item.tracks;
            }
            params.AlbumId = this.Album_id;
            AmpacheMobile.ampacheServer.GetSongs(params);
        } else if ((this.Type === "all-songs") || (this.Type === "search")) {
            this.itemsHelper.ExpectedItems = AmpacheMobile.ampacheServer.songs;
            params.search = this.Search;
            AmpacheMobile.ampacheServer.GetSongs(params);
        } else if ((this.Type === "artist-songs")||(this.Type === "artist-songs-single-album")) {

            this.itemsHelper.ExpectedItems = this.Expected_items;
            params.ArtistId = this.Artist_id;
            AmpacheMobile.ampacheServer.GetSongs(params);
        } else if (this.Type === "search-global") {
            this.itemsHelper.ExpectedItems = AmpacheMobile.ampacheServer.songs;
            params.search = this.Search;
            params.global_search = true;
            AmpacheMobile.ampacheServer.GetSongs(params);
        } else if (this.Type === "genre") {
            this.itemsHelper.ExpectedItems = this.Expected_items;
            params.TagID = this.Genre_id;
            AmpacheMobile.ampacheServer.GetSongs(params);
        }

    },


    onFilter:function(filtered)
    {
        if(filtered)
        {
            this.controller.get('listContainer').style.top = "160px";
        }
        else
        {
            this.controller.get('listContainer').style.top = "110px";
        }
    },

    IsMatch: function(item, filterString) {
        var matchString = item.title + " " + item.artist + " " + item.album;
        if (matchString.toLowerCase().include(filterString.toLowerCase())) {
            return true;
        }
        return false;
    },

    songsLoadingFinished:function()
    {
        if(this.SingleAlbum)
        {
            var title = this.controller.get('title');
            title.innerHTML = this.itemsHelper.ItemsList[0].album;
        }
        
        if(this.Type === "random")
        {
            var songsList =  this.controller.get("songsList");
            this.controller.get("songsList").mojo.showAddItem(true);
        }
    },
    
    listAddHandler:function()
    {
        this.itemsHelper.filterList.mojo.showAddItem(false);
        this.itemsHelper.GetMoreItems(this.grabSize);
    },

    handleShuffleAll: function(event) {
        if (this.heldPending === true) {
            return;
        }

        if (!this.itemsHelper.IsFiltered() && (AmpacheMobile.audioPlayer.hasPlayList === false)) {

            if (this.itemsHelper.ItemsList.length > 0) {
                this.controller.stageController.pushScene({
                    transition: AmpacheMobile.Transition,
                    name: "now-playing"
                },
                {
                    type: "play",
                    playList: this.itemsHelper.ItemsList,
                    startIndex: 0,
                    shuffle: true
                });
            }
        }

        else { //Filtered
            var i = 0;
            var filteredCmd = [];

            if (this.itemsHelper.IsFiltered() || (AmpacheMobile.audioPlayer.hasPlayList === true)) {
                filteredCmd[i++] = {
                    label: "Shuffle All Songs",
                    command: "play-songs-shuffle"
                };
            }

            if (this.itemsHelper.IsFiltered()) {
                //Filtered
                filteredCmd[i++] = {
                    label: "Shuffle Filtered Songs",
                    command: "play-filtered-shuffle"
                };
            }

            if (this.itemsHelper.IsFiltered() && (AmpacheMobile.audioPlayer.hasPlayList === true)) {
                filteredCmd[i++] = {
                    label: "Enqueue Filtered Shuffled",
                    command: "enqueue-filtered-shuffle"
                };
            }

            if (AmpacheMobile.audioPlayer.hasPlayList === true) {
                filteredCmd[i++] = {
                    label: "Enqueue All Shuffled",
                    command: "enqueue-songs-shuffle"
                };
            }

            this.controller.popupSubmenu({
                onChoose: this.popupHandler.bind(this),
                placeNear: $('shuffleAll'),
                items: filteredCmd
            });
        }

    },

    popupHandler: function(event) {
        if (this._this && this._this.heldPending) {
            this._this.heldPending = false;
        }

        if (event) {
            var item = this;
            var obj;
            var controller;
            if (item._this) {
                controller = item._this.controller;
                obj = item._this;
            } else {
                controller = this.controller;
                obj = this;
            }

            var playList;

            Mojo.Log.info(event);

            var type = "unknown";
            if (event.match("play")) {
                type = "play";
            } else if (event.match("enqueue")) {
                type = "enqueue";
            }

            var index = 0;
            var shuffled = false;
            if (event.match("shuffle")) {
                shuffled = true;
            }

            if ((type !== "play") && shuffled === false) {
                index = obj.FindIndex(item.id);
            } else if ((type !== "enqueue") && shuffled === false) {
                index = item._event.index;
            }

            if (type !== "unknown") {
                if (event.match("filtered")) {
                    playList = obj.itemsHelper.GetAllMatches(obj.itemsHelper.filterString);
                } else if (event.match("songs")) {
                    playList = obj.itemsHelper.ItemsList;
                } else if (event.match("justone")) {
                    playList = [];
                    playList[0] = item;
                    index = 0;
                }

            }

            if (event === "pushArtist") {
                controller.stageController.pushScene({
                    transition: AmpacheMobile.Transition,
                    name: "albums"
                },
                {
                    SceneTitle: item.artist,
                    DisplayArtistInfo: false,
                    Artist_id: item.artist_id,
                    ExpectedAlbums: parseInt(AmpacheMobile.ampacheServer.albums, 10)
                });
            } else if (event === "pushAlbum") {
                controller.stageController.pushScene({
                    transition: AmpacheMobile.Transition,
                    name: "songs"
                },
                {
                    SceneTitle: item.artist + " - " + item.album,
                    Type: "album",
                    Album_id: item.album_id,
                    Expected_items: parseInt(AmpacheMobile.ampacheServer.songs, 10),
                    Item: event.item

                });
            } else if (type !== "unknown") {
                if (playList.length !== 0) {
                    if (type === "play") {
                        controller.stageController.pushScene({
                            transition: AmpacheMobile.Transition,
                            name: "now-playing"
                        },
                        {
                            type: type,
                            playList: playList,
                            startIndex: index,
                            shuffle: shuffled
                        });
                    } else if (type === "enqueue") {
                        AmpacheMobile.audioPlayer.enqueuePlayList(playList, shuffled);
                    }
                }
            }
        }
    },

    FindIndex: function(id) {
        for (var i = 0; i < this.itemsHelper.ItemsList.length; i++) {
            if (this.itemsHelper.ItemsList[i].id === id) {
                return i;
            }
        }
        return 0;
    },

    listTapHandler: function(event) {
        Mojo.Log.info("--> listTapHandler");
        if (this.heldPending === true) {
            return;
        }

        var click_id = event.originalEvent.target.id;
        var item;
        if (click_id === "moreOptions") {
            item = event.item;
            item._this = this;
            var editCmd = [{
                label: event.item.artist,
                command: "pushArtist",
                secondaryIconPath: "images/icons/artists.png"
            },
            {
                label: event.item.album,
                command: "pushAlbum",
                secondaryIconPath: "images/icons/albums.png"
            }];

            this.controller.popupSubmenu({
                onChoose: this.popupHandler.bind(item),
                placeNear: event.originalEvent.target,
                items: editCmd
            });
        } else {
            if (!this.itemsHelper.IsFiltered() && (AmpacheMobile.audioPlayer.hasPlayList === false)) {
                var playList = this.itemsHelper.ItemsList;
                this.controller.stageController.pushScene({
                    transition: AmpacheMobile.Transition,
                    name: "now-playing"
                },
                {
                    type: "play",
                    playList: playList,
                    startIndex: event.index,
                    shuffle: false
                });
            } else {

                var i = 0;
                var filteredCmd = [];
                item = event.item;
                item._this = this;
                item._event = event;

                if (this.itemsHelper.IsFiltered() || (AmpacheMobile.audioPlayer.hasPlayList === true)) {
                    filteredCmd[i++] = {
                        label: "Play All Songs",
                        command: "play-songs"
                    };
                }

                if (this.itemsHelper.IsFiltered()) {
                    //Filtered
                    filteredCmd[i++] = {
                        label: "Play Filtered Songs",
                        command: "play-filtered"
                    };
                }

                if (this.itemsHelper.IsFiltered() && (AmpacheMobile.audioPlayer.hasPlayList === true)) {
                    filteredCmd[i++] = {
                        label: "Enqueue Filtered Songs",
                        command: "enqueue-filtered"
                    };
                }

                if (AmpacheMobile.audioPlayer.hasPlayList === true) {
                    filteredCmd[i++] = {
                        label: "Enqueue All Songs",
                        command: "enqueue-songs"
                    };
                    filteredCmd[i++] = {
                        label: "Enqueue " + event.item.title,
                        command: "enqueue-justone"
                    };
                }

                this.controller.popupSubmenu({
                    onChoose: this.popupHandler.bind(item),
                    placeNear: event.originalEvent.target,
                    items: filteredCmd
                });
            }

        }

        Mojo.Log.info("<-- listTapHandler");
    },

    dividerFunc: function(itemModel) {
        //Mojo.Log.info("--> dividerFunc");
        if (itemModel.name.charAt(0).toLowerCase() === "t") {
            if (itemModel.name.substring(0, 3).toLowerCase() === "the") {
                return itemModel.name.charAt(4);
            } else {
                return "T";
            }
        } else {
            return itemModel.name.charAt(0);
        }

        //Mojo.Log.info("--> dividerFunc");
    },

    //This function will sort the album list by year and then alphabetically within the year
    sortfunction: function(a, b) {

        var retvalue = 0;
        return retvalue;
    },

    //**************************************************************************
    // List Jump Functions
    //**************************************************************************
    jumpSelect:function(event)
    {
        var commands = [];
       
        commands[0] = {
            label: "Top",
            command: "jumpTo-top"
        };
        
        commands[1] = {
            label: "Bottom",
            command: "jumpTo-bottom"
        };
        
        this.controller.popupSubmenu({
            onChoose: this.jumpHandler.bindAsEventListener(this),
            placeNear: this.header,
            items: commands
        });
    },

    jumpHandler:function(event)
    {
        if(Object.isString(event) && event.match("jumpTo"))
        {
            filterList = this.controller.get('songsList');
            var list = filterList.mojo.getList();
            
            if(event === "jumpTo-top")
            {
                list.mojo.revealItem(0, false);
            }
            else if(event === "jumpTo-bottom")
            {
                list.mojo.revealItem(list.mojo.getLength()-1, false);
            }  
        }
    },


    //**************************************************************************
    // Sorting Functions
    //**************************************************************************
    imgEmpty: "images/player/empty.png",
    imgUp: "images/up.png",
    imgDown: "images/down.png",

    sortSelect:function(event)
    {
        var commands = [];
        
        commands[0] = {
            label: "Alpha",
            command: "doSort-alpha",
            secondaryIconPath: (this.sortType === SongSortType.alpha) ? ((this.sortOrder === SortOrder.ascending) ? this.imgUp:this.imgDown) : this.imgEmpty 
        };
        
        commands[1] = {
            label: "Album",
            command: "doSort-album",
            secondaryIconPath: (this.sortType === SongSortType.album) ? ((this.sortOrder === SortOrder.ascending) ? this.imgUp:this.imgDown) : this.imgEmpty 
        };
        
        commands[2] = {
            label: "Artist",
            command: "doSort-artist",
            secondaryIconPath: (this.sortType === SongSortType.artist) ? ((this.sortOrder === SortOrder.ascending) ? this.imgUp:this.imgDown) : this.imgEmpty 
        };
        
         commands[3] = {
            label: "Track #",
            command: "doSort-track",
            secondaryIconPath: (this.sortType === SongSortType.track) ? ((this.sortOrder === SortOrder.ascending) ? this.imgUp:this.imgDown) : this.imgEmpty 
        };
        
        this.controller.popupSubmenu({
            onChoose: this.doSort.bindAsEventListener(this),
            placeNear: this.header,
            items: commands
        });
        
        event.stop();
        event.stopPropagation();
    },
    
    doSort:function(sort)
    {
        var reSortList = false;
        
        if(this.itemsHelper.SortFunction === null)
        {
            this.itemsHelper.SortFunction = this.sortList.bind(this);
        }
        
        switch(sort)
        {
        case "doSort-track":
            if (this.sortType !== SongSortType.track) {
                this.sortType = SongSortType.track;
                this.sortOrder = SortOrder.descending;
                reSortList = true;
            }
            else
            {
                this.sortOrder = this.sortOrder * -1;
                reSortList = true;
            }
            break;
        case "doSort-alpha":
            if (this.sortType !== SongSortType.alpha) {
                this.sortType = SongSortType.alpha;
                this.sortOrder = SortOrder.descending;
                reSortList = true;
            }
            else
            {
                this.sortOrder = this.sortOrder * -1;
                reSortList = true;
            }
            break;
        case "doSort-album":
            if (this.sortType !== SongSortType.album) {
                this.sortType = SongSortType.album;
                this.sortOrder = SortOrder.descending;
                reSortList = true;
            }
            else
            {
                this.sortOrder = this.sortOrder * -1;
                reSortList = true;
            }
            break;
        case "doSort-artist":
            if (this.sortType !== SongSortType.artist) {
                this.sortType = SongSortType.artist;
                this.sortOrder = SortOrder.descending;
                reSortList = true;
            }
            else
            {
                this.sortOrder = this.sortOrder * -1;
                reSortList = true;
            }
            break;
        }
        
        
        if (reSortList)
        {
            this.itemsHelper.ReSortList();
        }
    },

    formatTrack:function(track)
    {
        var fmtTrack = "000000";
        _track = track.toString();
        fmtTrack = fmtTrack.substring(0, fmtTrack.length - _track.length);
        return fmtTrack+_track;
    },

    sortList: function(a, b) {
        switch (this.sortType) {
        case SongSortType.track:
            return (this.sortAlpha(parseInt(a.track,10), parseInt(b.track,10)) * this.sortOrder);
            //break;
        case SongSortType.album:
            
            return (this.sortAlpha(a.album.toLowerCase()+this.formatTrack(a.track), b.album.toLowerCase()+this.formatTrack(b.track)) * this.sortOrder);
            //break;
        case SongSortType.artist:
            return (this.sortAlpha(a.artist.toLowerCase()+a.album.toLowerCase()+this.formatTrack(a.track), b.artist.toLowerCase()+ b.album.toLowerCase()+this.formatTrack(b.track)) * this.sortOrder);
            //break;
        case SongSortType.alpha:
            return (this.sortAlpha(a.title.toLowerCase(), b.title.toLowerCase()) * this.sortOrder);
            //break;
        }
        return 0;
    },

    sortAlpha: function(a, b) {
        if (a === b) {
            return 0;
        }

        if (a < b) {
            return - 1;
        } else {
            return 1;
        }
    },
    
    ready: function(event) {
        this.controller.get("songsList").mojo.showAddItem(false);
    },

    activate: function(event) {
        this.itemsHelper.Activate();
        
    },

    deactivate: function(event) {
        this.itemsHelper.Deactivate();
    }

});