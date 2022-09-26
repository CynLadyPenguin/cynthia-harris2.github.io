// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return each key in the obj with its value from the parameter
    return {
    id: id, //id's value is id
    nameFirst: nameFirst, //nameFirst's value is nameFirst
    nameLast: nameLast  //nameLast's value is nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //addContact is a function with a contact parameter
        addContact: function(contact){
            //addContact function should return contacts array with contact value pushed into it
            return contacts.push(contact);
        },
        //function findContact takes in a fullName param
        findContact: function(fullName){
            //loop through the contacts array forward
            for(let i = 0; i < contacts.length; i++){
                //if the current element's nameF and nameL is strictly equal to the input fullName
                if(contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"] === fullName){
                    //return the matching element
                    return contacts[i];
                } else {
                    //otherwise return undefined
                    return undefined;
                }
            }
        },
        //function removeContact takes in a contact as a param
        removeContact: function(contact){
            //loop forward through the contacts array
            for(let i = 0; i < contacts.length; i++){
                //if the current element matches the input contact
                if(contacts[i] === contact){
                    //remove the current element without affecting the other elements. Splice(element to remove, number of elements to remove)
                    return contacts.splice(i, 1);
                }
            }
        },
        //function printAllContactNames has no param
        printAllContactNames: function(){
            //create an empty array var to hold output
            let arr = [];
            //loop forward through the contacts array
            for(let i = 0; i < contacts.length; i++){
                //push the current element's first and last name into the empty array var. Each loop cycle will input the next first and last name
                arr.push(contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]);
            } 
            //return the array with each element joined on a new line. New line is denoted by using \n
            return arr.join("\n");
        }
    }
}
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
