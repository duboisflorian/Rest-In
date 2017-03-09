import {Pipe} from 'angular2/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
    name: 'RecherchePipe'
})
export class RecherchePipe {

    // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value, args?) {
        if (value == undefined)
            return "";  
        // ES6 array destructuring
        let [nom] = args;

        if (nom == undefined)
            throw new ReferenceError("Argument obligatoire");
        return value.filter(contact => {
            if (contact == undefined || contact.name == undefined)
                return "";
            return contact.name.toLowerCase().match(nom.toLowerCase()) ;
        });
    }

}
