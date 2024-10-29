const aSplit = {
    // Store the current URL directly here
    currentUrl: window.location.href,

    // Method to split and parse the URL
    everything: function () {
        return this.currentUrl.split('?');
    },

    formData: function () {
        return this.everything()[1] ? this.everything()[1].split('&') : [];
    },

    show: function (cup) {
        let result = null;
        this.formData().forEach((element) => {
            if (element.startsWith(cup)) {
                result = element
                    .split('=')[1]
                    .replace(/%40/g, "@")
                    .replace(/%2C/g, ",")
                    .replace(/\+/g, " ")
                    .replace(/%2F/g, "/")
                    .replace(/%3A/g, ":")
                    .replace(/%28/g, "(")
                    .replace(/%29/g, ")");
            }
        });
        return result;
    }
}

export default aSplit;