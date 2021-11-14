export function randomemail() {
    var email ="";
    var possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            
    for (var i=0; i<10; i++)
    email += possible.charAt(Math.floor(Math.random() * possible.length));

    const rndemail = email + '@gmail.com';
    return rndemail;
}