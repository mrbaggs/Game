module.exports = {
    gameData: {
        currentRoom: {
            room: {
                name: "Outside",
                info: "Cold and rainy",
                action: "",
                directions: [{
                    direction: "West",
                    newRoom: "room1"
                }
                ]
            }
        },
        rooms: {
            room0: {
                name: "Outside",
                directions: [{
                    direction: "West",
                    newRoom: "room1"
                }
                ]
            },
            room1: {
                name: "Foyer East",
                directions: [{
                    direction: "West",
                    newRoom: "room2"
                },
                {
                    direction: "East",
                    newRoom: "room0"
                }
                ]
            },
            room2: {
                name: "Foyer West",
                directions: [{
                    direction: "East",
                    newRoom: "room1"
                },
                {
                    direction: "South",
                    newRoom: "room5"
                },
                {
                    direction: "West",
                    newRoom: "room3"
                },{
                    direction: "Up",
                    newRoom: "room14"
                }
                ]
            },
            room3: {
                name: "Scene Dock",
                directions: [{
                    direction: "South",
                    newRoom: "room4"
                },{
                    direction: "East",
                    newRoom: "room2"
                },{
                    direction: "West",
                    newRoom: "room7"
                }
                ]
            },
            room4: {
                name: "Stage",
                directions: [{
                    direction: "North",
                    newRoom: "room3"
                },{
                    direction: "Into Pit",
                    newRoom: "room16"
                },{
                    direction: "East",
                    newRoom: "room5"
                }
                ]
            },
            room5: {
                name: "Auditorium",
                directions: [{
                    direction: "North",
                    newRoom: "room2",
                },{
                    direction: "West",
                    newRoom: "room4",
                },{
                    direction: "Into pit",
                    newRoom: "room16",
                }
                ]
            },
            room6: {
                name: "Top Auditorium ",
                directions: [{
                    direction: "West",
                    newRoom: "room5"
                },
                {
                    direction: "East",
                    newRoom: "room15"
                }
                ]
            },
            room7: {
                name: "Behind Stage",
                directions: [{
                    direction: "North",
                    newRoom: "room3"
                },{
                    direction: "South",
                    newRoom: "room4"
                },{
                    direction: "Up",
                    newRoom: "room8"
                },{
                    direction: "Down",
                    newRoom: "room16"
                }
                ]
            },
            room8: {
                name: "Dressing room floor one",
                directions: [{
                    direction: "North",
                    newRoom: "room10"
                },{
                    direction: "South",
                    newRoom: "room9"
                },{
                    direction: "Up",
                    newRoom: "room11"
                },{
                    direction: "Down",
                    newRoom: "room7"
                }
                ]
            },
            room9: {
                name: "Girls Dressing Room",
                directions: [{
                    direction: "North",
                    newRoom: "room8"
                }
                ]
            },
            room10: {
                name: "Costume and Make Up",
                directions: [{
                    direction: "South",
                    newRoom: "room8"
                }
                ]
            },
            room11: {
                name: "Dressing room floor two",
                directions: [{
                    direction: "South",
                    newRoom: "room12"
                },{
                    direction: "North",
                    newRoom: "room13"
                },{
                    direction: "Down",
                    newRoom: "room8"
                }
                ]
            },
            room12: {
                name: "Boys dressing room",
                directions: [{
                    direction: "North",
                    newRoom: "room11"
                }
                ]
            },
            room13: {
                name: "The other dressing room",
                directions: [{
                    direction: "South",
                    newRoom: "room11"
                }
                ]
            },
            room14: {
                name: "Upstairs Foyer",
                directions: [{
                    direction: "South",
                    newRoom: "room15"
                },{
                    direction: "Down",
                    newRoom: "room2"
                }
                ]
            },
            room15: {
                name: "Lighting Box",
                directions: [{
                    direction: "West",
                    newRoom: "room6"
                },{
                    direction: "North",
                    newRoom: "room14"
                }
                ]
            },
            room16: {
                name: "Orchestra Pit",
                directions: [{
                    direction: "Up",
                    newRoom: "room7"
                }
                ]
            },
        }
    }
}