'use strict';

angular.module('example', []);

angular.module('example').controller('example.controller', exampleController);

exampleController.$inject = [];

function exampleController() {
    var data = getExampleData();

    this.data = data;
};

function getExampleData() {
    return {
        "id": "577bbc324c8da93847d6c65e",
        "metrics": [
            {
            "followers": 249140,
            "activity": 370,
            "originalActivity": 307,
            "engagement": 1342,
            "reach": null,
            "extrapolated": true,
            "network": "twitter",
            "id": "65457853"
            },
            {
            "followers": 2032480,
            "activity": 5,
            "originalActivity": 5,
            "engagement": 634251,
            "reach": null,
            "extrapolated": false,
            "network": "youtube",
            "id": "UCjEPwaev8_zrpafISAPhruA"
            },
            {
            "followers": 249140,
            "activity": 370,
            "originalActivity": 307,
            "engagement": 1342,
            "reach": null,
            "extrapolated": true,
            "network": "instagram",
            "id": "65457853"
            },
            {
            "followers": 2032480,
            "activity": 5,
            "originalActivity": 5,
            "engagement": 634251,
            "reach": null,
            "extrapolated": false,
            "network": "facebook",
            "id": "UCjEPwaev8_zrpafISAPhruA"
            }
        ],
        "avatar": "\/\/pbs.twimg.com\/profile_images\/733452796897288192\/DdSMwQTh_normal.jpg",
        "description": "British Makeup artist, Black outfit aficionado, Cat lover, Blogger\/Vlogger\/Flogger\/Slogger. PressEnquiries: amy@dundascommunications.com",
        "location": "London",
        "name": "Sam Chapman",
        "profiles": [
            {
            "network": "twitter",
            "id": "65457853",
            "info": "British Makeup artist, Black outfit aficionado, Cat lover, Blogger\/Vlogger\/Flogger\/Slogger. PressEnquiries: amy@dundascommunications.com",
            "url": "http:\/\/twitter.com\/Pixiwoos",
            "image": "\/\/pbs.twimg.com\/profile_images\/733452796897288192\/DdSMwQTh_normal.jpg",
            "largeImage": "\/\/pbs.twimg.com\/profile_images\/733452796897288192\/DdSMwQTh.jpg",
            "verified": true,
            "username": "Pixiwoos",
            "location": "London",
            "realName": "Sam Chapman"
            },
            {
            "network": "youtube",
            "id": "UCjEPwaev8_zrpafISAPhruA",
            "info": "WORK WITH US: Business enq - www.gleamfutures.com\/client-contact\/pixiwoo\n\nCHECK OUT OUR FREE MAGAZINE: http:\/\/www.two-magazine.com",
            "url": "http:\/\/youtube.com\/channel\/UCjEPwaev8_zrpafISAPhruA",
            "image": "\/\/yt3.ggpht.com\/-07fpnp-KVCU\/AAAAAAAAAAI\/AAAAAAAAAAA\/lCwUSr0QEdI\/s88-c-k-no-rj-c0xffffff\/photo.jpg",
            "largeImage": "\/\/yt3.ggpht.com\/-07fpnp-KVCU\/AAAAAAAAAAI\/AAAAAAAAAAA\/lCwUSr0QEdI\/s240-c-k-no-rj-c0xffffff\/photo.jpg",
            "username": null,
            "location": null,
            "realName": "pixiwoo",
            "verified": false
            }
        ],
        "pending": [
            
        ],
        "messaging_addresses": [
            {
            "network": "email",
            "id": "sam@somedomain.ext"
            }
        ]
    }
};

