import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      console.log(this.reviewForm.value);
    }
  }
}
