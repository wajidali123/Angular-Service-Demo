export class contact{
    contact_name:string;
    contact_email:string;
    contact_phone:string;
    contact_subject:string;
    contact_message:string;

    constructor(contact_name,contact_email,contact_phone,contact_subject,contact_message){
        this.contact_name = contact_name;
        this.contact_email = contact_email;
        this.contact_phone = contact_phone;
        this.contact_subject = contact_subject;
        this.contact_message = contact_message;
    }
}