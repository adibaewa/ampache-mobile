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
SearchMenuAssistant = Class.create(
{


    initialize: function()
    {
    },
    
    setup: function()
    {
        //*****************************************************************************************************
        // Setup Menu
        this.controller.setupWidget(Mojo.Menu.appMenu, StageAssistant.appMenuAttr, StageAssistant.appMenuModel);
        
        //******************************************************************************************************
        // Setup Spinner
        this.spinnerLAttrs = 
        {
            spinnerSize: 'large'
        };
        this.spinnerModel = 
        {
            spinning: false
        };
        this.controller.setupWidget('large-activity-spinner', this.spinnerLAttrs, this.spinnerModel);
        
        
        
        //*********************************************************************************************************
        //  Setup Progress Pill
        this.PPattr = 
        {
            title: "Search",
            image: 'images/SEARCH.png'
        };
        this.searchLoadModel = 
        {
            value: 1
        };
        this.controller.setupWidget('searchProgressbar', this.PPattr, this.searchLoadModel);
        
        
        //***************************************************************************************************************
        // Setup Search Field
        this.searchAttributes = 
        {
            autoFocus: true
        } // hintText: $L('Search')}
        this.searchModel = {}
        this.controller.setupWidget("search-field", this.searchAttributes, this.searchModel);
        this.controller.listen("search-field", Mojo.Event.propertyChange, this.searchTextChanged.bindAsEventListener(this));
        this.SearchField = this.controller.get("search-field");
        
        
        //*****************************************************************************************************
        // Search Event
        this.controller.get('searchArtists').observe(Mojo.Event.tap, this.searchForArtists.bindAsEventListener(this));
        this.controller.get('searchAlbums').observe(Mojo.Event.tap, this.searchForAlbums.bindAsEventListener(this));
        this.controller.get('searchSongs').observe(Mojo.Event.tap, this.searchForSongs.bindAsEventListener(this));
		this.controller.get('searchPlaylists').observe(Mojo.Event.tap, this.searchForPlaylists.bindAsEventListener(this));
        this.controller.get('searchGlobal').observe(Mojo.Event.tap, this.searchForGlobal.bindAsEventListener(this));
        
        
        this.controller.listen(this.controller.sceneElement, Mojo.Event.keypress, this.handleKeyPressEvent.bindAsEventListener(this));
    },
    
    searchText: null,
    searchTextChanged: function(event)
    {
        Mojo.Log.info("searchText Changed; value = ", event.value);
        this.searchText = event.value;
      
        
    },
    
    
    handleKeyPressEvent: function(event)
    {
        /*
		var eventModel = 
        {
            eventType: event.type,
            eventKeyCode: event.originalEvent.keyCode,
            eventChar: String.fromCharCode(event.originalEvent.keyCode)
        };
        */
		this.SetFocus();
		
		// var text = this.SearchField.mojo.getValue();
        // text += String.fromCharCode(event.originalEvent.keyCode);
		// his.SearchField.mojo.setValue(text);
        
        //var content = Mojo.View.render({template: "input/keyPress/evententry", object: eventModel});    
        //this.div.insert(content);
    },
    
    
    searchCriteria: function(numChars)
    {
        var retVal = false;
        if ((this.searchText != "") && (this.searchText != null)) 
        {
            if (this.searchText.length >= numChars) 
            {
                retVal = true;
            }
            else 
            {
                this.showDialogBox("Search", "Please enter at least " + numChars + " characters for your search.")
            }
        }
        else 
        {
            this.showDialogBox("Search", "Please enter a search string")
        }
        return retVal;
    },
    
    
    searchForAlbums: function()
    {
        if (this.searchCriteria(3)) 
        {
            var numAlbums = parseInt(AmpacheMobile.ampacheServer.albums);
            if (numAlbums != 0) 
            {
                this.controller.stageController.pushScene('albums', 
                {
                    SceneTitle: "Search Albums: " + this.searchText,
                    DisplayArtistInfo: true,
                    ExepectedAlbums: numAlbums,
                    Search: this.searchText == "" ? null : this.searchText
                });
            }
            
        }
        
        
    },
    
	
	 searchForPlaylists: function()
    {
        if (this.searchCriteria(3)) 
        {
            var numPlaylists = parseInt(AmpacheMobile.ampacheServer.playlists);
            if (numPlaylists != 0) 
            {
                this.controller.stageController.pushScene('playlists', 
                {
                    SceneTitle: "Search Playlists: " + this.searchText,
                    Search: this.searchText == "" ? null : this.searchText,
					ExpectedPlaylists: numPlaylists
                });
            }
            
        }
        
        
    },
	
    
    searchForSongs: function()
    {
    
        if (this.searchCriteria(3)) 
        {
            var numSongs = parseInt(AmpacheMobile.ampacheServer.songs);
            this.controller.stageController.pushScene('songs', 
            {
                SceneTitle: "Search: Songs",
                Type: "search",
                SceneTitle: "Search Albums: " + this.searchText,
                DisplayArtistInfo: true,
                ExepectedSongs: numSongs,
                
                Search: this.searchText == "" ? null : this.searchText
            
            });
        }
        
    },
    
    
    searchForGlobal: function()
    {
    
        if (this.searchCriteria(4)) 
        {
            var numSongs = parseInt(AmpacheMobile.ampacheServer.songs);
            this.controller.stageController.pushScene('songs', 
            {
                SceneTitle: "Search: Songs",
                Type: "search-global",
                SceneTitle: "Global Search: " + this.searchText,
                DisplayArtistInfo: true,
                ExepectedSongs: numSongs,
                
                Search: this.searchText == "" ? null : this.searchText
            
            });
        }
        
    },
    
    
    
    
    searchForArtists: function()
    {
        if (this.searchCriteria(3)) 
        {
            var numArtists = parseInt(AmpacheMobile.ampacheServer.artists);
            if (numArtists != 0) 
            {
                this.controller.stageController.pushScene("artists", 
                {
                
                    SceneTitle: "Search for: " + this.searchText,
                    ExpectedArtists: numArtists,
                    Search: this.searchText == "" ? null : this.searchText
                });
            }
        }
        
        
    },
    
    SetFocus: function()
    {
        this.SearchField.mojo.focus();
    },
    
    // This function will popup a dialog, displaying the message passed in.
    showDialogBox: function(title, message)
    {
        this.controller.showAlertDialog(
        {
            onChoose: this.SetFocus.bind(this),
            title: title,
            message: message,
            choices: [
            {
                label: 'OK',
                value: 'OK',
                type: 'color'
            }]
        });
    },
    
    
    
    
    
    TurnOnSpinner: function(spinnerText)
    {
        this.spinnerModel.spinning = true;
        this.controller.modelChanged(this.spinnerModel);
    },
    
    TurnOffSpinner: function()
    {
        this.spinnerModel.spinning = false;
        this.controller.modelChanged(this.spinnerModel);
    },
    
    activate: function(event)
    {
        this.controller.get("search-field").mojo.focus();
    },
    
    
    
    deactivate: function(event)
    {
    },
    
    cleanup: function(event)
    {
        this.controller.stopListening("search-field", Mojo.Event.propertyChange, this.searchTextChanged);
        
    }
    
    
    
    
})