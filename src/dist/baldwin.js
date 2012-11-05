var Baldwin = Baldwin || {};

(function(B, $){
  B.stations = [
    { name: '30th Street Station', lat: 39.95659111, lng: -75.18178675 },
    { name: '49th St', lat: 39.94361687, lng: -75.21649208 },
    { name: 'Airport Terminal A', lat: 39.8759939, lng: -75.24673065 },
    { name: 'Airport Terminal B', lat: 39.87640912, lng: -75.24463679 },
    { name: 'Airport Terminal C-D', lat: 39.87728095, lng: -75.24170988 },
    { name: 'Airport Terminal E-F', lat: 39.87901018, lng: -75.24008567 },
    { name: 'Allegheny', lat: 40.00379026, lng: -75.16538557 },
    { name: 'Allen Lane', lat: 40.05746205, lng: -75.19482261 },
    { name: 'Ambler', lat: 40.15369729, lng: -75.22485213 },
    { name: 'Angora', lat: 39.94485782, lng: -75.2383298 },
    { name: 'Ardmore', lat: 40.00828854, lng: -75.29029326 },
    { name: 'Ardsley', lat: 40.11453969, lng: -75.15298222 },
    { name: 'Bala', lat: 40.00099317, lng: -75.22774787 },
    { name: 'Berwyn', lat: 40.04800619, lng: -75.44241046 },
    { name: 'Bethayres', lat: 40.11652678, lng: -75.06872079 },
    { name: 'Bridesburg', lat: 40.01075634, lng: -75.06990796 },
    { name: 'Bristol', lat: 40.1048283, lng: -74.85488003 },
    { name: 'Bryn Mawr', lat: 40.02190253, lng: -75.31587634 },
    { name: 'Carpenter', lat: 40.05091928, lng: -75.19168393 },
    { name: 'Chalfont', lat: 40.28774619, lng: -75.21018622 },
    { name: 'Chelten Avenue', lat: 40.02997366, lng: -75.18125012 },
    { name: 'Cheltenham', lat: 40.05749165, lng: -75.09303106 },
    { name: 'Chester TC', lat: 39.84947229, lng: -75.3600673 },
    { name: 'Chestnut Hill East', lat: 40.08096872, lng: -75.20730904 },
    { name: 'Chestnut Hill West', lat: 40.07679752, lng: -75.20793955 },
    { name: 'Churchmans Crossing', lat: 39.695, lng: -75.6725 },
    { name: 'Claymont', lat: 39.79765605, lng: -75.45221329 },
    { name: 'Clifton-Aldan', lat: 39.92664514, lng: -75.29029494 },
    { name: 'Colmar', lat: 40.26823704, lng: -75.2545036 },
    { name: 'Conshohocken', lat: 40.07203147, lng: -75.3085622 },
    { name: 'Cornwells Heights', lat: 40.07183544, lng: -74.95180347 },
    { name: 'Crestmont', lat: 40.1333336, lng: -75.11872828 },
    { name: 'Croydon', lat: 40.09365342, lng: -74.90680468 },
    { name: 'Crum Lynne', lat: 39.87182054, lng: -75.33084192 },
    { name: 'Curtis Park', lat: 39.90798651, lng: -75.26489991 },
    { name: 'Cynwyd', lat: 40.00673305, lng: -75.23189898 },
    { name: 'Darby', lat: 39.91297743, lng: -75.25486242 },
    { name: 'Daylesford', lat: 40.04284953, lng: -75.46060586 },
    { name: 'Delaware Valley College', lat: 40.29727119, lng: -75.16174609 },
    { name: 'Devon', lat: 40.04728894, lng: -75.42285931 },
    { name: 'Downingtown', lat: 40.00213025, lng: -75.71072323 },
    { name: 'Doylestown', lat: 40.30605252, lng: -75.13075467 },
    { name: 'East Falls', lat: 40.01135292, lng: -75.19207943 },
    { name: 'Eastwick Station', lat: 39.89167828, lng: -75.24504468 },
    { name: 'Eddington', lat: 40.08308499, lng: -74.93349092 },
    { name: 'Eddystone', lat: 39.85730113, lng: -75.34165243 },
    { name: 'Elkins Park', lat: 40.07121467, lng: -75.12775302 },
    { name: 'Elm St', lat: 40.12160651, lng: -75.34452691 },
    { name: 'Elwyn Station', lat: 39.90787569, lng: -75.41119721 },
    { name: 'Exton', lat: 40.01934025, lng: -75.62171721 },
    { name: 'Fern Rock TC', lat: 40.04101592, lng: -75.13480019 },
    { name: 'Fernwood', lat: 39.93961074, lng: -75.25573825 },
    { name: 'Folcroft', lat: 39.90043874, lng: -75.27983605 },
    { name: 'Forest Hills', lat: 40.12776867, lng: -75.02090615 },
    { name: 'Ft Washington', lat: 40.13580328, lng: -75.21252708 },
    { name: 'Fortuna', lat: 40.2595198, lng: -75.26625887 },
    { name: 'Fox Chase', lat: 40.07635744, lng: -75.08330545 },
    { name: 'Germantown', lat: 40.03787889, lng: -75.17186194 },
    { name: 'Gladstone', lat: 39.93268839, lng: -75.28210048 },
    { name: 'Glenolden', lat: 39.89629293, lng: -75.2901975 },
    { name: 'Glenside', lat: 40.10129842, lng: -75.15376395 },
    { name: 'Gravers', lat: 40.07742056, lng: -75.201899 },
    { name: 'Gwynedd Valley', lat: 40.18485158, lng: -75.25688919 },
    { name: 'Hatboro', lat: 40.17630721, lng: -75.10269951 },
    { name: 'Haverford', lat: 40.01401159, lng: -75.3002593 },
    { name: 'Highland Ave', lat: 40.0702929, lng: -75.21115874 },
    { name: 'Highland', lat: 39.83377122, lng: -75.39301848 },
    { name: 'Holmesburg Jct', lat: 40.03251064, lng: -75.02397846 },
    { name: 'Ivy Ridge', lat: 40.03412761, lng: -75.23542184 },
    { name: 'Jenkintown-Wyncote', lat: 40.09344768, lng: -75.13791805 },
    { name: 'Langhorne', lat: 40.16063066, lng: -74.91311114 },
    { name: 'Lansdale', lat: 40.24291744, lng: -75.2848875 },
    { name: 'Lansdowne', lat: 39.93724688, lng: -75.2714049 },
    { name: 'Lawndale', lat: 40.05139465, lng: -75.10342402 },
    { name: 'Levittown', lat: 40.13954501, lng: -74.81766996 },
    { name: 'Link Belt', lat: 40.2738944, lng: -75.24679762 },
    { name: 'Main St', lat: 40.1172722, lng: -75.34853794 },
    { name: 'Malvern', lat: 40.03638033, lng: -75.51554333 },
    { name: 'Manayunk', lat: 40.02676803, lng: -75.22475825 },
    { name: 'Marcus Hook', lat: 39.82154838, lng: -75.41956843 },
    { name: 'Market East', lat: 39.95244491, lng: -75.1570276 },
    { name: 'Meadowbrook', lat: 40.11137064, lng: -75.09251482 },
    { name: 'Media', lat: 39.91425949, lng: -75.39480281 },
    { name: 'Melrose Park', lat: 40.05947387, lng: -75.1291347 },
    { name: 'Merion', lat: 39.99753427, lng: -75.25159385 },
    { name: 'Miquon', lat: 40.05858374, lng: -75.26631604 },
    { name: 'Morton', lat: 39.90794418, lng: -75.32826039 },
    { name: 'Mt Airy', lat: 40.06522594, lng: -75.19111758 },
    { name: 'Moylan-Rose Valley', lat: 39.90593665, lng: -75.3880317 },
    { name: 'Narberth', lat: 40.00494411, lng: -75.26157745 },
    { name: 'Neshaminy Falls', lat: 40.14688033, lng: -74.96217092 },
    { name: 'New Britain', lat: 40.29744406, lng: -75.1796981 },
    { name: 'Newark', lat: 39.669686, lng: -75.753513 },
    { name: 'Noble', lat: 40.10435615, lng: -75.12450373 },
    { name: 'Norristown TC', lat: 40.11268697, lng: -75.34409403 },
    { name: 'North Broad St', lat: 39.99395669, lng: -75.1545566 },
    { name: 'North Hills', lat: 40.11207362, lng: -75.1696084 },
    { name: 'North Philadelphia', lat: 39.997228, lng: -75.15526777 },
    { name: 'North Wales', lat: 40.21433463, lng: -75.27732797 },
    { name: 'Norwood', lat: 39.89127803, lng: -75.30221247 },
    { name: 'Olney', lat: 40.03276406, lng: -75.12365105 },
    { name: 'Oreland', lat: 40.11855788, lng: -75.18462877 },
    { name: 'Overbrook', lat: 39.98985205, lng: -75.24996444 },
    { name: 'Paoli', lat: 40.04287237, lng: -75.4838125 },
    { name: 'Penllyn', lat: 40.16967237, lng: -75.24401047 },
    { name: 'Pennbrook', lat: 40.2300939, lng: -75.28174637 },
    { name: 'Philmont', lat: 40.12190028, lng: -75.04379407 },
    { name: 'Primos', lat: 39.9217552, lng: -75.2982056 },
    { name: 'Prospect Park', lat: 39.88803549, lng: -75.30937268 },
    { name: 'Queen Lane', lat: 40.02326209, lng: -75.17799356 },
    { name: 'Radnor', lat: 40.04476037, lng: -75.35957406 },
    { name: 'Ridley Park', lat: 39.8805471, lng: -75.3218703 },
    { name: 'Rosemont', lat: 40.02814535, lng: -75.32733432 },
    { name: 'Roslyn', lat: 40.1209511, lng: -75.13416969 },
    { name: 'Rydal', lat: 40.10742081, lng: -75.11066646 },
    { name: 'Ryers', lat: 40.06367319, lng: -75.08675374 },
    { name: 'Secane', lat: 39.9156823, lng: -75.30982044 },
    { name: 'Sedgwick', lat: 40.06279341, lng: -75.18521115 },
    { name: 'Sharon Hill', lat: 39.90414972, lng: -75.27140551 },
    { name: 'Somerton', lat: 40.13065781, lng: -75.01206364 },
    { name: 'Spring Mill', lat: 40.07417324, lng: -75.28606117 },
    { name: 'Ste. Davids', lat: 40.04401071, lng: -75.37344821 },
    { name: 'Ste. Martins', lat: 40.06577294, lng: -75.20457894 },
    { name: 'Stenton', lat: 40.06049717, lng: -75.17883729 },
    { name: 'Strafford', lat: 40.04959818, lng: -75.40375079 },
    { name: 'Suburban Station', lat: 39.95419947, lng: -75.167394 },
    { name: 'Swarthmore', lat: 39.90221294, lng: -75.35106039 },
    { name: 'Tacony', lat: 40.02319294, lng: -75.03909148 },
    { name: 'Temple U', lat: 39.98165072, lng: -75.14943172 },
    { name: 'Thorndale', lat: 39.99294421, lng: -75.76294621 },
    { name: 'Torresdale', lat: 40.05443906, lng: -74.98439918 },
    { name: 'Trenton', lat: 40.21851345, lng: -74.75389241 },
    { name: 'Trevose', lat: 40.14017821, lng: -74.98279 },
    { name: 'Tulpehocken', lat: 40.03514156, lng: -75.1868932 },
    { name: 'University City', lat: 39.94782901, lng: -75.19032549 },
    { name: 'Upsal', lat: 40.04240674, lng: -75.19011135 },
    { name: 'Villanova', lat: 40.03872634, lng: -75.34224805 },
    { name: 'Wallingford', lat: 39.9036166, lng: -75.37172093 },
    { name: 'Warminster', lat: 40.19645556, lng: -75.08783473 },
    { name: 'Washington Lane', lat: 40.05109696, lng: -75.17165484 },
    { name: 'Wayne Station', lat: 40.04574256, lng: -75.38728332 },
    { name: 'Wayne Jct', lat: 40.02250001, lng: -75.16003996 },
    { name: 'West Trenton', lat: 40.25725484, lng: -74.81536881 },
    { name: 'Whitford', lat: 40.01461352, lng: -75.63843766 },
    { name: 'Willow Grove', lat: 40.14374636, lng: -75.11440735 },
    { name: 'Wilmington', lat: 39.7367953, lng: -75.55100441 },
    { name: 'Wissahickon', lat: 40.01658835, lng: -75.21017439 },
    { name: 'Wissinoming', lat: 40.01459276, lng: -75.05596595 },
    { name: 'Wister', lat: 40.03613833, lng: -75.16157866 },
    { name: 'Woodbourne', lat: 40.19088551, lng: -74.89095217 },
    { name: 'Wyndmoor', lat: 40.07348169, lng: -75.19690059 },
    { name: 'Wynnefield Avenue', lat: 39.99029073, lng: -75.22568614 },
    { name: 'Wynnewood', lat: 40.00273604, lng: -75.27310116 },
    { name: 'Yardley', lat: 40.23510917, lng: -74.83097682 }
  ];


})(Baldwin, jQuery);
var Baldwin = Baldwin || {};

