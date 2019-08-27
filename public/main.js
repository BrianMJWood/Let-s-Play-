var app = new Vue({
    el: '#app',
    data: {
        users: [],
        nearbyUsers: [],
        displayUser: [],
        

    },
    methods: {
        getData() {
            var data;
            fetch("data.json", {
                method: "GET",
            }).then(function (response) {

                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            }).then(function (json) {
                data = json;

                app.users = data.users;

// Once user profile data is loaded, have this check against                

                for (i = 0; i < app.users.length; i++) {
                    if (app.users[i].city == "Barcelona") {
                        app.nearbyUsers.push(app.users[i])
                    };
                }
                app.displayUser = app.nearbyUsers[Math.floor(Math.random() * app.nearbyUsers.length)]
                                

            }).catch(function (error) {
                console.log("Request failed: " + error.message);
            });
        },
        searchUser() {
            app.displayUser = app.nearbyUsers[Math.floor(Math.random() * app.nearbyUsers.length)];
            return app.displayUser;
        },


    },
    created() {
        this.getData();
    },

});

// When searchUser() runs, I want my code to look through an array of availableUsers, choose one randomly, and then output that profile.

// availableUsers needs to be anyone that matches my city/location.

// Now I've got available users. I want to randomly pick one of them to display. 
