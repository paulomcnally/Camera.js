var Config = function(){

    var self = this;

    /**
     * White list numbers
     * @type {string[]}
     */
    self.numbers = [ "+50582406543" ];

    /**
     * Email settings
     * @type {{settings: {user: string, password: string, host: string, ssl: boolean}, message: {text: string, from: string, to: string, cc: string, subject: string, attachment: {path: string, type: string, name: string}[]}}}
     */
    self.email = {

        settings: {
            user: "paulomcnally",
            password: "123456",
            host: "smtp.gmail.com",
            ssl: true
        },

        message: {
            text: "Picture from Security Camera",
            from: "Security Camera <security.camera@mcnallydevelopers.com>",
            to: "Paulo McNally <paulomcnally@gmail.com>",
            subject: "Picture from Security Camera",
            attachment:
                [
                    {path:"/home/pi/sites/camera.jpeg", type:"image/jpeg", name:"camera.jpe"}
                ]
        }

    }

}

module.exports = new Config();