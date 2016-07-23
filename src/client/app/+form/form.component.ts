import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {
    private numberData: string;
    constructor() { }
    ngOnInit() { }

    onSubmit(form: NgForm) {
        console.log(form);
        //alert(form.value.value1);
        this.numberData = form.value.value2;
        alert(this.numberData);
    }

}