(function(B, $){
  // Collection for all of the trips (start and end stations)
  B.RouteList = Backbone.Collection.extend({
    localStorage: new Store('baldwin-route-list'),

    setPosition: function(position) {
      var p = {
        lat: parseFloat(position.coords.latitude.toFixed(4)),
        lng: parseFloat(position.coords.longitude.toFixed(4))
      };

      if (!_.isEqual(this.position, p)) {
        this.position = p;
        this.sort({silent: true});
        this.trigger('sort');
      }
    },

    initialize: function() {
      // Get the current location
      if(navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(_.bind(this.setPosition, this));
      }
    },

    comparator: function(route) {
      var aSq, bSq, c;

      // If current location has been set, sort the closest start station
      // to the top.
      if (this.position) {
        // Thanks Pythagoras!
        aSq = Math.pow(this.position.lat - route.get('start').lat, 2),
        bSq = Math.pow(this.position.lng - route.get('start').lng, 2);
        c = Math.sqrt(aSq + bSq);

        return c;
      } else {
        // Otherwise, use the default order
        return 0;
      }
    }
  });

  // View for a list of trips
  B.RouteListView = Backbone.View.extend({
    tagName: 'ol',

    attributes: {
      'class': 'unstyled'
    },

    initialize: function(){
      this.collection.on('reset', this.render, this);
      this.collection.on('add', this.add, this);
      this.collection.on('remove', this.remove, this);
      this.collection.on('sort', this.sort, this);

      this.routeViews = {};
    },

    render: function(){
      this.routeViews = {};

      // Empty the list first
      this.$el.empty();
      if (this.collection.size() === 0) {
        this.$el.closest('.results-box').addClass('empty');
      } else {
        this.collection.each(function(model){
          this.add(model);
        }, this);
      }

      return this;
    },

    remove: function(model) {
      this.routeViews[model.cid].remove();
      delete this.routeViews[model.cid];

      if (this.collection.size() === 0) {
        this.$el.closest('.results-box').addClass('empty');
      }
    },

    add: function(model, collection, options) {
      this.$el.closest('.results-box').removeClass('empty');
      this.routeViews[model.cid] = new B.RouteView({ model: model });

      if(options && options.index === 0) {
        this.$el.prepend(this.routeViews[model.cid].render().$el);
      } else if(options && options.index > 0) {
        this.$('.trip-group:nth-child(' + options.index + ')')
          .after(this.routeViews[model.cid].render().$el);
      } else {
        this.$el.append(this.routeViews[model.cid].render().$el);
      }
    },

    sort: function() {
      this.collection.each(function(model){
        this.routeViews[model.cid].$el.appendTo(this.$el);
      }, this);
    }
  });

  B.RouteView = Backbone.View.extend({
    tagName: 'li',
     attributes: {
      'class': 'trip-group'
    },
    events: {
      'click .remove-route': 'removeRoute'
    },

    initialize: function() {
      this.$now = $('#now');
      setInterval(_.bind(this.renderTrips, this), 30000);
    },

    render: function() {
      this.$el.html(ich['route-template'](this.model.toJSON()));
      this.renderTrips();

      return this;
    },

    remove: function() {
      this.$el.remove();
    },

    mapRange: function(value, low1, high1, low2, high2) {
      return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    },

    renderTrips: function() {
      var self = this;

      // Set the time
      this.$now.html(moment().format('h:mm') + '<span class="am-pm">'+moment().format('A')+'</span>');

      $.ajax({
        url: 'http://www3.septa.org/hackathon/NextToArrive/',
        data: {
          req1: this.model.get('start').name,
          req2: this.model.get('end').name,
          req3: 3
        },
        dataType: 'jsonp',
        success: function(trips){
          self.$('.trip-list').empty();
          if (trips.length > 0) {
            _.each(trips, function(trip) {
              var $trip = self.renderTrip(trip);
              self.$('.trip-list').append($trip.template);
              //render pietimer
              $trip.template.find(".timer").each(function(i){
                $(this).pietimer({
                    seconds: $trip.data.mins_to_dep[i] * 60,
                    sliceColor: $trip.data.slice_color[i],
                    // map time value from a range of 0 to 60 minutes to 0 to 360 degrees
                    start: self.mapRange($trip.data.mins_to_dep[i], 0, 60, 0, 360)
                }).pietimer('start');
               });
            });
          } else {
            self.renderMessage('Sorry, no upcoming trips were found.');
          }
        },
        error: function() {
          self.renderMessage('Oops, something went wrong when our ' +
            'robots were talking to SEPTA\'s robots. Try again in a sec!');
        }
      });
    },

    parseTime: function(timeStr) {
      if (!_.isUndefined(timeStr)) {
        var now = moment();
        var time = moment(timeStr, "hhmma")
                              .month(now.month())
                              .date(now.date())
                              .year(now.year());

        //set date to tomorrow in case of rollover
        if (now.hours() > time.hours()) {
          time.add('days',1);
        }

        return {
            time: time.format('h:mm'),
            meridian: time.format('a'),
            diff: time.diff(now, 'minutes')
        };
      }
    },

    renderTrip: function(trip) {
      var data = _.extend({}, trip),
          origDelay = parseInt(data.orig_delay, 10),
          termDelay = parseInt(data.term_delay, 10),
          lateLabel = " late";

      //process times for styling and calcuation
      data.orig_departure_time = this.parseTime(data.orig_departure_time);
      data.orig_arrival_time = this.parseTime(data.orig_arrival_time);
      data.term_depart_time = this.parseTime(data.term_depart_time);
      data.term_arrival_time = this.parseTime(data.term_arrival_time);

      //default color and time to on-time departure
      data.slice_color = [];
      data.mins_to_dep = [];

        if (data.isdirect === 'false') {
          data.trip_class = 'multi-leg';
        }

        if (origDelay > 0 && origDelay < 10) {
          data.orig_alert_class = 'status-delayed';
          data.orig_delay = data.orig_delay + lateLabel;
          data.mins_to_dep.push(data.orig_departure_time.diff + origDelay);
          data.slice_color.push('#ffd71c');
        } else if (origDelay >= 10) {
          data.orig_alert_class = 'status-late';
          data.orig_delay = data.orig_delay + lateLabel;
          data.mins_to_dep.push(data.orig_departure_time.diff + origDelay);
          data.slice_color.push('#ff4328');
        } else if (isNaN(origDelay)) {
          data.orig_alert_class = 'status-ontime';
          data.slice_color.push('#45ff5d');
          data.mins_to_dep.push(data.orig_departure_time.diff);
        }

        if (!_.isUndefined(data.term_depart_time)) {
          if (termDelay > 0 && termDelay < 10) {
            data.term_alert_class = 'status-delayed';
            data.term_delay = data.term_delay + lateLabel;
            data.mins_to_dep.push(data.term_depart_time.diff + termDelay);
            data.slice_color.push('#ffd71c');
          } else if (termDelay >= 10) {
            data.term_alert_class = 'status-late';
            data.term_delay = data.term_delay + lateLabel;
            data.mins_to_dep.push(data.term_depart_time.diff + termDelay);
            data.slice_color.push('#ff4328');
          } else if (isNaN(termDelay)) {
            data.term_alert_class = 'status-ontime';
            data.slice_color.push('#45ff5d');
            data.mins_to_dep.push(data.term_depart_time.diff);
          }
        }

      return {template: ich['trip-template'](data), data: data};

    },
    renderMessage: function(message) {
      this.$('.trip-list').html(ich['message-template']({
        message: message
      }));
    },
    removeRoute: function() {
      if (window.confirm('Really delete?')) {
        this.model.destroy();
      }
    }
  });


  // View for adding a trip to the collection
  B.AddRouteView = Backbone.View.extend({
    events: {
      'submit': 'addRoute'
    },

    getAttrs: function() {
      var attrs = {};

      // Get values from the form
      _.each(this.$el.serializeArray(), function(item, i) {
        attrs[item.name] = item.value;
      });

      return attrs;
    },

    addRoute: function(evt) {
      evt.preventDefault();

      var formAttrs = this.getAttrs(),
          data = {
            start: _.find(B.stations, function(s) { return s.name === formAttrs.start; }),
            end:   _.find(B.stations, function(s) { return s.name === formAttrs.end; })
          };

      // Reset the form
      this.el.reset();

      // Save the route to local storage
      this.collection.create(data);
    }
  });

  $(function(){
    var routeCollection = new B.RouteList(),
        addRouteView = new B.AddRouteView({
          el: '#add-route-form',
          collection: routeCollection
        }),
        routeListView = new B.RouteListView({
          el: '#route-list',
          collection: routeCollection
        });

    routeCollection.fetch();

    $('.station').typeahead({source: _.pluck(B.stations, 'name') });

    // init pietimer
    $('.timer').each(function(){
      $(this).pietimer({
        seconds: 5,
        sliceColor: data.sliceColor
      }).pietimer('start');
    });
  });

})(Baldwin, jQuery);