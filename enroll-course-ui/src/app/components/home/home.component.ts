import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CategoryComponent } from "../course/category/category.component";
import { PlansAndPricingComponent } from "../plans-and-pricing/plans-and-pricing.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CategoryComponent, PlansAndPricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
