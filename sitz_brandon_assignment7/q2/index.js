const app = {
    data() {
        return {    
            distance: null,
            convertedDistance: 'Result',
            distances: ['cm', 'm', 'km', 'in', 'ft', 'mi'],
            units: ['cm', 'm', 'km', 'in', 'ft', 'mi'],
            selectedUnit: '',
            selectedDistance: '',
        };
    },
    methods: {
        convertDistance() {
            if (this.distance == null) {
                this.convertedDistance = 'Enter a distance to convert.';
            }
            else if (this.distance < 0 || isNaN(this.distance)) {
                this.convertedDistance = 'Invalid input.';
            }
            else {
                this.distance = parseFloat(this.distance);
                let convertToMeters = 0;

                convertToMeters = this.convertToMeters(this.distance);

                let converted = this.convert(convertToMeters);

                this.convertedDistance = converted;

            }
        },
        convertToMeters(value) {
            let meters = 0;

            for (unit of this.units){
                if(this.selectedUnit == 'cm') {
                    meters = this.distance * .01;
                }
                else if (this.selectedUnit == 'm') {
                    meters = this.distance;
                }
                else if (this.selectedUnit == 'km') {
                    meters = this.distance * 1000;
                }
                else if (this.selectedUnit == 'in') {
                    meters = this.distance / 39.37;
                }
                else if (this.selectedUnit == 'ft') {
                    meters = this.distance * .3048;
                }
                else if (this.selectedUnit == 'mi') {
                    meters = this.distance * 1609.344;
                }
            }
            return meters;
        },

        convert(value) {
            let converted = 0;

            for (distance of this.distances){
                if(this.selectedDistance == 'cm') {
                    converted = value * 100;
                }
                else if (this.selectedDistance == 'm') {
                    converted = value;
                }
                else if (this.selectedDistance == 'km') {
                    converted = value / 1000;
                }
                else if (this.selectedDistance == 'in') {
                    converted = value * 39.37;
                }
                else if (this.selectedDistance == 'ft') {
                    converted = value * 3.28084;
                }
                else if (this.selectedDistance == 'mi') {
                    converted = value * .000621371;
                }
            }
            return converted.toFixed(3) + this.selectedDistance;
        },
        // mounted() {
        //     console.log('created');
        //     this.convertDistance();
        // }
    },
};

Vue.createApp(app).mount("#distanceConversion");